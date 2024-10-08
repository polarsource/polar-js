/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BenefitGrantArticlesProperties = {};

/** @internal */
export const BenefitGrantArticlesProperties$inboundSchema: z.ZodType<
  BenefitGrantArticlesProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type BenefitGrantArticlesProperties$Outbound = {};

/** @internal */
export const BenefitGrantArticlesProperties$outboundSchema: z.ZodType<
  BenefitGrantArticlesProperties$Outbound,
  z.ZodTypeDef,
  BenefitGrantArticlesProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantArticlesProperties$ {
  /** @deprecated use `BenefitGrantArticlesProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitGrantArticlesProperties$inboundSchema;
  /** @deprecated use `BenefitGrantArticlesProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitGrantArticlesProperties$outboundSchema;
  /** @deprecated use `BenefitGrantArticlesProperties$Outbound` instead. */
  export type Outbound = BenefitGrantArticlesProperties$Outbound;
}
