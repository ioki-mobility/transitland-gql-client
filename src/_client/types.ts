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
        104,
        105,
        108,
        117,
        118,
        119,
        120,
        123
    ],
    "types": {
        "Agency": {
            "agency_email": [
                117
            ],
            "agency_fare_url": [
                117
            ],
            "agency_id": [
                117
            ],
            "agency_lang": [
                117
            ],
            "agency_name": [
                117
            ],
            "agency_phone": [
                117
            ],
            "agency_timezone": [
                117
            ],
            "agency_url": [
                117
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
                        117,
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
                117
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                117
            ],
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "onestop_id": [
                117
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
                        98
                    ]
                }
            ],
            "search_rank": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                117
            ],
            "adm0_name": [
                117
            ],
            "adm1_iso": [
                117
            ],
            "adm1_name": [
                117
            ],
            "agency_id": [
                117
            ],
            "agency_name": [
                117
            ],
            "city_name": [
                117
            ],
            "feed_onestop_id": [
                117
            ],
            "feed_version_sha1": [
                117
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                117
            ],
            "search": [
                117
            ],
            "within": [
                89
            ],
            "__typename": [
                117
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                117
            ],
            "adm1_name": [
                117
            ],
            "city_name": [
                117
            ],
            "rank": [
                43
            ],
            "__typename": [
                117
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                117
            ]
        },
        "Alert": {
            "active_period": [
                91
            ],
            "cause": [
                117
            ],
            "description_text": [
                92
            ],
            "effect": [
                117
            ],
            "header_text": [
                92
            ],
            "severity_level": [
                117
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
                117
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
                117
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
                117
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
                117
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
                117
            ],
            "geometry": [
                89
            ],
            "id": [
                74
            ],
            "layer_name": [
                117
            ],
            "name": [
                117
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        117,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                117
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                117
            ],
            "table_name": [
                117
            ],
            "table_title": [
                117
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                120
            ],
            "from": [
                129
            ],
            "mode": [
                108
            ],
            "to": [
                129
            ],
            "__typename": [
                117
            ]
        },
        "Directions": {
            "data_source": [
                117
            ],
            "destination": [
                128
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                120
            ],
            "exception": [
                117
            ],
            "itineraries": [
                75
            ],
            "origin": [
                128
            ],
            "start_time": [
                120
            ],
            "success": [
                7
            ],
            "__typename": [
                117
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
                117
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
                117
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
                117
            ],
            "id": [
                74
            ],
            "languages": [
                117
            ],
            "license": [
                26
            ],
            "name": [
                117
            ],
            "onestop_id": [
                117
            ],
            "search_rank": [
                117
            ],
            "spec": [
                29
            ],
            "tags": [
                119
            ],
            "urls": [
                31
            ],
            "__typename": [
                117
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                117
            ],
            "param_name": [
                117
            ],
            "type": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                117
            ],
            "fetched_at": [
                120
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                117
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                117
            ],
            "url_type": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                117
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
                117
            ],
            "search": [
                117
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                119
            ],
            "__typename": [
                117
            ]
        },
        "FeedInfo": {
            "default_lang": [
                117
            ],
            "feed_contact_email": [
                117
            ],
            "feed_contact_url": [
                117
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                117
            ],
            "feed_publisher_name": [
                117
            ],
            "feed_publisher_url": [
                117
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                117
            ],
            "id": [
                74
            ],
            "__typename": [
                117
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                117
            ],
            "attribution_text": [
                117
            ],
            "commercial_use_allowed": [
                117
            ],
            "create_derived_product": [
                117
            ],
            "redistribution_allowed": [
                117
            ],
            "share_alike_optional": [
                117
            ],
            "spdx_identifier": [
                117
            ],
            "url": [
                117
            ],
            "use_without_attribution": [
                117
            ],
            "__typename": [
                117
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
                117
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                117
            ],
            "mds_provider": [
                117
            ],
            "realtime_alerts": [
                117
            ],
            "realtime_trip_updates": [
                117
            ],
            "realtime_vehicle_positions": [
                117
            ],
            "static_current": [
                117
            ],
            "static_historic": [
                117
            ],
            "static_planned": [
                117
            ],
            "__typename": [
                117
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
                117
            ],
            "description": [
                117
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
                120
            ],
            "file": [
                117
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
                117
            ],
            "routes": [
                96,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        98
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
                117
            ],
            "stops": [
                109,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        111
                    ]
                }
            ],
            "trips": [
                121,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "updated_by": [
                117
            ],
            "url": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                117
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                117
            ],
            "id": [
                74
            ],
            "name": [
                117
            ],
            "rows": [
                74
            ],
            "sha1": [
                117
            ],
            "size": [
                74
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionFilter": {
            "feed_ids": [
                74
            ],
            "feed_onestop_id": [
                117
            ],
            "file": [
                117
            ],
            "import_status": [
                73
            ],
            "sha1": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                120
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                117
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
                120
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                117
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
                117
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
                117
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                117
            ],
            "name": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                117
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                105
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
                105
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                88
            ],
            "__typename": [
                117
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                117
            ],
            "brand_image_url_dark": [
                117
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                117
            ],
            "color": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsDockRequest": {
            "near": [
                88
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                117
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
                118
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                117
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                117
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                117
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                117
            ],
            "store_uri": [
                117
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "GbfsRentalUris": {
            "android": [
                117
            ],
            "ios": [
                117
            ],
            "web": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsStationInformation": {
            "address": [
                117
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                117
            ],
            "cross_street": [
                117
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
                117
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                117
            ],
            "post_code": [
                117
            ],
            "region": [
                66
            ],
            "rental_methods": [
                118
            ],
            "short_name": [
                117
            ],
            "station_area": [
                72
            ],
            "station_id": [
                117
            ],
            "status": [
                60
            ],
            "__typename": [
                117
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
                117
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                117
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                117
            ],
            "description": [
                117
            ],
            "last_updated": [
                74
            ],
            "summary": [
                117
            ],
            "times": [
                45
            ],
            "type": [
                117
            ],
            "url": [
                117
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "GbfsSystemHour": {
            "days": [
                118
            ],
            "end_time": [
                117
            ],
            "start_time": [
                117
            ],
            "user_types": [
                118
            ],
            "__typename": [
                117
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                117
            ],
            "feed_contact_email": [
                117
            ],
            "language": [
                117
            ],
            "license_url": [
                117
            ],
            "name": [
                117
            ],
            "operator": [
                117
            ],
            "phone_number": [
                117
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                117
            ],
            "purchase_url": [
                117
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                117
            ],
            "start_date": [
                13
            ],
            "system_id": [
                117
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                117
            ],
            "timezone": [
                117
            ],
            "url": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                117
            ],
            "description": [
                117
            ],
            "is_taxable": [
                6
            ],
            "name": [
                117
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                117
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                117
            ],
            "region_id": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                117
            ],
            "version": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                117
            ],
            "icon_url_dark": [
                117
            ],
            "__typename": [
                117
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
                117
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
                117
            ],
            "country_code": [
                117
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                117
            ],
            "eco_sticker": [
                117
            ],
            "form_factor": [
                117
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                117
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                117
            ],
            "name": [
                117
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                117
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                117
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                118
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                117
            ],
            "vehicle_type_id": [
                117
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                117
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
                117
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
                120
            ],
            "from": [
                128
            ],
            "legs": [
                77
            ],
            "start_time": [
                120
            ],
            "to": [
                128
            ],
            "__typename": [
                117
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
                120
            ],
            "from": [
                128
            ],
            "geometry": [
                81
            ],
            "start_time": [
                120
            ],
            "steps": [
                107
            ],
            "to": [
                128
            ],
            "__typename": [
                117
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
                117
            ],
            "level_index": [
                43
            ],
            "level_name": [
                117
            ],
            "stops": [
                109
            ],
            "__typename": [
                117
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
                117
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
                117
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                117
            ],
            "onestop_id": [
                117
            ],
            "search_rank": [
                117
            ],
            "short_name": [
                117
            ],
            "tags": [
                119
            ],
            "website": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                117
            ],
            "adm0_name": [
                117
            ],
            "adm1_iso": [
                117
            ],
            "adm1_name": [
                117
            ],
            "agency_id": [
                117
            ],
            "city_name": [
                117
            ],
            "feed_onestop_id": [
                117
            ],
            "license": [
                79
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                117
            ],
            "search": [
                117
            ],
            "tags": [
                119
            ],
            "__typename": [
                117
            ]
        },
        "Pathway": {
            "from_stop": [
                109
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
                117
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                117
            ],
            "signposted_as": [
                117
            ],
            "stair_count": [
                74
            ],
            "to_stop": [
                109
            ],
            "traversal_time": [
                74
            ],
            "__typename": [
                117
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                117
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
                117
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
                        98
                    ]
                }
            ],
            "stops": [
                109,
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
                        111
                    ]
                }
            ],
            "trips": [
                121,
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
                        122
                    ]
                }
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "RTTranslation": {
            "language": [
                117
            ],
            "text": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                117
            ],
            "schedule_relationship": [
                117
            ],
            "start_date": [
                13
            ],
            "start_time": [
                105
            ],
            "trip_id": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                117
            ],
            "label": [
                117
            ],
            "license_plate": [
                117
            ],
            "__typename": [
                117
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
                        117,
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
                117
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                117
            ],
            "geometries": [
                99,
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
                100,
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
                117
            ],
            "patterns": [
                103
            ],
            "route_attribute": [
                97
            ],
            "route_color": [
                117
            ],
            "route_desc": [
                117
            ],
            "route_id": [
                117
            ],
            "route_long_name": [
                117
            ],
            "route_short_name": [
                117
            ],
            "route_sort_order": [
                74
            ],
            "route_stop_buffer": [
                102,
                {
                    "radius": [
                        43
                    ]
                }
            ],
            "route_stops": [
                101,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "route_text_color": [
                117
            ],
            "route_type": [
                74
            ],
            "route_url": [
                117
            ],
            "search_rank": [
                117
            ],
            "stops": [
                109,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        111
                    ]
                }
            ],
            "trips": [
                121,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "__typename": [
                117
            ]
        },
        "RouteAttribute": {
            "category": [
                74
            ],
            "running_way": [
                74
            ],
            "subcategory": [
                74
            ],
            "__typename": [
                117
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
                117
            ],
            "feed_version_sha1": [
                117
            ],
            "license": [
                79
            ],
            "near": [
                88
            ],
            "onestop_id": [
                117
            ],
            "onestop_ids": [
                117
            ],
            "operator_onestop_id": [
                117
            ],
            "route_id": [
                117
            ],
            "route_type": [
                74
            ],
            "search": [
                117
            ],
            "within": [
                89
            ],
            "__typename": [
                117
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
                117
            ]
        },
        "RouteHeadway": {
            "departures": [
                105
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
                109
            ],
            "stop_trip_count": [
                74
            ],
            "__typename": [
                117
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
                109
            ],
            "stop_id": [
                74
            ],
            "__typename": [
                117
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
                117
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
                121,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                117
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
                117
            ],
            "__typename": [
                117
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
                120
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                117
            ],
            "mode": [
                108
            ],
            "start_time": [
                120
            ],
            "to": [
                128
            ],
            "__typename": [
                117
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
                114,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        117,
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
                109,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "departures": [
                114,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        120
                    ],
                    "from": [
                        129
                    ],
                    "mode": [
                        108
                    ],
                    "to": [
                        129
                    ]
                }
            ],
            "external_reference": [
                110
            ],
            "feed_onestop_id": [
                117
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                117
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
                109,
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
                112,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        113
                    ]
                }
            ],
            "onestop_id": [
                117
            ],
            "parent": [
                109
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
                117
            ],
            "route_stops": [
                101,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "search_rank": [
                117
            ],
            "stop_code": [
                117
            ],
            "stop_desc": [
                117
            ],
            "stop_id": [
                117
            ],
            "stop_name": [
                117
            ],
            "stop_times": [
                114,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "stop_timezone": [
                117
            ],
            "stop_url": [
                117
            ],
            "tts_stop_name": [
                117
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                117
            ],
            "__typename": [
                117
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
                109
            ],
            "target_feed_onestop_id": [
                117
            ],
            "target_stop_id": [
                117
            ],
            "__typename": [
                117
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
                117
            ],
            "feed_version_sha1": [
                117
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
                117
            ],
            "onestop_ids": [
                117
            ],
            "search": [
                117
            ],
            "served_by_onestop_ids": [
                117
            ],
            "stop_code": [
                117
            ],
            "stop_id": [
                117
            ],
            "within": [
                89
            ],
            "__typename": [
                117
            ]
        },
        "StopObservation": {
            "agency_id": [
                117
            ],
            "from_stop_id": [
                117
            ],
            "observed_arrival_time": [
                105
            ],
            "observed_departure_time": [
                105
            ],
            "route_id": [
                117
            ],
            "schedule_relationship": [
                117
            ],
            "scheduled_arrival_time": [
                105
            ],
            "scheduled_departure_time": [
                105
            ],
            "source": [
                117
            ],
            "stop_sequence": [
                74
            ],
            "to_stop_id": [
                117
            ],
            "trip_id": [
                117
            ],
            "trip_start_date": [
                13
            ],
            "trip_start_time": [
                105
            ],
            "__typename": [
                117
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                74
            ],
            "source": [
                117
            ],
            "trip_start_date": [
                13
            ],
            "__typename": [
                117
            ]
        },
        "StopTime": {
            "arrival": [
                115
            ],
            "arrival_time": [
                105
            ],
            "continuous_drop_off": [
                74
            ],
            "continuous_pickup": [
                74
            ],
            "departure": [
                115
            ],
            "departure_time": [
                105
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
                109
            ],
            "stop_headsign": [
                117
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                121
            ],
            "__typename": [
                117
            ]
        },
        "StopTimeEvent": {
            "delay": [
                74
            ],
            "estimated": [
                105
            ],
            "estimated_utc": [
                120
            ],
            "scheduled": [
                105
            ],
            "stop_timezone": [
                117
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                117
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                105
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
                117
            ],
            "service_date": [
                13
            ],
            "start": [
                105
            ],
            "start_time": [
                74
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                117
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
                117
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
                104
            ],
            "shape": [
                106
            ],
            "stop_pattern_id": [
                74
            ],
            "stop_times": [
                114,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "timestamp": [
                120
            ],
            "trip_headsign": [
                117
            ],
            "trip_id": [
                117
            ],
            "trip_short_name": [
                117
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                117
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                117
            ],
            "feed_version_sha1": [
                117
            ],
            "license": [
                79
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                117
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                117
            ],
            "__typename": [
                117
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
                126
            ],
            "failure_reason": [
                117
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
                        117
                    ]
                }
            ],
            "sha1": [
                117
            ],
            "stops": [
                109,
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
                126
            ],
            "__typename": [
                117
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                117
            ],
            "error_type": [
                117
            ],
            "field": [
                117
            ],
            "filename": [
                117
            ],
            "message": [
                117
            ],
            "value": [
                117
            ],
            "__typename": [
                117
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                117
            ],
            "errors": [
                125
            ],
            "filename": [
                117
            ],
            "limit": [
                74
            ],
            "__typename": [
                117
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                117
            ],
            "current_status": [
                117
            ],
            "current_stop_sequence": [
                74
            ],
            "position": [
                87
            ],
            "stop_id": [
                109
            ],
            "timestamp": [
                120
            ],
            "vehicle": [
                94
            ],
            "__typename": [
                117
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
                117
            ],
            "__typename": [
                117
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
                117
            ],
            "__typename": [
                117
            ]
        }
    }
}