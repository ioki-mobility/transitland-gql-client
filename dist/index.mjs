var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// src/_client/types.cjs.js
var require_types_cjs = __commonJS({
  "src/_client/types.cjs.js"(exports, module) {
    module.exports = {
      "scalars": [
        5,
        6,
        12,
        16,
        18,
        27,
        28,
        42,
        44,
        45,
        46,
        50,
        51,
        57,
        59,
        65,
        72,
        73,
        76,
        82,
        83,
        84,
        87
      ],
      "types": {
        "Agency": {
          "agency_email": [
            82
          ],
          "agency_fare_url": [
            82
          ],
          "agency_id": [
            82
          ],
          "agency_lang": [
            82
          ],
          "agency_name": [
            82
          ],
          "agency_phone": [
            82
          ],
          "agency_timezone": [
            82
          ],
          "agency_url": [
            82
          ],
          "alerts": [
            4
          ],
          "census_geographies": [
            9,
            {
              "layer": [
                82,
                "String!"
              ],
              "limit": [
                46
              ],
              "radius": [
                42
              ]
            }
          ],
          "feed_onestop_id": [
            82
          ],
          "feed_version": [
            31
          ],
          "feed_version_sha1": [
            82
          ],
          "geometry": [
            59
          ],
          "id": [
            46
          ],
          "onestop_id": [
            82
          ],
          "operator": [
            53
          ],
          "places": [
            2,
            {
              "limit": [
                46
              ],
              "where": [
                3
              ]
            }
          ],
          "routes": [
            66,
            {
              "limit": [
                46
              ],
              "where": [
                67
              ]
            }
          ],
          "search_rank": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "AgencyFilter": {
          "adm0_iso": [
            82
          ],
          "adm0_name": [
            82
          ],
          "adm1_iso": [
            82
          ],
          "adm1_name": [
            82
          ],
          "agency_id": [
            82
          ],
          "agency_name": [
            82
          ],
          "city_name": [
            82
          ],
          "feed_onestop_id": [
            82
          ],
          "feed_version_sha1": [
            82
          ],
          "near": [
            58
          ],
          "onestop_id": [
            82
          ],
          "search": [
            82
          ],
          "within": [
            59
          ],
          "__typename": [
            82
          ]
        },
        "AgencyPlace": {
          "adm0_name": [
            82
          ],
          "adm1_name": [
            82
          ],
          "city_name": [
            82
          ],
          "rank": [
            42
          ],
          "__typename": [
            82
          ]
        },
        "AgencyPlaceFilter": {
          "min_rank": [
            42
          ],
          "__typename": [
            82
          ]
        },
        "Alert": {
          "active_period": [
            61
          ],
          "cause": [
            82
          ],
          "description_text": [
            62
          ],
          "effect": [
            82
          ],
          "header_text": [
            62
          ],
          "severity_level": [
            82
          ],
          "tts_description_text": [
            62
          ],
          "tts_header_text": [
            62
          ],
          "url": [
            62
          ],
          "__typename": [
            82
          ]
        },
        "Any": {},
        "Boolean": {},
        "Calendar": {
          "added_dates": [
            12,
            {
              "limit": [
                46
              ]
            }
          ],
          "end_date": [
            12
          ],
          "friday": [
            46
          ],
          "id": [
            46
          ],
          "monday": [
            46
          ],
          "removed_dates": [
            12,
            {
              "limit": [
                46
              ]
            }
          ],
          "saturday": [
            46
          ],
          "service_id": [
            82
          ],
          "start_date": [
            12
          ],
          "sunday": [
            46
          ],
          "thursday": [
            46
          ],
          "tuesday": [
            46
          ],
          "wednesday": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "CalendarDateFilter": {
          "date": [
            12
          ],
          "exception_type": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "CensusGeography": {
          "aland": [
            42
          ],
          "awater": [
            42
          ],
          "geoid": [
            82
          ],
          "geometry": [
            59
          ],
          "id": [
            46
          ],
          "layer_name": [
            82
          ],
          "name": [
            82
          ],
          "values": [
            11,
            {
              "limit": [
                46
              ],
              "table_names": [
                82,
                "[String!]!"
              ]
            }
          ],
          "__typename": [
            82
          ]
        },
        "CensusTable": {
          "id": [
            46
          ],
          "table_group": [
            82
          ],
          "table_name": [
            82
          ],
          "table_title": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "CensusValue": {
          "table": [
            10
          ],
          "values": [
            5
          ],
          "__typename": [
            82
          ]
        },
        "Date": {},
        "DirectionRequest": {
          "depart_at": [
            84
          ],
          "from": [
            93
          ],
          "mode": [
            76
          ],
          "to": [
            93
          ],
          "__typename": [
            82
          ]
        },
        "Directions": {
          "data_source": [
            82
          ],
          "destination": [
            92
          ],
          "distance": [
            15
          ],
          "duration": [
            17
          ],
          "end_time": [
            84
          ],
          "exception": [
            82
          ],
          "itineraries": [
            47
          ],
          "origin": [
            92
          ],
          "start_time": [
            84
          ],
          "success": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "Distance": {
          "distance": [
            42
          ],
          "units": [
            16
          ],
          "__typename": [
            82
          ]
        },
        "DistanceUnit": {},
        "Duration": {
          "duration": [
            42
          ],
          "units": [
            18
          ],
          "__typename": [
            82
          ]
        },
        "DurationUnit": {},
        "Feed": {
          "associated_operators": [
            53
          ],
          "authorization": [
            20
          ],
          "feed_fetches": [
            21,
            {
              "limit": [
                46
              ],
              "where": [
                22
              ]
            }
          ],
          "feed_state": [
            29
          ],
          "feed_versions": [
            31,
            {
              "limit": [
                46
              ],
              "where": [
                35
              ]
            }
          ],
          "file": [
            82
          ],
          "id": [
            46
          ],
          "languages": [
            82
          ],
          "license": [
            25
          ],
          "name": [
            82
          ],
          "onestop_id": [
            82
          ],
          "search_rank": [
            82
          ],
          "spec": [
            28
          ],
          "tags": [
            83
          ],
          "urls": [
            30
          ],
          "__typename": [
            82
          ]
        },
        "FeedAuthorization": {
          "info_url": [
            82
          ],
          "param_name": [
            82
          ],
          "type": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedFetch": {
          "fetch_error": [
            82
          ],
          "fetched_at": [
            84
          ],
          "id": [
            46
          ],
          "response_code": [
            46
          ],
          "response_sha1": [
            82
          ],
          "response_size": [
            46
          ],
          "success": [
            6
          ],
          "url": [
            82
          ],
          "url_type": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedFetchFilter": {
          "success": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "FeedFilter": {
          "fetch_error": [
            6
          ],
          "import_status": [
            45
          ],
          "onestop_id": [
            82
          ],
          "search": [
            82
          ],
          "source_url": [
            26
          ],
          "spec": [
            28
          ],
          "tags": [
            83
          ],
          "__typename": [
            82
          ]
        },
        "FeedInfo": {
          "default_lang": [
            82
          ],
          "feed_contact_email": [
            82
          ],
          "feed_contact_url": [
            82
          ],
          "feed_end_date": [
            12
          ],
          "feed_lang": [
            82
          ],
          "feed_publisher_name": [
            82
          ],
          "feed_publisher_url": [
            82
          ],
          "feed_start_date": [
            12
          ],
          "feed_version": [
            82
          ],
          "id": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "FeedLicense": {
          "attribution_instructions": [
            82
          ],
          "attribution_text": [
            82
          ],
          "commercial_use_allowed": [
            82
          ],
          "create_derived_product": [
            82
          ],
          "redistribution_allowed": [
            82
          ],
          "share_alike_optional": [
            82
          ],
          "spdx_identifier": [
            82
          ],
          "url": [
            82
          ],
          "use_without_attribution": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedSourceUrl": {
          "case_sensitive": [
            6
          ],
          "type": [
            27
          ],
          "url": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedSourceUrlTypes": {},
        "FeedSpecTypes": {},
        "FeedState": {
          "feed_version": [
            31
          ],
          "id": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "FeedUrls": {
          "gbfs_auto_discovery": [
            82
          ],
          "mds_provider": [
            82
          ],
          "realtime_alerts": [
            82
          ],
          "realtime_trip_updates": [
            82
          ],
          "realtime_vehicle_positions": [
            82
          ],
          "static_current": [
            82
          ],
          "static_historic": [
            82
          ],
          "static_planned": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersion": {
          "agencies": [
            0,
            {
              "limit": [
                46
              ],
              "where": [
                1
              ]
            }
          ],
          "created_by": [
            82
          ],
          "description": [
            82
          ],
          "earliest_calendar_date": [
            12
          ],
          "feed": [
            19
          ],
          "feed_infos": [
            24,
            {
              "limit": [
                46
              ]
            }
          ],
          "feed_version_gtfs_import": [
            36
          ],
          "fetched_at": [
            84
          ],
          "files": [
            34,
            {
              "limit": [
                46
              ]
            }
          ],
          "geometry": [
            59
          ],
          "id": [
            46
          ],
          "latest_calendar_date": [
            12
          ],
          "name": [
            82
          ],
          "routes": [
            66,
            {
              "limit": [
                46
              ],
              "where": [
                67
              ]
            }
          ],
          "service_levels": [
            38,
            {
              "limit": [
                46
              ],
              "where": [
                39
              ]
            }
          ],
          "sha1": [
            82
          ],
          "stops": [
            77,
            {
              "limit": [
                46
              ],
              "where": [
                78
              ]
            }
          ],
          "trips": [
            85,
            {
              "limit": [
                46
              ],
              "where": [
                86
              ]
            }
          ],
          "updated_by": [
            82
          ],
          "url": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionDeleteResult": {
          "success": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionFetchResult": {
          "feed_version": [
            31
          ],
          "fetch_error": [
            82
          ],
          "found_dir_sha1": [
            6
          ],
          "found_sha1": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionFileInfo": {
          "csv_like": [
            6
          ],
          "header": [
            82
          ],
          "id": [
            46
          ],
          "name": [
            82
          ],
          "rows": [
            46
          ],
          "sha1": [
            82
          ],
          "size": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionFilter": {
          "feed_ids": [
            46
          ],
          "feed_onestop_id": [
            82
          ],
          "sha1": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionGtfsImport": {
          "created_at": [
            84
          ],
          "entity_count": [
            5
          ],
          "exception_log": [
            82
          ],
          "id": [
            46
          ],
          "in_progress": [
            6
          ],
          "interpolated_stop_time_count": [
            46
          ],
          "schedule_removed": [
            6
          ],
          "skip_entity_error_count": [
            5
          ],
          "skip_entity_filter_count": [
            5
          ],
          "skip_entity_marked_count": [
            5
          ],
          "skip_entity_reference_count": [
            5
          ],
          "success": [
            6
          ],
          "updated_at": [
            84
          ],
          "warning_count": [
            5
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionImportResult": {
          "success": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionServiceLevel": {
          "end_date": [
            12
          ],
          "friday": [
            46
          ],
          "id": [
            46
          ],
          "monday": [
            46
          ],
          "saturday": [
            46
          ],
          "start_date": [
            12
          ],
          "sunday": [
            46
          ],
          "thursday": [
            46
          ],
          "tuesday": [
            46
          ],
          "wednesday": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionServiceLevelFilter": {
          "end_date": [
            12
          ],
          "start_date": [
            12
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionSetInput": {
          "description": [
            82
          ],
          "name": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "FeedVersionUnimportResult": {
          "success": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "Float": {},
        "Frequency": {
          "end_time": [
            73
          ],
          "exact_times": [
            46
          ],
          "headway_secs": [
            46
          ],
          "id": [
            46
          ],
          "start_time": [
            73
          ],
          "__typename": [
            82
          ]
        },
        "Geometry": {},
        "ImportStatus": {},
        "Int": {},
        "Itinerary": {
          "distance": [
            15
          ],
          "duration": [
            17
          ],
          "end_time": [
            84
          ],
          "from": [
            92
          ],
          "legs": [
            48
          ],
          "start_time": [
            84
          ],
          "to": [
            92
          ],
          "__typename": [
            82
          ]
        },
        "Leg": {
          "distance": [
            15
          ],
          "duration": [
            17
          ],
          "end_time": [
            84
          ],
          "from": [
            92
          ],
          "geometry": [
            50
          ],
          "start_time": [
            84
          ],
          "steps": [
            75
          ],
          "to": [
            92
          ],
          "__typename": [
            82
          ]
        },
        "Level": {
          "id": [
            46
          ],
          "level_id": [
            82
          ],
          "level_index": [
            42
          ],
          "level_name": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "LineString": {},
        "Map": {},
        "Mutation": {
          "feed_version_delete": [
            32,
            {
              "id": [
                46,
                "Int!"
              ]
            }
          ],
          "feed_version_fetch": [
            33,
            {
              "feed_onestop_id": [
                82,
                "String!"
              ],
              "file": [
                87
              ],
              "url": [
                82
              ]
            }
          ],
          "feed_version_import": [
            37,
            {
              "sha1": [
                82,
                "String!"
              ]
            }
          ],
          "feed_version_unimport": [
            41,
            {
              "id": [
                46,
                "Int!"
              ]
            }
          ],
          "feed_version_update": [
            31,
            {
              "id": [
                46,
                "Int!"
              ],
              "set": [
                40,
                "FeedVersionSetInput!"
              ]
            }
          ],
          "validate_gtfs": [
            88,
            {
              "file": [
                87
              ],
              "realtime_urls": [
                82,
                "[String!]"
              ],
              "url": [
                82
              ]
            }
          ],
          "__typename": [
            82
          ]
        },
        "Operator": {
          "agencies": [
            0
          ],
          "feeds": [
            19,
            {
              "limit": [
                46
              ],
              "where": [
                23
              ]
            }
          ],
          "file": [
            82
          ],
          "generated": [
            6
          ],
          "id": [
            46
          ],
          "name": [
            82
          ],
          "onestop_id": [
            82
          ],
          "search_rank": [
            82
          ],
          "short_name": [
            82
          ],
          "tags": [
            83
          ],
          "website": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "OperatorFilter": {
          "adm0_iso": [
            82
          ],
          "adm0_name": [
            82
          ],
          "adm1_iso": [
            82
          ],
          "adm1_name": [
            82
          ],
          "agency_id": [
            82
          ],
          "city_name": [
            82
          ],
          "feed_onestop_id": [
            82
          ],
          "merged": [
            6
          ],
          "onestop_id": [
            82
          ],
          "search": [
            82
          ],
          "tags": [
            83
          ],
          "__typename": [
            82
          ]
        },
        "Pathway": {
          "from_stop": [
            77
          ],
          "id": [
            46
          ],
          "is_bidirectional": [
            46
          ],
          "length": [
            42
          ],
          "max_slope": [
            42
          ],
          "min_width": [
            42
          ],
          "pathway_id": [
            82
          ],
          "pathway_mode": [
            46
          ],
          "reverse_signposted_as": [
            82
          ],
          "signposted_as": [
            82
          ],
          "stair_count": [
            46
          ],
          "to_stop": [
            77
          ],
          "traversal_time": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "PathwayFilter": {
          "pathway_mode": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "Point": {},
        "PointRadius": {
          "lat": [
            42
          ],
          "lon": [
            42
          ],
          "radius": [
            42
          ],
          "__typename": [
            82
          ]
        },
        "Polygon": {},
        "Query": {
          "agencies": [
            0,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                1
              ]
            }
          ],
          "directions": [
            14,
            {
              "where": [
                13,
                "DirectionRequest!"
              ]
            }
          ],
          "feed_versions": [
            31,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                35
              ]
            }
          ],
          "feeds": [
            19,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                23
              ]
            }
          ],
          "operators": [
            53,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                54
              ]
            }
          ],
          "routes": [
            66,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                67
              ]
            }
          ],
          "stops": [
            77,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                78
              ]
            }
          ],
          "trips": [
            85,
            {
              "after": [
                46
              ],
              "ids": [
                46,
                "[Int!]"
              ],
              "limit": [
                46
              ],
              "where": [
                86
              ]
            }
          ],
          "__typename": [
            82
          ]
        },
        "RTTimeRange": {
          "end": [
            46
          ],
          "start": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "RTTranslation": {
          "language": [
            82
          ],
          "text": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "RTTripDescriptor": {
          "direction_id": [
            46
          ],
          "route_id": [
            82
          ],
          "schedule_relationship": [
            82
          ],
          "start_date": [
            12
          ],
          "start_time": [
            73
          ],
          "trip_id": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "RTVehicleDescriptor": {
          "id": [
            82
          ],
          "label": [
            82
          ],
          "license_plate": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "Role": {},
        "Route": {
          "agency": [
            0
          ],
          "alerts": [
            4
          ],
          "census_geographies": [
            9,
            {
              "layer": [
                82,
                "String!"
              ],
              "limit": [
                46
              ],
              "radius": [
                42
              ]
            }
          ],
          "continuous_drop_off": [
            46
          ],
          "continuous_pickup": [
            46
          ],
          "feed_onestop_id": [
            82
          ],
          "feed_version": [
            31
          ],
          "feed_version_sha1": [
            82
          ],
          "geometries": [
            68,
            {
              "limit": [
                46
              ]
            }
          ],
          "geometry": [
            44
          ],
          "headways": [
            69,
            {
              "limit": [
                46
              ]
            }
          ],
          "id": [
            46
          ],
          "onestop_id": [
            82
          ],
          "route_color": [
            82
          ],
          "route_desc": [
            82
          ],
          "route_id": [
            82
          ],
          "route_long_name": [
            82
          ],
          "route_short_name": [
            82
          ],
          "route_sort_order": [
            46
          ],
          "route_stop_buffer": [
            71,
            {
              "radius": [
                42
              ]
            }
          ],
          "route_stops": [
            70,
            {
              "limit": [
                46
              ]
            }
          ],
          "route_text_color": [
            82
          ],
          "route_type": [
            46
          ],
          "route_url": [
            82
          ],
          "search_rank": [
            82
          ],
          "stops": [
            77,
            {
              "limit": [
                46
              ],
              "where": [
                78
              ]
            }
          ],
          "trips": [
            85,
            {
              "limit": [
                46
              ],
              "where": [
                86
              ]
            }
          ],
          "__typename": [
            82
          ]
        },
        "RouteFilter": {
          "agency_ids": [
            46
          ],
          "allow_previous_onestop_ids": [
            6
          ],
          "feed_onestop_id": [
            82
          ],
          "feed_version_sha1": [
            82
          ],
          "near": [
            58
          ],
          "onestop_id": [
            82
          ],
          "onestop_ids": [
            82
          ],
          "operator_onestop_id": [
            82
          ],
          "route_id": [
            82
          ],
          "route_type": [
            46
          ],
          "search": [
            82
          ],
          "within": [
            59
          ],
          "__typename": [
            82
          ]
        },
        "RouteGeometry": {
          "combined_geometry": [
            44
          ],
          "first_point_max_distance": [
            42
          ],
          "generated": [
            6
          ],
          "geometry": [
            50
          ],
          "length": [
            42
          ],
          "max_segment_length": [
            42
          ],
          "__typename": [
            82
          ]
        },
        "RouteHeadway": {
          "departures": [
            73
          ],
          "direction_id": [
            46
          ],
          "dow_category": [
            46
          ],
          "headway_secs": [
            46
          ],
          "service_date": [
            12
          ],
          "stop": [
            77
          ],
          "stop_trip_count": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "RouteStop": {
          "agency": [
            0
          ],
          "agency_id": [
            46
          ],
          "id": [
            46
          ],
          "route": [
            66
          ],
          "route_id": [
            46
          ],
          "stop": [
            77
          ],
          "stop_id": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "RouteStopBuffer": {
          "stop_buffer": [
            44
          ],
          "stop_convexhull": [
            59
          ],
          "stop_points": [
            44
          ],
          "__typename": [
            82
          ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "Shape": {
          "generated": [
            6
          ],
          "geometry": [
            50
          ],
          "id": [
            46
          ],
          "shape_id": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "Step": {
          "distance": [
            15
          ],
          "duration": [
            17
          ],
          "end_time": [
            84
          ],
          "geometry_offset": [
            46
          ],
          "instruction": [
            82
          ],
          "mode": [
            76
          ],
          "start_time": [
            84
          ],
          "to": [
            92
          ],
          "__typename": [
            82
          ]
        },
        "StepMode": {},
        "Stop": {
          "alerts": [
            4
          ],
          "arrivals": [
            79,
            {
              "limit": [
                46
              ],
              "where": [
                81
              ]
            }
          ],
          "census_geographies": [
            9,
            {
              "layer": [
                82,
                "String!"
              ],
              "limit": [
                46
              ],
              "radius": [
                42
              ]
            }
          ],
          "children": [
            77,
            {
              "limit": [
                46
              ]
            }
          ],
          "departures": [
            79,
            {
              "limit": [
                46
              ],
              "where": [
                81
              ]
            }
          ],
          "directions": [
            14,
            {
              "depart_at": [
                84
              ],
              "from": [
                93
              ],
              "mode": [
                76
              ],
              "to": [
                93
              ]
            }
          ],
          "feed_onestop_id": [
            82
          ],
          "feed_version": [
            31
          ],
          "feed_version_sha1": [
            82
          ],
          "geometry": [
            57
          ],
          "id": [
            46
          ],
          "level": [
            49
          ],
          "location_type": [
            46
          ],
          "onestop_id": [
            82
          ],
          "parent": [
            77
          ],
          "pathways_from_stop": [
            55,
            {
              "limit": [
                46
              ]
            }
          ],
          "pathways_to_stop": [
            55,
            {
              "limit": [
                46
              ]
            }
          ],
          "platform_code": [
            82
          ],
          "route_stops": [
            70,
            {
              "limit": [
                46
              ]
            }
          ],
          "search_rank": [
            82
          ],
          "stop_code": [
            82
          ],
          "stop_desc": [
            82
          ],
          "stop_id": [
            82
          ],
          "stop_name": [
            82
          ],
          "stop_times": [
            79,
            {
              "limit": [
                46
              ],
              "where": [
                81
              ]
            }
          ],
          "stop_timezone": [
            82
          ],
          "stop_url": [
            82
          ],
          "tts_stop_name": [
            82
          ],
          "wheelchair_boarding": [
            46
          ],
          "zone_id": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "StopFilter": {
          "agency_ids": [
            46
          ],
          "allow_previous_onestop_ids": [
            6
          ],
          "feed_onestop_id": [
            82
          ],
          "feed_version_sha1": [
            82
          ],
          "near": [
            58
          ],
          "onestop_id": [
            82
          ],
          "onestop_ids": [
            82
          ],
          "search": [
            82
          ],
          "served_by_onestop_ids": [
            82
          ],
          "stop_code": [
            82
          ],
          "stop_id": [
            82
          ],
          "within": [
            59
          ],
          "__typename": [
            82
          ]
        },
        "StopTime": {
          "arrival": [
            80
          ],
          "arrival_time": [
            73
          ],
          "continuous_drop_off": [
            46
          ],
          "continuous_pickup": [
            46
          ],
          "departure": [
            80
          ],
          "departure_time": [
            73
          ],
          "drop_off_type": [
            46
          ],
          "interpolated": [
            46
          ],
          "pickup_type": [
            46
          ],
          "service_date": [
            12
          ],
          "stop": [
            77
          ],
          "stop_headsign": [
            82
          ],
          "stop_sequence": [
            46
          ],
          "timepoint": [
            46
          ],
          "trip": [
            85
          ],
          "__typename": [
            82
          ]
        },
        "StopTimeEvent": {
          "delay": [
            46
          ],
          "estimated": [
            73
          ],
          "estimated_utc": [
            84
          ],
          "scheduled": [
            73
          ],
          "stop_timezone": [
            82
          ],
          "uncertainty": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "StopTimeFilter": {
          "allow_previous_route_onestop_ids": [
            6
          ],
          "end_time": [
            46
          ],
          "exclude_first": [
            6
          ],
          "exclude_last": [
            6
          ],
          "next": [
            46
          ],
          "route_onestop_ids": [
            82
          ],
          "service_date": [
            12
          ],
          "start_time": [
            46
          ],
          "use_service_window": [
            6
          ],
          "__typename": [
            82
          ]
        },
        "String": {},
        "Tags": {},
        "Time": {},
        "Trip": {
          "alerts": [
            4
          ],
          "bikes_allowed": [
            46
          ],
          "block_id": [
            82
          ],
          "calendar": [
            7
          ],
          "direction_id": [
            46
          ],
          "feed_version": [
            31
          ],
          "frequencies": [
            43,
            {
              "limit": [
                46
              ]
            }
          ],
          "id": [
            46
          ],
          "route": [
            66
          ],
          "schedule_relationship": [
            72
          ],
          "shape": [
            74
          ],
          "stop_pattern_id": [
            46
          ],
          "stop_times": [
            79,
            {
              "limit": [
                46
              ]
            }
          ],
          "timestamp": [
            84
          ],
          "trip_headsign": [
            82
          ],
          "trip_id": [
            82
          ],
          "trip_short_name": [
            82
          ],
          "wheelchair_accessible": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "TripFilter": {
          "feed_onestop_id": [
            82
          ],
          "feed_version_sha1": [
            82
          ],
          "route_ids": [
            46
          ],
          "route_onestop_ids": [
            82
          ],
          "service_date": [
            12
          ],
          "trip_id": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "Upload": {},
        "ValidationResult": {
          "agencies": [
            0,
            {
              "limit": [
                46
              ]
            }
          ],
          "earliest_calendar_date": [
            12
          ],
          "errors": [
            90
          ],
          "failure_reason": [
            82
          ],
          "feed_infos": [
            24,
            {
              "limit": [
                46
              ]
            }
          ],
          "files": [
            34
          ],
          "latest_calendar_date": [
            12
          ],
          "routes": [
            66,
            {
              "limit": [
                46
              ]
            }
          ],
          "service_levels": [
            38,
            {
              "limit": [
                46
              ],
              "route_id": [
                82
              ]
            }
          ],
          "sha1": [
            82
          ],
          "stops": [
            77,
            {
              "limit": [
                46
              ]
            }
          ],
          "success": [
            6
          ],
          "warnings": [
            90
          ],
          "__typename": [
            82
          ]
        },
        "ValidationResultError": {
          "entity_id": [
            82
          ],
          "error_type": [
            82
          ],
          "field": [
            82
          ],
          "filename": [
            82
          ],
          "message": [
            82
          ],
          "value": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "ValidationResultErrorGroup": {
          "count": [
            46
          ],
          "error_type": [
            82
          ],
          "errors": [
            89
          ],
          "filename": [
            82
          ],
          "limit": [
            46
          ],
          "__typename": [
            82
          ]
        },
        "VehiclePosition": {
          "congestion_level": [
            82
          ],
          "current_status": [
            82
          ],
          "current_stop_sequence": [
            46
          ],
          "position": [
            57
          ],
          "stop_id": [
            77
          ],
          "timestamp": [
            84
          ],
          "vehicle": [
            64
          ],
          "__typename": [
            82
          ]
        },
        "Waypoint": {
          "lat": [
            42
          ],
          "lon": [
            42
          ],
          "name": [
            82
          ],
          "__typename": [
            82
          ]
        },
        "WaypointInput": {
          "lat": [
            42
          ],
          "lon": [
            42
          ],
          "name": [
            82
          ],
          "__typename": [
            82
          ]
        }
      }
    };
  }
});

// src/_client/guards.cjs.js
var require_guards_cjs = __commonJS({
  "src/_client/guards.cjs.js"(exports, module) {
    var Agency_possibleTypes = ["Agency"];
    module.exports.isAgency = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isAgency"');
      return Agency_possibleTypes.includes(obj.__typename);
    };
    var AgencyPlace_possibleTypes = ["AgencyPlace"];
    module.exports.isAgencyPlace = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isAgencyPlace"');
      return AgencyPlace_possibleTypes.includes(obj.__typename);
    };
    var Alert_possibleTypes = ["Alert"];
    module.exports.isAlert = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isAlert"');
      return Alert_possibleTypes.includes(obj.__typename);
    };
    var Calendar_possibleTypes = ["Calendar"];
    module.exports.isCalendar = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isCalendar"');
      return Calendar_possibleTypes.includes(obj.__typename);
    };
    var CensusGeography_possibleTypes = ["CensusGeography"];
    module.exports.isCensusGeography = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isCensusGeography"');
      return CensusGeography_possibleTypes.includes(obj.__typename);
    };
    var CensusTable_possibleTypes = ["CensusTable"];
    module.exports.isCensusTable = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isCensusTable"');
      return CensusTable_possibleTypes.includes(obj.__typename);
    };
    var CensusValue_possibleTypes = ["CensusValue"];
    module.exports.isCensusValue = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isCensusValue"');
      return CensusValue_possibleTypes.includes(obj.__typename);
    };
    var Directions_possibleTypes = ["Directions"];
    module.exports.isDirections = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isDirections"');
      return Directions_possibleTypes.includes(obj.__typename);
    };
    var Distance_possibleTypes = ["Distance"];
    module.exports.isDistance = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isDistance"');
      return Distance_possibleTypes.includes(obj.__typename);
    };
    var Duration_possibleTypes = ["Duration"];
    module.exports.isDuration = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isDuration"');
      return Duration_possibleTypes.includes(obj.__typename);
    };
    var Feed_possibleTypes = ["Feed"];
    module.exports.isFeed = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeed"');
      return Feed_possibleTypes.includes(obj.__typename);
    };
    var FeedAuthorization_possibleTypes = ["FeedAuthorization"];
    module.exports.isFeedAuthorization = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedAuthorization"');
      return FeedAuthorization_possibleTypes.includes(obj.__typename);
    };
    var FeedFetch_possibleTypes = ["FeedFetch"];
    module.exports.isFeedFetch = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedFetch"');
      return FeedFetch_possibleTypes.includes(obj.__typename);
    };
    var FeedInfo_possibleTypes = ["FeedInfo"];
    module.exports.isFeedInfo = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedInfo"');
      return FeedInfo_possibleTypes.includes(obj.__typename);
    };
    var FeedLicense_possibleTypes = ["FeedLicense"];
    module.exports.isFeedLicense = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedLicense"');
      return FeedLicense_possibleTypes.includes(obj.__typename);
    };
    var FeedState_possibleTypes = ["FeedState"];
    module.exports.isFeedState = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedState"');
      return FeedState_possibleTypes.includes(obj.__typename);
    };
    var FeedUrls_possibleTypes = ["FeedUrls"];
    module.exports.isFeedUrls = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedUrls"');
      return FeedUrls_possibleTypes.includes(obj.__typename);
    };
    var FeedVersion_possibleTypes = ["FeedVersion"];
    module.exports.isFeedVersion = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersion"');
      return FeedVersion_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionDeleteResult_possibleTypes = ["FeedVersionDeleteResult"];
    module.exports.isFeedVersionDeleteResult = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionDeleteResult"');
      return FeedVersionDeleteResult_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionFetchResult_possibleTypes = ["FeedVersionFetchResult"];
    module.exports.isFeedVersionFetchResult = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionFetchResult"');
      return FeedVersionFetchResult_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionFileInfo_possibleTypes = ["FeedVersionFileInfo"];
    module.exports.isFeedVersionFileInfo = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionFileInfo"');
      return FeedVersionFileInfo_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionGtfsImport_possibleTypes = ["FeedVersionGtfsImport"];
    module.exports.isFeedVersionGtfsImport = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionGtfsImport"');
      return FeedVersionGtfsImport_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionImportResult_possibleTypes = ["FeedVersionImportResult"];
    module.exports.isFeedVersionImportResult = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionImportResult"');
      return FeedVersionImportResult_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionServiceLevel_possibleTypes = ["FeedVersionServiceLevel"];
    module.exports.isFeedVersionServiceLevel = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionServiceLevel"');
      return FeedVersionServiceLevel_possibleTypes.includes(obj.__typename);
    };
    var FeedVersionUnimportResult_possibleTypes = ["FeedVersionUnimportResult"];
    module.exports.isFeedVersionUnimportResult = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFeedVersionUnimportResult"');
      return FeedVersionUnimportResult_possibleTypes.includes(obj.__typename);
    };
    var Frequency_possibleTypes = ["Frequency"];
    module.exports.isFrequency = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isFrequency"');
      return Frequency_possibleTypes.includes(obj.__typename);
    };
    var Itinerary_possibleTypes = ["Itinerary"];
    module.exports.isItinerary = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isItinerary"');
      return Itinerary_possibleTypes.includes(obj.__typename);
    };
    var Leg_possibleTypes = ["Leg"];
    module.exports.isLeg = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isLeg"');
      return Leg_possibleTypes.includes(obj.__typename);
    };
    var Level_possibleTypes = ["Level"];
    module.exports.isLevel = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isLevel"');
      return Level_possibleTypes.includes(obj.__typename);
    };
    var Mutation_possibleTypes = ["Mutation"];
    module.exports.isMutation = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isMutation"');
      return Mutation_possibleTypes.includes(obj.__typename);
    };
    var Operator_possibleTypes = ["Operator"];
    module.exports.isOperator = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isOperator"');
      return Operator_possibleTypes.includes(obj.__typename);
    };
    var Pathway_possibleTypes = ["Pathway"];
    module.exports.isPathway = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isPathway"');
      return Pathway_possibleTypes.includes(obj.__typename);
    };
    var Query_possibleTypes = ["Query"];
    module.exports.isQuery = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isQuery"');
      return Query_possibleTypes.includes(obj.__typename);
    };
    var RTTimeRange_possibleTypes = ["RTTimeRange"];
    module.exports.isRTTimeRange = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRTTimeRange"');
      return RTTimeRange_possibleTypes.includes(obj.__typename);
    };
    var RTTranslation_possibleTypes = ["RTTranslation"];
    module.exports.isRTTranslation = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRTTranslation"');
      return RTTranslation_possibleTypes.includes(obj.__typename);
    };
    var RTTripDescriptor_possibleTypes = ["RTTripDescriptor"];
    module.exports.isRTTripDescriptor = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRTTripDescriptor"');
      return RTTripDescriptor_possibleTypes.includes(obj.__typename);
    };
    var RTVehicleDescriptor_possibleTypes = ["RTVehicleDescriptor"];
    module.exports.isRTVehicleDescriptor = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRTVehicleDescriptor"');
      return RTVehicleDescriptor_possibleTypes.includes(obj.__typename);
    };
    var Route_possibleTypes = ["Route"];
    module.exports.isRoute = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRoute"');
      return Route_possibleTypes.includes(obj.__typename);
    };
    var RouteGeometry_possibleTypes = ["RouteGeometry"];
    module.exports.isRouteGeometry = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRouteGeometry"');
      return RouteGeometry_possibleTypes.includes(obj.__typename);
    };
    var RouteHeadway_possibleTypes = ["RouteHeadway"];
    module.exports.isRouteHeadway = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRouteHeadway"');
      return RouteHeadway_possibleTypes.includes(obj.__typename);
    };
    var RouteStop_possibleTypes = ["RouteStop"];
    module.exports.isRouteStop = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRouteStop"');
      return RouteStop_possibleTypes.includes(obj.__typename);
    };
    var RouteStopBuffer_possibleTypes = ["RouteStopBuffer"];
    module.exports.isRouteStopBuffer = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isRouteStopBuffer"');
      return RouteStopBuffer_possibleTypes.includes(obj.__typename);
    };
    var Shape_possibleTypes = ["Shape"];
    module.exports.isShape = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isShape"');
      return Shape_possibleTypes.includes(obj.__typename);
    };
    var Step_possibleTypes = ["Step"];
    module.exports.isStep = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isStep"');
      return Step_possibleTypes.includes(obj.__typename);
    };
    var Stop_possibleTypes = ["Stop"];
    module.exports.isStop = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isStop"');
      return Stop_possibleTypes.includes(obj.__typename);
    };
    var StopTime_possibleTypes = ["StopTime"];
    module.exports.isStopTime = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isStopTime"');
      return StopTime_possibleTypes.includes(obj.__typename);
    };
    var StopTimeEvent_possibleTypes = ["StopTimeEvent"];
    module.exports.isStopTimeEvent = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isStopTimeEvent"');
      return StopTimeEvent_possibleTypes.includes(obj.__typename);
    };
    var Trip_possibleTypes = ["Trip"];
    module.exports.isTrip = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isTrip"');
      return Trip_possibleTypes.includes(obj.__typename);
    };
    var ValidationResult_possibleTypes = ["ValidationResult"];
    module.exports.isValidationResult = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isValidationResult"');
      return ValidationResult_possibleTypes.includes(obj.__typename);
    };
    var ValidationResultError_possibleTypes = ["ValidationResultError"];
    module.exports.isValidationResultError = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isValidationResultError"');
      return ValidationResultError_possibleTypes.includes(obj.__typename);
    };
    var ValidationResultErrorGroup_possibleTypes = ["ValidationResultErrorGroup"];
    module.exports.isValidationResultErrorGroup = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isValidationResultErrorGroup"');
      return ValidationResultErrorGroup_possibleTypes.includes(obj.__typename);
    };
    var VehiclePosition_possibleTypes = ["VehiclePosition"];
    module.exports.isVehiclePosition = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isVehiclePosition"');
      return VehiclePosition_possibleTypes.includes(obj.__typename);
    };
    var Waypoint_possibleTypes = ["Waypoint"];
    module.exports.isWaypoint = function(obj) {
      if (!obj || !obj.__typename)
        throw new Error('__typename is missing in "isWaypoint"');
      return Waypoint_possibleTypes.includes(obj.__typename);
    };
  }
});

// src/_client/index.js
var require_client = __commonJS({
  "src/_client/index.js"(exports, module) {
    var {
      linkTypeMap,
      createClient: createClientOriginal,
      generateGraphqlOperation,
      assertSameVersion
    } = __require("@genql/runtime");
    var typeMap = linkTypeMap(require_types_cjs());
    var version = "2.10.0";
    assertSameVersion(version);
    module.exports.version = version;
    module.exports.createClient = function(options) {
      options = options || {};
      var optionsCopy = {
        url: void 0,
        queryRoot: typeMap.Query,
        mutationRoot: typeMap.Mutation,
        subscriptionRoot: typeMap.Subscription
      };
      for (var name in options) {
        optionsCopy[name] = options[name];
      }
      return createClientOriginal(optionsCopy);
    };
    module.exports.enumDistanceUnit = {
      KILOMETERS: "KILOMETERS",
      MILES: "MILES"
    };
    module.exports.enumDurationUnit = {
      SECONDS: "SECONDS"
    };
    module.exports.enumFeedSourceUrlTypes = {
      gbfs_auto_discovery: "gbfs_auto_discovery",
      mds_provider: "mds_provider",
      realtime_alerts: "realtime_alerts",
      realtime_trip_updates: "realtime_trip_updates",
      realtime_vehicle_positions: "realtime_vehicle_positions",
      static_current: "static_current",
      static_historic: "static_historic",
      static_hypothetical: "static_hypothetical",
      static_planned: "static_planned"
    };
    module.exports.enumFeedSpecTypes = {
      GBFS: "GBFS",
      GTFS: "GTFS",
      GTFS_RT: "GTFS_RT",
      MDS: "MDS"
    };
    module.exports.enumImportStatus = {
      ERROR: "ERROR",
      IN_PROGRESS: "IN_PROGRESS",
      SUCCESS: "SUCCESS"
    };
    module.exports.enumRole = {
      ADMIN: "ADMIN",
      ANON: "ANON",
      USER: "USER"
    };
    module.exports.enumScheduleRelationship = {
      ADDED: "ADDED",
      CANCELED: "CANCELED",
      SCHEDULED: "SCHEDULED",
      UNSCHEDULED: "UNSCHEDULED"
    };
    module.exports.enumStepMode = {
      AUTO: "AUTO",
      BICYCLE: "BICYCLE",
      LINE: "LINE",
      TRANSIT: "TRANSIT",
      WALK: "WALK"
    };
    module.exports.generateQueryOp = function(fields) {
      return generateGraphqlOperation("query", typeMap.Query, fields);
    };
    module.exports.generateMutationOp = function(fields) {
      return generateGraphqlOperation("mutation", typeMap.Mutation, fields);
    };
    module.exports.generateSubscriptionOp = function(fields) {
      return generateGraphqlOperation("subscription", typeMap.Subscription, fields);
    };
    module.exports.everything = {
      __scalar: true
    };
    var schemaExports = require_guards_cjs();
    for (k in schemaExports) {
      module.exports[k] = schemaExports[k];
    }
    var k;
  }
});

// src/index.ts
var src_exports = {};
__reExport(src_exports, __toESM(require_client()));
