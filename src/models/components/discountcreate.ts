/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DiscountFixedOnceForeverDurationCreate,
  DiscountFixedOnceForeverDurationCreate$inboundSchema,
  DiscountFixedOnceForeverDurationCreate$Outbound,
  DiscountFixedOnceForeverDurationCreate$outboundSchema,
} from "./discountfixedonceforeverdurationcreate.js";
import {
  DiscountFixedRepeatDurationCreate,
  DiscountFixedRepeatDurationCreate$inboundSchema,
  DiscountFixedRepeatDurationCreate$Outbound,
  DiscountFixedRepeatDurationCreate$outboundSchema,
} from "./discountfixedrepeatdurationcreate.js";
import {
  DiscountPercentageOnceForeverDurationCreate,
  DiscountPercentageOnceForeverDurationCreate$inboundSchema,
  DiscountPercentageOnceForeverDurationCreate$Outbound,
  DiscountPercentageOnceForeverDurationCreate$outboundSchema,
} from "./discountpercentageonceforeverdurationcreate.js";
import {
  DiscountPercentageRepeatDurationCreate,
  DiscountPercentageRepeatDurationCreate$inboundSchema,
  DiscountPercentageRepeatDurationCreate$Outbound,
  DiscountPercentageRepeatDurationCreate$outboundSchema,
} from "./discountpercentagerepeatdurationcreate.js";

export type DiscountCreate =
  | DiscountPercentageOnceForeverDurationCreate
  | DiscountFixedOnceForeverDurationCreate
  | DiscountPercentageRepeatDurationCreate
  | DiscountFixedRepeatDurationCreate;

/** @internal */
export const DiscountCreate$inboundSchema: z.ZodType<
  DiscountCreate,
  z.ZodTypeDef,
  unknown
> = z.union([
  DiscountPercentageOnceForeverDurationCreate$inboundSchema,
  DiscountFixedOnceForeverDurationCreate$inboundSchema,
  DiscountPercentageRepeatDurationCreate$inboundSchema,
  DiscountFixedRepeatDurationCreate$inboundSchema,
]);

/** @internal */
export type DiscountCreate$Outbound =
  | DiscountPercentageOnceForeverDurationCreate$Outbound
  | DiscountFixedOnceForeverDurationCreate$Outbound
  | DiscountPercentageRepeatDurationCreate$Outbound
  | DiscountFixedRepeatDurationCreate$Outbound;

/** @internal */
export const DiscountCreate$outboundSchema: z.ZodType<
  DiscountCreate$Outbound,
  z.ZodTypeDef,
  DiscountCreate
> = z.union([
  DiscountPercentageOnceForeverDurationCreate$outboundSchema,
  DiscountFixedOnceForeverDurationCreate$outboundSchema,
  DiscountPercentageRepeatDurationCreate$outboundSchema,
  DiscountFixedRepeatDurationCreate$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountCreate$ {
  /** @deprecated use `DiscountCreate$inboundSchema` instead. */
  export const inboundSchema = DiscountCreate$inboundSchema;
  /** @deprecated use `DiscountCreate$outboundSchema` instead. */
  export const outboundSchema = DiscountCreate$outboundSchema;
  /** @deprecated use `DiscountCreate$Outbound` instead. */
  export type Outbound = DiscountCreate$Outbound;
}

export function discountCreateToJSON(discountCreate: DiscountCreate): string {
  return JSON.stringify(DiscountCreate$outboundSchema.parse(discountCreate));
}

export function discountCreateFromJSON(
  jsonString: string,
): SafeParseResult<DiscountCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountCreate' from JSON`,
  );
}