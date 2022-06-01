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
        47,
        51,
        52,
        58,
        60,
        66,
        73,
        74,
        77,
        83,
        84,
        85,
        88
    ],
    "types": {
        "Agency": {
            "agency_email": [
                83
            ],
            "agency_fare_url": [
                83
            ],
            "agency_id": [
                83
            ],
            "agency_lang": [
                83
            ],
            "agency_name": [
                83
            ],
            "agency_phone": [
                83
            ],
            "agency_timezone": [
                83
            ],
            "agency_url": [
                83
            ],
            "alerts": [
                4
            ],
            "census_geographies": [
                9,
                {
                    "layer": [
                        83,
                        "String!"
                    ],
                    "limit": [
                        47
                    ],
                    "radius": [
                        42
                    ]
                }
            ],
            "feed_onestop_id": [
                83
            ],
            "feed_version": [
                31
            ],
            "feed_version_sha1": [
                83
            ],
            "geometry": [
                60
            ],
            "id": [
                47
            ],
            "onestop_id": [
                83
            ],
            "operator": [
                54
            ],
            "places": [
                2,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        3
                    ]
                }
            ],
            "routes": [
                67,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "search_rank": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                83
            ],
            "adm0_name": [
                83
            ],
            "adm1_iso": [
                83
            ],
            "adm1_name": [
                83
            ],
            "agency_id": [
                83
            ],
            "agency_name": [
                83
            ],
            "city_name": [
                83
            ],
            "feed_onestop_id": [
                83
            ],
            "feed_version_sha1": [
                83
            ],
            "near": [
                59
            ],
            "onestop_id": [
                83
            ],
            "search": [
                83
            ],
            "within": [
                60
            ],
            "__typename": [
                83
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                83
            ],
            "adm1_name": [
                83
            ],
            "city_name": [
                83
            ],
            "rank": [
                42
            ],
            "__typename": [
                83
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                42
            ],
            "__typename": [
                83
            ]
        },
        "Alert": {
            "active_period": [
                62
            ],
            "cause": [
                83
            ],
            "description_text": [
                63
            ],
            "effect": [
                83
            ],
            "header_text": [
                63
            ],
            "severity_level": [
                83
            ],
            "tts_description_text": [
                63
            ],
            "tts_header_text": [
                63
            ],
            "url": [
                63
            ],
            "__typename": [
                83
            ]
        },
        "Any": {},
        "Boolean": {},
        "Calendar": {
            "added_dates": [
                12,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "end_date": [
                12
            ],
            "friday": [
                47
            ],
            "id": [
                47
            ],
            "monday": [
                47
            ],
            "removed_dates": [
                12,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "saturday": [
                47
            ],
            "service_id": [
                83
            ],
            "start_date": [
                12
            ],
            "sunday": [
                47
            ],
            "thursday": [
                47
            ],
            "tuesday": [
                47
            ],
            "wednesday": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "CalendarDateFilter": {
            "date": [
                12
            ],
            "exception_type": [
                47
            ],
            "__typename": [
                83
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
                83
            ],
            "geometry": [
                60
            ],
            "id": [
                47
            ],
            "layer_name": [
                83
            ],
            "name": [
                83
            ],
            "values": [
                11,
                {
                    "limit": [
                        47
                    ],
                    "table_names": [
                        83,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                83
            ]
        },
        "CensusTable": {
            "id": [
                47
            ],
            "table_group": [
                83
            ],
            "table_name": [
                83
            ],
            "table_title": [
                83
            ],
            "__typename": [
                83
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
                83
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                85
            ],
            "from": [
                94
            ],
            "mode": [
                77
            ],
            "to": [
                94
            ],
            "__typename": [
                83
            ]
        },
        "Directions": {
            "data_source": [
                83
            ],
            "destination": [
                93
            ],
            "distance": [
                15
            ],
            "duration": [
                17
            ],
            "end_time": [
                85
            ],
            "exception": [
                83
            ],
            "itineraries": [
                48
            ],
            "origin": [
                93
            ],
            "start_time": [
                85
            ],
            "success": [
                6
            ],
            "__typename": [
                83
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
                83
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
                83
            ]
        },
        "DurationUnit": {},
        "Feed": {
            "associated_operators": [
                54
            ],
            "authorization": [
                20
            ],
            "feed_fetches": [
                21,
                {
                    "limit": [
                        47
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
                        47
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "file": [
                83
            ],
            "id": [
                47
            ],
            "languages": [
                83
            ],
            "license": [
                25
            ],
            "name": [
                83
            ],
            "onestop_id": [
                83
            ],
            "search_rank": [
                83
            ],
            "spec": [
                28
            ],
            "tags": [
                84
            ],
            "urls": [
                30
            ],
            "__typename": [
                83
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                83
            ],
            "param_name": [
                83
            ],
            "type": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                83
            ],
            "fetched_at": [
                85
            ],
            "id": [
                47
            ],
            "response_code": [
                47
            ],
            "response_sha1": [
                83
            ],
            "response_size": [
                47
            ],
            "success": [
                6
            ],
            "url": [
                83
            ],
            "url_type": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedFetchFilter": {
            "success": [
                6
            ],
            "__typename": [
                83
            ]
        },
        "FeedFilter": {
            "fetch_error": [
                6
            ],
            "import_status": [
                46
            ],
            "onestop_id": [
                83
            ],
            "search": [
                83
            ],
            "source_url": [
                26
            ],
            "spec": [
                28
            ],
            "tags": [
                84
            ],
            "__typename": [
                83
            ]
        },
        "FeedInfo": {
            "default_lang": [
                83
            ],
            "feed_contact_email": [
                83
            ],
            "feed_contact_url": [
                83
            ],
            "feed_end_date": [
                12
            ],
            "feed_lang": [
                83
            ],
            "feed_publisher_name": [
                83
            ],
            "feed_publisher_url": [
                83
            ],
            "feed_start_date": [
                12
            ],
            "feed_version": [
                83
            ],
            "id": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                83
            ],
            "attribution_text": [
                83
            ],
            "commercial_use_allowed": [
                83
            ],
            "create_derived_product": [
                83
            ],
            "redistribution_allowed": [
                83
            ],
            "share_alike_optional": [
                83
            ],
            "spdx_identifier": [
                83
            ],
            "url": [
                83
            ],
            "use_without_attribution": [
                83
            ],
            "__typename": [
                83
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
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedSourceUrlTypes": {},
        "FeedSpecTypes": {},
        "FeedState": {
            "feed_version": [
                31
            ],
            "id": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                83
            ],
            "mds_provider": [
                83
            ],
            "realtime_alerts": [
                83
            ],
            "realtime_trip_updates": [
                83
            ],
            "realtime_vehicle_positions": [
                83
            ],
            "static_current": [
                83
            ],
            "static_historic": [
                83
            ],
            "static_planned": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersion": {
            "agencies": [
                0,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "created_by": [
                83
            ],
            "description": [
                83
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
                        47
                    ]
                }
            ],
            "feed_version_gtfs_import": [
                36
            ],
            "fetched_at": [
                85
            ],
            "files": [
                34,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "geometry": [
                60
            ],
            "id": [
                47
            ],
            "latest_calendar_date": [
                12
            ],
            "name": [
                83
            ],
            "routes": [
                67,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "service_levels": [
                38,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        39
                    ]
                }
            ],
            "sha1": [
                83
            ],
            "stops": [
                78,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "trips": [
                86,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "updated_by": [
                83
            ],
            "url": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                6
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                31
            ],
            "fetch_error": [
                83
            ],
            "found_dir_sha1": [
                6
            ],
            "found_sha1": [
                6
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                6
            ],
            "header": [
                83
            ],
            "id": [
                47
            ],
            "name": [
                83
            ],
            "rows": [
                47
            ],
            "sha1": [
                83
            ],
            "size": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionFilter": {
            "feed_ids": [
                47
            ],
            "feed_onestop_id": [
                83
            ],
            "sha1": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                85
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                83
            ],
            "id": [
                47
            ],
            "in_progress": [
                6
            ],
            "interpolated_stop_time_count": [
                47
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
                85
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                6
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionServiceLevel": {
            "end_date": [
                12
            ],
            "friday": [
                47
            ],
            "id": [
                47
            ],
            "monday": [
                47
            ],
            "saturday": [
                47
            ],
            "start_date": [
                12
            ],
            "sunday": [
                47
            ],
            "thursday": [
                47
            ],
            "tuesday": [
                47
            ],
            "wednesday": [
                47
            ],
            "__typename": [
                83
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
                83
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                83
            ],
            "name": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                6
            ],
            "__typename": [
                83
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                74
            ],
            "exact_times": [
                47
            ],
            "headway_secs": [
                47
            ],
            "id": [
                47
            ],
            "start_time": [
                74
            ],
            "__typename": [
                83
            ]
        },
        "Geometry": {},
        "ID": {},
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
                85
            ],
            "from": [
                93
            ],
            "legs": [
                49
            ],
            "start_time": [
                85
            ],
            "to": [
                93
            ],
            "__typename": [
                83
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
                85
            ],
            "from": [
                93
            ],
            "geometry": [
                51
            ],
            "start_time": [
                85
            ],
            "steps": [
                76
            ],
            "to": [
                93
            ],
            "__typename": [
                83
            ]
        },
        "Level": {
            "id": [
                47
            ],
            "level_id": [
                83
            ],
            "level_index": [
                42
            ],
            "level_name": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "LineString": {},
        "Map": {},
        "Mutation": {
            "feed_version_delete": [
                32,
                {
                    "id": [
                        47,
                        "Int!"
                    ]
                }
            ],
            "feed_version_fetch": [
                33,
                {
                    "feed_onestop_id": [
                        83,
                        "String!"
                    ],
                    "file": [
                        88
                    ],
                    "url": [
                        83
                    ]
                }
            ],
            "feed_version_import": [
                37,
                {
                    "sha1": [
                        83,
                        "String!"
                    ]
                }
            ],
            "feed_version_unimport": [
                41,
                {
                    "id": [
                        47,
                        "Int!"
                    ]
                }
            ],
            "feed_version_update": [
                31,
                {
                    "id": [
                        47,
                        "Int!"
                    ],
                    "set": [
                        40,
                        "FeedVersionSetInput!"
                    ]
                }
            ],
            "validate_gtfs": [
                89,
                {
                    "file": [
                        88
                    ],
                    "realtime_urls": [
                        83,
                        "[String!]"
                    ],
                    "url": [
                        83
                    ]
                }
            ],
            "__typename": [
                83
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
                        47
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "file": [
                83
            ],
            "generated": [
                6
            ],
            "id": [
                47
            ],
            "name": [
                83
            ],
            "onestop_id": [
                83
            ],
            "search_rank": [
                83
            ],
            "short_name": [
                83
            ],
            "tags": [
                84
            ],
            "website": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                83
            ],
            "adm0_name": [
                83
            ],
            "adm1_iso": [
                83
            ],
            "adm1_name": [
                83
            ],
            "agency_id": [
                83
            ],
            "city_name": [
                83
            ],
            "feed_onestop_id": [
                83
            ],
            "merged": [
                6
            ],
            "onestop_id": [
                83
            ],
            "search": [
                83
            ],
            "tags": [
                84
            ],
            "__typename": [
                83
            ]
        },
        "Pathway": {
            "from_stop": [
                78
            ],
            "id": [
                47
            ],
            "is_bidirectional": [
                47
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
                83
            ],
            "pathway_mode": [
                47
            ],
            "reverse_signposted_as": [
                83
            ],
            "signposted_as": [
                83
            ],
            "stair_count": [
                47
            ],
            "to_stop": [
                78
            ],
            "traversal_time": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                47
            ],
            "__typename": [
                83
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
                83
            ]
        },
        "Polygon": {},
        "Query": {
            "agencies": [
                0,
                {
                    "after": [
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
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
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
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
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "operators": [
                54,
                {
                    "after": [
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
                    ],
                    "where": [
                        55
                    ]
                }
            ],
            "routes": [
                67,
                {
                    "after": [
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "stops": [
                78,
                {
                    "after": [
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "trips": [
                86,
                {
                    "after": [
                        47
                    ],
                    "ids": [
                        47,
                        "[Int!]"
                    ],
                    "limit": [
                        47
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "__typename": [
                83
            ]
        },
        "RTTimeRange": {
            "end": [
                47
            ],
            "start": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "RTTranslation": {
            "language": [
                83
            ],
            "text": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                47
            ],
            "route_id": [
                83
            ],
            "schedule_relationship": [
                83
            ],
            "start_date": [
                12
            ],
            "start_time": [
                74
            ],
            "trip_id": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                83
            ],
            "label": [
                83
            ],
            "license_plate": [
                83
            ],
            "__typename": [
                83
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
                        83,
                        "String!"
                    ],
                    "limit": [
                        47
                    ],
                    "radius": [
                        42
                    ]
                }
            ],
            "continuous_drop_off": [
                47
            ],
            "continuous_pickup": [
                47
            ],
            "feed_onestop_id": [
                83
            ],
            "feed_version": [
                31
            ],
            "feed_version_sha1": [
                83
            ],
            "geometries": [
                69,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "geometry": [
                44
            ],
            "headways": [
                70,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "id": [
                47
            ],
            "onestop_id": [
                83
            ],
            "route_color": [
                83
            ],
            "route_desc": [
                83
            ],
            "route_id": [
                83
            ],
            "route_long_name": [
                83
            ],
            "route_short_name": [
                83
            ],
            "route_sort_order": [
                47
            ],
            "route_stop_buffer": [
                72,
                {
                    "radius": [
                        42
                    ]
                }
            ],
            "route_stops": [
                71,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "route_text_color": [
                83
            ],
            "route_type": [
                47
            ],
            "route_url": [
                83
            ],
            "search_rank": [
                83
            ],
            "stops": [
                78,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        79
                    ]
                }
            ],
            "trips": [
                86,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "__typename": [
                83
            ]
        },
        "RouteFilter": {
            "agency_ids": [
                47
            ],
            "allow_previous_onestop_ids": [
                6
            ],
            "feed_onestop_id": [
                83
            ],
            "feed_version_sha1": [
                83
            ],
            "near": [
                59
            ],
            "onestop_id": [
                83
            ],
            "onestop_ids": [
                83
            ],
            "operator_onestop_id": [
                83
            ],
            "route_id": [
                83
            ],
            "route_type": [
                47
            ],
            "search": [
                83
            ],
            "within": [
                60
            ],
            "__typename": [
                83
            ]
        },
        "RouteGeometry": {
            "combined_geometry": [
                44
            ],
            "generated": [
                6
            ],
            "geometry": [
                51
            ],
            "__typename": [
                83
            ]
        },
        "RouteHeadway": {
            "departures": [
                74
            ],
            "direction_id": [
                47
            ],
            "dow_category": [
                47
            ],
            "headway_secs": [
                47
            ],
            "service_date": [
                12
            ],
            "stop": [
                78
            ],
            "stop_trip_count": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "RouteStop": {
            "agency": [
                0
            ],
            "agency_id": [
                47
            ],
            "id": [
                47
            ],
            "route": [
                67
            ],
            "route_id": [
                47
            ],
            "stop": [
                78
            ],
            "stop_id": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                44
            ],
            "stop_convexhull": [
                60
            ],
            "stop_points": [
                44
            ],
            "__typename": [
                83
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "Shape": {
            "generated": [
                6
            ],
            "geometry": [
                51
            ],
            "id": [
                47
            ],
            "shape_id": [
                83
            ],
            "__typename": [
                83
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
                85
            ],
            "geometry_offset": [
                47
            ],
            "instruction": [
                83
            ],
            "mode": [
                77
            ],
            "start_time": [
                85
            ],
            "to": [
                93
            ],
            "__typename": [
                83
            ]
        },
        "StepMode": {},
        "Stop": {
            "alerts": [
                4
            ],
            "arrivals": [
                80,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        82
                    ]
                }
            ],
            "census_geographies": [
                9,
                {
                    "layer": [
                        83,
                        "String!"
                    ],
                    "limit": [
                        47
                    ],
                    "radius": [
                        42
                    ]
                }
            ],
            "children": [
                78,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "departures": [
                80,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        82
                    ]
                }
            ],
            "directions": [
                14,
                {
                    "depart_at": [
                        85
                    ],
                    "from": [
                        94
                    ],
                    "mode": [
                        77
                    ],
                    "to": [
                        94
                    ]
                }
            ],
            "feed_onestop_id": [
                83
            ],
            "feed_version": [
                31
            ],
            "feed_version_sha1": [
                83
            ],
            "geometry": [
                58
            ],
            "id": [
                47
            ],
            "level": [
                50
            ],
            "location_type": [
                47
            ],
            "onestop_id": [
                83
            ],
            "parent": [
                78
            ],
            "pathways_from_stop": [
                56,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "pathways_to_stop": [
                56,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "platform_code": [
                83
            ],
            "route_stops": [
                71,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "search_rank": [
                83
            ],
            "stop_code": [
                83
            ],
            "stop_desc": [
                83
            ],
            "stop_id": [
                83
            ],
            "stop_name": [
                83
            ],
            "stop_times": [
                80,
                {
                    "limit": [
                        47
                    ],
                    "where": [
                        82
                    ]
                }
            ],
            "stop_timezone": [
                83
            ],
            "stop_url": [
                83
            ],
            "tts_stop_name": [
                83
            ],
            "wheelchair_boarding": [
                47
            ],
            "zone_id": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "StopFilter": {
            "agency_ids": [
                47
            ],
            "allow_previous_onestop_ids": [
                6
            ],
            "feed_onestop_id": [
                83
            ],
            "feed_version_sha1": [
                83
            ],
            "near": [
                59
            ],
            "onestop_id": [
                83
            ],
            "onestop_ids": [
                83
            ],
            "search": [
                83
            ],
            "served_by_onestop_ids": [
                83
            ],
            "stop_code": [
                83
            ],
            "stop_id": [
                83
            ],
            "within": [
                60
            ],
            "__typename": [
                83
            ]
        },
        "StopTime": {
            "arrival": [
                81
            ],
            "arrival_time": [
                74
            ],
            "continuous_drop_off": [
                47
            ],
            "continuous_pickup": [
                47
            ],
            "departure": [
                81
            ],
            "departure_time": [
                74
            ],
            "drop_off_type": [
                47
            ],
            "interpolated": [
                47
            ],
            "pickup_type": [
                47
            ],
            "service_date": [
                12
            ],
            "stop": [
                78
            ],
            "stop_headsign": [
                83
            ],
            "stop_sequence": [
                47
            ],
            "timepoint": [
                47
            ],
            "trip": [
                86
            ],
            "__typename": [
                83
            ]
        },
        "StopTimeEvent": {
            "delay": [
                47
            ],
            "estimated": [
                74
            ],
            "estimated_utc": [
                85
            ],
            "scheduled": [
                74
            ],
            "stop_timezone": [
                83
            ],
            "uncertainty": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                6
            ],
            "end_time": [
                47
            ],
            "exclude_first": [
                6
            ],
            "exclude_last": [
                6
            ],
            "next": [
                47
            ],
            "route_onestop_ids": [
                83
            ],
            "service_date": [
                12
            ],
            "start_time": [
                47
            ],
            "use_service_window": [
                6
            ],
            "__typename": [
                83
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
                47
            ],
            "block_id": [
                83
            ],
            "calendar": [
                7
            ],
            "direction_id": [
                47
            ],
            "feed_version": [
                31
            ],
            "frequencies": [
                43,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "id": [
                47
            ],
            "route": [
                67
            ],
            "schedule_relationship": [
                73
            ],
            "shape": [
                75
            ],
            "stop_pattern_id": [
                47
            ],
            "stop_times": [
                80,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "timestamp": [
                85
            ],
            "trip_headsign": [
                83
            ],
            "trip_id": [
                83
            ],
            "trip_short_name": [
                83
            ],
            "wheelchair_accessible": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                83
            ],
            "feed_version_sha1": [
                83
            ],
            "route_ids": [
                47
            ],
            "route_onestop_ids": [
                83
            ],
            "service_date": [
                12
            ],
            "trip_id": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "Upload": {},
        "ValidationResult": {
            "agencies": [
                0,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "earliest_calendar_date": [
                12
            ],
            "errors": [
                91
            ],
            "failure_reason": [
                83
            ],
            "feed_infos": [
                24,
                {
                    "limit": [
                        47
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
                67,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "service_levels": [
                38,
                {
                    "limit": [
                        47
                    ],
                    "route_id": [
                        83
                    ]
                }
            ],
            "sha1": [
                83
            ],
            "stops": [
                78,
                {
                    "limit": [
                        47
                    ]
                }
            ],
            "success": [
                6
            ],
            "warnings": [
                91
            ],
            "__typename": [
                83
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                83
            ],
            "error_type": [
                83
            ],
            "field": [
                83
            ],
            "filename": [
                83
            ],
            "message": [
                83
            ],
            "value": [
                83
            ],
            "__typename": [
                83
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                47
            ],
            "error_type": [
                83
            ],
            "errors": [
                90
            ],
            "filename": [
                83
            ],
            "limit": [
                47
            ],
            "__typename": [
                83
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                83
            ],
            "current_status": [
                83
            ],
            "current_stop_sequence": [
                47
            ],
            "position": [
                58
            ],
            "stop_id": [
                78
            ],
            "timestamp": [
                85
            ],
            "vehicle": [
                65
            ],
            "__typename": [
                83
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
                83
            ],
            "__typename": [
                83
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
                83
            ],
            "__typename": [
                83
            ]
        }
    }
}