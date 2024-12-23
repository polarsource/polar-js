/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DiscountFixedOnceForeverDurationBase,
  DiscountFixedOnceForeverDurationBase$inboundSchema,
  DiscountFixedOnceForeverDurationBase$Outbound,
  DiscountFixedOnceForeverDurationBase$outboundSchema,
} from "./discountfixedonceforeverdurationbase.js";
import {
  DiscountFixedRepeatDurationBase,
  DiscountFixedRepeatDurationBase$inboundSchema,
  DiscountFixedRepeatDurationBase$Outbound,
  DiscountFixedRepeatDurationBase$outboundSchema,
} from "./discountfixedrepeatdurationbase.js";
import {
  DiscountPercentageOnceForeverDurationBase,
  DiscountPercentageOnceForeverDurationBase$inboundSchema,
  DiscountPercentageOnceForeverDurationBase$Outbound,
  DiscountPercentageOnceForeverDurationBase$outboundSchema,
} from "./discountpercentageonceforeverdurationbase.js";
import {
  DiscountPercentageRepeatDurationBase,
  DiscountPercentageRepeatDurationBase$inboundSchema,
  DiscountPercentageRepeatDurationBase$Outbound,
  DiscountPercentageRepeatDurationBase$outboundSchema,
} from "./discountpercentagerepeatdurationbase.js";
import {
  Product,
  Product$inboundSchema,
  Product$Outbound,
  Product$outboundSchema,
} from "./product.js";
import {
  ProductPriceRecurring,
  ProductPriceRecurring$inboundSchema,
  ProductPriceRecurring$Outbound,
  ProductPriceRecurring$outboundSchema,
} from "./productpricerecurring.js";
import {
  SubscriptionCustomer,
  SubscriptionCustomer$inboundSchema,
  SubscriptionCustomer$Outbound,
  SubscriptionCustomer$outboundSchema,
} from "./subscriptioncustomer.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";
import {
  SubscriptionStatus,
  SubscriptionStatus$inboundSchema,
  SubscriptionStatus$outboundSchema,
} from "./subscriptionstatus.js";
import {
  SubscriptionUser,
  SubscriptionUser$inboundSchema,
  SubscriptionUser$Outbound,
  SubscriptionUser$outboundSchema,
} from "./subscriptionuser.js";

export type Metadata = string | number | boolean;

/**
 * Key-value object storing custom field values.
 */
export type SubscriptionCustomFieldData = {};

export type SubscriptionDiscount =
  | DiscountPercentageOnceForeverDurationBase
  | DiscountFixedOnceForeverDurationBase
  | DiscountPercentageRepeatDurationBase
  | DiscountFixedRepeatDurationBase;

export type Subscription = {
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
  amount: number | null;
  currency: string | null;
  recurringInterval: SubscriptionRecurringInterval;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  startedAt: Date | null;
  endedAt: Date | null;
  customerId: string;
  productId: string;
  priceId: string;
  discountId: string | null;
  checkoutId: string | null;
  metadata: { [k: string]: string | number | boolean };
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?: SubscriptionCustomFieldData | undefined;
  customer: SubscriptionCustomer;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  userId: string;
  user: SubscriptionUser;
  /**
   * A product.
   */
  product: Product;
  price: ProductPriceRecurring;
  discount:
    | DiscountPercentageOnceForeverDurationBase
    | DiscountFixedOnceForeverDurationBase
    | DiscountPercentageRepeatDurationBase
    | DiscountFixedRepeatDurationBase
    | null;
};

/** @internal */
export const Metadata$inboundSchema: z.ZodType<
  Metadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type Metadata$Outbound = string | number | boolean;

/** @internal */
export const Metadata$outboundSchema: z.ZodType<
  Metadata$Outbound,
  z.ZodTypeDef,
  Metadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Metadata$ {
  /** @deprecated use `Metadata$inboundSchema` instead. */
  export const inboundSchema = Metadata$inboundSchema;
  /** @deprecated use `Metadata$outboundSchema` instead. */
  export const outboundSchema = Metadata$outboundSchema;
  /** @deprecated use `Metadata$Outbound` instead. */
  export type Outbound = Metadata$Outbound;
}

export function metadataToJSON(metadata: Metadata): string {
  return JSON.stringify(Metadata$outboundSchema.parse(metadata));
}

export function metadataFromJSON(
  jsonString: string,
): SafeParseResult<Metadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Metadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Metadata' from JSON`,
  );
}

/** @internal */
export const SubscriptionCustomFieldData$inboundSchema: z.ZodType<
  SubscriptionCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type SubscriptionCustomFieldData$Outbound = {};

/** @internal */
export const SubscriptionCustomFieldData$outboundSchema: z.ZodType<
  SubscriptionCustomFieldData$Outbound,
  z.ZodTypeDef,
  SubscriptionCustomFieldData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionCustomFieldData$ {
  /** @deprecated use `SubscriptionCustomFieldData$inboundSchema` instead. */
  export const inboundSchema = SubscriptionCustomFieldData$inboundSchema;
  /** @deprecated use `SubscriptionCustomFieldData$outboundSchema` instead. */
  export const outboundSchema = SubscriptionCustomFieldData$outboundSchema;
  /** @deprecated use `SubscriptionCustomFieldData$Outbound` instead. */
  export type Outbound = SubscriptionCustomFieldData$Outbound;
}

export function subscriptionCustomFieldDataToJSON(
  subscriptionCustomFieldData: SubscriptionCustomFieldData,
): string {
  return JSON.stringify(
    SubscriptionCustomFieldData$outboundSchema.parse(
      subscriptionCustomFieldData,
    ),
  );
}

export function subscriptionCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<SubscriptionCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriptionCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriptionCustomFieldData' from JSON`,
  );
}

/** @internal */
export const SubscriptionDiscount$inboundSchema: z.ZodType<
  SubscriptionDiscount,
  z.ZodTypeDef,
  unknown
> = z.union([
  DiscountPercentageOnceForeverDurationBase$inboundSchema,
  DiscountFixedOnceForeverDurationBase$inboundSchema,
  DiscountPercentageRepeatDurationBase$inboundSchema,
  DiscountFixedRepeatDurationBase$inboundSchema,
]);

/** @internal */
export type SubscriptionDiscount$Outbound =
  | DiscountPercentageOnceForeverDurationBase$Outbound
  | DiscountFixedOnceForeverDurationBase$Outbound
  | DiscountPercentageRepeatDurationBase$Outbound
  | DiscountFixedRepeatDurationBase$Outbound;

/** @internal */
export const SubscriptionDiscount$outboundSchema: z.ZodType<
  SubscriptionDiscount$Outbound,
  z.ZodTypeDef,
  SubscriptionDiscount
> = z.union([
  DiscountPercentageOnceForeverDurationBase$outboundSchema,
  DiscountFixedOnceForeverDurationBase$outboundSchema,
  DiscountPercentageRepeatDurationBase$outboundSchema,
  DiscountFixedRepeatDurationBase$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionDiscount$ {
  /** @deprecated use `SubscriptionDiscount$inboundSchema` instead. */
  export const inboundSchema = SubscriptionDiscount$inboundSchema;
  /** @deprecated use `SubscriptionDiscount$outboundSchema` instead. */
  export const outboundSchema = SubscriptionDiscount$outboundSchema;
  /** @deprecated use `SubscriptionDiscount$Outbound` instead. */
  export type Outbound = SubscriptionDiscount$Outbound;
}

export function subscriptionDiscountToJSON(
  subscriptionDiscount: SubscriptionDiscount,
): string {
  return JSON.stringify(
    SubscriptionDiscount$outboundSchema.parse(subscriptionDiscount),
  );
}

export function subscriptionDiscountFromJSON(
  jsonString: string,
): SafeParseResult<SubscriptionDiscount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriptionDiscount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriptionDiscount' from JSON`,
  );
}

/** @internal */
export const Subscription$inboundSchema: z.ZodType<
  Subscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount: z.nullable(z.number().int()),
  currency: z.nullable(z.string()),
  recurring_interval: SubscriptionRecurringInterval$inboundSchema,
  status: SubscriptionStatus$inboundSchema,
  current_period_start: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  current_period_end: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  cancel_at_period_end: z.boolean(),
  started_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  ended_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  customer_id: z.string(),
  product_id: z.string(),
  price_id: z.string(),
  discount_id: z.nullable(z.string()),
  checkout_id: z.nullable(z.string()),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  custom_field_data: z.lazy(() => SubscriptionCustomFieldData$inboundSchema)
    .optional(),
  customer: SubscriptionCustomer$inboundSchema,
  user_id: z.string(),
  user: SubscriptionUser$inboundSchema,
  product: Product$inboundSchema,
  price: ProductPriceRecurring$inboundSchema,
  discount: z.nullable(
    z.union([
      DiscountPercentageOnceForeverDurationBase$inboundSchema,
      DiscountFixedOnceForeverDurationBase$inboundSchema,
      DiscountPercentageRepeatDurationBase$inboundSchema,
      DiscountFixedRepeatDurationBase$inboundSchema,
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "recurring_interval": "recurringInterval",
    "current_period_start": "currentPeriodStart",
    "current_period_end": "currentPeriodEnd",
    "cancel_at_period_end": "cancelAtPeriodEnd",
    "started_at": "startedAt",
    "ended_at": "endedAt",
    "customer_id": "customerId",
    "product_id": "productId",
    "price_id": "priceId",
    "discount_id": "discountId",
    "checkout_id": "checkoutId",
    "custom_field_data": "customFieldData",
    "user_id": "userId",
  });
});

/** @internal */
export type Subscription$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount: number | null;
  currency: string | null;
  recurring_interval: string;
  status: string;
  current_period_start: string;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  started_at: string | null;
  ended_at: string | null;
  customer_id: string;
  product_id: string;
  price_id: string;
  discount_id: string | null;
  checkout_id: string | null;
  metadata: { [k: string]: string | number | boolean };
  custom_field_data?: SubscriptionCustomFieldData$Outbound | undefined;
  customer: SubscriptionCustomer$Outbound;
  user_id: string;
  user: SubscriptionUser$Outbound;
  product: Product$Outbound;
  price: ProductPriceRecurring$Outbound;
  discount:
    | DiscountPercentageOnceForeverDurationBase$Outbound
    | DiscountFixedOnceForeverDurationBase$Outbound
    | DiscountPercentageRepeatDurationBase$Outbound
    | DiscountFixedRepeatDurationBase$Outbound
    | null;
};

/** @internal */
export const Subscription$outboundSchema: z.ZodType<
  Subscription$Outbound,
  z.ZodTypeDef,
  Subscription
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amount: z.nullable(z.number().int()),
  currency: z.nullable(z.string()),
  recurringInterval: SubscriptionRecurringInterval$outboundSchema,
  status: SubscriptionStatus$outboundSchema,
  currentPeriodStart: z.date().transform(v => v.toISOString()),
  currentPeriodEnd: z.nullable(z.date().transform(v => v.toISOString())),
  cancelAtPeriodEnd: z.boolean(),
  startedAt: z.nullable(z.date().transform(v => v.toISOString())),
  endedAt: z.nullable(z.date().transform(v => v.toISOString())),
  customerId: z.string(),
  productId: z.string(),
  priceId: z.string(),
  discountId: z.nullable(z.string()),
  checkoutId: z.nullable(z.string()),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  customFieldData: z.lazy(() => SubscriptionCustomFieldData$outboundSchema)
    .optional(),
  customer: SubscriptionCustomer$outboundSchema,
  userId: z.string(),
  user: SubscriptionUser$outboundSchema,
  product: Product$outboundSchema,
  price: ProductPriceRecurring$outboundSchema,
  discount: z.nullable(
    z.union([
      DiscountPercentageOnceForeverDurationBase$outboundSchema,
      DiscountFixedOnceForeverDurationBase$outboundSchema,
      DiscountPercentageRepeatDurationBase$outboundSchema,
      DiscountFixedRepeatDurationBase$outboundSchema,
    ]),
  ),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    recurringInterval: "recurring_interval",
    currentPeriodStart: "current_period_start",
    currentPeriodEnd: "current_period_end",
    cancelAtPeriodEnd: "cancel_at_period_end",
    startedAt: "started_at",
    endedAt: "ended_at",
    customerId: "customer_id",
    productId: "product_id",
    priceId: "price_id",
    discountId: "discount_id",
    checkoutId: "checkout_id",
    customFieldData: "custom_field_data",
    userId: "user_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Subscription$ {
  /** @deprecated use `Subscription$inboundSchema` instead. */
  export const inboundSchema = Subscription$inboundSchema;
  /** @deprecated use `Subscription$outboundSchema` instead. */
  export const outboundSchema = Subscription$outboundSchema;
  /** @deprecated use `Subscription$Outbound` instead. */
  export type Outbound = Subscription$Outbound;
}

export function subscriptionToJSON(subscription: Subscription): string {
  return JSON.stringify(Subscription$outboundSchema.parse(subscription));
}

export function subscriptionFromJSON(
  jsonString: string,
): SafeParseResult<Subscription, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Subscription$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Subscription' from JSON`,
  );
}
