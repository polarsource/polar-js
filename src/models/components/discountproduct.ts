/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A product that a discount can be applied to.
 */
export type DiscountProduct = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * Whether the product is a subscription tier.
   */
  isRecurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organizationId: string;
};

/** @internal */
export const DiscountProduct$inboundSchema: z.ZodType<
  DiscountProduct,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  is_recurring: z.boolean(),
  is_archived: z.boolean(),
  organization_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "is_recurring": "isRecurring",
    "is_archived": "isArchived",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type DiscountProduct$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  description: string | null;
  is_recurring: boolean;
  is_archived: boolean;
  organization_id: string;
};

/** @internal */
export const DiscountProduct$outboundSchema: z.ZodType<
  DiscountProduct$Outbound,
  z.ZodTypeDef,
  DiscountProduct
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  isRecurring: z.boolean(),
  isArchived: z.boolean(),
  organizationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    isRecurring: "is_recurring",
    isArchived: "is_archived",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountProduct$ {
  /** @deprecated use `DiscountProduct$inboundSchema` instead. */
  export const inboundSchema = DiscountProduct$inboundSchema;
  /** @deprecated use `DiscountProduct$outboundSchema` instead. */
  export const outboundSchema = DiscountProduct$outboundSchema;
  /** @deprecated use `DiscountProduct$Outbound` instead. */
  export type Outbound = DiscountProduct$Outbound;
}

export function discountProductToJSON(
  discountProduct: DiscountProduct,
): string {
  return JSON.stringify(DiscountProduct$outboundSchema.parse(discountProduct));
}

export function discountProductFromJSON(
  jsonString: string,
): SafeParseResult<DiscountProduct, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountProduct$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountProduct' from JSON`,
  );
}