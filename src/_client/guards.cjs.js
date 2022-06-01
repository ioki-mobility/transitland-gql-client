
var Agency_possibleTypes = ['Agency']
module.exports.isAgency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAgency"')
  return Agency_possibleTypes.includes(obj.__typename)
}



var AgencyPlace_possibleTypes = ['AgencyPlace']
module.exports.isAgencyPlace = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAgencyPlace"')
  return AgencyPlace_possibleTypes.includes(obj.__typename)
}



var Alert_possibleTypes = ['Alert']
module.exports.isAlert = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlert"')
  return Alert_possibleTypes.includes(obj.__typename)
}



var Calendar_possibleTypes = ['Calendar']
module.exports.isCalendar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCalendar"')
  return Calendar_possibleTypes.includes(obj.__typename)
}



var CensusGeography_possibleTypes = ['CensusGeography']
module.exports.isCensusGeography = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCensusGeography"')
  return CensusGeography_possibleTypes.includes(obj.__typename)
}



var CensusTable_possibleTypes = ['CensusTable']
module.exports.isCensusTable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCensusTable"')
  return CensusTable_possibleTypes.includes(obj.__typename)
}



var CensusValue_possibleTypes = ['CensusValue']
module.exports.isCensusValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCensusValue"')
  return CensusValue_possibleTypes.includes(obj.__typename)
}



var Directions_possibleTypes = ['Directions']
module.exports.isDirections = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDirections"')
  return Directions_possibleTypes.includes(obj.__typename)
}



var Distance_possibleTypes = ['Distance']
module.exports.isDistance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDistance"')
  return Distance_possibleTypes.includes(obj.__typename)
}



var Duration_possibleTypes = ['Duration']
module.exports.isDuration = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDuration"')
  return Duration_possibleTypes.includes(obj.__typename)
}



var Feed_possibleTypes = ['Feed']
module.exports.isFeed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeed"')
  return Feed_possibleTypes.includes(obj.__typename)
}



var FeedAuthorization_possibleTypes = ['FeedAuthorization']
module.exports.isFeedAuthorization = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedAuthorization"')
  return FeedAuthorization_possibleTypes.includes(obj.__typename)
}



var FeedFetch_possibleTypes = ['FeedFetch']
module.exports.isFeedFetch = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedFetch"')
  return FeedFetch_possibleTypes.includes(obj.__typename)
}



var FeedInfo_possibleTypes = ['FeedInfo']
module.exports.isFeedInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedInfo"')
  return FeedInfo_possibleTypes.includes(obj.__typename)
}



var FeedLicense_possibleTypes = ['FeedLicense']
module.exports.isFeedLicense = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedLicense"')
  return FeedLicense_possibleTypes.includes(obj.__typename)
}



var FeedState_possibleTypes = ['FeedState']
module.exports.isFeedState = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedState"')
  return FeedState_possibleTypes.includes(obj.__typename)
}



var FeedUrls_possibleTypes = ['FeedUrls']
module.exports.isFeedUrls = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedUrls"')
  return FeedUrls_possibleTypes.includes(obj.__typename)
}



var FeedVersion_possibleTypes = ['FeedVersion']
module.exports.isFeedVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersion"')
  return FeedVersion_possibleTypes.includes(obj.__typename)
}



var FeedVersionDeleteResult_possibleTypes = ['FeedVersionDeleteResult']
module.exports.isFeedVersionDeleteResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionDeleteResult"')
  return FeedVersionDeleteResult_possibleTypes.includes(obj.__typename)
}



var FeedVersionFetchResult_possibleTypes = ['FeedVersionFetchResult']
module.exports.isFeedVersionFetchResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionFetchResult"')
  return FeedVersionFetchResult_possibleTypes.includes(obj.__typename)
}



var FeedVersionFileInfo_possibleTypes = ['FeedVersionFileInfo']
module.exports.isFeedVersionFileInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionFileInfo"')
  return FeedVersionFileInfo_possibleTypes.includes(obj.__typename)
}



var FeedVersionGtfsImport_possibleTypes = ['FeedVersionGtfsImport']
module.exports.isFeedVersionGtfsImport = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionGtfsImport"')
  return FeedVersionGtfsImport_possibleTypes.includes(obj.__typename)
}



var FeedVersionImportResult_possibleTypes = ['FeedVersionImportResult']
module.exports.isFeedVersionImportResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionImportResult"')
  return FeedVersionImportResult_possibleTypes.includes(obj.__typename)
}



var FeedVersionServiceLevel_possibleTypes = ['FeedVersionServiceLevel']
module.exports.isFeedVersionServiceLevel = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionServiceLevel"')
  return FeedVersionServiceLevel_possibleTypes.includes(obj.__typename)
}



var FeedVersionUnimportResult_possibleTypes = ['FeedVersionUnimportResult']
module.exports.isFeedVersionUnimportResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionUnimportResult"')
  return FeedVersionUnimportResult_possibleTypes.includes(obj.__typename)
}



var Frequency_possibleTypes = ['Frequency']
module.exports.isFrequency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFrequency"')
  return Frequency_possibleTypes.includes(obj.__typename)
}



var Itinerary_possibleTypes = ['Itinerary']
module.exports.isItinerary = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isItinerary"')
  return Itinerary_possibleTypes.includes(obj.__typename)
}



var Leg_possibleTypes = ['Leg']
module.exports.isLeg = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLeg"')
  return Leg_possibleTypes.includes(obj.__typename)
}



var Level_possibleTypes = ['Level']
module.exports.isLevel = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLevel"')
  return Level_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Operator_possibleTypes = ['Operator']
module.exports.isOperator = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOperator"')
  return Operator_possibleTypes.includes(obj.__typename)
}



var Pathway_possibleTypes = ['Pathway']
module.exports.isPathway = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPathway"')
  return Pathway_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RTTimeRange_possibleTypes = ['RTTimeRange']
module.exports.isRTTimeRange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTTimeRange"')
  return RTTimeRange_possibleTypes.includes(obj.__typename)
}



var RTTranslation_possibleTypes = ['RTTranslation']
module.exports.isRTTranslation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTTranslation"')
  return RTTranslation_possibleTypes.includes(obj.__typename)
}



var RTTripDescriptor_possibleTypes = ['RTTripDescriptor']
module.exports.isRTTripDescriptor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTTripDescriptor"')
  return RTTripDescriptor_possibleTypes.includes(obj.__typename)
}



var RTVehicleDescriptor_possibleTypes = ['RTVehicleDescriptor']
module.exports.isRTVehicleDescriptor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTVehicleDescriptor"')
  return RTVehicleDescriptor_possibleTypes.includes(obj.__typename)
}



var Route_possibleTypes = ['Route']
module.exports.isRoute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRoute"')
  return Route_possibleTypes.includes(obj.__typename)
}



var RouteGeometry_possibleTypes = ['RouteGeometry']
module.exports.isRouteGeometry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteGeometry"')
  return RouteGeometry_possibleTypes.includes(obj.__typename)
}



var RouteHeadway_possibleTypes = ['RouteHeadway']
module.exports.isRouteHeadway = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteHeadway"')
  return RouteHeadway_possibleTypes.includes(obj.__typename)
}



var RouteStop_possibleTypes = ['RouteStop']
module.exports.isRouteStop = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteStop"')
  return RouteStop_possibleTypes.includes(obj.__typename)
}



var RouteStopBuffer_possibleTypes = ['RouteStopBuffer']
module.exports.isRouteStopBuffer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteStopBuffer"')
  return RouteStopBuffer_possibleTypes.includes(obj.__typename)
}



var Shape_possibleTypes = ['Shape']
module.exports.isShape = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShape"')
  return Shape_possibleTypes.includes(obj.__typename)
}



var Step_possibleTypes = ['Step']
module.exports.isStep = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStep"')
  return Step_possibleTypes.includes(obj.__typename)
}



var Stop_possibleTypes = ['Stop']
module.exports.isStop = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStop"')
  return Stop_possibleTypes.includes(obj.__typename)
}



var StopTime_possibleTypes = ['StopTime']
module.exports.isStopTime = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStopTime"')
  return StopTime_possibleTypes.includes(obj.__typename)
}



var StopTimeEvent_possibleTypes = ['StopTimeEvent']
module.exports.isStopTimeEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStopTimeEvent"')
  return StopTimeEvent_possibleTypes.includes(obj.__typename)
}



var Trip_possibleTypes = ['Trip']
module.exports.isTrip = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTrip"')
  return Trip_possibleTypes.includes(obj.__typename)
}



var ValidationResult_possibleTypes = ['ValidationResult']
module.exports.isValidationResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationResult"')
  return ValidationResult_possibleTypes.includes(obj.__typename)
}



var ValidationResultError_possibleTypes = ['ValidationResultError']
module.exports.isValidationResultError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationResultError"')
  return ValidationResultError_possibleTypes.includes(obj.__typename)
}



var ValidationResultErrorGroup_possibleTypes = ['ValidationResultErrorGroup']
module.exports.isValidationResultErrorGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationResultErrorGroup"')
  return ValidationResultErrorGroup_possibleTypes.includes(obj.__typename)
}



var VehiclePosition_possibleTypes = ['VehiclePosition']
module.exports.isVehiclePosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVehiclePosition"')
  return VehiclePosition_possibleTypes.includes(obj.__typename)
}



var Waypoint_possibleTypes = ['Waypoint']
module.exports.isWaypoint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWaypoint"')
  return Waypoint_possibleTypes.includes(obj.__typename)
}
