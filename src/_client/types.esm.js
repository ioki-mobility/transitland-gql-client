export default {
    "scalars": [
        5,
        6,
        7,
        13,
        17,
        19,
        28,
        29,
        43,
        72,
        73,
        74,
        76,
        79,
        80,
        85,
        87,
        93,
        101,
        102,
        105,
        111,
        112,
        113,
        114,
        117
    ],
    "types": {
        "Agency": {
            "agency_email": [
                111
            ],
            "agency_fare_url": [
                111
            ],
            "agency_id": [
                111
            ],
            "agency_lang": [
                111
            ],
            "agency_name": [
                111
            ],
            "agency_phone": [
                111
            ],
            "agency_timezone": [
                111
            ],
            "agency_url": [
                111
            ],
            "alerts": [
                4,
                {
                    "active": [
                        7
                    ],
                    "limit": [
                        74
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        111,
                        "String!"
                    ],
                    "limit": [
                        74
                    ],
                    "radius": [
                        43
                    ]
                }
            ],
            "feed_onestop_id": [
                111
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                111
            ],
            "geometry": [
                87
            ],
            "id": [
                74
            ],
            "onestop_id": [
                111
            ],
            "operator": [
                81
            ],
            "places": [
                2,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        3
                    ]
                }
            ],
            "routes": [
                94,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        95
                    ]
                }
            ],
            "search_rank": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                111
            ],
            "adm0_name": [
                111
            ],
            "adm1_iso": [
                111
            ],
            "adm1_name": [
                111
            ],
            "agency_id": [
                111
            ],
            "agency_name": [
                111
            ],
            "city_name": [
                111
            ],
            "feed_onestop_id": [
                111
            ],
            "feed_version_sha1": [
                111
            ],
            "near": [
                86
            ],
            "onestop_id": [
                111
            ],
            "search": [
                111
            ],
            "within": [
                87
            ],
            "__typename": [
                111
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                111
            ],
            "adm1_name": [
                111
            ],
            "city_name": [
                111
            ],
            "rank": [
                43
            ],
            "__typename": [
                111
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                111
            ]
        },
        "Alert": {
            "active_period": [
                89
            ],
            "cause": [
                111
            ],
            "description_text": [
                90
            ],
            "effect": [
                111
            ],
            "header_text": [
                90
            ],
            "severity_level": [
                111
            ],
            "tts_description_text": [
                90
            ],
            "tts_header_text": [
                90
            ],
            "url": [
                90
            ],
            "__typename": [
                111
            ]
        },
        "Any": {},
        "Bool": {},
        "Boolean": {},
        "Calendar": {
            "added_dates": [
                13,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "end_date": [
                13
            ],
            "friday": [
                74
            ],
            "id": [
                74
            ],
            "monday": [
                74
            ],
            "removed_dates": [
                13,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "saturday": [
                74
            ],
            "service_id": [
                111
            ],
            "start_date": [
                13
            ],
            "sunday": [
                74
            ],
            "thursday": [
                74
            ],
            "tuesday": [
                74
            ],
            "wednesday": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "CalendarDateFilter": {
            "date": [
                13
            ],
            "exception_type": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "CensusGeography": {
            "aland": [
                43
            ],
            "awater": [
                43
            ],
            "geoid": [
                111
            ],
            "geometry": [
                87
            ],
            "id": [
                74
            ],
            "layer_name": [
                111
            ],
            "name": [
                111
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        111,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                111
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                111
            ],
            "table_name": [
                111
            ],
            "table_title": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "CensusValue": {
            "table": [
                11
            ],
            "values": [
                5
            ],
            "__typename": [
                111
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                114
            ],
            "from": [
                123
            ],
            "mode": [
                105
            ],
            "to": [
                123
            ],
            "__typename": [
                111
            ]
        },
        "Directions": {
            "data_source": [
                111
            ],
            "destination": [
                122
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                114
            ],
            "exception": [
                111
            ],
            "itineraries": [
                75
            ],
            "origin": [
                122
            ],
            "start_time": [
                114
            ],
            "success": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "Distance": {
            "distance": [
                43
            ],
            "units": [
                17
            ],
            "__typename": [
                111
            ]
        },
        "DistanceUnit": {},
        "Duration": {
            "duration": [
                43
            ],
            "units": [
                19
            ],
            "__typename": [
                111
            ]
        },
        "DurationUnit": {},
        "Feed": {
            "associated_operators": [
                81
            ],
            "authorization": [
                21
            ],
            "feed_fetches": [
                22,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "feed_state": [
                30
            ],
            "feed_versions": [
                32,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        36
                    ]
                }
            ],
            "file": [
                111
            ],
            "id": [
                74
            ],
            "languages": [
                111
            ],
            "license": [
                26
            ],
            "name": [
                111
            ],
            "onestop_id": [
                111
            ],
            "search_rank": [
                111
            ],
            "spec": [
                29
            ],
            "tags": [
                113
            ],
            "urls": [
                31
            ],
            "__typename": [
                111
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                111
            ],
            "param_name": [
                111
            ],
            "type": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                111
            ],
            "fetched_at": [
                114
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                111
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                111
            ],
            "url_type": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "FeedFilter": {
            "fetch_error": [
                7
            ],
            "import_status": [
                73
            ],
            "onestop_id": [
                111
            ],
            "search": [
                111
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                113
            ],
            "__typename": [
                111
            ]
        },
        "FeedInfo": {
            "default_lang": [
                111
            ],
            "feed_contact_email": [
                111
            ],
            "feed_contact_url": [
                111
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                111
            ],
            "feed_publisher_name": [
                111
            ],
            "feed_publisher_url": [
                111
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                111
            ],
            "id": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                111
            ],
            "attribution_text": [
                111
            ],
            "commercial_use_allowed": [
                111
            ],
            "create_derived_product": [
                111
            ],
            "redistribution_allowed": [
                111
            ],
            "share_alike_optional": [
                111
            ],
            "spdx_identifier": [
                111
            ],
            "url": [
                111
            ],
            "use_without_attribution": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedSourceUrl": {
            "case_sensitive": [
                7
            ],
            "type": [
                28
            ],
            "url": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedSourceUrlTypes": {},
        "FeedSpecTypes": {},
        "FeedState": {
            "feed_version": [
                32
            ],
            "id": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                111
            ],
            "mds_provider": [
                111
            ],
            "realtime_alerts": [
                111
            ],
            "realtime_trip_updates": [
                111
            ],
            "realtime_vehicle_positions": [
                111
            ],
            "static_current": [
                111
            ],
            "static_historic": [
                111
            ],
            "static_planned": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersion": {
            "agencies": [
                0,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "created_by": [
                111
            ],
            "description": [
                111
            ],
            "earliest_calendar_date": [
                13
            ],
            "feed": [
                20
            ],
            "feed_infos": [
                25,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "feed_version_gtfs_import": [
                37
            ],
            "fetched_at": [
                114
            ],
            "files": [
                35,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "geometry": [
                87
            ],
            "id": [
                74
            ],
            "latest_calendar_date": [
                13
            ],
            "name": [
                111
            ],
            "routes": [
                94,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        95
                    ]
                }
            ],
            "service_levels": [
                39,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        40
                    ]
                }
            ],
            "sha1": [
                111
            ],
            "stops": [
                106,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "trips": [
                115,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "updated_by": [
                111
            ],
            "url": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                111
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                111
            ],
            "id": [
                74
            ],
            "name": [
                111
            ],
            "rows": [
                74
            ],
            "sha1": [
                111
            ],
            "size": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionFilter": {
            "feed_ids": [
                74
            ],
            "feed_onestop_id": [
                111
            ],
            "import_status": [
                73
            ],
            "sha1": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                114
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                111
            ],
            "id": [
                74
            ],
            "in_progress": [
                7
            ],
            "interpolated_stop_time_count": [
                74
            ],
            "schedule_removed": [
                7
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
                7
            ],
            "updated_at": [
                114
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionServiceLevel": {
            "end_date": [
                13
            ],
            "friday": [
                74
            ],
            "id": [
                74
            ],
            "monday": [
                74
            ],
            "saturday": [
                74
            ],
            "start_date": [
                13
            ],
            "sunday": [
                74
            ],
            "thursday": [
                74
            ],
            "tuesday": [
                74
            ],
            "wednesday": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionServiceLevelFilter": {
            "end_date": [
                13
            ],
            "start_date": [
                13
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                111
            ],
            "name": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                102
            ],
            "exact_times": [
                74
            ],
            "headway_secs": [
                74
            ],
            "id": [
                74
            ],
            "start_time": [
                102
            ],
            "__typename": [
                111
            ]
        },
        "GbfsAlertTime": {
            "end": [
                74
            ],
            "start": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                86
            ],
            "__typename": [
                111
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                111
            ],
            "brand_image_url_dark": [
                111
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                111
            ],
            "color": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsDockRequest": {
            "near": [
                86
            ],
            "__typename": [
                111
            ]
        },
        "GbfsFeed": {
            "alerts": [
                61
            ],
            "calendars": [
                62
            ],
            "rental_hours": [
                63
            ],
            "station_information": [
                59
            ],
            "system_information": [
                64
            ],
            "__typename": [
                111
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                111
            ],
            "current_fuel_percent": [
                43
            ],
            "current_range_meters": [
                43
            ],
            "feed": [
                49
            ],
            "home_station": [
                59
            ],
            "is_disabled": [
                6
            ],
            "is_reserved": [
                6
            ],
            "last_reported": [
                74
            ],
            "lat": [
                43
            ],
            "lon": [
                43
            ],
            "pricing_plan": [
                65
            ],
            "rental_uris": [
                58
            ],
            "station": [
                59
            ],
            "vehicle_equipment": [
                112
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                111
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                111
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "GbfsGeofenceRule": {
            "maximum_speed_kph": [
                74
            ],
            "ride_allowed": [
                6
            ],
            "ride_through_allowed": [
                6
            ],
            "station_parking": [
                6
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                111
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsPlanPrice": {
            "end": [
                74
            ],
            "interval": [
                74
            ],
            "rate": [
                43
            ],
            "start": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                111
            ],
            "store_uri": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsRentalApps": {
            "android": [
                56
            ],
            "ios": [
                56
            ],
            "__typename": [
                111
            ]
        },
        "GbfsRentalUris": {
            "android": [
                111
            ],
            "ios": [
                111
            ],
            "web": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsStationInformation": {
            "address": [
                111
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                111
            ],
            "cross_street": [
                111
            ],
            "feed": [
                49
            ],
            "is_charging_station": [
                6
            ],
            "is_valet_station": [
                6
            ],
            "is_virtual_station": [
                6
            ],
            "lat": [
                43
            ],
            "lon": [
                43
            ],
            "name": [
                111
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                111
            ],
            "post_code": [
                111
            ],
            "region": [
                66
            ],
            "rental_methods": [
                112
            ],
            "short_name": [
                111
            ],
            "station_area": [
                72
            ],
            "station_id": [
                111
            ],
            "status": [
                60
            ],
            "__typename": [
                111
            ]
        },
        "GbfsStationStatus": {
            "is_installed": [
                6
            ],
            "is_renting": [
                6
            ],
            "is_returning": [
                6
            ],
            "last_reported": [
                74
            ],
            "num_bikes_available": [
                74
            ],
            "num_bikes_disabled": [
                74
            ],
            "num_docks_available": [
                74
            ],
            "num_docks_disabled": [
                74
            ],
            "station_id": [
                111
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                111
            ],
            "description": [
                111
            ],
            "last_updated": [
                74
            ],
            "summary": [
                111
            ],
            "times": [
                45
            ],
            "type": [
                111
            ],
            "url": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemCalendar": {
            "end_day": [
                74
            ],
            "end_month": [
                74
            ],
            "end_year": [
                74
            ],
            "start_day": [
                74
            ],
            "start_month": [
                74
            ],
            "start_year": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemHour": {
            "days": [
                112
            ],
            "end_time": [
                111
            ],
            "start_time": [
                111
            ],
            "user_types": [
                112
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                111
            ],
            "feed_contact_email": [
                111
            ],
            "language": [
                111
            ],
            "license_url": [
                111
            ],
            "name": [
                111
            ],
            "operator": [
                111
            ],
            "phone_number": [
                111
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                111
            ],
            "purchase_url": [
                111
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                111
            ],
            "start_date": [
                13
            ],
            "system_id": [
                111
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                111
            ],
            "timezone": [
                111
            ],
            "url": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                111
            ],
            "description": [
                111
            ],
            "is_taxable": [
                6
            ],
            "name": [
                111
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                111
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                111
            ],
            "region_id": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                111
            ],
            "version": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                111
            ],
            "icon_url_dark": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "GbfsVehicleDockAvailable": {
            "count": [
                74
            ],
            "vehicle_types": [
                70
            ],
            "__typename": [
                111
            ]
        },
        "GbfsVehicleType": {
            "cargo_load_capacity": [
                74
            ],
            "cargo_volume_capacity": [
                74
            ],
            "color": [
                111
            ],
            "country_code": [
                111
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                111
            ],
            "eco_sticker": [
                111
            ],
            "form_factor": [
                111
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                111
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                111
            ],
            "name": [
                111
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                111
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                111
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                112
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                111
            ],
            "vehicle_type_id": [
                111
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "GbfsVehicleTypeAvailable": {
            "count": [
                74
            ],
            "num_bikes_disabled": [
                74
            ],
            "num_docks_available": [
                74
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                111
            ]
        },
        "Geometry": {},
        "ImportStatus": {},
        "Int": {},
        "Itinerary": {
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                114
            ],
            "from": [
                122
            ],
            "legs": [
                77
            ],
            "start_time": [
                114
            ],
            "to": [
                122
            ],
            "__typename": [
                111
            ]
        },
        "Key": {},
        "Leg": {
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                114
            ],
            "from": [
                122
            ],
            "geometry": [
                79
            ],
            "start_time": [
                114
            ],
            "steps": [
                104
            ],
            "to": [
                122
            ],
            "__typename": [
                111
            ]
        },
        "Level": {
            "id": [
                74
            ],
            "level_id": [
                111
            ],
            "level_index": [
                43
            ],
            "level_name": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "LineString": {},
        "Map": {},
        "Operator": {
            "agencies": [
                0
            ],
            "feeds": [
                20,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "file": [
                111
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                111
            ],
            "onestop_id": [
                111
            ],
            "search_rank": [
                111
            ],
            "short_name": [
                111
            ],
            "tags": [
                113
            ],
            "website": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                111
            ],
            "adm0_name": [
                111
            ],
            "adm1_iso": [
                111
            ],
            "adm1_name": [
                111
            ],
            "agency_id": [
                111
            ],
            "city_name": [
                111
            ],
            "feed_onestop_id": [
                111
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                111
            ],
            "search": [
                111
            ],
            "tags": [
                113
            ],
            "__typename": [
                111
            ]
        },
        "Pathway": {
            "from_stop": [
                106
            ],
            "id": [
                74
            ],
            "is_bidirectional": [
                74
            ],
            "length": [
                43
            ],
            "max_slope": [
                43
            ],
            "min_width": [
                43
            ],
            "pathway_id": [
                111
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                111
            ],
            "signposted_as": [
                111
            ],
            "stair_count": [
                74
            ],
            "to_stop": [
                106
            ],
            "traversal_time": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "Point": {},
        "PointRadius": {
            "lat": [
                43
            ],
            "lon": [
                43
            ],
            "radius": [
                43
            ],
            "__typename": [
                111
            ]
        },
        "Polygon": {},
        "Query": {
            "agencies": [
                0,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "bikes": [
                50,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        46
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "where": [
                        14,
                        "DirectionRequest!"
                    ]
                }
            ],
            "docks": [
                59,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        48
                    ]
                }
            ],
            "feed_versions": [
                32,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        36
                    ]
                }
            ],
            "feeds": [
                20,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "operators": [
                81,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        82
                    ]
                }
            ],
            "routes": [
                94,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        95
                    ]
                }
            ],
            "stops": [
                106,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "trips": [
                115,
                {
                    "after": [
                        74
                    ],
                    "ids": [
                        74,
                        "[Int!]"
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "__typename": [
                111
            ]
        },
        "RTTimeRange": {
            "end": [
                74
            ],
            "start": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "RTTranslation": {
            "language": [
                111
            ],
            "text": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                111
            ],
            "schedule_relationship": [
                111
            ],
            "start_date": [
                13
            ],
            "start_time": [
                102
            ],
            "trip_id": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                111
            ],
            "label": [
                111
            ],
            "license_plate": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "Role": {},
        "Route": {
            "agency": [
                0
            ],
            "alerts": [
                4,
                {
                    "active": [
                        7
                    ],
                    "limit": [
                        74
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        111,
                        "String!"
                    ],
                    "limit": [
                        74
                    ],
                    "radius": [
                        43
                    ]
                }
            ],
            "continuous_drop_off": [
                74
            ],
            "continuous_pickup": [
                74
            ],
            "feed_onestop_id": [
                111
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                111
            ],
            "geometries": [
                96,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "geometry": [
                72
            ],
            "headways": [
                97,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "id": [
                74
            ],
            "onestop_id": [
                111
            ],
            "patterns": [
                100
            ],
            "route_color": [
                111
            ],
            "route_desc": [
                111
            ],
            "route_id": [
                111
            ],
            "route_long_name": [
                111
            ],
            "route_short_name": [
                111
            ],
            "route_sort_order": [
                74
            ],
            "route_stop_buffer": [
                99,
                {
                    "radius": [
                        43
                    ]
                }
            ],
            "route_stops": [
                98,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "route_text_color": [
                111
            ],
            "route_type": [
                74
            ],
            "route_url": [
                111
            ],
            "search_rank": [
                111
            ],
            "stops": [
                106,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        107
                    ]
                }
            ],
            "trips": [
                115,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "__typename": [
                111
            ]
        },
        "RouteFilter": {
            "agency_ids": [
                74
            ],
            "allow_previous_onestop_ids": [
                7
            ],
            "feed_onestop_id": [
                111
            ],
            "feed_version_sha1": [
                111
            ],
            "near": [
                86
            ],
            "onestop_id": [
                111
            ],
            "onestop_ids": [
                111
            ],
            "operator_onestop_id": [
                111
            ],
            "route_id": [
                111
            ],
            "route_type": [
                74
            ],
            "search": [
                111
            ],
            "within": [
                87
            ],
            "__typename": [
                111
            ]
        },
        "RouteGeometry": {
            "combined_geometry": [
                72
            ],
            "first_point_max_distance": [
                43
            ],
            "generated": [
                7
            ],
            "geometry": [
                79
            ],
            "length": [
                43
            ],
            "max_segment_length": [
                43
            ],
            "__typename": [
                111
            ]
        },
        "RouteHeadway": {
            "departures": [
                102
            ],
            "direction_id": [
                74
            ],
            "dow_category": [
                74
            ],
            "headway_secs": [
                74
            ],
            "service_date": [
                13
            ],
            "stop": [
                106
            ],
            "stop_trip_count": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "RouteStop": {
            "agency": [
                0
            ],
            "agency_id": [
                74
            ],
            "id": [
                74
            ],
            "route": [
                94
            ],
            "route_id": [
                74
            ],
            "stop": [
                106
            ],
            "stop_id": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                72
            ],
            "stop_convexhull": [
                87
            ],
            "stop_points": [
                72
            ],
            "__typename": [
                111
            ]
        },
        "RouteStopPattern": {
            "count": [
                74
            ],
            "direction_id": [
                74
            ],
            "stop_pattern_id": [
                74
            ],
            "trips": [
                115,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                111
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "Shape": {
            "generated": [
                7
            ],
            "geometry": [
                79
            ],
            "id": [
                74
            ],
            "shape_id": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "Step": {
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                114
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                111
            ],
            "mode": [
                105
            ],
            "start_time": [
                114
            ],
            "to": [
                122
            ],
            "__typename": [
                111
            ]
        },
        "StepMode": {},
        "Stop": {
            "alerts": [
                4,
                {
                    "active": [
                        7
                    ],
                    "limit": [
                        74
                    ]
                }
            ],
            "arrivals": [
                108,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        111,
                        "String!"
                    ],
                    "limit": [
                        74
                    ],
                    "radius": [
                        43
                    ]
                }
            ],
            "children": [
                106,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "departures": [
                108,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        114
                    ],
                    "from": [
                        123
                    ],
                    "mode": [
                        105
                    ],
                    "to": [
                        123
                    ]
                }
            ],
            "feed_onestop_id": [
                111
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                111
            ],
            "geometry": [
                85
            ],
            "id": [
                74
            ],
            "level": [
                78
            ],
            "location_type": [
                74
            ],
            "nearby_stops": [
                106,
                {
                    "limit": [
                        74
                    ],
                    "radius": [
                        43
                    ]
                }
            ],
            "onestop_id": [
                111
            ],
            "parent": [
                106
            ],
            "pathways_from_stop": [
                83,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "pathways_to_stop": [
                83,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "platform_code": [
                111
            ],
            "route_stops": [
                98,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "search_rank": [
                111
            ],
            "stop_code": [
                111
            ],
            "stop_desc": [
                111
            ],
            "stop_id": [
                111
            ],
            "stop_name": [
                111
            ],
            "stop_times": [
                108,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        110
                    ]
                }
            ],
            "stop_timezone": [
                111
            ],
            "stop_url": [
                111
            ],
            "tts_stop_name": [
                111
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "StopFilter": {
            "agency_ids": [
                74
            ],
            "allow_previous_onestop_ids": [
                7
            ],
            "feed_onestop_id": [
                111
            ],
            "feed_version_sha1": [
                111
            ],
            "near": [
                86
            ],
            "onestop_id": [
                111
            ],
            "onestop_ids": [
                111
            ],
            "search": [
                111
            ],
            "served_by_onestop_ids": [
                111
            ],
            "stop_code": [
                111
            ],
            "stop_id": [
                111
            ],
            "within": [
                87
            ],
            "__typename": [
                111
            ]
        },
        "StopTime": {
            "arrival": [
                109
            ],
            "arrival_time": [
                102
            ],
            "continuous_drop_off": [
                74
            ],
            "continuous_pickup": [
                74
            ],
            "departure": [
                109
            ],
            "departure_time": [
                102
            ],
            "drop_off_type": [
                74
            ],
            "interpolated": [
                74
            ],
            "pickup_type": [
                74
            ],
            "service_date": [
                13
            ],
            "shape_dist_traveled": [
                43
            ],
            "stop": [
                106
            ],
            "stop_headsign": [
                111
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                115
            ],
            "__typename": [
                111
            ]
        },
        "StopTimeEvent": {
            "delay": [
                74
            ],
            "estimated": [
                102
            ],
            "estimated_utc": [
                114
            ],
            "scheduled": [
                102
            ],
            "stop_timezone": [
                111
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                102
            ],
            "end_time": [
                74
            ],
            "exclude_first": [
                7
            ],
            "exclude_last": [
                7
            ],
            "next": [
                74
            ],
            "route_onestop_ids": [
                111
            ],
            "service_date": [
                13
            ],
            "start": [
                102
            ],
            "start_time": [
                74
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                111
            ]
        },
        "String": {},
        "Strings": {},
        "Tags": {},
        "Time": {},
        "Trip": {
            "alerts": [
                4,
                {
                    "active": [
                        7
                    ],
                    "limit": [
                        74
                    ]
                }
            ],
            "bikes_allowed": [
                74
            ],
            "block_id": [
                111
            ],
            "calendar": [
                8
            ],
            "direction_id": [
                74
            ],
            "feed_version": [
                32
            ],
            "frequencies": [
                44,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "id": [
                74
            ],
            "route": [
                94
            ],
            "schedule_relationship": [
                101
            ],
            "shape": [
                103
            ],
            "stop_pattern_id": [
                74
            ],
            "stop_times": [
                108,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "timestamp": [
                114
            ],
            "trip_headsign": [
                111
            ],
            "trip_id": [
                111
            ],
            "trip_short_name": [
                111
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                111
            ],
            "feed_version_sha1": [
                111
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                111
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "Upload": {},
        "ValidationResult": {
            "agencies": [
                0,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "earliest_calendar_date": [
                13
            ],
            "errors": [
                120
            ],
            "failure_reason": [
                111
            ],
            "feed_infos": [
                25,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "files": [
                35
            ],
            "latest_calendar_date": [
                13
            ],
            "routes": [
                94,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "service_levels": [
                39,
                {
                    "limit": [
                        74
                    ],
                    "route_id": [
                        111
                    ]
                }
            ],
            "sha1": [
                111
            ],
            "stops": [
                106,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "success": [
                7
            ],
            "warnings": [
                120
            ],
            "__typename": [
                111
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                111
            ],
            "error_type": [
                111
            ],
            "field": [
                111
            ],
            "filename": [
                111
            ],
            "message": [
                111
            ],
            "value": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                111
            ],
            "errors": [
                119
            ],
            "filename": [
                111
            ],
            "limit": [
                74
            ],
            "__typename": [
                111
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                111
            ],
            "current_status": [
                111
            ],
            "current_stop_sequence": [
                74
            ],
            "position": [
                85
            ],
            "stop_id": [
                106
            ],
            "timestamp": [
                114
            ],
            "vehicle": [
                92
            ],
            "__typename": [
                111
            ]
        },
        "Waypoint": {
            "lat": [
                43
            ],
            "lon": [
                43
            ],
            "name": [
                111
            ],
            "__typename": [
                111
            ]
        },
        "WaypointInput": {
            "lat": [
                43
            ],
            "lon": [
                43
            ],
            "name": [
                111
            ],
            "__typename": [
                111
            ]
        }
    }
}