/**
 * @flow
 * @relayHash b89f0563a62ee3ea20b0ecb29a8da97e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type stats$ref = any;
export type appQueryVariables = {||};
export type appQueryResponse = {|
  +flights: ?$ReadOnlyArray<?{|
    +id: string,
    +location: ?{|
      +lat: ?number,
      +lng: ?number,
    |},
    +orientation: ?number,
  |}>,
  +error: ?number,
  +stats: ?{|
    +$fragmentRefs: stats$ref
  |},
|};
*/


/*
query appQuery {
  flights {
    id
    location {
      lat
      lng
    }
    orientation
  }
  error
  stats {
    ...stats
  }
}

fragment stats on Stats {
  activeFlights
  activePassengers
  topNationalities {
    code
    passengers
  }
  flightsTakingOffSoon
  flightsLandingSoon
  mostOccupiedFlight
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "flights",
  "storageKey": null,
  "args": null,
  "concreteType": "Flight",
  "plural": true,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "location",
      "storageKey": null,
      "args": null,
      "concreteType": "Coordinates",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lat",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lng",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "orientation",
      "args": null,
      "storageKey": null
    }
  ]
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery {\n  flights {\n    id\n    location {\n      lat\n      lng\n    }\n    orientation\n  }\n  error\n  stats {\n    ...stats\n  }\n}\n\nfragment stats on Stats {\n  activeFlights\n  activePassengers\n  topNationalities {\n    code\n    passengers\n  }\n  flightsTakingOffSoon\n  flightsLandingSoon\n  mostOccupiedFlight\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      v0,
      v1,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stats",
        "storageKey": null,
        "args": null,
        "concreteType": "Stats",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "stats",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": [],
    "selections": [
      v0,
      v1,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stats",
        "storageKey": null,
        "args": null,
        "concreteType": "Stats",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "activeFlights",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "activePassengers",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "topNationalities",
            "storageKey": null,
            "args": null,
            "concreteType": "Nationality",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "code",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "passengers",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "flightsTakingOffSoon",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "flightsLandingSoon",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mostOccupiedFlight",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '952bcbe7985af9afcf90e3484d38f425';
module.exports = node;
