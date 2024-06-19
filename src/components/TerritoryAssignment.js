import '../App.css';
import React, { useState, useEffect, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { Button } from '@mui/material';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import OhioSvg from './Ohio';
import SalespersonList from './SalespersonList';
import { AppContextNew, AppContextObject } from '../data/AppContext';
import ContextReducer from '../data/ContextReducer.ts';
import Network from '../data/CountyNetwork.ts';

let ydoc = null;
let provider = null;
const gasUrl = 'https://script.google.com/macros/s/AKfycbzYOxZEVoqqCzbEdq7pJZL2TPYOqhbqz9njaYUK9AXucP4XJrZt26LqNgQ7u5eO_3sz9A/exec'


function useResolver() {
  const [prom, setProm] = useState(Promise.resolve());
  const [resolved, setResolved] = useState(true);

  React.useEffect(() => {
    setResolved(false);
    let fn = () => setResolved(true);
    prom.then(fn);
    // if the user assigns a lot of territories very quickly,
    // then state will flicker when each promise resolves
    // this method *should* cause only the final promise to resolve
    return () => fn = () => {};
  }, [prom]);

  return [setProm, resolved];
}

function TerritoryAssignment({ currentSalespeople }) {
  const [currentState, dispatch] = useReducer(ContextReducer, AppContextObject);
  const [searchParams] = useSearchParams();
  const [setPromise, resolved] = useResolver();

  const roomName = searchParams.get('room');
  const secret = searchParams.get('secret');
  const missingRoomName = roomName === null || roomName === '';

  window.ca = currentState.countyAssignment;
  
  useEffect(() => {
    if (missingRoomName) return () => {};
    if (provider && provider.roomName !== roomName) { provider.destroy(); provider = null; }
    if (!provider) {
      ydoc = new Y.Doc();
      provider = new WebrtcProvider(roomName, ydoc, {
        password: secret,
        // todo: host a signaling server somewhere
        // signaling: ['ws://localhost:4444']
      });

      ydoc.getMap('countyAssignment');
      const init = ydoc.getText('initialized');

      if (!init.toString()) {
        console.log('initializing');
        init.insert(0, 'true');
        fetch(`${gasUrl}?action=loadTerritories&docId=${roomName}&companySecret=${secret}`, { })
          .then(async res => {
            const body = await res.json();
            let { Managers, Territories } = body;
            Managers = JSON.parse(Managers);
            Territories = JSON.parse(Territories);
            
            dispatch({
              type: 'initialize',
              ydoc,
              Managers,
              Territories
            });
          });
      } else {
        dispatch({
          type: 'syncMapToContext',
          ydoc
        });
      }
    }
  }, [roomName, missingRoomName, secret]);

  if (ydoc) {
    ydoc.on('update', () => {
      dispatch({
        type: 'syncMapToContext',
        ydoc: ydoc,
      });
    });
  }

  function handleSalespersonSelect(id) {
    if (id !== currentState.selectedSalesperson) {
      dispatch({
        type: 'salespersonSelect',
        id: id,
      });
    } else {
      dispatch({
        type: 'salespersonSelect',
        id: 0,
      });
    }
  }

  function handleCountySelect(countyName) {
    const ss = currentState.selectedSalesperson;
    // empty state (do nothing) is 0; unassigned is represented as ''
    if (ss === 0) return;
    // ensure the county is adjacent to an existing territory
    // or the salesperson has yet to be assigned any county
    const adjacent = Network[countyName];
    const ca = currentState.countyAssignment;
    if (!adjacent.some(county => ca[county] === ss) && Object.values(ca).includes(ss)) {
      window.alert('Counties in an account manager\'s territory must be adjacent.');
      return;
    }
    const res = fetch(`${gasUrl}?action=saveTerritories&docId=${roomName}&companySecret=${secret}&county=${countyName}&rep=${encodeURIComponent(currentState.selectedSalesperson)}&quarter=${currentState.quarter}`)
      .then(res => res.text())
      .then(console.log);
    setPromise(res);
    // let the async action happen fully async;
    // it'll take a moment to sync to Coda, but syncing between peers can be immediate
    dispatch({
      type: 'countySelect',
      countyName: countyName,
      salespersonId: currentState.selectedSalesperson,
      ydoc: ydoc,
    });
  }

  // function handleClear(id) {
  //   if (id) {
  //     dispatch({
  //       type: 'clearSelectedSalesperson',
  //       idToClear: id,
  //       ydoc: ydoc,
  //     });
  //   } else {
  //     dispatch({
  //       type: 'clearAllAssignments',
  //       ydoc: ydoc,
  //     });
  //   }
  // }

  // function handleRandomFill() {
  //   dispatch({
  //     type: 'randomFill',
  //     ydoc: ydoc,
  //   });
  // }

  return (
    <AppContextNew.Provider value={currentState}>
      {missingRoomName ? (
        <span>
          <h2>Cantopia Territory Assignments!</h2>
          <strong>
            Provide a Query String for Room Name (Key: 'room')
            <br />
            <br />
            e.g. (.../Cantopia-Territory-Assignments/?room=
            <i>exampleRoomName</i>)
          </strong>
        </span>
      ) : (
        <>
          <div className='MainContainer'>
            <Grid container spacing={2}>
              <Grid xs={4}>
                <SalespersonList
                  currentSalespeople={currentState.salespeople}
                  onSalespersonSelect={handleSalespersonSelect}
                />
              </Grid>
              <Grid
                xs={4}
                display='flex'
                justifyContent='start'
                alignItems='start'
              >
                <OhioSvg onCountySelect={handleCountySelect} />
              </Grid>
              <Grid xs={4}></Grid>

              <Grid xs={4} display='flex' justifyContent='start'>
                <div style={{ paddingLeft: '24px' }} />
                <span style={{fontStyle: 'italic'}}>{ !resolved ? 'Syncing ...' : 'Synced with Coda' }</span>
              </Grid>
              <Grid xs={4}></Grid>
            </Grid>
          </div>
        </>
      )}
    </AppContextNew.Provider>
  );
}

export default TerritoryAssignment;
