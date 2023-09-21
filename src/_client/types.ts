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
        89,
        91,
        93,
        99,
        108,
        109,
        113,
        123,
        124,
        125,
        126,
        130
    ],
    "types": {
        "Agency": {
            "agency_email": [
                123
            ],
            "agency_fare_url": [
                123
            ],
            "agency_id": [
                123
            ],
            "agency_lang": [
                123
            ],
            "agency_name": [
                123
            ],
            "agency_phone": [
                123
            ],
            "agency_timezone": [
                123
            ],
            "agency_url": [
                123
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
                        123,
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
                123
            ],
            "feed_version": [
                33
            ],
            "feed_version_sha1": [
                123
            ],
            "geometry": [
                93
            ],
            "id": [
                75
            ],
            "onestop_id": [
                123
            ],
            "operator": [
                84
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
                100,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        102
                    ]
                }
            ],
            "search_rank": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                123
            ],
            "adm0_name": [
                123
            ],
            "adm1_iso": [
                123
            ],
            "adm1_name": [
                123
            ],
            "agency_id": [
                123
            ],
            "agency_name": [
                123
            ],
            "bbox": [
                8
            ],
            "city_name": [
                123
            ],
            "feed_onestop_id": [
                123
            ],
            "feed_version_sha1": [
                123
            ],
            "license": [
                80
            ],
            "near": [
                92
            ],
            "onestop_id": [
                123
            ],
            "search": [
                123
            ],
            "within": [
                93
            ],
            "__typename": [
                123
            ]
        },
        "AgencyPlace": {
            "adm0_iso": [
                123
            ],
            "adm0_name": [
                123
            ],
            "adm1_iso": [
                123
            ],
            "adm1_name": [
                123
            ],
            "city_name": [
                123
            ],
            "rank": [
                44
            ],
            "__typename": [
                123
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                44
            ],
            "__typename": [
                123
            ]
        },
        "Alert": {
            "active_period": [
                95
            ],
            "cause": [
                123
            ],
            "description_text": [
                96
            ],
            "effect": [
                123
            ],
            "header_text": [
                96
            ],
            "severity_level": [
                123
            ],
            "tts_description_text": [
                96
            ],
            "tts_header_text": [
                96
            ],
            "url": [
                96
            ],
            "__typename": [
                123
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
                123
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
                123
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
                123
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
                123
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
                123
            ],
            "geometry": [
                93
            ],
            "id": [
                75
            ],
            "layer_name": [
                123
            ],
            "name": [
                123
            ],
            "values": [
                13,
                {
                    "limit": [
                        75
                    ],
                    "table_names": [
                        123,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "CensusTable": {
            "id": [
                75
            ],
            "table_group": [
                123
            ],
            "table_name": [
                123
            ],
            "table_title": [
                123
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                126
            ],
            "from": [
                136
            ],
            "mode": [
                113
            ],
            "to": [
                136
            ],
            "__typename": [
                123
            ]
        },
        "Directions": {
            "data_source": [
                123
            ],
            "destination": [
                135
            ],
            "distance": [
                17
            ],
            "duration": [
                19
            ],
            "end_time": [
                126
            ],
            "exception": [
                123
            ],
            "itineraries": [
                76
            ],
            "origin": [
                135
            ],
            "start_time": [
                126
            ],
            "success": [
                7
            ],
            "__typename": [
                123
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
                123
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
                123
            ]
        },
        "DurationUnit": {},
        "Feed": {
            "associated_operators": [
                84
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
                123
            ],
            "id": [
                75
            ],
            "languages": [
                123
            ],
            "license": [
                27
            ],
            "name": [
                123
            ],
            "onestop_id": [
                123
            ],
            "search_rank": [
                123
            ],
            "spec": [
                30
            ],
            "tags": [
                125
            ],
            "urls": [
                32
            ],
            "__typename": [
                123
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                123
            ],
            "param_name": [
                123
            ],
            "type": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                123
            ],
            "fetched_at": [
                126
            ],
            "id": [
                75
            ],
            "response_code": [
                75
            ],
            "response_sha1": [
                123
            ],
            "response_size": [
                75
            ],
            "success": [
                7
            ],
            "url": [
                123
            ],
            "url_type": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                123
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
                92
            ],
            "onestop_id": [
                123
            ],
            "search": [
                123
            ],
            "source_url": [
                28
            ],
            "spec": [
                30
            ],
            "tags": [
                125
            ],
            "within": [
                93
            ],
            "__typename": [
                123
            ]
        },
        "FeedInfo": {
            "default_lang": [
                123
            ],
            "feed_contact_email": [
                123
            ],
            "feed_contact_url": [
                123
            ],
            "feed_end_date": [
                14
            ],
            "feed_lang": [
                123
            ],
            "feed_publisher_name": [
                123
            ],
            "feed_publisher_url": [
                123
            ],
            "feed_start_date": [
                14
            ],
            "feed_version": [
                123
            ],
            "id": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                123
            ],
            "attribution_text": [
                123
            ],
            "commercial_use_allowed": [
                123
            ],
            "create_derived_product": [
                123
            ],
            "redistribution_allowed": [
                123
            ],
            "share_alike_optional": [
                123
            ],
            "spdx_identifier": [
                123
            ],
            "url": [
                123
            ],
            "use_without_attribution": [
                123
            ],
            "__typename": [
                123
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
                123
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                123
            ],
            "mds_provider": [
                123
            ],
            "realtime_alerts": [
                123
            ],
            "realtime_trip_updates": [
                123
            ],
            "realtime_vehicle_positions": [
                123
            ],
            "static_current": [
                123
            ],
            "static_historic": [
                123
            ],
            "static_planned": [
                123
            ],
            "__typename": [
                123
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
                123
            ],
            "description": [
                123
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
                126
            ],
            "file": [
                123
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
                93
            ],
            "id": [
                75
            ],
            "latest_calendar_date": [
                14
            ],
            "name": [
                123
            ],
            "routes": [
                100,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        102
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
                123
            ],
            "stops": [
                114,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "trips": [
                127,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        128
                    ]
                }
            ],
            "updated_by": [
                123
            ],
            "url": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                33
            ],
            "fetch_error": [
                123
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                123
            ],
            "id": [
                75
            ],
            "name": [
                123
            ],
            "rows": [
                75
            ],
            "sha1": [
                123
            ],
            "size": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionFilter": {
            "bbox": [
                8
            ],
            "covers": [
                110
            ],
            "feed_ids": [
                75
            ],
            "feed_onestop_id": [
                123
            ],
            "file": [
                123
            ],
            "import_status": [
                74
            ],
            "near": [
                92
            ],
            "sha1": [
                123
            ],
            "within": [
                93
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                126
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                123
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
                126
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                123
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
                123
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
                123
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                123
            ],
            "name": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                123
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                109
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
                109
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                92
            ],
            "__typename": [
                123
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                123
            ],
            "brand_image_url_dark": [
                123
            ],
            "brand_last_modified": [
                14
            ],
            "brand_terms_url": [
                123
            ],
            "color": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsDockRequest": {
            "near": [
                92
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                75
            ],
            "bike_id": [
                123
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
                124
            ],
            "vehicle_type": [
                71
            ],
            "__typename": [
                123
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                73
            ],
            "type": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                75
            ],
            "name": [
                123
            ],
            "rules": [
                54
            ],
            "start": [
                75
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                52
            ],
            "type": [
                123
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                123
            ],
            "store_uri": [
                123
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "GbfsRentalUris": {
            "android": [
                123
            ],
            "ios": [
                123
            ],
            "web": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsStationInformation": {
            "address": [
                123
            ],
            "capacity": [
                75
            ],
            "contact_phone": [
                123
            ],
            "cross_street": [
                123
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
                123
            ],
            "parking_hoop": [
                75
            ],
            "parking_type": [
                123
            ],
            "post_code": [
                123
            ],
            "region": [
                67
            ],
            "rental_methods": [
                124
            ],
            "short_name": [
                123
            ],
            "station_area": [
                73
            ],
            "station_id": [
                123
            ],
            "status": [
                61
            ],
            "__typename": [
                123
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
                123
            ],
            "vehicle_docks_available": [
                70
            ],
            "vehicle_types_available": [
                72
            ],
            "__typename": [
                123
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                123
            ],
            "description": [
                123
            ],
            "last_updated": [
                75
            ],
            "summary": [
                123
            ],
            "times": [
                46
            ],
            "type": [
                123
            ],
            "url": [
                123
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "GbfsSystemHour": {
            "days": [
                124
            ],
            "end_time": [
                123
            ],
            "start_time": [
                123
            ],
            "user_types": [
                124
            ],
            "__typename": [
                123
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                48
            ],
            "email": [
                123
            ],
            "feed_contact_email": [
                123
            ],
            "language": [
                123
            ],
            "license_url": [
                123
            ],
            "name": [
                123
            ],
            "operator": [
                123
            ],
            "phone_number": [
                123
            ],
            "privacy_last_updated": [
                14
            ],
            "privacy_url": [
                123
            ],
            "purchase_url": [
                123
            ],
            "rental_apps": [
                58
            ],
            "short_name": [
                123
            ],
            "start_date": [
                14
            ],
            "system_id": [
                123
            ],
            "terms_last_updated": [
                14
            ],
            "terms_url": [
                123
            ],
            "timezone": [
                123
            ],
            "url": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                123
            ],
            "description": [
                123
            ],
            "is_taxable": [
                6
            ],
            "name": [
                123
            ],
            "per_km_pricing": [
                56
            ],
            "per_min_pricing": [
                56
            ],
            "plan_id": [
                123
            ],
            "price": [
                44
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                123
            ],
            "region_id": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                123
            ],
            "version": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                14
            ],
            "icon_url": [
                123
            ],
            "icon_url_dark": [
                123
            ],
            "__typename": [
                123
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
                123
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
                123
            ],
            "country_code": [
                123
            ],
            "default_pricing_plan": [
                66
            ],
            "default_reserve_time": [
                75
            ],
            "eco_label": [
                123
            ],
            "eco_sticker": [
                123
            ],
            "form_factor": [
                123
            ],
            "gco_2_km": [
                75
            ],
            "make": [
                123
            ],
            "max_permitted_speed": [
                75
            ],
            "max_range_meters": [
                44
            ],
            "model": [
                123
            ],
            "name": [
                123
            ],
            "pricing_plans": [
                66
            ],
            "propulsion_type": [
                123
            ],
            "rated_power": [
                75
            ],
            "rental_uris": [
                59
            ],
            "return_constraint": [
                123
            ],
            "rider_capacity": [
                75
            ],
            "vehicle_accessories": [
                124
            ],
            "vehicle_assets": [
                69
            ],
            "vehicle_image": [
                123
            ],
            "vehicle_type_id": [
                123
            ],
            "wheel_count": [
                75
            ],
            "__typename": [
                123
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
                123
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
                126
            ],
            "from": [
                135
            ],
            "legs": [
                78
            ],
            "start_time": [
                126
            ],
            "to": [
                135
            ],
            "__typename": [
                123
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
                126
            ],
            "from": [
                135
            ],
            "geometry": [
                82
            ],
            "start_time": [
                126
            ],
            "steps": [
                112
            ],
            "to": [
                135
            ],
            "__typename": [
                123
            ]
        },
        "Level": {
            "geometry": [
                93
            ],
            "id": [
                75
            ],
            "level_id": [
                123
            ],
            "level_index": [
                44
            ],
            "level_name": [
                123
            ],
            "stops": [
                114
            ],
            "__typename": [
                123
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
                123
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
                123
            ],
            "generated": [
                7
            ],
            "id": [
                75
            ],
            "name": [
                123
            ],
            "onestop_id": [
                123
            ],
            "search_rank": [
                123
            ],
            "short_name": [
                123
            ],
            "tags": [
                125
            ],
            "website": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                123
            ],
            "adm0_name": [
                123
            ],
            "adm1_iso": [
                123
            ],
            "adm1_name": [
                123
            ],
            "agency_id": [
                123
            ],
            "bbox": [
                8
            ],
            "city_name": [
                123
            ],
            "feed_onestop_id": [
                123
            ],
            "license": [
                80
            ],
            "merged": [
                7
            ],
            "near": [
                92
            ],
            "onestop_id": [
                123
            ],
            "search": [
                123
            ],
            "tags": [
                125
            ],
            "within": [
                93
            ],
            "__typename": [
                123
            ]
        },
        "Pathway": {
            "from_stop": [
                114
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
                123
            ],
            "pathway_mode": [
                75
            ],
            "reverse_signposted_as": [
                123
            ],
            "signposted_as": [
                123
            ],
            "stair_count": [
                75
            ],
            "to_stop": [
                114
            ],
            "traversal_time": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "Place": {
            "adm0_name": [
                123
            ],
            "adm1_name": [
                123
            ],
            "city_name": [
                123
            ],
            "count": [
                75
            ],
            "operators": [
                84
            ],
            "__typename": [
                123
            ]
        },
        "PlaceAggregationLevel": {},
        "PlaceFilter": {
            "adm0_name": [
                123
            ],
            "adm1_name": [
                123
            ],
            "city_name": [
                123
            ],
            "min_rank": [
                44
            ],
            "__typename": [
                123
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
                123
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
            "operators": [
                84,
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
                        85
                    ]
                }
            ],
            "places": [
                88,
                {
                    "after": [
                        75
                    ],
                    "level": [
                        89
                    ],
                    "limit": [
                        75
                    ],
                    "where": [
                        90
                    ]
                }
            ],
            "routes": [
                100,
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
                        102
                    ]
                }
            ],
            "stops": [
                114,
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
                        116
                    ]
                }
            ],
            "trips": [
                127,
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
                        128
                    ]
                }
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "RTTranslation": {
            "language": [
                123
            ],
            "text": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                75
            ],
            "route_id": [
                123
            ],
            "schedule_relationship": [
                123
            ],
            "start_date": [
                14
            ],
            "start_time": [
                109
            ],
            "trip_id": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                123
            ],
            "label": [
                123
            ],
            "license_plate": [
                123
            ],
            "__typename": [
                123
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
                        123,
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
                123
            ],
            "feed_version": [
                33
            ],
            "feed_version_sha1": [
                123
            ],
            "geometries": [
                103,
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
                104,
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
                123
            ],
            "patterns": [
                107
            ],
            "route_attribute": [
                101
            ],
            "route_color": [
                123
            ],
            "route_desc": [
                123
            ],
            "route_id": [
                123
            ],
            "route_long_name": [
                123
            ],
            "route_short_name": [
                123
            ],
            "route_sort_order": [
                75
            ],
            "route_stop_buffer": [
                106,
                {
                    "radius": [
                        44
                    ]
                }
            ],
            "route_stops": [
                105,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "route_text_color": [
                123
            ],
            "route_type": [
                75
            ],
            "route_url": [
                123
            ],
            "search_rank": [
                123
            ],
            "stops": [
                114,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        116
                    ]
                }
            ],
            "trips": [
                127,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        128
                    ]
                }
            ],
            "__typename": [
                123
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
                123
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
                123
            ],
            "feed_version_sha1": [
                123
            ],
            "license": [
                80
            ],
            "near": [
                92
            ],
            "onestop_id": [
                123
            ],
            "onestop_ids": [
                123
            ],
            "operator_onestop_id": [
                123
            ],
            "route_id": [
                123
            ],
            "route_type": [
                75
            ],
            "search": [
                123
            ],
            "serviced": [
                7
            ],
            "within": [
                93
            ],
            "__typename": [
                123
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
                123
            ]
        },
        "RouteHeadway": {
            "departures": [
                109
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
                114
            ],
            "stop_trip_count": [
                75
            ],
            "__typename": [
                123
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
                100
            ],
            "route_id": [
                75
            ],
            "stop": [
                114
            ],
            "stop_id": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                73
            ],
            "stop_convexhull": [
                93
            ],
            "stop_points": [
                73
            ],
            "__typename": [
                123
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
                127,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "ServiceCoversFilter": {
            "end_date": [
                14
            ],
            "fetched_after": [
                126
            ],
            "fetched_before": [
                126
            ],
            "start_date": [
                14
            ],
            "__typename": [
                123
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
                123
            ],
            "__typename": [
                123
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
                126
            ],
            "geometry_offset": [
                75
            ],
            "instruction": [
                123
            ],
            "mode": [
                113
            ],
            "start_time": [
                126
            ],
            "to": [
                135
            ],
            "__typename": [
                123
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
                120,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "census_geographies": [
                11,
                {
                    "layer": [
                        123,
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
                114,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "departures": [
                120,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "directions": [
                16,
                {
                    "depart_at": [
                        126
                    ],
                    "from": [
                        136
                    ],
                    "mode": [
                        113
                    ],
                    "to": [
                        136
                    ]
                }
            ],
            "external_reference": [
                115
            ],
            "feed_onestop_id": [
                123
            ],
            "feed_version": [
                33
            ],
            "feed_version_sha1": [
                123
            ],
            "geometry": [
                91
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
                114,
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
                117,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "onestop_id": [
                123
            ],
            "parent": [
                114
            ],
            "pathways_from_stop": [
                86,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "pathways_to_stop": [
                86,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "place": [
                119
            ],
            "platform_code": [
                123
            ],
            "route_stops": [
                105,
                {
                    "limit": [
                        75
                    ]
                }
            ],
            "search_rank": [
                123
            ],
            "stop_code": [
                123
            ],
            "stop_desc": [
                123
            ],
            "stop_id": [
                123
            ],
            "stop_name": [
                123
            ],
            "stop_times": [
                120,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        122
                    ]
                }
            ],
            "stop_timezone": [
                123
            ],
            "stop_url": [
                123
            ],
            "tts_stop_name": [
                123
            ],
            "wheelchair_boarding": [
                75
            ],
            "zone_id": [
                123
            ],
            "__typename": [
                123
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
                114
            ],
            "target_feed_onestop_id": [
                123
            ],
            "target_stop_id": [
                123
            ],
            "__typename": [
                123
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
                123
            ],
            "feed_version_sha1": [
                123
            ],
            "license": [
                80
            ],
            "location_type": [
                75
            ],
            "near": [
                92
            ],
            "onestop_id": [
                123
            ],
            "onestop_ids": [
                123
            ],
            "search": [
                123
            ],
            "served_by_onestop_ids": [
                123
            ],
            "served_by_route_type": [
                75
            ],
            "serviced": [
                7
            ],
            "stop_code": [
                123
            ],
            "stop_id": [
                123
            ],
            "within": [
                93
            ],
            "__typename": [
                123
            ]
        },
        "StopObservation": {
            "agency_id": [
                123
            ],
            "from_stop_id": [
                123
            ],
            "observed_arrival_time": [
                109
            ],
            "observed_departure_time": [
                109
            ],
            "route_id": [
                123
            ],
            "schedule_relationship": [
                123
            ],
            "scheduled_arrival_time": [
                109
            ],
            "scheduled_departure_time": [
                109
            ],
            "source": [
                123
            ],
            "stop_sequence": [
                75
            ],
            "to_stop_id": [
                123
            ],
            "trip_id": [
                123
            ],
            "trip_start_date": [
                14
            ],
            "trip_start_time": [
                109
            ],
            "__typename": [
                123
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                75
            ],
            "source": [
                123
            ],
            "trip_start_date": [
                14
            ],
            "__typename": [
                123
            ]
        },
        "StopPlace": {
            "adm0_iso": [
                123
            ],
            "adm0_name": [
                123
            ],
            "adm1_iso": [
                123
            ],
            "adm1_name": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "StopTime": {
            "arrival": [
                121
            ],
            "arrival_time": [
                109
            ],
            "continuous_drop_off": [
                75
            ],
            "continuous_pickup": [
                75
            ],
            "departure": [
                121
            ],
            "departure_time": [
                109
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
                114
            ],
            "stop_headsign": [
                123
            ],
            "stop_sequence": [
                75
            ],
            "timepoint": [
                75
            ],
            "trip": [
                127
            ],
            "__typename": [
                123
            ]
        },
        "StopTimeEvent": {
            "delay": [
                75
            ],
            "estimated": [
                109
            ],
            "estimated_utc": [
                126
            ],
            "scheduled": [
                109
            ],
            "stop_timezone": [
                123
            ],
            "uncertainty": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                109
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
                123
            ],
            "service_date": [
                14
            ],
            "start": [
                109
            ],
            "start_time": [
                75
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                123
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
                123
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
                100
            ],
            "schedule_relationship": [
                108
            ],
            "shape": [
                111
            ],
            "stop_pattern_id": [
                75
            ],
            "stop_times": [
                120,
                {
                    "limit": [
                        75
                    ],
                    "where": [
                        129
                    ]
                }
            ],
            "timestamp": [
                126
            ],
            "trip_headsign": [
                123
            ],
            "trip_id": [
                123
            ],
            "trip_short_name": [
                123
            ],
            "wheelchair_accessible": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                123
            ],
            "feed_version_sha1": [
                123
            ],
            "license": [
                80
            ],
            "route_ids": [
                75
            ],
            "route_onestop_ids": [
                123
            ],
            "service_date": [
                14
            ],
            "stop_pattern_id": [
                75
            ],
            "trip_id": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "TripStopTimeFilter": {
            "end": [
                109
            ],
            "start": [
                109
            ],
            "__typename": [
                123
            ]
        },
        "Upload": {},
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
                133
            ],
            "failure_reason": [
                123
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
            "routes": [
                100,
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
                        123
                    ]
                }
            ],
            "sha1": [
                123
            ],
            "stops": [
                114,
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
                133
            ],
            "__typename": [
                123
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                123
            ],
            "error_type": [
                123
            ],
            "field": [
                123
            ],
            "filename": [
                123
            ],
            "message": [
                123
            ],
            "value": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                75
            ],
            "error_type": [
                123
            ],
            "errors": [
                132
            ],
            "filename": [
                123
            ],
            "limit": [
                75
            ],
            "__typename": [
                123
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                123
            ],
            "current_status": [
                123
            ],
            "current_stop_sequence": [
                75
            ],
            "position": [
                91
            ],
            "stop_id": [
                114
            ],
            "timestamp": [
                126
            ],
            "vehicle": [
                98
            ],
            "__typename": [
                123
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
                123
            ],
            "__typename": [
                123
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
                123
            ],
            "__typename": [
                123
            ]
        }
    }
}