import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import { QueryRequest, QueryPromiseChain, Query } from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  chain: {
    query: QueryPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation

export declare const enumDistanceUnit: {
  readonly KILOMETERS: 'KILOMETERS'
  readonly MILES: 'MILES'
}

export declare const enumDurationUnit: {
  readonly SECONDS: 'SECONDS'
}

export declare const enumFeedSourceUrlTypes: {
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

export declare const enumFeedSpecTypes: {
  readonly GBFS: 'GBFS'
  readonly GTFS: 'GTFS'
  readonly GTFS_RT: 'GTFS_RT'
  readonly MDS: 'MDS'
}

export declare const enumImportStatus: {
  readonly ERROR: 'ERROR'
  readonly IN_PROGRESS: 'IN_PROGRESS'
  readonly SUCCESS: 'SUCCESS'
}

export declare const enumLicenseValue: {
  readonly EXCLUDE_NO: 'EXCLUDE_NO'
  readonly NO: 'NO'
  readonly UNKNOWN: 'UNKNOWN'
  readonly YES: 'YES'
}

export declare const enumRole: {
  readonly ADMIN: 'ADMIN'
  readonly ANON: 'ANON'
  readonly USER: 'USER'
}

export declare const enumScheduleRelationship: {
  readonly ADDED: 'ADDED'
  readonly CANCELED: 'CANCELED'
  readonly SCHEDULED: 'SCHEDULED'
  readonly UNSCHEDULED: 'UNSCHEDULED'
}

export declare const enumStepMode: {
  readonly AUTO: 'AUTO'
  readonly BICYCLE: 'BICYCLE'
  readonly LINE: 'LINE'
  readonly TRANSIT: 'TRANSIT'
  readonly WALK: 'WALK'
}
