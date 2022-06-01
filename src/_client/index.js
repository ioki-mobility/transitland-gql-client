const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.10.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://demo.transit.land/api/v2/query',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumDistanceUnit = {
  KILOMETERS: 'KILOMETERS',
  MILES: 'MILES',
}

module.exports.enumDurationUnit = {
  SECONDS: 'SECONDS',
}

module.exports.enumFeedSourceUrlTypes = {
  gbfs_auto_discovery: 'gbfs_auto_discovery',
  mds_provider: 'mds_provider',
  realtime_alerts: 'realtime_alerts',
  realtime_trip_updates: 'realtime_trip_updates',
  realtime_vehicle_positions: 'realtime_vehicle_positions',
  static_current: 'static_current',
  static_historic: 'static_historic',
  static_hypothetical: 'static_hypothetical',
  static_planned: 'static_planned',
}

module.exports.enumFeedSpecTypes = {
  GBFS: 'GBFS',
  GTFS: 'GTFS',
  GTFS_RT: 'GTFS_RT',
  MDS: 'MDS',
}

module.exports.enumImportStatus = {
  ERROR: 'ERROR',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
}

module.exports.enumRole = {
  ADMIN: 'ADMIN',
  ANON: 'ANON',
  USER: 'USER',
}

module.exports.enumScheduleRelationship = {
  ADDED: 'ADDED',
  CANCELED: 'CANCELED',
  SCHEDULED: 'SCHEDULED',
  UNSCHEDULED: 'UNSCHEDULED',
}

module.exports.enumStepMode = {
  AUTO: 'AUTO',
  BICYCLE: 'BICYCLE',
  LINE: 'LINE',
  TRANSIT: 'TRANSIT',
  WALK: 'WALK',
}

module.exports.generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
