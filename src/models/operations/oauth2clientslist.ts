/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ListResourceOAuth2Client,
  ListResourceOAuth2Client$inboundSchema,
  ListResourceOAuth2Client$Outbound,
  ListResourceOAuth2Client$outboundSchema,
} from "../components/listresourceoauth2client.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Oauth2ClientsListRequest = {
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
};

export type Oauth2ClientsListResponse = {
  result: ListResourceOAuth2Client;
};

/** @internal */
export const Oauth2ClientsListRequest$inboundSchema: z.ZodType<
  Oauth2ClientsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/** @internal */
export type Oauth2ClientsListRequest$Outbound = {
  page: number;
  limit: number;
};

/** @internal */
export const Oauth2ClientsListRequest$outboundSchema: z.ZodType<
  Oauth2ClientsListRequest$Outbound,
  z.ZodTypeDef,
  Oauth2ClientsListRequest
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Oauth2ClientsListRequest$ {
  /** @deprecated use `Oauth2ClientsListRequest$inboundSchema` instead. */
  export const inboundSchema = Oauth2ClientsListRequest$inboundSchema;
  /** @deprecated use `Oauth2ClientsListRequest$outboundSchema` instead. */
  export const outboundSchema = Oauth2ClientsListRequest$outboundSchema;
  /** @deprecated use `Oauth2ClientsListRequest$Outbound` instead. */
  export type Outbound = Oauth2ClientsListRequest$Outbound;
}

export function oauth2ClientsListRequestToJSON(
  oauth2ClientsListRequest: Oauth2ClientsListRequest,
): string {
  return JSON.stringify(
    Oauth2ClientsListRequest$outboundSchema.parse(oauth2ClientsListRequest),
  );
}

export function oauth2ClientsListRequestFromJSON(
  jsonString: string,
): SafeParseResult<Oauth2ClientsListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Oauth2ClientsListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Oauth2ClientsListRequest' from JSON`,
  );
}

/** @internal */
export const Oauth2ClientsListResponse$inboundSchema: z.ZodType<
  Oauth2ClientsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: ListResourceOAuth2Client$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type Oauth2ClientsListResponse$Outbound = {
  Result: ListResourceOAuth2Client$Outbound;
};

/** @internal */
export const Oauth2ClientsListResponse$outboundSchema: z.ZodType<
  Oauth2ClientsListResponse$Outbound,
  z.ZodTypeDef,
  Oauth2ClientsListResponse
> = z.object({
  result: ListResourceOAuth2Client$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Oauth2ClientsListResponse$ {
  /** @deprecated use `Oauth2ClientsListResponse$inboundSchema` instead. */
  export const inboundSchema = Oauth2ClientsListResponse$inboundSchema;
  /** @deprecated use `Oauth2ClientsListResponse$outboundSchema` instead. */
  export const outboundSchema = Oauth2ClientsListResponse$outboundSchema;
  /** @deprecated use `Oauth2ClientsListResponse$Outbound` instead. */
  export type Outbound = Oauth2ClientsListResponse$Outbound;
}

export function oauth2ClientsListResponseToJSON(
  oauth2ClientsListResponse: Oauth2ClientsListResponse,
): string {
  return JSON.stringify(
    Oauth2ClientsListResponse$outboundSchema.parse(oauth2ClientsListResponse),
  );
}

export function oauth2ClientsListResponseFromJSON(
  jsonString: string,
): SafeParseResult<Oauth2ClientsListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Oauth2ClientsListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Oauth2ClientsListResponse' from JSON`,
  );
}
