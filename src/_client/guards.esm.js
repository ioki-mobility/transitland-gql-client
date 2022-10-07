
var Agency_possibleTypes = ['Agency']
export var isAgency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAgency"')
  return Agency_possibleTypes.includes(obj.__typename)
}



var AgencyPlace_possibleTypes = ['AgencyPlace']
export var isAgencyPlace = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAgencyPlace"')
  return AgencyPlace_possibleTypes.includes(obj.__typename)
}



var Alert_possibleTypes = ['Alert']
export var isAlert = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAlert"')
  return Alert_possibleTypes.includes(obj.__typename)
}



var Calendar_possibleTypes = ['Calendar']
export var isCalendar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCalendar"')
  return Calendar_possibleTypes.includes(obj.__typename)
}



var CensusGeography_possibleTypes = ['CensusGeography']
export var isCensusGeography = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCensusGeography"')
  return CensusGeography_possibleTypes.includes(obj.__typename)
}



var CensusTable_possibleTypes = ['CensusTable']
export var isCensusTable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCensusTable"')
  return CensusTable_possibleTypes.includes(obj.__typename)
}



var CensusValue_possibleTypes = ['CensusValue']
export var isCensusValue = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCensusValue"')
  return CensusValue_possibleTypes.includes(obj.__typename)
}



var Directions_possibleTypes = ['Directions']
export var isDirections = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDirections"')
  return Directions_possibleTypes.includes(obj.__typename)
}



var Distance_possibleTypes = ['Distance']
export var isDistance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDistance"')
  return Distance_possibleTypes.includes(obj.__typename)
}



var Duration_possibleTypes = ['Duration']
export var isDuration = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDuration"')
  return Duration_possibleTypes.includes(obj.__typename)
}



var Feed_possibleTypes = ['Feed']
export var isFeed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeed"')
  return Feed_possibleTypes.includes(obj.__typename)
}



var FeedAuthorization_possibleTypes = ['FeedAuthorization']
export var isFeedAuthorization = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedAuthorization"')
  return FeedAuthorization_possibleTypes.includes(obj.__typename)
}



var FeedFetch_possibleTypes = ['FeedFetch']
export var isFeedFetch = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedFetch"')
  return FeedFetch_possibleTypes.includes(obj.__typename)
}



var FeedInfo_possibleTypes = ['FeedInfo']
export var isFeedInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedInfo"')
  return FeedInfo_possibleTypes.includes(obj.__typename)
}



var FeedLicense_possibleTypes = ['FeedLicense']
export var isFeedLicense = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedLicense"')
  return FeedLicense_possibleTypes.includes(obj.__typename)
}



var FeedState_possibleTypes = ['FeedState']
export var isFeedState = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedState"')
  return FeedState_possibleTypes.includes(obj.__typename)
}



var FeedUrls_possibleTypes = ['FeedUrls']
export var isFeedUrls = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedUrls"')
  return FeedUrls_possibleTypes.includes(obj.__typename)
}



var FeedVersion_possibleTypes = ['FeedVersion']
export var isFeedVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersion"')
  return FeedVersion_possibleTypes.includes(obj.__typename)
}



var FeedVersionDeleteResult_possibleTypes = ['FeedVersionDeleteResult']
export var isFeedVersionDeleteResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionDeleteResult"')
  return FeedVersionDeleteResult_possibleTypes.includes(obj.__typename)
}



var FeedVersionFetchResult_possibleTypes = ['FeedVersionFetchResult']
export var isFeedVersionFetchResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionFetchResult"')
  return FeedVersionFetchResult_possibleTypes.includes(obj.__typename)
}



var FeedVersionFileInfo_possibleTypes = ['FeedVersionFileInfo']
export var isFeedVersionFileInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionFileInfo"')
  return FeedVersionFileInfo_possibleTypes.includes(obj.__typename)
}



var FeedVersionGtfsImport_possibleTypes = ['FeedVersionGtfsImport']
export var isFeedVersionGtfsImport = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionGtfsImport"')
  return FeedVersionGtfsImport_possibleTypes.includes(obj.__typename)
}



var FeedVersionImportResult_possibleTypes = ['FeedVersionImportResult']
export var isFeedVersionImportResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionImportResult"')
  return FeedVersionImportResult_possibleTypes.includes(obj.__typename)
}



var FeedVersionServiceLevel_possibleTypes = ['FeedVersionServiceLevel']
export var isFeedVersionServiceLevel = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionServiceLevel"')
  return FeedVersionServiceLevel_possibleTypes.includes(obj.__typename)
}



var FeedVersionUnimportResult_possibleTypes = ['FeedVersionUnimportResult']
export var isFeedVersionUnimportResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFeedVersionUnimportResult"')
  return FeedVersionUnimportResult_possibleTypes.includes(obj.__typename)
}



var Frequency_possibleTypes = ['Frequency']
export var isFrequency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isFrequency"')
  return Frequency_possibleTypes.includes(obj.__typename)
}



var GbfsAlertTime_possibleTypes = ['GbfsAlertTime']
export var isGbfsAlertTime = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsAlertTime"')
  return GbfsAlertTime_possibleTypes.includes(obj.__typename)
}



var GbfsBrandAsset_possibleTypes = ['GbfsBrandAsset']
export var isGbfsBrandAsset = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsBrandAsset"')
  return GbfsBrandAsset_possibleTypes.includes(obj.__typename)
}



var GbfsFeed_possibleTypes = ['GbfsFeed']
export var isGbfsFeed = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsFeed"')
  return GbfsFeed_possibleTypes.includes(obj.__typename)
}



var GbfsFreeBikeStatus_possibleTypes = ['GbfsFreeBikeStatus']
export var isGbfsFreeBikeStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsFreeBikeStatus"')
  return GbfsFreeBikeStatus_possibleTypes.includes(obj.__typename)
}



var GbfsGeofenceFeature_possibleTypes = ['GbfsGeofenceFeature']
export var isGbfsGeofenceFeature = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsGeofenceFeature"')
  return GbfsGeofenceFeature_possibleTypes.includes(obj.__typename)
}



var GbfsGeofenceProperty_possibleTypes = ['GbfsGeofenceProperty']
export var isGbfsGeofenceProperty = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsGeofenceProperty"')
  return GbfsGeofenceProperty_possibleTypes.includes(obj.__typename)
}



var GbfsGeofenceRule_possibleTypes = ['GbfsGeofenceRule']
export var isGbfsGeofenceRule = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsGeofenceRule"')
  return GbfsGeofenceRule_possibleTypes.includes(obj.__typename)
}



var GbfsGeofenceZone_possibleTypes = ['GbfsGeofenceZone']
export var isGbfsGeofenceZone = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsGeofenceZone"')
  return GbfsGeofenceZone_possibleTypes.includes(obj.__typename)
}



var GbfsPlanPrice_possibleTypes = ['GbfsPlanPrice']
export var isGbfsPlanPrice = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsPlanPrice"')
  return GbfsPlanPrice_possibleTypes.includes(obj.__typename)
}



var GbfsRentalApp_possibleTypes = ['GbfsRentalApp']
export var isGbfsRentalApp = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsRentalApp"')
  return GbfsRentalApp_possibleTypes.includes(obj.__typename)
}



var GbfsRentalApps_possibleTypes = ['GbfsRentalApps']
export var isGbfsRentalApps = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsRentalApps"')
  return GbfsRentalApps_possibleTypes.includes(obj.__typename)
}



var GbfsRentalUris_possibleTypes = ['GbfsRentalUris']
export var isGbfsRentalUris = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsRentalUris"')
  return GbfsRentalUris_possibleTypes.includes(obj.__typename)
}



var GbfsStationInformation_possibleTypes = ['GbfsStationInformation']
export var isGbfsStationInformation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsStationInformation"')
  return GbfsStationInformation_possibleTypes.includes(obj.__typename)
}



var GbfsStationStatus_possibleTypes = ['GbfsStationStatus']
export var isGbfsStationStatus = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsStationStatus"')
  return GbfsStationStatus_possibleTypes.includes(obj.__typename)
}



var GbfsSystemAlert_possibleTypes = ['GbfsSystemAlert']
export var isGbfsSystemAlert = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemAlert"')
  return GbfsSystemAlert_possibleTypes.includes(obj.__typename)
}



var GbfsSystemCalendar_possibleTypes = ['GbfsSystemCalendar']
export var isGbfsSystemCalendar = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemCalendar"')
  return GbfsSystemCalendar_possibleTypes.includes(obj.__typename)
}



var GbfsSystemHour_possibleTypes = ['GbfsSystemHour']
export var isGbfsSystemHour = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemHour"')
  return GbfsSystemHour_possibleTypes.includes(obj.__typename)
}



var GbfsSystemInformation_possibleTypes = ['GbfsSystemInformation']
export var isGbfsSystemInformation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemInformation"')
  return GbfsSystemInformation_possibleTypes.includes(obj.__typename)
}



var GbfsSystemPricingPlan_possibleTypes = ['GbfsSystemPricingPlan']
export var isGbfsSystemPricingPlan = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemPricingPlan"')
  return GbfsSystemPricingPlan_possibleTypes.includes(obj.__typename)
}



var GbfsSystemRegion_possibleTypes = ['GbfsSystemRegion']
export var isGbfsSystemRegion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemRegion"')
  return GbfsSystemRegion_possibleTypes.includes(obj.__typename)
}



var GbfsSystemVersion_possibleTypes = ['GbfsSystemVersion']
export var isGbfsSystemVersion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsSystemVersion"')
  return GbfsSystemVersion_possibleTypes.includes(obj.__typename)
}



var GbfsVehicleAssets_possibleTypes = ['GbfsVehicleAssets']
export var isGbfsVehicleAssets = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsVehicleAssets"')
  return GbfsVehicleAssets_possibleTypes.includes(obj.__typename)
}



var GbfsVehicleDockAvailable_possibleTypes = ['GbfsVehicleDockAvailable']
export var isGbfsVehicleDockAvailable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsVehicleDockAvailable"')
  return GbfsVehicleDockAvailable_possibleTypes.includes(obj.__typename)
}



var GbfsVehicleType_possibleTypes = ['GbfsVehicleType']
export var isGbfsVehicleType = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsVehicleType"')
  return GbfsVehicleType_possibleTypes.includes(obj.__typename)
}



var GbfsVehicleTypeAvailable_possibleTypes = ['GbfsVehicleTypeAvailable']
export var isGbfsVehicleTypeAvailable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGbfsVehicleTypeAvailable"')
  return GbfsVehicleTypeAvailable_possibleTypes.includes(obj.__typename)
}



var Itinerary_possibleTypes = ['Itinerary']
export var isItinerary = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isItinerary"')
  return Itinerary_possibleTypes.includes(obj.__typename)
}



var Leg_possibleTypes = ['Leg']
export var isLeg = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLeg"')
  return Leg_possibleTypes.includes(obj.__typename)
}



var Level_possibleTypes = ['Level']
export var isLevel = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLevel"')
  return Level_possibleTypes.includes(obj.__typename)
}



var Operator_possibleTypes = ['Operator']
export var isOperator = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOperator"')
  return Operator_possibleTypes.includes(obj.__typename)
}



var Pathway_possibleTypes = ['Pathway']
export var isPathway = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPathway"')
  return Pathway_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var RTTimeRange_possibleTypes = ['RTTimeRange']
export var isRTTimeRange = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTTimeRange"')
  return RTTimeRange_possibleTypes.includes(obj.__typename)
}



var RTTranslation_possibleTypes = ['RTTranslation']
export var isRTTranslation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTTranslation"')
  return RTTranslation_possibleTypes.includes(obj.__typename)
}



var RTTripDescriptor_possibleTypes = ['RTTripDescriptor']
export var isRTTripDescriptor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTTripDescriptor"')
  return RTTripDescriptor_possibleTypes.includes(obj.__typename)
}



var RTVehicleDescriptor_possibleTypes = ['RTVehicleDescriptor']
export var isRTVehicleDescriptor = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRTVehicleDescriptor"')
  return RTVehicleDescriptor_possibleTypes.includes(obj.__typename)
}



var Route_possibleTypes = ['Route']
export var isRoute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRoute"')
  return Route_possibleTypes.includes(obj.__typename)
}



var RouteGeometry_possibleTypes = ['RouteGeometry']
export var isRouteGeometry = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteGeometry"')
  return RouteGeometry_possibleTypes.includes(obj.__typename)
}



var RouteHeadway_possibleTypes = ['RouteHeadway']
export var isRouteHeadway = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteHeadway"')
  return RouteHeadway_possibleTypes.includes(obj.__typename)
}



var RouteStop_possibleTypes = ['RouteStop']
export var isRouteStop = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteStop"')
  return RouteStop_possibleTypes.includes(obj.__typename)
}



var RouteStopBuffer_possibleTypes = ['RouteStopBuffer']
export var isRouteStopBuffer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteStopBuffer"')
  return RouteStopBuffer_possibleTypes.includes(obj.__typename)
}



var RouteStopPattern_possibleTypes = ['RouteStopPattern']
export var isRouteStopPattern = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRouteStopPattern"')
  return RouteStopPattern_possibleTypes.includes(obj.__typename)
}



var Shape_possibleTypes = ['Shape']
export var isShape = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShape"')
  return Shape_possibleTypes.includes(obj.__typename)
}



var Step_possibleTypes = ['Step']
export var isStep = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStep"')
  return Step_possibleTypes.includes(obj.__typename)
}



var Stop_possibleTypes = ['Stop']
export var isStop = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStop"')
  return Stop_possibleTypes.includes(obj.__typename)
}



var StopTime_possibleTypes = ['StopTime']
export var isStopTime = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStopTime"')
  return StopTime_possibleTypes.includes(obj.__typename)
}



var StopTimeEvent_possibleTypes = ['StopTimeEvent']
export var isStopTimeEvent = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStopTimeEvent"')
  return StopTimeEvent_possibleTypes.includes(obj.__typename)
}



var Trip_possibleTypes = ['Trip']
export var isTrip = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isTrip"')
  return Trip_possibleTypes.includes(obj.__typename)
}



var ValidationResult_possibleTypes = ['ValidationResult']
export var isValidationResult = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationResult"')
  return ValidationResult_possibleTypes.includes(obj.__typename)
}



var ValidationResultError_possibleTypes = ['ValidationResultError']
export var isValidationResultError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationResultError"')
  return ValidationResultError_possibleTypes.includes(obj.__typename)
}



var ValidationResultErrorGroup_possibleTypes = ['ValidationResultErrorGroup']
export var isValidationResultErrorGroup = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationResultErrorGroup"')
  return ValidationResultErrorGroup_possibleTypes.includes(obj.__typename)
}



var VehiclePosition_possibleTypes = ['VehiclePosition']
export var isVehiclePosition = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isVehiclePosition"')
  return VehiclePosition_possibleTypes.includes(obj.__typename)
}



var Waypoint_possibleTypes = ['Waypoint']
export var isWaypoint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isWaypoint"')
  return Waypoint_possibleTypes.includes(obj.__typename)
}
