/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";

export const ProductPriceRecurringFreeCreateType = {
  Recurring: "recurring",
} as const;
export type ProductPriceRecurringFreeCreateType = ClosedEnum<
  typeof ProductPriceRecurringFreeCreateType
>;

export const ProductPriceRecurringFreeCreateAmountType = {
  Free: "free",
} as const;
export type ProductPriceRecurringFreeCreateAmountType = ClosedEnum<
  typeof ProductPriceRecurringFreeCreateAmountType
>;

/**
 * Schema to create a free recurring product price, i.e. a subscription.
 */
export type ProductPriceRecurringFreeCreate = {
  type?: "recurring" | undefined;
  amountType?: "free" | undefined;
  recurringInterval: SubscriptionRecurringInterval;
};

/** @internal */
export const ProductPriceRecurringFreeCreateType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceRecurringFreeCreateType
> = z.nativeEnum(ProductPriceRecurringFreeCreateType);

/** @internal */
export const ProductPriceRecurringFreeCreateType$outboundSchema:
  z.ZodNativeEnum<typeof ProductPriceRecurringFreeCreateType> =
    ProductPriceRecurringFreeCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringFreeCreateType$ {
  /** @deprecated use `ProductPriceRecurringFreeCreateType$inboundSchema` instead. */
  export const inboundSchema =
    ProductPriceRecurringFreeCreateType$inboundSchema;
  /** @deprecated use `ProductPriceRecurringFreeCreateType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceRecurringFreeCreateType$outboundSchema;
}

/** @internal */
export const ProductPriceRecurringFreeCreateAmountType$inboundSchema:
  z.ZodNativeEnum<typeof ProductPriceRecurringFreeCreateAmountType> = z
    .nativeEnum(ProductPriceRecurringFreeCreateAmountType);

/** @internal */
export const ProductPriceRecurringFreeCreateAmountType$outboundSchema:
  z.ZodNativeEnum<typeof ProductPriceRecurringFreeCreateAmountType> =
    ProductPriceRecurringFreeCreateAmountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringFreeCreateAmountType$ {
  /** @deprecated use `ProductPriceRecurringFreeCreateAmountType$inboundSchema` instead. */
  export const inboundSchema =
    ProductPriceRecurringFreeCreateAmountType$inboundSchema;
  /** @deprecated use `ProductPriceRecurringFreeCreateAmountType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceRecurringFreeCreateAmountType$outboundSchema;
}

/** @internal */
export const ProductPriceRecurringFreeCreate$inboundSchema: z.ZodType<
  ProductPriceRecurringFreeCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("recurring").optional(),
  amount_type: z.literal("free").optional(),
  recurring_interval: SubscriptionRecurringInterval$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "amount_type": "amountType",
    "recurring_interval": "recurringInterval",
  });
});

/** @internal */
export type ProductPriceRecurringFreeCreate$Outbound = {
  type: "recurring";
  amount_type: "free";
  recurring_interval: string;
};

/** @internal */
export const ProductPriceRecurringFreeCreate$outboundSchema: z.ZodType<
  ProductPriceRecurringFreeCreate$Outbound,
  z.ZodTypeDef,
  ProductPriceRecurringFreeCreate
> = z.object({
  type: z.literal("recurring").default("recurring"),
  amountType: z.literal("free").default("free"),
  recurringInterval: SubscriptionRecurringInterval$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    amountType: "amount_type",
    recurringInterval: "recurring_interval",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringFreeCreate$ {
  /** @deprecated use `ProductPriceRecurringFreeCreate$inboundSchema` instead. */
  export const inboundSchema = ProductPriceRecurringFreeCreate$inboundSchema;
  /** @deprecated use `ProductPriceRecurringFreeCreate$outboundSchema` instead. */
  export const outboundSchema = ProductPriceRecurringFreeCreate$outboundSchema;
  /** @deprecated use `ProductPriceRecurringFreeCreate$Outbound` instead. */
  export type Outbound = ProductPriceRecurringFreeCreate$Outbound;
}

export function productPriceRecurringFreeCreateToJSON(
  productPriceRecurringFreeCreate: ProductPriceRecurringFreeCreate,
): string {
  return JSON.stringify(
    ProductPriceRecurringFreeCreate$outboundSchema.parse(
      productPriceRecurringFreeCreate,
    ),
  );
}

export function productPriceRecurringFreeCreateFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceRecurringFreeCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceRecurringFreeCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceRecurringFreeCreate' from JSON`,
  );
}
