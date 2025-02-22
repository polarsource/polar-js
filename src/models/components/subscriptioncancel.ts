/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomerCancellationReason,
  CustomerCancellationReason$inboundSchema,
  CustomerCancellationReason$outboundSchema,
} from "./customercancellationreason.js";

export type SubscriptionCancel = {
  /**
   * Cancel an active subscription once the current period ends.
   *
   * @remarks
   *
   * Or uncancel a subscription currently set to be revoked at period end.
   */
  cancelAtPeriodEnd?: boolean | null | undefined;
  /**
   * Cancel and revoke an active subscription immediately
   */
  revoke?: true | null | undefined;
  /**
   * Customer reason for cancellation.
   *
   * @remarks
   *
   * Helpful to monitor reasons behind churn for future improvements.
   *
   * Only set this in case your own service is requesting the reason from the
   * customer. Or you know based on direct conversations, i.e support, with
   * the customer.
   *
   * * `too_expensive`: Too expensive for the customer.
   * * `missing_features`: Customer is missing certain features.
   * * `switched_service`: Customer switched to another service.
   * * `unused`: Customer is not using it enough.
   * * `customer_service`: Customer is not satisfied with the customer service.
   * * `low_quality`: Customer is unhappy with the quality.
   * * `too_complex`: Customer considers the service too complicated.
   * * `other`: Other reason(s).
   */
  customerCancellationReason?: CustomerCancellationReason | null | undefined;
  /**
   * Customer feedback and why they decided to cancel.
   *
   * @remarks
   *
   * **IMPORTANT:**
   * Do not use this to store internal notes! It's intended to be input
   * from the customer and is therefore also available in their Polar
   * purchases library.
   *
   * Only set this in case your own service is requesting the reason from the
   * customer. Or you copy a message directly from a customer
   * conversation, i.e support.
   */
  customerCancellationComment?: string | null | undefined;
};

/** @internal */
export const SubscriptionCancel$inboundSchema: z.ZodType<
  SubscriptionCancel,
  z.ZodTypeDef,
  unknown
> = z.object({
  cancel_at_period_end: z.nullable(z.boolean()).optional(),
  revoke: z.nullable(z.literal(true)).optional(),
  customer_cancellation_reason: z.nullable(
    CustomerCancellationReason$inboundSchema,
  ).optional(),
  customer_cancellation_comment: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "cancel_at_period_end": "cancelAtPeriodEnd",
    "customer_cancellation_reason": "customerCancellationReason",
    "customer_cancellation_comment": "customerCancellationComment",
  });
});

/** @internal */
export type SubscriptionCancel$Outbound = {
  cancel_at_period_end?: boolean | null | undefined;
  revoke: true | null;
  customer_cancellation_reason?: string | null | undefined;
  customer_cancellation_comment?: string | null | undefined;
};

/** @internal */
export const SubscriptionCancel$outboundSchema: z.ZodType<
  SubscriptionCancel$Outbound,
  z.ZodTypeDef,
  SubscriptionCancel
> = z.object({
  cancelAtPeriodEnd: z.nullable(z.boolean()).optional(),
  revoke: z.nullable(z.literal(true).default(true as const)),
  customerCancellationReason: z.nullable(
    CustomerCancellationReason$outboundSchema,
  ).optional(),
  customerCancellationComment: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    cancelAtPeriodEnd: "cancel_at_period_end",
    customerCancellationReason: "customer_cancellation_reason",
    customerCancellationComment: "customer_cancellation_comment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionCancel$ {
  /** @deprecated use `SubscriptionCancel$inboundSchema` instead. */
  export const inboundSchema = SubscriptionCancel$inboundSchema;
  /** @deprecated use `SubscriptionCancel$outboundSchema` instead. */
  export const outboundSchema = SubscriptionCancel$outboundSchema;
  /** @deprecated use `SubscriptionCancel$Outbound` instead. */
  export type Outbound = SubscriptionCancel$Outbound;
}

export function subscriptionCancelToJSON(
  subscriptionCancel: SubscriptionCancel,
): string {
  return JSON.stringify(
    SubscriptionCancel$outboundSchema.parse(subscriptionCancel),
  );
}

export function subscriptionCancelFromJSON(
  jsonString: string,
): SafeParseResult<SubscriptionCancel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriptionCancel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriptionCancel' from JSON`,
  );
}
