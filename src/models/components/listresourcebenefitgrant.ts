/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BenefitGrant,
  BenefitGrant$inboundSchema,
  BenefitGrant$Outbound,
  BenefitGrant$outboundSchema,
} from "./benefitgrant.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type ListResourceBenefitGrant = {
  items: Array<BenefitGrant>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceBenefitGrant$inboundSchema: z.ZodType<
  ListResourceBenefitGrant,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(BenefitGrant$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceBenefitGrant$Outbound = {
  items: Array<BenefitGrant$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceBenefitGrant$outboundSchema: z.ZodType<
  ListResourceBenefitGrant$Outbound,
  z.ZodTypeDef,
  ListResourceBenefitGrant
> = z.object({
  items: z.array(BenefitGrant$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceBenefitGrant$ {
  /** @deprecated use `ListResourceBenefitGrant$inboundSchema` instead. */
  export const inboundSchema = ListResourceBenefitGrant$inboundSchema;
  /** @deprecated use `ListResourceBenefitGrant$outboundSchema` instead. */
  export const outboundSchema = ListResourceBenefitGrant$outboundSchema;
  /** @deprecated use `ListResourceBenefitGrant$Outbound` instead. */
  export type Outbound = ListResourceBenefitGrant$Outbound;
}
