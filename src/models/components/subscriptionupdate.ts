/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SubscriptionCancel,
  SubscriptionCancel$inboundSchema,
  SubscriptionCancel$Outbound,
  SubscriptionCancel$outboundSchema,
} from "./subscriptioncancel.js";
import {
  SubscriptionUpdateProduct,
  SubscriptionUpdateProduct$inboundSchema,
  SubscriptionUpdateProduct$Outbound,
  SubscriptionUpdateProduct$outboundSchema,
} from "./subscriptionupdateproduct.js";

export type SubscriptionUpdate = SubscriptionUpdateProduct | SubscriptionCancel;

/** @internal */
export const SubscriptionUpdate$inboundSchema: z.ZodType<
  SubscriptionUpdate,
  z.ZodTypeDef,
  unknown
> = z.union([
  SubscriptionUpdateProduct$inboundSchema,
  SubscriptionCancel$inboundSchema,
]);

/** @internal */
export type SubscriptionUpdate$Outbound =
  | SubscriptionUpdateProduct$Outbound
  | SubscriptionCancel$Outbound;

/** @internal */
export const SubscriptionUpdate$outboundSchema: z.ZodType<
  SubscriptionUpdate$Outbound,
  z.ZodTypeDef,
  SubscriptionUpdate
> = z.union([
  SubscriptionUpdateProduct$outboundSchema,
  SubscriptionCancel$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionUpdate$ {
  /** @deprecated use `SubscriptionUpdate$inboundSchema` instead. */
  export const inboundSchema = SubscriptionUpdate$inboundSchema;
  /** @deprecated use `SubscriptionUpdate$outboundSchema` instead. */
  export const outboundSchema = SubscriptionUpdate$outboundSchema;
  /** @deprecated use `SubscriptionUpdate$Outbound` instead. */
  export type Outbound = SubscriptionUpdate$Outbound;
}

export function subscriptionUpdateToJSON(
  subscriptionUpdate: SubscriptionUpdate,
): string {
  return JSON.stringify(
    SubscriptionUpdate$outboundSchema.parse(subscriptionUpdate),
  );
}

export function subscriptionUpdateFromJSON(
  jsonString: string,
): SafeParseResult<SubscriptionUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriptionUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriptionUpdate' from JSON`,
  );
}
