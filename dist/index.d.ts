import * as _genql_runtime from '@genql/runtime';
import { FieldsSelection, ClientOptions as ClientOptions$1 } from '@genql/runtime';

declare type Scalars = {
    Any: any;
    Boolean: boolean;
    Date: string;
    Float: number;
    Geometry: GeoJSON.Geometry;
    Int: number;
    LineString: GeoJSON.LineString;
    Map: any;
    Point: GeoJSON.Point;
    Polygon: GeoJSON.Polygon;
    Seconds: string;
    String: string;
    Tags: {
        [k: string]: string;
    };
    Time: string;
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
    patterns?: RouteStopPattern[];
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
interface RouteStopPattern {
    count: Scalars['Int'];
    direction_id: Scalars['Int'];
    stop_pattern_id: Scalars['Int'];
    trips?: Trip[];
    __typename: 'RouteStopPattern';
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
    nearby_stops?: Stop[];
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
    alerts?: [{
        active?: (Scalars['Boolean'] | null);
        limit?: (Scalars['Int'] | null);
    }, AlertRequest] | AlertRequest;
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
    import_status?: (ImportStatus | null);
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
/** See https://gtfs.org/schedule/reference/#routestxt */
interface RouteRequest {
    agency?: AgencyRequest;
    alerts?: [{
        active?: (Scalars['Boolean'] | null);
        limit?: (Scalars['Int'] | null);
    }, AlertRequest] | AlertRequest;
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
    patterns?: RouteStopPatternRequest;
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
interface RouteStopPatternRequest {
    count?: boolean | number;
    direction_id?: boolean | number;
    stop_pattern_id?: boolean | number;
    trips?: [{
        limit?: (Scalars['Int'] | null);
    }, TripRequest] | TripRequest;
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
    alerts?: [{
        active?: (Scalars['Boolean'] | null);
        limit?: (Scalars['Int'] | null);
    }, AlertRequest] | AlertRequest;
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
    nearby_stops?: [{
        limit?: (Scalars['Int'] | null);
        radius?: (Scalars['Float'] | null);
    }, StopRequest] | StopRequest;
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
    end?: (Scalars['Seconds'] | null);
    end_time?: (Scalars['Int'] | null);
    exclude_first?: (Scalars['Boolean'] | null);
    exclude_last?: (Scalars['Boolean'] | null);
    next?: (Scalars['Int'] | null);
    route_onestop_ids?: (Scalars['String'][] | null);
    service_date?: (Scalars['Date'] | null);
    start?: (Scalars['Seconds'] | null);
    start_time?: (Scalars['Int'] | null);
    use_service_window?: (Scalars['Boolean'] | null);
}
/** Record from a static GTFS [trips.txt](https://gtfs.org/schedule/reference/#tripstxt) file optionally enriched with by GTFS Realtime [TripUpdate](https://gtfs.org/reference/realtime/v2/#message-tripupdate) and [Alert](https://gtfs.org/reference/realtime/v2/#message-alert) messages. */
interface TripRequest {
    alerts?: [{
        active?: (Scalars['Boolean'] | null);
        limit?: (Scalars['Int'] | null);
    }, AlertRequest] | AlertRequest;
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
    stop_pattern_id?: (Scalars['Int'] | null);
    trip_id?: (Scalars['String'] | null);
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
interface DistancePromiseChain {
    distance: ({
        get: (request?: boolean | number, defaultValue?: Scalars['Float']) => Promise<Scalars['Float']>;
    });
    units: ({
        get: (request?: boolean | number, defaultValue?: DistanceUnit) => Promise<DistanceUnit>;
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

declare type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type ClientOptions = Optional<ClientOptions$1, 'url' | 'batch'> & {
    apiKey: string;
};
declare const createClient: ({ apiKey, ...options }: ClientOptions) => {
    query: <R extends QueryRequest>(request: R & {
        __name?: string | undefined;
    }) => Promise<_genql_runtime.FieldsSelection<Query, R>>;
    chain: {
        query: QueryPromiseChain;
    };
};

export { createClient };
