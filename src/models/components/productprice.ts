/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ProductPriceCustom,
  ProductPriceCustom$inboundSchema,
  ProductPriceCustom$Outbound,
  ProductPriceCustom$outboundSchema,
} from "./productpricecustom.js";
import {
  ProductPriceFixed,
  ProductPriceFixed$inboundSchema,
  ProductPriceFixed$Outbound,
  ProductPriceFixed$outboundSchema,
} from "./productpricefixed.js";
import {
  ProductPriceFree,
  ProductPriceFree$inboundSchema,
  ProductPriceFree$Outbound,
  ProductPriceFree$outboundSchema,
} from "./productpricefree.js";
import {
  ProductPriceMeteredUnit,
  ProductPriceMeteredUnit$inboundSchema,
  ProductPriceMeteredUnit$Outbound,
  ProductPriceMeteredUnit$outboundSchema,
} from "./productpricemeteredunit.js";

export type ProductPrice =
  | (ProductPriceFree & { amountType: "free" })
  | (ProductPriceFixed & { amountType: "fixed" })
  | (ProductPriceCustom & { amountType: "custom" })
  | (ProductPriceMeteredUnit & { amountType: "metered_unit" });

/** @internal */
export const ProductPrice$inboundSchema: z.ZodType<
  ProductPrice,
  z.ZodTypeDef,
  unknown
> = z.union([
  ProductPriceFree$inboundSchema.and(
    z.object({ amount_type: z.literal("free") }).transform((v) => ({
      amountType: v.amount_type,
    })),
  ),
  ProductPriceFixed$inboundSchema.and(
    z.object({ amount_type: z.literal("fixed") }).transform((v) => ({
      amountType: v.amount_type,
    })),
  ),
  ProductPriceCustom$inboundSchema.and(
    z.object({ amount_type: z.literal("custom") }).transform((v) => ({
      amountType: v.amount_type,
    })),
  ),
  ProductPriceMeteredUnit$inboundSchema.and(
    z.object({ amount_type: z.literal("metered_unit") }).transform((v) => ({
      amountType: v.amount_type,
    })),
  ),
]);

/** @internal */
export type ProductPrice$Outbound =
  | (ProductPriceFree$Outbound & { amount_type: "free" })
  | (ProductPriceFixed$Outbound & { amount_type: "fixed" })
  | (ProductPriceCustom$Outbound & { amount_type: "custom" })
  | (ProductPriceMeteredUnit$Outbound & { amount_type: "metered_unit" });

/** @internal */
export const ProductPrice$outboundSchema: z.ZodType<
  ProductPrice$Outbound,
  z.ZodTypeDef,
  ProductPrice
> = z.union([
  ProductPriceFree$outboundSchema.and(
    z.object({ amountType: z.literal("free") }).transform((v) => ({
      amount_type: v.amountType,
    })),
  ),
  ProductPriceFixed$outboundSchema.and(
    z.object({ amountType: z.literal("fixed") }).transform((v) => ({
      amount_type: v.amountType,
    })),
  ),
  ProductPriceCustom$outboundSchema.and(
    z.object({ amountType: z.literal("custom") }).transform((v) => ({
      amount_type: v.amountType,
    })),
  ),
  ProductPriceMeteredUnit$outboundSchema.and(
    z.object({ amountType: z.literal("metered_unit") }).transform((v) => ({
      amount_type: v.amountType,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPrice$ {
  /** @deprecated use `ProductPrice$inboundSchema` instead. */
  export const inboundSchema = ProductPrice$inboundSchema;
  /** @deprecated use `ProductPrice$outboundSchema` instead. */
  export const outboundSchema = ProductPrice$outboundSchema;
  /** @deprecated use `ProductPrice$Outbound` instead. */
  export type Outbound = ProductPrice$Outbound;
}

export function productPriceToJSON(productPrice: ProductPrice): string {
  return JSON.stringify(ProductPrice$outboundSchema.parse(productPrice));
}

export function productPriceFromJSON(
  jsonString: string,
): SafeParseResult<ProductPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPrice' from JSON`,
  );
}
