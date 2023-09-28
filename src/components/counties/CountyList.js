import React from "react";
import County from "./County";

function CountyList({ fillColor }) {
  const OhioSvgData = [
    {
      County: "Adams",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 20.258377,42.989927 0.603,5.336 -0.571,-0.428 -0.024,-0.008 -0.337,-0.158 -0.027,-0.013 -1.074,-0.258 -0.404,-0.099 -0.014,0 -0.085,-0.009 -0.123,0.027 -0.784,0.343 -0.104,0.072 -0.077,0.126 -0.054,0.455 -0.576,0.068 -0.325,-4.985 2.776,-0.82 1.2,0.351",
    },
    {
      County: "Allen",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 11.095377,19.233927 0.17,1.294 0.29,2.257 -1.465,0.194 -1.8629999,0.068 -0.048,-0.375 -1.676,0.222 0.265,-2.313 1.118,-0.153 1.077,-0.333 -0.05,-0.379 1.083,-0.333 1.0989999,-0.149",
    },
    {
      County: "Ashland",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 27.229377,15.140927 0.536,0.856 0.646,4.16 -0.717,1.42 -1.099,0.334 -0.343,-2.209 -0.627,-0.977 -0.392,-0.88 -0.229,-1.455 -0.144,0.017 0.788,-1.068 1.581,-0.198",
    },
    {
      County: "Ashtabula",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 41.364377,2.6159263 0.734,4.48 -4.596,0.721 -0.438,-2.736 -0.279,-1.793 4.311,-2.30799998 0.268,1.63599998",
    },
    {
      County: "Athens",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 30.191377,34.498927 1.105,-0.085 2.171,1 0.173,1.708 0.432,0.536 0.951,-0.108 0.076,0.808 -0.175,0.387 -5.142,0.446 -0.087,-1.159 -0.378,0.032 -0.153,-2.312 1.118,-0.081 -0.091,-1.172",
    },
    {
      County: "Auglaize",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 6.5033771,22.893927 1.676,-0.222 0.048,0.375 1.8629999,-0.068 1.465,-0.194 0.174,1.367 -1.09,0.865 -3.0379999,0.405 -0.215,0.026 -0.615,1.425 -0.107,0.324 -0.731,-4.232 0.57,-0.071",
    },
    {
      County: "Belmont",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 41.409377,24.844927 1.744,-0.253 -0.026,1.641 -0.397,2.425 -0.086,0.063 -0.712,0.081 -2.29,0.203 -1.077,0.131 -0.134,-1.077 -0.362,-2.822 3.34,-0.392",
    },
    {
      County: "Brown",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 12.740377,40.853927 1.267,-0.073 0.31,2.921 1.965,-0.243 0.325,4.985 -0.78,-0.387 -0.879,-0.91 -0.063,-0.051 -0.122,-0.045 -0.342,-0.045 -1.479,0.158 -0.202,-6.31",
    },
    {
      County: "Butler",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 7.4343771,37.111927 1.114,-0.129 0.59,3.826 -0.381,-0.023 -1.876,0.085 -0.726,0.132 -1.627,0.189 -0.288,-2.804 -0.068,-0.585 3.262,-0.691",
    },
    {
      County: "Carroll",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 38.278377,17.867927 2.424,1.302 -0.406,2.366 -3.182,0.384 -0.212,-1.695 -0.554,0.062 -0.131,-1.093 0.739,-0.1 -0.094,-0.82 0.342,-0.253 1.074,-0.153",
    },
    {
      County: "Champaign",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 15.431377,27.724927 0.663,1.461 0.062,1.301 -5.125,0.284 -0.167,-3.033 2.259,-0.118 0.582,0.168 1.726,-0.063",
    },
    {
      County: "Clark",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 11.031377,30.770927 5.125,-0.284 -0.888,3.237 -1.821,-0.086 -0.017,-0.324 -1.137,-0.096 -0.424,-0.013 -0.697,0.032 -0.024,-0.378 -0.117,-2.088",
    },
    {
      County: "Clermont",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 12.604377,40.853927 0.136,0 0.202,6.31 -1.852,-0.527 -0.095,-0.591 -1.0949999,-1.794 -0.04,-1.992 -0.159,-0.433 0.3929999,-0.856 2.51,-0.117",
    },
    {
      County: "Clinton",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 15.422377,36.625927 1.064,2.11 -2.479,2.045 -1.267,0.073 -0.136,0 -0.22,-4.082 3.038,-0.146",
    },
    {
      County: "Columbiana",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 43.356377,14.784927 0.114,0.62 0.446,2.724 -1.312,0.955 -1.902,0.086 -2.424,-1.302 -0.352,-2.25 5.43,-0.833",
    },
    {
      County: "Coshocton",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 28.250377,22.964927 4.61,-0.536 0.113,0.956 0.932,-0.108 0.226,1.897 -0.424,0.144 0.085,0.784 -0.081,0.053 -0.351,0.042 -4.593,0.492 -0.221,-0.916 -0.296,-2.808",
    },
    {
      County: "Crawford",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 22.057377,16.772927 0.49,3.664 -1.249,0.257 -2.434,0.361 -0.521,-3.737 2.708,-0.419 1.006,-0.126",
    },
    {
      County: "Cuyahoga",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 32.639377,6.8759263 1.049,0.643 0.438,2.8400007 -0.004,0 -1.971,0.271 0.163,0.364 0.293,0.528 -1.14,0.18 -1.835,0.307 -0.135,-0.975 -0.901,0.127 -0.27,-1.9960009 0.066,0.059 0.046,0.027 0.207,0.063 0.591,0.017 1.252,-0.239 0.055,-0.026 0.239,-0.2069998 0.662,-0.61 0.279,-0.305 0.821,-0.953 0.095,-0.115",
    },
    {
      County: "Darke",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 6.6593771,27.201927 0.267,2.024 0.505,3.573 -0.582,0.087 -3.186,0.401 -0.117,-1.141 -0.398,-3.944 -0.067,-0.548 3.578,-0.452",
    },
    {
      County: "Defiance",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 5.8523771,13.251927 1.082,-0.135 0.425,3.375 -1.081,0.141 -0.073,-0.563 -1.182,-0.438 -3.312,0.41 -0.028,-0.238 -0.243,-1.997 4.412,-0.555",
    },
    {
      County: "Delaware",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 17.995377,24.569927 2.218,-0.171 2.82,0.716 0.055,0.942 0.18,1.956 -3.989,0.325 -0.198,-1.293 -0.73,0.089 -0.249,-1.676 -0.107,-0.888",
    },
    {
      County: "Erie",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 21.447377,10.326927 0.857,0.735 0.613,0.287 0.451,0.141 0.144,0.018 0.171,-0.022 0.185,-0.094 0.262,-0.176 0.733,-0.52 0.32,1.853 -4.772,0.595 -0.308,-1.795 -1.004,0.146 -0.054,-0.365 2.402,-0.803",
    },
    {
      County: "Fairfield",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 23.408377,30.437927 3.124,-0.32 0.08,1.212 0.51,-0.031 0.703,1.1 0.077,1.14 -1.14,0.072 -1.145,0.861 -0.852,0.658 -0.167,0.198 -1.104,0.064 -0.149,-1.745 -0.086,-1.288 0.149,-1.921",
    },
    {
      County: "Fayette",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 15.305377,34.457927 3.952,-0.243 0.171,2.325 -0.798,1.93 -2.144,0.266 -1.064,-2.11 -0.117,-2.168",
    },
    {
      County: "Franklin",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 23.268377,28.012927 0.14,2.425 -0.149,1.921 -4.119,0.323 -0.149,-3.84 0.288,-0.504 3.989,-0.325",
    },
    {
      County: "Fulton",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 5.2303771,9.6789261 4.544,-0.744 0.3609999,2.9970009 -4.3769999,0.578 -0.892,-2.7730009 0.364,-0.058",
    },
    {
      County: "Gallia",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 29.578377,41.533927 0.015,0.19 2.27,-0.198 0.05,0.585 -0.226,1.235 -0.13,2.083 0.003,0.004 0.258,1.051 0.014,0.09 0,0.018 -0.005,0.045 -0.005,0.076 -0.013,0.063 -0.041,0.067 -0.025,0.027 -0.056,0.045 -0.022,0.024 -0.059,0.012 -0.189,0.041 -0.654,0.217 -0.748,0.076 -0.082,-0.982 -1.248,-0.879 -1.212,-0.324 -0.048,-0.853 1.031,-2.649 1.122,-0.064",
    },
    {
      County: "Geauga",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 33.688377,7.5189263 0.902,-0.143 -0.135,-0.912 1.641,-0.256 0.049,-0.888 0.919,-0.239 0.438,2.736 0.334,1.9689998 -3.71,0.5730009 -0.438,-2.8400007",
    },
    {
      County: "Greene",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 15.268377,33.723927 0.037,0.734 0.117,2.168 -3.038,0.146 -1.357,0.052 0.145,-3.587 0.697,-0.032 0.424,0.013 1.137,0.096 0.017,0.324 1.821,0.086",
    },
    {
      County: "Guernsey",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 34.131377,25.173927 2.762,-0.333 1.176,0.396 0.362,2.822 -1.11,0.143 -0.365,0.095 -1.41,0.929 -0.311,0.384 0.054,0.41 -1.113,0.126 -0.145,-1.141 -0.364,0.044 -0.307,-2.852 0.351,-0.042 0.081,-0.053 -0.085,-0.784 0.424,-0.144",
    },
    {
      County: "Hamilton",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 9.1383771,40.808927 0.9559999,0.162 -0.3929999,0.856 0.159,0.433 0.04,1.992 -1.956,-0.721 -1.127,0.411 -1.992,-0.171 -0.297,-2.579 1.627,-0.189 0.726,-0.132 1.876,-0.085 0.381,0.023",
    },
    {
      County: "Hancock",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 10.681377,16.046927 4.407,-0.559 0.307,2.245 -0.624,2.362 -3.506,0.433 -0.17,-1.294 -0.414,-3.187",
    },
    {
      County: "Hardin",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 11.265377,20.527927 3.506,-0.433 0.191,-0.024 0.203,1.502 0.558,0.108 0.2,-0.018 0.323,2.334 -0.978,0.149 -0.022,-0.068 -3.108,0.14 -0.409,-0.066 -0.464,-3.624",
    },
    {
      County: "Harrison",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 40.296377,21.535927 0.739,-0.094 0.072,0.559 -0.031,0.081 0.333,2.763 -3.34,0.392 -1.176,-0.396 -0.144,-1.164 0.361,-0.05 0.198,-0.142 -0.194,-1.565 3.182,-0.384",
    },
    {
      County: "Henry",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 10.135377,11.931927 0.117,0.942 0.429,3.173 -3.3219999,0.445 -0.425,-3.375 -1.082,0.135 -0.094,-0.742 4.3769999,-0.578",
    },
    {
      County: "Highland",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 16.486377,38.735927 2.144,-0.266 0.501,2.288 -0.073,1.881 -2.776,0.82 -1.965,0.243 -0.31,-2.921 2.479,-2.045",
    },
    {
      County: "Hocking",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 27.902377,33.538927 2.289,0.96 0.091,1.172 -1.118,0.081 0.076,1.15 -2.226,0.166 0.018,0.343 -1.144,0.265 -1.119,0.073 -0.103,-1.299 -0.068,-1.122 0.167,-0.198 0.852,-0.658 1.145,-0.861 1.14,-0.072",
    },
    {
      County: "Holmes",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 32.995377,19.471927 0.063,0.429 -0.109,0.108 0.289,2.375 -0.378,0.045 -4.61,0.536 -0.556,-1.388 0.717,-1.42 4.584,-0.685",
    },
    {
      County: "Huron",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 20.411377,13.143927 4.772,-0.595 0.465,2.79 -0.788,1.068 -2.803,0.366 -1.006,0.126 -0.64,-3.755",
    },
    {
      County: "Jackson",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 24.918377,39.830927 1.118,-0.081 1.154,0.116 1.181,0.393 0.085,1.339 -1.031,2.649 -0.744,0.045 -0.919,0.064 -0.231,-0.51 -0.045,-0.649 -0.537,0.04 -0.188,-2.87 0.157,-0.536",
    },
    {
      County: "Jefferson",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 40.702377,19.169927 1.902,-0.086 0.878,2.336 -0.225,2.767 -0.104,0.405 -1.744,0.253 -0.333,-2.763 0.031,-0.081 -0.072,-0.559 -0.739,0.094 0.406,-2.366",
    },
    {
      County: "Knox",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 27.694377,21.576927 0.556,1.388 0.296,2.808 -1.631,0.212 -1.105,0.095 -0.022,-0.244 -2.7,0.221 -0.055,-0.942 0.956,-0.077 -0.171,-2.009 0.023,-0.659 2.754,-0.459 1.099,-0.334",
    },
    {
      County: "Lake",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 36.785377,3.2879263 0.279,1.793 -0.919,0.239 -0.049,0.888 -1.641,0.256 0.135,0.912 -0.902,0.143 -1.049,-0.643 0.356,-0.609 0.441,-0.514 0.293,-0.316 0.563,-0.514 2.064,-1.365 0.429,-0.27",
    },
    {
      County: "Lawrence",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 26.681377,44.291927 0.744,-0.045 0.048,0.853 1.212,0.324 1.248,0.879 0.082,0.982 0.748,-0.076 -0.004,0.564 -0.004,0.027 -0.045,0.924 -0.018,0.094 -0.018,0.086 -0.028,0.076 -0.053,0.068 -0.099,0.064 -1.592,0.63 -0.884,-0.027 -0.87,-0.978 -1.608,-0.626 0.612,-0.392 0.587,-2.107 0.009,-0.192 -0.067,-1.128",
    },
    {
      County: "Licking",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 23.088377,26.056927 2.7,-0.221 0.022,0.244 1.105,-0.095 1.631,-0.212 0.221,0.916 0.023,3.325 -2.258,0.104 -3.124,0.32 -0.14,-2.425 -0.18,-1.956",
    },
    {
      County: "Logan",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 11.729377,24.151927 0.409,0.066 3.108,-0.14 0.022,0.068 0.163,3.579 -1.726,0.063 -0.582,-0.168 -2.259,0.118 -0.225,-2.721 1.09,-0.865",
    },
    {
      County: "Lorain",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 28.326377,9.1649261 0.27,1.9960009 0.901,-0.127 0.135,0.975 -0.878,0.324 -1.646,1.862 0.121,0.946 -1.581,0.198 -0.465,-2.79 -0.32,-1.853 3.463,-1.5310009",
    },
    {
      County: "Lucas",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 10.883377,8.7409263 2.924,-0.496 2.885,1.0279998 -2.325,0.386 -1.47,0.217 -1.171,1.6780009 -0.261,0.486 -0.934,0.798 -0.279,0.036 -0.117,-0.942 L 9.7743771,8.9349261 10.883377,8.7409263",
    },
    {
      County: "Madison",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 16.094377,29.185927 2.897,-0.344 0.149,3.84 0.117,1.533 -3.952,0.243 -0.037,-0.734 0.888,-3.237 -0.062,-1.301",
    },
    {
      County: "Mahoning",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 42.891377,11.895927 0.465,2.889 -5.43,0.833 -0.171,-1.089 0.531,-2.001 4.588,-0.736 0.017,0.104",
    },
    {
      County: "Marion",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 21.298377,20.693927 0.091,0.753 -0.942,0.148 -0.284,2.145 0.05,0.659 -2.218,0.171 -1.749,-0.573 -0.323,-2.334 2.941,-0.608 2.434,-0.361",
    },
    {
      County: "Medina",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 31.467377,11.701927 0.531,3.71 -4.233,0.585 -0.536,-0.856 -0.121,-0.946 1.646,-1.862 0.878,-0.324 1.835,-0.307",
    },
    {
      County: "Meigs",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 29.782377,39.190927 5.142,-0.446 0.184,1.081 -0.612,0.266 0,0.112 0.049,0.176 0.108,0.141 0.112,0.082 0.226,0.151 0.108,0.126 0.24,1.038 -0.024,0.108 -1.045,0.744 -0.329,0.086 0,-0.676 -0.036,-0.1 -0.247,-0.37 -0.195,-0.242 -0.73,-0.398 -0.005,0 -0.153,-0.008 -0.171,0.09 -0.46,0.779 -0.031,0.18 -0.05,-0.585 -2.27,0.198 -0.015,-0.19 0.204,-2.343",
    },
    {
      County: "Mercer",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 5.9333771,22.964927 0.731,4.232 -0.005,0.005 -3.578,0.452 -0.319,-2.836 -0.236,-2.01 3.407,0.157",
    },
    {
      County: "Miami",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 6.9263771,29.225927 4.0019999,-0.324 0.103,1.869 0.117,2.088 -1.049,0.054 -0.073,-0.122 -0.058,-0.203 0.081,-0.158 -2.6179999,0.369 -0.505,-3.573",
    },
    {
      County: "Monroe",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 38.565377,29.135927 1.077,-0.131 2.29,-0.203 0.712,-0.081 0.086,-0.063 0.108,1.735 -0.888,1.64 -0.789,1.001 -0.045,-0.41 -2.064,0.235 -0.406,-0.289 -0.184,-1.302 -0.369,0.053 -0.272,-2.09 0.744,-0.095",
    },
    {
      County: "Montgomery",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 7.4313771,32.798927 2.6179999,-0.369 -0.081,0.158 0.058,0.203 0.073,0.122 1.049,-0.054 0.024,0.378 -0.145,3.587 -2.4789999,0.159 -1.114,0.129 -0.585,-4.226 0.582,-0.087",
    },
    {
      County: "Morgan",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 30.593377,31.622927 3.717,-0.355 1.398,2.005 -2.241,2.141 -2.171,-1 -0.703,-2.791",
    },
    {
      County: "Morrow",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 21.298377,20.693927 1.249,-0.257 1.294,1.933 -0.023,0.659 0.171,2.009 -0.956,0.077 -2.82,-0.716 -0.05,-0.659 0.284,-2.145 0.942,-0.148 -0.091,-0.753",
    },
    {
      County: "Muskingum",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 28.767377,26.688927 4.593,-0.492 0.307,2.852 0.364,-0.044 0.145,1.141 0.134,1.122 -3.717,0.355 -1.803,-1.609 -0.023,-3.325",
    },
    {
      County: "Noble",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 38.431377,28.058927 0.134,1.077 -0.744,0.095 0.272,2.09 0.369,-0.053 0.184,1.302 -2.938,0.703 -1.398,-2.005 -0.134,-1.122 1.113,-0.126 -0.054,-0.41 0.311,-0.384 1.41,-0.929 0.365,-0.095 1.11,-0.143",
    },
    {
      County: "Ottawa",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 16.692377,9.2729261 1.033,0.244 2.065,0.121 0.319,-0.131 1.064,0.6450009 0.274,0.175 -2.402,0.803 -1.085,0.162 -2.579,0.347 -0.085,-0.564 -0.717,0.109 -0.212,-1.5250009 2.325,-0.386",
    },
    {
      County: "Paulding",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 6.2783771,16.632927 -0.281,2.325 -3.88,0.483 -0.406,-3.399 3.312,-0.41 1.182,0.438 0.073,0.563",
    },
    {
      County: "Perry",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 26.532377,30.117927 2.258,-0.104 1.803,1.609 0.703,2.791 -1.105,0.085 -2.289,-0.96 -0.077,-1.14 -0.703,-1.1 -0.51,0.031 -0.08,-1.212",
    },
    {
      County: "Pickaway",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 19.140377,32.681927 4.119,-0.323 0.086,1.288 0.149,1.745 1.104,-0.064 0.068,1.122 -2.345,0.181 -0.126,-0.136 -0.222,-0.175 -2.545,0.22 -0.171,-2.325 -0.117,-1.533",
    },
    {
      County: "Pike",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 19.131377,40.757927 5.63,-0.391 0.188,2.87 -1.916,0.159 -2.095,0.234 -0.036,-0.021 -0.644,-0.619 -1.2,-0.351 0.073,-1.881",
    },
    {
      County: "Portage",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 34.126377,10.358927 3.71,-0.5730009 0.45,2.7420009 -0.531,2.001 -2.937,0.455 -0.696,-4.625 0.004,0",
    },
    {
      County: "Preble",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 6.8493771,32.885927 0.585,4.226 -3.262,0.691 -0.235,-2.056 -0.274,-2.46 3.186,-0.401",
    },
    {
      County: "Putnam",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 10.681377,16.046927 0.414,3.187 -1.0989999,0.149 -1.083,0.333 0.05,0.379 -1.077,0.333 -1.118,0.153 -0.771,-1.623 0.281,-2.325 1.081,-0.141 3.3219999,-0.445",
    },
    {
      County: "Richland",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 22.057377,16.772927 2.803,-0.366 0.144,-0.017 0.229,1.455 0.392,0.88 0.627,0.977 0.343,2.209 -2.754,0.459 -1.294,-1.933 -0.49,-3.664",
    },
    {
      County: "Ross",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 19.428377,36.539927 2.545,-0.22 0.222,0.175 0.126,0.136 2.345,-0.181 0.103,1.299 0.149,2.082 -0.157,0.536 -5.63,0.391 -0.501,-2.288 0.798,-1.93",
    },
    {
      County: "Sandusky",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 14.579377,11.183927 0.717,-0.109 0.085,0.564 2.579,-0.347 1.085,-0.162 0.054,0.365 1.004,-0.146 0.384,2.242 -5.539,0.771 -0.369,-3.178",
    },
    {
      County: "Scioto",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 20.258377,42.989927 0.644,0.619 0.036,0.021 2.095,-0.234 1.916,-0.159 0.537,-0.04 0.045,0.649 0.231,0.51 0.919,-0.064 0.067,1.128 -0.009,0.192 -0.587,2.107 -0.612,0.392 -0.045,-0.023 -0.216,-0.144 -0.01,-0.014 -0.081,-0.095 -0.067,-0.143 -0.023,-0.05 -0.28,-0.843 -0.095,-0.406 0.01,-0.156 -0.005,-0.006 0,-0.013 -0.008,-0.091 -0.019,-0.077 -0.004,-0.018 -0.005,-0.018 -0.017,-0.031 -0.027,-0.04 -0.013,-0.023 -0.046,-0.05 -0.103,-0.045 -0.051,0 -0.012,0.003 -0.272,0.119 -0.834,0.378 -0.179,0.081 0,0.005 -2.277,1.915 -0.603,-5.336",
    },
    {
      County: "Seneca",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 20.487377,13.590927 0.564,3.308 -2.708,0.419 -2.948,0.415 -0.307,-2.245 -0.14,-1.126 5.539,-0.771",
    },
    {
      County: "Shelby",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 6.6643771,27.196927 0.107,-0.324 0.615,-1.425 0.215,-0.026 3.0379999,-0.405 0.225,2.721 0.064,1.164 -4.0019999,0.324 -0.267,-2.024 0.005,-0.005",
    },
    {
      County: "Stark",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 34.818377,14.983927 2.937,-0.455 0.523,3.339 -1.074,0.153 -0.342,0.253 0.094,0.82 -0.739,0.1 -3.159,0.707 -0.527,-3.593 2.287,-1.324",
    },
    {
      County: "Summit",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 34.122377,10.358927 0.696,4.625 -2.287,1.324 -0.533,-0.896 -0.531,-3.71 1.14,-0.18 -0.293,-0.528 -0.163,-0.364 1.971,-0.271",
    },
    {
      County: "Trumbull",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 42.098377,7.0959263 0.024,0.14 0.752,4.5560007 -4.588,0.736 -0.45,-2.7420009 -0.334,-1.9689998 4.596,-0.721",
    },
    {
      County: "Tuscarawas",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 36.217377,19.193927 0.131,1.093 0.554,-0.062 0.406,3.26 -0.198,0.142 -0.361,0.05 0.144,1.164 -2.762,0.333 -0.226,-1.897 -0.932,0.108 -0.113,-0.956 0.378,-0.045 -0.289,-2.375 0.109,-0.108 3.159,-0.707",
    },
    {
      County: "Union",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 15.268377,24.145927 0.978,-0.149 1.749,0.573 0.107,0.888 0.249,1.676 0.73,-0.089 0.198,1.293 -0.288,0.504 -2.897,0.344 -0.663,-1.461 -0.163,-3.579",
    },
    {
      County: "Van Wert",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 2.1173771,19.440927 3.88,-0.483 0.771,1.623 -0.265,2.313 -0.57,0.071 -3.407,-0.157 -0.304,-2.506 -0.105,-0.861",
    },
    {
      County: "Vinton",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 24.769377,37.748927 1.119,-0.073 1.144,-0.265 -0.018,-0.343 2.226,-0.166 0.077,1.162 0.378,-0.032 0.087,1.159 -0.204,2.343 -1.122,0.064 -0.085,-1.339 -1.181,-0.393 -1.154,-0.116 -1.118,0.081 -0.149,-2.082",
    },
    {
      County: "Warren",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 11.027377,36.823927 1.357,-0.052 0.22,4.082 -2.51,0.117 -0.9559999,-0.162 -0.59,-3.826 2.4789999,-0.159",
    },
    {
      County: "Washington",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 38.646377,32.569927 0.406,0.289 2.064,-0.235 0.045,0.41 -0.869,1.357 -1.981,1.699 -0.435,-0.536 -0.072,-0.077 -0.253,-0.14 -0.113,-0.009 -0.09,0.028 -0.103,0.089 -0.627,0.766 -1.289,1.641 -0.23,0.506 -0.076,-0.808 -0.951,0.108 -0.432,-0.536 -0.173,-1.708 2.241,-2.141 2.938,-0.703",
    },
    {
      County: "Wayne",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 31.998377,15.411927 0.533,0.896 0.464,3.164 -4.584,0.685 -0.646,-4.16 4.233,-0.585",
    },
    {
      County: "Williams",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 1.0123771,10.326927 3.854,-0.5900009 0.892,2.7730009 0.094,0.742 -4.412,0.555 -0.162,-1.343 -0.266,-2.137",
    },
    {
      County: "Wood",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 14.367377,9.6589261 0.212,1.5250009 0.369,3.178 0.14,1.126 -4.407,0.559 -0.429,-3.173 0.279,-0.036 0.934,-0.798 0.261,-0.486 1.171,-1.6780009 1.47,-0.217",
    },
    {
      County: "Wyandot",
      SalespersonId: undefined,
      Color: undefined,
      d: "m 15.395377,17.732927 2.948,-0.415 0.521,3.737 -2.941,0.608 -0.2,0.018 -0.558,-0.108 -0.203,-1.502 -0.191,0.024 0.624,-2.362",
    },
  ];

  const OhioSvgPaths = OhioSvgData.map((element) => {
    return (
      <County countyName={element.County} d={element.d} fillColor={fillColor} />
    );
  });

  return <>{OhioSvgPaths}</>;
}

export default CountyList;
