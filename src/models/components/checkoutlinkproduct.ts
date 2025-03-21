/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitBase,
  BenefitBase$inboundSchema,
  BenefitBase$Outbound,
  BenefitBase$outboundSchema,
} from "./benefitbase.js";
import {
  LegacyRecurringProductPrice,
  LegacyRecurringProductPrice$inboundSchema,
  LegacyRecurringProductPrice$Outbound,
  LegacyRecurringProductPrice$outboundSchema,
} from "./legacyrecurringproductprice.js";
import {
  ProductMediaFileRead,
  ProductMediaFileRead$inboundSchema,
  ProductMediaFileRead$Outbound,
  ProductMediaFileRead$outboundSchema,
} from "./productmediafileread.js";
import {
  ProductPrice,
  ProductPrice$inboundSchema,
  ProductPrice$Outbound,
  ProductPrice$outboundSchema,
} from "./productprice.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";

export type CheckoutLinkProductPrices =
  | LegacyRecurringProductPrice
  | ProductPrice;

/**
 * Product data for a checkout link.
 */
export type CheckoutLinkProduct = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * The recurring interval of the product. If `None`, the product is a one-time purchase.
   */
  recurringInterval: SubscriptionRecurringInterval | null;
  /**
   * Whether the product is a subscription.
   */
  isRecurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organizationId: string;
  /**
   * List of prices for this product.
   */
  prices: Array<LegacyRecurringProductPrice | ProductPrice>;
  /**
   * List of benefits granted by the product.
   */
  benefits: Array<BenefitBase>;
  /**
   * List of medias associated to the product.
   */
  medias: Array<ProductMediaFileRead>;
};

/** @internal */
export const CheckoutLinkProductPrices$inboundSchema: z.ZodType<
  CheckoutLinkProductPrices,
  z.ZodTypeDef,
  unknown
> = z.union([
  LegacyRecurringProductPrice$inboundSchema,
  ProductPrice$inboundSchema,
]);

/** @internal */
export type CheckoutLinkProductPrices$Outbound =
  | LegacyRecurringProductPrice$Outbound
  | ProductPrice$Outbound;

/** @internal */
export const CheckoutLinkProductPrices$outboundSchema: z.ZodType<
  CheckoutLinkProductPrices$Outbound,
  z.ZodTypeDef,
  CheckoutLinkProductPrices
> = z.union([
  LegacyRecurringProductPrice$outboundSchema,
  ProductPrice$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinkProductPrices$ {
  /** @deprecated use `CheckoutLinkProductPrices$inboundSchema` instead. */
  export const inboundSchema = CheckoutLinkProductPrices$inboundSchema;
  /** @deprecated use `CheckoutLinkProductPrices$outboundSchema` instead. */
  export const outboundSchema = CheckoutLinkProductPrices$outboundSchema;
  /** @deprecated use `CheckoutLinkProductPrices$Outbound` instead. */
  export type Outbound = CheckoutLinkProductPrices$Outbound;
}

export function checkoutLinkProductPricesToJSON(
  checkoutLinkProductPrices: CheckoutLinkProductPrices,
): string {
  return JSON.stringify(
    CheckoutLinkProductPrices$outboundSchema.parse(checkoutLinkProductPrices),
  );
}

export function checkoutLinkProductPricesFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLinkProductPrices, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutLinkProductPrices$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLinkProductPrices' from JSON`,
  );
}

/** @internal */
export const CheckoutLinkProduct$inboundSchema: z.ZodType<
  CheckoutLinkProduct,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  recurring_interval: z.nullable(SubscriptionRecurringInterval$inboundSchema),
  is_recurring: z.boolean(),
  is_archived: z.boolean(),
  organization_id: z.string(),
  prices: z.array(
    z.union([
      LegacyRecurringProductPrice$inboundSchema,
      ProductPrice$inboundSchema,
    ]),
  ),
  benefits: z.array(BenefitBase$inboundSchema),
  medias: z.array(ProductMediaFileRead$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "recurring_interval": "recurringInterval",
    "is_recurring": "isRecurring",
    "is_archived": "isArchived",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CheckoutLinkProduct$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  description: string | null;
  recurring_interval: string | null;
  is_recurring: boolean;
  is_archived: boolean;
  organization_id: string;
  prices: Array<LegacyRecurringProductPrice$Outbound | ProductPrice$Outbound>;
  benefits: Array<BenefitBase$Outbound>;
  medias: Array<ProductMediaFileRead$Outbound>;
};

/** @internal */
export const CheckoutLinkProduct$outboundSchema: z.ZodType<
  CheckoutLinkProduct$Outbound,
  z.ZodTypeDef,
  CheckoutLinkProduct
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  recurringInterval: z.nullable(SubscriptionRecurringInterval$outboundSchema),
  isRecurring: z.boolean(),
  isArchived: z.boolean(),
  organizationId: z.string(),
  prices: z.array(
    z.union([
      LegacyRecurringProductPrice$outboundSchema,
      ProductPrice$outboundSchema,
    ]),
  ),
  benefits: z.array(BenefitBase$outboundSchema),
  medias: z.array(ProductMediaFileRead$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    recurringInterval: "recurring_interval",
    isRecurring: "is_recurring",
    isArchived: "is_archived",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinkProduct$ {
  /** @deprecated use `CheckoutLinkProduct$inboundSchema` instead. */
  export const inboundSchema = CheckoutLinkProduct$inboundSchema;
  /** @deprecated use `CheckoutLinkProduct$outboundSchema` instead. */
  export const outboundSchema = CheckoutLinkProduct$outboundSchema;
  /** @deprecated use `CheckoutLinkProduct$Outbound` instead. */
  export type Outbound = CheckoutLinkProduct$Outbound;
}

export function checkoutLinkProductToJSON(
  checkoutLinkProduct: CheckoutLinkProduct,
): string {
  return JSON.stringify(
    CheckoutLinkProduct$outboundSchema.parse(checkoutLinkProduct),
  );
}

export function checkoutLinkProductFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLinkProduct, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutLinkProduct$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLinkProduct' from JSON`,
  );
}
