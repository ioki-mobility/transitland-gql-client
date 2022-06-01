export default {
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
}