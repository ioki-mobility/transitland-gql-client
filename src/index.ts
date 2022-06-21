import type { ClientOptions as OriginalClientOptions} from '@genql/runtime';
import { createClient as originalCreateClient } from './_client';

type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type ClientOptions = Optional<OriginalClientOptions, 'url' | 'batch'> & {
    apiKey: string;
};

export const createClient = ({ apiKey, ...options }: ClientOptions) => {
    options.batch = !!options.batch ? options.batch : false;
    options.url = options.url ?? "https://transit.land/api/v2/query";
    options.headers = {
        ...options.headers,
        apiKey
    };
    
    const { mutation, wsClient, ...client} = originalCreateClient(options);
    return client;
}
export * from './_client';
