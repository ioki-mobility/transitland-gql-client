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
        80,
        81,
        82,
        87,
        89,
        95,
        103,
        104,
        107,
        116,
        117,
        118,
        119,
        122
    ],
    "types": {
        "Agency": {
            "agency_email": [
                116
            ],
            "agency_fare_url": [
                116
            ],
            "agency_id": [
                116
            ],
            "agency_lang": [
                116
            ],
            "agency_name": [
                116
            ],
            "agency_phone": [
                116
            ],
            "agency_timezone": [
                116
            ],
            "agency_url": [
                116
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
                        116,
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
                116
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                116
            ],
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "onestop_id": [
                116
            ],
            "operator": [
                83
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
                96,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        97
                    ]
                }
            ],
            "search_rank": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                116
            ],
            "adm0_name": [
                116
            ],
            "adm1_iso": [
                116
            ],
            "adm1_name": [
                116
            ],
            "agency_id": [
                116
            ],
            "agency_name": [
                116
            ],
            "city_name": [
                116
            ],
            "feed_onestop_id": [
                116
            ],
            "feed_version_sha1": [
                116
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                116
            ],
            "search": [
                116
            ],
            "within": [
                89
            ],
            "__typename": [
                116
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                116
            ],
            "adm1_name": [
                116
            ],
            "city_name": [
                116
            ],
            "rank": [
                43
            ],
            "__typename": [
                116
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                116
            ]
        },
        "Alert": {
            "active_period": [
                91
            ],
            "cause": [
                116
            ],
            "description_text": [
                92
            ],
            "effect": [
                116
            ],
            "header_text": [
                92
            ],
            "severity_level": [
                116
            ],
            "tts_description_text": [
                92
            ],
            "tts_header_text": [
                92
            ],
            "url": [
                92
            ],
            "__typename": [
                116
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
                116
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
                116
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
                116
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
                116
            ],
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "layer_name": [
                116
            ],
            "name": [
                116
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        116,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                116
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                116
            ],
            "table_name": [
                116
            ],
            "table_title": [
                116
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                119
            ],
            "from": [
                128
            ],
            "mode": [
                107
            ],
            "to": [
                128
            ],
            "__typename": [
                116
            ]
        },
        "Directions": {
            "data_source": [
                116
            ],
            "destination": [
                127
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                119
            ],
            "exception": [
                116
            ],
            "itineraries": [
                75
            ],
            "origin": [
                127
            ],
            "start_time": [
                119
            ],
            "success": [
                7
            ],
            "__typename": [
                116
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
                116
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
                116
            ]
        },
        "DurationUnit": {},
        "Feed": {
            "associated_operators": [
                83
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
                116
            ],
            "id": [
                74
            ],
            "languages": [
                116
            ],
            "license": [
                26
            ],
            "name": [
                116
            ],
            "onestop_id": [
                116
            ],
            "search_rank": [
                116
            ],
            "spec": [
                29
            ],
            "tags": [
                118
            ],
            "urls": [
                31
            ],
            "__typename": [
                116
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                116
            ],
            "param_name": [
                116
            ],
            "type": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                116
            ],
            "fetched_at": [
                119
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                116
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                116
            ],
            "url_type": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                116
            ]
        },
        "FeedFilter": {
            "fetch_error": [
                7
            ],
            "import_status": [
                73
            ],
            "license": [
                79
            ],
            "onestop_id": [
                116
            ],
            "search": [
                116
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                118
            ],
            "__typename": [
                116
            ]
        },
        "FeedInfo": {
            "default_lang": [
                116
            ],
            "feed_contact_email": [
                116
            ],
            "feed_contact_url": [
                116
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                116
            ],
            "feed_publisher_name": [
                116
            ],
            "feed_publisher_url": [
                116
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                116
            ],
            "id": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                116
            ],
            "attribution_text": [
                116
            ],
            "commercial_use_allowed": [
                116
            ],
            "create_derived_product": [
                116
            ],
            "redistribution_allowed": [
                116
            ],
            "share_alike_optional": [
                116
            ],
            "spdx_identifier": [
                116
            ],
            "url": [
                116
            ],
            "use_without_attribution": [
                116
            ],
            "__typename": [
                116
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
                116
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                116
            ],
            "mds_provider": [
                116
            ],
            "realtime_alerts": [
                116
            ],
            "realtime_trip_updates": [
                116
            ],
            "realtime_vehicle_positions": [
                116
            ],
            "static_current": [
                116
            ],
            "static_historic": [
                116
            ],
            "static_planned": [
                116
            ],
            "__typename": [
                116
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
                116
            ],
            "description": [
                116
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
                119
            ],
            "file": [
                116
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
                89
            ],
            "id": [
                74
            ],
            "latest_calendar_date": [
                13
            ],
            "name": [
                116
            ],
            "routes": [
                96,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        97
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
                116
            ],
            "stops": [
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
            "trips": [
                120,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        121
                    ]
                }
            ],
            "updated_by": [
                116
            ],
            "url": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                116
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                116
            ],
            "id": [
                74
            ],
            "name": [
                116
            ],
            "rows": [
                74
            ],
            "sha1": [
                116
            ],
            "size": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionFilter": {
            "feed_ids": [
                74
            ],
            "feed_onestop_id": [
                116
            ],
            "file": [
                116
            ],
            "import_status": [
                73
            ],
            "sha1": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                119
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                116
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
                119
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                116
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
                116
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
                116
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                116
            ],
            "name": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                116
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                104
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
                104
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                88
            ],
            "__typename": [
                116
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                116
            ],
            "brand_image_url_dark": [
                116
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                116
            ],
            "color": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsDockRequest": {
            "near": [
                88
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                116
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
                117
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                116
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                116
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                116
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                116
            ],
            "store_uri": [
                116
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "GbfsRentalUris": {
            "android": [
                116
            ],
            "ios": [
                116
            ],
            "web": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsStationInformation": {
            "address": [
                116
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                116
            ],
            "cross_street": [
                116
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
                116
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                116
            ],
            "post_code": [
                116
            ],
            "region": [
                66
            ],
            "rental_methods": [
                117
            ],
            "short_name": [
                116
            ],
            "station_area": [
                72
            ],
            "station_id": [
                116
            ],
            "status": [
                60
            ],
            "__typename": [
                116
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
                116
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                116
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                116
            ],
            "description": [
                116
            ],
            "last_updated": [
                74
            ],
            "summary": [
                116
            ],
            "times": [
                45
            ],
            "type": [
                116
            ],
            "url": [
                116
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "GbfsSystemHour": {
            "days": [
                117
            ],
            "end_time": [
                116
            ],
            "start_time": [
                116
            ],
            "user_types": [
                117
            ],
            "__typename": [
                116
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                116
            ],
            "feed_contact_email": [
                116
            ],
            "language": [
                116
            ],
            "license_url": [
                116
            ],
            "name": [
                116
            ],
            "operator": [
                116
            ],
            "phone_number": [
                116
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                116
            ],
            "purchase_url": [
                116
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                116
            ],
            "start_date": [
                13
            ],
            "system_id": [
                116
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                116
            ],
            "timezone": [
                116
            ],
            "url": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                116
            ],
            "description": [
                116
            ],
            "is_taxable": [
                6
            ],
            "name": [
                116
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                116
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                116
            ],
            "region_id": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                116
            ],
            "version": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                116
            ],
            "icon_url_dark": [
                116
            ],
            "__typename": [
                116
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
                116
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
                116
            ],
            "country_code": [
                116
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                116
            ],
            "eco_sticker": [
                116
            ],
            "form_factor": [
                116
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                116
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                116
            ],
            "name": [
                116
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                116
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                116
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                117
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                116
            ],
            "vehicle_type_id": [
                116
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                116
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
                116
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
                119
            ],
            "from": [
                127
            ],
            "legs": [
                77
            ],
            "start_time": [
                119
            ],
            "to": [
                127
            ],
            "__typename": [
                116
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
                119
            ],
            "from": [
                127
            ],
            "geometry": [
                81
            ],
            "start_time": [
                119
            ],
            "steps": [
                106
            ],
            "to": [
                127
            ],
            "__typename": [
                116
            ]
        },
        "Level": {
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "level_id": [
                116
            ],
            "level_index": [
                43
            ],
            "level_name": [
                116
            ],
            "stops": [
                108
            ],
            "__typename": [
                116
            ]
        },
        "LicenseFilter": {
            "commercial_use_allowed": [
                80
            ],
            "create_derived_product": [
                80
            ],
            "redistribution_allowed": [
                80
            ],
            "share_alike_optional": [
                80
            ],
            "use_without_attribution": [
                80
            ],
            "__typename": [
                116
            ]
        },
        "LicenseValue": {},
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
                116
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                116
            ],
            "onestop_id": [
                116
            ],
            "search_rank": [
                116
            ],
            "short_name": [
                116
            ],
            "tags": [
                118
            ],
            "website": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                116
            ],
            "adm0_name": [
                116
            ],
            "adm1_iso": [
                116
            ],
            "adm1_name": [
                116
            ],
            "agency_id": [
                116
            ],
            "city_name": [
                116
            ],
            "feed_onestop_id": [
                116
            ],
            "license": [
                79
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                116
            ],
            "search": [
                116
            ],
            "tags": [
                118
            ],
            "__typename": [
                116
            ]
        },
        "Pathway": {
            "from_stop": [
                108
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
                116
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                116
            ],
            "signposted_as": [
                116
            ],
            "stair_count": [
                74
            ],
            "to_stop": [
                108
            ],
            "traversal_time": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                116
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
                116
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
                83,
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
                        84
                    ]
                }
            ],
            "routes": [
                96,
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
                        97
                    ]
                }
            ],
            "stops": [
                108,
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
                        110
                    ]
                }
            ],
            "trips": [
                120,
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
                        121
                    ]
                }
            ],
            "__typename": [
                116
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
                116
            ]
        },
        "RTTranslation": {
            "language": [
                116
            ],
            "text": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                116
            ],
            "schedule_relationship": [
                116
            ],
            "start_date": [
                13
            ],
            "start_time": [
                104
            ],
            "trip_id": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                116
            ],
            "label": [
                116
            ],
            "license_plate": [
                116
            ],
            "__typename": [
                116
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
                        116,
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
                116
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                116
            ],
            "geometries": [
                98,
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
                99,
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
                116
            ],
            "patterns": [
                102
            ],
            "route_color": [
                116
            ],
            "route_desc": [
                116
            ],
            "route_id": [
                116
            ],
            "route_long_name": [
                116
            ],
            "route_short_name": [
                116
            ],
            "route_sort_order": [
                74
            ],
            "route_stop_buffer": [
                101,
                {
                    "radius": [
                        43
                    ]
                }
            ],
            "route_stops": [
                100,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "route_text_color": [
                116
            ],
            "route_type": [
                74
            ],
            "route_url": [
                116
            ],
            "search_rank": [
                116
            ],
            "stops": [
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
            "trips": [
                120,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        121
                    ]
                }
            ],
            "__typename": [
                116
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
                116
            ],
            "feed_version_sha1": [
                116
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                116
            ],
            "onestop_ids": [
                116
            ],
            "operator_onestop_id": [
                116
            ],
            "route_id": [
                116
            ],
            "route_type": [
                74
            ],
            "search": [
                116
            ],
            "within": [
                89
            ],
            "__typename": [
                116
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
                81
            ],
            "length": [
                43
            ],
            "max_segment_length": [
                43
            ],
            "__typename": [
                116
            ]
        },
        "RouteHeadway": {
            "departures": [
                104
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
                108
            ],
            "stop_trip_count": [
                74
            ],
            "__typename": [
                116
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
                96
            ],
            "route_id": [
                74
            ],
            "stop": [
                108
            ],
            "stop_id": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                72
            ],
            "stop_convexhull": [
                89
            ],
            "stop_points": [
                72
            ],
            "__typename": [
                116
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
                120,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                116
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "Shape": {
            "generated": [
                7
            ],
            "geometry": [
                81
            ],
            "id": [
                74
            ],
            "shape_id": [
                116
            ],
            "__typename": [
                116
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
                119
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                116
            ],
            "mode": [
                107
            ],
            "start_time": [
                119
            ],
            "to": [
                127
            ],
            "__typename": [
                116
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
                113,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        116,
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
                108,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "departures": [
                113,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        119
                    ],
                    "from": [
                        128
                    ],
                    "mode": [
                        107
                    ],
                    "to": [
                        128
                    ]
                }
            ],
            "external_reference": [
                109
            ],
            "feed_onestop_id": [
                116
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                116
            ],
            "geometry": [
                87
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
                108,
                {
                    "limit": [
                        74
                    ],
                    "radius": [
                        43
                    ]
                }
            ],
            "observations": [
                111,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        112
                    ]
                }
            ],
            "onestop_id": [
                116
            ],
            "parent": [
                108
            ],
            "pathways_from_stop": [
                85,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "pathways_to_stop": [
                85,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "platform_code": [
                116
            ],
            "route_stops": [
                100,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "search_rank": [
                116
            ],
            "stop_code": [
                116
            ],
            "stop_desc": [
                116
            ],
            "stop_id": [
                116
            ],
            "stop_name": [
                116
            ],
            "stop_times": [
                113,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        115
                    ]
                }
            ],
            "stop_timezone": [
                116
            ],
            "stop_url": [
                116
            ],
            "tts_stop_name": [
                116
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "StopExternalReference": {
            "id": [
                74
            ],
            "inactive": [
                7
            ],
            "target_active_stop": [
                108
            ],
            "target_feed_onestop_id": [
                116
            ],
            "target_stop_id": [
                116
            ],
            "__typename": [
                116
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
                116
            ],
            "feed_version_sha1": [
                116
            ],
            "license": [
                79
            ],
            "location_type": [
                74
            ],
            "near": [
                88
            ],
            "onestop_id": [
                116
            ],
            "onestop_ids": [
                116
            ],
            "search": [
                116
            ],
            "served_by_onestop_ids": [
                116
            ],
            "stop_code": [
                116
            ],
            "stop_id": [
                116
            ],
            "within": [
                89
            ],
            "__typename": [
                116
            ]
        },
        "StopObservation": {
            "agency_id": [
                116
            ],
            "from_stop_id": [
                116
            ],
            "observed_arrival_time": [
                104
            ],
            "observed_departure_time": [
                104
            ],
            "route_id": [
                116
            ],
            "schedule_relationship": [
                116
            ],
            "scheduled_arrival_time": [
                104
            ],
            "scheduled_departure_time": [
                104
            ],
            "source": [
                116
            ],
            "stop_sequence": [
                74
            ],
            "to_stop_id": [
                116
            ],
            "trip_id": [
                116
            ],
            "trip_start_date": [
                13
            ],
            "trip_start_time": [
                104
            ],
            "__typename": [
                116
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                74
            ],
            "source": [
                116
            ],
            "trip_start_date": [
                13
            ],
            "__typename": [
                116
            ]
        },
        "StopTime": {
            "arrival": [
                114
            ],
            "arrival_time": [
                104
            ],
            "continuous_drop_off": [
                74
            ],
            "continuous_pickup": [
                74
            ],
            "departure": [
                114
            ],
            "departure_time": [
                104
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
                108
            ],
            "stop_headsign": [
                116
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                120
            ],
            "__typename": [
                116
            ]
        },
        "StopTimeEvent": {
            "delay": [
                74
            ],
            "estimated": [
                104
            ],
            "estimated_utc": [
                119
            ],
            "scheduled": [
                104
            ],
            "stop_timezone": [
                116
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                104
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
                116
            ],
            "service_date": [
                13
            ],
            "start": [
                104
            ],
            "start_time": [
                74
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                116
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
                116
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
                96
            ],
            "schedule_relationship": [
                103
            ],
            "shape": [
                105
            ],
            "stop_pattern_id": [
                74
            ],
            "stop_times": [
                113,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "timestamp": [
                119
            ],
            "trip_headsign": [
                116
            ],
            "trip_id": [
                116
            ],
            "trip_short_name": [
                116
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                116
            ],
            "feed_version_sha1": [
                116
            ],
            "license": [
                79
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                116
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                116
            ],
            "__typename": [
                116
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
                125
            ],
            "failure_reason": [
                116
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
                96,
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
                        116
                    ]
                }
            ],
            "sha1": [
                116
            ],
            "stops": [
                108,
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
                125
            ],
            "__typename": [
                116
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                116
            ],
            "error_type": [
                116
            ],
            "field": [
                116
            ],
            "filename": [
                116
            ],
            "message": [
                116
            ],
            "value": [
                116
            ],
            "__typename": [
                116
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                116
            ],
            "errors": [
                124
            ],
            "filename": [
                116
            ],
            "limit": [
                74
            ],
            "__typename": [
                116
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                116
            ],
            "current_status": [
                116
            ],
            "current_stop_sequence": [
                74
            ],
            "position": [
                87
            ],
            "stop_id": [
                108
            ],
            "timestamp": [
                119
            ],
            "vehicle": [
                94
            ],
            "__typename": [
                116
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
                116
            ],
            "__typename": [
                116
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
                116
            ],
            "__typename": [
                116
            ]
        }
    }
}