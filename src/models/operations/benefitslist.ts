/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID.
 */
export type BenefitsListQueryParamOrganizationIDFilter = string | Array<string>;

/**
 * Filter by benefit type.
 */
export type QueryParamBenefitTypeFilter =
  | components.BenefitType
  | Array<components.BenefitType>;

export type BenefitsListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by benefit type.
   */
  typeFilter?:
    | components.BenefitType
    | Array<components.BenefitType>
    | null
    | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
};

export type BenefitsListResponse = {
  result: components.ListResourceBenefit;
};

/** @internal */
export const BenefitsListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<BenefitsListQueryParamOrganizationIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type BenefitsListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const BenefitsListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    BenefitsListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    BenefitsListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitsListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `BenefitsListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    BenefitsListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `BenefitsListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    BenefitsListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `BenefitsListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound = BenefitsListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const QueryParamBenefitTypeFilter$inboundSchema: z.ZodType<
  QueryParamBenefitTypeFilter,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.BenefitType$inboundSchema,
  z.array(components.BenefitType$inboundSchema),
]);

/** @internal */
export type QueryParamBenefitTypeFilter$Outbound = string | Array<string>;

/** @internal */
export const QueryParamBenefitTypeFilter$outboundSchema: z.ZodType<
  QueryParamBenefitTypeFilter$Outbound,
  z.ZodTypeDef,
  QueryParamBenefitTypeFilter
> = z.union([
  components.BenefitType$outboundSchema,
  z.array(components.BenefitType$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamBenefitTypeFilter$ {
  /** @deprecated use `QueryParamBenefitTypeFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamBenefitTypeFilter$inboundSchema;
  /** @deprecated use `QueryParamBenefitTypeFilter$outboundSchema` instead. */
  export const outboundSchema = QueryParamBenefitTypeFilter$outboundSchema;
  /** @deprecated use `QueryParamBenefitTypeFilter$Outbound` instead. */
  export type Outbound = QueryParamBenefitTypeFilter$Outbound;
}

/** @internal */
export const BenefitsListRequest$inboundSchema: z.ZodType<
  BenefitsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  type_filter: z.nullable(
    z.union([
      components.BenefitType$inboundSchema,
      z.array(components.BenefitType$inboundSchema),
    ]),
  ).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "type_filter": "typeFilter",
  });
});

/** @internal */
export type BenefitsListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  type_filter?: string | Array<string> | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const BenefitsListRequest$outboundSchema: z.ZodType<
  BenefitsListRequest$Outbound,
  z.ZodTypeDef,
  BenefitsListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  typeFilter: z.nullable(
    z.union([
      components.BenefitType$outboundSchema,
      z.array(components.BenefitType$outboundSchema),
    ]),
  ).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    typeFilter: "type_filter",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitsListRequest$ {
  /** @deprecated use `BenefitsListRequest$inboundSchema` instead. */
  export const inboundSchema = BenefitsListRequest$inboundSchema;
  /** @deprecated use `BenefitsListRequest$outboundSchema` instead. */
  export const outboundSchema = BenefitsListRequest$outboundSchema;
  /** @deprecated use `BenefitsListRequest$Outbound` instead. */
  export type Outbound = BenefitsListRequest$Outbound;
}

/** @internal */
export const BenefitsListResponse$inboundSchema: z.ZodType<
  BenefitsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceBenefit$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type BenefitsListResponse$Outbound = {
  Result: components.ListResourceBenefit$Outbound;
};

/** @internal */
export const BenefitsListResponse$outboundSchema: z.ZodType<
  BenefitsListResponse$Outbound,
  z.ZodTypeDef,
  BenefitsListResponse
> = z.object({
  result: components.ListResourceBenefit$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitsListResponse$ {
  /** @deprecated use `BenefitsListResponse$inboundSchema` instead. */
  export const inboundSchema = BenefitsListResponse$inboundSchema;
  /** @deprecated use `BenefitsListResponse$outboundSchema` instead. */
  export const outboundSchema = BenefitsListResponse$outboundSchema;
  /** @deprecated use `BenefitsListResponse$Outbound` instead. */
  export type Outbound = BenefitsListResponse$Outbound;
}
