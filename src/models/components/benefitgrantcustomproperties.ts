/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BenefitGrantCustomProperties = {};

/** @internal */
export const BenefitGrantCustomProperties$inboundSchema: z.ZodType<
  BenefitGrantCustomProperties,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type BenefitGrantCustomProperties$Outbound = {};

/** @internal */
export const BenefitGrantCustomProperties$outboundSchema: z.ZodType<
  BenefitGrantCustomProperties$Outbound,
  z.ZodTypeDef,
  BenefitGrantCustomProperties
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantCustomProperties$ {
  /** @deprecated use `BenefitGrantCustomProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitGrantCustomProperties$inboundSchema;
  /** @deprecated use `BenefitGrantCustomProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitGrantCustomProperties$outboundSchema;
  /** @deprecated use `BenefitGrantCustomProperties$Outbound` instead. */
  export type Outbound = BenefitGrantCustomProperties$Outbound;
}
