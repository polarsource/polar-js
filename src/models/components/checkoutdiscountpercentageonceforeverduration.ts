/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DiscountDuration,
  DiscountDuration$inboundSchema,
  DiscountDuration$outboundSchema,
} from "./discountduration.js";
import {
  DiscountType,
  DiscountType$inboundSchema,
  DiscountType$outboundSchema,
} from "./discounttype.js";

/**
 * Schema for a percentage discount that is applied once or forever.
 */
export type CheckoutDiscountPercentageOnceForeverDuration = {
  duration: DiscountDuration;
  type: DiscountType;
  basisPoints: number;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  code: string | null;
};

/** @internal */
export const CheckoutDiscountPercentageOnceForeverDuration$inboundSchema:
  z.ZodType<
    CheckoutDiscountPercentageOnceForeverDuration,
    z.ZodTypeDef,
    unknown
  > = z.object({
    duration: DiscountDuration$inboundSchema,
    type: DiscountType$inboundSchema,
    basis_points: z.number().int(),
    id: z.string(),
    name: z.string(),
    code: z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      "basis_points": "basisPoints",
    });
  });

/** @internal */
export type CheckoutDiscountPercentageOnceForeverDuration$Outbound = {
  duration: string;
  type: string;
  basis_points: number;
  id: string;
  name: string;
  code: string | null;
};

/** @internal */
export const CheckoutDiscountPercentageOnceForeverDuration$outboundSchema:
  z.ZodType<
    CheckoutDiscountPercentageOnceForeverDuration$Outbound,
    z.ZodTypeDef,
    CheckoutDiscountPercentageOnceForeverDuration
  > = z.object({
    duration: DiscountDuration$outboundSchema,
    type: DiscountType$outboundSchema,
    basisPoints: z.number().int(),
    id: z.string(),
    name: z.string(),
    code: z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      basisPoints: "basis_points",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutDiscountPercentageOnceForeverDuration$ {
  /** @deprecated use `CheckoutDiscountPercentageOnceForeverDuration$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutDiscountPercentageOnceForeverDuration$inboundSchema;
  /** @deprecated use `CheckoutDiscountPercentageOnceForeverDuration$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutDiscountPercentageOnceForeverDuration$outboundSchema;
  /** @deprecated use `CheckoutDiscountPercentageOnceForeverDuration$Outbound` instead. */
  export type Outbound = CheckoutDiscountPercentageOnceForeverDuration$Outbound;
}

export function checkoutDiscountPercentageOnceForeverDurationToJSON(
  checkoutDiscountPercentageOnceForeverDuration:
    CheckoutDiscountPercentageOnceForeverDuration,
): string {
  return JSON.stringify(
    CheckoutDiscountPercentageOnceForeverDuration$outboundSchema.parse(
      checkoutDiscountPercentageOnceForeverDuration,
    ),
  );
}

export function checkoutDiscountPercentageOnceForeverDurationFromJSON(
  jsonString: string,
): SafeParseResult<
  CheckoutDiscountPercentageOnceForeverDuration,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutDiscountPercentageOnceForeverDuration$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CheckoutDiscountPercentageOnceForeverDuration' from JSON`,
  );
}