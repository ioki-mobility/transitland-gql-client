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
        88,
        90,
        92,
        98,
        107,
        108,
        111,
        120,
        121,
        122,
        123,
        126
    ],
    "types": {
        "Agency": {
            "agency_email": [
                120
            ],
            "agency_fare_url": [
                120
            ],
            "agency_id": [
                120
            ],
            "agency_lang": [
                120
            ],
            "agency_name": [
                120
            ],
            "agency_phone": [
                120
            ],
            "agency_timezone": [
                120
            ],
            "agency_url": [
                120
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
                        120,
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
                120
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                120
            ],
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "onestop_id": [
                120
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
                99,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "search_rank": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                120
            ],
            "adm0_name": [
                120
            ],
            "adm1_iso": [
                120
            ],
            "adm1_name": [
                120
            ],
            "agency_id": [
                120
            ],
            "agency_name": [
                120
            ],
            "city_name": [
                120
            ],
            "feed_onestop_id": [
                120
            ],
            "feed_version_sha1": [
                120
            ],
            "license": [
                79
            ],
            "near": [
                91
            ],
            "onestop_id": [
                120
            ],
            "search": [
                120
            ],
            "within": [
                92
            ],
            "__typename": [
                120
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                120
            ],
            "adm1_name": [
                120
            ],
            "city_name": [
                120
            ],
            "rank": [
                43
            ],
            "__typename": [
                120
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                120
            ]
        },
        "Alert": {
            "active_period": [
                94
            ],
            "cause": [
                120
            ],
            "description_text": [
                95
            ],
            "effect": [
                120
            ],
            "header_text": [
                95
            ],
            "severity_level": [
                120
            ],
            "tts_description_text": [
                95
            ],
            "tts_header_text": [
                95
            ],
            "url": [
                95
            ],
            "__typename": [
                120
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
                120
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
                120
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
                120
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
                120
            ],
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "layer_name": [
                120
            ],
            "name": [
                120
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        120,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                120
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                120
            ],
            "table_name": [
                120
            ],
            "table_title": [
                120
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                123
            ],
            "from": [
                132
            ],
            "mode": [
                111
            ],
            "to": [
                132
            ],
            "__typename": [
                120
            ]
        },
        "Directions": {
            "data_source": [
                120
            ],
            "destination": [
                131
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                123
            ],
            "exception": [
                120
            ],
            "itineraries": [
                75
            ],
            "origin": [
                131
            ],
            "start_time": [
                123
            ],
            "success": [
                7
            ],
            "__typename": [
                120
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
                120
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
                120
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
                120
            ],
            "id": [
                74
            ],
            "languages": [
                120
            ],
            "license": [
                26
            ],
            "name": [
                120
            ],
            "onestop_id": [
                120
            ],
            "search_rank": [
                120
            ],
            "spec": [
                29
            ],
            "tags": [
                122
            ],
            "urls": [
                31
            ],
            "__typename": [
                120
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                120
            ],
            "param_name": [
                120
            ],
            "type": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                120
            ],
            "fetched_at": [
                123
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                120
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                120
            ],
            "url_type": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                120
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
                120
            ],
            "search": [
                120
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                122
            ],
            "__typename": [
                120
            ]
        },
        "FeedInfo": {
            "default_lang": [
                120
            ],
            "feed_contact_email": [
                120
            ],
            "feed_contact_url": [
                120
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                120
            ],
            "feed_publisher_name": [
                120
            ],
            "feed_publisher_url": [
                120
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                120
            ],
            "id": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                120
            ],
            "attribution_text": [
                120
            ],
            "commercial_use_allowed": [
                120
            ],
            "create_derived_product": [
                120
            ],
            "redistribution_allowed": [
                120
            ],
            "share_alike_optional": [
                120
            ],
            "spdx_identifier": [
                120
            ],
            "url": [
                120
            ],
            "use_without_attribution": [
                120
            ],
            "__typename": [
                120
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
                120
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                120
            ],
            "mds_provider": [
                120
            ],
            "realtime_alerts": [
                120
            ],
            "realtime_trip_updates": [
                120
            ],
            "realtime_vehicle_positions": [
                120
            ],
            "static_current": [
                120
            ],
            "static_historic": [
                120
            ],
            "static_planned": [
                120
            ],
            "__typename": [
                120
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
                120
            ],
            "description": [
                120
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
                123
            ],
            "file": [
                120
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
                92
            ],
            "id": [
                74
            ],
            "latest_calendar_date": [
                13
            ],
            "name": [
                120
            ],
            "routes": [
                99,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        101
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
                120
            ],
            "stops": [
                112,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        114
                    ]
                }
            ],
            "trips": [
                124,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        125
                    ]
                }
            ],
            "updated_by": [
                120
            ],
            "url": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                120
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                120
            ],
            "id": [
                74
            ],
            "name": [
                120
            ],
            "rows": [
                74
            ],
            "sha1": [
                120
            ],
            "size": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionFilter": {
            "feed_ids": [
                74
            ],
            "feed_onestop_id": [
                120
            ],
            "file": [
                120
            ],
            "import_status": [
                73
            ],
            "sha1": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                123
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                120
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
                123
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                120
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
                120
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
                120
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                120
            ],
            "name": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                120
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                108
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
                108
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                91
            ],
            "__typename": [
                120
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                120
            ],
            "brand_image_url_dark": [
                120
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                120
            ],
            "color": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsDockRequest": {
            "near": [
                91
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                120
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
                121
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                120
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                120
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                120
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                120
            ],
            "store_uri": [
                120
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "GbfsRentalUris": {
            "android": [
                120
            ],
            "ios": [
                120
            ],
            "web": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsStationInformation": {
            "address": [
                120
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                120
            ],
            "cross_street": [
                120
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
                120
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                120
            ],
            "post_code": [
                120
            ],
            "region": [
                66
            ],
            "rental_methods": [
                121
            ],
            "short_name": [
                120
            ],
            "station_area": [
                72
            ],
            "station_id": [
                120
            ],
            "status": [
                60
            ],
            "__typename": [
                120
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
                120
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                120
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                120
            ],
            "description": [
                120
            ],
            "last_updated": [
                74
            ],
            "summary": [
                120
            ],
            "times": [
                45
            ],
            "type": [
                120
            ],
            "url": [
                120
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "GbfsSystemHour": {
            "days": [
                121
            ],
            "end_time": [
                120
            ],
            "start_time": [
                120
            ],
            "user_types": [
                121
            ],
            "__typename": [
                120
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                120
            ],
            "feed_contact_email": [
                120
            ],
            "language": [
                120
            ],
            "license_url": [
                120
            ],
            "name": [
                120
            ],
            "operator": [
                120
            ],
            "phone_number": [
                120
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                120
            ],
            "purchase_url": [
                120
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                120
            ],
            "start_date": [
                13
            ],
            "system_id": [
                120
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                120
            ],
            "timezone": [
                120
            ],
            "url": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                120
            ],
            "description": [
                120
            ],
            "is_taxable": [
                6
            ],
            "name": [
                120
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                120
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                120
            ],
            "region_id": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                120
            ],
            "version": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                120
            ],
            "icon_url_dark": [
                120
            ],
            "__typename": [
                120
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
                120
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
                120
            ],
            "country_code": [
                120
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                120
            ],
            "eco_sticker": [
                120
            ],
            "form_factor": [
                120
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                120
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                120
            ],
            "name": [
                120
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                120
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                120
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                121
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                120
            ],
            "vehicle_type_id": [
                120
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                120
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
                120
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
                123
            ],
            "from": [
                131
            ],
            "legs": [
                77
            ],
            "start_time": [
                123
            ],
            "to": [
                131
            ],
            "__typename": [
                120
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
                123
            ],
            "from": [
                131
            ],
            "geometry": [
                81
            ],
            "start_time": [
                123
            ],
            "steps": [
                110
            ],
            "to": [
                131
            ],
            "__typename": [
                120
            ]
        },
        "Level": {
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "level_id": [
                120
            ],
            "level_index": [
                43
            ],
            "level_name": [
                120
            ],
            "stops": [
                112
            ],
            "__typename": [
                120
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
                120
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
                120
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                120
            ],
            "onestop_id": [
                120
            ],
            "search_rank": [
                120
            ],
            "short_name": [
                120
            ],
            "tags": [
                122
            ],
            "website": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                120
            ],
            "adm0_name": [
                120
            ],
            "adm1_iso": [
                120
            ],
            "adm1_name": [
                120
            ],
            "agency_id": [
                120
            ],
            "city_name": [
                120
            ],
            "feed_onestop_id": [
                120
            ],
            "license": [
                79
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                120
            ],
            "search": [
                120
            ],
            "tags": [
                122
            ],
            "__typename": [
                120
            ]
        },
        "Pathway": {
            "from_stop": [
                112
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
                120
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                120
            ],
            "signposted_as": [
                120
            ],
            "stair_count": [
                74
            ],
            "to_stop": [
                112
            ],
            "traversal_time": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "Place": {
            "adm0_name": [
                120
            ],
            "adm1_name": [
                120
            ],
            "city_name": [
                120
            ],
            "count": [
                74
            ],
            "operators": [
                83
            ],
            "__typename": [
                120
            ]
        },
        "PlaceAggregationLevel": {},
        "PlaceFilter": {
            "adm0_name": [
                120
            ],
            "adm1_name": [
                120
            ],
            "city_name": [
                120
            ],
            "min_rank": [
                43
            ],
            "__typename": [
                120
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
                120
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
            "places": [
                87,
                {
                    "after": [
                        74
                    ],
                    "level": [
                        88
                    ],
                    "limit": [
                        74
                    ],
                    "where": [
                        89
                    ]
                }
            ],
            "routes": [
                99,
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
                        101
                    ]
                }
            ],
            "stops": [
                112,
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
                        114
                    ]
                }
            ],
            "trips": [
                124,
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
                        125
                    ]
                }
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "RTTranslation": {
            "language": [
                120
            ],
            "text": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                120
            ],
            "schedule_relationship": [
                120
            ],
            "start_date": [
                13
            ],
            "start_time": [
                108
            ],
            "trip_id": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                120
            ],
            "label": [
                120
            ],
            "license_plate": [
                120
            ],
            "__typename": [
                120
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
                        120,
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
                120
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                120
            ],
            "geometries": [
                102,
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
                103,
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
                120
            ],
            "patterns": [
                106
            ],
            "route_attribute": [
                100
            ],
            "route_color": [
                120
            ],
            "route_desc": [
                120
            ],
            "route_id": [
                120
            ],
            "route_long_name": [
                120
            ],
            "route_short_name": [
                120
            ],
            "route_sort_order": [
                74
            ],
            "route_stop_buffer": [
                105,
                {
                    "radius": [
                        43
                    ]
                }
            ],
            "route_stops": [
                104,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "route_text_color": [
                120
            ],
            "route_type": [
                74
            ],
            "route_url": [
                120
            ],
            "search_rank": [
                120
            ],
            "stops": [
                112,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        114
                    ]
                }
            ],
            "trips": [
                124,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        125
                    ]
                }
            ],
            "__typename": [
                120
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
                120
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
                120
            ],
            "feed_version_sha1": [
                120
            ],
            "license": [
                79
            ],
            "near": [
                91
            ],
            "onestop_id": [
                120
            ],
            "onestop_ids": [
                120
            ],
            "operator_onestop_id": [
                120
            ],
            "route_id": [
                120
            ],
            "route_type": [
                74
            ],
            "search": [
                120
            ],
            "within": [
                92
            ],
            "__typename": [
                120
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
                120
            ]
        },
        "RouteHeadway": {
            "departures": [
                108
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
                112
            ],
            "stop_trip_count": [
                74
            ],
            "__typename": [
                120
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
                99
            ],
            "route_id": [
                74
            ],
            "stop": [
                112
            ],
            "stop_id": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                72
            ],
            "stop_convexhull": [
                92
            ],
            "stop_points": [
                72
            ],
            "__typename": [
                120
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
                124,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                120
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
                120
            ],
            "__typename": [
                120
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
                123
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                120
            ],
            "mode": [
                111
            ],
            "start_time": [
                123
            ],
            "to": [
                131
            ],
            "__typename": [
                120
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
                117,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        119
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        120,
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
                112,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "departures": [
                117,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        119
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        123
                    ],
                    "from": [
                        132
                    ],
                    "mode": [
                        111
                    ],
                    "to": [
                        132
                    ]
                }
            ],
            "external_reference": [
                113
            ],
            "feed_onestop_id": [
                120
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                120
            ],
            "geometry": [
                90
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
                112,
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
            "onestop_id": [
                120
            ],
            "parent": [
                112
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
                120
            ],
            "route_stops": [
                104,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "search_rank": [
                120
            ],
            "stop_code": [
                120
            ],
            "stop_desc": [
                120
            ],
            "stop_id": [
                120
            ],
            "stop_name": [
                120
            ],
            "stop_times": [
                117,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        119
                    ]
                }
            ],
            "stop_timezone": [
                120
            ],
            "stop_url": [
                120
            ],
            "tts_stop_name": [
                120
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                120
            ],
            "__typename": [
                120
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
                112
            ],
            "target_feed_onestop_id": [
                120
            ],
            "target_stop_id": [
                120
            ],
            "__typename": [
                120
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
                120
            ],
            "feed_version_sha1": [
                120
            ],
            "license": [
                79
            ],
            "location_type": [
                74
            ],
            "near": [
                91
            ],
            "onestop_id": [
                120
            ],
            "onestop_ids": [
                120
            ],
            "search": [
                120
            ],
            "served_by_onestop_ids": [
                120
            ],
            "stop_code": [
                120
            ],
            "stop_id": [
                120
            ],
            "within": [
                92
            ],
            "__typename": [
                120
            ]
        },
        "StopObservation": {
            "agency_id": [
                120
            ],
            "from_stop_id": [
                120
            ],
            "observed_arrival_time": [
                108
            ],
            "observed_departure_time": [
                108
            ],
            "route_id": [
                120
            ],
            "schedule_relationship": [
                120
            ],
            "scheduled_arrival_time": [
                108
            ],
            "scheduled_departure_time": [
                108
            ],
            "source": [
                120
            ],
            "stop_sequence": [
                74
            ],
            "to_stop_id": [
                120
            ],
            "trip_id": [
                120
            ],
            "trip_start_date": [
                13
            ],
            "trip_start_time": [
                108
            ],
            "__typename": [
                120
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                74
            ],
            "source": [
                120
            ],
            "trip_start_date": [
                13
            ],
            "__typename": [
                120
            ]
        },
        "StopTime": {
            "arrival": [
                118
            ],
            "arrival_time": [
                108
            ],
            "continuous_drop_off": [
                74
            ],
            "continuous_pickup": [
                74
            ],
            "departure": [
                118
            ],
            "departure_time": [
                108
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
                112
            ],
            "stop_headsign": [
                120
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                124
            ],
            "__typename": [
                120
            ]
        },
        "StopTimeEvent": {
            "delay": [
                74
            ],
            "estimated": [
                108
            ],
            "estimated_utc": [
                123
            ],
            "scheduled": [
                108
            ],
            "stop_timezone": [
                120
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                108
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
                120
            ],
            "service_date": [
                13
            ],
            "start": [
                108
            ],
            "start_time": [
                74
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                120
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
                120
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
                99
            ],
            "schedule_relationship": [
                107
            ],
            "shape": [
                109
            ],
            "stop_pattern_id": [
                74
            ],
            "stop_times": [
                117,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "timestamp": [
                123
            ],
            "trip_headsign": [
                120
            ],
            "trip_id": [
                120
            ],
            "trip_short_name": [
                120
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                120
            ],
            "feed_version_sha1": [
                120
            ],
            "license": [
                79
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                120
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                120
            ],
            "__typename": [
                120
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
                129
            ],
            "failure_reason": [
                120
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
                99,
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
                        120
                    ]
                }
            ],
            "sha1": [
                120
            ],
            "stops": [
                112,
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
                129
            ],
            "__typename": [
                120
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                120
            ],
            "error_type": [
                120
            ],
            "field": [
                120
            ],
            "filename": [
                120
            ],
            "message": [
                120
            ],
            "value": [
                120
            ],
            "__typename": [
                120
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                120
            ],
            "errors": [
                128
            ],
            "filename": [
                120
            ],
            "limit": [
                74
            ],
            "__typename": [
                120
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                120
            ],
            "current_status": [
                120
            ],
            "current_stop_sequence": [
                74
            ],
            "position": [
                90
            ],
            "stop_id": [
                112
            ],
            "timestamp": [
                123
            ],
            "vehicle": [
                97
            ],
            "__typename": [
                120
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
                120
            ],
            "__typename": [
                120
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
                120
            ],
            "__typename": [
                120
            ]
        }
    }
}