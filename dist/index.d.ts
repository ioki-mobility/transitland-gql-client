import { FieldsSelection, Observable, ClientOptions, GraphqlOperation } from '@genql/runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';

declare type Scalars = {
    Any: any;
    Boolean: boolean;
    Date: any;
    Float: number;
    Geometry: any;
    Int: number;
    LineString: any;
    Map: any;
    Point: any;
    Polygon: any;
    Seconds: any;
    String: string;
    Tags: any;
    Time: any;
    Upload: any;
};
/** See https://gtfs.org/schedule/reference/#agencytxt */
interface Agency {
    agency_email: Scalars['String'];
    agency_fare_url: Scalars['String'];
    agency_id: Scalars['String'];
    agency_lang: Scalars['String'];
    agency_name: Scalars['String'];
    agency_phone: Scalars['String'];
    agency_timezone: Scalars['String'];
    agency_url: Scalars['String'];
    alerts?: Alert[];
    census_geographies?: CensusGeography[];
    feed_onestop_id?: Scalars['String'];
    feed_version: FeedVersion;
    feed_version_sha1?: Scalars['String'];
    geometry?: Scalars['Polygon'];
    id: Scalars['Int'];
    onestop_id: Scalars['String'];
    operator?: Operator;
    places?: AgencyPlace[];
    routes: Route[];
    search_rank?: Scalars['String'];
    __typename: 'Agency';
}
interface AgencyPlace {
    adm0_name?: Scalars['String'];
    adm1_name?: Scalars['String'];
    city_name?: Scalars['String'];
    rank?: Scalars['Float'];
    __typename: 'AgencyPlace';
}
/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
interface Alert {
    active_period?: RTTimeRange[];
    cause?: Scalars['String'];
    description_text: RTTranslation[];
    effect?: Scalars['String'];
    header_text: RTTranslation[];
    severity_level?: Scalars['String'];
    tts_description_text?: RTTranslation[];
    tts_header_text?: RTTranslation[];
    url?: RTTranslation[];
    __typename: 'Alert';
}
/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
interface Calendar {
    added_dates: Scalars['Date'][];
    end_date: Scalars['Date'];
    friday: Scalars['Int'];
    id: Scalars['Int'];
    monday: Scalars['Int'];
    removed_dates: Scalars['Date'][];
    saturday: Scalars['Int'];
    service_id: Scalars['String'];
    start_date: Scalars['Date'];
    sunday: Scalars['Int'];
    thursday: Scalars['Int'];
    tuesday: Scalars['Int'];
    wednesday: Scalars['Int'];
    __typename: 'Calendar';
}
interface CensusGeography {
    aland?: Scalars['Float'];
    awater?: Scalars['Float'];
    geoid?: Scalars['String'];
    geometry?: Scalars['Polygon'];
    id: Scalars['Int'];
    layer_name: Scalars['String'];
    name?: Scalars['String'];
    values: (CensusValue | undefined)[];
    __typename: 'CensusGeography';
}
interface CensusTable {
    id: Scalars['Int'];
    table_group: Scalars['String'];
    table_name: Scalars['String'];
    table_title: Scalars['String'];
    __typename: 'CensusTable';
}
interface CensusValue {
    table: CensusTable;
    values: Scalars['Any'];
    __typename: 'CensusValue';
}
interface Directions {
    data_source?: Scalars['String'];
    destination?: Waypoint;
    distance?: Distance;
    duration?: Duration;
    end_time?: Scalars['Time'];
    exception?: Scalars['String'];
    itineraries?: Itinerary[];
    origin?: Waypoint;
    start_time?: Scalars['Time'];
    success: Scalars['Boolean'];
    __typename: 'Directions';
}
interface Distance {
    distance: Scalars['Float'];
    units: DistanceUnit;
    __typename: 'Distance';
}
declare type DistanceUnit = 'KILOMETERS' | 'MILES';
interface Duration {
    duration: Scalars['Float'];
    units: DurationUnit;
    __typename: 'Duration';
}
declare type DurationUnit = 'SECONDS';
/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
interface Feed {
    associated_operators?: Operator[];
    authorization?: FeedAuthorization;
    feed_fetches?: FeedFetch[];
    feed_state?: FeedState;
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions: FeedVersion[];
    file: Scalars['String'];
    /** Unique integer ID */
    id: Scalars['Int'];
    /** Language(s) included in this feed */
    languages?: Scalars['String'][];
    license?: FeedLicense;
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name?: Scalars['String'];
    /** Onestop ID for this feed */
    onestop_id: Scalars['String'];
    search_rank?: Scalars['String'];
    spec?: FeedSpecTypes;
    tags?: Scalars['Tags'];
    urls?: FeedUrls;
    __typename: 'Feed';
}
/** Details on how to construct an HTTP request to access a protected resource */
interface FeedAuthorization {
    /** Website to visit to sign up for an account */
    info_url: Scalars['String'];
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name: Scalars['String'];
    /** Method for inserting authorization secret into request */
    type: Scalars['String'];
    __typename: 'FeedAuthorization';
}
interface FeedFetch {
    fetch_error?: Scalars['String'];
    fetched_at?: Scalars['Time'];
    id: Scalars['Int'];
    response_code?: Scalars['Int'];
    response_sha1?: Scalars['String'];
    response_size?: Scalars['Int'];
    success?: Scalars['Boolean'];
    url?: Scalars['String'];
    url_type?: Scalars['String'];
    __typename: 'FeedFetch';
}
/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
interface FeedInfo {
    default_lang?: Scalars['String'];
    feed_contact_email?: Scalars['String'];
    feed_contact_url?: Scalars['String'];
    feed_end_date?: Scalars['Date'];
    feed_lang: Scalars['String'];
    feed_publisher_name: Scalars['String'];
    feed_publisher_url: Scalars['String'];
    feed_start_date?: Scalars['Date'];
    feed_version: Scalars['String'];
    id: Scalars['Int'];
    __typename: 'FeedInfo';
}
/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
interface FeedLicense {
    /** Feed consumers must follow these instructions for how to provide attribution */
    attribution_instructions: Scalars['String'];
    /** Feed consumers must include this particular text when using this feed */
    attribution_text: Scalars['String'];
    /** Are feed consumers allowed to use the feed for commercial purposes? */
    commercial_use_allowed: Scalars['String'];
    /** Are feed consumers allowed to create and share derived products from the feed? */
    create_derived_product: Scalars['String'];
    /** Are feed consumers allowed to redistribute the feed in its entirety? */
    redistribution_allowed: Scalars['String'];
    /** Are feed consumers allowed to keep their modifications of this feed private? */
    share_alike_optional: Scalars['String'];
    /** SPDX identifier for a common license. See https://spdx.org/licenses/ */
    spdx_identifier: Scalars['String'];
    /** URL for a custom license */
    url: Scalars['String'];
    /** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
    use_without_attribution: Scalars['String'];
    __typename: 'FeedLicense';
}
declare type FeedSourceUrlTypes = 'gbfs_auto_discovery' | 'mds_provider' | 'realtime_alerts' | 'realtime_trip_updates' | 'realtime_vehicle_positions' | 'static_current' | 'static_historic' | 'static_hypothetical' | 'static_planned';
/** Type of data contained in a source feed */
declare type FeedSpecTypes = 'GBFS' | 'GTFS' | 'GTFS_RT' | 'MDS';
/** Details on the current state of this feed, such as active version, last fetch time, etc. */
interface FeedState {
    /** The active feed version for this feed */
    feed_version?: FeedVersion;
    id: Scalars['Int'];
    __typename: 'FeedState';
}
/** URL(s) from which Transitland sources a feed */
interface FeedUrls {
    /** URL for GBFS feed `gbfs.json` auto-discovery file */
    gbfs_auto_discovery: Scalars['String'];
    /** URL for MDS feed provider endpoint */
    mds_provider: Scalars['String'];
    /** URL for GTFS Realtime Alert messages */
    realtime_alerts: Scalars['String'];
    /** URL for GTFS Realtime TripUpdate messages */
    realtime_trip_updates: Scalars['String'];
    /** URL for GTFS Realtime VehiclePosition messages */
    realtime_vehicle_positions: Scalars['String'];
    /** URL for the static feed that represents today's service */
    static_current: Scalars['String'];
    /** URLs for static feeds that represent past service that is no longer in effect  */
    static_historic: Scalars['String'][];
    /** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
    static_planned: Scalars['String'];
    __typename: 'FeedUrls';
}
/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
interface FeedVersion {
    agencies: Agency[];
    created_by?: Scalars['String'];
    description?: Scalars['String'];
    earliest_calendar_date: Scalars['Date'];
    feed: Feed;
    feed_infos: FeedInfo[];
    feed_version_gtfs_import?: FeedVersionGtfsImport;
    fetched_at: Scalars['Time'];
    /** Metadata for each text file present in the main directory of the zip archive  */
    files: FeedVersionFileInfo[];
    /** Convex hull around all active stops in the feed version */
    geometry?: Scalars['Polygon'];
    id: Scalars['Int'];
    latest_calendar_date: Scalars['Date'];
    name?: Scalars['String'];
    routes: Route[];
    service_levels: FeedVersionServiceLevel[];
    sha1: Scalars['String'];
    stops: Stop[];
    trips: Trip[];
    updated_by?: Scalars['String'];
    url: Scalars['String'];
    __typename: 'FeedVersion';
}
interface FeedVersionDeleteResult {
    success: Scalars['Boolean'];
    __typename: 'FeedVersionDeleteResult';
}
interface FeedVersionFetchResult {
    feed_version?: FeedVersion;
    fetch_error?: Scalars['String'];
    found_dir_sha1: Scalars['Boolean'];
    found_sha1: Scalars['Boolean'];
    __typename: 'FeedVersionFetchResult';
}
interface FeedVersionFileInfo {
    csv_like: Scalars['Boolean'];
    header: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
    rows: Scalars['Int'];
    sha1: Scalars['String'];
    size: Scalars['Int'];
    __typename: 'FeedVersionFileInfo';
}
interface FeedVersionGtfsImport {
    created_at?: Scalars['Time'];
    entity_count?: Scalars['Any'];
    exception_log: Scalars['String'];
    id: Scalars['Int'];
    in_progress: Scalars['Boolean'];
    interpolated_stop_time_count?: Scalars['Int'];
    schedule_removed: Scalars['Boolean'];
    skip_entity_error_count?: Scalars['Any'];
    skip_entity_filter_count?: Scalars['Any'];
    skip_entity_marked_count?: Scalars['Any'];
    skip_entity_reference_count?: Scalars['Any'];
    success: Scalars['Boolean'];
    updated_at?: Scalars['Time'];
    warning_count?: Scalars['Any'];
    __typename: 'FeedVersionGtfsImport';
}
interface FeedVersionImportResult {
    success: Scalars['Boolean'];
    __typename: 'FeedVersionImportResult';
}
interface FeedVersionServiceLevel {
    end_date: Scalars['Date'];
    friday: Scalars['Int'];
    id: Scalars['Int'];
    monday: Scalars['Int'];
    saturday: Scalars['Int'];
    start_date: Scalars['Date'];
    sunday: Scalars['Int'];
    thursday: Scalars['Int'];
    tuesday: Scalars['Int'];
    wednesday: Scalars['Int'];
    __typename: 'FeedVersionServiceLevel';
}
interface FeedVersionUnimportResult {
    success: Scalars['Boolean'];
    __typename: 'FeedVersionUnimportResult';
}
/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
interface Frequency {
    end_time: Scalars['Seconds'];
    exact_times: Scalars['Int'];
    headway_secs: Scalars['Int'];
    id: Scalars['Int'];
    start_time: Scalars['Seconds'];
    __typename: 'Frequency';
}
declare type ImportStatus = 'ERROR' | 'IN_PROGRESS' | 'SUCCESS';
interface Itinerary {
    distance: Distance;
    duration: Duration;
    end_time: Scalars['Time'];
    from: Waypoint;
    legs?: Leg[];
    start_time: Scalars['Time'];
    to: Waypoint;
    __typename: 'Itinerary';
}
interface Leg {
    distance: Distance;
    duration: Duration;
    end_time: Scalars['Time'];
    from?: Waypoint;
    geometry: Scalars['LineString'];
    start_time: Scalars['Time'];
    steps?: Step[];
    to?: Waypoint;
    __typename: 'Leg';
}
/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
interface Level {
    id: Scalars['Int'];
    level_id: Scalars['String'];
    level_index: Scalars['Float'];
    level_name: Scalars['String'];
    __typename: 'Level';
}
interface Mutation {
    feed_version_delete: FeedVersionDeleteResult;
    feed_version_fetch?: FeedVersionFetchResult;
    feed_version_import: FeedVersionImportResult;
    feed_version_unimport: FeedVersionUnimportResult;
    feed_version_update?: FeedVersion;
    validate_gtfs?: ValidationResult;
    __typename: 'Mutation';
}
/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version.
 *
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
interface Operator {
    agencies?: Agency[];
    feeds?: Feed[];
    file?: Scalars['String'];
    generated: Scalars['Boolean'];
    id: Scalars['Int'];
    name?: Scalars['String'];
    onestop_id?: Scalars['String'];
    search_rank?: Scalars['String'];
    short_name?: Scalars['String'];
    tags?: Scalars['Tags'];
    website?: Scalars['String'];
    __typename: 'Operator';
}
/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
interface Pathway {
    from_stop: Stop;
    id: Scalars['Int'];
    is_bidirectional: Scalars['Int'];
    length: Scalars['Float'];
    max_slope: Scalars['Float'];
    min_width: Scalars['Float'];
    pathway_id: Scalars['String'];
    pathway_mode: Scalars['Int'];
    reverse_signposted_as: Scalars['String'];
    signposted_as: Scalars['String'];
    stair_count: Scalars['Int'];
    to_stop: Stop;
    traversal_time: Scalars['Int'];
    __typename: 'Pathway';
}
interface Query {
    agencies: Agency[];
    directions: Directions;
    feed_versions: FeedVersion[];
    feeds: Feed[];
    operators: Operator[];
    routes: Route[];
    stops: Stop[];
    trips: Trip[];
    __typename: 'Query';
}
/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
interface RTTimeRange {
    end?: Scalars['Int'];
    start?: Scalars['Int'];
    __typename: 'RTTimeRange';
}
/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
interface RTTranslation {
    language?: Scalars['String'];
    text: Scalars['String'];
    __typename: 'RTTranslation';
}
/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
interface RTTripDescriptor {
    direction_id?: Scalars['Int'];
    route_id?: Scalars['String'];
    schedule_relationship?: Scalars['String'];
    start_date?: Scalars['Date'];
    start_time?: Scalars['Seconds'];
    trip_id?: Scalars['String'];
    __typename: 'RTTripDescriptor';
}
/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
interface RTVehicleDescriptor {
    id?: Scalars['String'];
    label?: Scalars['String'];
    license_plate?: Scalars['String'];
    __typename: 'RTVehicleDescriptor';
}
declare type Role = 'ADMIN' | 'ANON' | 'USER';
/** See https://gtfs.org/schedule/reference/#routestxt */
interface Route {
    agency: Agency;
    alerts?: Alert[];
    census_geographies?: CensusGeography[];
    continuous_drop_off?: Scalars['Int'];
    continuous_pickup?: Scalars['Int'];
    feed_onestop_id: Scalars['String'];
    feed_version: FeedVersion;
    feed_version_sha1: Scalars['String'];
    geometries: RouteGeometry[];
    geometry?: Scalars['Geometry'];
    headways: RouteHeadway[];
    id: Scalars['Int'];
    onestop_id?: Scalars['String'];
    route_color: Scalars['String'];
    route_desc: Scalars['String'];
    route_id: Scalars['String'];
    route_long_name: Scalars['String'];
    route_short_name: Scalars['String'];
    route_sort_order: Scalars['Int'];
    route_stop_buffer: RouteStopBuffer;
    route_stops: RouteStop[];
    route_text_color: Scalars['String'];
    route_type: Scalars['Int'];
    route_url: Scalars['String'];
    search_rank?: Scalars['String'];
    stops: Stop[];
    trips: Trip[];
    __typename: 'Route';
}
interface RouteGeometry {
    combined_geometry?: Scalars['Geometry'];
    first_point_max_distance?: Scalars['Float'];
    /** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
    generated: Scalars['Boolean'];
    geometry?: Scalars['LineString'];
    length?: Scalars['Float'];
    max_segment_length?: Scalars['Float'];
    __typename: 'RouteGeometry';
}
interface RouteHeadway {
    departures?: Scalars['Seconds'][];
    direction_id?: Scalars['Int'];
    dow_category?: Scalars['Int'];
    headway_secs?: Scalars['Int'];
    service_date?: Scalars['Date'];
    stop: Stop;
    stop_trip_count?: Scalars['Int'];
    __typename: 'RouteHeadway';
}
interface RouteStop {
    agency: Agency;
    agency_id: Scalars['Int'];
    id: Scalars['Int'];
    route: Route;
    route_id: Scalars['Int'];
    stop: Stop;
    stop_id: Scalars['Int'];
    __typename: 'RouteStop';
}
interface RouteStopBuffer {
    stop_buffer?: Scalars['Geometry'];
    stop_convexhull?: Scalars['Polygon'];
    stop_points?: Scalars['Geometry'];
    __typename: 'RouteStopBuffer';
}
declare type ScheduleRelationship = 'ADDED' | 'CANCELED' | 'SCHEDULED' | 'UNSCHEDULED';
/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
interface Shape {
    generated: Scalars['Boolean'];
    geometry: Scalars['LineString'];
    id: Scalars['Int'];
    shape_id: Scalars['String'];
    __typename: 'Shape';
}
interface Step {
    distance: Distance;
    duration: Duration;
    end_time: Scalars['Time'];
    geometry_offset: Scalars['Int'];
    instruction: Scalars['String'];
    mode: StepMode;
    start_time: Scalars['Time'];
    to?: Waypoint;
    __typename: 'Step';
}
declare type StepMode = 'AUTO' | 'BICYCLE' | 'LINE' | 'TRANSIT' | 'WALK';
/** See https://gtfs.org/reference/static/#stopstxt */
interface Stop {
    alerts?: Alert[];
    arrivals: StopTime[];
    census_geographies?: CensusGeography[];
    children?: Stop[];
    departures: StopTime[];
    directions: Directions;
    feed_onestop_id: Scalars['String'];
    feed_version: FeedVersion;
    feed_version_sha1: Scalars['String'];
    geometry: Scalars['Point'];
    id: Scalars['Int'];
    level?: Level;
    location_type: Scalars['Int'];
    onestop_id: Scalars['String'];
    parent?: Stop;
    pathways_from_stop: Pathway[];
    pathways_to_stop: Pathway[];
    platform_code?: Scalars['String'];
    route_stops: RouteStop[];
    search_rank?: Scalars['String'];
    stop_code: Scalars['String'];
    stop_desc: Scalars['String'];
    stop_id: Scalars['String'];
    stop_name: Scalars['String'];
    stop_times: StopTime[];
    stop_timezone: Scalars['String'];
    stop_url: Scalars['String'];
    tts_stop_name?: Scalars['String'];
    wheelchair_boarding: Scalars['Int'];
    zone_id: Scalars['String'];
    __typename: 'Stop';
}
/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
interface StopTime {
    arrival: StopTimeEvent;
    arrival_time: Scalars['Seconds'];
    continuous_drop_off?: Scalars['Int'];
    continuous_pickup?: Scalars['Int'];
    departure: StopTimeEvent;
    departure_time: Scalars['Seconds'];
    drop_off_type?: Scalars['Int'];
    interpolated?: Scalars['Int'];
    pickup_type?: Scalars['Int'];
    service_date?: Scalars['Date'];
    stop: Stop;
    stop_headsign?: Scalars['String'];
    stop_sequence: Scalars['Int'];
    timepoint?: Scalars['Int'];
    trip: Trip;
    __typename: 'StopTime';
}
interface StopTimeEvent {
    delay?: Scalars['Int'];
    estimated?: Scalars['Seconds'];
    estimated_utc?: Scalars['Time'];
    scheduled?: Scalars['Seconds'];
    stop_timezone: Scalars['String'];
    uncertainty?: Scalars['Int'];
    __typename: 'StopTimeEvent';
}
/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
interface Trip {
    alerts?: Alert[];
    bikes_allowed: Scalars['Int'];
    block_id: Scalars['String'];
    calendar: Calendar;
    direction_id: Scalars['Int'];
    feed_version: FeedVersion;
    frequencies: Frequency[];
    id: Scalars['Int'];
    route: Route;
    schedule_relationship?: ScheduleRelationship;
    shape?: Shape;
    stop_pattern_id: Scalars['Int'];
    stop_times: (StopTime | undefined)[];
    timestamp?: Scalars['Time'];
    trip_headsign: Scalars['String'];
    trip_id: Scalars['String'];
    trip_short_name: Scalars['String'];
    wheelchair_accessible: Scalars['Int'];
    __typename: 'Trip';
}
interface ValidationResult {
    agencies: Agency[];
    earliest_calendar_date?: Scalars['Date'];
    errors: ValidationResultErrorGroup[];
    failure_reason: Scalars['String'];
    feed_infos: FeedInfo[];
    files: FeedVersionFileInfo[];
    latest_calendar_date?: Scalars['Date'];
    routes: Route[];
    service_levels: FeedVersionServiceLevel[];
    sha1: Scalars['String'];
    stops: Stop[];
    success: Scalars['Boolean'];
    warnings: ValidationResultErrorGroup[];
    __typename: 'ValidationResult';
}
interface ValidationResultError {
    entity_id: Scalars['String'];
    error_type: Scalars['String'];
    field: Scalars['String'];
    filename: Scalars['String'];
    message: Scalars['String'];
    value: Scalars['String'];
    __typename: 'ValidationResultError';
}
interface ValidationResultErrorGroup {
    count: Scalars['Int'];
    error_type: Scalars['String'];
    errors: ValidationResultError[];
    filename: Scalars['String'];
    limit: Scalars['Int'];
    __typename: 'ValidationResultErrorGroup';
}
/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
interface VehiclePosition {
    congestion_level?: Scalars['String'];
    current_status?: Scalars['String'];
    current_stop_sequence?: Scalars['Int'];
    position?: Scalars['Point'];
    stop_id?: Stop;
    timestamp?: Scalars['Time'];
    vehicle?: RTVehicleDescriptor;
    __typename: 'VehiclePosition';
}
interface Waypoint {
    lat: Scalars['Float'];
    lon: Scalars['Float'];
    name?: Scalars['String'];
    __typename: 'Waypoint';
}
/** See https://gtfs.org/schedule/reference/#agencytxt */
interface AgencyRequest {
    agency_email?: boolean | number;
    agency_fare_url?: boolean | number;
    agency_id?: boolean | number;
    agency_lang?: boolean | number;
    agency_name?: boolean | number;
    agency_phone?: boolean | number;
    agency_timezone?: boolean | number;
    agency_url?: boolean | number;
    alerts?: AlertRequest;
    census_geographies?: [{
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }, CensusGeographyRequest];
    feed_onestop_id?: boolean | number;
    feed_version?: FeedVersionRequest;
    feed_version_sha1?: boolean | number;
    geometry?: boolean | number;
    id?: boolean | number;
    onestop_id?: boolean | number;
    operator?: OperatorRequest;
    places?: [{
        limit?: (Scalars['Int'] | null);
        where?: (AgencyPlaceFilter | null);
    }, AgencyPlaceRequest] | AgencyPlaceRequest;
    routes?: [{
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }, RouteRequest] | RouteRequest;
    search_rank?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface AgencyFilter {
    /** Search by country 2 letter ISO 3166 code (provided by Natural Earth) */
    adm0_iso?: (Scalars['String'] | null);
    /** Search by country name (provided by Natural Earth) */
    adm0_name?: (Scalars['String'] | null);
    /** Search by state/province/division ISO 3166-2 code (provided by Natural Earth) */
    adm1_iso?: (Scalars['String'] | null);
    /** Search by state/province/division name (provided by Natural Earth) */
    adm1_name?: (Scalars['String'] | null);
    agency_id?: (Scalars['String'] | null);
    /** Search for records with this GTFS agency_name */
    agency_name?: (Scalars['String'] | null);
    /** Search by city name (provided by Natural Earth) */
    city_name?: (Scalars['String'] | null);
    feed_onestop_id?: (Scalars['String'] | null);
    feed_version_sha1?: (Scalars['String'] | null);
    /** Search for agencies within a radius */
    near?: (PointRadius | null);
    onestop_id?: (Scalars['String'] | null);
    /** Full text search */
    search?: (Scalars['String'] | null);
    within?: (Scalars['Polygon'] | null);
}
interface AgencyPlaceRequest {
    adm0_name?: boolean | number;
    adm1_name?: boolean | number;
    city_name?: boolean | number;
    rank?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface AgencyPlaceFilter {
    min_rank?: (Scalars['Float'] | null);
}
/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
interface AlertRequest {
    active_period?: RTTimeRangeRequest;
    cause?: boolean | number;
    description_text?: RTTranslationRequest;
    effect?: boolean | number;
    header_text?: RTTranslationRequest;
    severity_level?: boolean | number;
    tts_description_text?: RTTranslationRequest;
    tts_header_text?: RTTranslationRequest;
    url?: RTTranslationRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
interface CalendarRequest {
    added_dates?: [{
        limit?: (Scalars['Int'] | null);
    }] | boolean | number;
    end_date?: boolean | number;
    friday?: boolean | number;
    id?: boolean | number;
    monday?: boolean | number;
    removed_dates?: [{
        limit?: (Scalars['Int'] | null);
    }] | boolean | number;
    saturday?: boolean | number;
    service_id?: boolean | number;
    start_date?: boolean | number;
    sunday?: boolean | number;
    thursday?: boolean | number;
    tuesday?: boolean | number;
    wednesday?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface CalendarDateFilter {
    date?: (Scalars['Date'] | null);
    exception_type?: (Scalars['Int'] | null);
}
interface CensusGeographyRequest {
    aland?: boolean | number;
    awater?: boolean | number;
    geoid?: boolean | number;
    geometry?: boolean | number;
    id?: boolean | number;
    layer_name?: boolean | number;
    name?: boolean | number;
    values?: [{
        limit?: (Scalars['Int'] | null);
        table_names: Scalars['String'][];
    }, CensusValueRequest];
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface CensusTableRequest {
    id?: boolean | number;
    table_group?: boolean | number;
    table_name?: boolean | number;
    table_title?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface CensusValueRequest {
    table?: CensusTableRequest;
    values?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface DirectionRequest {
    depart_at?: (Scalars['Time'] | null);
    from: WaypointInput;
    mode: StepMode;
    to: WaypointInput;
}
interface DirectionsRequest {
    data_source?: boolean | number;
    destination?: WaypointRequest;
    distance?: DistanceRequest;
    duration?: DurationRequest;
    end_time?: boolean | number;
    exception?: boolean | number;
    itineraries?: ItineraryRequest;
    origin?: WaypointRequest;
    start_time?: boolean | number;
    success?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface DistanceRequest {
    distance?: boolean | number;
    units?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface DurationRequest {
    duration?: boolean | number;
    units?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
interface FeedRequest {
    associated_operators?: OperatorRequest;
    authorization?: FeedAuthorizationRequest;
    feed_fetches?: [{
        limit?: (Scalars['Int'] | null);
        where?: (FeedFetchFilter | null);
    }, FeedFetchRequest] | FeedFetchRequest;
    feed_state?: FeedStateRequest;
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions?: [{
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionFilter | null);
    }, FeedVersionRequest] | FeedVersionRequest;
    file?: boolean | number;
    /** Unique integer ID */
    id?: boolean | number;
    /** Language(s) included in this feed */
    languages?: boolean | number;
    license?: FeedLicenseRequest;
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name?: boolean | number;
    /** Onestop ID for this feed */
    onestop_id?: boolean | number;
    search_rank?: boolean | number;
    spec?: boolean | number;
    tags?: boolean | number;
    urls?: FeedUrlsRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Details on how to construct an HTTP request to access a protected resource */
interface FeedAuthorizationRequest {
    /** Website to visit to sign up for an account */
    info_url?: boolean | number;
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name?: boolean | number;
    /** Method for inserting authorization secret into request */
    type?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedFetchRequest {
    fetch_error?: boolean | number;
    fetched_at?: boolean | number;
    id?: boolean | number;
    response_code?: boolean | number;
    response_sha1?: boolean | number;
    response_size?: boolean | number;
    success?: boolean | number;
    url?: boolean | number;
    url_type?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedFetchFilter {
    success?: (Scalars['Boolean'] | null);
}
interface FeedFilter {
    /** Search for feeds with or without a fetch error */
    fetch_error?: (Scalars['Boolean'] | null);
    /** Search for feeds by their import status */
    import_status?: (ImportStatus | null);
    /** Search for feed with a specific Onestop ID */
    onestop_id?: (Scalars['String'] | null);
    /** Full text search */
    search?: (Scalars['String'] | null);
    /** Search for feeds by their source URLs */
    source_url?: (FeedSourceUrl | null);
    /** Search for feeds of certain data types */
    spec?: (FeedSpecTypes[] | null);
    /** Search for feeds with a tag */
    tags?: (Scalars['Tags'] | null);
}
/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
interface FeedInfoRequest {
    default_lang?: boolean | number;
    feed_contact_email?: boolean | number;
    feed_contact_url?: boolean | number;
    feed_end_date?: boolean | number;
    feed_lang?: boolean | number;
    feed_publisher_name?: boolean | number;
    feed_publisher_url?: boolean | number;
    feed_start_date?: boolean | number;
    feed_version?: boolean | number;
    id?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
interface FeedLicenseRequest {
    /** Feed consumers must follow these instructions for how to provide attribution */
    attribution_instructions?: boolean | number;
    /** Feed consumers must include this particular text when using this feed */
    attribution_text?: boolean | number;
    /** Are feed consumers allowed to use the feed for commercial purposes? */
    commercial_use_allowed?: boolean | number;
    /** Are feed consumers allowed to create and share derived products from the feed? */
    create_derived_product?: boolean | number;
    /** Are feed consumers allowed to redistribute the feed in its entirety? */
    redistribution_allowed?: boolean | number;
    /** Are feed consumers allowed to keep their modifications of this feed private? */
    share_alike_optional?: boolean | number;
    /** SPDX identifier for a common license. See https://spdx.org/licenses/ */
    spdx_identifier?: boolean | number;
    /** URL for a custom license */
    url?: boolean | number;
    /** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
    use_without_attribution?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedSourceUrl {
    case_sensitive?: (Scalars['Boolean'] | null);
    type?: (FeedSourceUrlTypes | null);
    url?: (Scalars['String'] | null);
}
/** Details on the current state of this feed, such as active version, last fetch time, etc. */
interface FeedStateRequest {
    /** The active feed version for this feed */
    feed_version?: FeedVersionRequest;
    id?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** URL(s) from which Transitland sources a feed */
interface FeedUrlsRequest {
    /** URL for GBFS feed `gbfs.json` auto-discovery file */
    gbfs_auto_discovery?: boolean | number;
    /** URL for MDS feed provider endpoint */
    mds_provider?: boolean | number;
    /** URL for GTFS Realtime Alert messages */
    realtime_alerts?: boolean | number;
    /** URL for GTFS Realtime TripUpdate messages */
    realtime_trip_updates?: boolean | number;
    /** URL for GTFS Realtime VehiclePosition messages */
    realtime_vehicle_positions?: boolean | number;
    /** URL for the static feed that represents today's service */
    static_current?: boolean | number;
    /** URLs for static feeds that represent past service that is no longer in effect  */
    static_historic?: boolean | number;
    /** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
    static_planned?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
interface FeedVersionRequest {
    agencies?: [{
        limit?: (Scalars['Int'] | null);
        where?: (AgencyFilter | null);
    }, AgencyRequest] | AgencyRequest;
    created_by?: boolean | number;
    description?: boolean | number;
    earliest_calendar_date?: boolean | number;
    feed?: FeedRequest;
    feed_infos?: [{
        limit?: (Scalars['Int'] | null);
    }, FeedInfoRequest] | FeedInfoRequest;
    feed_version_gtfs_import?: FeedVersionGtfsImportRequest;
    fetched_at?: boolean | number;
    /** Metadata for each text file present in the main directory of the zip archive  */
    files?: [{
        limit?: (Scalars['Int'] | null);
    }, FeedVersionFileInfoRequest] | FeedVersionFileInfoRequest;
    /** Convex hull around all active stops in the feed version */
    geometry?: boolean | number;
    id?: boolean | number;
    latest_calendar_date?: boolean | number;
    name?: boolean | number;
    routes?: [{
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }, RouteRequest] | RouteRequest;
    service_levels?: [{
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionServiceLevelFilter | null);
    }, FeedVersionServiceLevelRequest] | FeedVersionServiceLevelRequest;
    sha1?: boolean | number;
    stops?: [{
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }, StopRequest] | StopRequest;
    trips?: [{
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }, TripRequest] | TripRequest;
    updated_by?: boolean | number;
    url?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionDeleteResultRequest {
    success?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionFetchResultRequest {
    feed_version?: FeedVersionRequest;
    fetch_error?: boolean | number;
    found_dir_sha1?: boolean | number;
    found_sha1?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionFileInfoRequest {
    csv_like?: boolean | number;
    header?: boolean | number;
    id?: boolean | number;
    name?: boolean | number;
    rows?: boolean | number;
    sha1?: boolean | number;
    size?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionFilter {
    feed_ids?: (Scalars['Int'][] | null);
    feed_onestop_id?: (Scalars['String'] | null);
    sha1?: (Scalars['String'] | null);
}
interface FeedVersionGtfsImportRequest {
    created_at?: boolean | number;
    entity_count?: boolean | number;
    exception_log?: boolean | number;
    id?: boolean | number;
    in_progress?: boolean | number;
    interpolated_stop_time_count?: boolean | number;
    schedule_removed?: boolean | number;
    skip_entity_error_count?: boolean | number;
    skip_entity_filter_count?: boolean | number;
    skip_entity_marked_count?: boolean | number;
    skip_entity_reference_count?: boolean | number;
    success?: boolean | number;
    updated_at?: boolean | number;
    warning_count?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionImportResultRequest {
    success?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionServiceLevelRequest {
    end_date?: boolean | number;
    friday?: boolean | number;
    id?: boolean | number;
    monday?: boolean | number;
    saturday?: boolean | number;
    start_date?: boolean | number;
    sunday?: boolean | number;
    thursday?: boolean | number;
    tuesday?: boolean | number;
    wednesday?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface FeedVersionServiceLevelFilter {
    end_date?: (Scalars['Date'] | null);
    start_date?: (Scalars['Date'] | null);
}
interface FeedVersionSetInput {
    description?: (Scalars['String'] | null);
    name?: (Scalars['String'] | null);
}
interface FeedVersionUnimportResultRequest {
    success?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
interface FrequencyRequest {
    end_time?: boolean | number;
    exact_times?: boolean | number;
    headway_secs?: boolean | number;
    id?: boolean | number;
    start_time?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface ItineraryRequest {
    distance?: DistanceRequest;
    duration?: DurationRequest;
    end_time?: boolean | number;
    from?: WaypointRequest;
    legs?: LegRequest;
    start_time?: boolean | number;
    to?: WaypointRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface LegRequest {
    distance?: DistanceRequest;
    duration?: DurationRequest;
    end_time?: boolean | number;
    from?: WaypointRequest;
    geometry?: boolean | number;
    start_time?: boolean | number;
    steps?: StepRequest;
    to?: WaypointRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
interface LevelRequest {
    id?: boolean | number;
    level_id?: boolean | number;
    level_index?: boolean | number;
    level_name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface MutationRequest {
    feed_version_delete?: [{
        id: Scalars['Int'];
    }, FeedVersionDeleteResultRequest];
    feed_version_fetch?: [{
        feed_onestop_id: Scalars['String'];
        file?: (Scalars['Upload'] | null);
        url?: (Scalars['String'] | null);
    }, FeedVersionFetchResultRequest];
    feed_version_import?: [{
        sha1: Scalars['String'];
    }, FeedVersionImportResultRequest];
    feed_version_unimport?: [{
        id: Scalars['Int'];
    }, FeedVersionUnimportResultRequest];
    feed_version_update?: [{
        id: Scalars['Int'];
        set: FeedVersionSetInput;
    }, FeedVersionRequest];
    validate_gtfs?: [{
        file?: (Scalars['Upload'] | null);
        realtime_urls?: (Scalars['String'][] | null);
        url?: (Scalars['String'] | null);
    }, ValidationResultRequest] | ValidationResultRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version.
 *
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
interface OperatorRequest {
    agencies?: AgencyRequest;
    feeds?: [{
        limit?: (Scalars['Int'] | null);
        where?: (FeedFilter | null);
    }, FeedRequest] | FeedRequest;
    file?: boolean | number;
    generated?: boolean | number;
    id?: boolean | number;
    name?: boolean | number;
    onestop_id?: boolean | number;
    search_rank?: boolean | number;
    short_name?: boolean | number;
    tags?: boolean | number;
    website?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface OperatorFilter {
    adm0_iso?: (Scalars['String'] | null);
    adm0_name?: (Scalars['String'] | null);
    adm1_iso?: (Scalars['String'] | null);
    adm1_name?: (Scalars['String'] | null);
    agency_id?: (Scalars['String'] | null);
    city_name?: (Scalars['String'] | null);
    feed_onestop_id?: (Scalars['String'] | null);
    merged?: (Scalars['Boolean'] | null);
    onestop_id?: (Scalars['String'] | null);
    search?: (Scalars['String'] | null);
    tags?: (Scalars['Tags'] | null);
}
/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
interface PathwayRequest {
    from_stop?: StopRequest;
    id?: boolean | number;
    is_bidirectional?: boolean | number;
    length?: boolean | number;
    max_slope?: boolean | number;
    min_width?: boolean | number;
    pathway_id?: boolean | number;
    pathway_mode?: boolean | number;
    reverse_signposted_as?: boolean | number;
    signposted_as?: boolean | number;
    stair_count?: boolean | number;
    to_stop?: StopRequest;
    traversal_time?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface PathwayFilter {
    pathway_mode?: (Scalars['Int'] | null);
}
interface PointRadius {
    lat: Scalars['Float'];
    lon: Scalars['Float'];
    radius: Scalars['Float'];
}
interface QueryRequest {
    agencies?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (AgencyFilter | null);
    }, AgencyRequest] | AgencyRequest;
    directions?: [{
        where: DirectionRequest;
    }, DirectionsRequest];
    feed_versions?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionFilter | null);
    }, FeedVersionRequest] | FeedVersionRequest;
    feeds?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (FeedFilter | null);
    }, FeedRequest] | FeedRequest;
    operators?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (OperatorFilter | null);
    }, OperatorRequest] | OperatorRequest;
    routes?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }, RouteRequest] | RouteRequest;
    stops?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }, StopRequest] | StopRequest;
    trips?: [{
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }, TripRequest] | TripRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
interface RTTimeRangeRequest {
    end?: boolean | number;
    start?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
interface RTTranslationRequest {
    language?: boolean | number;
    text?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
interface RTTripDescriptorRequest {
    direction_id?: boolean | number;
    route_id?: boolean | number;
    schedule_relationship?: boolean | number;
    start_date?: boolean | number;
    start_time?: boolean | number;
    trip_id?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
interface RTVehicleDescriptorRequest {
    id?: boolean | number;
    label?: boolean | number;
    license_plate?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** See https://gtfs.org/schedule/reference/#routestxt */
interface RouteRequest {
    agency?: AgencyRequest;
    alerts?: AlertRequest;
    census_geographies?: [{
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }, CensusGeographyRequest];
    continuous_drop_off?: boolean | number;
    continuous_pickup?: boolean | number;
    feed_onestop_id?: boolean | number;
    feed_version?: FeedVersionRequest;
    feed_version_sha1?: boolean | number;
    geometries?: [{
        limit?: (Scalars['Int'] | null);
    }, RouteGeometryRequest] | RouteGeometryRequest;
    geometry?: boolean | number;
    headways?: [{
        limit?: (Scalars['Int'] | null);
    }, RouteHeadwayRequest] | RouteHeadwayRequest;
    id?: boolean | number;
    onestop_id?: boolean | number;
    route_color?: boolean | number;
    route_desc?: boolean | number;
    route_id?: boolean | number;
    route_long_name?: boolean | number;
    route_short_name?: boolean | number;
    route_sort_order?: boolean | number;
    route_stop_buffer?: [{
        radius?: (Scalars['Float'] | null);
    }, RouteStopBufferRequest] | RouteStopBufferRequest;
    route_stops?: [{
        limit?: (Scalars['Int'] | null);
    }, RouteStopRequest] | RouteStopRequest;
    route_text_color?: boolean | number;
    route_type?: boolean | number;
    route_url?: boolean | number;
    search_rank?: boolean | number;
    stops?: [{
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }, StopRequest] | StopRequest;
    trips?: [{
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }, TripRequest] | TripRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface RouteFilter {
    agency_ids?: (Scalars['Int'][] | null);
    allow_previous_onestop_ids?: (Scalars['Boolean'] | null);
    feed_onestop_id?: (Scalars['String'] | null);
    feed_version_sha1?: (Scalars['String'] | null);
    near?: (PointRadius | null);
    onestop_id?: (Scalars['String'] | null);
    onestop_ids?: (Scalars['String'][] | null);
    operator_onestop_id?: (Scalars['String'] | null);
    route_id?: (Scalars['String'] | null);
    route_type?: (Scalars['Int'] | null);
    search?: (Scalars['String'] | null);
    within?: (Scalars['Polygon'] | null);
}
interface RouteGeometryRequest {
    combined_geometry?: boolean | number;
    first_point_max_distance?: boolean | number;
    /** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
    generated?: boolean | number;
    geometry?: boolean | number;
    length?: boolean | number;
    max_segment_length?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface RouteHeadwayRequest {
    departures?: boolean | number;
    direction_id?: boolean | number;
    dow_category?: boolean | number;
    headway_secs?: boolean | number;
    service_date?: boolean | number;
    stop?: StopRequest;
    stop_trip_count?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface RouteStopRequest {
    agency?: AgencyRequest;
    agency_id?: boolean | number;
    id?: boolean | number;
    route?: RouteRequest;
    route_id?: boolean | number;
    stop?: StopRequest;
    stop_id?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface RouteStopBufferRequest {
    stop_buffer?: boolean | number;
    stop_convexhull?: boolean | number;
    stop_points?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
interface ShapeRequest {
    generated?: boolean | number;
    geometry?: boolean | number;
    id?: boolean | number;
    shape_id?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface StepRequest {
    distance?: DistanceRequest;
    duration?: DurationRequest;
    end_time?: boolean | number;
    geometry_offset?: boolean | number;
    instruction?: boolean | number;
    mode?: boolean | number;
    start_time?: boolean | number;
    to?: WaypointRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** See https://gtfs.org/reference/static/#stopstxt */
interface StopRequest {
    alerts?: AlertRequest;
    arrivals?: [{
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }, StopTimeRequest] | StopTimeRequest;
    census_geographies?: [{
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }, CensusGeographyRequest];
    children?: [{
        limit?: (Scalars['Int'] | null);
    }, StopRequest] | StopRequest;
    departures?: [{
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }, StopTimeRequest] | StopTimeRequest;
    directions?: [{
        depart_at?: (Scalars['Time'] | null);
        from?: (WaypointInput | null);
        mode?: (StepMode | null);
        to?: (WaypointInput | null);
    }, DirectionsRequest] | DirectionsRequest;
    feed_onestop_id?: boolean | number;
    feed_version?: FeedVersionRequest;
    feed_version_sha1?: boolean | number;
    geometry?: boolean | number;
    id?: boolean | number;
    level?: LevelRequest;
    location_type?: boolean | number;
    onestop_id?: boolean | number;
    parent?: StopRequest;
    pathways_from_stop?: [{
        limit?: (Scalars['Int'] | null);
    }, PathwayRequest] | PathwayRequest;
    pathways_to_stop?: [{
        limit?: (Scalars['Int'] | null);
    }, PathwayRequest] | PathwayRequest;
    platform_code?: boolean | number;
    route_stops?: [{
        limit?: (Scalars['Int'] | null);
    }, RouteStopRequest] | RouteStopRequest;
    search_rank?: boolean | number;
    stop_code?: boolean | number;
    stop_desc?: boolean | number;
    stop_id?: boolean | number;
    stop_name?: boolean | number;
    stop_times?: [{
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }, StopTimeRequest] | StopTimeRequest;
    stop_timezone?: boolean | number;
    stop_url?: boolean | number;
    tts_stop_name?: boolean | number;
    wheelchair_boarding?: boolean | number;
    zone_id?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface StopFilter {
    agency_ids?: (Scalars['Int'][] | null);
    allow_previous_onestop_ids?: (Scalars['Boolean'] | null);
    feed_onestop_id?: (Scalars['String'] | null);
    feed_version_sha1?: (Scalars['String'] | null);
    near?: (PointRadius | null);
    onestop_id?: (Scalars['String'] | null);
    onestop_ids?: (Scalars['String'][] | null);
    search?: (Scalars['String'] | null);
    served_by_onestop_ids?: (Scalars['String'][] | null);
    stop_code?: (Scalars['String'] | null);
    stop_id?: (Scalars['String'] | null);
    within?: (Scalars['Polygon'] | null);
}
/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
interface StopTimeRequest {
    arrival?: StopTimeEventRequest;
    arrival_time?: boolean | number;
    continuous_drop_off?: boolean | number;
    continuous_pickup?: boolean | number;
    departure?: StopTimeEventRequest;
    departure_time?: boolean | number;
    drop_off_type?: boolean | number;
    interpolated?: boolean | number;
    pickup_type?: boolean | number;
    service_date?: boolean | number;
    stop?: StopRequest;
    stop_headsign?: boolean | number;
    stop_sequence?: boolean | number;
    timepoint?: boolean | number;
    trip?: TripRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface StopTimeEventRequest {
    delay?: boolean | number;
    estimated?: boolean | number;
    estimated_utc?: boolean | number;
    scheduled?: boolean | number;
    stop_timezone?: boolean | number;
    uncertainty?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface StopTimeFilter {
    allow_previous_route_onestop_ids?: (Scalars['Boolean'] | null);
    end_time?: (Scalars['Int'] | null);
    exclude_first?: (Scalars['Boolean'] | null);
    exclude_last?: (Scalars['Boolean'] | null);
    next?: (Scalars['Int'] | null);
    route_onestop_ids?: (Scalars['String'][] | null);
    service_date?: (Scalars['Date'] | null);
    start_time?: (Scalars['Int'] | null);
    use_service_window?: (Scalars['Boolean'] | null);
}
/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
interface TripRequest {
    alerts?: AlertRequest;
    bikes_allowed?: boolean | number;
    block_id?: boolean | number;
    calendar?: CalendarRequest;
    direction_id?: boolean | number;
    feed_version?: FeedVersionRequest;
    frequencies?: [{
        limit?: (Scalars['Int'] | null);
    }, FrequencyRequest] | FrequencyRequest;
    id?: boolean | number;
    route?: RouteRequest;
    schedule_relationship?: boolean | number;
    shape?: ShapeRequest;
    stop_pattern_id?: boolean | number;
    stop_times?: [{
        limit?: (Scalars['Int'] | null);
    }, StopTimeRequest] | StopTimeRequest;
    timestamp?: boolean | number;
    trip_headsign?: boolean | number;
    trip_id?: boolean | number;
    trip_short_name?: boolean | number;
    wheelchair_accessible?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface TripFilter {
    feed_onestop_id?: (Scalars['String'] | null);
    feed_version_sha1?: (Scalars['String'] | null);
    route_ids?: (Scalars['Int'][] | null);
    route_onestop_ids?: (Scalars['String'][] | null);
    service_date?: (Scalars['Date'] | null);
    trip_id?: (Scalars['String'] | null);
}
interface ValidationResultRequest {
    agencies?: [{
        limit?: (Scalars['Int'] | null);
    }, AgencyRequest] | AgencyRequest;
    earliest_calendar_date?: boolean | number;
    errors?: ValidationResultErrorGroupRequest;
    failure_reason?: boolean | number;
    feed_infos?: [{
        limit?: (Scalars['Int'] | null);
    }, FeedInfoRequest] | FeedInfoRequest;
    files?: FeedVersionFileInfoRequest;
    latest_calendar_date?: boolean | number;
    routes?: [{
        limit?: (Scalars['Int'] | null);
    }, RouteRequest] | RouteRequest;
    service_levels?: [{
        limit?: (Scalars['Int'] | null);
        route_id?: (Scalars['String'] | null);
    }, FeedVersionServiceLevelRequest] | FeedVersionServiceLevelRequest;
    sha1?: boolean | number;
    stops?: [{
        limit?: (Scalars['Int'] | null);
    }, StopRequest] | StopRequest;
    success?: boolean | number;
    warnings?: ValidationResultErrorGroupRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface ValidationResultErrorRequest {
    entity_id?: boolean | number;
    error_type?: boolean | number;
    field?: boolean | number;
    filename?: boolean | number;
    message?: boolean | number;
    value?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface ValidationResultErrorGroupRequest {
    count?: boolean | number;
    error_type?: boolean | number;
    errors?: ValidationResultErrorRequest;
    filename?: boolean | number;
    limit?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
interface VehiclePositionRequest {
    congestion_level?: boolean | number;
    current_status?: boolean | number;
    current_stop_sequence?: boolean | number;
    position?: boolean | number;
    stop_id?: StopRequest;
    timestamp?: boolean | number;
    vehicle?: RTVehicleDescriptorRequest;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface WaypointRequest {
    lat?: boolean | number;
    lon?: boolean | number;
    name?: boolean | number;
    __typename?: boolean | number;
    __scalar?: boolean | number;
}
interface WaypointInput {
    lat: Scalars['Float'];
    lon: Scalars['Float'];
    name?: (Scalars['String'] | null);
}
declare const isAgency: (obj?: {
    __typename?: any;
} | null) => obj is Agency;
declare const isAgencyPlace: (obj?: {
    __typename?: any;
} | null) => obj is AgencyPlace;
declare const isAlert: (obj?: {
    __typename?: any;
} | null) => obj is Alert;
declare const isCalendar: (obj?: {
    __typename?: any;
} | null) => obj is Calendar;
declare const isCensusGeography: (obj?: {
    __typename?: any;
} | null) => obj is CensusGeography;
declare const isCensusTable: (obj?: {
    __typename?: any;
} | null) => obj is CensusTable;
declare const isCensusValue: (obj?: {
    __typename?: any;
} | null) => obj is CensusValue;
declare const isDirections: (obj?: {
    __typename?: any;
} | null) => obj is Directions;
declare const isDistance: (obj?: {
    __typename?: any;
} | null) => obj is Distance;
declare const isDuration: (obj?: {
    __typename?: any;
} | null) => obj is Duration;
declare const isFeed: (obj?: {
    __typename?: any;
} | null) => obj is Feed;
declare const isFeedAuthorization: (obj?: {
    __typename?: any;
} | null) => obj is FeedAuthorization;
declare const isFeedFetch: (obj?: {
    __typename?: any;
} | null) => obj is FeedFetch;
declare const isFeedInfo: (obj?: {
    __typename?: any;
} | null) => obj is FeedInfo;
declare const isFeedLicense: (obj?: {
    __typename?: any;
} | null) => obj is FeedLicense;
declare const isFeedState: (obj?: {
    __typename?: any;
} | null) => obj is FeedState;
declare const isFeedUrls: (obj?: {
    __typename?: any;
} | null) => obj is FeedUrls;
declare const isFeedVersion: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersion;
declare const isFeedVersionDeleteResult: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionDeleteResult;
declare const isFeedVersionFetchResult: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionFetchResult;
declare const isFeedVersionFileInfo: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionFileInfo;
declare const isFeedVersionGtfsImport: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionGtfsImport;
declare const isFeedVersionImportResult: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionImportResult;
declare const isFeedVersionServiceLevel: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionServiceLevel;
declare const isFeedVersionUnimportResult: (obj?: {
    __typename?: any;
} | null) => obj is FeedVersionUnimportResult;
declare const isFrequency: (obj?: {
    __typename?: any;
} | null) => obj is Frequency;
declare const isItinerary: (obj?: {
    __typename?: any;
} | null) => obj is Itinerary;
declare const isLeg: (obj?: {
    __typename?: any;
} | null) => obj is Leg;
declare const isLevel: (obj?: {
    __typename?: any;
} | null) => obj is Level;
declare const isMutation: (obj?: {
    __typename?: any;
} | null) => obj is Mutation;
declare const isOperator: (obj?: {
    __typename?: any;
} | null) => obj is Operator;
declare const isPathway: (obj?: {
    __typename?: any;
} | null) => obj is Pathway;
declare const isQuery: (obj?: {
    __typename?: any;
} | null) => obj is Query;
declare const isRTTimeRange: (obj?: {
    __typename?: any;
} | null) => obj is RTTimeRange;
declare const isRTTranslation: (obj?: {
    __typename?: any;
} | null) => obj is RTTranslation;
declare const isRTTripDescriptor: (obj?: {
    __typename?: any;
} | null) => obj is RTTripDescriptor;
declare const isRTVehicleDescriptor: (obj?: {
    __typename?: any;
} | null) => obj is RTVehicleDescriptor;
declare const isRoute: (obj?: {
    __typename?: any;
} | null) => obj is Route;
declare const isRouteGeometry: (obj?: {
    __typename?: any;
} | null) => obj is RouteGeometry;
declare const isRouteHeadway: (obj?: {
    __typename?: any;
} | null) => obj is RouteHeadway;
declare const isRouteStop: (obj?: {
    __typename?: any;
} | null) => obj is RouteStop;
declare const isRouteStopBuffer: (obj?: {
    __typename?: any;
} | null) => obj is RouteStopBuffer;
declare const isShape: (obj?: {
    __typename?: any;
} | null) => obj is Shape;
declare const isStep: (obj?: {
    __typename?: any;
} | null) => obj is Step;
declare const isStop: (obj?: {
    __typename?: any;
} | null) => obj is Stop;
declare const isStopTime: (obj?: {
    __typename?: any;
} | null) => obj is StopTime;
declare const isStopTimeEvent: (obj?: {
    __typename?: any;
} | null) => obj is StopTimeEvent;
declare const isTrip: (obj?: {
    __typename?: any;
} | null) => obj is Trip;
declare const isValidationResult: (obj?: {
    __typename?: any;
} | null) => obj is ValidationResult;
declare const isValidationResultError: (obj?: {
    __typename?: any;
} | null) => obj is ValidationResultError;
declare const isValidationResultErrorGroup: (obj?: {
    __typename?: any;
} | null) => obj is ValidationResultErrorGroup;
declare const isVehiclePosition: (obj?: {
    __typename?: any;
} | null) => obj is VehiclePosition;
declare const isWaypoint: (obj?: {
    __typename?: any;
} | null) => obj is Waypoint;
/** See https://gtfs.org/schedule/reference/#agencytxt */
interface AgencyPromiseChain {
    agency_email: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_fare_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_lang: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_phone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_timezone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    agency_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    census_geographies: ((args: {
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }) => {
        get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Promise<(FieldsSelection<CensusGeography, R>[] | undefined)>;
    });
    feed_onestop_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    feed_version: (FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>;
    });
    feed_version_sha1: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    operator: (OperatorPromiseChain & {
        get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R> | undefined)) => Promise<(FieldsSelection<Operator, R> | undefined)>;
    });
    places: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (AgencyPlaceFilter | null);
    }) => {
        get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Promise<(FieldsSelection<AgencyPlace, R>[] | undefined)>;
    }) & ({
        get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Promise<(FieldsSelection<AgencyPlace, R>[] | undefined)>;
    });
    routes: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
}
/** See https://gtfs.org/schedule/reference/#agencytxt */
interface AgencyObservableChain {
    agency_email: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_fare_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_lang: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_phone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_timezone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    agency_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    census_geographies: ((args: {
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }) => {
        get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Observable<(FieldsSelection<CensusGeography, R>[] | undefined)>;
    });
    feed_onestop_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    feed_version: (FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>;
    });
    feed_version_sha1: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    operator: (OperatorObservableChain & {
        get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R> | undefined)) => Observable<(FieldsSelection<Operator, R> | undefined)>;
    });
    places: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (AgencyPlaceFilter | null);
    }) => {
        get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Observable<(FieldsSelection<AgencyPlace, R>[] | undefined)>;
    }) & ({
        get: <R extends AgencyPlaceRequest>(request: R, defaultValue?: (FieldsSelection<AgencyPlace, R>[] | undefined)) => Observable<(FieldsSelection<AgencyPlace, R>[] | undefined)>;
    });
    routes: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
}
interface AgencyPlacePromiseChain {
    adm0_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    adm1_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    city_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>;
    });
}
interface AgencyPlaceObservableChain {
    adm0_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    adm1_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    city_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>;
    });
}
/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
interface AlertPromiseChain {
    active_period: ({
        get: <R extends RTTimeRangeRequest>(request: R, defaultValue?: (FieldsSelection<RTTimeRange, R>[] | undefined)) => Promise<(FieldsSelection<RTTimeRange, R>[] | undefined)>;
    });
    cause: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    description_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Promise<FieldsSelection<RTTranslation, R>[]>;
    });
    effect: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    header_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Promise<FieldsSelection<RTTranslation, R>[]>;
    });
    severity_level: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    tts_description_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Promise<(FieldsSelection<RTTranslation, R>[] | undefined)>;
    });
    tts_header_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Promise<(FieldsSelection<RTTranslation, R>[] | undefined)>;
    });
    url: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Promise<(FieldsSelection<RTTranslation, R>[] | undefined)>;
    });
}
/** [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) message, also called a service alert, provided by a source GTFS Realtime feed. */
interface AlertObservableChain {
    active_period: ({
        get: <R extends RTTimeRangeRequest>(request: R, defaultValue?: (FieldsSelection<RTTimeRange, R>[] | undefined)) => Observable<(FieldsSelection<RTTimeRange, R>[] | undefined)>;
    });
    cause: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    description_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Observable<FieldsSelection<RTTranslation, R>[]>;
    });
    effect: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    header_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: FieldsSelection<RTTranslation, R>[]) => Observable<FieldsSelection<RTTranslation, R>[]>;
    });
    severity_level: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    tts_description_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Observable<(FieldsSelection<RTTranslation, R>[] | undefined)>;
    });
    tts_header_text: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Observable<(FieldsSelection<RTTranslation, R>[] | undefined)>;
    });
    url: ({
        get: <R extends RTTranslationRequest>(request: R, defaultValue?: (FieldsSelection<RTTranslation, R>[] | undefined)) => Observable<(FieldsSelection<RTTranslation, R>[] | undefined)>;
    });
}
/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
interface CalendarPromiseChain {
    added_dates: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>;
    }) & ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>;
    });
    end_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>;
    });
    friday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    monday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    removed_dates: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>;
    }) & ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Promise<Scalars['Date'][]>;
    });
    saturday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    service_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    start_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>;
    });
    sunday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    thursday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    tuesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    wednesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
/** Record from a static GTFS [calendars.txt](https://gtfs.org/schedule/reference/#calendarstxt) file. */
interface CalendarObservableChain {
    added_dates: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>;
    }) & ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>;
    });
    end_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>;
    });
    friday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    monday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    removed_dates: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>;
    }) & ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date'][]) => Observable<Scalars['Date'][]>;
    });
    saturday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    service_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    start_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>;
    });
    sunday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    thursday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    tuesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    wednesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
interface CensusGeographyPromiseChain {
    aland: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>;
    });
    awater: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>;
    });
    geoid: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    layer_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    values: ((args: {
        limit?: (Scalars['Int'] | null);
        table_names: Scalars['String'][];
    }) => {
        get: <R extends CensusValueRequest>(request: R, defaultValue?: (FieldsSelection<CensusValue, R> | undefined)[]) => Promise<(FieldsSelection<CensusValue, R> | undefined)[]>;
    });
}
interface CensusGeographyObservableChain {
    aland: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>;
    });
    awater: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>;
    });
    geoid: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    layer_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    values: ((args: {
        limit?: (Scalars['Int'] | null);
        table_names: Scalars['String'][];
    }) => {
        get: <R extends CensusValueRequest>(request: R, defaultValue?: (FieldsSelection<CensusValue, R> | undefined)[]) => Observable<(FieldsSelection<CensusValue, R> | undefined)[]>;
    });
}
interface CensusTablePromiseChain {
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    table_group: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    table_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    table_title: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
interface CensusTableObservableChain {
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    table_group: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    table_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    table_title: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
interface CensusValuePromiseChain {
    table: (CensusTablePromiseChain & {
        get: <R extends CensusTableRequest>(request: R, defaultValue?: FieldsSelection<CensusTable, R>) => Promise<FieldsSelection<CensusTable, R>>;
    });
    values: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Any']) => Promise<Scalars['Any']>;
    });
}
interface CensusValueObservableChain {
    table: (CensusTableObservableChain & {
        get: <R extends CensusTableRequest>(request: R, defaultValue?: FieldsSelection<CensusTable, R>) => Observable<FieldsSelection<CensusTable, R>>;
    });
    values: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Any']) => Observable<Scalars['Any']>;
    });
}
interface DirectionsPromiseChain {
    data_source: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    destination: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>;
    });
    distance: (DistancePromiseChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: (FieldsSelection<Distance, R> | undefined)) => Promise<(FieldsSelection<Distance, R> | undefined)>;
    });
    duration: (DurationPromiseChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: (FieldsSelection<Duration, R> | undefined)) => Promise<(FieldsSelection<Duration, R> | undefined)>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    exception: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    itineraries: ({
        get: <R extends ItineraryRequest>(request: R, defaultValue?: (FieldsSelection<Itinerary, R>[] | undefined)) => Promise<(FieldsSelection<Itinerary, R>[] | undefined)>;
    });
    origin: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
}
interface DirectionsObservableChain {
    data_source: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    destination: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>;
    });
    distance: (DistanceObservableChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: (FieldsSelection<Distance, R> | undefined)) => Observable<(FieldsSelection<Distance, R> | undefined)>;
    });
    duration: (DurationObservableChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: (FieldsSelection<Duration, R> | undefined)) => Observable<(FieldsSelection<Duration, R> | undefined)>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    exception: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    itineraries: ({
        get: <R extends ItineraryRequest>(request: R, defaultValue?: (FieldsSelection<Itinerary, R>[] | undefined)) => Observable<(FieldsSelection<Itinerary, R>[] | undefined)>;
    });
    origin: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
}
interface DistancePromiseChain {
    distance: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    units: ({
        get: (request?: boolean | number, defaultValue?: DistanceUnit) => Promise<DistanceUnit>;
    });
}
interface DistanceObservableChain {
    distance: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    units: ({
        get: (request?: boolean | number, defaultValue?: DistanceUnit) => Observable<DistanceUnit>;
    });
}
interface DurationPromiseChain {
    duration: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    units: ({
        get: (request?: boolean | number, defaultValue?: DurationUnit) => Promise<DurationUnit>;
    });
}
interface DurationObservableChain {
    duration: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    units: ({
        get: (request?: boolean | number, defaultValue?: DurationUnit) => Observable<DurationUnit>;
    });
}
/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
interface FeedPromiseChain {
    associated_operators: ({
        get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R>[] | undefined)) => Promise<(FieldsSelection<Operator, R>[] | undefined)>;
    });
    authorization: (FeedAuthorizationPromiseChain & {
        get: <R extends FeedAuthorizationRequest>(request: R, defaultValue?: (FieldsSelection<FeedAuthorization, R> | undefined)) => Promise<(FieldsSelection<FeedAuthorization, R> | undefined)>;
    });
    feed_fetches: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedFetchFilter | null);
    }) => {
        get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Promise<(FieldsSelection<FeedFetch, R>[] | undefined)>;
    }) & ({
        get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Promise<(FieldsSelection<FeedFetch, R>[] | undefined)>;
    });
    feed_state: (FeedStatePromiseChain & {
        get: <R extends FeedStateRequest>(request: R, defaultValue?: (FieldsSelection<FeedState, R> | undefined)) => Promise<(FieldsSelection<FeedState, R> | undefined)>;
    });
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionFilter | null);
    }) => {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>;
    }) & ({
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>;
    });
    file: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Unique integer ID */
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    /** Language(s) included in this feed */
    languages: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'][] | undefined)) => Promise<(Scalars['String'][] | undefined)>;
    });
    license: (FeedLicensePromiseChain & {
        get: <R extends FeedLicenseRequest>(request: R, defaultValue?: (FieldsSelection<FeedLicense, R> | undefined)) => Promise<(FieldsSelection<FeedLicense, R> | undefined)>;
    });
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    /** Onestop ID for this feed */
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    spec: ({
        get: (request?: boolean | number, defaultValue?: (FeedSpecTypes | undefined)) => Promise<(FeedSpecTypes | undefined)>;
    });
    tags: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Tags'] | undefined)) => Promise<(Scalars['Tags'] | undefined)>;
    });
    urls: (FeedUrlsPromiseChain & {
        get: <R extends FeedUrlsRequest>(request: R, defaultValue?: (FieldsSelection<FeedUrls, R> | undefined)) => Promise<(FieldsSelection<FeedUrls, R> | undefined)>;
    });
}
/** Feeds contain details on how to access transit information, including URLs to data sources in various formats (GTFS, GTFS-RT, GBFS, etc), license information, related feeds, details on how to make authorized requests, and feed version archives. Feed versions are archived (as `.zip` files) and imported into the Transitland database for querying agencies, stops, routes, trips, etc. */
interface FeedObservableChain {
    associated_operators: ({
        get: <R extends OperatorRequest>(request: R, defaultValue?: (FieldsSelection<Operator, R>[] | undefined)) => Observable<(FieldsSelection<Operator, R>[] | undefined)>;
    });
    authorization: (FeedAuthorizationObservableChain & {
        get: <R extends FeedAuthorizationRequest>(request: R, defaultValue?: (FieldsSelection<FeedAuthorization, R> | undefined)) => Observable<(FieldsSelection<FeedAuthorization, R> | undefined)>;
    });
    feed_fetches: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedFetchFilter | null);
    }) => {
        get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Observable<(FieldsSelection<FeedFetch, R>[] | undefined)>;
    }) & ({
        get: <R extends FeedFetchRequest>(request: R, defaultValue?: (FieldsSelection<FeedFetch, R>[] | undefined)) => Observable<(FieldsSelection<FeedFetch, R>[] | undefined)>;
    });
    feed_state: (FeedStateObservableChain & {
        get: <R extends FeedStateRequest>(request: R, defaultValue?: (FieldsSelection<FeedState, R> | undefined)) => Observable<(FieldsSelection<FeedState, R> | undefined)>;
    });
    /** Versions of this feed that have been fetched, archived, and imported by Transitland */
    feed_versions: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionFilter | null);
    }) => {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>;
    }) & ({
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>;
    });
    file: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Unique integer ID */
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    /** Language(s) included in this feed */
    languages: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'][] | undefined)) => Observable<(Scalars['String'][] | undefined)>;
    });
    license: (FeedLicenseObservableChain & {
        get: <R extends FeedLicenseRequest>(request: R, defaultValue?: (FieldsSelection<FeedLicense, R> | undefined)) => Observable<(FieldsSelection<FeedLicense, R> | undefined)>;
    });
    /** A common name for this feed. Optional. Alternatively use `associated_operators[].name` */
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    /** Onestop ID for this feed */
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    spec: ({
        get: (request?: boolean | number, defaultValue?: (FeedSpecTypes | undefined)) => Observable<(FeedSpecTypes | undefined)>;
    });
    tags: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Tags'] | undefined)) => Observable<(Scalars['Tags'] | undefined)>;
    });
    urls: (FeedUrlsObservableChain & {
        get: <R extends FeedUrlsRequest>(request: R, defaultValue?: (FieldsSelection<FeedUrls, R> | undefined)) => Observable<(FieldsSelection<FeedUrls, R> | undefined)>;
    });
}
/** Details on how to construct an HTTP request to access a protected resource */
interface FeedAuthorizationPromiseChain {
    /** Website to visit to sign up for an account */
    info_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Method for inserting authorization secret into request */
    type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** Details on how to construct an HTTP request to access a protected resource */
interface FeedAuthorizationObservableChain {
    /** Website to visit to sign up for an account */
    info_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** When `type=query_param`, this specifies the name of the query parameter. When `type=header`, this specifies the name of the header */
    param_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Method for inserting authorization secret into request */
    type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
interface FeedFetchPromiseChain {
    fetch_error: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    fetched_at: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    response_code: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    response_sha1: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    response_size: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>;
    });
    url: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    url_type: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
}
interface FeedFetchObservableChain {
    fetch_error: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    fetched_at: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    response_code: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    response_sha1: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    response_size: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>;
    });
    url: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    url_type: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
}
/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
interface FeedInfoPromiseChain {
    default_lang: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    feed_contact_email: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    feed_contact_url: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    feed_end_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    feed_lang: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    feed_publisher_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    feed_publisher_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    feed_start_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    feed_version: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
/** Record from a static GTFS [feed_info.txt](https://gtfs.org/schedule/reference/#feed_infotxt) file. */
interface FeedInfoObservableChain {
    default_lang: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    feed_contact_email: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    feed_contact_url: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    feed_end_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    feed_lang: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    feed_publisher_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    feed_publisher_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    feed_start_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    feed_version: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
interface FeedLicensePromiseChain {
    /** Feed consumers must follow these instructions for how to provide attribution */
    attribution_instructions: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Feed consumers must include this particular text when using this feed */
    attribution_text: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Are feed consumers allowed to use the feed for commercial purposes? */
    commercial_use_allowed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Are feed consumers allowed to create and share derived products from the feed? */
    create_derived_product: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Are feed consumers allowed to redistribute the feed in its entirety? */
    redistribution_allowed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Are feed consumers allowed to keep their modifications of this feed private? */
    share_alike_optional: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** SPDX identifier for a common license. See https://spdx.org/licenses/ */
    spdx_identifier: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URL for a custom license */
    url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
    use_without_attribution: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** License information for this feed, curated by Interline and contributors to the Transitland Atlas feed registry. Note that this does not constitute legal advice. Users are advised to review and confirm any terms and conditions attached to a source feed. */
interface FeedLicenseObservableChain {
    /** Feed consumers must follow these instructions for how to provide attribution */
    attribution_instructions: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Feed consumers must include this particular text when using this feed */
    attribution_text: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Are feed consumers allowed to use the feed for commercial purposes? */
    commercial_use_allowed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Are feed consumers allowed to create and share derived products from the feed? */
    create_derived_product: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Are feed consumers allowed to redistribute the feed in its entirety? */
    redistribution_allowed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Are feed consumers allowed to keep their modifications of this feed private? */
    share_alike_optional: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** SPDX identifier for a common license. See https://spdx.org/licenses/ */
    spdx_identifier: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URL for a custom license */
    url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** Are feed consumers allowed to use the feed contents without including attribution text in their app or map? */
    use_without_attribution: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
/** Details on the current state of this feed, such as active version, last fetch time, etc. */
interface FeedStatePromiseChain {
    /** The active feed version for this feed */
    feed_version: (FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Promise<(FieldsSelection<FeedVersion, R> | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
/** Details on the current state of this feed, such as active version, last fetch time, etc. */
interface FeedStateObservableChain {
    /** The active feed version for this feed */
    feed_version: (FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Observable<(FieldsSelection<FeedVersion, R> | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
/** URL(s) from which Transitland sources a feed */
interface FeedUrlsPromiseChain {
    /** URL for GBFS feed `gbfs.json` auto-discovery file */
    gbfs_auto_discovery: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URL for MDS feed provider endpoint */
    mds_provider: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URL for GTFS Realtime Alert messages */
    realtime_alerts: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URL for GTFS Realtime TripUpdate messages */
    realtime_trip_updates: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URL for GTFS Realtime VehiclePosition messages */
    realtime_vehicle_positions: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URL for the static feed that represents today's service */
    static_current: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    /** URLs for static feeds that represent past service that is no longer in effect  */
    static_historic: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String'][]) => Promise<Scalars['String'][]>;
    });
    /** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
    static_planned: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** URL(s) from which Transitland sources a feed */
interface FeedUrlsObservableChain {
    /** URL for GBFS feed `gbfs.json` auto-discovery file */
    gbfs_auto_discovery: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URL for MDS feed provider endpoint */
    mds_provider: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URL for GTFS Realtime Alert messages */
    realtime_alerts: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URL for GTFS Realtime TripUpdate messages */
    realtime_trip_updates: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URL for GTFS Realtime VehiclePosition messages */
    realtime_vehicle_positions: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URL for the static feed that represents today's service */
    static_current: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    /** URLs for static feeds that represent past service that is no longer in effect  */
    static_historic: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String'][]) => Observable<Scalars['String'][]>;
    });
    /** URLs for static feeds that represent service planned for upcoming dates. Typically used to represent calendar/service changes that will take effect few weeks or months in the future */
    static_planned: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
interface FeedVersionPromiseChain {
    agencies: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (AgencyFilter | null);
    }) => {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>;
    }) & ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>;
    });
    created_by: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    description: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    earliest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>;
    });
    feed: (FeedPromiseChain & {
        get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>) => Promise<FieldsSelection<Feed, R>>;
    });
    feed_infos: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>;
    }) & ({
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>;
    });
    feed_version_gtfs_import: (FeedVersionGtfsImportPromiseChain & {
        get: <R extends FeedVersionGtfsImportRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersionGtfsImport, R> | undefined)) => Promise<(FieldsSelection<FeedVersionGtfsImport, R> | undefined)>;
    });
    fetched_at: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    /** Metadata for each text file present in the main directory of the zip archive  */
    files: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Promise<FieldsSelection<FeedVersionFileInfo, R>[]>;
    }) & ({
        get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Promise<FieldsSelection<FeedVersionFileInfo, R>[]>;
    });
    /** Convex hull around all active stops in the feed version */
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    latest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    routes: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    });
    service_levels: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionServiceLevelFilter | null);
    }) => {
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    }) & ({
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    });
    sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stops: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    });
    trips: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }) => {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>;
    }) & ({
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>;
    });
    updated_by: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** Feed versions represent a specific static GTFS file that was published at a particular point in time, and are generally accessed and referenced using the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive. */
interface FeedVersionObservableChain {
    agencies: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (AgencyFilter | null);
    }) => {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>;
    }) & ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>;
    });
    created_by: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    description: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    earliest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>;
    });
    feed: (FeedObservableChain & {
        get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>) => Observable<FieldsSelection<Feed, R>>;
    });
    feed_infos: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>;
    }) & ({
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>;
    });
    feed_version_gtfs_import: (FeedVersionGtfsImportObservableChain & {
        get: <R extends FeedVersionGtfsImportRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersionGtfsImport, R> | undefined)) => Observable<(FieldsSelection<FeedVersionGtfsImport, R> | undefined)>;
    });
    fetched_at: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    /** Metadata for each text file present in the main directory of the zip archive  */
    files: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Observable<FieldsSelection<FeedVersionFileInfo, R>[]>;
    }) & ({
        get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Observable<FieldsSelection<FeedVersionFileInfo, R>[]>;
    });
    /** Convex hull around all active stops in the feed version */
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    latest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    routes: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    });
    service_levels: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionServiceLevelFilter | null);
    }) => {
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    }) & ({
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    });
    sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stops: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    });
    trips: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }) => {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>;
    }) & ({
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>;
    });
    updated_by: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
interface FeedVersionDeleteResultPromiseChain {
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
}
interface FeedVersionDeleteResultObservableChain {
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
}
interface FeedVersionFetchResultPromiseChain {
    feed_version: (FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Promise<(FieldsSelection<FeedVersion, R> | undefined)>;
    });
    fetch_error: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    found_dir_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    found_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
}
interface FeedVersionFetchResultObservableChain {
    feed_version: (FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Observable<(FieldsSelection<FeedVersion, R> | undefined)>;
    });
    fetch_error: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    found_dir_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    found_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
}
interface FeedVersionFileInfoPromiseChain {
    csv_like: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    header: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    rows: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    size: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
interface FeedVersionFileInfoObservableChain {
    csv_like: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    header: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    rows: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    size: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
interface FeedVersionGtfsImportPromiseChain {
    created_at: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    entity_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>;
    });
    exception_log: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    in_progress: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    interpolated_stop_time_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    schedule_removed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    skip_entity_error_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>;
    });
    skip_entity_filter_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>;
    });
    skip_entity_marked_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>;
    });
    skip_entity_reference_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    updated_at: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    warning_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Promise<(Scalars['Any'] | undefined)>;
    });
}
interface FeedVersionGtfsImportObservableChain {
    created_at: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    entity_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>;
    });
    exception_log: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    in_progress: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    interpolated_stop_time_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    schedule_removed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    skip_entity_error_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>;
    });
    skip_entity_filter_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>;
    });
    skip_entity_marked_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>;
    });
    skip_entity_reference_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    updated_at: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    warning_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Any'] | undefined)) => Observable<(Scalars['Any'] | undefined)>;
    });
}
interface FeedVersionImportResultPromiseChain {
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
}
interface FeedVersionImportResultObservableChain {
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
}
interface FeedVersionServiceLevelPromiseChain {
    end_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>;
    });
    friday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    monday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    saturday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    start_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Promise<Scalars['Date']>;
    });
    sunday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    thursday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    tuesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    wednesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
interface FeedVersionServiceLevelObservableChain {
    end_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>;
    });
    friday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    monday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    saturday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    start_date: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Date']) => Observable<Scalars['Date']>;
    });
    sunday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    thursday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    tuesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    wednesday: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
interface FeedVersionUnimportResultPromiseChain {
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
}
interface FeedVersionUnimportResultObservableChain {
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
}
/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
interface FrequencyPromiseChain {
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>;
    });
    exact_times: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    headway_secs: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>;
    });
}
/** Record from a static GTFS [frequencies.txt](https://gtfs.org/schedule/reference/#frequenciestxt) file. */
interface FrequencyObservableChain {
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>;
    });
    exact_times: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    headway_secs: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>;
    });
}
interface ItineraryPromiseChain {
    distance: (DistancePromiseChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Promise<FieldsSelection<Distance, R>>;
    });
    duration: (DurationPromiseChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Promise<FieldsSelection<Duration, R>>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    from: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Promise<FieldsSelection<Waypoint, R>>;
    });
    legs: ({
        get: <R extends LegRequest>(request: R, defaultValue?: (FieldsSelection<Leg, R>[] | undefined)) => Promise<(FieldsSelection<Leg, R>[] | undefined)>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    to: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Promise<FieldsSelection<Waypoint, R>>;
    });
}
interface ItineraryObservableChain {
    distance: (DistanceObservableChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Observable<FieldsSelection<Distance, R>>;
    });
    duration: (DurationObservableChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Observable<FieldsSelection<Duration, R>>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    from: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Observable<FieldsSelection<Waypoint, R>>;
    });
    legs: ({
        get: <R extends LegRequest>(request: R, defaultValue?: (FieldsSelection<Leg, R>[] | undefined)) => Observable<(FieldsSelection<Leg, R>[] | undefined)>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    to: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: FieldsSelection<Waypoint, R>) => Observable<FieldsSelection<Waypoint, R>>;
    });
}
interface LegPromiseChain {
    distance: (DistancePromiseChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Promise<FieldsSelection<Distance, R>>;
    });
    duration: (DurationPromiseChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Promise<FieldsSelection<Duration, R>>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    from: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: Scalars['LineString']) => Promise<Scalars['LineString']>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    steps: ({
        get: <R extends StepRequest>(request: R, defaultValue?: (FieldsSelection<Step, R>[] | undefined)) => Promise<(FieldsSelection<Step, R>[] | undefined)>;
    });
    to: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>;
    });
}
interface LegObservableChain {
    distance: (DistanceObservableChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Observable<FieldsSelection<Distance, R>>;
    });
    duration: (DurationObservableChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Observable<FieldsSelection<Duration, R>>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    from: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: Scalars['LineString']) => Observable<Scalars['LineString']>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    steps: ({
        get: <R extends StepRequest>(request: R, defaultValue?: (FieldsSelection<Step, R>[] | undefined)) => Observable<(FieldsSelection<Step, R>[] | undefined)>;
    });
    to: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>;
    });
}
/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
interface LevelPromiseChain {
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    level_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    level_index: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    level_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** Describe the different levels of a station. Is mostly useful when used in conjunction with pathways. See https://gtfs.org/reference/static/#levelstxt */
interface LevelObservableChain {
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    level_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    level_index: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    level_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
interface MutationPromiseChain {
    feed_version_delete: ((args: {
        id: Scalars['Int'];
    }) => FeedVersionDeleteResultPromiseChain & {
        get: <R extends FeedVersionDeleteResultRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionDeleteResult, R>) => Promise<FieldsSelection<FeedVersionDeleteResult, R>>;
    });
    feed_version_fetch: ((args: {
        feed_onestop_id: Scalars['String'];
        file?: (Scalars['Upload'] | null);
        url?: (Scalars['String'] | null);
    }) => FeedVersionFetchResultPromiseChain & {
        get: <R extends FeedVersionFetchResultRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersionFetchResult, R> | undefined)) => Promise<(FieldsSelection<FeedVersionFetchResult, R> | undefined)>;
    });
    feed_version_import: ((args: {
        sha1: Scalars['String'];
    }) => FeedVersionImportResultPromiseChain & {
        get: <R extends FeedVersionImportResultRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionImportResult, R>) => Promise<FieldsSelection<FeedVersionImportResult, R>>;
    });
    feed_version_unimport: ((args: {
        id: Scalars['Int'];
    }) => FeedVersionUnimportResultPromiseChain & {
        get: <R extends FeedVersionUnimportResultRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionUnimportResult, R>) => Promise<FieldsSelection<FeedVersionUnimportResult, R>>;
    });
    feed_version_update: ((args: {
        id: Scalars['Int'];
        set: FeedVersionSetInput;
    }) => FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Promise<(FieldsSelection<FeedVersion, R> | undefined)>;
    });
    validate_gtfs: ((args?: {
        file?: (Scalars['Upload'] | null);
        realtime_urls?: (Scalars['String'][] | null);
        url?: (Scalars['String'] | null);
    }) => ValidationResultPromiseChain & {
        get: <R extends ValidationResultRequest>(request: R, defaultValue?: (FieldsSelection<ValidationResult, R> | undefined)) => Promise<(FieldsSelection<ValidationResult, R> | undefined)>;
    }) & (ValidationResultPromiseChain & {
        get: <R extends ValidationResultRequest>(request: R, defaultValue?: (FieldsSelection<ValidationResult, R> | undefined)) => Promise<(FieldsSelection<ValidationResult, R> | undefined)>;
    });
}
interface MutationObservableChain {
    feed_version_delete: ((args: {
        id: Scalars['Int'];
    }) => FeedVersionDeleteResultObservableChain & {
        get: <R extends FeedVersionDeleteResultRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionDeleteResult, R>) => Observable<FieldsSelection<FeedVersionDeleteResult, R>>;
    });
    feed_version_fetch: ((args: {
        feed_onestop_id: Scalars['String'];
        file?: (Scalars['Upload'] | null);
        url?: (Scalars['String'] | null);
    }) => FeedVersionFetchResultObservableChain & {
        get: <R extends FeedVersionFetchResultRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersionFetchResult, R> | undefined)) => Observable<(FieldsSelection<FeedVersionFetchResult, R> | undefined)>;
    });
    feed_version_import: ((args: {
        sha1: Scalars['String'];
    }) => FeedVersionImportResultObservableChain & {
        get: <R extends FeedVersionImportResultRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionImportResult, R>) => Observable<FieldsSelection<FeedVersionImportResult, R>>;
    });
    feed_version_unimport: ((args: {
        id: Scalars['Int'];
    }) => FeedVersionUnimportResultObservableChain & {
        get: <R extends FeedVersionUnimportResultRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionUnimportResult, R>) => Observable<FieldsSelection<FeedVersionUnimportResult, R>>;
    });
    feed_version_update: ((args: {
        id: Scalars['Int'];
        set: FeedVersionSetInput;
    }) => FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: (FieldsSelection<FeedVersion, R> | undefined)) => Observable<(FieldsSelection<FeedVersion, R> | undefined)>;
    });
    validate_gtfs: ((args?: {
        file?: (Scalars['Upload'] | null);
        realtime_urls?: (Scalars['String'][] | null);
        url?: (Scalars['String'] | null);
    }) => ValidationResultObservableChain & {
        get: <R extends ValidationResultRequest>(request: R, defaultValue?: (FieldsSelection<ValidationResult, R> | undefined)) => Observable<(FieldsSelection<ValidationResult, R> | undefined)>;
    }) & (ValidationResultObservableChain & {
        get: <R extends ValidationResultRequest>(request: R, defaultValue?: (FieldsSelection<ValidationResult, R> | undefined)) => Observable<(FieldsSelection<ValidationResult, R> | undefined)>;
    });
}
/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version.
 *
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
interface OperatorPromiseChain {
    agencies: ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: (FieldsSelection<Agency, R>[] | undefined)) => Promise<(FieldsSelection<Agency, R>[] | undefined)>;
    });
    feeds: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedFilter | null);
    }) => {
        get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Promise<(FieldsSelection<Feed, R>[] | undefined)>;
    }) & ({
        get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Promise<(FieldsSelection<Feed, R>[] | undefined)>;
    });
    file: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    generated: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    short_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    tags: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Tags'] | undefined)) => Promise<(Scalars['Tags'] | undefined)>;
    });
    website: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
}
/**
 * An agency represents a single GTFS `agencies.txt` entity that was imported from a single feed version. The metadata, routes, etc., for an agency include only the data for that specific agency in that specific feed version.
 *
 * Operators are a higher-level abstraction over agencies, with each operator defined by an entry in the [Transitland Atlas](/documentation/atlas). Operators provide a method for enriching the basic GTFS agency data, as well as grouping agencies that span across multiple source feeds. Operators are matched with GTFS agencies using `associated_feeds`, a simple list of Feed OnestopIDs and GTFS `agency_id`s. For instance, the [Atlas operator record](https://github.com/transitland/transitland-atlas/blob/master/operators/o-dr5r-nyct.json) for the [New York City MTA](/operators/o-dr5r-nyct) has `associated_feeds` values for 8 different GTFS feeds. A query for this operator OnestopID thus represents the union of data from all 8 feeds, and includes routes for the subway, bus service for all 5 boroughs, commuter rail agencies, etc., operated by the MTA. This record also includes additional metadata about the MTA, such as the United States National Transit Database ID, Wikidata IDs, and alternate names for the agency. Operator records are created and maintained through pull requests to the Atlas json files and synchronized with the Transitland database on each commit.
 */
interface OperatorObservableChain {
    agencies: ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: (FieldsSelection<Agency, R>[] | undefined)) => Observable<(FieldsSelection<Agency, R>[] | undefined)>;
    });
    feeds: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (FeedFilter | null);
    }) => {
        get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Observable<(FieldsSelection<Feed, R>[] | undefined)>;
    }) & ({
        get: <R extends FeedRequest>(request: R, defaultValue?: (FieldsSelection<Feed, R>[] | undefined)) => Observable<(FieldsSelection<Feed, R>[] | undefined)>;
    });
    file: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    generated: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    short_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    tags: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Tags'] | undefined)) => Observable<(Scalars['Tags'] | undefined)>;
    });
    website: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
}
/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
interface PathwayPromiseChain {
    from_stop: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    is_bidirectional: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    length: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    max_slope: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    min_width: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    pathway_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    pathway_mode: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    reverse_signposted_as: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    signposted_as: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stair_count: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    to_stop: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>;
    });
    traversal_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
/** The GTFS-Pathways extension uses a graph representation to describe subway or train, with nodes (the locations) and edges (the pathways). See https://gtfs.org/reference/static/#pathwaystxt */
interface PathwayObservableChain {
    from_stop: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    is_bidirectional: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    length: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    max_slope: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    min_width: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    pathway_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    pathway_mode: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    reverse_signposted_as: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    signposted_as: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stair_count: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    to_stop: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>;
    });
    traversal_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
interface QueryPromiseChain {
    agencies: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (AgencyFilter | null);
    }) => {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>;
    }) & ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>;
    });
    directions: ((args: {
        where: DirectionRequest;
    }) => DirectionsPromiseChain & {
        get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Promise<FieldsSelection<Directions, R>>;
    });
    feed_versions: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionFilter | null);
    }) => {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>;
    }) & ({
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Promise<FieldsSelection<FeedVersion, R>[]>;
    });
    feeds: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (FeedFilter | null);
    }) => {
        get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Promise<FieldsSelection<Feed, R>[]>;
    }) & ({
        get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Promise<FieldsSelection<Feed, R>[]>;
    });
    operators: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (OperatorFilter | null);
    }) => {
        get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Promise<FieldsSelection<Operator, R>[]>;
    }) & ({
        get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Promise<FieldsSelection<Operator, R>[]>;
    });
    routes: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    });
    stops: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    });
    trips: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }) => {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>;
    }) & ({
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>;
    });
}
interface QueryObservableChain {
    agencies: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (AgencyFilter | null);
    }) => {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>;
    }) & ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>;
    });
    directions: ((args: {
        where: DirectionRequest;
    }) => DirectionsObservableChain & {
        get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Observable<FieldsSelection<Directions, R>>;
    });
    feed_versions: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (FeedVersionFilter | null);
    }) => {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>;
    }) & ({
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>[]) => Observable<FieldsSelection<FeedVersion, R>[]>;
    });
    feeds: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (FeedFilter | null);
    }) => {
        get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Observable<FieldsSelection<Feed, R>[]>;
    }) & ({
        get: <R extends FeedRequest>(request: R, defaultValue?: FieldsSelection<Feed, R>[]) => Observable<FieldsSelection<Feed, R>[]>;
    });
    operators: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (OperatorFilter | null);
    }) => {
        get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Observable<FieldsSelection<Operator, R>[]>;
    }) & ({
        get: <R extends OperatorRequest>(request: R, defaultValue?: FieldsSelection<Operator, R>[]) => Observable<FieldsSelection<Operator, R>[]>;
    });
    routes: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (RouteFilter | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    });
    stops: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    });
    trips: ((args?: {
        after?: (Scalars['Int'] | null);
        ids?: (Scalars['Int'][] | null);
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }) => {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>;
    }) & ({
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
interface RTTimeRangePromiseChain {
    end: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    start: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-timerange */
interface RTTimeRangeObservableChain {
    end: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    start: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
interface RTTranslationPromiseChain {
    language: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    text: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-translatedstring */
interface RTTranslationObservableChain {
    language: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    text: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
interface RTTripDescriptorPromiseChain {
    direction_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    route_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    schedule_relationship: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    start_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'] | undefined)) => Promise<(Scalars['Seconds'] | undefined)>;
    });
    trip_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-tripdescriptor */
interface RTTripDescriptorObservableChain {
    direction_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    route_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    schedule_relationship: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    start_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'] | undefined)) => Observable<(Scalars['Seconds'] | undefined)>;
    });
    trip_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
interface RTVehicleDescriptorPromiseChain {
    id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    label: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    license_plate: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
}
/** See https://gtfs.org/reference/realtime/v2/#message-vehicledescriptor */
interface RTVehicleDescriptorObservableChain {
    id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    label: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    license_plate: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
}
/** See https://gtfs.org/schedule/reference/#routestxt */
interface RoutePromiseChain {
    agency: (AgencyPromiseChain & {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Promise<FieldsSelection<Agency, R>>;
    });
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    census_geographies: ((args: {
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }) => {
        get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Promise<(FieldsSelection<CensusGeography, R>[] | undefined)>;
    });
    continuous_drop_off: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    continuous_pickup: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    feed_onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    feed_version: (FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>;
    });
    feed_version_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    geometries: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Promise<FieldsSelection<RouteGeometry, R>[]>;
    }) & ({
        get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Promise<FieldsSelection<RouteGeometry, R>[]>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>;
    });
    headways: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Promise<FieldsSelection<RouteHeadway, R>[]>;
    }) & ({
        get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Promise<FieldsSelection<RouteHeadway, R>[]>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    route_color: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    route_desc: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    route_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    route_long_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    route_short_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    route_sort_order: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    route_stop_buffer: ((args?: {
        radius?: (Scalars['Float'] | null);
    }) => RouteStopBufferPromiseChain & {
        get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Promise<FieldsSelection<RouteStopBuffer, R>>;
    }) & (RouteStopBufferPromiseChain & {
        get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Promise<FieldsSelection<RouteStopBuffer, R>>;
    });
    route_stops: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>;
    }) & ({
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>;
    });
    route_text_color: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    route_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    route_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    stops: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    });
    trips: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }) => {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>;
    }) & ({
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Promise<FieldsSelection<Trip, R>[]>;
    });
}
/** See https://gtfs.org/schedule/reference/#routestxt */
interface RouteObservableChain {
    agency: (AgencyObservableChain & {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Observable<FieldsSelection<Agency, R>>;
    });
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    census_geographies: ((args: {
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }) => {
        get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Observable<(FieldsSelection<CensusGeography, R>[] | undefined)>;
    });
    continuous_drop_off: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    continuous_pickup: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    feed_onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    feed_version: (FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>;
    });
    feed_version_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    geometries: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Observable<FieldsSelection<RouteGeometry, R>[]>;
    }) & ({
        get: <R extends RouteGeometryRequest>(request: R, defaultValue?: FieldsSelection<RouteGeometry, R>[]) => Observable<FieldsSelection<RouteGeometry, R>[]>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>;
    });
    headways: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Observable<FieldsSelection<RouteHeadway, R>[]>;
    }) & ({
        get: <R extends RouteHeadwayRequest>(request: R, defaultValue?: FieldsSelection<RouteHeadway, R>[]) => Observable<FieldsSelection<RouteHeadway, R>[]>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    route_color: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    route_desc: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    route_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    route_long_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    route_short_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    route_sort_order: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    route_stop_buffer: ((args?: {
        radius?: (Scalars['Float'] | null);
    }) => RouteStopBufferObservableChain & {
        get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Observable<FieldsSelection<RouteStopBuffer, R>>;
    }) & (RouteStopBufferObservableChain & {
        get: <R extends RouteStopBufferRequest>(request: R, defaultValue?: FieldsSelection<RouteStopBuffer, R>) => Observable<FieldsSelection<RouteStopBuffer, R>>;
    });
    route_stops: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>;
    }) & ({
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>;
    });
    route_text_color: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    route_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    route_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    stops: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopFilter | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    });
    trips: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (TripFilter | null);
    }) => {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>;
    }) & ({
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>[]) => Observable<FieldsSelection<Trip, R>[]>;
    });
}
interface RouteGeometryPromiseChain {
    combined_geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>;
    });
    first_point_max_distance: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>;
    });
    /** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
    generated: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['LineString'] | undefined)) => Promise<(Scalars['LineString'] | undefined)>;
    });
    length: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>;
    });
    max_segment_length: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>;
    });
}
interface RouteGeometryObservableChain {
    combined_geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>;
    });
    first_point_max_distance: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>;
    });
    /** If true, the source GTFS feed provides no shapes. This route geometry is based on straight lines between stop points. */
    generated: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['LineString'] | undefined)) => Observable<(Scalars['LineString'] | undefined)>;
    });
    length: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>;
    });
    max_segment_length: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>;
    });
}
interface RouteHeadwayPromiseChain {
    departures: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'][] | undefined)) => Promise<(Scalars['Seconds'][] | undefined)>;
    });
    direction_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    dow_category: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    headway_secs: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    service_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    stop: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>;
    });
    stop_trip_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
}
interface RouteHeadwayObservableChain {
    departures: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'][] | undefined)) => Observable<(Scalars['Seconds'][] | undefined)>;
    });
    direction_id: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    dow_category: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    headway_secs: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    service_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    stop: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>;
    });
    stop_trip_count: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
}
interface RouteStopPromiseChain {
    agency: (AgencyPromiseChain & {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Promise<FieldsSelection<Agency, R>>;
    });
    agency_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    route: (RoutePromiseChain & {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Promise<FieldsSelection<Route, R>>;
    });
    route_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    stop: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>;
    });
    stop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
interface RouteStopObservableChain {
    agency: (AgencyObservableChain & {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>) => Observable<FieldsSelection<Agency, R>>;
    });
    agency_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    route: (RouteObservableChain & {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Observable<FieldsSelection<Route, R>>;
    });
    route_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    stop: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>;
    });
    stop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
interface RouteStopBufferPromiseChain {
    stop_buffer: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>;
    });
    stop_convexhull: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Promise<(Scalars['Polygon'] | undefined)>;
    });
    stop_points: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Promise<(Scalars['Geometry'] | undefined)>;
    });
}
interface RouteStopBufferObservableChain {
    stop_buffer: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>;
    });
    stop_convexhull: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Polygon'] | undefined)) => Observable<(Scalars['Polygon'] | undefined)>;
    });
    stop_points: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Geometry'] | undefined)) => Observable<(Scalars['Geometry'] | undefined)>;
    });
}
/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
interface ShapePromiseChain {
    generated: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: Scalars['LineString']) => Promise<Scalars['LineString']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    shape_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** Record from a static GTFS [shapes.txt](https://gtfs.org/schedule/reference/#shapestxt) file. */
interface ShapeObservableChain {
    generated: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: Scalars['LineString']) => Observable<Scalars['LineString']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    shape_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
interface StepPromiseChain {
    distance: (DistancePromiseChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Promise<FieldsSelection<Distance, R>>;
    });
    duration: (DurationPromiseChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Promise<FieldsSelection<Duration, R>>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    geometry_offset: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    instruction: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    mode: ({
        get: (request?: boolean | number, defaultValue?: StepMode) => Promise<StepMode>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Promise<Scalars['Time']>;
    });
    to: (WaypointPromiseChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Promise<(FieldsSelection<Waypoint, R> | undefined)>;
    });
}
interface StepObservableChain {
    distance: (DistanceObservableChain & {
        get: <R extends DistanceRequest>(request: R, defaultValue?: FieldsSelection<Distance, R>) => Observable<FieldsSelection<Distance, R>>;
    });
    duration: (DurationObservableChain & {
        get: <R extends DurationRequest>(request: R, defaultValue?: FieldsSelection<Duration, R>) => Observable<FieldsSelection<Duration, R>>;
    });
    end_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    geometry_offset: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    instruction: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    mode: ({
        get: (request?: boolean | number, defaultValue?: StepMode) => Observable<StepMode>;
    });
    start_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Time']) => Observable<Scalars['Time']>;
    });
    to: (WaypointObservableChain & {
        get: <R extends WaypointRequest>(request: R, defaultValue?: (FieldsSelection<Waypoint, R> | undefined)) => Observable<(FieldsSelection<Waypoint, R> | undefined)>;
    });
}
/** See https://gtfs.org/reference/static/#stopstxt */
interface StopPromiseChain {
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    arrivals: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>;
    });
    census_geographies: ((args: {
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }) => {
        get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Promise<(FieldsSelection<CensusGeography, R>[] | undefined)>;
    });
    children: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Promise<(FieldsSelection<Stop, R>[] | undefined)>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Promise<(FieldsSelection<Stop, R>[] | undefined)>;
    });
    departures: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>;
    });
    directions: ((args?: {
        depart_at?: (Scalars['Time'] | null);
        from?: (WaypointInput | null);
        mode?: (StepMode | null);
        to?: (WaypointInput | null);
    }) => DirectionsPromiseChain & {
        get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Promise<FieldsSelection<Directions, R>>;
    }) & (DirectionsPromiseChain & {
        get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Promise<FieldsSelection<Directions, R>>;
    });
    feed_onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    feed_version: (FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>;
    });
    feed_version_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Point']) => Promise<Scalars['Point']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    level: (LevelPromiseChain & {
        get: <R extends LevelRequest>(request: R, defaultValue?: (FieldsSelection<Level, R> | undefined)) => Promise<(FieldsSelection<Level, R> | undefined)>;
    });
    location_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    parent: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Promise<(FieldsSelection<Stop, R> | undefined)>;
    });
    pathways_from_stop: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>;
    }) & ({
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>;
    });
    pathways_to_stop: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>;
    }) & ({
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Promise<FieldsSelection<Pathway, R>[]>;
    });
    platform_code: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    route_stops: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>;
    }) & ({
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Promise<FieldsSelection<RouteStop, R>[]>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    stop_code: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stop_desc: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stop_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stop_times: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Promise<FieldsSelection<StopTime, R>[]>;
    });
    stop_timezone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stop_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    tts_stop_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    wheelchair_boarding: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    zone_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
/** See https://gtfs.org/reference/static/#stopstxt */
interface StopObservableChain {
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    arrivals: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>;
    });
    census_geographies: ((args: {
        layer: Scalars['String'];
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }) => {
        get: <R extends CensusGeographyRequest>(request: R, defaultValue?: (FieldsSelection<CensusGeography, R>[] | undefined)) => Observable<(FieldsSelection<CensusGeography, R>[] | undefined)>;
    });
    children: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Observable<(FieldsSelection<Stop, R>[] | undefined)>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R>[] | undefined)) => Observable<(FieldsSelection<Stop, R>[] | undefined)>;
    });
    departures: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>;
    });
    directions: ((args?: {
        depart_at?: (Scalars['Time'] | null);
        from?: (WaypointInput | null);
        mode?: (StepMode | null);
        to?: (WaypointInput | null);
    }) => DirectionsObservableChain & {
        get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Observable<FieldsSelection<Directions, R>>;
    }) & (DirectionsObservableChain & {
        get: <R extends DirectionsRequest>(request: R, defaultValue?: FieldsSelection<Directions, R>) => Observable<FieldsSelection<Directions, R>>;
    });
    feed_onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    feed_version: (FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>;
    });
    feed_version_sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    geometry: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Point']) => Observable<Scalars['Point']>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    level: (LevelObservableChain & {
        get: <R extends LevelRequest>(request: R, defaultValue?: (FieldsSelection<Level, R> | undefined)) => Observable<(FieldsSelection<Level, R> | undefined)>;
    });
    location_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    onestop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    parent: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Observable<(FieldsSelection<Stop, R> | undefined)>;
    });
    pathways_from_stop: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>;
    }) & ({
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>;
    });
    pathways_to_stop: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>;
    }) & ({
        get: <R extends PathwayRequest>(request: R, defaultValue?: FieldsSelection<Pathway, R>[]) => Observable<FieldsSelection<Pathway, R>[]>;
    });
    platform_code: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    route_stops: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>;
    }) & ({
        get: <R extends RouteStopRequest>(request: R, defaultValue?: FieldsSelection<RouteStop, R>[]) => Observable<FieldsSelection<RouteStop, R>[]>;
    });
    search_rank: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    stop_code: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stop_desc: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stop_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stop_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stop_times: ((args?: {
        limit?: (Scalars['Int'] | null);
        where?: (StopTimeFilter | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: FieldsSelection<StopTime, R>[]) => Observable<FieldsSelection<StopTime, R>[]>;
    });
    stop_timezone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stop_url: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    tts_stop_name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    wheelchair_boarding: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    zone_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
interface StopTimePromiseChain {
    arrival: (StopTimeEventPromiseChain & {
        get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Promise<FieldsSelection<StopTimeEvent, R>>;
    });
    arrival_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>;
    });
    continuous_drop_off: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    continuous_pickup: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    departure: (StopTimeEventPromiseChain & {
        get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Promise<FieldsSelection<StopTimeEvent, R>>;
    });
    departure_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Promise<Scalars['Seconds']>;
    });
    drop_off_type: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    interpolated: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    pickup_type: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    service_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    stop: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Promise<FieldsSelection<Stop, R>>;
    });
    stop_headsign: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    stop_sequence: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    timepoint: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    trip: (TripPromiseChain & {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>) => Promise<FieldsSelection<Trip, R>>;
    });
}
/** Record from a static GTFS [stop_times.txt](https://gtfs.org/schedule/reference/#stop_timestxt) file. */
interface StopTimeObservableChain {
    arrival: (StopTimeEventObservableChain & {
        get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Observable<FieldsSelection<StopTimeEvent, R>>;
    });
    arrival_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>;
    });
    continuous_drop_off: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    continuous_pickup: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    departure: (StopTimeEventObservableChain & {
        get: <R extends StopTimeEventRequest>(request: R, defaultValue?: FieldsSelection<StopTimeEvent, R>) => Observable<FieldsSelection<StopTimeEvent, R>>;
    });
    departure_time: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Seconds']) => Observable<Scalars['Seconds']>;
    });
    drop_off_type: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    interpolated: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    pickup_type: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    service_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    stop: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>) => Observable<FieldsSelection<Stop, R>>;
    });
    stop_headsign: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    stop_sequence: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    timepoint: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    trip: (TripObservableChain & {
        get: <R extends TripRequest>(request: R, defaultValue?: FieldsSelection<Trip, R>) => Observable<FieldsSelection<Trip, R>>;
    });
}
interface StopTimeEventPromiseChain {
    delay: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    estimated: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'] | undefined)) => Promise<(Scalars['Seconds'] | undefined)>;
    });
    estimated_utc: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    scheduled: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'] | undefined)) => Promise<(Scalars['Seconds'] | undefined)>;
    });
    stop_timezone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    uncertainty: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
}
interface StopTimeEventObservableChain {
    delay: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    estimated: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'] | undefined)) => Observable<(Scalars['Seconds'] | undefined)>;
    });
    estimated_utc: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    scheduled: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Seconds'] | undefined)) => Observable<(Scalars['Seconds'] | undefined)>;
    });
    stop_timezone: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    uncertainty: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
}
/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
interface TripPromiseChain {
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Promise<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    bikes_allowed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    block_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    calendar: (CalendarPromiseChain & {
        get: <R extends CalendarRequest>(request: R, defaultValue?: FieldsSelection<Calendar, R>) => Promise<FieldsSelection<Calendar, R>>;
    });
    direction_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    feed_version: (FeedVersionPromiseChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Promise<FieldsSelection<FeedVersion, R>>;
    });
    frequencies: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Promise<FieldsSelection<Frequency, R>[]>;
    }) & ({
        get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Promise<FieldsSelection<Frequency, R>[]>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    route: (RoutePromiseChain & {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Promise<FieldsSelection<Route, R>>;
    });
    schedule_relationship: ({
        get: (request?: boolean | number, defaultValue?: (ScheduleRelationship | undefined)) => Promise<(ScheduleRelationship | undefined)>;
    });
    shape: (ShapePromiseChain & {
        get: <R extends ShapeRequest>(request: R, defaultValue?: (FieldsSelection<Shape, R> | undefined)) => Promise<(FieldsSelection<Shape, R> | undefined)>;
    });
    stop_pattern_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    stop_times: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Promise<(FieldsSelection<StopTime, R> | undefined)[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Promise<(FieldsSelection<StopTime, R> | undefined)[]>;
    });
    timestamp: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    trip_headsign: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    trip_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    trip_short_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    wheelchair_accessible: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
interface TripObservableChain {
    alerts: ({
        get: <R extends AlertRequest>(request: R, defaultValue?: (FieldsSelection<Alert, R>[] | undefined)) => Observable<(FieldsSelection<Alert, R>[] | undefined)>;
    });
    bikes_allowed: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    block_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    calendar: (CalendarObservableChain & {
        get: <R extends CalendarRequest>(request: R, defaultValue?: FieldsSelection<Calendar, R>) => Observable<FieldsSelection<Calendar, R>>;
    });
    direction_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    feed_version: (FeedVersionObservableChain & {
        get: <R extends FeedVersionRequest>(request: R, defaultValue?: FieldsSelection<FeedVersion, R>) => Observable<FieldsSelection<FeedVersion, R>>;
    });
    frequencies: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Observable<FieldsSelection<Frequency, R>[]>;
    }) & ({
        get: <R extends FrequencyRequest>(request: R, defaultValue?: FieldsSelection<Frequency, R>[]) => Observable<FieldsSelection<Frequency, R>[]>;
    });
    id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    route: (RouteObservableChain & {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>) => Observable<FieldsSelection<Route, R>>;
    });
    schedule_relationship: ({
        get: (request?: boolean | number, defaultValue?: (ScheduleRelationship | undefined)) => Observable<(ScheduleRelationship | undefined)>;
    });
    shape: (ShapeObservableChain & {
        get: <R extends ShapeRequest>(request: R, defaultValue?: (FieldsSelection<Shape, R> | undefined)) => Observable<(FieldsSelection<Shape, R> | undefined)>;
    });
    stop_pattern_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    stop_times: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Observable<(FieldsSelection<StopTime, R> | undefined)[]>;
    }) & ({
        get: <R extends StopTimeRequest>(request: R, defaultValue?: (FieldsSelection<StopTime, R> | undefined)[]) => Observable<(FieldsSelection<StopTime, R> | undefined)[]>;
    });
    timestamp: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    trip_headsign: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    trip_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    trip_short_name: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    wheelchair_accessible: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
interface ValidationResultPromiseChain {
    agencies: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>;
    }) & ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Promise<FieldsSelection<Agency, R>[]>;
    });
    earliest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    errors: ({
        get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Promise<FieldsSelection<ValidationResultErrorGroup, R>[]>;
    });
    failure_reason: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    feed_infos: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>;
    }) & ({
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Promise<FieldsSelection<FeedInfo, R>[]>;
    });
    files: ({
        get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Promise<FieldsSelection<FeedVersionFileInfo, R>[]>;
    });
    latest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Promise<(Scalars['Date'] | undefined)>;
    });
    routes: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Promise<FieldsSelection<Route, R>[]>;
    });
    service_levels: ((args?: {
        limit?: (Scalars['Int'] | null);
        route_id?: (Scalars['String'] | null);
    }) => {
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    }) & ({
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Promise<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    });
    sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    stops: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Promise<FieldsSelection<Stop, R>[]>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>;
    });
    warnings: ({
        get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Promise<FieldsSelection<ValidationResultErrorGroup, R>[]>;
    });
}
interface ValidationResultObservableChain {
    agencies: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>;
    }) & ({
        get: <R extends AgencyRequest>(request: R, defaultValue?: FieldsSelection<Agency, R>[]) => Observable<FieldsSelection<Agency, R>[]>;
    });
    earliest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    errors: ({
        get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Observable<FieldsSelection<ValidationResultErrorGroup, R>[]>;
    });
    failure_reason: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    feed_infos: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>;
    }) & ({
        get: <R extends FeedInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedInfo, R>[]) => Observable<FieldsSelection<FeedInfo, R>[]>;
    });
    files: ({
        get: <R extends FeedVersionFileInfoRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionFileInfo, R>[]) => Observable<FieldsSelection<FeedVersionFileInfo, R>[]>;
    });
    latest_calendar_date: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Date'] | undefined)) => Observable<(Scalars['Date'] | undefined)>;
    });
    routes: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    }) & ({
        get: <R extends RouteRequest>(request: R, defaultValue?: FieldsSelection<Route, R>[]) => Observable<FieldsSelection<Route, R>[]>;
    });
    service_levels: ((args?: {
        limit?: (Scalars['Int'] | null);
        route_id?: (Scalars['String'] | null);
    }) => {
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    }) & ({
        get: <R extends FeedVersionServiceLevelRequest>(request: R, defaultValue?: FieldsSelection<FeedVersionServiceLevel, R>[]) => Observable<FieldsSelection<FeedVersionServiceLevel, R>[]>;
    });
    sha1: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    stops: ((args?: {
        limit?: (Scalars['Int'] | null);
    }) => {
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    }) & ({
        get: <R extends StopRequest>(request: R, defaultValue?: FieldsSelection<Stop, R>[]) => Observable<FieldsSelection<Stop, R>[]>;
    });
    success: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>;
    });
    warnings: ({
        get: <R extends ValidationResultErrorGroupRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultErrorGroup, R>[]) => Observable<FieldsSelection<ValidationResultErrorGroup, R>[]>;
    });
}
interface ValidationResultErrorPromiseChain {
    entity_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    error_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    field: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    filename: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    message: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    value: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
}
interface ValidationResultErrorObservableChain {
    entity_id: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    error_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    field: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    filename: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    message: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    value: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
}
interface ValidationResultErrorGroupPromiseChain {
    count: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
    error_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    errors: ({
        get: <R extends ValidationResultErrorRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultError, R>[]) => Promise<FieldsSelection<ValidationResultError, R>[]>;
    });
    filename: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>;
    });
    limit: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>;
    });
}
interface ValidationResultErrorGroupObservableChain {
    count: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
    error_type: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    errors: ({
        get: <R extends ValidationResultErrorRequest>(request: R, defaultValue?: FieldsSelection<ValidationResultError, R>[]) => Observable<FieldsSelection<ValidationResultError, R>[]>;
    });
    filename: ({
        get: (request?: boolean | number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>;
    });
    limit: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>;
    });
}
/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
interface VehiclePositionPromiseChain {
    congestion_level: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    current_status: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
    current_stop_sequence: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>;
    });
    position: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Point'] | undefined)) => Promise<(Scalars['Point'] | undefined)>;
    });
    stop_id: (StopPromiseChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Promise<(FieldsSelection<Stop, R> | undefined)>;
    });
    timestamp: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Promise<(Scalars['Time'] | undefined)>;
    });
    vehicle: (RTVehicleDescriptorPromiseChain & {
        get: <R extends RTVehicleDescriptorRequest>(request: R, defaultValue?: (FieldsSelection<RTVehicleDescriptor, R> | undefined)) => Promise<(FieldsSelection<RTVehicleDescriptor, R> | undefined)>;
    });
}
/** [Vehicle Position](https://gtfs.org/reference/realtime/v2/#message-vehicleposition) message provided by a source GTFS Realtime feed. */
interface VehiclePositionObservableChain {
    congestion_level: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    current_status: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
    current_stop_sequence: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>;
    });
    position: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Point'] | undefined)) => Observable<(Scalars['Point'] | undefined)>;
    });
    stop_id: (StopObservableChain & {
        get: <R extends StopRequest>(request: R, defaultValue?: (FieldsSelection<Stop, R> | undefined)) => Observable<(FieldsSelection<Stop, R> | undefined)>;
    });
    timestamp: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['Time'] | undefined)) => Observable<(Scalars['Time'] | undefined)>;
    });
    vehicle: (RTVehicleDescriptorObservableChain & {
        get: <R extends RTVehicleDescriptorRequest>(request: R, defaultValue?: (FieldsSelection<RTVehicleDescriptor, R> | undefined)) => Observable<(FieldsSelection<RTVehicleDescriptor, R> | undefined)>;
    });
}
interface WaypointPromiseChain {
    lat: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    lon: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>;
    });
}
interface WaypointObservableChain {
    lat: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    lon: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Observable<Scalars['Float']>;
    });
    name: ({
        get: (request?: boolean | number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>;
    });
}

declare const createClient: (options?: ClientOptions) => Client
declare const everything: { __scalar: boolean }
declare const version: string

interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>

  chain: {
    query: QueryPromiseChain

    mutation: MutationPromiseChain
  }
}

type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
type MutationResult<fields extends MutationRequest> = FieldsSelection<
  Mutation,
  fields
>

declare const generateMutationOp: (
  fields: MutationRequest & { __name?: string },
) => GraphqlOperation

declare const enumDistanceUnit: {
  readonly KILOMETERS: 'KILOMETERS'
  readonly MILES: 'MILES'
}

declare const enumDurationUnit: {
  readonly SECONDS: 'SECONDS'
}

declare const enumFeedSourceUrlTypes: {
  readonly gbfs_auto_discovery: 'gbfs_auto_discovery'
  readonly mds_provider: 'mds_provider'
  readonly realtime_alerts: 'realtime_alerts'
  readonly realtime_trip_updates: 'realtime_trip_updates'
  readonly realtime_vehicle_positions: 'realtime_vehicle_positions'
  readonly static_current: 'static_current'
  readonly static_historic: 'static_historic'
  readonly static_hypothetical: 'static_hypothetical'
  readonly static_planned: 'static_planned'
}

declare const enumFeedSpecTypes: {
  readonly GBFS: 'GBFS'
  readonly GTFS: 'GTFS'
  readonly GTFS_RT: 'GTFS_RT'
  readonly MDS: 'MDS'
}

declare const enumImportStatus: {
  readonly ERROR: 'ERROR'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly SUCCESS: 'SUCCESS'
}

declare const enumRole: {
  readonly ADMIN: 'ADMIN'
  readonly ANON: 'ANON'
  readonly USER: 'USER'
}

declare const enumScheduleRelationship: {
  readonly ADDED: 'ADDED'
  readonly CANCELED: 'CANCELED'
  readonly SCHEDULED: 'SCHEDULED'
  readonly UNSCHEDULED: 'UNSCHEDULED'
}

declare const enumStepMode: {
  readonly AUTO: 'AUTO'
  readonly BICYCLE: 'BICYCLE'
  readonly LINE: 'LINE'
  readonly TRANSIT: 'TRANSIT'
  readonly WALK: 'WALK'
}

export { Agency, AgencyFilter, AgencyObservableChain, AgencyPlace, AgencyPlaceFilter, AgencyPlaceObservableChain, AgencyPlacePromiseChain, AgencyPlaceRequest, AgencyPromiseChain, AgencyRequest, Alert, AlertObservableChain, AlertPromiseChain, AlertRequest, Calendar, CalendarDateFilter, CalendarObservableChain, CalendarPromiseChain, CalendarRequest, CensusGeography, CensusGeographyObservableChain, CensusGeographyPromiseChain, CensusGeographyRequest, CensusTable, CensusTableObservableChain, CensusTablePromiseChain, CensusTableRequest, CensusValue, CensusValueObservableChain, CensusValuePromiseChain, CensusValueRequest, Client, DirectionRequest, Directions, DirectionsObservableChain, DirectionsPromiseChain, DirectionsRequest, Distance, DistanceObservableChain, DistancePromiseChain, DistanceRequest, DistanceUnit, Duration, DurationObservableChain, DurationPromiseChain, DurationRequest, DurationUnit, Feed, FeedAuthorization, FeedAuthorizationObservableChain, FeedAuthorizationPromiseChain, FeedAuthorizationRequest, FeedFetch, FeedFetchFilter, FeedFetchObservableChain, FeedFetchPromiseChain, FeedFetchRequest, FeedFilter, FeedInfo, FeedInfoObservableChain, FeedInfoPromiseChain, FeedInfoRequest, FeedLicense, FeedLicenseObservableChain, FeedLicensePromiseChain, FeedLicenseRequest, FeedObservableChain, FeedPromiseChain, FeedRequest, FeedSourceUrl, FeedSourceUrlTypes, FeedSpecTypes, FeedState, FeedStateObservableChain, FeedStatePromiseChain, FeedStateRequest, FeedUrls, FeedUrlsObservableChain, FeedUrlsPromiseChain, FeedUrlsRequest, FeedVersion, FeedVersionDeleteResult, FeedVersionDeleteResultObservableChain, FeedVersionDeleteResultPromiseChain, FeedVersionDeleteResultRequest, FeedVersionFetchResult, FeedVersionFetchResultObservableChain, FeedVersionFetchResultPromiseChain, FeedVersionFetchResultRequest, FeedVersionFileInfo, FeedVersionFileInfoObservableChain, FeedVersionFileInfoPromiseChain, FeedVersionFileInfoRequest, FeedVersionFilter, FeedVersionGtfsImport, FeedVersionGtfsImportObservableChain, FeedVersionGtfsImportPromiseChain, FeedVersionGtfsImportRequest, FeedVersionImportResult, FeedVersionImportResultObservableChain, FeedVersionImportResultPromiseChain, FeedVersionImportResultRequest, FeedVersionObservableChain, FeedVersionPromiseChain, FeedVersionRequest, FeedVersionServiceLevel, FeedVersionServiceLevelFilter, FeedVersionServiceLevelObservableChain, FeedVersionServiceLevelPromiseChain, FeedVersionServiceLevelRequest, FeedVersionSetInput, FeedVersionUnimportResult, FeedVersionUnimportResultObservableChain, FeedVersionUnimportResultPromiseChain, FeedVersionUnimportResultRequest, Frequency, FrequencyObservableChain, FrequencyPromiseChain, FrequencyRequest, ImportStatus, Itinerary, ItineraryObservableChain, ItineraryPromiseChain, ItineraryRequest, Leg, LegObservableChain, LegPromiseChain, LegRequest, Level, LevelObservableChain, LevelPromiseChain, LevelRequest, Mutation, MutationObservableChain, MutationPromiseChain, MutationRequest, MutationResult, Operator, OperatorFilter, OperatorObservableChain, OperatorPromiseChain, OperatorRequest, Pathway, PathwayFilter, PathwayObservableChain, PathwayPromiseChain, PathwayRequest, PointRadius, Query, QueryObservableChain, QueryPromiseChain, QueryRequest, QueryResult, RTTimeRange, RTTimeRangeObservableChain, RTTimeRangePromiseChain, RTTimeRangeRequest, RTTranslation, RTTranslationObservableChain, RTTranslationPromiseChain, RTTranslationRequest, RTTripDescriptor, RTTripDescriptorObservableChain, RTTripDescriptorPromiseChain, RTTripDescriptorRequest, RTVehicleDescriptor, RTVehicleDescriptorObservableChain, RTVehicleDescriptorPromiseChain, RTVehicleDescriptorRequest, Role, Route, RouteFilter, RouteGeometry, RouteGeometryObservableChain, RouteGeometryPromiseChain, RouteGeometryRequest, RouteHeadway, RouteHeadwayObservableChain, RouteHeadwayPromiseChain, RouteHeadwayRequest, RouteObservableChain, RoutePromiseChain, RouteRequest, RouteStop, RouteStopBuffer, RouteStopBufferObservableChain, RouteStopBufferPromiseChain, RouteStopBufferRequest, RouteStopObservableChain, RouteStopPromiseChain, RouteStopRequest, Scalars, ScheduleRelationship, Shape, ShapeObservableChain, ShapePromiseChain, ShapeRequest, Step, StepMode, StepObservableChain, StepPromiseChain, StepRequest, Stop, StopFilter, StopObservableChain, StopPromiseChain, StopRequest, StopTime, StopTimeEvent, StopTimeEventObservableChain, StopTimeEventPromiseChain, StopTimeEventRequest, StopTimeFilter, StopTimeObservableChain, StopTimePromiseChain, StopTimeRequest, Trip, TripFilter, TripObservableChain, TripPromiseChain, TripRequest, ValidationResult, ValidationResultError, ValidationResultErrorGroup, ValidationResultErrorGroupObservableChain, ValidationResultErrorGroupPromiseChain, ValidationResultErrorGroupRequest, ValidationResultErrorObservableChain, ValidationResultErrorPromiseChain, ValidationResultErrorRequest, ValidationResultObservableChain, ValidationResultPromiseChain, ValidationResultRequest, VehiclePosition, VehiclePositionObservableChain, VehiclePositionPromiseChain, VehiclePositionRequest, Waypoint, WaypointInput, WaypointObservableChain, WaypointPromiseChain, WaypointRequest, createClient, enumDistanceUnit, enumDurationUnit, enumFeedSourceUrlTypes, enumFeedSpecTypes, enumImportStatus, enumRole, enumScheduleRelationship, enumStepMode, everything, generateMutationOp, generateQueryOp, isAgency, isAgencyPlace, isAlert, isCalendar, isCensusGeography, isCensusTable, isCensusValue, isDirections, isDistance, isDuration, isFeed, isFeedAuthorization, isFeedFetch, isFeedInfo, isFeedLicense, isFeedState, isFeedUrls, isFeedVersion, isFeedVersionDeleteResult, isFeedVersionFetchResult, isFeedVersionFileInfo, isFeedVersionGtfsImport, isFeedVersionImportResult, isFeedVersionServiceLevel, isFeedVersionUnimportResult, isFrequency, isItinerary, isLeg, isLevel, isMutation, isOperator, isPathway, isQuery, isRTTimeRange, isRTTranslation, isRTTripDescriptor, isRTVehicleDescriptor, isRoute, isRouteGeometry, isRouteHeadway, isRouteStop, isRouteStopBuffer, isShape, isStep, isStop, isStopTime, isStopTimeEvent, isTrip, isValidationResult, isValidationResultError, isValidationResultErrorGroup, isVehiclePosition, isWaypoint, version };
