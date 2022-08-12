import{linkTypeMap as _,createClient as o,generateGraphqlOperation as y,assertSameVersion as p}from"@genql/runtime";var n={scalars:[5,6,12,16,18,27,28,42,44,45,46,50,51,56,58,64,71,72,75,81,82,83,86],types:{Agency:{agency_email:[81],agency_fare_url:[81],agency_id:[81],agency_lang:[81],agency_name:[81],agency_phone:[81],agency_timezone:[81],agency_url:[81],alerts:[4],census_geographies:[9,{layer:[81,"String!"],limit:[46],radius:[42]}],feed_onestop_id:[81],feed_version:[31],feed_version_sha1:[81],geometry:[58],id:[46],onestop_id:[81],operator:[52],places:[2,{limit:[46],where:[3]}],routes:[65,{limit:[46],where:[66]}],search_rank:[81],__typename:[81]},AgencyFilter:{adm0_iso:[81],adm0_name:[81],adm1_iso:[81],adm1_name:[81],agency_id:[81],agency_name:[81],city_name:[81],feed_onestop_id:[81],feed_version_sha1:[81],near:[57],onestop_id:[81],search:[81],within:[58],__typename:[81]},AgencyPlace:{adm0_name:[81],adm1_name:[81],city_name:[81],rank:[42],__typename:[81]},AgencyPlaceFilter:{min_rank:[42],__typename:[81]},Alert:{active_period:[60],cause:[81],description_text:[61],effect:[81],header_text:[61],severity_level:[81],tts_description_text:[61],tts_header_text:[61],url:[61],__typename:[81]},Any:{},Boolean:{},Calendar:{added_dates:[12,{limit:[46]}],end_date:[12],friday:[46],id:[46],monday:[46],removed_dates:[12,{limit:[46]}],saturday:[46],service_id:[81],start_date:[12],sunday:[46],thursday:[46],tuesday:[46],wednesday:[46],__typename:[81]},CalendarDateFilter:{date:[12],exception_type:[46],__typename:[81]},CensusGeography:{aland:[42],awater:[42],geoid:[81],geometry:[58],id:[46],layer_name:[81],name:[81],values:[11,{limit:[46],table_names:[81,"[String!]!"]}],__typename:[81]},CensusTable:{id:[46],table_group:[81],table_name:[81],table_title:[81],__typename:[81]},CensusValue:{table:[10],values:[5],__typename:[81]},Date:{},DirectionRequest:{depart_at:[83],from:[92],mode:[75],to:[92],__typename:[81]},Directions:{data_source:[81],destination:[91],distance:[15],duration:[17],end_time:[83],exception:[81],itineraries:[47],origin:[91],start_time:[83],success:[6],__typename:[81]},Distance:{distance:[42],units:[16],__typename:[81]},DistanceUnit:{},Duration:{duration:[42],units:[18],__typename:[81]},DurationUnit:{},Feed:{associated_operators:[52],authorization:[20],feed_fetches:[21,{limit:[46],where:[22]}],feed_state:[29],feed_versions:[31,{limit:[46],where:[35]}],file:[81],id:[46],languages:[81],license:[25],name:[81],onestop_id:[81],search_rank:[81],spec:[28],tags:[82],urls:[30],__typename:[81]},FeedAuthorization:{info_url:[81],param_name:[81],type:[81],__typename:[81]},FeedFetch:{fetch_error:[81],fetched_at:[83],id:[46],response_code:[46],response_sha1:[81],response_size:[46],success:[6],url:[81],url_type:[81],__typename:[81]},FeedFetchFilter:{success:[6],__typename:[81]},FeedFilter:{fetch_error:[6],import_status:[45],onestop_id:[81],search:[81],source_url:[26],spec:[28],tags:[82],__typename:[81]},FeedInfo:{default_lang:[81],feed_contact_email:[81],feed_contact_url:[81],feed_end_date:[12],feed_lang:[81],feed_publisher_name:[81],feed_publisher_url:[81],feed_start_date:[12],feed_version:[81],id:[46],__typename:[81]},FeedLicense:{attribution_instructions:[81],attribution_text:[81],commercial_use_allowed:[81],create_derived_product:[81],redistribution_allowed:[81],share_alike_optional:[81],spdx_identifier:[81],url:[81],use_without_attribution:[81],__typename:[81]},FeedSourceUrl:{case_sensitive:[6],type:[27],url:[81],__typename:[81]},FeedSourceUrlTypes:{},FeedSpecTypes:{},FeedState:{feed_version:[31],id:[46],__typename:[81]},FeedUrls:{gbfs_auto_discovery:[81],mds_provider:[81],realtime_alerts:[81],realtime_trip_updates:[81],realtime_vehicle_positions:[81],static_current:[81],static_historic:[81],static_planned:[81],__typename:[81]},FeedVersion:{agencies:[0,{limit:[46],where:[1]}],created_by:[81],description:[81],earliest_calendar_date:[12],feed:[19],feed_infos:[24,{limit:[46]}],feed_version_gtfs_import:[36],fetched_at:[83],files:[34,{limit:[46]}],geometry:[58],id:[46],latest_calendar_date:[12],name:[81],routes:[65,{limit:[46],where:[66]}],service_levels:[38,{limit:[46],where:[39]}],sha1:[81],stops:[76,{limit:[46],where:[77]}],trips:[84,{limit:[46],where:[85]}],updated_by:[81],url:[81],__typename:[81]},FeedVersionDeleteResult:{success:[6],__typename:[81]},FeedVersionFetchResult:{feed_version:[31],fetch_error:[81],found_dir_sha1:[6],found_sha1:[6],__typename:[81]},FeedVersionFileInfo:{csv_like:[6],header:[81],id:[46],name:[81],rows:[46],sha1:[81],size:[46],__typename:[81]},FeedVersionFilter:{feed_ids:[46],feed_onestop_id:[81],import_status:[45],sha1:[81],__typename:[81]},FeedVersionGtfsImport:{created_at:[83],entity_count:[5],exception_log:[81],id:[46],in_progress:[6],interpolated_stop_time_count:[46],schedule_removed:[6],skip_entity_error_count:[5],skip_entity_filter_count:[5],skip_entity_marked_count:[5],skip_entity_reference_count:[5],success:[6],updated_at:[83],warning_count:[5],__typename:[81]},FeedVersionImportResult:{success:[6],__typename:[81]},FeedVersionServiceLevel:{end_date:[12],friday:[46],id:[46],monday:[46],saturday:[46],start_date:[12],sunday:[46],thursday:[46],tuesday:[46],wednesday:[46],__typename:[81]},FeedVersionServiceLevelFilter:{end_date:[12],start_date:[12],__typename:[81]},FeedVersionSetInput:{description:[81],name:[81],__typename:[81]},FeedVersionUnimportResult:{success:[6],__typename:[81]},Float:{},Frequency:{end_time:[72],exact_times:[46],headway_secs:[46],id:[46],start_time:[72],__typename:[81]},Geometry:{},ImportStatus:{},Int:{},Itinerary:{distance:[15],duration:[17],end_time:[83],from:[91],legs:[48],start_time:[83],to:[91],__typename:[81]},Leg:{distance:[15],duration:[17],end_time:[83],from:[91],geometry:[50],start_time:[83],steps:[74],to:[91],__typename:[81]},Level:{id:[46],level_id:[81],level_index:[42],level_name:[81],__typename:[81]},LineString:{},Map:{},Operator:{agencies:[0],feeds:[19,{limit:[46],where:[23]}],file:[81],generated:[6],id:[46],name:[81],onestop_id:[81],search_rank:[81],short_name:[81],tags:[82],website:[81],__typename:[81]},OperatorFilter:{adm0_iso:[81],adm0_name:[81],adm1_iso:[81],adm1_name:[81],agency_id:[81],city_name:[81],feed_onestop_id:[81],merged:[6],onestop_id:[81],search:[81],tags:[82],__typename:[81]},Pathway:{from_stop:[76],id:[46],is_bidirectional:[46],length:[42],max_slope:[42],min_width:[42],pathway_id:[81],pathway_mode:[46],reverse_signposted_as:[81],signposted_as:[81],stair_count:[46],to_stop:[76],traversal_time:[46],__typename:[81]},PathwayFilter:{pathway_mode:[46],__typename:[81]},Point:{},PointRadius:{lat:[42],lon:[42],radius:[42],__typename:[81]},Polygon:{},Query:{agencies:[0,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[1]}],directions:[14,{where:[13,"DirectionRequest!"]}],feed_versions:[31,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[35]}],feeds:[19,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[23]}],operators:[52,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[53]}],routes:[65,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[66]}],stops:[76,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[77]}],trips:[84,{after:[46],ids:[46,"[Int!]"],limit:[46],where:[85]}],__typename:[81]},RTTimeRange:{end:[46],start:[46],__typename:[81]},RTTranslation:{language:[81],text:[81],__typename:[81]},RTTripDescriptor:{direction_id:[46],route_id:[81],schedule_relationship:[81],start_date:[12],start_time:[72],trip_id:[81],__typename:[81]},RTVehicleDescriptor:{id:[81],label:[81],license_plate:[81],__typename:[81]},Role:{},Route:{agency:[0],alerts:[4],census_geographies:[9,{layer:[81,"String!"],limit:[46],radius:[42]}],continuous_drop_off:[46],continuous_pickup:[46],feed_onestop_id:[81],feed_version:[31],feed_version_sha1:[81],geometries:[67,{limit:[46]}],geometry:[44],headways:[68,{limit:[46]}],id:[46],onestop_id:[81],route_color:[81],route_desc:[81],route_id:[81],route_long_name:[81],route_short_name:[81],route_sort_order:[46],route_stop_buffer:[70,{radius:[42]}],route_stops:[69,{limit:[46]}],route_text_color:[81],route_type:[46],route_url:[81],search_rank:[81],stops:[76,{limit:[46],where:[77]}],trips:[84,{limit:[46],where:[85]}],__typename:[81]},RouteFilter:{agency_ids:[46],allow_previous_onestop_ids:[6],feed_onestop_id:[81],feed_version_sha1:[81],near:[57],onestop_id:[81],onestop_ids:[81],operator_onestop_id:[81],route_id:[81],route_type:[46],search:[81],within:[58],__typename:[81]},RouteGeometry:{combined_geometry:[44],first_point_max_distance:[42],generated:[6],geometry:[50],length:[42],max_segment_length:[42],__typename:[81]},RouteHeadway:{departures:[72],direction_id:[46],dow_category:[46],headway_secs:[46],service_date:[12],stop:[76],stop_trip_count:[46],__typename:[81]},RouteStop:{agency:[0],agency_id:[46],id:[46],route:[65],route_id:[46],stop:[76],stop_id:[46],__typename:[81]},RouteStopBuffer:{stop_buffer:[44],stop_convexhull:[58],stop_points:[44],__typename:[81]},ScheduleRelationship:{},Seconds:{},Shape:{generated:[6],geometry:[50],id:[46],shape_id:[81],__typename:[81]},Step:{distance:[15],duration:[17],end_time:[83],geometry_offset:[46],instruction:[81],mode:[75],start_time:[83],to:[91],__typename:[81]},StepMode:{},Stop:{alerts:[4],arrivals:[78,{limit:[46],where:[80]}],census_geographies:[9,{layer:[81,"String!"],limit:[46],radius:[42]}],children:[76,{limit:[46]}],departures:[78,{limit:[46],where:[80]}],directions:[14,{depart_at:[83],from:[92],mode:[75],to:[92]}],feed_onestop_id:[81],feed_version:[31],feed_version_sha1:[81],geometry:[56],id:[46],level:[49],location_type:[46],onestop_id:[81],parent:[76],pathways_from_stop:[54,{limit:[46]}],pathways_to_stop:[54,{limit:[46]}],platform_code:[81],route_stops:[69,{limit:[46]}],search_rank:[81],stop_code:[81],stop_desc:[81],stop_id:[81],stop_name:[81],stop_times:[78,{limit:[46],where:[80]}],stop_timezone:[81],stop_url:[81],tts_stop_name:[81],wheelchair_boarding:[46],zone_id:[81],__typename:[81]},StopFilter:{agency_ids:[46],allow_previous_onestop_ids:[6],feed_onestop_id:[81],feed_version_sha1:[81],near:[57],onestop_id:[81],onestop_ids:[81],search:[81],served_by_onestop_ids:[81],stop_code:[81],stop_id:[81],within:[58],__typename:[81]},StopTime:{arrival:[79],arrival_time:[72],continuous_drop_off:[46],continuous_pickup:[46],departure:[79],departure_time:[72],drop_off_type:[46],interpolated:[46],pickup_type:[46],service_date:[12],stop:[76],stop_headsign:[81],stop_sequence:[46],timepoint:[46],trip:[84],__typename:[81]},StopTimeEvent:{delay:[46],estimated:[72],estimated_utc:[83],scheduled:[72],stop_timezone:[81],uncertainty:[46],__typename:[81]},StopTimeFilter:{allow_previous_route_onestop_ids:[6],end:[72],end_time:[46],exclude_first:[6],exclude_last:[6],next:[46],route_onestop_ids:[81],service_date:[12],start:[72],start_time:[46],use_service_window:[6],__typename:[81]},String:{},Tags:{},Time:{},Trip:{alerts:[4],bikes_allowed:[46],block_id:[81],calendar:[7],direction_id:[46],feed_version:[31],frequencies:[43,{limit:[46]}],id:[46],route:[65],schedule_relationship:[71],shape:[73],stop_pattern_id:[46],stop_times:[78,{limit:[46]}],timestamp:[83],trip_headsign:[81],trip_id:[81],trip_short_name:[81],wheelchair_accessible:[46],__typename:[81]},TripFilter:{feed_onestop_id:[81],feed_version_sha1:[81],route_ids:[46],route_onestop_ids:[81],service_date:[12],trip_id:[81],__typename:[81]},Upload:{},ValidationResult:{agencies:[0,{limit:[46]}],earliest_calendar_date:[12],errors:[89],failure_reason:[81],feed_infos:[24,{limit:[46]}],files:[34],latest_calendar_date:[12],routes:[65,{limit:[46]}],service_levels:[38,{limit:[46],route_id:[81]}],sha1:[81],stops:[76,{limit:[46]}],success:[6],warnings:[89],__typename:[81]},ValidationResultError:{entity_id:[81],error_type:[81],field:[81],filename:[81],message:[81],value:[81],__typename:[81]},ValidationResultErrorGroup:{count:[46],error_type:[81],errors:[88],filename:[81],limit:[46],__typename:[81]},VehiclePosition:{congestion_level:[81],current_status:[81],current_stop_sequence:[46],position:[56],stop_id:[76],timestamp:[83],vehicle:[63],__typename:[81]},Waypoint:{lat:[42],lon:[42],name:[81],__typename:[81]},WaypointInput:{lat:[42],lon:[42],name:[81],__typename:[81]}}};var r=_(n),m="2.10.0";p(m);var s=function(t){t=t||{};var e={url:void 0,queryRoot:r.Query,mutationRoot:r.Mutation,subscriptionRoot:r.Subscription};for(var i in t)e[i]=t[i];return o(e)};var g=({apiKey:t,...e})=>{e.batch=e.batch?e.batch:!1,e.url=e.url??"https://transit.land/api/v2/query",e.headers={...e.headers,apiKey:t};let{query:i,chain:a}=s(e);return{query:i,chain:a}};export{g as createClient};
//# sourceMappingURL=index.mjs.map