/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ProductPrice,
  ProductPrice$inboundSchema,
  ProductPrice$Outbound,
  ProductPrice$outboundSchema,
} from "./productprice.js";

/**
 * Checkout link data.
 */
export type CheckoutLink = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  metadata: { [k: string]: string };
  paymentProcessor?: "stripe" | undefined;
  /**
   * Client secret used to access the checkout link.
   */
  clientSecret: string;
  /**
   * URL where the customer will be redirected after a successful payment.
   */
  successUrl: string | null;
  /**
   * ID of the product price to checkout.
   */
  productPriceId: string;
  productPrice: ProductPrice;
  url: string;
};

/** @internal */
export const CheckoutLink$inboundSchema: z.ZodType<
  CheckoutLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  metadata: z.record(z.string()),
  payment_processor: z.literal("stripe").optional(),
  client_secret: z.string(),
  success_url: z.nullable(z.string()),
  product_price_id: z.string(),
  product_price: ProductPrice$inboundSchema,
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "payment_processor": "paymentProcessor",
    "client_secret": "clientSecret",
    "success_url": "successUrl",
    "product_price_id": "productPriceId",
    "product_price": "productPrice",
  });
});

/** @internal */
export type CheckoutLink$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  metadata: { [k: string]: string };
  payment_processor: "stripe";
  client_secret: string;
  success_url: string | null;
  product_price_id: string;
  product_price: ProductPrice$Outbound;
  url: string;
};

/** @internal */
export const CheckoutLink$outboundSchema: z.ZodType<
  CheckoutLink$Outbound,
  z.ZodTypeDef,
  CheckoutLink
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  metadata: z.record(z.string()),
  paymentProcessor: z.literal("stripe").default("stripe"),
  clientSecret: z.string(),
  successUrl: z.nullable(z.string()),
  productPriceId: z.string(),
  productPrice: ProductPrice$outboundSchema,
  url: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    paymentProcessor: "payment_processor",
    clientSecret: "client_secret",
    successUrl: "success_url",
    productPriceId: "product_price_id",
    productPrice: "product_price",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLink$ {
  /** @deprecated use `CheckoutLink$inboundSchema` instead. */
  export const inboundSchema = CheckoutLink$inboundSchema;
  /** @deprecated use `CheckoutLink$outboundSchema` instead. */
  export const outboundSchema = CheckoutLink$outboundSchema;
  /** @deprecated use `CheckoutLink$Outbound` instead. */
  export type Outbound = CheckoutLink$Outbound;
}
