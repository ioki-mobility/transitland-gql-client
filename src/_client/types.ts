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
        101,
        110,
        111,
        115,
        125,
        126,
        127,
        128,
        132
    ],
    "types": {
        "Agency": {
            "agency_email": [
                125
            ],
            "agency_fare_url": [
                125
            ],
            "agency_id": [
                125
            ],
            "agency_lang": [
                125
            ],
            "agency_name": [
                125
            ],
            "agency_phone": [
                125
            ],
            "agency_timezone": [
                125
            ],
            "agency_url": [
                125
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
                        125,
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
                125
            ],
            "feed_version": [
                34
            ],
            "feed_version_sha1": [
                125
            ],
            "geometry": [
                95
            ],
            "id": [
                76
            ],
            "onestop_id": [
                125
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
                102,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        104
                    ]
                }
            ],
            "search_rank": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "AgencyFilter": {
            "adm0_iso": [
                125
            ],
            "adm0_name": [
                125
            ],
            "adm1_iso": [
                125
            ],
            "adm1_name": [
                125
            ],
            "agency_id": [
                125
            ],
            "agency_name": [
                125
            ],
            "bbox": [
                8
            ],
            "city_name": [
                125
            ],
            "feed_onestop_id": [
                125
            ],
            "feed_version_sha1": [
                125
            ],
            "license": [
                81
            ],
            "near": [
                94
            ],
            "onestop_id": [
                125
            ],
            "search": [
                125
            ],
            "within": [
                95
            ],
            "__typename": [
                125
            ]
        },
        "AgencyPlace": {
            "adm0_iso": [
                125
            ],
            "adm0_name": [
                125
            ],
            "adm1_iso": [
                125
            ],
            "adm1_name": [
                125
            ],
            "city_name": [
                125
            ],
            "rank": [
                45
            ],
            "__typename": [
                125
            ]
        },
        "AgencyPlaceFilter": {
            "min_rank": [
                45
            ],
            "__typename": [
                125
            ]
        },
        "Alert": {
            "active_period": [
                97
            ],
            "cause": [
                125
            ],
            "description_text": [
                98
            ],
            "effect": [
                125
            ],
            "header_text": [
                98
            ],
            "severity_level": [
                125
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
                125
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
                125
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
                125
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
                125
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
                125
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
                125
            ],
            "geometry": [
                95
            ],
            "id": [
                76
            ],
            "layer_name": [
                125
            ],
            "name": [
                125
            ],
            "values": [
                13,
                {
                    "limit": [
                        76
                    ],
                    "table_names": [
                        125,
                        "[String!]!"
                    ]
                }
            ],
            "__typename": [
                125
            ]
        },
        "CensusTable": {
            "id": [
                76
            ],
            "table_group": [
                125
            ],
            "table_name": [
                125
            ],
            "table_title": [
                125
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "Counts": {},
        "Date": {},
        "DirectionRequest": {
            "depart_at": [
                128
            ],
            "from": [
                139
            ],
            "mode": [
                115
            ],
            "to": [
                139
            ],
            "__typename": [
                125
            ]
        },
        "Directions": {
            "data_source": [
                125
            ],
            "destination": [
                138
            ],
            "distance": [
                18
            ],
            "duration": [
                20
            ],
            "end_time": [
                128
            ],
            "exception": [
                125
            ],
            "itineraries": [
                77
            ],
            "origin": [
                138
            ],
            "start_time": [
                128
            ],
            "success": [
                7
            ],
            "__typename": [
                125
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
                125
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
                125
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
                125
            ],
            "id": [
                76
            ],
            "languages": [
                125
            ],
            "license": [
                28
            ],
            "name": [
                125
            ],
            "onestop_id": [
                125
            ],
            "search_rank": [
                125
            ],
            "spec": [
                31
            ],
            "tags": [
                127
            ],
            "urls": [
                33
            ],
            "__typename": [
                125
            ]
        },
        "FeedAuthorization": {
            "info_url": [
                125
            ],
            "param_name": [
                125
            ],
            "type": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "FeedFetch": {
            "fetch_error": [
                125
            ],
            "fetched_at": [
                128
            ],
            "id": [
                76
            ],
            "response_code": [
                76
            ],
            "response_sha1": [
                125
            ],
            "response_size": [
                76
            ],
            "success": [
                7
            ],
            "url": [
                125
            ],
            "url_type": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "FeedFetchFilter": {
            "success": [
                7
            ],
            "__typename": [
                125
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
                125
            ],
            "search": [
                125
            ],
            "source_url": [
                29
            ],
            "spec": [
                31
            ],
            "tags": [
                127
            ],
            "within": [
                95
            ],
            "__typename": [
                125
            ]
        },
        "FeedInfo": {
            "default_lang": [
                125
            ],
            "feed_contact_email": [
                125
            ],
            "feed_contact_url": [
                125
            ],
            "feed_end_date": [
                15
            ],
            "feed_lang": [
                125
            ],
            "feed_publisher_name": [
                125
            ],
            "feed_publisher_url": [
                125
            ],
            "feed_start_date": [
                15
            ],
            "feed_version": [
                125
            ],
            "id": [
                76
            ],
            "__typename": [
                125
            ]
        },
        "FeedLicense": {
            "attribution_instructions": [
                125
            ],
            "attribution_text": [
                125
            ],
            "commercial_use_allowed": [
                125
            ],
            "create_derived_product": [
                125
            ],
            "redistribution_allowed": [
                125
            ],
            "share_alike_optional": [
                125
            ],
            "spdx_identifier": [
                125
            ],
            "url": [
                125
            ],
            "use_without_attribution": [
                125
            ],
            "__typename": [
                125
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
                125
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "FeedUrls": {
            "gbfs_auto_discovery": [
                125
            ],
            "mds_provider": [
                125
            ],
            "realtime_alerts": [
                125
            ],
            "realtime_trip_updates": [
                125
            ],
            "realtime_vehicle_positions": [
                125
            ],
            "static_current": [
                125
            ],
            "static_historic": [
                125
            ],
            "static_planned": [
                125
            ],
            "__typename": [
                125
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
                125
            ],
            "description": [
                125
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
                128
            ],
            "file": [
                125
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
                125
            ],
            "routes": [
                102,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        104
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
                125
            ],
            "stops": [
                116,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "trips": [
                129,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "updated_by": [
                125
            ],
            "url": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "FeedVersionDeleteResult": {
            "success": [
                7
            ],
            "__typename": [
                125
            ]
        },
        "FeedVersionFetchResult": {
            "feed_version": [
                34
            ],
            "fetch_error": [
                125
            ],
            "found_dir_sha1": [
                7
            ],
            "found_sha1": [
                7
            ],
            "__typename": [
                125
            ]
        },
        "FeedVersionFileInfo": {
            "csv_like": [
                7
            ],
            "header": [
                125
            ],
            "id": [
                76
            ],
            "name": [
                125
            ],
            "rows": [
                76
            ],
            "sha1": [
                125
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
                125
            ]
        },
        "FeedVersionFilter": {
            "bbox": [
                8
            ],
            "covers": [
                112
            ],
            "feed_ids": [
                76
            ],
            "feed_onestop_id": [
                125
            ],
            "file": [
                125
            ],
            "import_status": [
                75
            ],
            "near": [
                94
            ],
            "sha1": [
                125
            ],
            "within": [
                95
            ],
            "__typename": [
                125
            ]
        },
        "FeedVersionGtfsImport": {
            "created_at": [
                128
            ],
            "entity_count": [
                5
            ],
            "exception_log": [
                125
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
                128
            ],
            "warning_count": [
                5
            ],
            "__typename": [
                125
            ]
        },
        "FeedVersionImportResult": {
            "success": [
                7
            ],
            "__typename": [
                125
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
                125
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
                125
            ]
        },
        "FeedVersionSetInput": {
            "description": [
                125
            ],
            "name": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "FeedVersionUnimportResult": {
            "success": [
                7
            ],
            "__typename": [
                125
            ]
        },
        "Float": {},
        "Frequency": {
            "end_time": [
                111
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
                111
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "GbfsBikeRequest": {
            "near": [
                94
            ],
            "__typename": [
                125
            ]
        },
        "GbfsBrandAsset": {
            "brand_image_url": [
                125
            ],
            "brand_image_url_dark": [
                125
            ],
            "brand_last_modified": [
                15
            ],
            "brand_terms_url": [
                125
            ],
            "color": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsDockRequest": {
            "near": [
                94
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "GbfsFreeBikeStatus": {
            "available_until": [
                76
            ],
            "bike_id": [
                125
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
                126
            ],
            "vehicle_type": [
                72
            ],
            "__typename": [
                125
            ]
        },
        "GbfsGeofenceFeature": {
            "geometry": [
                74
            ],
            "type": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsGeofenceProperty": {
            "end": [
                76
            ],
            "name": [
                125
            ],
            "rules": [
                55
            ],
            "start": [
                76
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "GbfsGeofenceZone": {
            "features": [
                53
            ],
            "type": [
                125
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "GbfsRentalApp": {
            "discovery_uri": [
                125
            ],
            "store_uri": [
                125
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "GbfsRentalUris": {
            "android": [
                125
            ],
            "ios": [
                125
            ],
            "web": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsStationInformation": {
            "address": [
                125
            ],
            "capacity": [
                76
            ],
            "contact_phone": [
                125
            ],
            "cross_street": [
                125
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
                125
            ],
            "parking_hoop": [
                76
            ],
            "parking_type": [
                125
            ],
            "post_code": [
                125
            ],
            "region": [
                68
            ],
            "rental_methods": [
                126
            ],
            "short_name": [
                125
            ],
            "station_area": [
                74
            ],
            "station_id": [
                125
            ],
            "status": [
                62
            ],
            "__typename": [
                125
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
                125
            ],
            "vehicle_docks_available": [
                71
            ],
            "vehicle_types_available": [
                73
            ],
            "__typename": [
                125
            ]
        },
        "GbfsSystemAlert": {
            "alert_id": [
                125
            ],
            "description": [
                125
            ],
            "last_updated": [
                76
            ],
            "summary": [
                125
            ],
            "times": [
                47
            ],
            "type": [
                125
            ],
            "url": [
                125
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "GbfsSystemHour": {
            "days": [
                126
            ],
            "end_time": [
                125
            ],
            "start_time": [
                125
            ],
            "user_types": [
                126
            ],
            "__typename": [
                125
            ]
        },
        "GbfsSystemInformation": {
            "brand_assets": [
                49
            ],
            "email": [
                125
            ],
            "feed_contact_email": [
                125
            ],
            "language": [
                125
            ],
            "license_url": [
                125
            ],
            "name": [
                125
            ],
            "operator": [
                125
            ],
            "phone_number": [
                125
            ],
            "privacy_last_updated": [
                15
            ],
            "privacy_url": [
                125
            ],
            "purchase_url": [
                125
            ],
            "rental_apps": [
                59
            ],
            "short_name": [
                125
            ],
            "start_date": [
                15
            ],
            "system_id": [
                125
            ],
            "terms_last_updated": [
                15
            ],
            "terms_url": [
                125
            ],
            "timezone": [
                125
            ],
            "url": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsSystemPricingPlan": {
            "currency": [
                125
            ],
            "description": [
                125
            ],
            "is_taxable": [
                6
            ],
            "name": [
                125
            ],
            "per_km_pricing": [
                57
            ],
            "per_min_pricing": [
                57
            ],
            "plan_id": [
                125
            ],
            "price": [
                45
            ],
            "surge_pricing": [
                6
            ],
            "url": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsSystemRegion": {
            "name": [
                125
            ],
            "region_id": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsSystemVersion": {
            "url": [
                125
            ],
            "version": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "GbfsVehicleAssets": {
            "icon_last_modified": [
                15
            ],
            "icon_url": [
                125
            ],
            "icon_url_dark": [
                125
            ],
            "__typename": [
                125
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
                125
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
                125
            ],
            "country_code": [
                125
            ],
            "default_pricing_plan": [
                67
            ],
            "default_reserve_time": [
                76
            ],
            "eco_label": [
                125
            ],
            "eco_sticker": [
                125
            ],
            "form_factor": [
                125
            ],
            "gco_2_km": [
                76
            ],
            "make": [
                125
            ],
            "max_permitted_speed": [
                76
            ],
            "max_range_meters": [
                45
            ],
            "model": [
                125
            ],
            "name": [
                125
            ],
            "pricing_plans": [
                67
            ],
            "propulsion_type": [
                125
            ],
            "rated_power": [
                76
            ],
            "rental_uris": [
                60
            ],
            "return_constraint": [
                125
            ],
            "rider_capacity": [
                76
            ],
            "vehicle_accessories": [
                126
            ],
            "vehicle_assets": [
                70
            ],
            "vehicle_image": [
                125
            ],
            "vehicle_type_id": [
                125
            ],
            "wheel_count": [
                76
            ],
            "__typename": [
                125
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
                125
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
                128
            ],
            "from": [
                138
            ],
            "legs": [
                79
            ],
            "start_time": [
                128
            ],
            "to": [
                138
            ],
            "__typename": [
                125
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
                128
            ],
            "from": [
                138
            ],
            "geometry": [
                83
            ],
            "start_time": [
                128
            ],
            "steps": [
                114
            ],
            "to": [
                138
            ],
            "__typename": [
                125
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
                125
            ],
            "level_index": [
                45
            ],
            "level_name": [
                125
            ],
            "stops": [
                116
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "LicenseValue": {},
        "LineString": {},
        "Map": {},
        "Me": {
            "email": [
                125
            ],
            "external_data": [
                84
            ],
            "id": [
                125
            ],
            "name": [
                125
            ],
            "__typename": [
                125
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
                125
            ],
            "generated": [
                7
            ],
            "id": [
                76
            ],
            "name": [
                125
            ],
            "onestop_id": [
                125
            ],
            "search_rank": [
                125
            ],
            "short_name": [
                125
            ],
            "tags": [
                127
            ],
            "website": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "OperatorFilter": {
            "adm0_iso": [
                125
            ],
            "adm0_name": [
                125
            ],
            "adm1_iso": [
                125
            ],
            "adm1_name": [
                125
            ],
            "agency_id": [
                125
            ],
            "bbox": [
                8
            ],
            "city_name": [
                125
            ],
            "feed_onestop_id": [
                125
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
                125
            ],
            "search": [
                125
            ],
            "tags": [
                127
            ],
            "within": [
                95
            ],
            "__typename": [
                125
            ]
        },
        "Pathway": {
            "from_stop": [
                116
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
                125
            ],
            "pathway_mode": [
                76
            ],
            "reverse_signposted_as": [
                125
            ],
            "signposted_as": [
                125
            ],
            "stair_count": [
                76
            ],
            "to_stop": [
                116
            ],
            "traversal_time": [
                76
            ],
            "__typename": [
                125
            ]
        },
        "PathwayFilter": {
            "pathway_mode": [
                76
            ],
            "__typename": [
                125
            ]
        },
        "Place": {
            "adm0_name": [
                125
            ],
            "adm1_name": [
                125
            ],
            "city_name": [
                125
            ],
            "count": [
                76
            ],
            "operators": [
                86
            ],
            "__typename": [
                125
            ]
        },
        "PlaceAggregationLevel": {},
        "PlaceFilter": {
            "adm0_name": [
                125
            ],
            "adm1_name": [
                125
            ],
            "city_name": [
                125
            ],
            "min_rank": [
                45
            ],
            "__typename": [
                125
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
                125
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
                102,
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
                        104
                    ]
                }
            ],
            "stops": [
                116,
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
                        118
                    ]
                }
            ],
            "trips": [
                129,
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
                        130
                    ]
                }
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "RTTranslation": {
            "language": [
                125
            ],
            "text": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "RTTripDescriptor": {
            "direction_id": [
                76
            ],
            "route_id": [
                125
            ],
            "schedule_relationship": [
                125
            ],
            "start_date": [
                15
            ],
            "start_time": [
                111
            ],
            "trip_id": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "RTVehicleDescriptor": {
            "id": [
                125
            ],
            "label": [
                125
            ],
            "license_plate": [
                125
            ],
            "__typename": [
                125
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
                        76
                    ]
                }
            ],
            "census_geographies": [
                11,
                {
                    "layer": [
                        125,
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
                125
            ],
            "feed_version": [
                34
            ],
            "feed_version_sha1": [
                125
            ],
            "geometries": [
                105,
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
                106,
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
                125
            ],
            "patterns": [
                109
            ],
            "route_attribute": [
                103
            ],
            "route_color": [
                125
            ],
            "route_desc": [
                125
            ],
            "route_id": [
                125
            ],
            "route_long_name": [
                125
            ],
            "route_short_name": [
                125
            ],
            "route_sort_order": [
                76
            ],
            "route_stop_buffer": [
                108,
                {
                    "radius": [
                        45
                    ]
                }
            ],
            "route_stops": [
                107,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "route_text_color": [
                125
            ],
            "route_type": [
                76
            ],
            "route_url": [
                125
            ],
            "search_rank": [
                125
            ],
            "stops": [
                116,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        118
                    ]
                }
            ],
            "trips": [
                129,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        130
                    ]
                }
            ],
            "__typename": [
                125
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
                125
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
                125
            ],
            "feed_version_sha1": [
                125
            ],
            "license": [
                81
            ],
            "near": [
                94
            ],
            "onestop_id": [
                125
            ],
            "onestop_ids": [
                125
            ],
            "operator_onestop_id": [
                125
            ],
            "route_id": [
                125
            ],
            "route_type": [
                76
            ],
            "search": [
                125
            ],
            "serviced": [
                7
            ],
            "within": [
                95
            ],
            "__typename": [
                125
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
                125
            ]
        },
        "RouteHeadway": {
            "departures": [
                111
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
                116
            ],
            "stop_trip_count": [
                76
            ],
            "__typename": [
                125
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
                102
            ],
            "route_id": [
                76
            ],
            "stop": [
                116
            ],
            "stop_id": [
                76
            ],
            "__typename": [
                125
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
                125
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
                129,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "__typename": [
                125
            ]
        },
        "ScheduleRelationship": {},
        "Seconds": {},
        "ServiceCoversFilter": {
            "end_date": [
                15
            ],
            "fetched_after": [
                128
            ],
            "fetched_before": [
                128
            ],
            "start_date": [
                15
            ],
            "__typename": [
                125
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
                125
            ],
            "__typename": [
                125
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
                128
            ],
            "geometry_offset": [
                76
            ],
            "instruction": [
                125
            ],
            "mode": [
                115
            ],
            "start_time": [
                128
            ],
            "to": [
                138
            ],
            "__typename": [
                125
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
                122,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        124
                    ]
                }
            ],
            "census_geographies": [
                11,
                {
                    "layer": [
                        125,
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
                116,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "departures": [
                122,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        124
                    ]
                }
            ],
            "directions": [
                17,
                {
                    "depart_at": [
                        128
                    ],
                    "from": [
                        139
                    ],
                    "mode": [
                        115
                    ],
                    "to": [
                        139
                    ]
                }
            ],
            "external_reference": [
                117
            ],
            "feed_onestop_id": [
                125
            ],
            "feed_version": [
                34
            ],
            "feed_version_sha1": [
                125
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
                116,
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
                119,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        120
                    ]
                }
            ],
            "onestop_id": [
                125
            ],
            "parent": [
                116
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
                121
            ],
            "platform_code": [
                125
            ],
            "route_stops": [
                107,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "search_rank": [
                125
            ],
            "stop_code": [
                125
            ],
            "stop_desc": [
                125
            ],
            "stop_id": [
                125
            ],
            "stop_name": [
                125
            ],
            "stop_times": [
                122,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        124
                    ]
                }
            ],
            "stop_timezone": [
                125
            ],
            "stop_url": [
                125
            ],
            "tts_stop_name": [
                125
            ],
            "wheelchair_boarding": [
                76
            ],
            "zone_id": [
                125
            ],
            "__typename": [
                125
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
                116
            ],
            "target_feed_onestop_id": [
                125
            ],
            "target_stop_id": [
                125
            ],
            "__typename": [
                125
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
                125
            ],
            "feed_version_sha1": [
                125
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
                125
            ],
            "onestop_ids": [
                125
            ],
            "search": [
                125
            ],
            "served_by_onestop_ids": [
                125
            ],
            "served_by_route_type": [
                76
            ],
            "serviced": [
                7
            ],
            "stop_code": [
                125
            ],
            "stop_id": [
                125
            ],
            "within": [
                95
            ],
            "__typename": [
                125
            ]
        },
        "StopObservation": {
            "agency_id": [
                125
            ],
            "from_stop_id": [
                125
            ],
            "observed_arrival_time": [
                111
            ],
            "observed_departure_time": [
                111
            ],
            "route_id": [
                125
            ],
            "schedule_relationship": [
                125
            ],
            "scheduled_arrival_time": [
                111
            ],
            "scheduled_departure_time": [
                111
            ],
            "source": [
                125
            ],
            "stop_sequence": [
                76
            ],
            "to_stop_id": [
                125
            ],
            "trip_id": [
                125
            ],
            "trip_start_date": [
                15
            ],
            "trip_start_time": [
                111
            ],
            "__typename": [
                125
            ]
        },
        "StopObservationFilter": {
            "feed_version_id": [
                76
            ],
            "source": [
                125
            ],
            "trip_start_date": [
                15
            ],
            "__typename": [
                125
            ]
        },
        "StopPlace": {
            "adm0_iso": [
                125
            ],
            "adm0_name": [
                125
            ],
            "adm1_iso": [
                125
            ],
            "adm1_name": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "StopTime": {
            "arrival": [
                123
            ],
            "arrival_time": [
                111
            ],
            "continuous_drop_off": [
                76
            ],
            "continuous_pickup": [
                76
            ],
            "departure": [
                123
            ],
            "departure_time": [
                111
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
                116
            ],
            "stop_headsign": [
                125
            ],
            "stop_sequence": [
                76
            ],
            "timepoint": [
                76
            ],
            "trip": [
                129
            ],
            "__typename": [
                125
            ]
        },
        "StopTimeEvent": {
            "delay": [
                76
            ],
            "estimated": [
                111
            ],
            "estimated_utc": [
                128
            ],
            "scheduled": [
                111
            ],
            "stop_timezone": [
                125
            ],
            "uncertainty": [
                76
            ],
            "__typename": [
                125
            ]
        },
        "StopTimeFilter": {
            "allow_previous_route_onestop_ids": [
                7
            ],
            "end": [
                111
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
                125
            ],
            "service_date": [
                15
            ],
            "start": [
                111
            ],
            "start_time": [
                76
            ],
            "use_service_window": [
                7
            ],
            "__typename": [
                125
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
                125
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
                102
            ],
            "schedule_relationship": [
                110
            ],
            "shape": [
                113
            ],
            "stop_pattern_id": [
                76
            ],
            "stop_times": [
                122,
                {
                    "limit": [
                        76
                    ],
                    "where": [
                        131
                    ]
                }
            ],
            "timestamp": [
                128
            ],
            "trip_headsign": [
                125
            ],
            "trip_id": [
                125
            ],
            "trip_short_name": [
                125
            ],
            "wheelchair_accessible": [
                76
            ],
            "__typename": [
                125
            ]
        },
        "TripFilter": {
            "feed_onestop_id": [
                125
            ],
            "feed_version_sha1": [
                125
            ],
            "license": [
                81
            ],
            "route_ids": [
                76
            ],
            "route_onestop_ids": [
                125
            ],
            "service_date": [
                15
            ],
            "stop_pattern_id": [
                76
            ],
            "trip_id": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "TripStopTimeFilter": {
            "end": [
                111
            ],
            "start": [
                111
            ],
            "__typename": [
                125
            ]
        },
        "Upload": {},
        "ValidationRealtimeResult": {
            "json": [
                84
            ],
            "url": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "ValidationResult": {
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
            "errors": [
                136
            ],
            "failure_reason": [
                125
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
                133
            ],
            "routes": [
                102,
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
                        125
                    ]
                }
            ],
            "sha1": [
                125
            ],
            "stops": [
                116,
                {
                    "limit": [
                        76
                    ]
                }
            ],
            "success": [
                7
            ],
            "warnings": [
                136
            ],
            "__typename": [
                125
            ]
        },
        "ValidationResultError": {
            "entity_id": [
                125
            ],
            "error_type": [
                125
            ],
            "field": [
                125
            ],
            "filename": [
                125
            ],
            "message": [
                125
            ],
            "value": [
                125
            ],
            "__typename": [
                125
            ]
        },
        "ValidationResultErrorGroup": {
            "count": [
                76
            ],
            "error_type": [
                125
            ],
            "errors": [
                135
            ],
            "filename": [
                125
            ],
            "limit": [
                76
            ],
            "__typename": [
                125
            ]
        },
        "VehiclePosition": {
            "congestion_level": [
                125
            ],
            "current_status": [
                125
            ],
            "current_stop_sequence": [
                76
            ],
            "position": [
                93
            ],
            "stop_id": [
                116
            ],
            "timestamp": [
                128
            ],
            "vehicle": [
                100
            ],
            "__typename": [
                125
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
                125
            ],
            "__typename": [
                125
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
                125
            ],
            "__typename": [
                125
            ]
        }
    }
}