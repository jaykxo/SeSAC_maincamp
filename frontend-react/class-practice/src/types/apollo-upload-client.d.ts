declare module "apollo-upload-client/createUploadLink.mjs" {
  import type { ApolloLink } from "@apollo/client";

  export interface CreateUploadLinkOptions {
    uri?: string | ((operation: unknown) => string);
    useGETForQueries?: boolean;
    isExtractableFile?: unknown;
    FormData?: typeof FormData;
    formDataAppendFile?: unknown;
    print?: unknown;
    fetch?: typeof fetch;
    fetchOptions?: RequestInit;
    credentials?: RequestCredentials | string;
    headers?: Record<string, string>;
    includeExtensions?: boolean;
  }

  const createUploadLink: (options?: CreateUploadLinkOptions) => ApolloLink;
  export default createUploadLink;
} 