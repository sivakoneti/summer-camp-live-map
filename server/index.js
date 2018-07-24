const { GraphQLServer, PubSub } = require('graphql-yoga')
const fetch = require('node-fetch')
const fs = require('fs')

const PATH_TO_GRAPHQL_SCHEMA = '../graphql/schema.graphql'

async function fetchData() {
  console.warn('Calling API');
  const rawResponse = await fetch('https://3gyucw6pqd.execute-api.eu-west-1.amazonaws.com/dev');
  return rawResponse.json();
}

const typeDefs = fs.readFileSync(PATH_TO_GRAPHQL_SCHEMA, 'utf8')

let COUNTER = 0;

const resolvers = {
  RootQuery: {
    flights: async (parent, args) => {
      const data = await fetchData();
      return data.flights.slice(undefined, args.first).map(flight => {
        return {
          id: flight.id,
          orientation: flight.orientation,
          location: {
            lat: flight.location.coordinates[0],
            lng: flight.location.coordinates[1]
          }
        }
      })
    },
    stats: async () => {
      const data = await fetchData();
      return {
        activePassengers: data.activePassengersCount,
        activeFlights: data.activeFlightsCount,
        topNationalities: data.topNationalities.map(nationality => ({
          code: nationality.nationalityCode,
          passengers: nationality.count
        }))
      }
    },
    error: () => 'error example'
  },

  Subscription: {
    counter: {
      resolve: (parent) => parent,
      subscribe: (parent, args, { pubsub }) => {
        // TODO: poll the data from API instead

        return pubsub.asyncIterator('COUNTER_TOPIC')
      },
    }
  },
}

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
server.start(() => console.log(`Server is running on http://localhost:4000`));