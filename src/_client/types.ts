export default {
    "scalars": [
        5,
        6,
        7,
        14,
        15,
        19,
        21,
        30,
        31,
        45,
        74,
        75,
        76,
        78,
        82,
        83,
        84,
        91,
        93,
        95,
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
                        76
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
                        76
                    ],
                    "radius": [
                        45
                    ]
                }
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version": [
                34
            ],
            "feed_version_sha1": [
                124
            ],
            "geometry": [
                95
            ],
            "id": [
                76
            ],
            "onestop_id": [
                124
            ],
            "operator": [
                86
            ],
            "places": [
                2,
                {
                    "limit": [
                        76
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
                        76
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
                81
            ],
            "near": [
                94
            ],
            "onestop_id": [
                124
            ],
            "search": [
                124
            ],
            "within": [
                95
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
                45
            ],
            "__typename": [
                124
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                45
            ],
            "__typename": [
                124
            ]
        },
        "Alert": {
            "active_period": [
                97
            ],
            "cause": [
                124
            ],
            "description_text": [
                98
            ],
            "effect": [
                124
            ],
            "header_text": [
                98
            ],
            "severity_level": [
                124
            ],
            "tts_description_text": [
                98
            ],
            "tts_header_text": [
                98
            ],
            "url": [
                98
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
                45
            ],
            "max_lon": [
                45
            ],
            "min_lat": [
                45
            ],
            "min_lon": [
                45
            ],
            "__typename": [
                124
            ]
        },
        "Calendar": {
            "added_dates": [
                15,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "end_date": [
                15
            ],
            "friday": [
                76
            ],
            "id": [
                76
            ],
            "monday": [
                76
            ],
            "removed_dates": [
                15,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "saturday": [
                76
            ],
            "service_id": [
                124
            ],
            "start_date": [
                15
            ],
            "sunday": [
                76
            ],
            "thursday": [
                76
            ],
            "tuesday": [
                76
            ],
            "wednesday": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "CalendarDateFilter": {
            "date": [
                15
            ],
            "exception_type": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "CensusGeography": {
            "aland": [
                45
            ],
            "awater": [
                45
            ],
            "geoid": [
                124
            ],
            "geometry": [
                95
            ],
            "id": [
                76
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
                        76
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
                76
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
        "Counts": {},
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                127
            ],
            "from": [
                140
            ],
            "mode": [
                114
            ],
            "to": [
                140
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
                139
            ],
            "distance": [
                18
            ],
            "duration": [
                20
            ],
            "end_time": [
                127
            ],
            "exception": [
                124
            ],
            "itineraries": [
                77
            ],
            "origin": [
                139
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
                45
            ],
            "units": [
                19
            ],
            "__typename": [
                124
            ]
        },
        "DistanceUnit": {},
        "Duration": {
            "duration": [
                45
            ],
            "units": [
                21
            ],
            "__typename": [
                124
            ]
        },
        "DurationUnit": {},
        "Feed": {
            "associated_operators": [
                86
            ],
            "authorization": [
                23
            ],
            "feed_fetches": [
                24,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        25
                    ]
                }
            ],
            "feed_state": [
                32
            ],
            "feed_versions": [
                34,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "file": [
                124
            ],
            "id": [
                76
            ],
            "languages": [
                124
            ],
            "license": [
                28
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
                31
            ],
            "tags": [
                126
            ],
            "urls": [
                33
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
                76
            ],
            "response_code": [
                76
            ],
            "response_sha1": [
                124
            ],
            "response_size": [
                76
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
                75
            ],
            "license": [
                81
            ],
            "near": [
                94
            ],
            "onestop_id": [
                124
            ],
            "search": [
                124
            ],
            "source_url": [
                29
            ],
            "spec": [
                31
            ],
            "tags": [
                126
            ],
            "within": [
                95
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
                15
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
                15
            ],
            "feed_version": [
                124
            ],
            "id": [
                76
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
                30
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
                34
            ],
            "id": [
                76
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
                        76
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
                15
            ],
            "feed": [
                22
            ],
            "feed_infos": [
                27,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "feed_version_gtfs_import": [
                39
            ],
            "fetched_at": [
                127
            ],
            "file": [
                124
            ],
            "files": [
                37,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "geometry": [
                95
            ],
            "id": [
                76
            ],
            "latest_calendar_date": [
                15
            ],
            "name": [
                124
            ],
            "routes": [
                101,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "service_levels": [
                41,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        42
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
                        76
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
                        76
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
                34
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
                76
            ],
            "name": [
                124
            ],
            "rows": [
                76
            ],
            "sha1": [
                124
            ],
            "size": [
                76
            ],
            "values_count": [
                14
            ],
            "values_unique": [
                14
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
                76
            ],
            "feed_onestop_id": [
                124
            ],
            "file": [
                124
            ],
            "import_status": [
                75
            ],
            "near": [
                94
            ],
            "sha1": [
                124
            ],
            "within": [
                95
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
                76
            ],
            "in_progress": [
                7
            ],
            "interpolated_stop_time_count": [
                76
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
                15
            ],
            "friday": [
                76
            ],
            "id": [
                76
            ],
            "monday": [
                76
            ],
            "saturday": [
                76
            ],
            "start_date": [
                15
            ],
            "sunday": [
                76
            ],
            "thursday": [
                76
            ],
            "tuesday": [
                76
            ],
            "wednesday": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "FeedVersionServiceLevelFilter": {
            "end_date": [
                15
            ],
            "start_date": [
                15
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
                76
            ],
            "headway_secs": [
                76
            ],
            "id": [
                76
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
                76
            ],
            "start": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                94
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
                15
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
                94
            ],
            "__typename": [
                124
            ]
        },
        "GbfsFeed": {
            "alerts": [
                63
            ],
            "calendars": [
                64
            ],
            "rental_hours": [
                65
            ],
            "station_information": [
                61
            ],
            "system_information": [
                66
            ],
            "__typename": [
                124
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                76
            ],
            "bike_id": [
                124
            ],
            "current_fuel_percent": [
                45
            ],
            "current_range_meters": [
                45
            ],
            "feed": [
                51
            ],
            "home_station": [
                61
            ],
            "is_disabled": [
                6
            ],
            "is_reserved": [
                6
            ],
            "last_reported": [
                76
            ],
            "lat": [
                45
            ],
            "lon": [
                45
            ],
            "pricing_plan": [
                67
            ],
            "rental_uris": [
                60
            ],
            "station": [
                61
            ],
            "vehicle_equipment": [
                125
            ],
            "vehicle_type": [
                72
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                74
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
                76
            ],
            "name": [
                124
            ],
            "rules": [
                55
            ],
            "start": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceRule": {
            "maximum_speed_kph": [
                76
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
                72
            ],
            "__typename": [
                124
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                53
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
                76
            ],
            "interval": [
                76
            ],
            "rate": [
                45
            ],
            "start": [
                76
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
                58
            ],
            "ios": [
                58
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
                76
            ],
            "contact_phone": [
                124
            ],
            "cross_street": [
                124
            ],
            "feed": [
                51
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
                45
            ],
            "lon": [
                45
            ],
            "name": [
                124
            ],
            "parking_hoop": [
                76
            ],
            "parking_type": [
                124
            ],
            "post_code": [
                124
            ],
            "region": [
                68
            ],
            "rental_methods": [
                125
            ],
            "short_name": [
                124
            ],
            "station_area": [
                74
            ],
            "station_id": [
                124
            ],
            "status": [
                62
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
                76
            ],
            "num_bikes_available": [
                76
            ],
            "num_bikes_disabled": [
                76
            ],
            "num_docks_available": [
                76
            ],
            "num_docks_disabled": [
                76
            ],
            "station_id": [
                124
            ],
            "vehicle_docks_available": [
                71
            ],
            "vehicle_types_available": [
                73
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
                76
            ],
            "summary": [
                124
            ],
            "times": [
                47
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
                76
            ],
            "end_month": [
                76
            ],
            "end_year": [
                76
            ],
            "start_day": [
                76
            ],
            "start_month": [
                76
            ],
            "start_year": [
                76
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
                49
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
                15
            ],
            "privacy_url": [
                124
            ],
            "purchase_url": [
                124
            ],
            "rental_apps": [
                59
            ],
            "short_name": [
                124
            ],
            "start_date": [
                15
            ],
            "system_id": [
                124
            ],
            "terms_last_updated": [
                15
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
                57
            ],
            "per_min_pricing": [
                57
            ],
            "plan_id": [
                124
            ],
            "price": [
                45
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
                15
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
                76
            ],
            "vehicle_types": [
                72
            ],
            "__typename": [
                124
            ]
        },
        "GbfsVehicleType": {
            "cargo_load_capacity": [
                76
            ],
            "cargo_volume_capacity": [
                76
            ],
            "color": [
                124
            ],
            "country_code": [
                124
            ],
            "default_pricing_plan": [
                67
            ],
            "default_reserve_time": [
                76
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
                76
            ],
            "make": [
                124
            ],
            "max_permitted_speed": [
                76
            ],
            "max_range_meters": [
                45
            ],
            "model": [
                124
            ],
            "name": [
                124
            ],
            "pricing_plans": [
                67
            ],
            "propulsion_type": [
                124
            ],
            "rated_power": [
                76
            ],
            "rental_uris": [
                60
            ],
            "return_constraint": [
                124
            ],
            "rider_capacity": [
                76
            ],
            "vehicle_accessories": [
                125
            ],
            "vehicle_assets": [
                70
            ],
            "vehicle_image": [
                124
            ],
            "vehicle_type_id": [
                124
            ],
            "wheel_count": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "GbfsVehicleTypeAvailable": {
            "count": [
                76
            ],
            "num_bikes_disabled": [
                76
            ],
            "num_docks_available": [
                76
            ],
            "vehicle_type": [
                72
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
                18
            ],
            "duration": [
                20
            ],
            "end_time": [
                127
            ],
            "from": [
                139
            ],
            "legs": [
                79
            ],
            "start_time": [
                127
            ],
            "to": [
                139
            ],
            "__typename": [
                124
            ]
        },
        "Key": {},
        "Leg": {
            "distance": [
                18
            ],
            "duration": [
                20
            ],
            "end_time": [
                127
            ],
            "from": [
                139
            ],
            "geometry": [
                83
            ],
            "start_time": [
                127
            ],
            "steps": [
                113
            ],
            "to": [
                139
            ],
            "__typename": [
                124
            ]
        },
        "Level": {
            "geometry": [
                95
            ],
            "id": [
                76
            ],
            "level_id": [
                124
            ],
            "level_index": [
                45
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
                82
            ],
            "create_derived_product": [
                82
            ],
            "redistribution_allowed": [
                82
            ],
            "share_alike_optional": [
                82
            ],
            "use_without_attribution": [
                82
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
                84
            ],
            "id": [
                124
            ],
            "name": [
                124
            ],
            "roles": [
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
                22,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        26
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
                76
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
                81
            ],
            "merged": [
                7
            ],
            "near": [
                94
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
                95
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
                76
            ],
            "is_bidirectional": [
                76
            ],
            "length": [
                45
            ],
            "max_slope": [
                45
            ],
            "min_width": [
                45
            ],
            "pathway_id": [
                124
            ],
            "pathway_mode": [
                76
            ],
            "reverse_signposted_as": [
                124
            ],
            "signposted_as": [
                124
            ],
            "stair_count": [
                76
            ],
            "to_stop": [
                115
            ],
            "traversal_time": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                76
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
                76
            ],
            "operators": [
                86
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
                45
            ],
            "__typename": [
                124
            ]
        },
        "Point": {},
        "PointRadius": {
            "lat": [
                45
            ],
            "lon": [
                45
            ],
            "radius": [
                45
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
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
                    ],
                    "where": [
                        1
                    ]
                }
            ],
            "bikes": [
                52,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        48
                    ]
                }
            ],
            "directions": [
                17,
                {
                    "where": [
                        16,
                        "DirectionRequest!"
                    ]
                }
            ],
            "docks": [
                61,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        50
                    ]
                }
            ],
            "feed_versions": [
                34,
                {
                    "after": [
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
                    ],
                    "where": [
                        38
                    ]
                }
            ],
            "feeds": [
                22,
                {
                    "after": [
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
                    ],
                    "where": [
                        26
                    ]
                }
            ],
            "me": [
                85
            ],
            "operators": [
                86,
                {
                    "after": [
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
                    ],
                    "where": [
                        87
                    ]
                }
            ],
            "places": [
                90,
                {
                    "after": [
                        76
                    ],
                    "level": [
                        91
                    ],
                    "limit": [
                        76
                    ],
                    "where": [
                        92
                    ]
                }
            ],
            "routes": [
                101,
                {
                    "after": [
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
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
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
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
                        76
                    ],
                    "ids": [
                        76,
                        "[Int!]"
                    ],
                    "limit": [
                        76
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
                76
            ],
            "start": [
                76
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
                76
            ],
            "route_id": [
                124
            ],
            "schedule_relationship": [
                124
            ],
            "start_date": [
                15
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
                        76
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
                        76
                    ],
                    "radius": [
                        45
                    ]
                }
            ],
            "continuous_drop_off": [
                76
            ],
            "continuous_pickup": [
                76
            ],
            "feed_onestop_id": [
                124
            ],
            "feed_version": [
                34
            ],
            "feed_version_sha1": [
                124
            ],
            "geometries": [
                104,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "geometry": [
                74
            ],
            "headways": [
                105,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "id": [
                76
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
                76
            ],
            "route_stop_buffer": [
                107,
                {
                    "radius": [
                        45
                    ]
                }
            ],
            "route_stops": [
                106,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "route_text_color": [
                124
            ],
            "route_type": [
                76
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
                        76
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
                        76
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
                76
            ],
            "running_way": [
                76
            ],
            "subcategory": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "RouteFilter": {
            "agency_ids": [
                76
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
                81
            ],
            "near": [
                94
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
                76
            ],
            "search": [
                124
            ],
            "serviced": [
                7
            ],
            "within": [
                95
            ],
            "__typename": [
                124
            ]
        },
        "RouteGeometry": {
            "combined_geometry": [
                74
            ],
            "first_point_max_distance": [
                45
            ],
            "generated": [
                7
            ],
            "geometry": [
                83
            ],
            "length": [
                45
            ],
            "max_segment_length": [
                45
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
                76
            ],
            "dow_category": [
                76
            ],
            "headway_secs": [
                76
            ],
            "service_date": [
                15
            ],
            "stop": [
                115
            ],
            "stop_trip_count": [
                76
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
                76
            ],
            "id": [
                76
            ],
            "route": [
                101
            ],
            "route_id": [
                76
            ],
            "stop": [
                115
            ],
            "stop_id": [
                76
            ],
            "__typename": [
                124
            ]
        },
        "RouteStopBuffer": {
            "stop_buffer": [
                74
            ],
            "stop_convexhull": [
                95
            ],
            "stop_points": [
                74
            ],
            "__typename": [
                124
            ]
        },
        "RouteStopPattern": {
            "count": [
                76
            ],
            "direction_id": [
                76
            ],
            "stop_pattern_id": [
                76
            ],
            "trips": [
                128,
                {
                    "limit": [
                        76
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
                15
            ],
            "fetched_after": [
                127
            ],
            "fetched_before": [
                127
            ],
            "start_date": [
                15
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
                83
            ],
            "id": [
                76
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
                18
            ],
            "duration": [
                20
            ],
            "end_time": [
                127
            ],
            "geometry_offset": [
                76
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
                139
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
                        76
                    ]
                }
            ],
            "arrivals": [
                121,
                {
                    "limit": [
                        76
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
                        76
                    ],
                    "radius": [
                        45
                    ]
                }
            ],
            "children": [
                115,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "departures": [
                121,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "directions": [
                17,
                {
                    "depart_at": [
                        127
                    ],
                    "from": [
                        140
                    ],
                    "mode": [
                        114
                    ],
                    "to": [
                        140
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
                34
            ],
            "feed_version_sha1": [
                124
            ],
            "geometry": [
                93
            ],
            "id": [
                76
            ],
            "level": [
                80
            ],
            "location_type": [
                76
            ],
            "nearby_stops": [
                115,
                {
                    "limit": [
                        76
                    ],
                    "radius": [
                        45
                    ]
                }
            ],
            "observations": [
                118,
                {
                    "limit": [
                        76
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
                88,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "pathways_to_stop": [
                88,
                {
                    "limit": [
                        76
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
                        76
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
                        76
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
                76
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
                76
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
                76
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
                81
            ],
            "location_type": [
                76
            ],
            "near": [
                94
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
                76
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
                95
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
                76
            ],
            "to_stop_id": [
                124
            ],
            "trip_id": [
                124
            ],
            "trip_start_date": [
                15
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
                76
            ],
            "source": [
                124
            ],
            "trip_start_date": [
                15
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
                76
            ],
            "continuous_pickup": [
                76
            ],
            "departure": [
                122
            ],
            "departure_time": [
                110
            ],
            "drop_off_type": [
                76
            ],
            "interpolated": [
                76
            ],
            "pickup_type": [
                76
            ],
            "service_date": [
                15
            ],
            "shape_dist_traveled": [
                45
            ],
            "stop": [
                115
            ],
            "stop_headsign": [
                124
            ],
            "stop_sequence": [
                76
            ],
            "timepoint": [
                76
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
                76
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
                76
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
                76
            ],
            "exclude_first": [
                7
            ],
            "exclude_last": [
                7
            ],
            "next": [
                76
            ],
            "route_onestop_ids": [
                124
            ],
            "service_date": [
                15
            ],
            "start": [
                110
            ],
            "start_time": [
                76
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
                        76
                    ]
                }
            ],
            "bikes_allowed": [
                76
            ],
            "block_id": [
                124
            ],
            "calendar": [
                9
            ],
            "direction_id": [
                76
            ],
            "feed_version": [
                34
            ],
            "frequencies": [
                46,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "id": [
                76
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
                76
            ],
            "stop_times": [
                121,
                {
                    "limit": [
                        76
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
                76
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
                81
            ],
            "route_ids": [
                76
            ],
            "route_onestop_ids": [
                124
            ],
            "service_date": [
                15
            ],
            "stop_pattern_id": [
                76
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
                84
            ],
            "url": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "ValidationReportFilter": {
            "success": [
                7
            ],
            "validator": [
                124
            ],
            "__typename": [
                124
            ]
        },
        "ValidationResult": {
            "details": [
                135
            ],
            "errors": [
                137
            ],
            "failure_reason": [
                124
            ],
            "success": [
                7
            ],
            "warnings": [
                137
            ],
            "__typename": [
                124
            ]
        },
        "ValidationResultDetails": {
            "agencies": [
                0,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "earliest_calendar_date": [
                15
            ],
            "feed_infos": [
                27,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "files": [
                37
            ],
            "latest_calendar_date": [
                15
            ],
            "realtime": [
                132
            ],
            "routes": [
                101,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "service_levels": [
                41,
                {
                    "limit": [
                        76
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
                        76
                    ]
                }
            ],
            "__typename": [
                124
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                124
            ],
            "error_code": [
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
            "geometry": [
                74
            ],
            "line": [
                76
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
                76
            ],
            "error_code": [
                124
            ],
            "error_type": [
                124
            ],
            "errors": [
                136
            ],
            "field": [
                124
            ],
            "filename": [
                124
            ],
            "limit": [
                76
            ],
            "message": [
                124
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
                76
            ],
            "position": [
                93
            ],
            "stop_id": [
                115
            ],
            "timestamp": [
                127
            ],
            "vehicle": [
                100
            ],
            "__typename": [
                124
            ]
        },
        "Waypoint": {
            "lat": [
                45
            ],
            "lon": [
                45
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
                45
            ],
            "lon": [
                45
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