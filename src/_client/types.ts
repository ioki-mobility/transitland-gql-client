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
        122,
        123,
        124,
        125,
        129
    ],
    "types": {
        "Agency": {
            "agency_email": [
                122
            ],
            "agency_fare_url": [
                122
            ],
            "agency_id": [
                122
            ],
            "agency_lang": [
                122
            ],
            "agency_name": [
                122
            ],
            "agency_phone": [
                122
            ],
            "agency_timezone": [
                122
            ],
            "agency_url": [
                122
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
                        122,
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
                122
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                122
            ],
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "onestop_id": [
                122
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
                122
            ],
            "__typename": [
                122
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                122
            ],
            "adm0_name": [
                122
            ],
            "adm1_iso": [
                122
            ],
            "adm1_name": [
                122
            ],
            "agency_id": [
                122
            ],
            "agency_name": [
                122
            ],
            "city_name": [
                122
            ],
            "feed_onestop_id": [
                122
            ],
            "feed_version_sha1": [
                122
            ],
            "license": [
                79
            ],
            "near": [
                91
            ],
            "onestop_id": [
                122
            ],
            "search": [
                122
            ],
            "within": [
                92
            ],
            "__typename": [
                122
            ]
        },
        "AgencyPlace": {
            "adm0_iso": [
                122
            ],
            "adm0_name": [
                122
            ],
            "adm1_iso": [
                122
            ],
            "adm1_name": [
                122
            ],
            "city_name": [
                122
            ],
            "rank": [
                43
            ],
            "__typename": [
                122
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                43
            ],
            "__typename": [
                122
            ]
        },
        "Alert": {
            "active_period": [
                94
            ],
            "cause": [
                122
            ],
            "description_text": [
                95
            ],
            "effect": [
                122
            ],
            "header_text": [
                95
            ],
            "severity_level": [
                122
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
                122
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
                122
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
                122
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
                122
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
                122
            ],
            "geometry": [
                92
            ],
            "id": [
                74
            ],
            "layer_name": [
                122
            ],
            "name": [
                122
            ],
            "values": [
                12,
                {
                    "limit": [
                        74
                    ],
                    "table_names": [
                        122,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                122
            ]
        },
        "CensusTable": {
            "id": [
                74
            ],
            "table_group": [
                122
            ],
            "table_name": [
                122
            ],
            "table_title": [
                122
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                125
            ],
            "from": [
                135
            ],
            "mode": [
                112
            ],
            "to": [
                135
            ],
            "__typename": [
                122
            ]
        },
        "Directions": {
            "data_source": [
                122
            ],
            "destination": [
                134
            ],
            "distance": [
                16
            ],
            "duration": [
                18
            ],
            "end_time": [
                125
            ],
            "exception": [
                122
            ],
            "itineraries": [
                75
            ],
            "origin": [
                134
            ],
            "start_time": [
                125
            ],
            "success": [
                7
            ],
            "__typename": [
                122
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
                122
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
                122
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
                122
            ],
            "id": [
                74
            ],
            "languages": [
                122
            ],
            "license": [
                26
            ],
            "name": [
                122
            ],
            "onestop_id": [
                122
            ],
            "search_rank": [
                122
            ],
            "spec": [
                29
            ],
            "tags": [
                124
            ],
            "urls": [
                31
            ],
            "__typename": [
                122
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                122
            ],
            "param_name": [
                122
            ],
            "type": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                122
            ],
            "fetched_at": [
                125
            ],
            "id": [
                74
            ],
            "response_code": [
                74
            ],
            "response_sha1": [
                122
            ],
            "response_size": [
                74
            ],
            "success": [
                7
            ],
            "url": [
                122
            ],
            "url_type": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                122
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
                122
            ],
            "search": [
                122
            ],
            "source_url": [
                27
            ],
            "spec": [
                29
            ],
            "tags": [
                124
            ],
            "__typename": [
                122
            ]
        },
        "FeedInfo": {
            "default_lang": [
                122
            ],
            "feed_contact_email": [
                122
            ],
            "feed_contact_url": [
                122
            ],
            "feed_end_date": [
                13
            ],
            "feed_lang": [
                122
            ],
            "feed_publisher_name": [
                122
            ],
            "feed_publisher_url": [
                122
            ],
            "feed_start_date": [
                13
            ],
            "feed_version": [
                122
            ],
            "id": [
                74
            ],
            "__typename": [
                122
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                122
            ],
            "attribution_text": [
                122
            ],
            "commercial_use_allowed": [
                122
            ],
            "create_derived_product": [
                122
            ],
            "redistribution_allowed": [
                122
            ],
            "share_alike_optional": [
                122
            ],
            "spdx_identifier": [
                122
            ],
            "url": [
                122
            ],
            "use_without_attribution": [
                122
            ],
            "__typename": [
                122
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
                122
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                122
            ],
            "mds_provider": [
                122
            ],
            "realtime_alerts": [
                122
            ],
            "realtime_trip_updates": [
                122
            ],
            "realtime_vehicle_positions": [
                122
            ],
            "static_current": [
                122
            ],
            "static_historic": [
                122
            ],
            "static_planned": [
                122
            ],
            "__typename": [
                122
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
                122
            ],
            "description": [
                122
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
                125
            ],
            "file": [
                122
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
                122
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
                122
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
                126,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        127
                    ]
                }
            ],
            "updated_by": [
                122
            ],
            "url": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                122
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                32
            ],
            "fetch_error": [
                122
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                122
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                122
            ],
            "id": [
                74
            ],
            "name": [
                122
            ],
            "rows": [
                74
            ],
            "sha1": [
                122
            ],
            "size": [
                74
            ],
            "__typename": [
                122
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
                122
            ],
            "file": [
                122
            ],
            "import_status": [
                73
            ],
            "sha1": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                125
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                122
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
                125
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                122
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                122
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
                122
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
                122
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                122
            ],
            "name": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                122
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
                122
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
                122
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                91
            ],
            "__typename": [
                122
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                122
            ],
            "brand_image_url_dark": [
                122
            ],
            "brand_last_modified": [
                13
            ],
            "brand_terms_url": [
                122
            ],
            "color": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsDockRequest": {
            "near": [
                91
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                74
            ],
            "bike_id": [
                122
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
                123
            ],
            "vehicle_type": [
                70
            ],
            "__typename": [
                122
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                72
            ],
            "type": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                74
            ],
            "name": [
                122
            ],
            "rules": [
                53
            ],
            "start": [
                74
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                51
            ],
            "type": [
                122
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                122
            ],
            "store_uri": [
                122
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "GbfsRentalUris": {
            "android": [
                122
            ],
            "ios": [
                122
            ],
            "web": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsStationInformation": {
            "address": [
                122
            ],
            "capacity": [
                74
            ],
            "contact_phone": [
                122
            ],
            "cross_street": [
                122
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
                122
            ],
            "parking_hoop": [
                74
            ],
            "parking_type": [
                122
            ],
            "post_code": [
                122
            ],
            "region": [
                66
            ],
            "rental_methods": [
                123
            ],
            "short_name": [
                122
            ],
            "station_area": [
                72
            ],
            "station_id": [
                122
            ],
            "status": [
                60
            ],
            "__typename": [
                122
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
                122
            ],
            "vehicle_docks_available": [
                69
            ],
            "vehicle_types_available": [
                71
            ],
            "__typename": [
                122
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                122
            ],
            "description": [
                122
            ],
            "last_updated": [
                74
            ],
            "summary": [
                122
            ],
            "times": [
                45
            ],
            "type": [
                122
            ],
            "url": [
                122
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "GbfsSystemHour": {
            "days": [
                123
            ],
            "end_time": [
                122
            ],
            "start_time": [
                122
            ],
            "user_types": [
                123
            ],
            "__typename": [
                122
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                47
            ],
            "email": [
                122
            ],
            "feed_contact_email": [
                122
            ],
            "language": [
                122
            ],
            "license_url": [
                122
            ],
            "name": [
                122
            ],
            "operator": [
                122
            ],
            "phone_number": [
                122
            ],
            "privacy_last_updated": [
                13
            ],
            "privacy_url": [
                122
            ],
            "purchase_url": [
                122
            ],
            "rental_apps": [
                57
            ],
            "short_name": [
                122
            ],
            "start_date": [
                13
            ],
            "system_id": [
                122
            ],
            "terms_last_updated": [
                13
            ],
            "terms_url": [
                122
            ],
            "timezone": [
                122
            ],
            "url": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                122
            ],
            "description": [
                122
            ],
            "is_taxable": [
                6
            ],
            "name": [
                122
            ],
            "per_km_pricing": [
                55
            ],
            "per_min_pricing": [
                55
            ],
            "plan_id": [
                122
            ],
            "price": [
                43
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                122
            ],
            "region_id": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                122
            ],
            "version": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                13
            ],
            "icon_url": [
                122
            ],
            "icon_url_dark": [
                122
            ],
            "__typename": [
                122
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
                122
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
                122
            ],
            "country_code": [
                122
            ],
            "default_pricing_plan": [
                65
            ],
            "default_reserve_time": [
                74
            ],
            "eco_label": [
                122
            ],
            "eco_sticker": [
                122
            ],
            "form_factor": [
                122
            ],
            "gco_2_km": [
                74
            ],
            "make": [
                122
            ],
            "max_permitted_speed": [
                74
            ],
            "max_range_meters": [
                43
            ],
            "model": [
                122
            ],
            "name": [
                122
            ],
            "pricing_plans": [
                65
            ],
            "propulsion_type": [
                122
            ],
            "rated_power": [
                74
            ],
            "rental_uris": [
                58
            ],
            "return_constraint": [
                122
            ],
            "rider_capacity": [
                74
            ],
            "vehicle_accessories": [
                123
            ],
            "vehicle_assets": [
                68
            ],
            "vehicle_image": [
                122
            ],
            "vehicle_type_id": [
                122
            ],
            "wheel_count": [
                74
            ],
            "__typename": [
                122
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
                122
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
                125
            ],
            "from": [
                134
            ],
            "legs": [
                77
            ],
            "start_time": [
                125
            ],
            "to": [
                134
            ],
            "__typename": [
                122
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
                125
            ],
            "from": [
                134
            ],
            "geometry": [
                81
            ],
            "start_time": [
                125
            ],
            "steps": [
                111
            ],
            "to": [
                134
            ],
            "__typename": [
                122
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
                122
            ],
            "level_index": [
                43
            ],
            "level_name": [
                122
            ],
            "stops": [
                113
            ],
            "__typename": [
                122
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
                122
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
                122
            ],
            "generated": [
                7
            ],
            "id": [
                74
            ],
            "name": [
                122
            ],
            "onestop_id": [
                122
            ],
            "search_rank": [
                122
            ],
            "short_name": [
                122
            ],
            "tags": [
                124
            ],
            "website": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                122
            ],
            "adm0_name": [
                122
            ],
            "adm1_iso": [
                122
            ],
            "adm1_name": [
                122
            ],
            "agency_id": [
                122
            ],
            "city_name": [
                122
            ],
            "feed_onestop_id": [
                122
            ],
            "license": [
                79
            ],
            "merged": [
                7
            ],
            "onestop_id": [
                122
            ],
            "search": [
                122
            ],
            "tags": [
                124
            ],
            "__typename": [
                122
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
                122
            ],
            "pathway_mode": [
                74
            ],
            "reverse_signposted_as": [
                122
            ],
            "signposted_as": [
                122
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
                122
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                74
            ],
            "__typename": [
                122
            ]
        },
        "Place": {
            "adm0_name": [
                122
            ],
            "adm1_name": [
                122
            ],
            "city_name": [
                122
            ],
            "count": [
                74
            ],
            "operators": [
                83
            ],
            "__typename": [
                122
            ]
        },
        "PlaceAggregationLevel": {},
        "PlaceFilter": {
            "adm0_name": [
                122
            ],
            "adm1_name": [
                122
            ],
            "city_name": [
                122
            ],
            "min_rank": [
                43
            ],
            "__typename": [
                122
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
                122
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
                126,
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
                        127
                    ]
                }
            ],
            "__typename": [
                122
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
                122
            ]
        },
        "RTTranslation": {
            "language": [
                122
            ],
            "text": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                74
            ],
            "route_id": [
                122
            ],
            "schedule_relationship": [
                122
            ],
            "start_date": [
                13
            ],
            "start_time": [
                108
            ],
            "trip_id": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                122
            ],
            "label": [
                122
            ],
            "license_plate": [
                122
            ],
            "__typename": [
                122
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
                        122,
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
                122
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                122
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
                122
            ],
            "patterns": [
                106
            ],
            "route_attribute": [
                100
            ],
            "route_color": [
                122
            ],
            "route_desc": [
                122
            ],
            "route_id": [
                122
            ],
            "route_long_name": [
                122
            ],
            "route_short_name": [
                122
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
                122
            ],
            "route_type": [
                74
            ],
            "route_url": [
                122
            ],
            "search_rank": [
                122
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
                126,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        127
                    ]
                }
            ],
            "__typename": [
                122
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
                122
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
                122
            ],
            "feed_version_sha1": [
                122
            ],
            "license": [
                79
            ],
            "near": [
                91
            ],
            "onestop_id": [
                122
            ],
            "onestop_ids": [
                122
            ],
            "operator_onestop_id": [
                122
            ],
            "route_id": [
                122
            ],
            "route_type": [
                74
            ],
            "search": [
                122
            ],
            "serviced": [
                7
            ],
            "within": [
                92
            ],
            "__typename": [
                122
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
                122
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
                122
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
                122
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
                122
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
                126,
                {
                    "limit": [
                        74
                    ]
                }
            ],
            "__typename": [
                122
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "ServiceCoversFilter": {
            "end_date": [
                13
            ],
            "fetched_after": [
                125
            ],
            "fetched_before": [
                125
            ],
            "start_date": [
                13
            ],
            "__typename": [
                122
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
                122
            ],
            "__typename": [
                122
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
                125
            ],
            "geometry_offset": [
                74
            ],
            "instruction": [
                122
            ],
            "mode": [
                112
            ],
            "start_time": [
                125
            ],
            "to": [
                134
            ],
            "__typename": [
                122
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
                119,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        121
                    ]
                }
            ],
            "census_geographies": [
                10,
                {
                    "layer": [
                        122,
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
                119,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        121
                    ]
                }
            ],
            "directions": [
                15,
                {
                    "depart_at": [
                        125
                    ],
                    "from": [
                        135
                    ],
                    "mode": [
                        112
                    ],
                    "to": [
                        135
                    ]
                }
            ],
            "external_reference": [
                114
            ],
            "feed_onestop_id": [
                122
            ],
            "feed_version": [
                32
            ],
            "feed_version_sha1": [
                122
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
                122
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
            "place": [
                118
            ],
            "platform_code": [
                122
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
                122
            ],
            "stop_code": [
                122
            ],
            "stop_desc": [
                122
            ],
            "stop_id": [
                122
            ],
            "stop_name": [
                122
            ],
            "stop_times": [
                119,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        121
                    ]
                }
            ],
            "stop_timezone": [
                122
            ],
            "stop_url": [
                122
            ],
            "tts_stop_name": [
                122
            ],
            "wheelchair_boarding": [
                74
            ],
            "zone_id": [
                122
            ],
            "__typename": [
                122
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
                122
            ],
            "target_stop_id": [
                122
            ],
            "__typename": [
                122
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
                122
            ],
            "feed_version_sha1": [
                122
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
                122
            ],
            "onestop_ids": [
                122
            ],
            "search": [
                122
            ],
            "served_by_onestop_ids": [
                122
            ],
            "serviced": [
                7
            ],
            "stop_code": [
                122
            ],
            "stop_id": [
                122
            ],
            "within": [
                92
            ],
            "__typename": [
                122
            ]
        },
        "StopObservation": {
            "agency_id": [
                122
            ],
            "from_stop_id": [
                122
            ],
            "observed_arrival_time": [
                108
            ],
            "observed_departure_time": [
                108
            ],
            "route_id": [
                122
            ],
            "schedule_relationship": [
                122
            ],
            "scheduled_arrival_time": [
                108
            ],
            "scheduled_departure_time": [
                108
            ],
            "source": [
                122
            ],
            "stop_sequence": [
                74
            ],
            "to_stop_id": [
                122
            ],
            "trip_id": [
                122
            ],
            "trip_start_date": [
                13
            ],
            "trip_start_time": [
                108
            ],
            "__typename": [
                122
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                74
            ],
            "source": [
                122
            ],
            "trip_start_date": [
                13
            ],
            "__typename": [
                122
            ]
        },
        "StopPlace": {
            "adm0_iso": [
                122
            ],
            "adm0_name": [
                122
            ],
            "adm1_iso": [
                122
            ],
            "adm1_name": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "StopTime": {
            "arrival": [
                120
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
                120
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
                122
            ],
            "stop_sequence": [
                74
            ],
            "timepoint": [
                74
            ],
            "trip": [
                126
            ],
            "__typename": [
                122
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
                125
            ],
            "scheduled": [
                108
            ],
            "stop_timezone": [
                122
            ],
            "uncertainty": [
                74
            ],
            "__typename": [
                122
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
                122
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
                122
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
                122
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
                119,
                {
                    "limit": [
                        74
                    ],
                    "where": [
                        128
                    ]
                }
            ],
            "timestamp": [
                125
            ],
            "trip_headsign": [
                122
            ],
            "trip_id": [
                122
            ],
            "trip_short_name": [
                122
            ],
            "wheelchair_accessible": [
                74
            ],
            "__typename": [
                122
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                122
            ],
            "feed_version_sha1": [
                122
            ],
            "license": [
                79
            ],
            "route_ids": [
                74
            ],
            "route_onestop_ids": [
                122
            ],
            "service_date": [
                13
            ],
            "stop_pattern_id": [
                74
            ],
            "trip_id": [
                122
            ],
            "__typename": [
                122
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
                122
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
                132
            ],
            "failure_reason": [
                122
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
                        122
                    ]
                }
            ],
            "sha1": [
                122
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
                132
            ],
            "__typename": [
                122
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                122
            ],
            "error_type": [
                122
            ],
            "field": [
                122
            ],
            "filename": [
                122
            ],
            "message": [
                122
            ],
            "value": [
                122
            ],
            "__typename": [
                122
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                74
            ],
            "error_type": [
                122
            ],
            "errors": [
                131
            ],
            "filename": [
                122
            ],
            "limit": [
                74
            ],
            "__typename": [
                122
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                122
            ],
            "current_status": [
                122
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
                125
            ],
            "vehicle": [
                97
            ],
            "__typename": [
                122
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
                122
            ],
            "__typename": [
                122
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
                122
            ],
            "__typename": [
                122
            ]
        }
    }
}