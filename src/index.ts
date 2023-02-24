import { createClient as originalCreateClient } from "./_client";

type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export * from "./_client";

export type ClientOptions = Optional<
  NonNullable<Parameters<typeof originalCreateClient>[0]>,
  "url" | "batch"
> & {
  apiKey: string;
};

export const createClient = ({ apiKey, ...options }: ClientOptions) => {
  options.batch = !!options.batch ? options.batch : false;
  options.url = options.url ?? "https://transit.land/api/v2/query";
  options.headers = {
    ...options.headers,
    apiKey,
  };
  const { query } = originalCreateClient(options);
  return { query };
};
