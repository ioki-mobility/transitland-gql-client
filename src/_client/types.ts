export default {
    "scalars": [
        5,
        6,
        7,
        14,
        18,
        20,
        29,
        30,
        44,
        73,
        74,
        75,
        77,
        81,
        82,
        83,
        90,
        92,
        94,
        100,
        109,
        110,
        114,
        124,
        125,
        126,
        127,
        131
    ],
    "types": {
        "Agency": {
            "agency_email": [
                124
            ],
            "agency_fare_url": [
                124
            ],
            "agency_id": [
                124
            ],
            "agency_lang": [
                124
            ],
            "agency_name": [
                124
            ],
            "agency_phone": [
                124
            ],
            "agency_timezone": [
                124
            ],
            "agency_url": [
                124
            ],
            "alerts": [
                4,
                {
                    "active": [
                        7
                    ],
                    "limit": [
                        75
                    ]
                }
            ],
            "census_geographies": [
                11,
                {
                    "layer": [
                        124,
                        "String!"
                    ],
                    "limit": [
                        75
                    ],
                    "radius": [
                        44
                    ]
                }
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version": [
                33
            ],
            "feed_version_sha1": [
                124
            ],
            "geometry": [
                94
            ],
            "id": [
                75
            ],
            "onestop_id": [
                124
            ],
            "operator": [
                85
            ],
            "places": [
                2,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        3
                    ]
                }
            ],
            "routes": [
                101,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "search_rank": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                124
            ],
            "adm0_name": [
                124
            ],
            "adm1_iso": [
                124
            ],
            "adm1_name": [
                124
            ],
            "agency_id": [
                124
            ],
            "agency_name": [
                124
            ],
            "bbox": [
                8
            ],
            "city_name": [
                124
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version_sha1": [
                124
            ],
            "license": [
                80
            ],
            "near": [
                93
            ],
            "onestop_id": [
                124
            ],
            "search": [
                124
            ],
            "within": [
                94
            ],
            "__typename": [
                124
            ]
        },
        "AgencyPlace": {
            "adm0_iso": [
                124
            ],
            "adm0_name": [
                124
            ],
            "adm1_iso": [
                124
            ],
            "adm1_name": [
                124
            ],
            "city_name": [
                124
            ],
            "rank": [
                44
            ],
            "__typename": [
                124
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                44
            ],
            "__typename": [
                124
            ]
        },
        "Alert": {
            "active_period": [
                96
            ],
            "cause": [
                124
            ],
            "description_text": [
                97
            ],
            "effect": [
                124
            ],
            "header_text": [
                97
            ],
            "severity_level": [
                124
            ],
            "tts_description_text": [
                97
            ],
            "tts_header_text": [
                97
            ],
            "url": [
                97
            ],
            "__typename": [
                124
            ]
        },
        "Any": {},
        "Bool": {},
        "Boolean": {},
        "BoundingBox": {
            "max_lat": [
                44
            ],
            "max_lon": [
                44
            ],
            "min_lat": [
                44
            ],
            "min_lon": [
                44
            ],
            "__typename": [
                124
            ]
        },
        "Calendar": {
            "added_dates": [
                14,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "end_date": [
                14
            ],
            "friday": [
                75
            ],
            "id": [
                75
            ],
            "monday": [
                75
            ],
            "removed_dates": [
                14,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "saturday": [
                75
            ],
            "service_id": [
                124
            ],
            "start_date": [
                14
            ],
            "sunday": [
                75
            ],
            "thursday": [
                75
            ],
            "tuesday": [
                75
            ],
            "wednesday": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "CalendarDateFilter": {
            "date": [
                14
            ],
            "exception_type": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "CensusGeography": {
            "aland": [
                44
            ],
            "awater": [
                44
            ],
            "geoid": [
                124
            ],
            "geometry": [
                94
            ],
            "id": [
                75
            ],
            "layer_name": [
                124
            ],
            "name": [
                124
            ],
            "values": [
                13,
                {
                    "limit": [
                        75
                    ],
                    "table_names": [
                        124,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                124
            ]
        },
        "CensusTable": {
            "id": [
                75
            ],
            "table_group": [
                124
            ],
            "table_name": [
                124
            ],
            "table_title": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "CensusValue": {
            "table": [
                12
            ],
            "values": [
                5
            ],
            "__typename": [
                124
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                127
            ],
            "from": [
                138
            ],
            "mode": [
                114
            ],
            "to": [
                138
            ],
            "__typename": [
                124
            ]
        },
        "Directions": {
            "data_source": [
                124
            ],
            "destination": [
                137
            ],
            "distance": [
                17
            ],
            "duration": [
                19
            ],
            "end_time": [
                127
            ],
            "exception": [
                124
            ],
            "itineraries": [
                76
            ],
            "origin": [
                137
            ],
            "start_time": [
                127
            ],
            "success": [
                7
            ],
            "__typename": [
                124
            ]
        },
        "Distance": {
            "distance": [
                44
            ],
            "units": [
                18
            ],
            "__typename": [
                124
            ]
        },
        "DistanceUnit": {},
        "Duration": {
            "duration": [
                44
            ],
            "units": [
                20
            ],
            "__typename": [
                124
            ]
        },
        "DurationUnit": {},
        "Feed": {
            "associated_operators": [
                85
            ],
            "authorization": [
                22
            ],
            "feed_fetches": [
                23,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        24
                    ]
                }
            ],
            "feed_state": [
                31
            ],
            "feed_versions": [
                33,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        37
                    ]
                }
            ],
            "file": [
                124
            ],
            "id": [
                75
            ],
            "languages": [
                124
            ],
            "license": [
                27
            ],
            "name": [
                124
            ],
            "onestop_id": [
                124
            ],
            "search_rank": [
                124
            ],
            "spec": [
                30
            ],
            "tags": [
                126
            ],
            "urls": [
                32
            ],
            "__typename": [
                124
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                124
            ],
            "param_name": [
                124
            ],
            "type": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                124
            ],
            "fetched_at": [
                127
            ],
            "id": [
                75
            ],
            "response_code": [
                75
            ],
            "response_sha1": [
                124
            ],
            "response_size": [
                75
            ],
            "success": [
                7
            ],
            "url": [
                124
            ],
            "url_type": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                124
            ]
        },
        "FeedFilter": {
            "bbox": [
                8
            ],
            "fetch_error": [
                7
            ],
            "import_status": [
                74
            ],
            "license": [
                80
            ],
            "near": [
                93
            ],
            "onestop_id": [
                124
            ],
            "search": [
                124
            ],
            "source_url": [
                28
            ],
            "spec": [
                30
            ],
            "tags": [
                126
            ],
            "within": [
                94
            ],
            "__typename": [
                124
            ]
        },
        "FeedInfo": {
            "default_lang": [
                124
            ],
            "feed_contact_email": [
                124
            ],
            "feed_contact_url": [
                124
            ],
            "feed_end_date": [
                14
            ],
            "feed_lang": [
                124
            ],
            "feed_publisher_name": [
                124
            ],
            "feed_publisher_url": [
                124
            ],
            "feed_start_date": [
                14
            ],
            "feed_version": [
                124
            ],
            "id": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                124
            ],
            "attribution_text": [
                124
            ],
            "commercial_use_allowed": [
                124
            ],
            "create_derived_product": [
                124
            ],
            "redistribution_allowed": [
                124
            ],
            "share_alike_optional": [
                124
            ],
            "spdx_identifier": [
                124
            ],
            "url": [
                124
            ],
            "use_without_attribution": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedSourceUrl": {
            "case_sensitive": [
                7
            ],
            "type": [
                29
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedSourceUrlTypes": {},
        "FeedSpecTypes": {},
        "FeedState": {
            "feed_version": [
                33
            ],
            "id": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                124
            ],
            "mds_provider": [
                124
            ],
            "realtime_alerts": [
                124
            ],
            "realtime_trip_updates": [
                124
            ],
            "realtime_vehicle_positions": [
                124
            ],
            "static_current": [
                124
            ],
            "static_historic": [
                124
            ],
            "static_planned": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersion": {
            "agencies": [
                0,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "created_by": [
                124
            ],
            "description": [
                124
            ],
            "earliest_calendar_date": [
                14
            ],
            "feed": [
                21
            ],
            "feed_infos": [
                26,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "feed_version_gtfs_import": [
                38
            ],
            "fetched_at": [
                127
            ],
            "file": [
                124
            ],
            "files": [
                36,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "geometry": [
                94
            ],
            "id": [
                75
            ],
            "latest_calendar_date": [
                14
            ],
            "name": [
                124
            ],
            "routes": [
                101,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "service_levels": [
                40,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "sha1": [
                124
            ],
            "stops": [
                115,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "trips": [
                128,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        129
                    ]
                }
            ],
            "updated_by": [
                124
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                33
            ],
            "fetch_error": [
                124
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                124
            ],
            "id": [
                75
            ],
            "name": [
                124
            ],
            "rows": [
                75
            ],
            "sha1": [
                124
            ],
            "size": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionFilter": {
            "bbox": [
                8
            ],
            "covers": [
                111
            ],
            "feed_ids": [
                75
            ],
            "feed_onestop_id": [
                124
            ],
            "file": [
                124
            ],
            "import_status": [
                74
            ],
            "near": [
                93
            ],
            "sha1": [
                124
            ],
            "within": [
                94
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                127
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                124
            ],
            "id": [
                75
            ],
            "in_progress": [
                7
            ],
            "interpolated_stop_time_count": [
                75
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
                127
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionServiceLevel": {
            "end_date": [
                14
            ],
            "friday": [
                75
            ],
            "id": [
                75
            ],
            "monday": [
                75
            ],
            "saturday": [
                75
            ],
            "start_date": [
                14
            ],
            "sunday": [
                75
            ],
            "thursday": [
                75
            ],
            "tuesday": [
                75
            ],
            "wednesday": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionServiceLevelFilter": {
            "end_date": [
                14
            ],
            "start_date": [
                14
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                124
            ],
            "name": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                124
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                110
            ],
            "exact_times": [
                75
            ],
            "headway_secs": [
                75
            ],
            "id": [
                75
            ],
            "start_time": [
                110
            ],
            "__typename": [
                124
            ]
        },
        "GbfsAlertTime": {
            "end": [
                75
            ],
            "start": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                93
            ],
            "__typename": [
                124
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                124
            ],
            "brand_image_url_dark": [
                124
            ],
            "brand_last_modified": [
                14
            ],
            "brand_terms_url": [
                124
            ],
            "color": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsDockRequest": {
            "near": [
                93
            ],
            "__typename": [
                124
            ]
        },
        "GbfsFeed": {
            "alerts": [
                62
            ],
            "calendars": [
                63
            ],
            "rental_hours": [
                64
            ],
            "station_information": [
                60
            ],
            "system_information": [
                65
            ],
            "__typename": [
                124
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                75
            ],
            "bike_id": [
                124
            ],
            "current_fuel_percent": [
                44
            ],
            "current_range_meters": [
                44
            ],
            "feed": [
                50
            ],
            "home_station": [
                60
            ],
            "is_disabled": [
                6
            ],
            "is_reserved": [
                6
            ],
            "last_reported": [
                75
            ],
            "lat": [
                44
            ],
            "lon": [
                44
            ],
            "pricing_plan": [
                66
            ],
            "rental_uris": [
                59
            ],
            "station": [
                60
            ],
            "vehicle_equipment": [
                125
            ],
            "vehicle_type": [
                71
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                73
            ],
            "type": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                75
            ],
            "name": [
                124
            ],
            "rules": [
                54
            ],
            "start": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceRule": {
            "maximum_speed_kph": [
                75
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
                71
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                52
            ],
            "type": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsPlanPrice": {
            "end": [
                75
            ],
            "interval": [
                75
            ],
            "rate": [
                44
            ],
            "start": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                124
            ],
            "store_uri": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsRentalApps": {
            "android": [
                57
            ],
            "ios": [
                57
            ],
            "__typename": [
                124
            ]
        },
        "GbfsRentalUris": {
            "android": [
                124
            ],
            "ios": [
                124
            ],
            "web": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsStationInformation": {
            "address": [
                124
            ],
            "capacity": [
                75
            ],
            "contact_phone": [
                124
            ],
            "cross_street": [
                124
            ],
            "feed": [
                50
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
                44
            ],
            "lon": [
                44
            ],
            "name": [
                124
            ],
            "parking_hoop": [
                75
            ],
            "parking_type": [
                124
            ],
            "post_code": [
                124
            ],
            "region": [
                67
            ],
            "rental_methods": [
                125
            ],
            "short_name": [
                124
            ],
            "station_area": [
                73
            ],
            "station_id": [
                124
            ],
            "status": [
                61
            ],
            "__typename": [
                124
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
                75
            ],
            "num_bikes_available": [
                75
            ],
            "num_bikes_disabled": [
                75
            ],
            "num_docks_available": [
                75
            ],
            "num_docks_disabled": [
                75
            ],
            "station_id": [
                124
            ],
            "vehicle_docks_available": [
                70
            ],
            "vehicle_types_available": [
                72
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                124
            ],
            "description": [
                124
            ],
            "last_updated": [
                75
            ],
            "summary": [
                124
            ],
            "times": [
                46
            ],
            "type": [
                124
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemCalendar": {
            "end_day": [
                75
            ],
            "end_month": [
                75
            ],
            "end_year": [
                75
            ],
            "start_day": [
                75
            ],
            "start_month": [
                75
            ],
            "start_year": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemHour": {
            "days": [
                125
            ],
            "end_time": [
                124
            ],
            "start_time": [
                124
            ],
            "user_types": [
                125
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                48
            ],
            "email": [
                124
            ],
            "feed_contact_email": [
                124
            ],
            "language": [
                124
            ],
            "license_url": [
                124
            ],
            "name": [
                124
            ],
            "operator": [
                124
            ],
            "phone_number": [
                124
            ],
            "privacy_last_updated": [
                14
            ],
            "privacy_url": [
                124
            ],
            "purchase_url": [
                124
            ],
            "rental_apps": [
                58
            ],
            "short_name": [
                124
            ],
            "start_date": [
                14
            ],
            "system_id": [
                124
            ],
            "terms_last_updated": [
                14
            ],
            "terms_url": [
                124
            ],
            "timezone": [
                124
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                124
            ],
            "description": [
                124
            ],
            "is_taxable": [
                6
            ],
            "name": [
                124
            ],
            "per_km_pricing": [
                56
            ],
            "per_min_pricing": [
                56
            ],
            "plan_id": [
                124
            ],
            "price": [
                44
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                124
            ],
            "region_id": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                124
            ],
            "version": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                14
            ],
            "icon_url": [
                124
            ],
            "icon_url_dark": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "GbfsVehicleDockAvailable": {
            "count": [
                75
            ],
            "vehicle_types": [
                71
            ],
            "__typename": [
                124
            ]
        },
        "GbfsVehicleType": {
            "cargo_load_capacity": [
                75
            ],
            "cargo_volume_capacity": [
                75
            ],
            "color": [
                124
            ],
            "country_code": [
                124
            ],
            "default_pricing_plan": [
                66
            ],
            "default_reserve_time": [
                75
            ],
            "eco_label": [
                124
            ],
            "eco_sticker": [
                124
            ],
            "form_factor": [
                124
            ],
            "gco_2_km": [
                75
            ],
            "make": [
                124
            ],
            "max_permitted_speed": [
                75
            ],
            "max_range_meters": [
                44
            ],
            "model": [
                124
            ],
            "name": [
                124
            ],
            "pricing_plans": [
                66
            ],
            "propulsion_type": [
                124
            ],
            "rated_power": [
                75
            ],
            "rental_uris": [
                59
            ],
            "return_constraint": [
                124
            ],
            "rider_capacity": [
                75
            ],
            "vehicle_accessories": [
                125
            ],
            "vehicle_assets": [
                69
            ],
            "vehicle_image": [
                124
            ],
            "vehicle_type_id": [
                124
            ],
            "wheel_count": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "GbfsVehicleTypeAvailable": {
            "count": [
                75
            ],
            "num_bikes_disabled": [
                75
            ],
            "num_docks_available": [
                75
            ],
            "vehicle_type": [
                71
            ],
            "__typename": [
                124
            ]
        },
        "Geometry": {},
        "ImportStatus": {},
        "Int": {},
        "Itinerary": {
            "distance": [
                17
            ],
            "duration": [
                19
            ],
            "end_time": [
                127
            ],
            "from": [
                137
            ],
            "legs": [
                78
            ],
            "start_time": [
                127
            ],
            "to": [
                137
            ],
            "__typename": [
                124
            ]
        },
        "Key": {},
        "Leg": {
            "distance": [
                17
            ],
            "duration": [
                19
            ],
            "end_time": [
                127
            ],
            "from": [
                137
            ],
            "geometry": [
                82
            ],
            "start_time": [
                127
            ],
            "steps": [
                113
            ],
            "to": [
                137
            ],
            "__typename": [
                124
            ]
        },
        "Level": {
            "geometry": [
                94
            ],
            "id": [
                75
            ],
            "level_id": [
                124
            ],
            "level_index": [
                44
            ],
            "level_name": [
                124
            ],
            "stops": [
                115
            ],
            "__typename": [
                124
            ]
        },
        "LicenseFilter": {
            "commercial_use_allowed": [
                81
            ],
            "create_derived_product": [
                81
            ],
            "redistribution_allowed": [
                81
            ],
            "share_alike_optional": [
                81
            ],
            "use_without_attribution": [
                81
            ],
            "__typename": [
                124
            ]
        },
        "LicenseValue": {},
        "LineString": {},
        "Map": {},
        "Me": {
            "email": [
                124
            ],
            "external_data": [
                83
            ],
            "id": [
                124
            ],
            "name": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "Operator": {
            "agencies": [
                0
            ],
            "feeds": [
                21,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        25
                    ]
                }
            ],
            "file": [
                124
            ],
            "generated": [
                7
            ],
            "id": [
                75
            ],
            "name": [
                124
            ],
            "onestop_id": [
                124
            ],
            "search_rank": [
                124
            ],
            "short_name": [
                124
            ],
            "tags": [
                126
            ],
            "website": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                124
            ],
            "adm0_name": [
                124
            ],
            "adm1_iso": [
                124
            ],
            "adm1_name": [
                124
            ],
            "agency_id": [
                124
            ],
            "bbox": [
                8
            ],
            "city_name": [
                124
            ],
            "feed_onestop_id": [
                124
            ],
            "license": [
                80
            ],
            "merged": [
                7
            ],
            "near": [
                93
            ],
            "onestop_id": [
                124
            ],
            "search": [
                124
            ],
            "tags": [
                126
            ],
            "within": [
                94
            ],
            "__typename": [
                124
            ]
        },
        "Pathway": {
            "from_stop": [
                115
            ],
            "id": [
                75
            ],
            "is_bidirectional": [
                75
            ],
            "length": [
                44
            ],
            "max_slope": [
                44
            ],
            "min_width": [
                44
            ],
            "pathway_id": [
                124
            ],
            "pathway_mode": [
                75
            ],
            "reverse_signposted_as": [
                124
            ],
            "signposted_as": [
                124
            ],
            "stair_count": [
                75
            ],
            "to_stop": [
                115
            ],
            "traversal_time": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "Place": {
            "adm0_name": [
                124
            ],
            "adm1_name": [
                124
            ],
            "city_name": [
                124
            ],
            "count": [
                75
            ],
            "operators": [
                85
            ],
            "__typename": [
                124
            ]
        },
        "PlaceAggregationLevel": {},
        "PlaceFilter": {
            "adm0_name": [
                124
            ],
            "adm1_name": [
                124
            ],
            "city_name": [
                124
            ],
            "min_rank": [
                44
            ],
            "__typename": [
                124
            ]
        },
        "Point": {},
        "PointRadius": {
            "lat": [
                44
            ],
            "lon": [
                44
            ],
            "radius": [
                44
            ],
            "__typename": [
                124
            ]
        },
        "Polygon": {},
        "Query": {
            "agencies": [
                0,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "bikes": [
                51,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        47
                    ]
                }
            ],
            "directions": [
                16,
                {
                    "where": [
                        15,
                        "DirectionRequest!"
                    ]
                }
            ],
            "docks": [
                60,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        49
                    ]
                }
            ],
            "feed_versions": [
                33,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        37
                    ]
                }
            ],
            "feeds": [
                21,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        25
                    ]
                }
            ],
            "me": [
                84
            ],
            "operators": [
                85,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "places": [
                89,
                {
                    "after": [
                        75
                    ],
                    "level": [
                        90
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        91
                    ]
                }
            ],
            "routes": [
                101,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "stops": [
                115,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "trips": [
                128,
                {
                    "after": [
                        75
                    ],
                    "ids": [
                        75,
                        "[Int!]"
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        129
                    ]
                }
            ],
            "__typename": [
                124
            ]
        },
        "RTTimeRange": {
            "end": [
                75
            ],
            "start": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "RTTranslation": {
            "language": [
                124
            ],
            "text": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                75
            ],
            "route_id": [
                124
            ],
            "schedule_relationship": [
                124
            ],
            "start_date": [
                14
            ],
            "start_time": [
                110
            ],
            "trip_id": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                124
            ],
            "label": [
                124
            ],
            "license_plate": [
                124
            ],
            "__typename": [
                124
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
                        75
                    ]
                }
            ],
            "census_geographies": [
                11,
                {
                    "layer": [
                        124,
                        "String!"
                    ],
                    "limit": [
                        75
                    ],
                    "radius": [
                        44
                    ]
                }
            ],
            "continuous_drop_off": [
                75
            ],
            "continuous_pickup": [
                75
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version": [
                33
            ],
            "feed_version_sha1": [
                124
            ],
            "geometries": [
                104,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "geometry": [
                73
            ],
            "headways": [
                105,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "id": [
                75
            ],
            "onestop_id": [
                124
            ],
            "patterns": [
                108
            ],
            "route_attribute": [
                102
            ],
            "route_color": [
                124
            ],
            "route_desc": [
                124
            ],
            "route_id": [
                124
            ],
            "route_long_name": [
                124
            ],
            "route_short_name": [
                124
            ],
            "route_sort_order": [
                75
            ],
            "route_stop_buffer": [
                107,
                {
                    "radius": [
                        44
                    ]
                }
            ],
            "route_stops": [
                106,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "route_text_color": [
                124
            ],
            "route_type": [
                75
            ],
            "route_url": [
                124
            ],
            "search_rank": [
                124
            ],
            "stops": [
                115,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "trips": [
                128,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        129
                    ]
                }
            ],
            "__typename": [
                124
            ]
        },
        "RouteAttribute": {
            "category": [
                75
            ],
            "running_way": [
                75
            ],
            "subcategory": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "RouteFilter": {
            "agency_ids": [
                75
            ],
            "allow_previous_onestop_ids": [
                7
            ],
            "bbox": [
                8
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version_sha1": [
                124
            ],
            "license": [
                80
            ],
            "near": [
                93
            ],
            "onestop_id": [
                124
            ],
            "onestop_ids": [
                124
            ],
            "operator_onestop_id": [
                124
            ],
            "route_id": [
                124
            ],
            "route_type": [
                75
            ],
            "search": [
                124
            ],
            "serviced": [
                7
            ],
            "within": [
                94
            ],
            "__typename": [
                124
            ]
        },
        "RouteGeometry": {
            "combined_geometry": [
                73
            ],
            "first_point_max_distance": [
                44
            ],
            "generated": [
                7
            ],
            "geometry": [
                82
            ],
            "length": [
                44
            ],
            "max_segment_length": [
                44
            ],
            "__typename": [
                124
            ]
        },
        "RouteHeadway": {
            "departures": [
                110
            ],
            "direction_id": [
                75
            ],
            "dow_category": [
                75
            ],
            "headway_secs": [
                75
            ],
            "service_date": [
                14
            ],
            "stop": [
                115
            ],
            "stop_trip_count": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "RouteStop": {
            "agency": [
                0
            ],
            "agency_id": [
                75
            ],
            "id": [
                75
            ],
            "route": [
                101
            ],
            "route_id": [
                75
            ],
            "stop": [
                115
            ],
            "stop_id": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                73
            ],
            "stop_convexhull": [
                94
            ],
            "stop_points": [
                73
            ],
            "__typename": [
                124
            ]
        },
        "RouteStopPattern": {
            "count": [
                75
            ],
            "direction_id": [
                75
            ],
            "stop_pattern_id": [
                75
            ],
            "trips": [
                128,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "__typename": [
                124
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "ServiceCoversFilter": {
            "end_date": [
                14
            ],
            "fetched_after": [
                127
            ],
            "fetched_before": [
                127
            ],
            "start_date": [
                14
            ],
            "__typename": [
                124
            ]
        },
        "Shape": {
            "generated": [
                7
            ],
            "geometry": [
                82
            ],
            "id": [
                75
            ],
            "shape_id": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "Step": {
            "distance": [
                17
            ],
            "duration": [
                19
            ],
            "end_time": [
                127
            ],
            "geometry_offset": [
                75
            ],
            "instruction": [
                124
            ],
            "mode": [
                114
            ],
            "start_time": [
                127
            ],
            "to": [
                137
            ],
            "__typename": [
                124
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
                        75
                    ]
                }
            ],
            "arrivals": [
                121,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "census_geographies": [
                11,
                {
                    "layer": [
                        124,
                        "String!"
                    ],
                    "limit": [
                        75
                    ],
                    "radius": [
                        44
                    ]
                }
            ],
            "children": [
                115,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "departures": [
                121,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "directions": [
                16,
                {
                    "depart_at": [
                        127
                    ],
                    "from": [
                        138
                    ],
                    "mode": [
                        114
                    ],
                    "to": [
                        138
                    ]
                }
            ],
            "external_reference": [
                116
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version": [
                33
            ],
            "feed_version_sha1": [
                124
            ],
            "geometry": [
                92
            ],
            "id": [
                75
            ],
            "level": [
                79
            ],
            "location_type": [
                75
            ],
            "nearby_stops": [
                115,
                {
                    "limit": [
                        75
                    ],
                    "radius": [
                        44
                    ]
                }
            ],
            "observations": [
                118,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        119
                    ]
                }
            ],
            "onestop_id": [
                124
            ],
            "parent": [
                115
            ],
            "pathways_from_stop": [
                87,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "pathways_to_stop": [
                87,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "place": [
                120
            ],
            "platform_code": [
                124
            ],
            "route_stops": [
                106,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "search_rank": [
                124
            ],
            "stop_code": [
                124
            ],
            "stop_desc": [
                124
            ],
            "stop_id": [
                124
            ],
            "stop_name": [
                124
            ],
            "stop_times": [
                121,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "stop_timezone": [
                124
            ],
            "stop_url": [
                124
            ],
            "tts_stop_name": [
                124
            ],
            "wheelchair_boarding": [
                75
            ],
            "zone_id": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "StopExternalReference": {
            "id": [
                75
            ],
            "inactive": [
                7
            ],
            "target_active_stop": [
                115
            ],
            "target_feed_onestop_id": [
                124
            ],
            "target_stop_id": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "StopFilter": {
            "agency_ids": [
                75
            ],
            "allow_previous_onestop_ids": [
                7
            ],
            "bbox": [
                8
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version_sha1": [
                124
            ],
            "license": [
                80
            ],
            "location_type": [
                75
            ],
            "near": [
                93
            ],
            "onestop_id": [
                124
            ],
            "onestop_ids": [
                124
            ],
            "search": [
                124
            ],
            "served_by_onestop_ids": [
                124
            ],
            "served_by_route_type": [
                75
            ],
            "serviced": [
                7
            ],
            "stop_code": [
                124
            ],
            "stop_id": [
                124
            ],
            "within": [
                94
            ],
            "__typename": [
                124
            ]
        },
        "StopObservation": {
            "agency_id": [
                124
            ],
            "from_stop_id": [
                124
            ],
            "observed_arrival_time": [
                110
            ],
            "observed_departure_time": [
                110
            ],
            "route_id": [
                124
            ],
            "schedule_relationship": [
                124
            ],
            "scheduled_arrival_time": [
                110
            ],
            "scheduled_departure_time": [
                110
            ],
            "source": [
                124
            ],
            "stop_sequence": [
                75
            ],
            "to_stop_id": [
                124
            ],
            "trip_id": [
                124
            ],
            "trip_start_date": [
                14
            ],
            "trip_start_time": [
                110
            ],
            "__typename": [
                124
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                75
            ],
            "source": [
                124
            ],
            "trip_start_date": [
                14
            ],
            "__typename": [
                124
            ]
        },
        "StopPlace": {
            "adm0_iso": [
                124
            ],
            "adm0_name": [
                124
            ],
            "adm1_iso": [
                124
            ],
            "adm1_name": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "StopTime": {
            "arrival": [
                122
            ],
            "arrival_time": [
                110
            ],
            "continuous_drop_off": [
                75
            ],
            "continuous_pickup": [
                75
            ],
            "departure": [
                122
            ],
            "departure_time": [
                110
            ],
            "drop_off_type": [
                75
            ],
            "interpolated": [
                75
            ],
            "pickup_type": [
                75
            ],
            "service_date": [
                14
            ],
            "shape_dist_traveled": [
                44
            ],
            "stop": [
                115
            ],
            "stop_headsign": [
                124
            ],
            "stop_sequence": [
                75
            ],
            "timepoint": [
                75
            ],
            "trip": [
                128
            ],
            "__typename": [
                124
            ]
        },
        "StopTimeEvent": {
            "delay": [
                75
            ],
            "estimated": [
                110
            ],
            "estimated_utc": [
                127
            ],
            "scheduled": [
                110
            ],
            "stop_timezone": [
                124
            ],
            "uncertainty": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                110
            ],
            "end_time": [
                75
            ],
            "exclude_first": [
                7
            ],
            "exclude_last": [
                7
            ],
            "next": [
                75
            ],
            "route_onestop_ids": [
                124
            ],
            "service_date": [
                14
            ],
            "start": [
                110
            ],
            "start_time": [
                75
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                124
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
                        75
                    ]
                }
            ],
            "bikes_allowed": [
                75
            ],
            "block_id": [
                124
            ],
            "calendar": [
                9
            ],
            "direction_id": [
                75
            ],
            "feed_version": [
                33
            ],
            "frequencies": [
                45,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "id": [
                75
            ],
            "route": [
                101
            ],
            "schedule_relationship": [
                109
            ],
            "shape": [
                112
            ],
            "stop_pattern_id": [
                75
            ],
            "stop_times": [
                121,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "timestamp": [
                127
            ],
            "trip_headsign": [
                124
            ],
            "trip_id": [
                124
            ],
            "trip_short_name": [
                124
            ],
            "wheelchair_accessible": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                124
            ],
            "feed_version_sha1": [
                124
            ],
            "license": [
                80
            ],
            "route_ids": [
                75
            ],
            "route_onestop_ids": [
                124
            ],
            "service_date": [
                14
            ],
            "stop_pattern_id": [
                75
            ],
            "trip_id": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "TripStopTimeFilter": {
            "end": [
                110
            ],
            "start": [
                110
            ],
            "__typename": [
                124
            ]
        },
        "Upload": {},
        "ValidationRealtimeResult": {
            "json": [
                83
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "ValidationResult": {
            "agencies": [
                0,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "earliest_calendar_date": [
                14
            ],
            "errors": [
                135
            ],
            "failure_reason": [
                124
            ],
            "feed_infos": [
                26,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "files": [
                36
            ],
            "latest_calendar_date": [
                14
            ],
            "realtime": [
                132
            ],
            "routes": [
                101,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "service_levels": [
                40,
                {
                    "limit": [
                        75
                    ],
                    "route_id": [
                        124
                    ]
                }
            ],
            "sha1": [
                124
            ],
            "stops": [
                115,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "success": [
                7
            ],
            "warnings": [
                135
            ],
            "__typename": [
                124
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                124
            ],
            "error_type": [
                124
            ],
            "field": [
                124
            ],
            "filename": [
                124
            ],
            "message": [
                124
            ],
            "value": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                75
            ],
            "error_type": [
                124
            ],
            "errors": [
                134
            ],
            "filename": [
                124
            ],
            "limit": [
                75
            ],
            "__typename": [
                124
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                124
            ],
            "current_status": [
                124
            ],
            "current_stop_sequence": [
                75
            ],
            "position": [
                92
            ],
            "stop_id": [
                115
            ],
            "timestamp": [
                127
            ],
            "vehicle": [
                99
            ],
            "__typename": [
                124
            ]
        },
        "Waypoint": {
            "lat": [
                44
            ],
            "lon": [
                44
            ],
            "name": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "WaypointInput": {
            "lat": [
                44
            ],
            "lon": [
                44
            ],
            "name": [
                124
            ],
            "__typename": [
                124
            ]
        }
    }
}