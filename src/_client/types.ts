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
        112,
        121,
        122,
        123,
        124,
        128
    ],
    "types": {
        "Agency": {
            "agency_email": [
                121
            ],
            "agency_fare_url": [
                121
            ],
            "agency_id": [
                121
            ],
            "agency_lang": [
                121
            ],
            "agency_name": [
                121
            ],
            "agency_phone": [
                121
            ],
            "agency_timezone": [
                121
            ],
            "agency_url": [
                121
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
                        121,
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
                121
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                121
            ],
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "onestop_id": [
                121
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
                121
            ],
            "__typename": [
                121
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                121
            ],
            "adm0_name": [
                121
            ],
            "adm1_iso": [
                121
            ],
            "adm1_name": [
                121
            ],
            "agency_id": [
                121
            ],
            "agency_name": [
                121
            ],
            "city_name": [
                121
            ],
            "feed_onestop_id": [
                121
            ],
            "feed_version_sha1": [
                121
            ],
            "license": [
                79
            ],
            "near": [
                91
            ],
            "onestop_id": [
                121
            ],
            "search": [
                121
            ],
            "within": [
                92
            ],
            "__typename": [
                121
            ]
        },
        "AgencyPlace": {
            "adm0_name": [
                121
            ],
            "adm1_name": [
                121
            ],
            "city_name": [
                121
            ],
            "rank": [
                43
            ],
            "__typename": [
                121
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                121
            ]
        },
        "Alert": {
            "active_period": [
                94
            ],
            "cause": [
                121
            ],
            "description_text": [
                95
            ],
            "effect": [
                121
            ],
            "header_text": [
                95
            ],
            "severity_level": [
                121
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
                121
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
                121
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
                121
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
                121
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
                121
            ],
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "layer_name": [
                121
            ],
            "name": [
                121
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        121,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                121
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                121
            ],
            "table_name": [
                121
            ],
            "table_title": [
                121
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                124
            ],
            "from": [
                134
            ],
            "mode": [
                112
            ],
            "to": [
                134
            ],
            "__typename": [
                121
            ]
        },
        "Directions": {
            "data_source": [
                121
            ],
            "destination": [
                133
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                124
            ],
            "exception": [
                121
            ],
            "itineraries": [
                75
            ],
            "origin": [
                133
            ],
            "start_time": [
                124
            ],
            "success": [
                7
            ],
            "__typename": [
                121
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
                121
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
                121
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
                121
            ],
            "id": [
                74
            ],
            "languages": [
                121
            ],
            "license": [
                26
            ],
            "name": [
                121
            ],
            "onestop_id": [
                121
            ],
            "search_rank": [
                121
            ],
            "spec": [
                29
            ],
            "tags": [
                123
            ],
            "urls": [
                31
            ],
            "__typename": [
                121
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                121
            ],
            "param_name": [
                121
            ],
            "type": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                121
            ],
            "fetched_at": [
                124
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                121
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                121
            ],
            "url_type": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                121
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
                121
            ],
            "search": [
                121
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                123
            ],
            "__typename": [
                121
            ]
        },
        "FeedInfo": {
            "default_lang": [
                121
            ],
            "feed_contact_email": [
                121
            ],
            "feed_contact_url": [
                121
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                121
            ],
            "feed_publisher_name": [
                121
            ],
            "feed_publisher_url": [
                121
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                121
            ],
            "id": [
                74
            ],
            "__typename": [
                121
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                121
            ],
            "attribution_text": [
                121
            ],
            "commercial_use_allowed": [
                121
            ],
            "create_derived_product": [
                121
            ],
            "redistribution_allowed": [
                121
            ],
            "share_alike_optional": [
                121
            ],
            "spdx_identifier": [
                121
            ],
            "url": [
                121
            ],
            "use_without_attribution": [
                121
            ],
            "__typename": [
                121
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
                121
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                121
            ],
            "mds_provider": [
                121
            ],
            "realtime_alerts": [
                121
            ],
            "realtime_trip_updates": [
                121
            ],
            "realtime_vehicle_positions": [
                121
            ],
            "static_current": [
                121
            ],
            "static_historic": [
                121
            ],
            "static_planned": [
                121
            ],
            "__typename": [
                121
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
                121
            ],
            "description": [
                121
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
                124
            ],
            "file": [
                121
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
                121
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
                121
            ],
            "stops": [
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
            "trips": [
                125,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "updated_by": [
                121
            ],
            "url": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                121
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                121
            ],
            "id": [
                74
            ],
            "name": [
                121
            ],
            "rows": [
                74
            ],
            "sha1": [
                121
            ],
            "size": [
                74
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionFilter": {
            "covers": [
                109
            ],
            "feed_ids": [
                74
            ],
            "feed_onestop_id": [
                121
            ],
            "file": [
                121
            ],
            "import_status": [
                73
            ],
            "sha1": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                124
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                121
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
                124
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                121
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
                121
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
                121
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                121
            ],
            "name": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                121
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
                121
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
                121
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                91
            ],
            "__typename": [
                121
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                121
            ],
            "brand_image_url_dark": [
                121
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                121
            ],
            "color": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsDockRequest": {
            "near": [
                91
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                121
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
                122
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                121
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                121
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                121
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                121
            ],
            "store_uri": [
                121
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "GbfsRentalUris": {
            "android": [
                121
            ],
            "ios": [
                121
            ],
            "web": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsStationInformation": {
            "address": [
                121
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                121
            ],
            "cross_street": [
                121
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
                121
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                121
            ],
            "post_code": [
                121
            ],
            "region": [
                66
            ],
            "rental_methods": [
                122
            ],
            "short_name": [
                121
            ],
            "station_area": [
                72
            ],
            "station_id": [
                121
            ],
            "status": [
                60
            ],
            "__typename": [
                121
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
                121
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                121
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                121
            ],
            "description": [
                121
            ],
            "last_updated": [
                74
            ],
            "summary": [
                121
            ],
            "times": [
                45
            ],
            "type": [
                121
            ],
            "url": [
                121
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "GbfsSystemHour": {
            "days": [
                122
            ],
            "end_time": [
                121
            ],
            "start_time": [
                121
            ],
            "user_types": [
                122
            ],
            "__typename": [
                121
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                121
            ],
            "feed_contact_email": [
                121
            ],
            "language": [
                121
            ],
            "license_url": [
                121
            ],
            "name": [
                121
            ],
            "operator": [
                121
            ],
            "phone_number": [
                121
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                121
            ],
            "purchase_url": [
                121
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                121
            ],
            "start_date": [
                13
            ],
            "system_id": [
                121
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                121
            ],
            "timezone": [
                121
            ],
            "url": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                121
            ],
            "description": [
                121
            ],
            "is_taxable": [
                6
            ],
            "name": [
                121
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                121
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                121
            ],
            "region_id": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                121
            ],
            "version": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                121
            ],
            "icon_url_dark": [
                121
            ],
            "__typename": [
                121
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
                121
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
                121
            ],
            "country_code": [
                121
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                121
            ],
            "eco_sticker": [
                121
            ],
            "form_factor": [
                121
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                121
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                121
            ],
            "name": [
                121
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                121
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                121
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                122
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                121
            ],
            "vehicle_type_id": [
                121
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                121
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
                121
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
                124
            ],
            "from": [
                133
            ],
            "legs": [
                77
            ],
            "start_time": [
                124
            ],
            "to": [
                133
            ],
            "__typename": [
                121
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
                124
            ],
            "from": [
                133
            ],
            "geometry": [
                81
            ],
            "start_time": [
                124
            ],
            "steps": [
                111
            ],
            "to": [
                133
            ],
            "__typename": [
                121
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
                121
            ],
            "level_index": [
                43
            ],
            "level_name": [
                121
            ],
            "stops": [
                113
            ],
            "__typename": [
                121
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
                121
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
                121
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                121
            ],
            "onestop_id": [
                121
            ],
            "search_rank": [
                121
            ],
            "short_name": [
                121
            ],
            "tags": [
                123
            ],
            "website": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                121
            ],
            "adm0_name": [
                121
            ],
            "adm1_iso": [
                121
            ],
            "adm1_name": [
                121
            ],
            "agency_id": [
                121
            ],
            "city_name": [
                121
            ],
            "feed_onestop_id": [
                121
            ],
            "license": [
                79
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                121
            ],
            "search": [
                121
            ],
            "tags": [
                123
            ],
            "__typename": [
                121
            ]
        },
        "Pathway": {
            "from_stop": [
                113
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
                121
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                121
            ],
            "signposted_as": [
                121
            ],
            "stair_count": [
                74
            ],
            "to_stop": [
                113
            ],
            "traversal_time": [
                74
            ],
            "__typename": [
                121
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                121
            ]
        },
        "Place": {
            "adm0_name": [
                121
            ],
            "adm1_name": [
                121
            ],
            "city_name": [
                121
            ],
            "count": [
                74
            ],
            "operators": [
                83
            ],
            "__typename": [
                121
            ]
        },
        "PlaceAggregationLevel": {},
        "PlaceFilter": {
            "adm0_name": [
                121
            ],
            "adm1_name": [
                121
            ],
            "city_name": [
                121
            ],
            "min_rank": [
                43
            ],
            "__typename": [
                121
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
                121
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
                113,
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
                        115
                    ]
                }
            ],
            "trips": [
                125,
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
                        126
                    ]
                }
            ],
            "__typename": [
                121
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
                121
            ]
        },
        "RTTranslation": {
            "language": [
                121
            ],
            "text": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                121
            ],
            "schedule_relationship": [
                121
            ],
            "start_date": [
                13
            ],
            "start_time": [
                108
            ],
            "trip_id": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                121
            ],
            "label": [
                121
            ],
            "license_plate": [
                121
            ],
            "__typename": [
                121
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
                        121,
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
                121
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                121
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
                121
            ],
            "patterns": [
                106
            ],
            "route_attribute": [
                100
            ],
            "route_color": [
                121
            ],
            "route_desc": [
                121
            ],
            "route_id": [
                121
            ],
            "route_long_name": [
                121
            ],
            "route_short_name": [
                121
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
                121
            ],
            "route_type": [
                74
            ],
            "route_url": [
                121
            ],
            "search_rank": [
                121
            ],
            "stops": [
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
            "trips": [
                125,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        126
                    ]
                }
            ],
            "__typename": [
                121
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
                121
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
                121
            ],
            "feed_version_sha1": [
                121
            ],
            "license": [
                79
            ],
            "near": [
                91
            ],
            "onestop_id": [
                121
            ],
            "onestop_ids": [
                121
            ],
            "operator_onestop_id": [
                121
            ],
            "route_id": [
                121
            ],
            "route_type": [
                74
            ],
            "search": [
                121
            ],
            "serviced": [
                7
            ],
            "within": [
                92
            ],
            "__typename": [
                121
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
                121
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
                113
            ],
            "stop_trip_count": [
                74
            ],
            "__typename": [
                121
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
                113
            ],
            "stop_id": [
                74
            ],
            "__typename": [
                121
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
                121
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
                125,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                121
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "ServiceCoversFilter": {
            "end_date": [
                13
            ],
            "fetched_after": [
                124
            ],
            "fetched_before": [
                124
            ],
            "start_date": [
                13
            ],
            "__typename": [
                121
            ]
        },
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
                121
            ],
            "__typename": [
                121
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
                124
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                121
            ],
            "mode": [
                112
            ],
            "start_time": [
                124
            ],
            "to": [
                133
            ],
            "__typename": [
                121
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
                118,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        121,
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
                113,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "departures": [
                118,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        124
                    ],
                    "from": [
                        134
                    ],
                    "mode": [
                        112
                    ],
                    "to": [
                        134
                    ]
                }
            ],
            "external_reference": [
                114
            ],
            "feed_onestop_id": [
                121
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                121
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
                113,
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
                116,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "onestop_id": [
                121
            ],
            "parent": [
                113
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
                121
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
                121
            ],
            "stop_code": [
                121
            ],
            "stop_desc": [
                121
            ],
            "stop_id": [
                121
            ],
            "stop_name": [
                121
            ],
            "stop_times": [
                118,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "stop_timezone": [
                121
            ],
            "stop_url": [
                121
            ],
            "tts_stop_name": [
                121
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                121
            ],
            "__typename": [
                121
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
                113
            ],
            "target_feed_onestop_id": [
                121
            ],
            "target_stop_id": [
                121
            ],
            "__typename": [
                121
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
                121
            ],
            "feed_version_sha1": [
                121
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
                121
            ],
            "onestop_ids": [
                121
            ],
            "search": [
                121
            ],
            "served_by_onestop_ids": [
                121
            ],
            "serviced": [
                7
            ],
            "stop_code": [
                121
            ],
            "stop_id": [
                121
            ],
            "within": [
                92
            ],
            "__typename": [
                121
            ]
        },
        "StopObservation": {
            "agency_id": [
                121
            ],
            "from_stop_id": [
                121
            ],
            "observed_arrival_time": [
                108
            ],
            "observed_departure_time": [
                108
            ],
            "route_id": [
                121
            ],
            "schedule_relationship": [
                121
            ],
            "scheduled_arrival_time": [
                108
            ],
            "scheduled_departure_time": [
                108
            ],
            "source": [
                121
            ],
            "stop_sequence": [
                74
            ],
            "to_stop_id": [
                121
            ],
            "trip_id": [
                121
            ],
            "trip_start_date": [
                13
            ],
            "trip_start_time": [
                108
            ],
            "__typename": [
                121
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                74
            ],
            "source": [
                121
            ],
            "trip_start_date": [
                13
            ],
            "__typename": [
                121
            ]
        },
        "StopTime": {
            "arrival": [
                119
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
                119
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
                113
            ],
            "stop_headsign": [
                121
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                125
            ],
            "__typename": [
                121
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
                124
            ],
            "scheduled": [
                108
            ],
            "stop_timezone": [
                121
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                121
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
                121
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
                121
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
                121
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
                110
            ],
            "stop_pattern_id": [
                74
            ],
            "stop_times": [
                118,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        127
                    ]
                }
            ],
            "timestamp": [
                124
            ],
            "trip_headsign": [
                121
            ],
            "trip_id": [
                121
            ],
            "trip_short_name": [
                121
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                121
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                121
            ],
            "feed_version_sha1": [
                121
            ],
            "license": [
                79
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                121
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "TripStopTimeFilter": {
            "end": [
                108
            ],
            "start": [
                108
            ],
            "__typename": [
                121
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
                131
            ],
            "failure_reason": [
                121
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
                        121
                    ]
                }
            ],
            "sha1": [
                121
            ],
            "stops": [
                113,
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
                131
            ],
            "__typename": [
                121
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                121
            ],
            "error_type": [
                121
            ],
            "field": [
                121
            ],
            "filename": [
                121
            ],
            "message": [
                121
            ],
            "value": [
                121
            ],
            "__typename": [
                121
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                121
            ],
            "errors": [
                130
            ],
            "filename": [
                121
            ],
            "limit": [
                74
            ],
            "__typename": [
                121
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                121
            ],
            "current_status": [
                121
            ],
            "current_stop_sequence": [
                74
            ],
            "position": [
                90
            ],
            "stop_id": [
                113
            ],
            "timestamp": [
                124
            ],
            "vehicle": [
                97
            ],
            "__typename": [
                121
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
                121
            ],
            "__typename": [
                121
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
                121
            ],
            "__typename": [
                121
            ]
        }
    }
}