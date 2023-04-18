// @ts-nocheck
export type Scalars = {
    Any: any,
    Bool: any,
    Boolean: boolean,
    Date: string,
    Float: number,
    Geometry: GeoJSON.Geometry,
    Int: number,
    Key: any,
    LineString: GeoJSON.LineString,
    Map: any,
    Point: GeoJSON.Point,
    Polygon: GeoJSON.Polygon,
    Seconds: string,
    String: string,
    Strings: any,
    Tags: {[k: string]: string},
    Time: string,
    Upload: any,
}


/** See https://gtfs.org/schedule/reference/#agencytxt */
export interface Agency {
    agency_email: Scalars['String']
    agency_fare_url: Scalars['String']
    agency_id: Scalars['String']
    agency_lang: Scalars['String']
    agency_name: Scalars['String']
    agency_phone: Scalars['String']
    agency_timezone: Scalars['String']
    agency_url: Scalars['String']
    alerts?: Alert[]
    census_geographies?: CensusGeography[]
    feed_onestop_id?: Scalars['String']
    feed_version: FeedVersion
    feed_version_sha1?: Scalars['String']
    geometry?: Scalars['Polygon']
    id: Scalars['Int']
    onestop_id: Scalars['String']
    operator?: Operator
    places?: AgencyPlace[]
    routes: Route[]
    search_rank?: Scalars['String']
    __typename: 'Agency'
}

export interface AgencyPlace {
    adm0_name?: Scalars['String']
    adm1_name?: Scalars['String']
    city_name?: Scalars['String']
    rank?: Scalars['Float']
    __typename: 'AgencyPlace'
}


/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
export interface Alert {
    active_period?: RTTimeRange[]
    cause?: Scalars['String']
    description_text: RTTranslation[]
    effect?: Scalars['String']
    header_text: RTTranslation[]
    severity_level?: Scalars['String']
    tts_description_text?: RTTranslation[]
    tts_header_text?: RTTranslation[]
    url?: RTTranslation[]
    __typename: 'Alert'
}


/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
export interface Calendar {
    added_dates: Scalars['Date'][]
    end_date: Scalars['Date']
    friday: Scalars['Int']
    id: Scalars['Int']
    monday: Scalars['Int']
    removed_dates: Scalars['Date'][]
    saturday: Scalars['Int']
    service_id: Scalars['String']
    start_date: Scalars['Date']
    sunday: Scalars['Int']
    thursday: Scalars['Int']
    tuesday: Scalars['Int']
    wednesday: Scalars['Int']
    __typename: 'Calendar'
}

export interface CensusGeography {
    aland?: Scalars['Float']
    awater?: Scalars['Float']
    geoid?: Scalars['String']
    geometry?: Scalars['Polygon']
    id: Scalars['Int']
    layer_name: Scalars['String']
    name?: Scalars['String']
    values: (CensusValue | undefined)[]
    __typename: 'CensusGeography'
}

export interface CensusTable {
    id: Scalars['Int']
    table_group: Scalars['String']
    table_name: Scalars['String']
    table_title: Scalars['String']
    __typename: 'CensusTable'
}

export interface CensusValue {
    table: CensusTable
    values: Scalars['Any']
    __typename: 'CensusValue'
}

export interface Directions {
    data_source?: Scalars['String']
    destination?: Waypoint
    distance?: Distance
    duration?: Duration
    end_time?: Scalars['Time']
    exception?: Scalars['String']
    itineraries?: Itinerary[]
    origin?: Waypoint
    start_time?: Scalars['Time']
    success: Scalars['Boolean']
    __typename: 'Directions'
}

export interface Distance {
    distance: Scalars['Float']
    units: DistanceUnit
    __typename: 'Distance'
}

export type DistanceUnit = 'KILOMETERS' | 'MILES'

export interface Duration {
    duration: Scalars['Float']
    units: DurationUnit
    __typename: 'Duration'
}

export type DurationUnit = 'SECONDS'


/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
export interface Feed {
    associated_operators?: Operator[]
    authorization?: FeedAuthorization
    feed_fetches?: FeedFetch[]
    feed_state?: FeedState
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions: FeedVersion[]
    file: Scalars['String']
    /** Unique integer ID */
    id: Scalars['Int']
    /** Language(s) included in this feed */
    languages?: Scalars['String'][]
    license?: FeedLicense
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name?: Scalars['String']
    /** Onestop ID for this feed */
    onestop_id: Scalars['String']
    search_rank?: Scalars['String']
    spec?: FeedSpecTypes
    tags?: Scalars['Tags']
    urls?: FeedUrls
    __typename: 'Feed'
}


/** Details on how to construct an HTTP request to access a protected resource */
export interface FeedAuthorization {
    /** Website to visit to sign up for an account */
    info_url: Scalars['String']
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name: Scalars['String']
    /** Method for inserting authorization secret into request */
    type: Scalars['String']
    __typename: 'FeedAuthorization'
}

export interface FeedFetch {
    fetch_error?: Scalars['String']
    fetched_at?: Scalars['Time']
    id: Scalars['Int']
    response_code?: Scalars['Int']
    response_sha1?: Scalars['String']
    response_size?: Scalars['Int']
    success?: Scalars['Boolean']
    url?: Scalars['String']
    url_type?: Scalars['String']
    __typename: 'FeedFetch'
}


/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
export interface FeedInfo {
    default_lang?: Scalars['String']
    feed_contact_email?: Scalars['String']
    feed_contact_url?: Scalars['String']
    feed_end_date?: Scalars['Date']
    feed_lang: Scalars['String']
    feed_publisher_name: Scalars['String']
    feed_publisher_url: Scalars['String']
    feed_start_date?: Scalars['Date']
    feed_version: Scalars['String']
    id: Scalars['Int']
    __typename: 'FeedInfo'
}


/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
export interface FeedLicense {
    /** Feed consumers must follow these instructions for how to provide attribution */
    attribution_instructions: Scalars['String']
    /** Feed consumers must include this particular text when using this feed */
    attribution_text: Scalars['String']
    /** Are feed consumers allowed to use the feed for commercial purposes? */
    commercial_use_allowed: Scalars['String']
    /** Are feed consumers allowed to create and share derived products from the feed? */
    create_derived_product: Scalars['String']
    /** Are feed consumers allowed to redistribute the feed in its entirety? */
    redistribution_allowed: Scalars['String']
    /** Are feed consumers allowed to keep their modifications of this feed private? */
    share_alike_optional: Scalars['String']
    /** SPDX identifier for a common license. See https://spdx.org/licenses/ */
    spdx_identifier: Scalars['String']
    /** URL for a custom license */
    url: Scalars['String']
    /** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
    use_without_attribution: Scalars['String']
    __typename: 'FeedLicense'
}

export type FeedSourceUrlTypes = 'gbfs_auto_discovery' | 'mds_provider' | 'realtime_alerts' | 'realtime_trip_updates' | 'realtime_vehicle_positions' | 'static_current' | 'static_historic' | 'static_hypothetical' | 'static_planned'


/** Type of data contained in a source feed */
export type FeedSpecTypes = 'GBFS' | 'GTFS' | 'GTFS_RT' | 'MDS'


/** Details on the current state of this feed, such as active version, last fetch time, etc. */
export interface FeedState {
    /** The active feed version for this feed */
    feed_version?: FeedVersion
    id: Scalars['Int']
    __typename: 'FeedState'
}


/** URL(s) from which Transitland sources a feed */
export interface FeedUrls {
    /** URL for GBFS feed `gbfs.json` auto-discovery file */
    gbfs_auto_discovery: Scalars['String']
    /** URL for MDS feed provider endpoint */
    mds_provider: Scalars['String']
    /** URL for GTFS Realtime Alert messages */
    realtime_alerts: Scalars['String']
    /** URL for GTFS Realtime TripUpdate messages */
    realtime_trip_updates: Scalars['String']
    /** URL for GTFS Realtime VehiclePosition messages */
    realtime_vehicle_positions: Scalars['String']
    /** URL for the static feed that represents today's service */
    static_current: Scalars['String']
    /** URLs for static feeds that represent past service that is no longer in effect  */
    static_historic: Scalars['String'][]
    /** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
    static_planned: Scalars['String']
    __typename: 'FeedUrls'
}


/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
export interface FeedVersion {
    agencies: Agency[]
    created_by?: Scalars['String']
    description?: Scalars['String']
    earliest_calendar_date: Scalars['Date']
    feed: Feed
    feed_infos: FeedInfo[]
    feed_version_gtfs_import?: FeedVersionGtfsImport
    fetched_at: Scalars['Time']
    file?: Scalars['String']
    /** Metadata for each text file present in the main directory of the zip archive  */
    files: FeedVersionFileInfo[]
    /** Convex hull around all active stops in the feed version */
    geometry?: Scalars['Polygon']
    id: Scalars['Int']
    latest_calendar_date: Scalars['Date']
    name?: Scalars['String']
    routes: Route[]
    service_levels: FeedVersionServiceLevel[]
    sha1: Scalars['String']
    stops: Stop[]
    trips: Trip[]
    updated_by?: Scalars['String']
    url: Scalars['String']
    __typename: 'FeedVersion'
}

export interface FeedVersionDeleteResult {
    success: Scalars['Boolean']
    __typename: 'FeedVersionDeleteResult'
}

export interface FeedVersionFetchResult {
    feed_version?: FeedVersion
    fetch_error?: Scalars['String']
    found_dir_sha1: Scalars['Boolean']
    found_sha1: Scalars['Boolean']
    __typename: 'FeedVersionFetchResult'
}

export interface FeedVersionFileInfo {
    csv_like: Scalars['Boolean']
    header: Scalars['String']
    id: Scalars['Int']
    name: Scalars['String']
    rows: Scalars['Int']
    sha1: Scalars['String']
    size: Scalars['Int']
    __typename: 'FeedVersionFileInfo'
}

export interface FeedVersionGtfsImport {
    created_at?: Scalars['Time']
    entity_count?: Scalars['Any']
    exception_log: Scalars['String']
    id: Scalars['Int']
    in_progress: Scalars['Boolean']
    interpolated_stop_time_count?: Scalars['Int']
    schedule_removed: Scalars['Boolean']
    skip_entity_error_count?: Scalars['Any']
    skip_entity_filter_count?: Scalars['Any']
    skip_entity_marked_count?: Scalars['Any']
    skip_entity_reference_count?: Scalars['Any']
    success: Scalars['Boolean']
    updated_at?: Scalars['Time']
    warning_count?: Scalars['Any']
    __typename: 'FeedVersionGtfsImport'
}

export interface FeedVersionImportResult {
    success: Scalars['Boolean']
    __typename: 'FeedVersionImportResult'
}

export interface FeedVersionServiceLevel {
    end_date: Scalars['Date']
    friday: Scalars['Int']
    id: Scalars['Int']
    monday: Scalars['Int']
    saturday: Scalars['Int']
    start_date: Scalars['Date']
    sunday: Scalars['Int']
    thursday: Scalars['Int']
    tuesday: Scalars['Int']
    wednesday: Scalars['Int']
    __typename: 'FeedVersionServiceLevel'
}

export interface FeedVersionUnimportResult {
    success: Scalars['Boolean']
    __typename: 'FeedVersionUnimportResult'
}


/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
export interface Frequency {
    end_time: Scalars['Seconds']
    exact_times: Scalars['Int']
    headway_secs: Scalars['Int']
    id: Scalars['Int']
    start_time: Scalars['Seconds']
    __typename: 'Frequency'
}

export interface GbfsAlertTime {
    end?: Scalars['Int']
    start?: Scalars['Int']
    __typename: 'GbfsAlertTime'
}

export interface GbfsBrandAsset {
    brand_image_url?: Scalars['String']
    brand_image_url_dark?: Scalars['String']
    brand_last_modified?: Scalars['Date']
    brand_terms_url?: Scalars['String']
    color?: Scalars['String']
    __typename: 'GbfsBrandAsset'
}

export interface GbfsFeed {
    alerts?: GbfsSystemAlert[]
    calendars?: GbfsSystemCalendar[]
    rental_hours?: GbfsSystemHour[]
    station_information?: GbfsStationInformation[]
    system_information?: GbfsSystemInformation
    __typename: 'GbfsFeed'
}

export interface GbfsFreeBikeStatus {
    available_until?: Scalars['Int']
    bike_id?: Scalars['String']
    current_fuel_percent?: Scalars['Float']
    current_range_meters?: Scalars['Float']
    feed?: GbfsFeed
    home_station?: GbfsStationInformation
    is_disabled?: Scalars['Bool']
    is_reserved?: Scalars['Bool']
    last_reported?: Scalars['Int']
    lat?: Scalars['Float']
    lon?: Scalars['Float']
    pricing_plan?: GbfsSystemPricingPlan
    rental_uris?: GbfsRentalUris
    station?: GbfsStationInformation
    vehicle_equipment?: Scalars['Strings']
    vehicle_type?: GbfsVehicleType
    __typename: 'GbfsFreeBikeStatus'
}

export interface GbfsGeofenceFeature {
    geometry?: Scalars['Geometry']
    type?: Scalars['String']
    __typename: 'GbfsGeofenceFeature'
}

export interface GbfsGeofenceProperty {
    end?: Scalars['Int']
    name?: Scalars['String']
    rules?: (GbfsGeofenceRule | undefined)[]
    start?: Scalars['Int']
    __typename: 'GbfsGeofenceProperty'
}

export interface GbfsGeofenceRule {
    maximum_speed_kph?: Scalars['Int']
    ride_allowed?: Scalars['Bool']
    ride_through_allowed?: Scalars['Bool']
    station_parking?: Scalars['Bool']
    vehicle_type?: GbfsVehicleType
    __typename: 'GbfsGeofenceRule'
}

export interface GbfsGeofenceZone {
    features?: GbfsGeofenceFeature[]
    type?: Scalars['String']
    __typename: 'GbfsGeofenceZone'
}

export interface GbfsPlanPrice {
    end?: Scalars['Int']
    interval?: Scalars['Int']
    rate?: Scalars['Float']
    start?: Scalars['Int']
    __typename: 'GbfsPlanPrice'
}

export interface GbfsRentalApp {
    discovery_uri?: Scalars['String']
    store_uri?: Scalars['String']
    __typename: 'GbfsRentalApp'
}

export interface GbfsRentalApps {
    android?: GbfsRentalApp
    ios?: GbfsRentalApp
    __typename: 'GbfsRentalApps'
}

export interface GbfsRentalUris {
    android?: Scalars['String']
    ios?: Scalars['String']
    web?: Scalars['String']
    __typename: 'GbfsRentalUris'
}

export interface GbfsStationInformation {
    address?: Scalars['String']
    capacity?: Scalars['Int']
    contact_phone?: Scalars['String']
    cross_street?: Scalars['String']
    feed?: GbfsFeed
    is_charging_station?: Scalars['Bool']
    is_valet_station?: Scalars['Bool']
    is_virtual_station?: Scalars['Bool']
    lat?: Scalars['Float']
    lon?: Scalars['Float']
    name?: Scalars['String']
    parking_hoop?: Scalars['Int']
    parking_type?: Scalars['String']
    post_code?: Scalars['String']
    region?: GbfsSystemRegion
    rental_methods?: Scalars['Strings']
    short_name?: Scalars['String']
    station_area?: Scalars['Geometry']
    station_id?: Scalars['String']
    status?: GbfsStationStatus
    __typename: 'GbfsStationInformation'
}

export interface GbfsStationStatus {
    is_installed?: Scalars['Bool']
    is_renting?: Scalars['Bool']
    is_returning?: Scalars['Bool']
    last_reported?: Scalars['Int']
    num_bikes_available?: Scalars['Int']
    num_bikes_disabled?: Scalars['Int']
    num_docks_available?: Scalars['Int']
    num_docks_disabled?: Scalars['Int']
    station_id?: Scalars['String']
    vehicle_docks_available?: GbfsVehicleDockAvailable[]
    vehicle_types_available?: GbfsVehicleTypeAvailable[]
    __typename: 'GbfsStationStatus'
}

export interface GbfsSystemAlert {
    alert_id?: Scalars['String']
    description?: Scalars['String']
    last_updated?: Scalars['Int']
    summary?: Scalars['String']
    times?: GbfsAlertTime[]
    type?: Scalars['String']
    url?: Scalars['String']
    __typename: 'GbfsSystemAlert'
}

export interface GbfsSystemCalendar {
    end_day?: Scalars['Int']
    end_month?: Scalars['Int']
    end_year?: Scalars['Int']
    start_day?: Scalars['Int']
    start_month?: Scalars['Int']
    start_year?: Scalars['Int']
    __typename: 'GbfsSystemCalendar'
}

export interface GbfsSystemHour {
    days?: Scalars['Strings']
    end_time?: Scalars['String']
    start_time?: Scalars['String']
    user_types?: Scalars['Strings']
    __typename: 'GbfsSystemHour'
}

export interface GbfsSystemInformation {
    brand_assets?: GbfsBrandAsset
    email?: Scalars['String']
    feed_contact_email?: Scalars['String']
    language?: Scalars['String']
    license_url?: Scalars['String']
    name?: Scalars['String']
    operator?: Scalars['String']
    phone_number?: Scalars['String']
    privacy_last_updated?: Scalars['Date']
    privacy_url?: Scalars['String']
    purchase_url?: Scalars['String']
    rental_apps?: GbfsRentalApps
    short_name?: Scalars['String']
    start_date?: Scalars['Date']
    system_id?: Scalars['String']
    terms_last_updated?: Scalars['Date']
    terms_url?: Scalars['String']
    timezone?: Scalars['String']
    url?: Scalars['String']
    __typename: 'GbfsSystemInformation'
}

export interface GbfsSystemPricingPlan {
    currency?: Scalars['String']
    description?: Scalars['String']
    is_taxable?: Scalars['Bool']
    name?: Scalars['String']
    per_km_pricing?: GbfsPlanPrice[]
    per_min_pricing?: GbfsPlanPrice[]
    plan_id?: Scalars['String']
    price?: Scalars['Float']
    surge_pricing?: Scalars['Bool']
    url?: Scalars['String']
    __typename: 'GbfsSystemPricingPlan'
}

export interface GbfsSystemRegion {
    name?: Scalars['String']
    region_id?: Scalars['String']
    __typename: 'GbfsSystemRegion'
}

export interface GbfsSystemVersion {
    url?: Scalars['String']
    version?: Scalars['String']
    __typename: 'GbfsSystemVersion'
}

export interface GbfsVehicleAssets {
    icon_last_modified?: Scalars['Date']
    icon_url?: Scalars['String']
    icon_url_dark?: Scalars['String']
    __typename: 'GbfsVehicleAssets'
}

export interface GbfsVehicleDockAvailable {
    count?: Scalars['Int']
    vehicle_types?: GbfsVehicleType[]
    __typename: 'GbfsVehicleDockAvailable'
}

export interface GbfsVehicleType {
    cargo_load_capacity?: Scalars['Int']
    cargo_volume_capacity?: Scalars['Int']
    color?: Scalars['String']
    country_code?: Scalars['String']
    default_pricing_plan?: GbfsSystemPricingPlan
    default_reserve_time?: Scalars['Int']
    eco_label?: Scalars['String']
    eco_sticker?: Scalars['String']
    form_factor?: Scalars['String']
    gco_2_km?: Scalars['Int']
    make?: Scalars['String']
    max_permitted_speed?: Scalars['Int']
    max_range_meters?: Scalars['Float']
    model?: Scalars['String']
    name?: Scalars['String']
    pricing_plans?: GbfsSystemPricingPlan[]
    propulsion_type?: Scalars['String']
    rated_power?: Scalars['Int']
    rental_uris?: GbfsRentalUris
    return_constraint?: Scalars['String']
    rider_capacity?: Scalars['Int']
    vehicle_accessories?: Scalars['Strings']
    vehicle_assets?: GbfsVehicleAssets
    vehicle_image?: Scalars['String']
    vehicle_type_id?: Scalars['String']
    wheel_count?: Scalars['Int']
    __typename: 'GbfsVehicleType'
}

export interface GbfsVehicleTypeAvailable {
    count?: Scalars['Int']
    num_bikes_disabled?: Scalars['Int']
    num_docks_available?: Scalars['Int']
    vehicle_type?: GbfsVehicleType
    __typename: 'GbfsVehicleTypeAvailable'
}

export type ImportStatus = 'ERROR' | 'IN_PROGRESS' | 'SUCCESS'

export interface Itinerary {
    distance: Distance
    duration: Duration
    end_time: Scalars['Time']
    from: Waypoint
    legs?: Leg[]
    start_time: Scalars['Time']
    to: Waypoint
    __typename: 'Itinerary'
}

export interface Leg {
    distance: Distance
    duration: Duration
    end_time: Scalars['Time']
    from?: Waypoint
    geometry: Scalars['LineString']
    start_time: Scalars['Time']
    steps?: Step[]
    to?: Waypoint
    __typename: 'Leg'
}


/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
export interface Level {
    geometry: Scalars['Polygon']
    id: Scalars['Int']
    level_id: Scalars['String']
    level_index: Scalars['Float']
    level_name: Scalars['String']
    stops?: Stop[]
    __typename: 'Level'
}

export type LicenseValue = 'EXCLUDE_NO' | 'NO' | 'UNKNOWN' | 'YES'


/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version. 
 * 
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
export interface Operator {
    agencies?: Agency[]
    feeds?: Feed[]
    file?: Scalars['String']
    generated: Scalars['Boolean']
    id: Scalars['Int']
    name?: Scalars['String']
    onestop_id?: Scalars['String']
    search_rank?: Scalars['String']
    short_name?: Scalars['String']
    tags?: Scalars['Tags']
    website?: Scalars['String']
    __typename: 'Operator'
}


/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
export interface Pathway {
    from_stop: Stop
    id: Scalars['Int']
    is_bidirectional: Scalars['Int']
    length: Scalars['Float']
    max_slope: Scalars['Float']
    min_width: Scalars['Float']
    pathway_id: Scalars['String']
    pathway_mode: Scalars['Int']
    reverse_signposted_as: Scalars['String']
    signposted_as: Scalars['String']
    stair_count: Scalars['Int']
    to_stop: Stop
    traversal_time: Scalars['Int']
    __typename: 'Pathway'
}

export interface Place {
    adm0_name?: Scalars['String']
    adm1_name?: Scalars['String']
    city_name?: Scalars['String']
    count: Scalars['Int']
    operators?: Operator[]
    __typename: 'Place'
}

export type PlaceAggregationLevel = 'ADM0' | 'ADM0_ADM1' | 'ADM0_ADM1_CITY' | 'ADM0_CITY' | 'ADM1_CITY' | 'CITY'

export interface Query {
    agencies: Agency[]
    bikes?: GbfsFreeBikeStatus[]
    directions: Directions
    docks?: GbfsStationInformation[]
    feed_versions: FeedVersion[]
    feeds: Feed[]
    operators: Operator[]
    places?: Place[]
    routes: Route[]
    stops: Stop[]
    trips: Trip[]
    __typename: 'Query'
}


/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
export interface RTTimeRange {
    end?: Scalars['Int']
    start?: Scalars['Int']
    __typename: 'RTTimeRange'
}


/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
export interface RTTranslation {
    language?: Scalars['String']
    text: Scalars['String']
    __typename: 'RTTranslation'
}


/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
export interface RTTripDescriptor {
    direction_id?: Scalars['Int']
    route_id?: Scalars['String']
    schedule_relationship?: Scalars['String']
    start_date?: Scalars['Date']
    start_time?: Scalars['Seconds']
    trip_id?: Scalars['String']
    __typename: 'RTTripDescriptor'
}


/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
export interface RTVehicleDescriptor {
    id?: Scalars['String']
    label?: Scalars['String']
    license_plate?: Scalars['String']
    __typename: 'RTVehicleDescriptor'
}

export type Role = 'ADMIN' | 'ANON' | 'USER'


/** See https://gtfs.org/schedule/reference/#routestxt */
export interface Route {
    agency: Agency
    alerts?: Alert[]
    census_geographies?: CensusGeography[]
    continuous_drop_off?: Scalars['Int']
    continuous_pickup?: Scalars['Int']
    feed_onestop_id: Scalars['String']
    feed_version: FeedVersion
    feed_version_sha1: Scalars['String']
    geometries: RouteGeometry[]
    geometry?: Scalars['Geometry']
    headways: RouteHeadway[]
    id: Scalars['Int']
    onestop_id?: Scalars['String']
    patterns?: RouteStopPattern[]
    route_attribute?: RouteAttribute
    route_color: Scalars['String']
    route_desc: Scalars['String']
    route_id: Scalars['String']
    route_long_name: Scalars['String']
    route_short_name: Scalars['String']
    route_sort_order: Scalars['Int']
    route_stop_buffer: RouteStopBuffer
    route_stops: RouteStop[]
    route_text_color: Scalars['String']
    route_type: Scalars['Int']
    route_url: Scalars['String']
    search_rank?: Scalars['String']
    stops: Stop[]
    trips: Trip[]
    __typename: 'Route'
}


/** MTC GTFS+ Extension: route_attributes.txt */
export interface RouteAttribute {
    category?: Scalars['Int']
    running_way?: Scalars['Int']
    subcategory?: Scalars['Int']
    __typename: 'RouteAttribute'
}

export interface RouteGeometry {
    combined_geometry?: Scalars['Geometry']
    first_point_max_distance?: Scalars['Float']
    /** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
    generated: Scalars['Boolean']
    geometry?: Scalars['LineString']
    length?: Scalars['Float']
    max_segment_length?: Scalars['Float']
    __typename: 'RouteGeometry'
}

export interface RouteHeadway {
    departures?: Scalars['Seconds'][]
    direction_id?: Scalars['Int']
    dow_category?: Scalars['Int']
    headway_secs?: Scalars['Int']
    service_date?: Scalars['Date']
    stop: Stop
    stop_trip_count?: Scalars['Int']
    __typename: 'RouteHeadway'
}

export interface RouteStop {
    agency: Agency
    agency_id: Scalars['Int']
    id: Scalars['Int']
    route: Route
    route_id: Scalars['Int']
    stop: Stop
    stop_id: Scalars['Int']
    __typename: 'RouteStop'
}

export interface RouteStopBuffer {
    stop_buffer?: Scalars['Geometry']
    stop_convexhull?: Scalars['Polygon']
    stop_points?: Scalars['Geometry']
    __typename: 'RouteStopBuffer'
}

export interface RouteStopPattern {
    count: Scalars['Int']
    direction_id: Scalars['Int']
    stop_pattern_id: Scalars['Int']
    trips?: Trip[]
    __typename: 'RouteStopPattern'
}

export type ScheduleRelationship = 'ADDED' | 'CANCELED' | 'SCHEDULED' | 'UNSCHEDULED'


/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
export interface Shape {
    generated: Scalars['Boolean']
    geometry: Scalars['LineString']
    id: Scalars['Int']
    shape_id: Scalars['String']
    __typename: 'Shape'
}

export interface Step {
    distance: Distance
    duration: Duration
    end_time: Scalars['Time']
    geometry_offset: Scalars['Int']
    instruction: Scalars['String']
    mode: StepMode
    start_time: Scalars['Time']
    to?: Waypoint
    __typename: 'Step'
}

export type StepMode = 'AUTO' | 'BICYCLE' | 'LINE' | 'TRANSIT' | 'WALK'


/** See https://gtfs.org/reference/static/#stopstxt */
export interface Stop {
    alerts?: Alert[]
    arrivals: StopTime[]
    census_geographies?: CensusGeography[]
    children?: Stop[]
    departures: StopTime[]
    directions: Directions
    external_reference?: StopExternalReference
    feed_onestop_id: Scalars['String']
    feed_version: FeedVersion
    feed_version_sha1: Scalars['String']
    geometry: Scalars['Point']
    id: Scalars['Int']
    level?: Level
    location_type: Scalars['Int']
    nearby_stops?: Stop[]
    observations?: StopObservation[]
    onestop_id: Scalars['String']
    parent?: Stop
    pathways_from_stop: Pathway[]
    pathways_to_stop: Pathway[]
    platform_code?: Scalars['String']
    route_stops: RouteStop[]
    search_rank?: Scalars['String']
    stop_code: Scalars['String']
    stop_desc: Scalars['String']
    stop_id: Scalars['String']
    stop_name: Scalars['String']
    stop_times: StopTime[]
    stop_timezone: Scalars['String']
    stop_url: Scalars['String']
    tts_stop_name?: Scalars['String']
    wheelchair_boarding: Scalars['Int']
    zone_id: Scalars['String']
    __typename: 'Stop'
}

export interface StopExternalReference {
    id: Scalars['Int']
    inactive?: Scalars['Boolean']
    target_active_stop?: Stop
    target_feed_onestop_id?: Scalars['String']
    target_stop_id?: Scalars['String']
    __typename: 'StopExternalReference'
}

export interface StopObservation {
    agency_id?: Scalars['String']
    from_stop_id?: Scalars['String']
    observed_arrival_time?: Scalars['Seconds']
    observed_departure_time?: Scalars['Seconds']
    route_id?: Scalars['String']
    schedule_relationship?: Scalars['String']
    scheduled_arrival_time?: Scalars['Seconds']
    scheduled_departure_time?: Scalars['Seconds']
    source?: Scalars['String']
    stop_sequence?: Scalars['Int']
    to_stop_id?: Scalars['String']
    trip_id?: Scalars['String']
    trip_start_date?: Scalars['Date']
    trip_start_time?: Scalars['Seconds']
    __typename: 'StopObservation'
}


/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
export interface StopTime {
    arrival: StopTimeEvent
    arrival_time: Scalars['Seconds']
    continuous_drop_off?: Scalars['Int']
    continuous_pickup?: Scalars['Int']
    departure: StopTimeEvent
    departure_time: Scalars['Seconds']
    drop_off_type?: Scalars['Int']
    interpolated?: Scalars['Int']
    pickup_type?: Scalars['Int']
    service_date?: Scalars['Date']
    shape_dist_traveled?: Scalars['Float']
    stop: Stop
    stop_headsign?: Scalars['String']
    stop_sequence: Scalars['Int']
    timepoint?: Scalars['Int']
    trip: Trip
    __typename: 'StopTime'
}

export interface StopTimeEvent {
    delay?: Scalars['Int']
    estimated?: Scalars['Seconds']
    estimated_utc?: Scalars['Time']
    scheduled?: Scalars['Seconds']
    stop_timezone: Scalars['String']
    uncertainty?: Scalars['Int']
    __typename: 'StopTimeEvent'
}


/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
export interface Trip {
    alerts?: Alert[]
    bikes_allowed: Scalars['Int']
    block_id: Scalars['String']
    calendar: Calendar
    direction_id: Scalars['Int']
    feed_version: FeedVersion
    frequencies: Frequency[]
    id: Scalars['Int']
    route: Route
    schedule_relationship?: ScheduleRelationship
    shape?: Shape
    stop_pattern_id: Scalars['Int']
    stop_times: (StopTime | undefined)[]
    timestamp?: Scalars['Time']
    trip_headsign: Scalars['String']
    trip_id: Scalars['String']
    trip_short_name: Scalars['String']
    wheelchair_accessible: Scalars['Int']
    __typename: 'Trip'
}

export interface ValidationResult {
    agencies: Agency[]
    earliest_calendar_date?: Scalars['Date']
    errors: ValidationResultErrorGroup[]
    failure_reason: Scalars['String']
    feed_infos: FeedInfo[]
    files: FeedVersionFileInfo[]
    latest_calendar_date?: Scalars['Date']
    routes: Route[]
    service_levels: FeedVersionServiceLevel[]
    sha1: Scalars['String']
    stops: Stop[]
    success: Scalars['Boolean']
    warnings: ValidationResultErrorGroup[]
    __typename: 'ValidationResult'
}

export interface ValidationResultError {
    entity_id: Scalars['String']
    error_type: Scalars['String']
    field: Scalars['String']
    filename: Scalars['String']
    message: Scalars['String']
    value: Scalars['String']
    __typename: 'ValidationResultError'
}

export interface ValidationResultErrorGroup {
    count: Scalars['Int']
    error_type: Scalars['String']
    errors: ValidationResultError[]
    filename: Scalars['String']
    limit: Scalars['Int']
    __typename: 'ValidationResultErrorGroup'
}


/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
export interface VehiclePosition {
    congestion_level?: Scalars['String']
    current_status?: Scalars['String']
    current_stop_sequence?: Scalars['Int']
    position?: Scalars['Point']
    stop_id?: Stop
    timestamp?: Scalars['Time']
    vehicle?: RTVehicleDescriptor
    __typename: 'VehiclePosition'
}

export interface Waypoint {
    lat: Scalars['Float']
    lon: Scalars['Float']
    name?: Scalars['String']
    __typename: 'Waypoint'
}


/** See https://gtfs.org/schedule/reference/#agencytxt */
export interface AgencyGenqlSelection{
    agency_email?: boolean | number
    agency_fare_url?: boolean | number
    agency_id?: boolean | number
    agency_lang?: boolean | number
    agency_name?: boolean | number
    agency_phone?: boolean | number
    agency_timezone?: boolean | number
    agency_url?: boolean | number
    alerts?: (AlertGenqlSelection & { __args?: {active?: (Scalars['Boolean'] | null), limit?: (Scalars['Int'] | null)} })
    census_geographies?: (CensusGeographyGenqlSelection & { __args: {layer: Scalars['String'], limit?: (Scalars['Int'] | null), radius?: (Scalars['Float'] | null)} })
    feed_onestop_id?: boolean | number
    feed_version?: FeedVersionGenqlSelection
    feed_version_sha1?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    onestop_id?: boolean | number
    operator?: OperatorGenqlSelection
    places?: (AgencyPlaceGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (AgencyPlaceFilter | null)} })
    routes?: (RouteGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (RouteFilter | null)} })
    search_rank?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AgencyFilter {
/** Search by country 2 letter ISO 3166 code (provided by Natural Earth) */
adm0_iso?: (Scalars['String'] | null),
/** Search by country name (provided by Natural Earth) */
adm0_name?: (Scalars['String'] | null),
/** Search by state/province/division ISO 3166-2 code (provided by Natural Earth) */
adm1_iso?: (Scalars['String'] | null),
/** Search by state/province/division name (provided by Natural Earth) */
adm1_name?: (Scalars['String'] | null),agency_id?: (Scalars['String'] | null),
/** Search for records with this GTFS agency_name */
agency_name?: (Scalars['String'] | null),
/** Search by city name (provided by Natural Earth) */
city_name?: (Scalars['String'] | null),feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),license?: (LicenseFilter | null),
/** Search for agencies within a radius */
near?: (PointRadius | null),onestop_id?: (Scalars['String'] | null),
/** Full text search */
search?: (Scalars['String'] | null),within?: (Scalars['Polygon'] | null)}

export interface AgencyPlaceGenqlSelection{
    adm0_name?: boolean | number
    adm1_name?: boolean | number
    city_name?: boolean | number
    rank?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AgencyPlaceFilter {min_rank?: (Scalars['Float'] | null)}


/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
export interface AlertGenqlSelection{
    active_period?: RTTimeRangeGenqlSelection
    cause?: boolean | number
    description_text?: RTTranslationGenqlSelection
    effect?: boolean | number
    header_text?: RTTranslationGenqlSelection
    severity_level?: boolean | number
    tts_description_text?: RTTranslationGenqlSelection
    tts_header_text?: RTTranslationGenqlSelection
    url?: RTTranslationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
export interface CalendarGenqlSelection{
    added_dates?: { __args: {limit?: (Scalars['Int'] | null)} } | boolean | number
    end_date?: boolean | number
    friday?: boolean | number
    id?: boolean | number
    monday?: boolean | number
    removed_dates?: { __args: {limit?: (Scalars['Int'] | null)} } | boolean | number
    saturday?: boolean | number
    service_id?: boolean | number
    start_date?: boolean | number
    sunday?: boolean | number
    thursday?: boolean | number
    tuesday?: boolean | number
    wednesday?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CalendarDateFilter {date?: (Scalars['Date'] | null),exception_type?: (Scalars['Int'] | null)}

export interface CensusGeographyGenqlSelection{
    aland?: boolean | number
    awater?: boolean | number
    geoid?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    layer_name?: boolean | number
    name?: boolean | number
    values?: (CensusValueGenqlSelection & { __args: {limit?: (Scalars['Int'] | null), table_names: Scalars['String'][]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CensusTableGenqlSelection{
    id?: boolean | number
    table_group?: boolean | number
    table_name?: boolean | number
    table_title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CensusValueGenqlSelection{
    table?: CensusTableGenqlSelection
    values?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DirectionRequest {depart_at?: (Scalars['Time'] | null),from: WaypointInput,mode: StepMode,to: WaypointInput}

export interface DirectionsGenqlSelection{
    data_source?: boolean | number
    destination?: WaypointGenqlSelection
    distance?: DistanceGenqlSelection
    duration?: DurationGenqlSelection
    end_time?: boolean | number
    exception?: boolean | number
    itineraries?: ItineraryGenqlSelection
    origin?: WaypointGenqlSelection
    start_time?: boolean | number
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DistanceGenqlSelection{
    distance?: boolean | number
    units?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DurationGenqlSelection{
    duration?: boolean | number
    units?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
export interface FeedGenqlSelection{
    associated_operators?: OperatorGenqlSelection
    authorization?: FeedAuthorizationGenqlSelection
    feed_fetches?: (FeedFetchGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (FeedFetchFilter | null)} })
    feed_state?: FeedStateGenqlSelection
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions?: (FeedVersionGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (FeedVersionFilter | null)} })
    file?: boolean | number
    /** Unique integer ID */
    id?: boolean | number
    /** Language(s) included in this feed */
    languages?: boolean | number
    license?: FeedLicenseGenqlSelection
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name?: boolean | number
    /** Onestop ID for this feed */
    onestop_id?: boolean | number
    search_rank?: boolean | number
    spec?: boolean | number
    tags?: boolean | number
    urls?: FeedUrlsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details on how to construct an HTTP request to access a protected resource */
export interface FeedAuthorizationGenqlSelection{
    /** Website to visit to sign up for an account */
    info_url?: boolean | number
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name?: boolean | number
    /** Method for inserting authorization secret into request */
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedFetchGenqlSelection{
    fetch_error?: boolean | number
    fetched_at?: boolean | number
    id?: boolean | number
    response_code?: boolean | number
    response_sha1?: boolean | number
    response_size?: boolean | number
    success?: boolean | number
    url?: boolean | number
    url_type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedFetchFilter {success?: (Scalars['Boolean'] | null)}

export interface FeedFilter {
/** Search for feeds with or without a fetch error */
fetch_error?: (Scalars['Boolean'] | null),
/** Search for feeds by their import status */
import_status?: (ImportStatus | null),license?: (LicenseFilter | null),
/** Search for feed with a specific Onestop ID */
onestop_id?: (Scalars['String'] | null),
/** Full text search */
search?: (Scalars['String'] | null),
/** Search for feeds by their source URLs */
source_url?: (FeedSourceUrl | null),
/** Search for feeds of certain data types */
spec?: (FeedSpecTypes[] | null),
/** Search for feeds with a tag */
tags?: (Scalars['Tags'] | null)}


/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
export interface FeedInfoGenqlSelection{
    default_lang?: boolean | number
    feed_contact_email?: boolean | number
    feed_contact_url?: boolean | number
    feed_end_date?: boolean | number
    feed_lang?: boolean | number
    feed_publisher_name?: boolean | number
    feed_publisher_url?: boolean | number
    feed_start_date?: boolean | number
    feed_version?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
export interface FeedLicenseGenqlSelection{
    /** Feed consumers must follow these instructions for how to provide attribution */
    attribution_instructions?: boolean | number
    /** Feed consumers must include this particular text when using this feed */
    attribution_text?: boolean | number
    /** Are feed consumers allowed to use the feed for commercial purposes? */
    commercial_use_allowed?: boolean | number
    /** Are feed consumers allowed to create and share derived products from the feed? */
    create_derived_product?: boolean | number
    /** Are feed consumers allowed to redistribute the feed in its entirety? */
    redistribution_allowed?: boolean | number
    /** Are feed consumers allowed to keep their modifications of this feed private? */
    share_alike_optional?: boolean | number
    /** SPDX identifier for a common license. See https://spdx.org/licenses/ */
    spdx_identifier?: boolean | number
    /** URL for a custom license */
    url?: boolean | number
    /** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
    use_without_attribution?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedSourceUrl {case_sensitive?: (Scalars['Boolean'] | null),type?: (FeedSourceUrlTypes | null),url?: (Scalars['String'] | null)}


/** Details on the current state of this feed, such as active version, last fetch time, etc. */
export interface FeedStateGenqlSelection{
    /** The active feed version for this feed */
    feed_version?: FeedVersionGenqlSelection
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** URL(s) from which Transitland sources a feed */
export interface FeedUrlsGenqlSelection{
    /** URL for GBFS feed `gbfs.json` auto-discovery file */
    gbfs_auto_discovery?: boolean | number
    /** URL for MDS feed provider endpoint */
    mds_provider?: boolean | number
    /** URL for GTFS Realtime Alert messages */
    realtime_alerts?: boolean | number
    /** URL for GTFS Realtime TripUpdate messages */
    realtime_trip_updates?: boolean | number
    /** URL for GTFS Realtime VehiclePosition messages */
    realtime_vehicle_positions?: boolean | number
    /** URL for the static feed that represents today's service */
    static_current?: boolean | number
    /** URLs for static feeds that represent past service that is no longer in effect  */
    static_historic?: boolean | number
    /** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
    static_planned?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
export interface FeedVersionGenqlSelection{
    agencies?: (AgencyGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (AgencyFilter | null)} })
    created_by?: boolean | number
    description?: boolean | number
    earliest_calendar_date?: boolean | number
    feed?: FeedGenqlSelection
    feed_infos?: (FeedInfoGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    feed_version_gtfs_import?: FeedVersionGtfsImportGenqlSelection
    fetched_at?: boolean | number
    file?: boolean | number
    /** Metadata for each text file present in the main directory of the zip archive  */
    files?: (FeedVersionFileInfoGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    /** Convex hull around all active stops in the feed version */
    geometry?: boolean | number
    id?: boolean | number
    latest_calendar_date?: boolean | number
    name?: boolean | number
    routes?: (RouteGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (RouteFilter | null)} })
    service_levels?: (FeedVersionServiceLevelGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (FeedVersionServiceLevelFilter | null)} })
    sha1?: boolean | number
    stops?: (StopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (StopFilter | null)} })
    trips?: (TripGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (TripFilter | null)} })
    updated_by?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionDeleteResultGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionFetchResultGenqlSelection{
    feed_version?: FeedVersionGenqlSelection
    fetch_error?: boolean | number
    found_dir_sha1?: boolean | number
    found_sha1?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionFileInfoGenqlSelection{
    csv_like?: boolean | number
    header?: boolean | number
    id?: boolean | number
    name?: boolean | number
    rows?: boolean | number
    sha1?: boolean | number
    size?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionFilter {feed_ids?: (Scalars['Int'][] | null),feed_onestop_id?: (Scalars['String'] | null),file?: (Scalars['String'] | null),import_status?: (ImportStatus | null),sha1?: (Scalars['String'] | null)}

export interface FeedVersionGtfsImportGenqlSelection{
    created_at?: boolean | number
    entity_count?: boolean | number
    exception_log?: boolean | number
    id?: boolean | number
    in_progress?: boolean | number
    interpolated_stop_time_count?: boolean | number
    schedule_removed?: boolean | number
    skip_entity_error_count?: boolean | number
    skip_entity_filter_count?: boolean | number
    skip_entity_marked_count?: boolean | number
    skip_entity_reference_count?: boolean | number
    success?: boolean | number
    updated_at?: boolean | number
    warning_count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionImportResultGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionServiceLevelGenqlSelection{
    end_date?: boolean | number
    friday?: boolean | number
    id?: boolean | number
    monday?: boolean | number
    saturday?: boolean | number
    start_date?: boolean | number
    sunday?: boolean | number
    thursday?: boolean | number
    tuesday?: boolean | number
    wednesday?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionServiceLevelFilter {end_date?: (Scalars['Date'] | null),start_date?: (Scalars['Date'] | null)}

export interface FeedVersionSetInput {description?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}

export interface FeedVersionUnimportResultGenqlSelection{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
export interface FrequencyGenqlSelection{
    end_time?: boolean | number
    exact_times?: boolean | number
    headway_secs?: boolean | number
    id?: boolean | number
    start_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsAlertTimeGenqlSelection{
    end?: boolean | number
    start?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsBikeRequest {near?: (PointRadius | null)}

export interface GbfsBrandAssetGenqlSelection{
    brand_image_url?: boolean | number
    brand_image_url_dark?: boolean | number
    brand_last_modified?: boolean | number
    brand_terms_url?: boolean | number
    color?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsDockRequest {near?: (PointRadius | null)}

export interface GbfsFeedGenqlSelection{
    alerts?: GbfsSystemAlertGenqlSelection
    calendars?: GbfsSystemCalendarGenqlSelection
    rental_hours?: GbfsSystemHourGenqlSelection
    station_information?: GbfsStationInformationGenqlSelection
    system_information?: GbfsSystemInformationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsFreeBikeStatusGenqlSelection{
    available_until?: boolean | number
    bike_id?: boolean | number
    current_fuel_percent?: boolean | number
    current_range_meters?: boolean | number
    feed?: GbfsFeedGenqlSelection
    home_station?: GbfsStationInformationGenqlSelection
    is_disabled?: boolean | number
    is_reserved?: boolean | number
    last_reported?: boolean | number
    lat?: boolean | number
    lon?: boolean | number
    pricing_plan?: GbfsSystemPricingPlanGenqlSelection
    rental_uris?: GbfsRentalUrisGenqlSelection
    station?: GbfsStationInformationGenqlSelection
    vehicle_equipment?: boolean | number
    vehicle_type?: GbfsVehicleTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsGeofenceFeatureGenqlSelection{
    geometry?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsGeofencePropertyGenqlSelection{
    end?: boolean | number
    name?: boolean | number
    rules?: GbfsGeofenceRuleGenqlSelection
    start?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsGeofenceRuleGenqlSelection{
    maximum_speed_kph?: boolean | number
    ride_allowed?: boolean | number
    ride_through_allowed?: boolean | number
    station_parking?: boolean | number
    vehicle_type?: GbfsVehicleTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsGeofenceZoneGenqlSelection{
    features?: GbfsGeofenceFeatureGenqlSelection
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsPlanPriceGenqlSelection{
    end?: boolean | number
    interval?: boolean | number
    rate?: boolean | number
    start?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsRentalAppGenqlSelection{
    discovery_uri?: boolean | number
    store_uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsRentalAppsGenqlSelection{
    android?: GbfsRentalAppGenqlSelection
    ios?: GbfsRentalAppGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsRentalUrisGenqlSelection{
    android?: boolean | number
    ios?: boolean | number
    web?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsStationInformationGenqlSelection{
    address?: boolean | number
    capacity?: boolean | number
    contact_phone?: boolean | number
    cross_street?: boolean | number
    feed?: GbfsFeedGenqlSelection
    is_charging_station?: boolean | number
    is_valet_station?: boolean | number
    is_virtual_station?: boolean | number
    lat?: boolean | number
    lon?: boolean | number
    name?: boolean | number
    parking_hoop?: boolean | number
    parking_type?: boolean | number
    post_code?: boolean | number
    region?: GbfsSystemRegionGenqlSelection
    rental_methods?: boolean | number
    short_name?: boolean | number
    station_area?: boolean | number
    station_id?: boolean | number
    status?: GbfsStationStatusGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsStationStatusGenqlSelection{
    is_installed?: boolean | number
    is_renting?: boolean | number
    is_returning?: boolean | number
    last_reported?: boolean | number
    num_bikes_available?: boolean | number
    num_bikes_disabled?: boolean | number
    num_docks_available?: boolean | number
    num_docks_disabled?: boolean | number
    station_id?: boolean | number
    vehicle_docks_available?: GbfsVehicleDockAvailableGenqlSelection
    vehicle_types_available?: GbfsVehicleTypeAvailableGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemAlertGenqlSelection{
    alert_id?: boolean | number
    description?: boolean | number
    last_updated?: boolean | number
    summary?: boolean | number
    times?: GbfsAlertTimeGenqlSelection
    type?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemCalendarGenqlSelection{
    end_day?: boolean | number
    end_month?: boolean | number
    end_year?: boolean | number
    start_day?: boolean | number
    start_month?: boolean | number
    start_year?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemHourGenqlSelection{
    days?: boolean | number
    end_time?: boolean | number
    start_time?: boolean | number
    user_types?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemInformationGenqlSelection{
    brand_assets?: GbfsBrandAssetGenqlSelection
    email?: boolean | number
    feed_contact_email?: boolean | number
    language?: boolean | number
    license_url?: boolean | number
    name?: boolean | number
    operator?: boolean | number
    phone_number?: boolean | number
    privacy_last_updated?: boolean | number
    privacy_url?: boolean | number
    purchase_url?: boolean | number
    rental_apps?: GbfsRentalAppsGenqlSelection
    short_name?: boolean | number
    start_date?: boolean | number
    system_id?: boolean | number
    terms_last_updated?: boolean | number
    terms_url?: boolean | number
    timezone?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemPricingPlanGenqlSelection{
    currency?: boolean | number
    description?: boolean | number
    is_taxable?: boolean | number
    name?: boolean | number
    per_km_pricing?: GbfsPlanPriceGenqlSelection
    per_min_pricing?: GbfsPlanPriceGenqlSelection
    plan_id?: boolean | number
    price?: boolean | number
    surge_pricing?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemRegionGenqlSelection{
    name?: boolean | number
    region_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsSystemVersionGenqlSelection{
    url?: boolean | number
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsVehicleAssetsGenqlSelection{
    icon_last_modified?: boolean | number
    icon_url?: boolean | number
    icon_url_dark?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsVehicleDockAvailableGenqlSelection{
    count?: boolean | number
    vehicle_types?: GbfsVehicleTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsVehicleTypeGenqlSelection{
    cargo_load_capacity?: boolean | number
    cargo_volume_capacity?: boolean | number
    color?: boolean | number
    country_code?: boolean | number
    default_pricing_plan?: GbfsSystemPricingPlanGenqlSelection
    default_reserve_time?: boolean | number
    eco_label?: boolean | number
    eco_sticker?: boolean | number
    form_factor?: boolean | number
    gco_2_km?: boolean | number
    make?: boolean | number
    max_permitted_speed?: boolean | number
    max_range_meters?: boolean | number
    model?: boolean | number
    name?: boolean | number
    pricing_plans?: GbfsSystemPricingPlanGenqlSelection
    propulsion_type?: boolean | number
    rated_power?: boolean | number
    rental_uris?: GbfsRentalUrisGenqlSelection
    return_constraint?: boolean | number
    rider_capacity?: boolean | number
    vehicle_accessories?: boolean | number
    vehicle_assets?: GbfsVehicleAssetsGenqlSelection
    vehicle_image?: boolean | number
    vehicle_type_id?: boolean | number
    wheel_count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GbfsVehicleTypeAvailableGenqlSelection{
    count?: boolean | number
    num_bikes_disabled?: boolean | number
    num_docks_available?: boolean | number
    vehicle_type?: GbfsVehicleTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItineraryGenqlSelection{
    distance?: DistanceGenqlSelection
    duration?: DurationGenqlSelection
    end_time?: boolean | number
    from?: WaypointGenqlSelection
    legs?: LegGenqlSelection
    start_time?: boolean | number
    to?: WaypointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LegGenqlSelection{
    distance?: DistanceGenqlSelection
    duration?: DurationGenqlSelection
    end_time?: boolean | number
    from?: WaypointGenqlSelection
    geometry?: boolean | number
    start_time?: boolean | number
    steps?: StepGenqlSelection
    to?: WaypointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
export interface LevelGenqlSelection{
    geometry?: boolean | number
    id?: boolean | number
    level_id?: boolean | number
    level_index?: boolean | number
    level_name?: boolean | number
    stops?: StopGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LicenseFilter {commercial_use_allowed?: (LicenseValue | null),create_derived_product?: (LicenseValue | null),redistribution_allowed?: (LicenseValue | null),share_alike_optional?: (LicenseValue | null),use_without_attribution?: (LicenseValue | null)}


/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version. 
 * 
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
export interface OperatorGenqlSelection{
    agencies?: AgencyGenqlSelection
    feeds?: (FeedGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (FeedFilter | null)} })
    file?: boolean | number
    generated?: boolean | number
    id?: boolean | number
    name?: boolean | number
    onestop_id?: boolean | number
    search_rank?: boolean | number
    short_name?: boolean | number
    tags?: boolean | number
    website?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OperatorFilter {adm0_iso?: (Scalars['String'] | null),adm0_name?: (Scalars['String'] | null),adm1_iso?: (Scalars['String'] | null),adm1_name?: (Scalars['String'] | null),agency_id?: (Scalars['String'] | null),city_name?: (Scalars['String'] | null),feed_onestop_id?: (Scalars['String'] | null),license?: (LicenseFilter | null),merged?: (Scalars['Boolean'] | null),onestop_id?: (Scalars['String'] | null),search?: (Scalars['String'] | null),tags?: (Scalars['Tags'] | null)}


/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
export interface PathwayGenqlSelection{
    from_stop?: StopGenqlSelection
    id?: boolean | number
    is_bidirectional?: boolean | number
    length?: boolean | number
    max_slope?: boolean | number
    min_width?: boolean | number
    pathway_id?: boolean | number
    pathway_mode?: boolean | number
    reverse_signposted_as?: boolean | number
    signposted_as?: boolean | number
    stair_count?: boolean | number
    to_stop?: StopGenqlSelection
    traversal_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayFilter {pathway_mode?: (Scalars['Int'] | null)}

export interface PlaceGenqlSelection{
    adm0_name?: boolean | number
    adm1_name?: boolean | number
    city_name?: boolean | number
    count?: boolean | number
    operators?: OperatorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlaceFilter {adm0_name?: (Scalars['String'] | null),adm1_name?: (Scalars['String'] | null),city_name?: (Scalars['String'] | null),min_rank?: (Scalars['Float'] | null)}

export interface PointRadius {lat: Scalars['Float'],lon: Scalars['Float'],radius: Scalars['Float']}

export interface QueryGenqlSelection{
    agencies?: (AgencyGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (AgencyFilter | null)} })
    bikes?: (GbfsFreeBikeStatusGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (GbfsBikeRequest | null)} })
    directions?: (DirectionsGenqlSelection & { __args: {where: DirectionRequest} })
    docks?: (GbfsStationInformationGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (GbfsDockRequest | null)} })
    feed_versions?: (FeedVersionGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (FeedVersionFilter | null)} })
    feeds?: (FeedGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (FeedFilter | null)} })
    operators?: (OperatorGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (OperatorFilter | null)} })
    places?: (PlaceGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), level?: (PlaceAggregationLevel | null), limit?: (Scalars['Int'] | null), where?: (PlaceFilter | null)} })
    routes?: (RouteGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (RouteFilter | null)} })
    stops?: (StopGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (StopFilter | null)} })
    trips?: (TripGenqlSelection & { __args?: {after?: (Scalars['Int'] | null), ids?: (Scalars['Int'][] | null), limit?: (Scalars['Int'] | null), where?: (TripFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
export interface RTTimeRangeGenqlSelection{
    end?: boolean | number
    start?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
export interface RTTranslationGenqlSelection{
    language?: boolean | number
    text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
export interface RTTripDescriptorGenqlSelection{
    direction_id?: boolean | number
    route_id?: boolean | number
    schedule_relationship?: boolean | number
    start_date?: boolean | number
    start_time?: boolean | number
    trip_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
export interface RTVehicleDescriptorGenqlSelection{
    id?: boolean | number
    label?: boolean | number
    license_plate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/schedule/reference/#routestxt */
export interface RouteGenqlSelection{
    agency?: AgencyGenqlSelection
    alerts?: (AlertGenqlSelection & { __args?: {active?: (Scalars['Boolean'] | null), limit?: (Scalars['Int'] | null)} })
    census_geographies?: (CensusGeographyGenqlSelection & { __args: {layer: Scalars['String'], limit?: (Scalars['Int'] | null), radius?: (Scalars['Float'] | null)} })
    continuous_drop_off?: boolean | number
    continuous_pickup?: boolean | number
    feed_onestop_id?: boolean | number
    feed_version?: FeedVersionGenqlSelection
    feed_version_sha1?: boolean | number
    geometries?: (RouteGeometryGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    geometry?: boolean | number
    headways?: (RouteHeadwayGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    id?: boolean | number
    onestop_id?: boolean | number
    patterns?: RouteStopPatternGenqlSelection
    route_attribute?: RouteAttributeGenqlSelection
    route_color?: boolean | number
    route_desc?: boolean | number
    route_id?: boolean | number
    route_long_name?: boolean | number
    route_short_name?: boolean | number
    route_sort_order?: boolean | number
    route_stop_buffer?: (RouteStopBufferGenqlSelection & { __args?: {radius?: (Scalars['Float'] | null)} })
    route_stops?: (RouteStopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    route_text_color?: boolean | number
    route_type?: boolean | number
    route_url?: boolean | number
    search_rank?: boolean | number
    stops?: (StopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (StopFilter | null)} })
    trips?: (TripGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (TripFilter | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** MTC GTFS+ Extension: route_attributes.txt */
export interface RouteAttributeGenqlSelection{
    category?: boolean | number
    running_way?: boolean | number
    subcategory?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteFilter {agency_ids?: (Scalars['Int'][] | null),allow_previous_onestop_ids?: (Scalars['Boolean'] | null),feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),license?: (LicenseFilter | null),near?: (PointRadius | null),onestop_id?: (Scalars['String'] | null),onestop_ids?: (Scalars['String'][] | null),operator_onestop_id?: (Scalars['String'] | null),route_id?: (Scalars['String'] | null),route_type?: (Scalars['Int'] | null),search?: (Scalars['String'] | null),within?: (Scalars['Polygon'] | null)}

export interface RouteGeometryGenqlSelection{
    combined_geometry?: boolean | number
    first_point_max_distance?: boolean | number
    /** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
    generated?: boolean | number
    geometry?: boolean | number
    length?: boolean | number
    max_segment_length?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteHeadwayGenqlSelection{
    departures?: boolean | number
    direction_id?: boolean | number
    dow_category?: boolean | number
    headway_secs?: boolean | number
    service_date?: boolean | number
    stop?: StopGenqlSelection
    stop_trip_count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteStopGenqlSelection{
    agency?: AgencyGenqlSelection
    agency_id?: boolean | number
    id?: boolean | number
    route?: RouteGenqlSelection
    route_id?: boolean | number
    stop?: StopGenqlSelection
    stop_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteStopBufferGenqlSelection{
    stop_buffer?: boolean | number
    stop_convexhull?: boolean | number
    stop_points?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteStopPatternGenqlSelection{
    count?: boolean | number
    direction_id?: boolean | number
    stop_pattern_id?: boolean | number
    trips?: (TripGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
export interface ShapeGenqlSelection{
    generated?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    shape_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StepGenqlSelection{
    distance?: DistanceGenqlSelection
    duration?: DurationGenqlSelection
    end_time?: boolean | number
    geometry_offset?: boolean | number
    instruction?: boolean | number
    mode?: boolean | number
    start_time?: boolean | number
    to?: WaypointGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/static/#stopstxt */
export interface StopGenqlSelection{
    alerts?: (AlertGenqlSelection & { __args?: {active?: (Scalars['Boolean'] | null), limit?: (Scalars['Int'] | null)} })
    arrivals?: (StopTimeGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (StopTimeFilter | null)} })
    census_geographies?: (CensusGeographyGenqlSelection & { __args: {layer: Scalars['String'], limit?: (Scalars['Int'] | null), radius?: (Scalars['Float'] | null)} })
    children?: (StopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    departures?: (StopTimeGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (StopTimeFilter | null)} })
    directions?: (DirectionsGenqlSelection & { __args?: {depart_at?: (Scalars['Time'] | null), from?: (WaypointInput | null), mode?: (StepMode | null), to?: (WaypointInput | null)} })
    external_reference?: StopExternalReferenceGenqlSelection
    feed_onestop_id?: boolean | number
    feed_version?: FeedVersionGenqlSelection
    feed_version_sha1?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    level?: LevelGenqlSelection
    location_type?: boolean | number
    nearby_stops?: (StopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), radius?: (Scalars['Float'] | null)} })
    observations?: (StopObservationGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (StopObservationFilter | null)} })
    onestop_id?: boolean | number
    parent?: StopGenqlSelection
    pathways_from_stop?: (PathwayGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    pathways_to_stop?: (PathwayGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    platform_code?: boolean | number
    route_stops?: (RouteStopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    search_rank?: boolean | number
    stop_code?: boolean | number
    stop_desc?: boolean | number
    stop_id?: boolean | number
    stop_name?: boolean | number
    stop_times?: (StopTimeGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (StopTimeFilter | null)} })
    stop_timezone?: boolean | number
    stop_url?: boolean | number
    tts_stop_name?: boolean | number
    wheelchair_boarding?: boolean | number
    zone_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopExternalReferenceGenqlSelection{
    id?: boolean | number
    inactive?: boolean | number
    target_active_stop?: StopGenqlSelection
    target_feed_onestop_id?: boolean | number
    target_stop_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopFilter {agency_ids?: (Scalars['Int'][] | null),allow_previous_onestop_ids?: (Scalars['Boolean'] | null),feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),license?: (LicenseFilter | null),location_type?: (Scalars['Int'] | null),near?: (PointRadius | null),onestop_id?: (Scalars['String'] | null),onestop_ids?: (Scalars['String'][] | null),search?: (Scalars['String'] | null),served_by_onestop_ids?: (Scalars['String'][] | null),stop_code?: (Scalars['String'] | null),stop_id?: (Scalars['String'] | null),within?: (Scalars['Polygon'] | null)}

export interface StopObservationGenqlSelection{
    agency_id?: boolean | number
    from_stop_id?: boolean | number
    observed_arrival_time?: boolean | number
    observed_departure_time?: boolean | number
    route_id?: boolean | number
    schedule_relationship?: boolean | number
    scheduled_arrival_time?: boolean | number
    scheduled_departure_time?: boolean | number
    source?: boolean | number
    stop_sequence?: boolean | number
    to_stop_id?: boolean | number
    trip_id?: boolean | number
    trip_start_date?: boolean | number
    trip_start_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopObservationFilter {feed_version_id: Scalars['Int'],source: Scalars['String'],trip_start_date: Scalars['Date']}


/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
export interface StopTimeGenqlSelection{
    arrival?: StopTimeEventGenqlSelection
    arrival_time?: boolean | number
    continuous_drop_off?: boolean | number
    continuous_pickup?: boolean | number
    departure?: StopTimeEventGenqlSelection
    departure_time?: boolean | number
    drop_off_type?: boolean | number
    interpolated?: boolean | number
    pickup_type?: boolean | number
    service_date?: boolean | number
    shape_dist_traveled?: boolean | number
    stop?: StopGenqlSelection
    stop_headsign?: boolean | number
    stop_sequence?: boolean | number
    timepoint?: boolean | number
    trip?: TripGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopTimeEventGenqlSelection{
    delay?: boolean | number
    estimated?: boolean | number
    estimated_utc?: boolean | number
    scheduled?: boolean | number
    stop_timezone?: boolean | number
    uncertainty?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopTimeFilter {allow_previous_route_onestop_ids?: (Scalars['Boolean'] | null),end?: (Scalars['Seconds'] | null),end_time?: (Scalars['Int'] | null),exclude_first?: (Scalars['Boolean'] | null),exclude_last?: (Scalars['Boolean'] | null),next?: (Scalars['Int'] | null),route_onestop_ids?: (Scalars['String'][] | null),service_date?: (Scalars['Date'] | null),start?: (Scalars['Seconds'] | null),start_time?: (Scalars['Int'] | null),use_service_window?: (Scalars['Boolean'] | null)}


/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
export interface TripGenqlSelection{
    alerts?: (AlertGenqlSelection & { __args?: {active?: (Scalars['Boolean'] | null), limit?: (Scalars['Int'] | null)} })
    bikes_allowed?: boolean | number
    block_id?: boolean | number
    calendar?: CalendarGenqlSelection
    direction_id?: boolean | number
    feed_version?: FeedVersionGenqlSelection
    frequencies?: (FrequencyGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    id?: boolean | number
    route?: RouteGenqlSelection
    schedule_relationship?: boolean | number
    shape?: ShapeGenqlSelection
    stop_pattern_id?: boolean | number
    stop_times?: (StopTimeGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), where?: (TripStopTimeFilter | null)} })
    timestamp?: boolean | number
    trip_headsign?: boolean | number
    trip_id?: boolean | number
    trip_short_name?: boolean | number
    wheelchair_accessible?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TripFilter {feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),license?: (LicenseFilter | null),route_ids?: (Scalars['Int'][] | null),route_onestop_ids?: (Scalars['String'][] | null),service_date?: (Scalars['Date'] | null),stop_pattern_id?: (Scalars['Int'] | null),trip_id?: (Scalars['String'] | null)}

export interface TripStopTimeFilter {end?: (Scalars['Seconds'] | null),start?: (Scalars['Seconds'] | null)}

export interface ValidationResultGenqlSelection{
    agencies?: (AgencyGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    earliest_calendar_date?: boolean | number
    errors?: ValidationResultErrorGroupGenqlSelection
    failure_reason?: boolean | number
    feed_infos?: (FeedInfoGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    files?: FeedVersionFileInfoGenqlSelection
    latest_calendar_date?: boolean | number
    routes?: (RouteGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    service_levels?: (FeedVersionServiceLevelGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null), route_id?: (Scalars['String'] | null)} })
    sha1?: boolean | number
    stops?: (StopGenqlSelection & { __args?: {limit?: (Scalars['Int'] | null)} })
    success?: boolean | number
    warnings?: ValidationResultErrorGroupGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidationResultErrorGenqlSelection{
    entity_id?: boolean | number
    error_type?: boolean | number
    field?: boolean | number
    filename?: boolean | number
    message?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidationResultErrorGroupGenqlSelection{
    count?: boolean | number
    error_type?: boolean | number
    errors?: ValidationResultErrorGenqlSelection
    filename?: boolean | number
    limit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
export interface VehiclePositionGenqlSelection{
    congestion_level?: boolean | number
    current_status?: boolean | number
    current_stop_sequence?: boolean | number
    position?: boolean | number
    stop_id?: StopGenqlSelection
    timestamp?: boolean | number
    vehicle?: RTVehicleDescriptorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WaypointGenqlSelection{
    lat?: boolean | number
    lon?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WaypointInput {lat: Scalars['Float'],lon: Scalars['Float'],name?: (Scalars['String'] | null)}


    const Agency_possibleTypes: string[] = ['Agency']
    export const isAgency = (obj?: { __typename?: any } | null): obj is Agency => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAgency"')
      return Agency_possibleTypes.includes(obj.__typename)
    }
    


    const AgencyPlace_possibleTypes: string[] = ['AgencyPlace']
    export const isAgencyPlace = (obj?: { __typename?: any } | null): obj is AgencyPlace => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAgencyPlace"')
      return AgencyPlace_possibleTypes.includes(obj.__typename)
    }
    


    const Alert_possibleTypes: string[] = ['Alert']
    export const isAlert = (obj?: { __typename?: any } | null): obj is Alert => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAlert"')
      return Alert_possibleTypes.includes(obj.__typename)
    }
    


    const Calendar_possibleTypes: string[] = ['Calendar']
    export const isCalendar = (obj?: { __typename?: any } | null): obj is Calendar => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCalendar"')
      return Calendar_possibleTypes.includes(obj.__typename)
    }
    


    const CensusGeography_possibleTypes: string[] = ['CensusGeography']
    export const isCensusGeography = (obj?: { __typename?: any } | null): obj is CensusGeography => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCensusGeography"')
      return CensusGeography_possibleTypes.includes(obj.__typename)
    }
    


    const CensusTable_possibleTypes: string[] = ['CensusTable']
    export const isCensusTable = (obj?: { __typename?: any } | null): obj is CensusTable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCensusTable"')
      return CensusTable_possibleTypes.includes(obj.__typename)
    }
    


    const CensusValue_possibleTypes: string[] = ['CensusValue']
    export const isCensusValue = (obj?: { __typename?: any } | null): obj is CensusValue => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCensusValue"')
      return CensusValue_possibleTypes.includes(obj.__typename)
    }
    


    const Directions_possibleTypes: string[] = ['Directions']
    export const isDirections = (obj?: { __typename?: any } | null): obj is Directions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDirections"')
      return Directions_possibleTypes.includes(obj.__typename)
    }
    


    const Distance_possibleTypes: string[] = ['Distance']
    export const isDistance = (obj?: { __typename?: any } | null): obj is Distance => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDistance"')
      return Distance_possibleTypes.includes(obj.__typename)
    }
    


    const Duration_possibleTypes: string[] = ['Duration']
    export const isDuration = (obj?: { __typename?: any } | null): obj is Duration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDuration"')
      return Duration_possibleTypes.includes(obj.__typename)
    }
    


    const Feed_possibleTypes: string[] = ['Feed']
    export const isFeed = (obj?: { __typename?: any } | null): obj is Feed => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeed"')
      return Feed_possibleTypes.includes(obj.__typename)
    }
    


    const FeedAuthorization_possibleTypes: string[] = ['FeedAuthorization']
    export const isFeedAuthorization = (obj?: { __typename?: any } | null): obj is FeedAuthorization => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedAuthorization"')
      return FeedAuthorization_possibleTypes.includes(obj.__typename)
    }
    


    const FeedFetch_possibleTypes: string[] = ['FeedFetch']
    export const isFeedFetch = (obj?: { __typename?: any } | null): obj is FeedFetch => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedFetch"')
      return FeedFetch_possibleTypes.includes(obj.__typename)
    }
    


    const FeedInfo_possibleTypes: string[] = ['FeedInfo']
    export const isFeedInfo = (obj?: { __typename?: any } | null): obj is FeedInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedInfo"')
      return FeedInfo_possibleTypes.includes(obj.__typename)
    }
    


    const FeedLicense_possibleTypes: string[] = ['FeedLicense']
    export const isFeedLicense = (obj?: { __typename?: any } | null): obj is FeedLicense => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedLicense"')
      return FeedLicense_possibleTypes.includes(obj.__typename)
    }
    


    const FeedState_possibleTypes: string[] = ['FeedState']
    export const isFeedState = (obj?: { __typename?: any } | null): obj is FeedState => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedState"')
      return FeedState_possibleTypes.includes(obj.__typename)
    }
    


    const FeedUrls_possibleTypes: string[] = ['FeedUrls']
    export const isFeedUrls = (obj?: { __typename?: any } | null): obj is FeedUrls => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedUrls"')
      return FeedUrls_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersion_possibleTypes: string[] = ['FeedVersion']
    export const isFeedVersion = (obj?: { __typename?: any } | null): obj is FeedVersion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersion"')
      return FeedVersion_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionDeleteResult_possibleTypes: string[] = ['FeedVersionDeleteResult']
    export const isFeedVersionDeleteResult = (obj?: { __typename?: any } | null): obj is FeedVersionDeleteResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionDeleteResult"')
      return FeedVersionDeleteResult_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionFetchResult_possibleTypes: string[] = ['FeedVersionFetchResult']
    export const isFeedVersionFetchResult = (obj?: { __typename?: any } | null): obj is FeedVersionFetchResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionFetchResult"')
      return FeedVersionFetchResult_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionFileInfo_possibleTypes: string[] = ['FeedVersionFileInfo']
    export const isFeedVersionFileInfo = (obj?: { __typename?: any } | null): obj is FeedVersionFileInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionFileInfo"')
      return FeedVersionFileInfo_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionGtfsImport_possibleTypes: string[] = ['FeedVersionGtfsImport']
    export const isFeedVersionGtfsImport = (obj?: { __typename?: any } | null): obj is FeedVersionGtfsImport => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionGtfsImport"')
      return FeedVersionGtfsImport_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionImportResult_possibleTypes: string[] = ['FeedVersionImportResult']
    export const isFeedVersionImportResult = (obj?: { __typename?: any } | null): obj is FeedVersionImportResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionImportResult"')
      return FeedVersionImportResult_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionServiceLevel_possibleTypes: string[] = ['FeedVersionServiceLevel']
    export const isFeedVersionServiceLevel = (obj?: { __typename?: any } | null): obj is FeedVersionServiceLevel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionServiceLevel"')
      return FeedVersionServiceLevel_possibleTypes.includes(obj.__typename)
    }
    


    const FeedVersionUnimportResult_possibleTypes: string[] = ['FeedVersionUnimportResult']
    export const isFeedVersionUnimportResult = (obj?: { __typename?: any } | null): obj is FeedVersionUnimportResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFeedVersionUnimportResult"')
      return FeedVersionUnimportResult_possibleTypes.includes(obj.__typename)
    }
    


    const Frequency_possibleTypes: string[] = ['Frequency']
    export const isFrequency = (obj?: { __typename?: any } | null): obj is Frequency => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isFrequency"')
      return Frequency_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsAlertTime_possibleTypes: string[] = ['GbfsAlertTime']
    export const isGbfsAlertTime = (obj?: { __typename?: any } | null): obj is GbfsAlertTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsAlertTime"')
      return GbfsAlertTime_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsBrandAsset_possibleTypes: string[] = ['GbfsBrandAsset']
    export const isGbfsBrandAsset = (obj?: { __typename?: any } | null): obj is GbfsBrandAsset => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsBrandAsset"')
      return GbfsBrandAsset_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsFeed_possibleTypes: string[] = ['GbfsFeed']
    export const isGbfsFeed = (obj?: { __typename?: any } | null): obj is GbfsFeed => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsFeed"')
      return GbfsFeed_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsFreeBikeStatus_possibleTypes: string[] = ['GbfsFreeBikeStatus']
    export const isGbfsFreeBikeStatus = (obj?: { __typename?: any } | null): obj is GbfsFreeBikeStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsFreeBikeStatus"')
      return GbfsFreeBikeStatus_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsGeofenceFeature_possibleTypes: string[] = ['GbfsGeofenceFeature']
    export const isGbfsGeofenceFeature = (obj?: { __typename?: any } | null): obj is GbfsGeofenceFeature => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsGeofenceFeature"')
      return GbfsGeofenceFeature_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsGeofenceProperty_possibleTypes: string[] = ['GbfsGeofenceProperty']
    export const isGbfsGeofenceProperty = (obj?: { __typename?: any } | null): obj is GbfsGeofenceProperty => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsGeofenceProperty"')
      return GbfsGeofenceProperty_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsGeofenceRule_possibleTypes: string[] = ['GbfsGeofenceRule']
    export const isGbfsGeofenceRule = (obj?: { __typename?: any } | null): obj is GbfsGeofenceRule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsGeofenceRule"')
      return GbfsGeofenceRule_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsGeofenceZone_possibleTypes: string[] = ['GbfsGeofenceZone']
    export const isGbfsGeofenceZone = (obj?: { __typename?: any } | null): obj is GbfsGeofenceZone => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsGeofenceZone"')
      return GbfsGeofenceZone_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsPlanPrice_possibleTypes: string[] = ['GbfsPlanPrice']
    export const isGbfsPlanPrice = (obj?: { __typename?: any } | null): obj is GbfsPlanPrice => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsPlanPrice"')
      return GbfsPlanPrice_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsRentalApp_possibleTypes: string[] = ['GbfsRentalApp']
    export const isGbfsRentalApp = (obj?: { __typename?: any } | null): obj is GbfsRentalApp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsRentalApp"')
      return GbfsRentalApp_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsRentalApps_possibleTypes: string[] = ['GbfsRentalApps']
    export const isGbfsRentalApps = (obj?: { __typename?: any } | null): obj is GbfsRentalApps => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsRentalApps"')
      return GbfsRentalApps_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsRentalUris_possibleTypes: string[] = ['GbfsRentalUris']
    export const isGbfsRentalUris = (obj?: { __typename?: any } | null): obj is GbfsRentalUris => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsRentalUris"')
      return GbfsRentalUris_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsStationInformation_possibleTypes: string[] = ['GbfsStationInformation']
    export const isGbfsStationInformation = (obj?: { __typename?: any } | null): obj is GbfsStationInformation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsStationInformation"')
      return GbfsStationInformation_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsStationStatus_possibleTypes: string[] = ['GbfsStationStatus']
    export const isGbfsStationStatus = (obj?: { __typename?: any } | null): obj is GbfsStationStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsStationStatus"')
      return GbfsStationStatus_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemAlert_possibleTypes: string[] = ['GbfsSystemAlert']
    export const isGbfsSystemAlert = (obj?: { __typename?: any } | null): obj is GbfsSystemAlert => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemAlert"')
      return GbfsSystemAlert_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemCalendar_possibleTypes: string[] = ['GbfsSystemCalendar']
    export const isGbfsSystemCalendar = (obj?: { __typename?: any } | null): obj is GbfsSystemCalendar => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemCalendar"')
      return GbfsSystemCalendar_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemHour_possibleTypes: string[] = ['GbfsSystemHour']
    export const isGbfsSystemHour = (obj?: { __typename?: any } | null): obj is GbfsSystemHour => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemHour"')
      return GbfsSystemHour_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemInformation_possibleTypes: string[] = ['GbfsSystemInformation']
    export const isGbfsSystemInformation = (obj?: { __typename?: any } | null): obj is GbfsSystemInformation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemInformation"')
      return GbfsSystemInformation_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemPricingPlan_possibleTypes: string[] = ['GbfsSystemPricingPlan']
    export const isGbfsSystemPricingPlan = (obj?: { __typename?: any } | null): obj is GbfsSystemPricingPlan => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemPricingPlan"')
      return GbfsSystemPricingPlan_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemRegion_possibleTypes: string[] = ['GbfsSystemRegion']
    export const isGbfsSystemRegion = (obj?: { __typename?: any } | null): obj is GbfsSystemRegion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemRegion"')
      return GbfsSystemRegion_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsSystemVersion_possibleTypes: string[] = ['GbfsSystemVersion']
    export const isGbfsSystemVersion = (obj?: { __typename?: any } | null): obj is GbfsSystemVersion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsSystemVersion"')
      return GbfsSystemVersion_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsVehicleAssets_possibleTypes: string[] = ['GbfsVehicleAssets']
    export const isGbfsVehicleAssets = (obj?: { __typename?: any } | null): obj is GbfsVehicleAssets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsVehicleAssets"')
      return GbfsVehicleAssets_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsVehicleDockAvailable_possibleTypes: string[] = ['GbfsVehicleDockAvailable']
    export const isGbfsVehicleDockAvailable = (obj?: { __typename?: any } | null): obj is GbfsVehicleDockAvailable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsVehicleDockAvailable"')
      return GbfsVehicleDockAvailable_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsVehicleType_possibleTypes: string[] = ['GbfsVehicleType']
    export const isGbfsVehicleType = (obj?: { __typename?: any } | null): obj is GbfsVehicleType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsVehicleType"')
      return GbfsVehicleType_possibleTypes.includes(obj.__typename)
    }
    


    const GbfsVehicleTypeAvailable_possibleTypes: string[] = ['GbfsVehicleTypeAvailable']
    export const isGbfsVehicleTypeAvailable = (obj?: { __typename?: any } | null): obj is GbfsVehicleTypeAvailable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGbfsVehicleTypeAvailable"')
      return GbfsVehicleTypeAvailable_possibleTypes.includes(obj.__typename)
    }
    


    const Itinerary_possibleTypes: string[] = ['Itinerary']
    export const isItinerary = (obj?: { __typename?: any } | null): obj is Itinerary => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isItinerary"')
      return Itinerary_possibleTypes.includes(obj.__typename)
    }
    


    const Leg_possibleTypes: string[] = ['Leg']
    export const isLeg = (obj?: { __typename?: any } | null): obj is Leg => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLeg"')
      return Leg_possibleTypes.includes(obj.__typename)
    }
    


    const Level_possibleTypes: string[] = ['Level']
    export const isLevel = (obj?: { __typename?: any } | null): obj is Level => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLevel"')
      return Level_possibleTypes.includes(obj.__typename)
    }
    


    const Operator_possibleTypes: string[] = ['Operator']
    export const isOperator = (obj?: { __typename?: any } | null): obj is Operator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOperator"')
      return Operator_possibleTypes.includes(obj.__typename)
    }
    


    const Pathway_possibleTypes: string[] = ['Pathway']
    export const isPathway = (obj?: { __typename?: any } | null): obj is Pathway => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPathway"')
      return Pathway_possibleTypes.includes(obj.__typename)
    }
    


    const Place_possibleTypes: string[] = ['Place']
    export const isPlace = (obj?: { __typename?: any } | null): obj is Place => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlace"')
      return Place_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const RTTimeRange_possibleTypes: string[] = ['RTTimeRange']
    export const isRTTimeRange = (obj?: { __typename?: any } | null): obj is RTTimeRange => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRTTimeRange"')
      return RTTimeRange_possibleTypes.includes(obj.__typename)
    }
    


    const RTTranslation_possibleTypes: string[] = ['RTTranslation']
    export const isRTTranslation = (obj?: { __typename?: any } | null): obj is RTTranslation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRTTranslation"')
      return RTTranslation_possibleTypes.includes(obj.__typename)
    }
    


    const RTTripDescriptor_possibleTypes: string[] = ['RTTripDescriptor']
    export const isRTTripDescriptor = (obj?: { __typename?: any } | null): obj is RTTripDescriptor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRTTripDescriptor"')
      return RTTripDescriptor_possibleTypes.includes(obj.__typename)
    }
    


    const RTVehicleDescriptor_possibleTypes: string[] = ['RTVehicleDescriptor']
    export const isRTVehicleDescriptor = (obj?: { __typename?: any } | null): obj is RTVehicleDescriptor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRTVehicleDescriptor"')
      return RTVehicleDescriptor_possibleTypes.includes(obj.__typename)
    }
    


    const Route_possibleTypes: string[] = ['Route']
    export const isRoute = (obj?: { __typename?: any } | null): obj is Route => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRoute"')
      return Route_possibleTypes.includes(obj.__typename)
    }
    


    const RouteAttribute_possibleTypes: string[] = ['RouteAttribute']
    export const isRouteAttribute = (obj?: { __typename?: any } | null): obj is RouteAttribute => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteAttribute"')
      return RouteAttribute_possibleTypes.includes(obj.__typename)
    }
    


    const RouteGeometry_possibleTypes: string[] = ['RouteGeometry']
    export const isRouteGeometry = (obj?: { __typename?: any } | null): obj is RouteGeometry => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteGeometry"')
      return RouteGeometry_possibleTypes.includes(obj.__typename)
    }
    


    const RouteHeadway_possibleTypes: string[] = ['RouteHeadway']
    export const isRouteHeadway = (obj?: { __typename?: any } | null): obj is RouteHeadway => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteHeadway"')
      return RouteHeadway_possibleTypes.includes(obj.__typename)
    }
    


    const RouteStop_possibleTypes: string[] = ['RouteStop']
    export const isRouteStop = (obj?: { __typename?: any } | null): obj is RouteStop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteStop"')
      return RouteStop_possibleTypes.includes(obj.__typename)
    }
    


    const RouteStopBuffer_possibleTypes: string[] = ['RouteStopBuffer']
    export const isRouteStopBuffer = (obj?: { __typename?: any } | null): obj is RouteStopBuffer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteStopBuffer"')
      return RouteStopBuffer_possibleTypes.includes(obj.__typename)
    }
    


    const RouteStopPattern_possibleTypes: string[] = ['RouteStopPattern']
    export const isRouteStopPattern = (obj?: { __typename?: any } | null): obj is RouteStopPattern => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRouteStopPattern"')
      return RouteStopPattern_possibleTypes.includes(obj.__typename)
    }
    


    const Shape_possibleTypes: string[] = ['Shape']
    export const isShape = (obj?: { __typename?: any } | null): obj is Shape => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isShape"')
      return Shape_possibleTypes.includes(obj.__typename)
    }
    


    const Step_possibleTypes: string[] = ['Step']
    export const isStep = (obj?: { __typename?: any } | null): obj is Step => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStep"')
      return Step_possibleTypes.includes(obj.__typename)
    }
    


    const Stop_possibleTypes: string[] = ['Stop']
    export const isStop = (obj?: { __typename?: any } | null): obj is Stop => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStop"')
      return Stop_possibleTypes.includes(obj.__typename)
    }
    


    const StopExternalReference_possibleTypes: string[] = ['StopExternalReference']
    export const isStopExternalReference = (obj?: { __typename?: any } | null): obj is StopExternalReference => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStopExternalReference"')
      return StopExternalReference_possibleTypes.includes(obj.__typename)
    }
    


    const StopObservation_possibleTypes: string[] = ['StopObservation']
    export const isStopObservation = (obj?: { __typename?: any } | null): obj is StopObservation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStopObservation"')
      return StopObservation_possibleTypes.includes(obj.__typename)
    }
    


    const StopTime_possibleTypes: string[] = ['StopTime']
    export const isStopTime = (obj?: { __typename?: any } | null): obj is StopTime => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStopTime"')
      return StopTime_possibleTypes.includes(obj.__typename)
    }
    


    const StopTimeEvent_possibleTypes: string[] = ['StopTimeEvent']
    export const isStopTimeEvent = (obj?: { __typename?: any } | null): obj is StopTimeEvent => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStopTimeEvent"')
      return StopTimeEvent_possibleTypes.includes(obj.__typename)
    }
    


    const Trip_possibleTypes: string[] = ['Trip']
    export const isTrip = (obj?: { __typename?: any } | null): obj is Trip => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTrip"')
      return Trip_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationResult_possibleTypes: string[] = ['ValidationResult']
    export const isValidationResult = (obj?: { __typename?: any } | null): obj is ValidationResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationResult"')
      return ValidationResult_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationResultError_possibleTypes: string[] = ['ValidationResultError']
    export const isValidationResultError = (obj?: { __typename?: any } | null): obj is ValidationResultError => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationResultError"')
      return ValidationResultError_possibleTypes.includes(obj.__typename)
    }
    


    const ValidationResultErrorGroup_possibleTypes: string[] = ['ValidationResultErrorGroup']
    export const isValidationResultErrorGroup = (obj?: { __typename?: any } | null): obj is ValidationResultErrorGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isValidationResultErrorGroup"')
      return ValidationResultErrorGroup_possibleTypes.includes(obj.__typename)
    }
    


    const VehiclePosition_possibleTypes: string[] = ['VehiclePosition']
    export const isVehiclePosition = (obj?: { __typename?: any } | null): obj is VehiclePosition => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVehiclePosition"')
      return VehiclePosition_possibleTypes.includes(obj.__typename)
    }
    


    const Waypoint_possibleTypes: string[] = ['Waypoint']
    export const isWaypoint = (obj?: { __typename?: any } | null): obj is Waypoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWaypoint"')
      return Waypoint_possibleTypes.includes(obj.__typename)
    }
    

export const enumDistanceUnit = {
   KILOMETERS: 'KILOMETERS' as const,
   MILES: 'MILES' as const
}

export const enumDurationUnit = {
   SECONDS: 'SECONDS' as const
}

export const enumFeedSourceUrlTypes = {
   gbfs_auto_discovery: 'gbfs_auto_discovery' as const,
   mds_provider: 'mds_provider' as const,
   realtime_alerts: 'realtime_alerts' as const,
   realtime_trip_updates: 'realtime_trip_updates' as const,
   realtime_vehicle_positions: 'realtime_vehicle_positions' as const,
   static_current: 'static_current' as const,
   static_historic: 'static_historic' as const,
   static_hypothetical: 'static_hypothetical' as const,
   static_planned: 'static_planned' as const
}

export const enumFeedSpecTypes = {
   GBFS: 'GBFS' as const,
   GTFS: 'GTFS' as const,
   GTFS_RT: 'GTFS_RT' as const,
   MDS: 'MDS' as const
}

export const enumImportStatus = {
   ERROR: 'ERROR' as const,
   IN_PROGRESS: 'IN_PROGRESS' as const,
   SUCCESS: 'SUCCESS' as const
}

export const enumLicenseValue = {
   EXCLUDE_NO: 'EXCLUDE_NO' as const,
   NO: 'NO' as const,
   UNKNOWN: 'UNKNOWN' as const,
   YES: 'YES' as const
}

export const enumPlaceAggregationLevel = {
   ADM0: 'ADM0' as const,
   ADM0_ADM1: 'ADM0_ADM1' as const,
   ADM0_ADM1_CITY: 'ADM0_ADM1_CITY' as const,
   ADM0_CITY: 'ADM0_CITY' as const,
   ADM1_CITY: 'ADM1_CITY' as const,
   CITY: 'CITY' as const
}

export const enumRole = {
   ADMIN: 'ADMIN' as const,
   ANON: 'ANON' as const,
   USER: 'USER' as const
}

export const enumScheduleRelationship = {
   ADDED: 'ADDED' as const,
   CANCELED: 'CANCELED' as const,
   SCHEDULED: 'SCHEDULED' as const,
   UNSCHEDULED: 'UNSCHEDULED' as const
}

export const enumStepMode = {
   AUTO: 'AUTO' as const,
   BICYCLE: 'BICYCLE' as const,
   LINE: 'LINE' as const,
   TRANSIT: 'TRANSIT' as const,
   WALK: 'WALK' as const
}
