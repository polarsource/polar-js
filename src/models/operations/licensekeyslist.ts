/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID.
 */
export type LicenseKeysListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

export type LicenseKeysListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
};

export type LicenseKeysListResponse = {
  result: components.ListResourceLicenseKeyRead;
};

/** @internal */
export const LicenseKeysListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    LicenseKeysListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type LicenseKeysListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const LicenseKeysListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    LicenseKeysListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    LicenseKeysListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeysListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `LicenseKeysListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    LicenseKeysListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `LicenseKeysListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    LicenseKeysListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `LicenseKeysListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound = LicenseKeysListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const LicenseKeysListRequest$inboundSchema: z.ZodType<
  LicenseKeysListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type LicenseKeysListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const LicenseKeysListRequest$outboundSchema: z.ZodType<
  LicenseKeysListRequest$Outbound,
  z.ZodTypeDef,
  LicenseKeysListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeysListRequest$ {
  /** @deprecated use `LicenseKeysListRequest$inboundSchema` instead. */
  export const inboundSchema = LicenseKeysListRequest$inboundSchema;
  /** @deprecated use `LicenseKeysListRequest$outboundSchema` instead. */
  export const outboundSchema = LicenseKeysListRequest$outboundSchema;
  /** @deprecated use `LicenseKeysListRequest$Outbound` instead. */
  export type Outbound = LicenseKeysListRequest$Outbound;
}

/** @internal */
export const LicenseKeysListResponse$inboundSchema: z.ZodType<
  LicenseKeysListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceLicenseKeyRead$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type LicenseKeysListResponse$Outbound = {
  Result: components.ListResourceLicenseKeyRead$Outbound;
};

/** @internal */
export const LicenseKeysListResponse$outboundSchema: z.ZodType<
  LicenseKeysListResponse$Outbound,
  z.ZodTypeDef,
  LicenseKeysListResponse
> = z.object({
  result: components.ListResourceLicenseKeyRead$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeysListResponse$ {
  /** @deprecated use `LicenseKeysListResponse$inboundSchema` instead. */
  export const inboundSchema = LicenseKeysListResponse$inboundSchema;
  /** @deprecated use `LicenseKeysListResponse$outboundSchema` instead. */
  export const outboundSchema = LicenseKeysListResponse$outboundSchema;
  /** @deprecated use `LicenseKeysListResponse$Outbound` instead. */
  export type Outbound = LicenseKeysListResponse$Outbound;
}
