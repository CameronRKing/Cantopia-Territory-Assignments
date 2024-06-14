import { CountySvgData } from './CountySvgData';
import { sampleCountyAssignment2 } from './SampleData';
import * as Y from 'yjs'

export default function ContextReducer(context, action) {
  switch (action.type) {
    case 'initialize': {
      const ydoc: Y.Doc = action.ydoc;
      const { Managers, Territories } = action;

      const ca = ydoc.getMap('countyAssignment');
      // set territory assignments
      ydoc.transact(() => {
        Territories.forEach(terr => {
          ca.set(terr.County, terr['Account Manager'] || 0);
          context.countyAssignment[terr.County] = terr['Account Manager'] || 0;
        });
        if (!ydoc.getArray('salespeople').length) ydoc.getArray('salespeople').insert(0, Managers.slice());
      });
      context.salespeople = Managers;

      return returnContextObject();
    }
    case 'syncMapToContext': {
      let currentMap = action.ydoc.getMap('countyAssignment');

      for (const key of Object.keys(context.countyAssignment)) {
        context.countyAssignment[key] = 0;
      }
      currentMap._map.forEach((element) => {
        let countyName = element.parentSub;
        let assignment = element.content.arr[0];

        if (context.countyAssignment[countyName] !== assignment) {
          context.countyAssignment[countyName] = assignment;
        }
      });
      context.salespeople = action.ydoc.getArray('salespeople').toArray();
      return returnContextObject();
    }
    case 'salespersonSelect': {
      return {
        selectedSalesperson: action.id,
        countyAssignment: context.countyAssignment,
        salespeople: context.salespeople
      };
    }
    case 'countySelect': {
      let countyAssignmentMap = action.ydoc.getMap('countyAssignment');
      if (countyAssignmentMap.get(action.countyName) !== action.salespersonId) {
        action.ydoc.transact(() => {
          countyAssignmentMap.set(
            action.countyName,
            context.selectedSalesperson
          );
        });
        console.log(countyAssignmentMap);
      }

      return returnContextObject();
    }
    case 'clearSelectedSalesperson': {
      let countyAssignmentMap = action.ydoc.getMap('countyAssignment');
      CountySvgData.forEach((x) => {
        if (countyAssignmentMap.get(x.County) === action.idToClear) {
          action.ydoc.transact(() => {
            countyAssignmentMap.set(x.County, 0);
          });
        }
      });

      return returnContextObject();
    }
    case 'clearAllAssignments': {
      let countyAssignmentMap = action.ydoc.getMap('countyAssignment');
      CountySvgData.forEach((x) => {
        if (countyAssignmentMap.get(x.County) !== 0) {
          action.ydoc.transact(() => {
            countyAssignmentMap.set(x.County, 0);
          });
        }
      });

      return returnContextObject();
    }
    case 'randomFill': {
      let countyAssignmentMap = action.ydoc.getMap('countyAssignment');
      sampleCountyAssignment2.forEach((x) => {
        if (countyAssignmentMap.get(x.countyName) !== x.salespersonId) {
          action.ydoc.transact(() => {
            countyAssignmentMap.set(x.countyName, x.salespersonId);
          });
        }
      });

      return returnContextObject();
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }

  function returnContextObject() {
    return {
      selectedSalesperson: context.selectedSalesperson,
      countyAssignment: context.countyAssignment,
      salespeople: context.salespeople
    };
  }
}
