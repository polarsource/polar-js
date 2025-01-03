/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Schema to create a one-time product price.
 */
export type ProductPriceOneTimeFixedCreate = {
  type?: "one_time" | undefined;
  amountType?: "fixed" | undefined;
  /**
   * The price in cents.
   */
  priceAmount: number;
  /**
   * The currency. Currently, only `usd` is supported.
   */
  priceCurrency?: string | undefined;
};

/** @internal */
export const ProductPriceOneTimeFixedCreate$inboundSchema: z.ZodType<
  ProductPriceOneTimeFixedCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("one_time").optional(),
  amount_type: z.literal("fixed").optional(),
  price_amount: z.number().int(),
  price_currency: z.string().default("usd"),
}).transform((v) => {
  return remap$(v, {
    "amount_type": "amountType",
    "price_amount": "priceAmount",
    "price_currency": "priceCurrency",
  });
});

/** @internal */
export type ProductPriceOneTimeFixedCreate$Outbound = {
  type: "one_time";
  amount_type: "fixed";
  price_amount: number;
  price_currency: string;
};

/** @internal */
export const ProductPriceOneTimeFixedCreate$outboundSchema: z.ZodType<
  ProductPriceOneTimeFixedCreate$Outbound,
  z.ZodTypeDef,
  ProductPriceOneTimeFixedCreate
> = z.object({
  type: z.literal("one_time").default("one_time" as const),
  amountType: z.literal("fixed").default("fixed" as const),
  priceAmount: z.number().int(),
  priceCurrency: z.string().default("usd"),
}).transform((v) => {
  return remap$(v, {
    amountType: "amount_type",
    priceAmount: "price_amount",
    priceCurrency: "price_currency",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFixedCreate$ {
  /** @deprecated use `ProductPriceOneTimeFixedCreate$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeFixedCreate$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFixedCreate$outboundSchema` instead. */
  export const outboundSchema = ProductPriceOneTimeFixedCreate$outboundSchema;
  /** @deprecated use `ProductPriceOneTimeFixedCreate$Outbound` instead. */
  export type Outbound = ProductPriceOneTimeFixedCreate$Outbound;
}

export function productPriceOneTimeFixedCreateToJSON(
  productPriceOneTimeFixedCreate: ProductPriceOneTimeFixedCreate,
): string {
  return JSON.stringify(
    ProductPriceOneTimeFixedCreate$outboundSchema.parse(
      productPriceOneTimeFixedCreate,
    ),
  );
}

export function productPriceOneTimeFixedCreateFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceOneTimeFixedCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceOneTimeFixedCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceOneTimeFixedCreate' from JSON`,
  );
}
