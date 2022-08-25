import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Any: any,
    Boolean: boolean,
    Date: string,
    Float: number,
    Geometry: GeoJSON.Geometry,
    Int: number,
    LineString: GeoJSON.LineString,
    Map: any,
    Point: GeoJSON.Point,
    Polygon: GeoJSON.Polygon,
    Seconds: string,
    String: string,
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
    id: Scalars['Int']
    level_id: Scalars['String']
    level_index: Scalars['Float']
    level_name: Scalars['String']
    __typename: 'Level'
}


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

export interface Query {
    agencies: Agency[]
    directions: Directions
    feed_versions: FeedVersion[]
    feeds: Feed[]
    operators: Operator[]
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
    feed_onestop_id: Scalars['String']
    feed_version: FeedVersion
    feed_version_sha1: Scalars['String']
    geometry: Scalars['Point']
    id: Scalars['Int']
    level?: Level
    location_type: Scalars['Int']
    nearby_stops?: Stop[]
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
export interface AgencyRequest{
    agency_email?: boolean | number
    agency_fare_url?: boolean | number
    agency_id?: boolean | number
    agency_lang?: boolean | number
    agency_name?: boolean | number
    agency_phone?: boolean | number
    agency_timezone?: boolean | number
    agency_url?: boolean | number
    alerts?: AlertRequest
    census_geographies?: [{layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)},CensusGeographyRequest]
    feed_onestop_id?: boolean | number
    feed_version?: FeedVersionRequest
    feed_version_sha1?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    onestop_id?: boolean | number
    operator?: OperatorRequest
    places?: [{limit?: (Scalars['Int'] | null),where?: (AgencyPlaceFilter | null)},AgencyPlaceRequest] | AgencyPlaceRequest
    routes?: [{limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)},RouteRequest] | RouteRequest
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
city_name?: (Scalars['String'] | null),feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),
/** Search for agencies within a radius */
near?: (PointRadius | null),onestop_id?: (Scalars['String'] | null),
/** Full text search */
search?: (Scalars['String'] | null),within?: (Scalars['Polygon'] | null)}

export interface AgencyPlaceRequest{
    adm0_name?: boolean | number
    adm1_name?: boolean | number
    city_name?: boolean | number
    rank?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AgencyPlaceFilter {min_rank?: (Scalars['Float'] | null)}


/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
export interface AlertRequest{
    active_period?: RTTimeRangeRequest
    cause?: boolean | number
    description_text?: RTTranslationRequest
    effect?: boolean | number
    header_text?: RTTranslationRequest
    severity_level?: boolean | number
    tts_description_text?: RTTranslationRequest
    tts_header_text?: RTTranslationRequest
    url?: RTTranslationRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
export interface CalendarRequest{
    added_dates?: [{limit?: (Scalars['Int'] | null)}] | boolean | number
    end_date?: boolean | number
    friday?: boolean | number
    id?: boolean | number
    monday?: boolean | number
    removed_dates?: [{limit?: (Scalars['Int'] | null)}] | boolean | number
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

export interface CensusGeographyRequest{
    aland?: boolean | number
    awater?: boolean | number
    geoid?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    layer_name?: boolean | number
    name?: boolean | number
    values?: [{limit?: (Scalars['Int'] | null),table_names: Scalars['String'][]},CensusValueRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CensusTableRequest{
    id?: boolean | number
    table_group?: boolean | number
    table_name?: boolean | number
    table_title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CensusValueRequest{
    table?: CensusTableRequest
    values?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DirectionRequest {depart_at?: (Scalars['Time'] | null),from: WaypointInput,mode: StepMode,to: WaypointInput}

export interface DirectionsRequest{
    data_source?: boolean | number
    destination?: WaypointRequest
    distance?: DistanceRequest
    duration?: DurationRequest
    end_time?: boolean | number
    exception?: boolean | number
    itineraries?: ItineraryRequest
    origin?: WaypointRequest
    start_time?: boolean | number
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DistanceRequest{
    distance?: boolean | number
    units?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DurationRequest{
    duration?: boolean | number
    units?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
export interface FeedRequest{
    associated_operators?: OperatorRequest
    authorization?: FeedAuthorizationRequest
    feed_fetches?: [{limit?: (Scalars['Int'] | null),where?: (FeedFetchFilter | null)},FeedFetchRequest] | FeedFetchRequest
    feed_state?: FeedStateRequest
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions?: [{limit?: (Scalars['Int'] | null),where?: (FeedVersionFilter | null)},FeedVersionRequest] | FeedVersionRequest
    file?: boolean | number
    /** Unique integer ID */
    id?: boolean | number
    /** Language(s) included in this feed */
    languages?: boolean | number
    license?: FeedLicenseRequest
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name?: boolean | number
    /** Onestop ID for this feed */
    onestop_id?: boolean | number
    search_rank?: boolean | number
    spec?: boolean | number
    tags?: boolean | number
    urls?: FeedUrlsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details on how to construct an HTTP request to access a protected resource */
export interface FeedAuthorizationRequest{
    /** Website to visit to sign up for an account */
    info_url?: boolean | number
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name?: boolean | number
    /** Method for inserting authorization secret into request */
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedFetchRequest{
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
import_status?: (ImportStatus | null),
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
export interface FeedInfoRequest{
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
export interface FeedLicenseRequest{
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
export interface FeedStateRequest{
    /** The active feed version for this feed */
    feed_version?: FeedVersionRequest
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** URL(s) from which Transitland sources a feed */
export interface FeedUrlsRequest{
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
export interface FeedVersionRequest{
    agencies?: [{limit?: (Scalars['Int'] | null),where?: (AgencyFilter | null)},AgencyRequest] | AgencyRequest
    created_by?: boolean | number
    description?: boolean | number
    earliest_calendar_date?: boolean | number
    feed?: FeedRequest
    feed_infos?: [{limit?: (Scalars['Int'] | null)},FeedInfoRequest] | FeedInfoRequest
    feed_version_gtfs_import?: FeedVersionGtfsImportRequest
    fetched_at?: boolean | number
    /** Metadata for each text file present in the main directory of the zip archive  */
    files?: [{limit?: (Scalars['Int'] | null)},FeedVersionFileInfoRequest] | FeedVersionFileInfoRequest
    /** Convex hull around all active stops in the feed version */
    geometry?: boolean | number
    id?: boolean | number
    latest_calendar_date?: boolean | number
    name?: boolean | number
    routes?: [{limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)},RouteRequest] | RouteRequest
    service_levels?: [{limit?: (Scalars['Int'] | null),where?: (FeedVersionServiceLevelFilter | null)},FeedVersionServiceLevelRequest] | FeedVersionServiceLevelRequest
    sha1?: boolean | number
    stops?: [{limit?: (Scalars['Int'] | null),where?: (StopFilter | null)},StopRequest] | StopRequest
    trips?: [{limit?: (Scalars['Int'] | null),where?: (TripFilter | null)},TripRequest] | TripRequest
    updated_by?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionDeleteResultRequest{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionFetchResultRequest{
    feed_version?: FeedVersionRequest
    fetch_error?: boolean | number
    found_dir_sha1?: boolean | number
    found_sha1?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionFileInfoRequest{
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

export interface FeedVersionFilter {feed_ids?: (Scalars['Int'][] | null),feed_onestop_id?: (Scalars['String'] | null),import_status?: (ImportStatus | null),sha1?: (Scalars['String'] | null)}

export interface FeedVersionGtfsImportRequest{
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

export interface FeedVersionImportResultRequest{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FeedVersionServiceLevelRequest{
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

export interface FeedVersionUnimportResultRequest{
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
export interface FrequencyRequest{
    end_time?: boolean | number
    exact_times?: boolean | number
    headway_secs?: boolean | number
    id?: boolean | number
    start_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ItineraryRequest{
    distance?: DistanceRequest
    duration?: DurationRequest
    end_time?: boolean | number
    from?: WaypointRequest
    legs?: LegRequest
    start_time?: boolean | number
    to?: WaypointRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LegRequest{
    distance?: DistanceRequest
    duration?: DurationRequest
    end_time?: boolean | number
    from?: WaypointRequest
    geometry?: boolean | number
    start_time?: boolean | number
    steps?: StepRequest
    to?: WaypointRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
export interface LevelRequest{
    id?: boolean | number
    level_id?: boolean | number
    level_index?: boolean | number
    level_name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version. 
 * 
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
export interface OperatorRequest{
    agencies?: AgencyRequest
    feeds?: [{limit?: (Scalars['Int'] | null),where?: (FeedFilter | null)},FeedRequest] | FeedRequest
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

export interface OperatorFilter {adm0_iso?: (Scalars['String'] | null),adm0_name?: (Scalars['String'] | null),adm1_iso?: (Scalars['String'] | null),adm1_name?: (Scalars['String'] | null),agency_id?: (Scalars['String'] | null),city_name?: (Scalars['String'] | null),feed_onestop_id?: (Scalars['String'] | null),merged?: (Scalars['Boolean'] | null),onestop_id?: (Scalars['String'] | null),search?: (Scalars['String'] | null),tags?: (Scalars['Tags'] | null)}


/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
export interface PathwayRequest{
    from_stop?: StopRequest
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
    to_stop?: StopRequest
    traversal_time?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PathwayFilter {pathway_mode?: (Scalars['Int'] | null)}

export interface PointRadius {lat: Scalars['Float'],lon: Scalars['Float'],radius: Scalars['Float']}

export interface QueryRequest{
    agencies?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (AgencyFilter | null)},AgencyRequest] | AgencyRequest
    directions?: [{where: DirectionRequest},DirectionsRequest]
    feed_versions?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (FeedVersionFilter | null)},FeedVersionRequest] | FeedVersionRequest
    feeds?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (FeedFilter | null)},FeedRequest] | FeedRequest
    operators?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (OperatorFilter | null)},OperatorRequest] | OperatorRequest
    routes?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)},RouteRequest] | RouteRequest
    stops?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (StopFilter | null)},StopRequest] | StopRequest
    trips?: [{after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (TripFilter | null)},TripRequest] | TripRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
export interface RTTimeRangeRequest{
    end?: boolean | number
    start?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
export interface RTTranslationRequest{
    language?: boolean | number
    text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
export interface RTTripDescriptorRequest{
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
export interface RTVehicleDescriptorRequest{
    id?: boolean | number
    label?: boolean | number
    license_plate?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/schedule/reference/#routestxt */
export interface RouteRequest{
    agency?: AgencyRequest
    alerts?: AlertRequest
    census_geographies?: [{layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)},CensusGeographyRequest]
    continuous_drop_off?: boolean | number
    continuous_pickup?: boolean | number
    feed_onestop_id?: boolean | number
    feed_version?: FeedVersionRequest
    feed_version_sha1?: boolean | number
    geometries?: [{limit?: (Scalars['Int'] | null)},RouteGeometryRequest] | RouteGeometryRequest
    geometry?: boolean | number
    headways?: [{limit?: (Scalars['Int'] | null)},RouteHeadwayRequest] | RouteHeadwayRequest
    id?: boolean | number
    onestop_id?: boolean | number
    patterns?: RouteStopPatternRequest
    route_color?: boolean | number
    route_desc?: boolean | number
    route_id?: boolean | number
    route_long_name?: boolean | number
    route_short_name?: boolean | number
    route_sort_order?: boolean | number
    route_stop_buffer?: [{radius?: (Scalars['Float'] | null)},RouteStopBufferRequest] | RouteStopBufferRequest
    route_stops?: [{limit?: (Scalars['Int'] | null)},RouteStopRequest] | RouteStopRequest
    route_text_color?: boolean | number
    route_type?: boolean | number
    route_url?: boolean | number
    search_rank?: boolean | number
    stops?: [{limit?: (Scalars['Int'] | null),where?: (StopFilter | null)},StopRequest] | StopRequest
    trips?: [{limit?: (Scalars['Int'] | null),where?: (TripFilter | null)},TripRequest] | TripRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteFilter {agency_ids?: (Scalars['Int'][] | null),allow_previous_onestop_ids?: (Scalars['Boolean'] | null),feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),near?: (PointRadius | null),onestop_id?: (Scalars['String'] | null),onestop_ids?: (Scalars['String'][] | null),operator_onestop_id?: (Scalars['String'] | null),route_id?: (Scalars['String'] | null),route_type?: (Scalars['Int'] | null),search?: (Scalars['String'] | null),within?: (Scalars['Polygon'] | null)}

export interface RouteGeometryRequest{
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

export interface RouteHeadwayRequest{
    departures?: boolean | number
    direction_id?: boolean | number
    dow_category?: boolean | number
    headway_secs?: boolean | number
    service_date?: boolean | number
    stop?: StopRequest
    stop_trip_count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteStopRequest{
    agency?: AgencyRequest
    agency_id?: boolean | number
    id?: boolean | number
    route?: RouteRequest
    route_id?: boolean | number
    stop?: StopRequest
    stop_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteStopBufferRequest{
    stop_buffer?: boolean | number
    stop_convexhull?: boolean | number
    stop_points?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RouteStopPatternRequest{
    count?: boolean | number
    direction_id?: boolean | number
    stop_pattern_id?: boolean | number
    trips?: [{limit?: (Scalars['Int'] | null)},TripRequest] | TripRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
export interface ShapeRequest{
    generated?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    shape_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StepRequest{
    distance?: DistanceRequest
    duration?: DurationRequest
    end_time?: boolean | number
    geometry_offset?: boolean | number
    instruction?: boolean | number
    mode?: boolean | number
    start_time?: boolean | number
    to?: WaypointRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** See https://gtfs.org/reference/static/#stopstxt */
export interface StopRequest{
    alerts?: AlertRequest
    arrivals?: [{limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)},StopTimeRequest] | StopTimeRequest
    census_geographies?: [{layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)},CensusGeographyRequest]
    children?: [{limit?: (Scalars['Int'] | null)},StopRequest] | StopRequest
    departures?: [{limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)},StopTimeRequest] | StopTimeRequest
    directions?: [{depart_at?: (Scalars['Time'] | null),from?: (WaypointInput | null),mode?: (StepMode | null),to?: (WaypointInput | null)},DirectionsRequest] | DirectionsRequest
    feed_onestop_id?: boolean | number
    feed_version?: FeedVersionRequest
    feed_version_sha1?: boolean | number
    geometry?: boolean | number
    id?: boolean | number
    level?: LevelRequest
    location_type?: boolean | number
    nearby_stops?: [{limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)},StopRequest] | StopRequest
    onestop_id?: boolean | number
    parent?: StopRequest
    pathways_from_stop?: [{limit?: (Scalars['Int'] | null)},PathwayRequest] | PathwayRequest
    pathways_to_stop?: [{limit?: (Scalars['Int'] | null)},PathwayRequest] | PathwayRequest
    platform_code?: boolean | number
    route_stops?: [{limit?: (Scalars['Int'] | null)},RouteStopRequest] | RouteStopRequest
    search_rank?: boolean | number
    stop_code?: boolean | number
    stop_desc?: boolean | number
    stop_id?: boolean | number
    stop_name?: boolean | number
    stop_times?: [{limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)},StopTimeRequest] | StopTimeRequest
    stop_timezone?: boolean | number
    stop_url?: boolean | number
    tts_stop_name?: boolean | number
    wheelchair_boarding?: boolean | number
    zone_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopFilter {agency_ids?: (Scalars['Int'][] | null),allow_previous_onestop_ids?: (Scalars['Boolean'] | null),feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),near?: (PointRadius | null),onestop_id?: (Scalars['String'] | null),onestop_ids?: (Scalars['String'][] | null),search?: (Scalars['String'] | null),served_by_onestop_ids?: (Scalars['String'][] | null),stop_code?: (Scalars['String'] | null),stop_id?: (Scalars['String'] | null),within?: (Scalars['Polygon'] | null)}


/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
export interface StopTimeRequest{
    arrival?: StopTimeEventRequest
    arrival_time?: boolean | number
    continuous_drop_off?: boolean | number
    continuous_pickup?: boolean | number
    departure?: StopTimeEventRequest
    departure_time?: boolean | number
    drop_off_type?: boolean | number
    interpolated?: boolean | number
    pickup_type?: boolean | number
    service_date?: boolean | number
    stop?: StopRequest
    stop_headsign?: boolean | number
    stop_sequence?: boolean | number
    timepoint?: boolean | number
    trip?: TripRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StopTimeEventRequest{
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
export interface TripRequest{
    alerts?: AlertRequest
    bikes_allowed?: boolean | number
    block_id?: boolean | number
    calendar?: CalendarRequest
    direction_id?: boolean | number
    feed_version?: FeedVersionRequest
    frequencies?: [{limit?: (Scalars['Int'] | null)},FrequencyRequest] | FrequencyRequest
    id?: boolean | number
    route?: RouteRequest
    schedule_relationship?: boolean | number
    shape?: ShapeRequest
    stop_pattern_id?: boolean | number
    stop_times?: [{limit?: (Scalars['Int'] | null)},StopTimeRequest] | StopTimeRequest
    timestamp?: boolean | number
    trip_headsign?: boolean | number
    trip_id?: boolean | number
    trip_short_name?: boolean | number
    wheelchair_accessible?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TripFilter {feed_onestop_id?: (Scalars['String'] | null),feed_version_sha1?: (Scalars['String'] | null),route_ids?: (Scalars['Int'][] | null),route_onestop_ids?: (Scalars['String'][] | null),service_date?: (Scalars['Date'] | null),stop_pattern_id?: (Scalars['Int'] | null),trip_id?: (Scalars['String'] | null)}

export interface ValidationResultRequest{
    agencies?: [{limit?: (Scalars['Int'] | null)},AgencyRequest] | AgencyRequest
    earliest_calendar_date?: boolean | number
    errors?: ValidationResultErrorGroupRequest
    failure_reason?: boolean | number
    feed_infos?: [{limit?: (Scalars['Int'] | null)},FeedInfoRequest] | FeedInfoRequest
    files?: FeedVersionFileInfoRequest
    latest_calendar_date?: boolean | number
    routes?: [{limit?: (Scalars['Int'] | null)},RouteRequest] | RouteRequest
    service_levels?: [{limit?: (Scalars['Int'] | null),route_id?: (Scalars['String'] | null)},FeedVersionServiceLevelRequest] | FeedVersionServiceLevelRequest
    sha1?: boolean | number
    stops?: [{limit?: (Scalars['Int'] | null)},StopRequest] | StopRequest
    success?: boolean | number
    warnings?: ValidationResultErrorGroupRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidationResultErrorRequest{
    entity_id?: boolean | number
    error_type?: boolean | number
    field?: boolean | number
    filename?: boolean | number
    message?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidationResultErrorGroupRequest{
    count?: boolean | number
    error_type?: boolean | number
    errors?: ValidationResultErrorRequest
    filename?: boolean | number
    limit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
export interface VehiclePositionRequest{
    congestion_level?: boolean | number
    current_status?: boolean | number
    current_stop_sequence?: boolean | number
    position?: boolean | number
    stop_id?: StopRequest
    timestamp?: boolean | number
    vehicle?: RTVehicleDescriptorRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WaypointRequest{
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



/** See https://gtfs.org/schedule/reference/#agencytxt */
export interface AgencyPromiseChain{
    agency_email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_fare_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_lang: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_phone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_timezone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    agency_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>}),
    census_geographies: ((args: {layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Promise<(FieldsSelection<CensusGeography, R>[] | undefined)>}),
    feed_onestop_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    feed_version: (FeedVersionPromiseChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>}),
    feed_version_sha1: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    operator: (OperatorPromiseChain & {get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R> | undefined)) => Promise<(FieldsSelection<Operator, R> | undefined)>}),
    places: ((args?: {limit?: (Scalars['Int'] | null),where?: (AgencyPlaceFilter | null)}) => {get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Promise<(FieldsSelection<AgencyPlace, R>[] | undefined)>})&({get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Promise<(FieldsSelection<AgencyPlace, R>[] | undefined)>}),
    routes: ((args?: {limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** See https://gtfs.org/schedule/reference/#agencytxt */
export interface AgencyObservableChain{
    agency_email: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_fare_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_lang: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_phone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_timezone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    agency_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>}),
    census_geographies: ((args: {layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Observable<(FieldsSelection<CensusGeography, R>[] | undefined)>}),
    feed_onestop_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    feed_version: (FeedVersionObservableChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>}),
    feed_version_sha1: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    operator: (OperatorObservableChain & {get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R> | undefined)) => Observable<(FieldsSelection<Operator, R> | undefined)>}),
    places: ((args?: {limit?: (Scalars['Int'] | null),where?: (AgencyPlaceFilter | null)}) => {get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Observable<(FieldsSelection<AgencyPlace, R>[] | undefined)>})&({get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Observable<(FieldsSelection<AgencyPlace, R>[] | undefined)>}),
    routes: ((args?: {limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface AgencyPlacePromiseChain{
    adm0_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    adm1_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    city_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}

export interface AgencyPlaceObservableChain{
    adm0_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    adm1_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    city_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
export interface AlertPromiseChain{
    active_period: ({get: <R extends RTTimeRangeRequest>(request: R, defaultValue?: (FieldsSelection<RTTimeRange, R>[] | undefined)) => Promise<(FieldsSelection<RTTimeRange, R>[] | undefined)>}),
    cause: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    description_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Promise<FieldsSelection<RTTranslation, R>[]>}),
    effect: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    header_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Promise<FieldsSelection<RTTranslation, R>[]>}),
    severity_level: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    tts_description_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Promise<(FieldsSelection<RTTranslation, R>[] | undefined)>}),
    tts_header_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Promise<(FieldsSelection<RTTranslation, R>[] | undefined)>}),
    url: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Promise<(FieldsSelection<RTTranslation, R>[] | undefined)>})
}


/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
export interface AlertObservableChain{
    active_period: ({get: <R extends RTTimeRangeRequest>(request: R, defaultValue?: (FieldsSelection<RTTimeRange, R>[] | undefined)) => Observable<(FieldsSelection<RTTimeRange, R>[] | undefined)>}),
    cause: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    description_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Observable<FieldsSelection<RTTranslation, R>[]>}),
    effect: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    header_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Observable<FieldsSelection<RTTranslation, R>[]>}),
    severity_level: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    tts_description_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Observable<(FieldsSelection<RTTranslation, R>[] | undefined)>}),
    tts_header_text: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Observable<(FieldsSelection<RTTranslation, R>[] | undefined)>}),
    url: ({get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Observable<(FieldsSelection<RTTranslation, R>[] | undefined)>})
}


/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
export interface CalendarPromiseChain{
    added_dates: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>})&({get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>}),
    end_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>}),
    friday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    monday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    removed_dates: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>})&({get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>}),
    saturday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    start_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>}),
    sunday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    thursday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    tuesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    wednesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
export interface CalendarObservableChain{
    added_dates: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>})&({get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>}),
    end_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>}),
    friday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    monday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    removed_dates: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>})&({get: (request?: boolean|number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>}),
    saturday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    service_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    start_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>}),
    sunday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    thursday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    tuesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    wednesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface CensusGeographyPromiseChain{
    aland: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    awater: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    geoid: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    layer_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    values: ((args: {limit?: (Scalars['Int'] | null),table_names: Scalars['String'][]}) => {get: <R extends CensusValueRequest>(request: R, defaultValue?: (FieldsSelection<CensusValue, R> | undefined)[]) => Promise<(FieldsSelection<CensusValue, R> | undefined)[]>})
}

export interface CensusGeographyObservableChain{
    aland: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    awater: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    geoid: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    layer_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    values: ((args: {limit?: (Scalars['Int'] | null),table_names: Scalars['String'][]}) => {get: <R extends CensusValueRequest>(request: R, defaultValue?: (FieldsSelection<CensusValue, R> | undefined)[]) => Observable<(FieldsSelection<CensusValue, R> | undefined)[]>})
}

export interface CensusTablePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    table_group: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    table_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    table_title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface CensusTableObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    table_group: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    table_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    table_title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface CensusValuePromiseChain{
    table: (CensusTablePromiseChain & {get: <R extends CensusTableRequest>(request: R, defaultValue?: FieldsSelection<CensusTable, R>) => Promise<FieldsSelection<CensusTable, R>>}),
    values: ({get: (request?: boolean|number, defaultValue?: Scalars['Any']) => Promise<Scalars['Any']>})
}

export interface CensusValueObservableChain{
    table: (CensusTableObservableChain & {get: <R extends CensusTableRequest>(request: R, defaultValue?: FieldsSelection<CensusTable, R>) => Observable<FieldsSelection<CensusTable, R>>}),
    values: ({get: (request?: boolean|number, defaultValue?: Scalars['Any']) => Observable<Scalars['Any']>})
}

export interface DirectionsPromiseChain{
    data_source: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    destination: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>}),
    distance: (DistancePromiseChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: (FieldsSelection<Distance, R> | undefined)) => Promise<(FieldsSelection<Distance, R> | undefined)>}),
    duration: (DurationPromiseChain & {get: <R extends DurationRequest>(request: R, defaultValue?: (FieldsSelection<Duration, R> | undefined)) => Promise<(FieldsSelection<Duration, R> | undefined)>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    exception: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    itineraries: ({get: <R extends ItineraryRequest>(request: R, defaultValue?: (FieldsSelection<Itinerary, R>[] | undefined)) => Promise<(FieldsSelection<Itinerary, R>[] | undefined)>}),
    origin: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface DirectionsObservableChain{
    data_source: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    destination: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>}),
    distance: (DistanceObservableChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: (FieldsSelection<Distance, R> | undefined)) => Observable<(FieldsSelection<Distance, R> | undefined)>}),
    duration: (DurationObservableChain & {get: <R extends DurationRequest>(request: R, defaultValue?: (FieldsSelection<Duration, R> | undefined)) => Observable<(FieldsSelection<Duration, R> | undefined)>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    exception: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    itineraries: ({get: <R extends ItineraryRequest>(request: R, defaultValue?: (FieldsSelection<Itinerary, R>[] | undefined)) => Observable<(FieldsSelection<Itinerary, R>[] | undefined)>}),
    origin: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface DistancePromiseChain{
    distance: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    units: ({get: (request?: boolean|number, defaultValue?: DistanceUnit) => Promise<DistanceUnit>})
}

export interface DistanceObservableChain{
    distance: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    units: ({get: (request?: boolean|number, defaultValue?: DistanceUnit) => Observable<DistanceUnit>})
}

export interface DurationPromiseChain{
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    units: ({get: (request?: boolean|number, defaultValue?: DurationUnit) => Promise<DurationUnit>})
}

export interface DurationObservableChain{
    duration: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    units: ({get: (request?: boolean|number, defaultValue?: DurationUnit) => Observable<DurationUnit>})
}


/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
export interface FeedPromiseChain{
    associated_operators: ({get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R>[] | undefined)) => Promise<(FieldsSelection<Operator, R>[] | undefined)>}),
    authorization: (FeedAuthorizationPromiseChain & {get: <R extends FeedAuthorizationRequest>(request: R, defaultValue?: (FieldsSelection<FeedAuthorization, R> | undefined)) => Promise<(FieldsSelection<FeedAuthorization, R> | undefined)>}),
    feed_fetches: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedFetchFilter | null)}) => {get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Promise<(FieldsSelection<FeedFetch, R>[] | undefined)>})&({get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Promise<(FieldsSelection<FeedFetch, R>[] | undefined)>}),
    feed_state: (FeedStatePromiseChain & {get: <R extends FeedStateRequest>(request: R, defaultValue?: (FieldsSelection<FeedState, R> | undefined)) => Promise<(FieldsSelection<FeedState, R> | undefined)>}),
    
/** Versions of this feed that have been fetched, archived, and imported by Transitland */
feed_versions: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedVersionFilter | null)}) => {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>})&({get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>}),
    file: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Unique integer ID */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** Language(s) included in this feed */
languages: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'][] | undefined)) => Promise<(Scalars['String'][] | undefined)>}),
    license: (FeedLicensePromiseChain & {get: <R extends FeedLicenseRequest>(request: R, defaultValue?: (FieldsSelection<FeedLicense, R> | undefined)) => Promise<(FieldsSelection<FeedLicense, R> | undefined)>}),
    
/** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** Onestop ID for this feed */
onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    spec: ({get: (request?: boolean|number, defaultValue?: (FeedSpecTypes | undefined)) => Promise<(FeedSpecTypes | undefined)>}),
    tags: ({get: (request?: boolean|number, defaultValue?: (Scalars['Tags'] | undefined)) => Promise<(Scalars['Tags'] | undefined)>}),
    urls: (FeedUrlsPromiseChain & {get: <R extends FeedUrlsRequest>(request: R, defaultValue?: (FieldsSelection<FeedUrls, R> | undefined)) => Promise<(FieldsSelection<FeedUrls, R> | undefined)>})
}


/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
export interface FeedObservableChain{
    associated_operators: ({get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R>[] | undefined)) => Observable<(FieldsSelection<Operator, R>[] | undefined)>}),
    authorization: (FeedAuthorizationObservableChain & {get: <R extends FeedAuthorizationRequest>(request: R, defaultValue?: (FieldsSelection<FeedAuthorization, R> | undefined)) => Observable<(FieldsSelection<FeedAuthorization, R> | undefined)>}),
    feed_fetches: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedFetchFilter | null)}) => {get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Observable<(FieldsSelection<FeedFetch, R>[] | undefined)>})&({get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Observable<(FieldsSelection<FeedFetch, R>[] | undefined)>}),
    feed_state: (FeedStateObservableChain & {get: <R extends FeedStateRequest>(request: R, defaultValue?: (FieldsSelection<FeedState, R> | undefined)) => Observable<(FieldsSelection<FeedState, R> | undefined)>}),
    
/** Versions of this feed that have been fetched, archived, and imported by Transitland */
feed_versions: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedVersionFilter | null)}) => {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>})&({get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>}),
    file: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Unique integer ID */
id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** Language(s) included in this feed */
languages: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'][] | undefined)) => Observable<(Scalars['String'][] | undefined)>}),
    license: (FeedLicenseObservableChain & {get: <R extends FeedLicenseRequest>(request: R, defaultValue?: (FieldsSelection<FeedLicense, R> | undefined)) => Observable<(FieldsSelection<FeedLicense, R> | undefined)>}),
    
/** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** Onestop ID for this feed */
onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    spec: ({get: (request?: boolean|number, defaultValue?: (FeedSpecTypes | undefined)) => Observable<(FeedSpecTypes | undefined)>}),
    tags: ({get: (request?: boolean|number, defaultValue?: (Scalars['Tags'] | undefined)) => Observable<(Scalars['Tags'] | undefined)>}),
    urls: (FeedUrlsObservableChain & {get: <R extends FeedUrlsRequest>(request: R, defaultValue?: (FieldsSelection<FeedUrls, R> | undefined)) => Observable<(FieldsSelection<FeedUrls, R> | undefined)>})
}


/** Details on how to construct an HTTP request to access a protected resource */
export interface FeedAuthorizationPromiseChain{
    
/** Website to visit to sign up for an account */
info_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
param_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Method for inserting authorization secret into request */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** Details on how to construct an HTTP request to access a protected resource */
export interface FeedAuthorizationObservableChain{
    
/** Website to visit to sign up for an account */
info_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
param_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Method for inserting authorization secret into request */
type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface FeedFetchPromiseChain{
    fetch_error: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    fetched_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    response_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    response_sha1: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    response_size: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    success: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>}),
    url: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    url_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface FeedFetchObservableChain{
    fetch_error: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    fetched_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    response_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    response_sha1: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    response_size: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    success: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>}),
    url: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    url_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
export interface FeedInfoPromiseChain{
    default_lang: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    feed_contact_email: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    feed_contact_url: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    feed_end_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    feed_lang: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    feed_publisher_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    feed_publisher_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    feed_start_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    feed_version: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
export interface FeedInfoObservableChain{
    default_lang: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    feed_contact_email: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    feed_contact_url: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    feed_end_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    feed_lang: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    feed_publisher_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    feed_publisher_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    feed_start_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    feed_version: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
export interface FeedLicensePromiseChain{
    
/** Feed consumers must follow these instructions for how to provide attribution */
attribution_instructions: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Feed consumers must include this particular text when using this feed */
attribution_text: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Are feed consumers allowed to use the feed for commercial purposes? */
commercial_use_allowed: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Are feed consumers allowed to create and share derived products from the feed? */
create_derived_product: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Are feed consumers allowed to redistribute the feed in its entirety? */
redistribution_allowed: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Are feed consumers allowed to keep their modifications of this feed private? */
share_alike_optional: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** SPDX identifier for a common license. See https://spdx.org/licenses/ */
spdx_identifier: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URL for a custom license */
url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
use_without_attribution: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
export interface FeedLicenseObservableChain{
    
/** Feed consumers must follow these instructions for how to provide attribution */
attribution_instructions: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Feed consumers must include this particular text when using this feed */
attribution_text: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Are feed consumers allowed to use the feed for commercial purposes? */
commercial_use_allowed: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Are feed consumers allowed to create and share derived products from the feed? */
create_derived_product: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Are feed consumers allowed to redistribute the feed in its entirety? */
redistribution_allowed: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Are feed consumers allowed to keep their modifications of this feed private? */
share_alike_optional: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** SPDX identifier for a common license. See https://spdx.org/licenses/ */
spdx_identifier: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URL for a custom license */
url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
use_without_attribution: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** Details on the current state of this feed, such as active version, last fetch time, etc. */
export interface FeedStatePromiseChain{
    
/** The active feed version for this feed */
feed_version: (FeedVersionPromiseChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Promise<(FieldsSelection<FeedVersion, R> | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** Details on the current state of this feed, such as active version, last fetch time, etc. */
export interface FeedStateObservableChain{
    
/** The active feed version for this feed */
feed_version: (FeedVersionObservableChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Observable<(FieldsSelection<FeedVersion, R> | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** URL(s) from which Transitland sources a feed */
export interface FeedUrlsPromiseChain{
    
/** URL for GBFS feed `gbfs.json` auto-discovery file */
gbfs_auto_discovery: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URL for MDS feed provider endpoint */
mds_provider: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URL for GTFS Realtime Alert messages */
realtime_alerts: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URL for GTFS Realtime TripUpdate messages */
realtime_trip_updates: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URL for GTFS Realtime VehiclePosition messages */
realtime_vehicle_positions: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URL for the static feed that represents today's service */
static_current: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** URLs for static feeds that represent past service that is no longer in effect  */
static_historic: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>}),
    
/** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
static_planned: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** URL(s) from which Transitland sources a feed */
export interface FeedUrlsObservableChain{
    
/** URL for GBFS feed `gbfs.json` auto-discovery file */
gbfs_auto_discovery: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URL for MDS feed provider endpoint */
mds_provider: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URL for GTFS Realtime Alert messages */
realtime_alerts: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URL for GTFS Realtime TripUpdate messages */
realtime_trip_updates: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URL for GTFS Realtime VehiclePosition messages */
realtime_vehicle_positions: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URL for the static feed that represents today's service */
static_current: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** URLs for static feeds that represent past service that is no longer in effect  */
static_historic: ({get: (request?: boolean|number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>}),
    
/** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
static_planned: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
export interface FeedVersionPromiseChain{
    agencies: ((args?: {limit?: (Scalars['Int'] | null),where?: (AgencyFilter | null)}) => {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>})&({get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>}),
    created_by: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    earliest_calendar_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>}),
    feed: (FeedPromiseChain & {get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>) => Promise<FieldsSelection<Feed, R>>}),
    feed_infos: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>})&({get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>}),
    feed_version_gtfs_import: (FeedVersionGtfsImportPromiseChain & {get: <R extends FeedVersionGtfsImportRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersionGtfsImport, R> | undefined)) => Promise<(FieldsSelection<FeedVersionGtfsImport, R> | undefined)>}),
    fetched_at: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    
/** Metadata for each text file present in the main directory of the zip archive  */
files: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Promise<FieldsSelection<FeedVersionFileInfo, R>[]>})&({get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Promise<FieldsSelection<FeedVersionFileInfo, R>[]>}),
    
/** Convex hull around all active stops in the feed version */
geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    latest_calendar_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    routes: ((args?: {limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>}),
    service_levels: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedVersionServiceLevelFilter | null)}) => {get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>})&({get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>}),
    sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stops: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopFilter | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>}),
    trips: ((args?: {limit?: (Scalars['Int'] | null),where?: (TripFilter | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>})&({get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>}),
    updated_by: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
export interface FeedVersionObservableChain{
    agencies: ((args?: {limit?: (Scalars['Int'] | null),where?: (AgencyFilter | null)}) => {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>})&({get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>}),
    created_by: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    earliest_calendar_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>}),
    feed: (FeedObservableChain & {get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>) => Observable<FieldsSelection<Feed, R>>}),
    feed_infos: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>})&({get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>}),
    feed_version_gtfs_import: (FeedVersionGtfsImportObservableChain & {get: <R extends FeedVersionGtfsImportRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersionGtfsImport, R> | undefined)) => Observable<(FieldsSelection<FeedVersionGtfsImport, R> | undefined)>}),
    fetched_at: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    
/** Metadata for each text file present in the main directory of the zip archive  */
files: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Observable<FieldsSelection<FeedVersionFileInfo, R>[]>})&({get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Observable<FieldsSelection<FeedVersionFileInfo, R>[]>}),
    
/** Convex hull around all active stops in the feed version */
geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    latest_calendar_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    routes: ((args?: {limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>}),
    service_levels: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedVersionServiceLevelFilter | null)}) => {get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>})&({get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>}),
    sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stops: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopFilter | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>}),
    trips: ((args?: {limit?: (Scalars['Int'] | null),where?: (TripFilter | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>})&({get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>}),
    updated_by: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface FeedVersionDeleteResultPromiseChain{
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface FeedVersionDeleteResultObservableChain{
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface FeedVersionFetchResultPromiseChain{
    feed_version: (FeedVersionPromiseChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Promise<(FieldsSelection<FeedVersion, R> | undefined)>}),
    fetch_error: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    found_dir_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    found_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface FeedVersionFetchResultObservableChain{
    feed_version: (FeedVersionObservableChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Observable<(FieldsSelection<FeedVersion, R> | undefined)>}),
    fetch_error: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    found_dir_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    found_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface FeedVersionFileInfoPromiseChain{
    csv_like: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    header: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    size: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface FeedVersionFileInfoObservableChain{
    csv_like: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    header: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    size: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface FeedVersionGtfsImportPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    entity_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>}),
    exception_log: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    in_progress: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    interpolated_stop_time_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    schedule_removed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    skip_entity_error_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>}),
    skip_entity_filter_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>}),
    skip_entity_marked_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>}),
    skip_entity_reference_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>}),
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    warning_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>})
}

export interface FeedVersionGtfsImportObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    entity_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>}),
    exception_log: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    in_progress: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    interpolated_stop_time_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    schedule_removed: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    skip_entity_error_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>}),
    skip_entity_filter_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>}),
    skip_entity_marked_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>}),
    skip_entity_reference_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>}),
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    warning_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>})
}

export interface FeedVersionImportResultPromiseChain{
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface FeedVersionImportResultObservableChain{
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface FeedVersionServiceLevelPromiseChain{
    end_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>}),
    friday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    monday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    saturday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    start_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>}),
    sunday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    thursday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    tuesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    wednesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface FeedVersionServiceLevelObservableChain{
    end_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>}),
    friday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    monday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    saturday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    start_date: ({get: (request?: boolean|number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>}),
    sunday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    thursday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    tuesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    wednesday: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface FeedVersionUnimportResultPromiseChain{
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface FeedVersionUnimportResultObservableChain{
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}


/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
export interface FrequencyPromiseChain{
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>}),
    exact_times: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    headway_secs: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>})
}


/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
export interface FrequencyObservableChain{
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>}),
    exact_times: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    headway_secs: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>})
}

export interface ItineraryPromiseChain{
    distance: (DistancePromiseChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Promise<FieldsSelection<Distance, R>>}),
    duration: (DurationPromiseChain & {get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Promise<FieldsSelection<Duration, R>>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    from: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Promise<FieldsSelection<Waypoint, R>>}),
    legs: ({get: <R extends LegRequest>(request: R, defaultValue?: (FieldsSelection<Leg, R>[] | undefined)) => Promise<(FieldsSelection<Leg, R>[] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    to: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Promise<FieldsSelection<Waypoint, R>>})
}

export interface ItineraryObservableChain{
    distance: (DistanceObservableChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Observable<FieldsSelection<Distance, R>>}),
    duration: (DurationObservableChain & {get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Observable<FieldsSelection<Duration, R>>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    from: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Observable<FieldsSelection<Waypoint, R>>}),
    legs: ({get: <R extends LegRequest>(request: R, defaultValue?: (FieldsSelection<Leg, R>[] | undefined)) => Observable<(FieldsSelection<Leg, R>[] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    to: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Observable<FieldsSelection<Waypoint, R>>})
}

export interface LegPromiseChain{
    distance: (DistancePromiseChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Promise<FieldsSelection<Distance, R>>}),
    duration: (DurationPromiseChain & {get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Promise<FieldsSelection<Duration, R>>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    from: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: Scalars['LineString']) => Promise<Scalars['LineString']>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    steps: ({get: <R extends StepRequest>(request: R, defaultValue?: (FieldsSelection<Step, R>[] | undefined)) => Promise<(FieldsSelection<Step, R>[] | undefined)>}),
    to: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>})
}

export interface LegObservableChain{
    distance: (DistanceObservableChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Observable<FieldsSelection<Distance, R>>}),
    duration: (DurationObservableChain & {get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Observable<FieldsSelection<Duration, R>>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    from: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: Scalars['LineString']) => Observable<Scalars['LineString']>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    steps: ({get: <R extends StepRequest>(request: R, defaultValue?: (FieldsSelection<Step, R>[] | undefined)) => Observable<(FieldsSelection<Step, R>[] | undefined)>}),
    to: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>})
}


/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
export interface LevelPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    level_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    level_index: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    level_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
export interface LevelObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    level_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    level_index: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    level_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version. 
 * 
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
export interface OperatorPromiseChain{
    agencies: ({get: <R extends AgencyRequest>(request: R, defaultValue?: (FieldsSelection<Agency, R>[] | undefined)) => Promise<(FieldsSelection<Agency, R>[] | undefined)>}),
    feeds: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedFilter | null)}) => {get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Promise<(FieldsSelection<Feed, R>[] | undefined)>})&({get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Promise<(FieldsSelection<Feed, R>[] | undefined)>}),
    file: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    generated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    short_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    tags: ({get: (request?: boolean|number, defaultValue?: (Scalars['Tags'] | undefined)) => Promise<(Scalars['Tags'] | undefined)>}),
    website: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version. 
 * 
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
export interface OperatorObservableChain{
    agencies: ({get: <R extends AgencyRequest>(request: R, defaultValue?: (FieldsSelection<Agency, R>[] | undefined)) => Observable<(FieldsSelection<Agency, R>[] | undefined)>}),
    feeds: ((args?: {limit?: (Scalars['Int'] | null),where?: (FeedFilter | null)}) => {get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Observable<(FieldsSelection<Feed, R>[] | undefined)>})&({get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Observable<(FieldsSelection<Feed, R>[] | undefined)>}),
    file: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    generated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    short_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    tags: ({get: (request?: boolean|number, defaultValue?: (Scalars['Tags'] | undefined)) => Observable<(Scalars['Tags'] | undefined)>}),
    website: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
export interface PathwayPromiseChain{
    from_stop: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    is_bidirectional: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    length: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    max_slope: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    min_width: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    pathway_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    pathway_mode: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    reverse_signposted_as: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    signposted_as: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stair_count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    to_stop: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>}),
    traversal_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
export interface PathwayObservableChain{
    from_stop: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    is_bidirectional: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    length: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    max_slope: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    min_width: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    pathway_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    pathway_mode: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    reverse_signposted_as: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    signposted_as: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stair_count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    to_stop: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>}),
    traversal_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface QueryPromiseChain{
    agencies: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (AgencyFilter | null)}) => {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>})&({get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>}),
    directions: ((args: {where: DirectionRequest}) => DirectionsPromiseChain & {get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Promise<FieldsSelection<Directions, R>>}),
    feed_versions: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (FeedVersionFilter | null)}) => {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>})&({get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>}),
    feeds: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (FeedFilter | null)}) => {get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Promise<FieldsSelection<Feed, R>[]>})&({get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Promise<FieldsSelection<Feed, R>[]>}),
    operators: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (OperatorFilter | null)}) => {get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Promise<FieldsSelection<Operator, R>[]>})&({get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Promise<FieldsSelection<Operator, R>[]>}),
    routes: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>}),
    stops: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (StopFilter | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>}),
    trips: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (TripFilter | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>})&({get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>})
}

export interface QueryObservableChain{
    agencies: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (AgencyFilter | null)}) => {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>})&({get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>}),
    directions: ((args: {where: DirectionRequest}) => DirectionsObservableChain & {get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Observable<FieldsSelection<Directions, R>>}),
    feed_versions: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (FeedVersionFilter | null)}) => {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>})&({get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>}),
    feeds: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (FeedFilter | null)}) => {get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Observable<FieldsSelection<Feed, R>[]>})&({get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Observable<FieldsSelection<Feed, R>[]>}),
    operators: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (OperatorFilter | null)}) => {get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Observable<FieldsSelection<Operator, R>[]>})&({get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Observable<FieldsSelection<Operator, R>[]>}),
    routes: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (RouteFilter | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>}),
    stops: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (StopFilter | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>}),
    trips: ((args?: {after?: (Scalars['Int'] | null),ids?: (Scalars['Int'][] | null),limit?: (Scalars['Int'] | null),where?: (TripFilter | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>})&({get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
export interface RTTimeRangePromiseChain{
    end: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    start: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
export interface RTTimeRangeObservableChain{
    end: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    start: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
export interface RTTranslationPromiseChain{
    language: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    text: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
export interface RTTranslationObservableChain{
    language: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    text: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
export interface RTTripDescriptorPromiseChain{
    direction_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    route_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    schedule_relationship: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    start_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'] | undefined)) => Promise<(Scalars['Seconds'] | undefined)>}),
    trip_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
export interface RTTripDescriptorObservableChain{
    direction_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    route_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    schedule_relationship: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    start_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'] | undefined)) => Observable<(Scalars['Seconds'] | undefined)>}),
    trip_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
export interface RTVehicleDescriptorPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    label: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    license_plate: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
export interface RTVehicleDescriptorObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    label: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    license_plate: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** See https://gtfs.org/schedule/reference/#routestxt */
export interface RoutePromiseChain{
    agency: (AgencyPromiseChain & {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Promise<FieldsSelection<Agency, R>>}),
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>}),
    census_geographies: ((args: {layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Promise<(FieldsSelection<CensusGeography, R>[] | undefined)>}),
    continuous_drop_off: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    continuous_pickup: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    feed_onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    feed_version: (FeedVersionPromiseChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>}),
    feed_version_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    geometries: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Promise<FieldsSelection<RouteGeometry, R>[]>})&({get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Promise<FieldsSelection<RouteGeometry, R>[]>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>}),
    headways: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Promise<FieldsSelection<RouteHeadway, R>[]>})&({get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Promise<FieldsSelection<RouteHeadway, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    patterns: ({get: <R extends RouteStopPatternRequest>(request: R, defaultValue?: (FieldsSelection<RouteStopPattern, R>[] | undefined)) => Promise<(FieldsSelection<RouteStopPattern, R>[] | undefined)>}),
    route_color: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    route_desc: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    route_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    route_long_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    route_short_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    route_sort_order: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    route_stop_buffer: ((args?: {radius?: (Scalars['Float'] | null)}) => RouteStopBufferPromiseChain & {get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Promise<FieldsSelection<RouteStopBuffer, R>>})&(RouteStopBufferPromiseChain & {get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Promise<FieldsSelection<RouteStopBuffer, R>>}),
    route_stops: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>})&({get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>}),
    route_text_color: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    route_type: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    route_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    stops: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopFilter | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>}),
    trips: ((args?: {limit?: (Scalars['Int'] | null),where?: (TripFilter | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>})&({get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>})
}


/** See https://gtfs.org/schedule/reference/#routestxt */
export interface RouteObservableChain{
    agency: (AgencyObservableChain & {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Observable<FieldsSelection<Agency, R>>}),
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>}),
    census_geographies: ((args: {layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Observable<(FieldsSelection<CensusGeography, R>[] | undefined)>}),
    continuous_drop_off: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    continuous_pickup: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    feed_onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    feed_version: (FeedVersionObservableChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>}),
    feed_version_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    geometries: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Observable<FieldsSelection<RouteGeometry, R>[]>})&({get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Observable<FieldsSelection<RouteGeometry, R>[]>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>}),
    headways: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Observable<FieldsSelection<RouteHeadway, R>[]>})&({get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Observable<FieldsSelection<RouteHeadway, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    patterns: ({get: <R extends RouteStopPatternRequest>(request: R, defaultValue?: (FieldsSelection<RouteStopPattern, R>[] | undefined)) => Observable<(FieldsSelection<RouteStopPattern, R>[] | undefined)>}),
    route_color: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    route_desc: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    route_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    route_long_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    route_short_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    route_sort_order: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    route_stop_buffer: ((args?: {radius?: (Scalars['Float'] | null)}) => RouteStopBufferObservableChain & {get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Observable<FieldsSelection<RouteStopBuffer, R>>})&(RouteStopBufferObservableChain & {get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Observable<FieldsSelection<RouteStopBuffer, R>>}),
    route_stops: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>})&({get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>}),
    route_text_color: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    route_type: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    route_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    stops: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopFilter | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>}),
    trips: ((args?: {limit?: (Scalars['Int'] | null),where?: (TripFilter | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>})&({get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>})
}

export interface RouteGeometryPromiseChain{
    combined_geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>}),
    first_point_max_distance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    
/** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
generated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['LineString'] | undefined)) => Promise<(Scalars['LineString'] | undefined)>}),
    length: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    max_segment_length: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}

export interface RouteGeometryObservableChain{
    combined_geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>}),
    first_point_max_distance: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    
/** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
generated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: (Scalars['LineString'] | undefined)) => Observable<(Scalars['LineString'] | undefined)>}),
    length: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    max_segment_length: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}

export interface RouteHeadwayPromiseChain{
    departures: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'][] | undefined)) => Promise<(Scalars['Seconds'][] | undefined)>}),
    direction_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    dow_category: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    headway_secs: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    service_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    stop: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>}),
    stop_trip_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface RouteHeadwayObservableChain{
    departures: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'][] | undefined)) => Observable<(Scalars['Seconds'][] | undefined)>}),
    direction_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    dow_category: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    headway_secs: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    service_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    stop: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>}),
    stop_trip_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}

export interface RouteStopPromiseChain{
    agency: (AgencyPromiseChain & {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Promise<FieldsSelection<Agency, R>>}),
    agency_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    route: (RoutePromiseChain & {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Promise<FieldsSelection<Route, R>>}),
    route_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    stop: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>}),
    stop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface RouteStopObservableChain{
    agency: (AgencyObservableChain & {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Observable<FieldsSelection<Agency, R>>}),
    agency_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    route: (RouteObservableChain & {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Observable<FieldsSelection<Route, R>>}),
    route_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    stop: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>}),
    stop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface RouteStopBufferPromiseChain{
    stop_buffer: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>}),
    stop_convexhull: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>}),
    stop_points: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>})
}

export interface RouteStopBufferObservableChain{
    stop_buffer: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>}),
    stop_convexhull: ({get: (request?: boolean|number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>}),
    stop_points: ({get: (request?: boolean|number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>})
}

export interface RouteStopPatternPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    direction_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    stop_pattern_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    trips: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: (FieldsSelection<Trip, R>[] | undefined)) => Promise<(FieldsSelection<Trip, R>[] | undefined)>})&({get: <R extends TripRequest>(request: R, defaultValue?: (FieldsSelection<Trip, R>[] | undefined)) => Promise<(FieldsSelection<Trip, R>[] | undefined)>})
}

export interface RouteStopPatternObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    direction_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    stop_pattern_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    trips: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends TripRequest>(request: R, defaultValue?: (FieldsSelection<Trip, R>[] | undefined)) => Observable<(FieldsSelection<Trip, R>[] | undefined)>})&({get: <R extends TripRequest>(request: R, defaultValue?: (FieldsSelection<Trip, R>[] | undefined)) => Observable<(FieldsSelection<Trip, R>[] | undefined)>})
}


/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
export interface ShapePromiseChain{
    generated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: Scalars['LineString']) => Promise<Scalars['LineString']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    shape_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
export interface ShapeObservableChain{
    generated: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: Scalars['LineString']) => Observable<Scalars['LineString']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    shape_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StepPromiseChain{
    distance: (DistancePromiseChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Promise<FieldsSelection<Distance, R>>}),
    duration: (DurationPromiseChain & {get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Promise<FieldsSelection<Duration, R>>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    geometry_offset: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    instruction: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    mode: ({get: (request?: boolean|number, defaultValue?: StepMode) => Promise<StepMode>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>}),
    to: (WaypointPromiseChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>})
}

export interface StepObservableChain{
    distance: (DistanceObservableChain & {get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Observable<FieldsSelection<Distance, R>>}),
    duration: (DurationObservableChain & {get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Observable<FieldsSelection<Duration, R>>}),
    end_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    geometry_offset: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    instruction: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    mode: ({get: (request?: boolean|number, defaultValue?: StepMode) => Observable<StepMode>}),
    start_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>}),
    to: (WaypointObservableChain & {get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>})
}


/** See https://gtfs.org/reference/static/#stopstxt */
export interface StopPromiseChain{
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>}),
    arrivals: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>}),
    census_geographies: ((args: {layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Promise<(FieldsSelection<CensusGeography, R>[] | undefined)>}),
    children: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Promise<(FieldsSelection<Stop, R>[] | undefined)>})&({get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Promise<(FieldsSelection<Stop, R>[] | undefined)>}),
    departures: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>}),
    directions: ((args?: {depart_at?: (Scalars['Time'] | null),from?: (WaypointInput | null),mode?: (StepMode | null),to?: (WaypointInput | null)}) => DirectionsPromiseChain & {get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Promise<FieldsSelection<Directions, R>>})&(DirectionsPromiseChain & {get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Promise<FieldsSelection<Directions, R>>}),
    feed_onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    feed_version: (FeedVersionPromiseChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>}),
    feed_version_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: Scalars['Point']) => Promise<Scalars['Point']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    level: (LevelPromiseChain & {get: <R extends LevelRequest>(request: R, defaultValue?: (FieldsSelection<Level, R> | undefined)) => Promise<(FieldsSelection<Level, R> | undefined)>}),
    location_type: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    nearby_stops: ((args?: {limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Promise<(FieldsSelection<Stop, R>[] | undefined)>})&({get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Promise<(FieldsSelection<Stop, R>[] | undefined)>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    parent: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Promise<(FieldsSelection<Stop, R> | undefined)>}),
    pathways_from_stop: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>})&({get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>}),
    pathways_to_stop: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>})&({get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>}),
    platform_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    route_stops: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>})&({get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    stop_code: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stop_desc: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stop_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stop_times: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>}),
    stop_timezone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stop_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tts_stop_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    wheelchair_boarding: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    zone_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** See https://gtfs.org/reference/static/#stopstxt */
export interface StopObservableChain{
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>}),
    arrivals: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>}),
    census_geographies: ((args: {layer: Scalars['String'],limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Observable<(FieldsSelection<CensusGeography, R>[] | undefined)>}),
    children: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Observable<(FieldsSelection<Stop, R>[] | undefined)>})&({get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Observable<(FieldsSelection<Stop, R>[] | undefined)>}),
    departures: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>}),
    directions: ((args?: {depart_at?: (Scalars['Time'] | null),from?: (WaypointInput | null),mode?: (StepMode | null),to?: (WaypointInput | null)}) => DirectionsObservableChain & {get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Observable<FieldsSelection<Directions, R>>})&(DirectionsObservableChain & {get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Observable<FieldsSelection<Directions, R>>}),
    feed_onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    feed_version: (FeedVersionObservableChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>}),
    feed_version_sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    geometry: ({get: (request?: boolean|number, defaultValue?: Scalars['Point']) => Observable<Scalars['Point']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    level: (LevelObservableChain & {get: <R extends LevelRequest>(request: R, defaultValue?: (FieldsSelection<Level, R> | undefined)) => Observable<(FieldsSelection<Level, R> | undefined)>}),
    location_type: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    nearby_stops: ((args?: {limit?: (Scalars['Int'] | null),radius?: (Scalars['Float'] | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Observable<(FieldsSelection<Stop, R>[] | undefined)>})&({get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Observable<(FieldsSelection<Stop, R>[] | undefined)>}),
    onestop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    parent: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Observable<(FieldsSelection<Stop, R> | undefined)>}),
    pathways_from_stop: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>})&({get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>}),
    pathways_to_stop: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>})&({get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>}),
    platform_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    route_stops: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>})&({get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>}),
    search_rank: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    stop_code: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stop_desc: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stop_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stop_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stop_times: ((args?: {limit?: (Scalars['Int'] | null),where?: (StopTimeFilter | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>}),
    stop_timezone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stop_url: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tts_stop_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    wheelchair_boarding: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    zone_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
export interface StopTimePromiseChain{
    arrival: (StopTimeEventPromiseChain & {get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Promise<FieldsSelection<StopTimeEvent, R>>}),
    arrival_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>}),
    continuous_drop_off: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    continuous_pickup: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    departure: (StopTimeEventPromiseChain & {get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Promise<FieldsSelection<StopTimeEvent, R>>}),
    departure_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>}),
    drop_off_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    interpolated: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    pickup_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    service_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    stop: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>}),
    stop_headsign: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    stop_sequence: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    timepoint: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    trip: (TripPromiseChain & {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>) => Promise<FieldsSelection<Trip, R>>})
}


/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
export interface StopTimeObservableChain{
    arrival: (StopTimeEventObservableChain & {get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Observable<FieldsSelection<StopTimeEvent, R>>}),
    arrival_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>}),
    continuous_drop_off: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    continuous_pickup: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    departure: (StopTimeEventObservableChain & {get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Observable<FieldsSelection<StopTimeEvent, R>>}),
    departure_time: ({get: (request?: boolean|number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>}),
    drop_off_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    interpolated: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    pickup_type: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    service_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    stop: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>}),
    stop_headsign: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    stop_sequence: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    timepoint: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    trip: (TripObservableChain & {get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>) => Observable<FieldsSelection<Trip, R>>})
}

export interface StopTimeEventPromiseChain{
    delay: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    estimated: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'] | undefined)) => Promise<(Scalars['Seconds'] | undefined)>}),
    estimated_utc: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    scheduled: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'] | undefined)) => Promise<(Scalars['Seconds'] | undefined)>}),
    stop_timezone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    uncertainty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface StopTimeEventObservableChain{
    delay: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    estimated: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'] | undefined)) => Observable<(Scalars['Seconds'] | undefined)>}),
    estimated_utc: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    scheduled: ({get: (request?: boolean|number, defaultValue?: (Scalars['Seconds'] | undefined)) => Observable<(Scalars['Seconds'] | undefined)>}),
    stop_timezone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    uncertainty: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
export interface TripPromiseChain{
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>}),
    bikes_allowed: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    block_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    calendar: (CalendarPromiseChain & {get: <R extends CalendarRequest>(request: R, defaultValue?: FieldsSelection<Calendar, R>) => Promise<FieldsSelection<Calendar, R>>}),
    direction_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    feed_version: (FeedVersionPromiseChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>}),
    frequencies: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Promise<FieldsSelection<Frequency, R>[]>})&({get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Promise<FieldsSelection<Frequency, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    route: (RoutePromiseChain & {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Promise<FieldsSelection<Route, R>>}),
    schedule_relationship: ({get: (request?: boolean|number, defaultValue?: (ScheduleRelationship | undefined)) => Promise<(ScheduleRelationship | undefined)>}),
    shape: (ShapePromiseChain & {get: <R extends ShapeRequest>(request: R, defaultValue?: (FieldsSelection<Shape, R> | undefined)) => Promise<(FieldsSelection<Shape, R> | undefined)>}),
    stop_pattern_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    stop_times: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Promise<(FieldsSelection<StopTime, R> | undefined)[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Promise<(FieldsSelection<StopTime, R> | undefined)[]>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    trip_headsign: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    trip_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    trip_short_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    wheelchair_accessible: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}


/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
export interface TripObservableChain{
    alerts: ({get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>}),
    bikes_allowed: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    block_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    calendar: (CalendarObservableChain & {get: <R extends CalendarRequest>(request: R, defaultValue?: FieldsSelection<Calendar, R>) => Observable<FieldsSelection<Calendar, R>>}),
    direction_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    feed_version: (FeedVersionObservableChain & {get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>}),
    frequencies: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Observable<FieldsSelection<Frequency, R>[]>})&({get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Observable<FieldsSelection<Frequency, R>[]>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    route: (RouteObservableChain & {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Observable<FieldsSelection<Route, R>>}),
    schedule_relationship: ({get: (request?: boolean|number, defaultValue?: (ScheduleRelationship | undefined)) => Observable<(ScheduleRelationship | undefined)>}),
    shape: (ShapeObservableChain & {get: <R extends ShapeRequest>(request: R, defaultValue?: (FieldsSelection<Shape, R> | undefined)) => Observable<(FieldsSelection<Shape, R> | undefined)>}),
    stop_pattern_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    stop_times: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Observable<(FieldsSelection<StopTime, R> | undefined)[]>})&({get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Observable<(FieldsSelection<StopTime, R> | undefined)[]>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    trip_headsign: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    trip_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    trip_short_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    wheelchair_accessible: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}

export interface ValidationResultPromiseChain{
    agencies: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>})&({get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>}),
    earliest_calendar_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    errors: ({get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Promise<FieldsSelection<ValidationResultErrorGroup, R>[]>}),
    failure_reason: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    feed_infos: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>})&({get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>}),
    files: ({get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Promise<FieldsSelection<FeedVersionFileInfo, R>[]>}),
    latest_calendar_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>}),
    routes: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>}),
    service_levels: ((args?: {limit?: (Scalars['Int'] | null),route_id?: (Scalars['String'] | null)}) => {get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>})&({get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>}),
    sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    stops: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>}),
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    warnings: ({get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Promise<FieldsSelection<ValidationResultErrorGroup, R>[]>})
}

export interface ValidationResultObservableChain{
    agencies: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>})&({get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>}),
    earliest_calendar_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    errors: ({get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Observable<FieldsSelection<ValidationResultErrorGroup, R>[]>}),
    failure_reason: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    feed_infos: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>})&({get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>}),
    files: ({get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Observable<FieldsSelection<FeedVersionFileInfo, R>[]>}),
    latest_calendar_date: ({get: (request?: boolean|number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>}),
    routes: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>})&({get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>}),
    service_levels: ((args?: {limit?: (Scalars['Int'] | null),route_id?: (Scalars['String'] | null)}) => {get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>})&({get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>}),
    sha1: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    stops: ((args?: {limit?: (Scalars['Int'] | null)}) => {get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>})&({get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>}),
    success: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    warnings: ({get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Observable<FieldsSelection<ValidationResultErrorGroup, R>[]>})
}

export interface ValidationResultErrorPromiseChain{
    entity_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    error_type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    field: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ValidationResultErrorObservableChain{
    entity_id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    error_type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    field: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface ValidationResultErrorGroupPromiseChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    error_type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    errors: ({get: <R extends ValidationResultErrorRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultError, R>[]) => Promise<FieldsSelection<ValidationResultError, R>[]>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    limit: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})
}

export interface ValidationResultErrorGroupObservableChain{
    count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    error_type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    errors: ({get: <R extends ValidationResultErrorRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultError, R>[]) => Observable<FieldsSelection<ValidationResultError, R>[]>}),
    filename: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    limit: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})
}


/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
export interface VehiclePositionPromiseChain{
    congestion_level: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    current_status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    current_stop_sequence: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    position: ({get: (request?: boolean|number, defaultValue?: (Scalars['Point'] | undefined)) => Promise<(Scalars['Point'] | undefined)>}),
    stop_id: (StopPromiseChain & {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Promise<(FieldsSelection<Stop, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>}),
    vehicle: (RTVehicleDescriptorPromiseChain & {get: <R extends RTVehicleDescriptorRequest>(request: R, defaultValue?: (FieldsSelection<RTVehicleDescriptor, R> | undefined)) => Promise<(FieldsSelection<RTVehicleDescriptor, R> | undefined)>})
}


/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
export interface VehiclePositionObservableChain{
    congestion_level: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    current_status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    current_stop_sequence: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    position: ({get: (request?: boolean|number, defaultValue?: (Scalars['Point'] | undefined)) => Observable<(Scalars['Point'] | undefined)>}),
    stop_id: (StopObservableChain & {get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Observable<(FieldsSelection<Stop, R> | undefined)>}),
    timestamp: ({get: (request?: boolean|number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>}),
    vehicle: (RTVehicleDescriptorObservableChain & {get: <R extends RTVehicleDescriptorRequest>(request: R, defaultValue?: (FieldsSelection<RTVehicleDescriptor, R> | undefined)) => Observable<(FieldsSelection<RTVehicleDescriptor, R> | undefined)>})
}

export interface WaypointPromiseChain{
    lat: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    lon: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface WaypointObservableChain{
    lat: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    lon: ({get: (request?: boolean|number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}