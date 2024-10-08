/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type PolarCheckoutLegacySchemasCheckoutCreate = {
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
export const PolarCheckoutLegacySchemasCheckoutCreate$inboundSchema: z.ZodType<
  PolarCheckoutLegacySchemasCheckoutCreate,
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
export type PolarCheckoutLegacySchemasCheckoutCreate$Outbound = {
  product_price_id: string;
  success_url: string;
  customer_email?: string | null | undefined;
  subscription_id?: string | null | undefined;
};

/** @internal */
export const PolarCheckoutLegacySchemasCheckoutCreate$outboundSchema: z.ZodType<
  PolarCheckoutLegacySchemasCheckoutCreate$Outbound,
  z.ZodTypeDef,
  PolarCheckoutLegacySchemasCheckoutCreate
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
export namespace PolarCheckoutLegacySchemasCheckoutCreate$ {
  /** @deprecated use `PolarCheckoutLegacySchemasCheckoutCreate$inboundSchema` instead. */
  export const inboundSchema =
    PolarCheckoutLegacySchemasCheckoutCreate$inboundSchema;
  /** @deprecated use `PolarCheckoutLegacySchemasCheckoutCreate$outboundSchema` instead. */
  export const outboundSchema =
    PolarCheckoutLegacySchemasCheckoutCreate$outboundSchema;
  /** @deprecated use `PolarCheckoutLegacySchemasCheckoutCreate$Outbound` instead. */
  export type Outbound = PolarCheckoutLegacySchemasCheckoutCreate$Outbound;
}
