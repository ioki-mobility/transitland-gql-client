import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: undefined,
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumDistanceUnit = {
  KILOMETERS: 'KILOMETERS',
  MILES: 'MILES',
}

export const enumDurationUnit = {
  SECONDS: 'SECONDS',
}

export const enumFeedSourceUrlTypes = {
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

export const enumFeedSpecTypes = {
  GBFS: 'GBFS',
  GTFS: 'GTFS',
  GTFS_RT: 'GTFS_RT',
  MDS: 'MDS',
}

export const enumImportStatus = {
  ERROR: 'ERROR',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCESS: 'SUCCESS',
}

export const enumRole = {
  ADMIN: 'ADMIN',
  ANON: 'ANON',
  USER: 'USER',
}

export const enumScheduleRelationship = {
  ADDED: 'ADDED',
  CANCELED: 'CANCELED',
  SCHEDULED: 'SCHEDULED',
  UNSCHEDULED: 'UNSCHEDULED',
}

export const enumStepMode = {
  AUTO: 'AUTO',
  BICYCLE: 'BICYCLE',
  LINE: 'LINE',
  TRANSIT: 'TRANSIT',
  WALK: 'WALK',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
