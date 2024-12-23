/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutLegacyCreate = {
  /**
   * ID of the product price to subscribe to.
   */
  productPriceId: string;
  /**
   * URL where the customer will be redirected after a successful subscription. You can add the `session_id={CHECKOUT_SESSION_ID}` query parameter to retrieve the checkout session id.
   */
  successUrl: string;
  /**
   * If you already know the email of your customer, you can set it. It'll be pre-filled on the checkout page.
   */
  customerEmail?: string | null | undefined;
  /**
   * ID of the subscription to update. If not provided, a new subscription will be created.
   */
  subscriptionId?: string | null | undefined;
};

/** @internal */
export const CheckoutLegacyCreate$inboundSchema: z.ZodType<
  CheckoutLegacyCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_price_id: z.string(),
  success_url: z.string(),
  customer_email: z.nullable(z.string()).optional(),
  subscription_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "product_price_id": "productPriceId",
    "success_url": "successUrl",
    "customer_email": "customerEmail",
    "subscription_id": "subscriptionId",
  });
});

/** @internal */
export type CheckoutLegacyCreate$Outbound = {
  product_price_id: string;
  success_url: string;
  customer_email?: string | null | undefined;
  subscription_id?: string | null | undefined;
};

/** @internal */
export const CheckoutLegacyCreate$outboundSchema: z.ZodType<
  CheckoutLegacyCreate$Outbound,
  z.ZodTypeDef,
  CheckoutLegacyCreate
> = z.object({
  productPriceId: z.string(),
  successUrl: z.string(),
  customerEmail: z.nullable(z.string()).optional(),
  subscriptionId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    productPriceId: "product_price_id",
    successUrl: "success_url",
    customerEmail: "customer_email",
    subscriptionId: "subscription_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLegacyCreate$ {
  /** @deprecated use `CheckoutLegacyCreate$inboundSchema` instead. */
  export const inboundSchema = CheckoutLegacyCreate$inboundSchema;
  /** @deprecated use `CheckoutLegacyCreate$outboundSchema` instead. */
  export const outboundSchema = CheckoutLegacyCreate$outboundSchema;
  /** @deprecated use `CheckoutLegacyCreate$Outbound` instead. */
  export type Outbound = CheckoutLegacyCreate$Outbound;
}

export function checkoutLegacyCreateToJSON(
  checkoutLegacyCreate: CheckoutLegacyCreate,
): string {
  return JSON.stringify(
    CheckoutLegacyCreate$outboundSchema.parse(checkoutLegacyCreate),
  );
}

export function checkoutLegacyCreateFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLegacyCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutLegacyCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLegacyCreate' from JSON`,
  );
}
