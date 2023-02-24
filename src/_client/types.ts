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
        113,
        114,
        115,
        116,
        119
    ],
    "types": {
        "Agency": {
            "agency_email": [
                113
            ],
            "agency_fare_url": [
                113
            ],
            "agency_id": [
                113
            ],
            "agency_lang": [
                113
            ],
            "agency_name": [
                113
            ],
            "agency_phone": [
                113
            ],
            "agency_timezone": [
                113
            ],
            "agency_url": [
                113
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
                        113,
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
                113
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                113
            ],
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "onestop_id": [
                113
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
                113
            ],
            "__typename": [
                113
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                113
            ],
            "adm0_name": [
                113
            ],
            "adm1_iso": [
                113
            ],
            "adm1_name": [
                113
            ],
            "agency_id": [
                113
            ],
            "agency_name": [
                113
            ],
            "city_name": [
                113
            ],
            "feed_onestop_id": [
                113
            ],
            "feed_version_sha1": [
                113
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                113
            ],
            "search": [
                113
            ],
            "within": [
                89
            ],
            "__typename": [
                113
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                113
            ],
            "adm1_name": [
                113
            ],
            "city_name": [
                113
            ],
            "rank": [
                43
            ],
            "__typename": [
                113
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                113
            ]
        },
        "Alert": {
            "active_period": [
                91
            ],
            "cause": [
                113
            ],
            "description_text": [
                92
            ],
            "effect": [
                113
            ],
            "header_text": [
                92
            ],
            "severity_level": [
                113
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
                113
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
                113
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
                113
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
                113
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
                113
            ],
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "layer_name": [
                113
            ],
            "name": [
                113
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        113,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                113
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                113
            ],
            "table_name": [
                113
            ],
            "table_title": [
                113
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                116
            ],
            "from": [
                125
            ],
            "mode": [
                107
            ],
            "to": [
                125
            ],
            "__typename": [
                113
            ]
        },
        "Directions": {
            "data_source": [
                113
            ],
            "destination": [
                124
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                116
            ],
            "exception": [
                113
            ],
            "itineraries": [
                75
            ],
            "origin": [
                124
            ],
            "start_time": [
                116
            ],
            "success": [
                7
            ],
            "__typename": [
                113
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
                113
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
                113
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
                113
            ],
            "id": [
                74
            ],
            "languages": [
                113
            ],
            "license": [
                26
            ],
            "name": [
                113
            ],
            "onestop_id": [
                113
            ],
            "search_rank": [
                113
            ],
            "spec": [
                29
            ],
            "tags": [
                115
            ],
            "urls": [
                31
            ],
            "__typename": [
                113
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                113
            ],
            "param_name": [
                113
            ],
            "type": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                113
            ],
            "fetched_at": [
                116
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                113
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                113
            ],
            "url_type": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                113
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
                113
            ],
            "search": [
                113
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                115
            ],
            "__typename": [
                113
            ]
        },
        "FeedInfo": {
            "default_lang": [
                113
            ],
            "feed_contact_email": [
                113
            ],
            "feed_contact_url": [
                113
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                113
            ],
            "feed_publisher_name": [
                113
            ],
            "feed_publisher_url": [
                113
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                113
            ],
            "id": [
                74
            ],
            "__typename": [
                113
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                113
            ],
            "attribution_text": [
                113
            ],
            "commercial_use_allowed": [
                113
            ],
            "create_derived_product": [
                113
            ],
            "redistribution_allowed": [
                113
            ],
            "share_alike_optional": [
                113
            ],
            "spdx_identifier": [
                113
            ],
            "url": [
                113
            ],
            "use_without_attribution": [
                113
            ],
            "__typename": [
                113
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
                113
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                113
            ],
            "mds_provider": [
                113
            ],
            "realtime_alerts": [
                113
            ],
            "realtime_trip_updates": [
                113
            ],
            "realtime_vehicle_positions": [
                113
            ],
            "static_current": [
                113
            ],
            "static_historic": [
                113
            ],
            "static_planned": [
                113
            ],
            "__typename": [
                113
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
                113
            ],
            "description": [
                113
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
                113
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
                113
            ],
            "stops": [
                108,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "trips": [
                117,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "updated_by": [
                113
            ],
            "url": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                113
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                113
            ],
            "id": [
                74
            ],
            "name": [
                113
            ],
            "rows": [
                74
            ],
            "sha1": [
                113
            ],
            "size": [
                74
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionFilter": {
            "feed_ids": [
                74
            ],
            "feed_onestop_id": [
                113
            ],
            "import_status": [
                73
            ],
            "sha1": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                116
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                113
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
                116
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                113
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
                113
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
                113
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                113
            ],
            "name": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                113
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
                113
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
                113
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                88
            ],
            "__typename": [
                113
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                113
            ],
            "brand_image_url_dark": [
                113
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                113
            ],
            "color": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsDockRequest": {
            "near": [
                88
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                113
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
                114
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                113
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                113
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                113
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                113
            ],
            "store_uri": [
                113
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "GbfsRentalUris": {
            "android": [
                113
            ],
            "ios": [
                113
            ],
            "web": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsStationInformation": {
            "address": [
                113
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                113
            ],
            "cross_street": [
                113
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
                113
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                113
            ],
            "post_code": [
                113
            ],
            "region": [
                66
            ],
            "rental_methods": [
                114
            ],
            "short_name": [
                113
            ],
            "station_area": [
                72
            ],
            "station_id": [
                113
            ],
            "status": [
                60
            ],
            "__typename": [
                113
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
                113
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                113
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                113
            ],
            "description": [
                113
            ],
            "last_updated": [
                74
            ],
            "summary": [
                113
            ],
            "times": [
                45
            ],
            "type": [
                113
            ],
            "url": [
                113
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "GbfsSystemHour": {
            "days": [
                114
            ],
            "end_time": [
                113
            ],
            "start_time": [
                113
            ],
            "user_types": [
                114
            ],
            "__typename": [
                113
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                113
            ],
            "feed_contact_email": [
                113
            ],
            "language": [
                113
            ],
            "license_url": [
                113
            ],
            "name": [
                113
            ],
            "operator": [
                113
            ],
            "phone_number": [
                113
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                113
            ],
            "purchase_url": [
                113
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                113
            ],
            "start_date": [
                13
            ],
            "system_id": [
                113
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                113
            ],
            "timezone": [
                113
            ],
            "url": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                113
            ],
            "description": [
                113
            ],
            "is_taxable": [
                6
            ],
            "name": [
                113
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                113
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                113
            ],
            "region_id": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                113
            ],
            "version": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                113
            ],
            "icon_url_dark": [
                113
            ],
            "__typename": [
                113
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
                113
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
                113
            ],
            "country_code": [
                113
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                113
            ],
            "eco_sticker": [
                113
            ],
            "form_factor": [
                113
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                113
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                113
            ],
            "name": [
                113
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                113
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                113
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                114
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                113
            ],
            "vehicle_type_id": [
                113
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                113
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
                113
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
                116
            ],
            "from": [
                124
            ],
            "legs": [
                77
            ],
            "start_time": [
                116
            ],
            "to": [
                124
            ],
            "__typename": [
                113
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
                116
            ],
            "from": [
                124
            ],
            "geometry": [
                81
            ],
            "start_time": [
                116
            ],
            "steps": [
                106
            ],
            "to": [
                124
            ],
            "__typename": [
                113
            ]
        },
        "Level": {
            "id": [
                74
            ],
            "level_id": [
                113
            ],
            "level_index": [
                43
            ],
            "level_name": [
                113
            ],
            "__typename": [
                113
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
                113
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
                113
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                113
            ],
            "onestop_id": [
                113
            ],
            "search_rank": [
                113
            ],
            "short_name": [
                113
            ],
            "tags": [
                115
            ],
            "website": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                113
            ],
            "adm0_name": [
                113
            ],
            "adm1_iso": [
                113
            ],
            "adm1_name": [
                113
            ],
            "agency_id": [
                113
            ],
            "city_name": [
                113
            ],
            "feed_onestop_id": [
                113
            ],
            "license": [
                79
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                113
            ],
            "search": [
                113
            ],
            "tags": [
                115
            ],
            "__typename": [
                113
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
                113
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                113
            ],
            "signposted_as": [
                113
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
                113
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                113
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
                113
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
                        109
                    ]
                }
            ],
            "trips": [
                117,
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
                        118
                    ]
                }
            ],
            "__typename": [
                113
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
                113
            ]
        },
        "RTTranslation": {
            "language": [
                113
            ],
            "text": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                113
            ],
            "schedule_relationship": [
                113
            ],
            "start_date": [
                13
            ],
            "start_time": [
                104
            ],
            "trip_id": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                113
            ],
            "label": [
                113
            ],
            "license_plate": [
                113
            ],
            "__typename": [
                113
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
                        113,
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
                113
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                113
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
                113
            ],
            "patterns": [
                102
            ],
            "route_color": [
                113
            ],
            "route_desc": [
                113
            ],
            "route_id": [
                113
            ],
            "route_long_name": [
                113
            ],
            "route_short_name": [
                113
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
                113
            ],
            "route_type": [
                74
            ],
            "route_url": [
                113
            ],
            "search_rank": [
                113
            ],
            "stops": [
                108,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        109
                    ]
                }
            ],
            "trips": [
                117,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "__typename": [
                113
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
                113
            ],
            "feed_version_sha1": [
                113
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                113
            ],
            "onestop_ids": [
                113
            ],
            "operator_onestop_id": [
                113
            ],
            "route_id": [
                113
            ],
            "route_type": [
                74
            ],
            "search": [
                113
            ],
            "within": [
                89
            ],
            "__typename": [
                113
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
                113
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
                113
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
                113
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
                113
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
                117,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                113
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
                113
            ],
            "__typename": [
                113
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
                116
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                113
            ],
            "mode": [
                107
            ],
            "start_time": [
                116
            ],
            "to": [
                124
            ],
            "__typename": [
                113
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
                110,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        112
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        113,
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
                110,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        112
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        116
                    ],
                    "from": [
                        125
                    ],
                    "mode": [
                        107
                    ],
                    "to": [
                        125
                    ]
                }
            ],
            "feed_onestop_id": [
                113
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                113
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
            "onestop_id": [
                113
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
                113
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
                113
            ],
            "stop_code": [
                113
            ],
            "stop_desc": [
                113
            ],
            "stop_id": [
                113
            ],
            "stop_name": [
                113
            ],
            "stop_times": [
                110,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        112
                    ]
                }
            ],
            "stop_timezone": [
                113
            ],
            "stop_url": [
                113
            ],
            "tts_stop_name": [
                113
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                113
            ],
            "__typename": [
                113
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
                113
            ],
            "feed_version_sha1": [
                113
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                113
            ],
            "onestop_ids": [
                113
            ],
            "search": [
                113
            ],
            "served_by_onestop_ids": [
                113
            ],
            "stop_code": [
                113
            ],
            "stop_id": [
                113
            ],
            "within": [
                89
            ],
            "__typename": [
                113
            ]
        },
        "StopTime": {
            "arrival": [
                111
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
                111
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
                113
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                117
            ],
            "__typename": [
                113
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
                116
            ],
            "scheduled": [
                104
            ],
            "stop_timezone": [
                113
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                113
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
                113
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
                113
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
                113
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
                110,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "timestamp": [
                116
            ],
            "trip_headsign": [
                113
            ],
            "trip_id": [
                113
            ],
            "trip_short_name": [
                113
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                113
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                113
            ],
            "feed_version_sha1": [
                113
            ],
            "license": [
                79
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                113
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                113
            ],
            "__typename": [
                113
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
                122
            ],
            "failure_reason": [
                113
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
                        113
                    ]
                }
            ],
            "sha1": [
                113
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
                122
            ],
            "__typename": [
                113
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                113
            ],
            "error_type": [
                113
            ],
            "field": [
                113
            ],
            "filename": [
                113
            ],
            "message": [
                113
            ],
            "value": [
                113
            ],
            "__typename": [
                113
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                113
            ],
            "errors": [
                121
            ],
            "filename": [
                113
            ],
            "limit": [
                74
            ],
            "__typename": [
                113
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                113
            ],
            "current_status": [
                113
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
                116
            ],
            "vehicle": [
                94
            ],
            "__typename": [
                113
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
                113
            ],
            "__typename": [
                113
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
                113
            ],
            "__typename": [
                113
            ]
        }
    }
}