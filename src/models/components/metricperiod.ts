/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Orders = number | number;

export type Revenue = number | number;

export type CumulativeRevenue = number | number;

export type AverageOrderValue = number | number;

export type OneTimeProducts = number | number;

export type OneTimeProductsRevenue = number | number;

export type NewSubscriptions = number | number;

export type NewSubscriptionsRevenue = number | number;

export type RenewedSubscriptions = number | number;

export type RenewedSubscriptionsRevenue = number | number;

export type ActiveSubscriptions = number | number;

export type MonthlyRecurringRevenue = number | number;

export type CommittedMonthlyRecurringRevenue = number | number;

export type Checkouts = number | number;

export type SucceededCheckouts = number | number;

export type CheckoutsConversion = number | number;

export type MetricPeriod = {
  /**
   * Timestamp of this period data.
   */
  timestamp: Date;
  orders: number | number;
  revenue: number | number;
  cumulativeRevenue: number | number;
  averageOrderValue: number | number;
  oneTimeProducts: number | number;
  oneTimeProductsRevenue: number | number;
  newSubscriptions: number | number;
  newSubscriptionsRevenue: number | number;
  renewedSubscriptions: number | number;
  renewedSubscriptionsRevenue: number | number;
  activeSubscriptions: number | number;
  monthlyRecurringRevenue: number | number;
  committedMonthlyRecurringRevenue: number | number;
  checkouts: number | number;
  succeededCheckouts: number | number;
  checkoutsConversion: number | number;
};

/** @internal */
export const Orders$inboundSchema: z.ZodType<Orders, z.ZodTypeDef, unknown> = z
  .union([z.number().int(), z.number()]);

/** @internal */
export type Orders$Outbound = number | number;

/** @internal */
export const Orders$outboundSchema: z.ZodType<
  Orders$Outbound,
  z.ZodTypeDef,
  Orders
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Orders$ {
  /** @deprecated use `Orders$inboundSchema` instead. */
  export const inboundSchema = Orders$inboundSchema;
  /** @deprecated use `Orders$outboundSchema` instead. */
  export const outboundSchema = Orders$outboundSchema;
  /** @deprecated use `Orders$Outbound` instead. */
  export type Outbound = Orders$Outbound;
}

export function ordersToJSON(orders: Orders): string {
  return JSON.stringify(Orders$outboundSchema.parse(orders));
}

export function ordersFromJSON(
  jsonString: string,
): SafeParseResult<Orders, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Orders$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Orders' from JSON`,
  );
}

/** @internal */
export const Revenue$inboundSchema: z.ZodType<Revenue, z.ZodTypeDef, unknown> =
  z.union([z.number().int(), z.number()]);

/** @internal */
export type Revenue$Outbound = number | number;

/** @internal */
export const Revenue$outboundSchema: z.ZodType<
  Revenue$Outbound,
  z.ZodTypeDef,
  Revenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Revenue$ {
  /** @deprecated use `Revenue$inboundSchema` instead. */
  export const inboundSchema = Revenue$inboundSchema;
  /** @deprecated use `Revenue$outboundSchema` instead. */
  export const outboundSchema = Revenue$outboundSchema;
  /** @deprecated use `Revenue$Outbound` instead. */
  export type Outbound = Revenue$Outbound;
}

export function revenueToJSON(revenue: Revenue): string {
  return JSON.stringify(Revenue$outboundSchema.parse(revenue));
}

export function revenueFromJSON(
  jsonString: string,
): SafeParseResult<Revenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Revenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Revenue' from JSON`,
  );
}

/** @internal */
export const CumulativeRevenue$inboundSchema: z.ZodType<
  CumulativeRevenue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type CumulativeRevenue$Outbound = number | number;

/** @internal */
export const CumulativeRevenue$outboundSchema: z.ZodType<
  CumulativeRevenue$Outbound,
  z.ZodTypeDef,
  CumulativeRevenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CumulativeRevenue$ {
  /** @deprecated use `CumulativeRevenue$inboundSchema` instead. */
  export const inboundSchema = CumulativeRevenue$inboundSchema;
  /** @deprecated use `CumulativeRevenue$outboundSchema` instead. */
  export const outboundSchema = CumulativeRevenue$outboundSchema;
  /** @deprecated use `CumulativeRevenue$Outbound` instead. */
  export type Outbound = CumulativeRevenue$Outbound;
}

export function cumulativeRevenueToJSON(
  cumulativeRevenue: CumulativeRevenue,
): string {
  return JSON.stringify(
    CumulativeRevenue$outboundSchema.parse(cumulativeRevenue),
  );
}

export function cumulativeRevenueFromJSON(
  jsonString: string,
): SafeParseResult<CumulativeRevenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CumulativeRevenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CumulativeRevenue' from JSON`,
  );
}

/** @internal */
export const AverageOrderValue$inboundSchema: z.ZodType<
  AverageOrderValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type AverageOrderValue$Outbound = number | number;

/** @internal */
export const AverageOrderValue$outboundSchema: z.ZodType<
  AverageOrderValue$Outbound,
  z.ZodTypeDef,
  AverageOrderValue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AverageOrderValue$ {
  /** @deprecated use `AverageOrderValue$inboundSchema` instead. */
  export const inboundSchema = AverageOrderValue$inboundSchema;
  /** @deprecated use `AverageOrderValue$outboundSchema` instead. */
  export const outboundSchema = AverageOrderValue$outboundSchema;
  /** @deprecated use `AverageOrderValue$Outbound` instead. */
  export type Outbound = AverageOrderValue$Outbound;
}

export function averageOrderValueToJSON(
  averageOrderValue: AverageOrderValue,
): string {
  return JSON.stringify(
    AverageOrderValue$outboundSchema.parse(averageOrderValue),
  );
}

export function averageOrderValueFromJSON(
  jsonString: string,
): SafeParseResult<AverageOrderValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AverageOrderValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AverageOrderValue' from JSON`,
  );
}

/** @internal */
export const OneTimeProducts$inboundSchema: z.ZodType<
  OneTimeProducts,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type OneTimeProducts$Outbound = number | number;

/** @internal */
export const OneTimeProducts$outboundSchema: z.ZodType<
  OneTimeProducts$Outbound,
  z.ZodTypeDef,
  OneTimeProducts
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OneTimeProducts$ {
  /** @deprecated use `OneTimeProducts$inboundSchema` instead. */
  export const inboundSchema = OneTimeProducts$inboundSchema;
  /** @deprecated use `OneTimeProducts$outboundSchema` instead. */
  export const outboundSchema = OneTimeProducts$outboundSchema;
  /** @deprecated use `OneTimeProducts$Outbound` instead. */
  export type Outbound = OneTimeProducts$Outbound;
}

export function oneTimeProductsToJSON(
  oneTimeProducts: OneTimeProducts,
): string {
  return JSON.stringify(OneTimeProducts$outboundSchema.parse(oneTimeProducts));
}

export function oneTimeProductsFromJSON(
  jsonString: string,
): SafeParseResult<OneTimeProducts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OneTimeProducts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OneTimeProducts' from JSON`,
  );
}

/** @internal */
export const OneTimeProductsRevenue$inboundSchema: z.ZodType<
  OneTimeProductsRevenue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type OneTimeProductsRevenue$Outbound = number | number;

/** @internal */
export const OneTimeProductsRevenue$outboundSchema: z.ZodType<
  OneTimeProductsRevenue$Outbound,
  z.ZodTypeDef,
  OneTimeProductsRevenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OneTimeProductsRevenue$ {
  /** @deprecated use `OneTimeProductsRevenue$inboundSchema` instead. */
  export const inboundSchema = OneTimeProductsRevenue$inboundSchema;
  /** @deprecated use `OneTimeProductsRevenue$outboundSchema` instead. */
  export const outboundSchema = OneTimeProductsRevenue$outboundSchema;
  /** @deprecated use `OneTimeProductsRevenue$Outbound` instead. */
  export type Outbound = OneTimeProductsRevenue$Outbound;
}

export function oneTimeProductsRevenueToJSON(
  oneTimeProductsRevenue: OneTimeProductsRevenue,
): string {
  return JSON.stringify(
    OneTimeProductsRevenue$outboundSchema.parse(oneTimeProductsRevenue),
  );
}

export function oneTimeProductsRevenueFromJSON(
  jsonString: string,
): SafeParseResult<OneTimeProductsRevenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OneTimeProductsRevenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OneTimeProductsRevenue' from JSON`,
  );
}

/** @internal */
export const NewSubscriptions$inboundSchema: z.ZodType<
  NewSubscriptions,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type NewSubscriptions$Outbound = number | number;

/** @internal */
export const NewSubscriptions$outboundSchema: z.ZodType<
  NewSubscriptions$Outbound,
  z.ZodTypeDef,
  NewSubscriptions
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NewSubscriptions$ {
  /** @deprecated use `NewSubscriptions$inboundSchema` instead. */
  export const inboundSchema = NewSubscriptions$inboundSchema;
  /** @deprecated use `NewSubscriptions$outboundSchema` instead. */
  export const outboundSchema = NewSubscriptions$outboundSchema;
  /** @deprecated use `NewSubscriptions$Outbound` instead. */
  export type Outbound = NewSubscriptions$Outbound;
}

export function newSubscriptionsToJSON(
  newSubscriptions: NewSubscriptions,
): string {
  return JSON.stringify(
    NewSubscriptions$outboundSchema.parse(newSubscriptions),
  );
}

export function newSubscriptionsFromJSON(
  jsonString: string,
): SafeParseResult<NewSubscriptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NewSubscriptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NewSubscriptions' from JSON`,
  );
}

/** @internal */
export const NewSubscriptionsRevenue$inboundSchema: z.ZodType<
  NewSubscriptionsRevenue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type NewSubscriptionsRevenue$Outbound = number | number;

/** @internal */
export const NewSubscriptionsRevenue$outboundSchema: z.ZodType<
  NewSubscriptionsRevenue$Outbound,
  z.ZodTypeDef,
  NewSubscriptionsRevenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NewSubscriptionsRevenue$ {
  /** @deprecated use `NewSubscriptionsRevenue$inboundSchema` instead. */
  export const inboundSchema = NewSubscriptionsRevenue$inboundSchema;
  /** @deprecated use `NewSubscriptionsRevenue$outboundSchema` instead. */
  export const outboundSchema = NewSubscriptionsRevenue$outboundSchema;
  /** @deprecated use `NewSubscriptionsRevenue$Outbound` instead. */
  export type Outbound = NewSubscriptionsRevenue$Outbound;
}

export function newSubscriptionsRevenueToJSON(
  newSubscriptionsRevenue: NewSubscriptionsRevenue,
): string {
  return JSON.stringify(
    NewSubscriptionsRevenue$outboundSchema.parse(newSubscriptionsRevenue),
  );
}

export function newSubscriptionsRevenueFromJSON(
  jsonString: string,
): SafeParseResult<NewSubscriptionsRevenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => NewSubscriptionsRevenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'NewSubscriptionsRevenue' from JSON`,
  );
}

/** @internal */
export const RenewedSubscriptions$inboundSchema: z.ZodType<
  RenewedSubscriptions,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type RenewedSubscriptions$Outbound = number | number;

/** @internal */
export const RenewedSubscriptions$outboundSchema: z.ZodType<
  RenewedSubscriptions$Outbound,
  z.ZodTypeDef,
  RenewedSubscriptions
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RenewedSubscriptions$ {
  /** @deprecated use `RenewedSubscriptions$inboundSchema` instead. */
  export const inboundSchema = RenewedSubscriptions$inboundSchema;
  /** @deprecated use `RenewedSubscriptions$outboundSchema` instead. */
  export const outboundSchema = RenewedSubscriptions$outboundSchema;
  /** @deprecated use `RenewedSubscriptions$Outbound` instead. */
  export type Outbound = RenewedSubscriptions$Outbound;
}

export function renewedSubscriptionsToJSON(
  renewedSubscriptions: RenewedSubscriptions,
): string {
  return JSON.stringify(
    RenewedSubscriptions$outboundSchema.parse(renewedSubscriptions),
  );
}

export function renewedSubscriptionsFromJSON(
  jsonString: string,
): SafeParseResult<RenewedSubscriptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RenewedSubscriptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RenewedSubscriptions' from JSON`,
  );
}

/** @internal */
export const RenewedSubscriptionsRevenue$inboundSchema: z.ZodType<
  RenewedSubscriptionsRevenue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type RenewedSubscriptionsRevenue$Outbound = number | number;

/** @internal */
export const RenewedSubscriptionsRevenue$outboundSchema: z.ZodType<
  RenewedSubscriptionsRevenue$Outbound,
  z.ZodTypeDef,
  RenewedSubscriptionsRevenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RenewedSubscriptionsRevenue$ {
  /** @deprecated use `RenewedSubscriptionsRevenue$inboundSchema` instead. */
  export const inboundSchema = RenewedSubscriptionsRevenue$inboundSchema;
  /** @deprecated use `RenewedSubscriptionsRevenue$outboundSchema` instead. */
  export const outboundSchema = RenewedSubscriptionsRevenue$outboundSchema;
  /** @deprecated use `RenewedSubscriptionsRevenue$Outbound` instead. */
  export type Outbound = RenewedSubscriptionsRevenue$Outbound;
}

export function renewedSubscriptionsRevenueToJSON(
  renewedSubscriptionsRevenue: RenewedSubscriptionsRevenue,
): string {
  return JSON.stringify(
    RenewedSubscriptionsRevenue$outboundSchema.parse(
      renewedSubscriptionsRevenue,
    ),
  );
}

export function renewedSubscriptionsRevenueFromJSON(
  jsonString: string,
): SafeParseResult<RenewedSubscriptionsRevenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RenewedSubscriptionsRevenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RenewedSubscriptionsRevenue' from JSON`,
  );
}

/** @internal */
export const ActiveSubscriptions$inboundSchema: z.ZodType<
  ActiveSubscriptions,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type ActiveSubscriptions$Outbound = number | number;

/** @internal */
export const ActiveSubscriptions$outboundSchema: z.ZodType<
  ActiveSubscriptions$Outbound,
  z.ZodTypeDef,
  ActiveSubscriptions
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActiveSubscriptions$ {
  /** @deprecated use `ActiveSubscriptions$inboundSchema` instead. */
  export const inboundSchema = ActiveSubscriptions$inboundSchema;
  /** @deprecated use `ActiveSubscriptions$outboundSchema` instead. */
  export const outboundSchema = ActiveSubscriptions$outboundSchema;
  /** @deprecated use `ActiveSubscriptions$Outbound` instead. */
  export type Outbound = ActiveSubscriptions$Outbound;
}

export function activeSubscriptionsToJSON(
  activeSubscriptions: ActiveSubscriptions,
): string {
  return JSON.stringify(
    ActiveSubscriptions$outboundSchema.parse(activeSubscriptions),
  );
}

export function activeSubscriptionsFromJSON(
  jsonString: string,
): SafeParseResult<ActiveSubscriptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ActiveSubscriptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ActiveSubscriptions' from JSON`,
  );
}

/** @internal */
export const MonthlyRecurringRevenue$inboundSchema: z.ZodType<
  MonthlyRecurringRevenue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type MonthlyRecurringRevenue$Outbound = number | number;

/** @internal */
export const MonthlyRecurringRevenue$outboundSchema: z.ZodType<
  MonthlyRecurringRevenue$Outbound,
  z.ZodTypeDef,
  MonthlyRecurringRevenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MonthlyRecurringRevenue$ {
  /** @deprecated use `MonthlyRecurringRevenue$inboundSchema` instead. */
  export const inboundSchema = MonthlyRecurringRevenue$inboundSchema;
  /** @deprecated use `MonthlyRecurringRevenue$outboundSchema` instead. */
  export const outboundSchema = MonthlyRecurringRevenue$outboundSchema;
  /** @deprecated use `MonthlyRecurringRevenue$Outbound` instead. */
  export type Outbound = MonthlyRecurringRevenue$Outbound;
}

export function monthlyRecurringRevenueToJSON(
  monthlyRecurringRevenue: MonthlyRecurringRevenue,
): string {
  return JSON.stringify(
    MonthlyRecurringRevenue$outboundSchema.parse(monthlyRecurringRevenue),
  );
}

export function monthlyRecurringRevenueFromJSON(
  jsonString: string,
): SafeParseResult<MonthlyRecurringRevenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MonthlyRecurringRevenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MonthlyRecurringRevenue' from JSON`,
  );
}

/** @internal */
export const CommittedMonthlyRecurringRevenue$inboundSchema: z.ZodType<
  CommittedMonthlyRecurringRevenue,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type CommittedMonthlyRecurringRevenue$Outbound = number | number;

/** @internal */
export const CommittedMonthlyRecurringRevenue$outboundSchema: z.ZodType<
  CommittedMonthlyRecurringRevenue$Outbound,
  z.ZodTypeDef,
  CommittedMonthlyRecurringRevenue
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CommittedMonthlyRecurringRevenue$ {
  /** @deprecated use `CommittedMonthlyRecurringRevenue$inboundSchema` instead. */
  export const inboundSchema = CommittedMonthlyRecurringRevenue$inboundSchema;
  /** @deprecated use `CommittedMonthlyRecurringRevenue$outboundSchema` instead. */
  export const outboundSchema = CommittedMonthlyRecurringRevenue$outboundSchema;
  /** @deprecated use `CommittedMonthlyRecurringRevenue$Outbound` instead. */
  export type Outbound = CommittedMonthlyRecurringRevenue$Outbound;
}

export function committedMonthlyRecurringRevenueToJSON(
  committedMonthlyRecurringRevenue: CommittedMonthlyRecurringRevenue,
): string {
  return JSON.stringify(
    CommittedMonthlyRecurringRevenue$outboundSchema.parse(
      committedMonthlyRecurringRevenue,
    ),
  );
}

export function committedMonthlyRecurringRevenueFromJSON(
  jsonString: string,
): SafeParseResult<CommittedMonthlyRecurringRevenue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CommittedMonthlyRecurringRevenue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CommittedMonthlyRecurringRevenue' from JSON`,
  );
}

/** @internal */
export const Checkouts$inboundSchema: z.ZodType<
  Checkouts,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type Checkouts$Outbound = number | number;

/** @internal */
export const Checkouts$outboundSchema: z.ZodType<
  Checkouts$Outbound,
  z.ZodTypeDef,
  Checkouts
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Checkouts$ {
  /** @deprecated use `Checkouts$inboundSchema` instead. */
  export const inboundSchema = Checkouts$inboundSchema;
  /** @deprecated use `Checkouts$outboundSchema` instead. */
  export const outboundSchema = Checkouts$outboundSchema;
  /** @deprecated use `Checkouts$Outbound` instead. */
  export type Outbound = Checkouts$Outbound;
}

export function checkoutsToJSON(checkouts: Checkouts): string {
  return JSON.stringify(Checkouts$outboundSchema.parse(checkouts));
}

export function checkoutsFromJSON(
  jsonString: string,
): SafeParseResult<Checkouts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Checkouts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Checkouts' from JSON`,
  );
}

/** @internal */
export const SucceededCheckouts$inboundSchema: z.ZodType<
  SucceededCheckouts,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type SucceededCheckouts$Outbound = number | number;

/** @internal */
export const SucceededCheckouts$outboundSchema: z.ZodType<
  SucceededCheckouts$Outbound,
  z.ZodTypeDef,
  SucceededCheckouts
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SucceededCheckouts$ {
  /** @deprecated use `SucceededCheckouts$inboundSchema` instead. */
  export const inboundSchema = SucceededCheckouts$inboundSchema;
  /** @deprecated use `SucceededCheckouts$outboundSchema` instead. */
  export const outboundSchema = SucceededCheckouts$outboundSchema;
  /** @deprecated use `SucceededCheckouts$Outbound` instead. */
  export type Outbound = SucceededCheckouts$Outbound;
}

export function succeededCheckoutsToJSON(
  succeededCheckouts: SucceededCheckouts,
): string {
  return JSON.stringify(
    SucceededCheckouts$outboundSchema.parse(succeededCheckouts),
  );
}

export function succeededCheckoutsFromJSON(
  jsonString: string,
): SafeParseResult<SucceededCheckouts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SucceededCheckouts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SucceededCheckouts' from JSON`,
  );
}

/** @internal */
export const CheckoutsConversion$inboundSchema: z.ZodType<
  CheckoutsConversion,
  z.ZodTypeDef,
  unknown
> = z.union([z.number().int(), z.number()]);

/** @internal */
export type CheckoutsConversion$Outbound = number | number;

/** @internal */
export const CheckoutsConversion$outboundSchema: z.ZodType<
  CheckoutsConversion$Outbound,
  z.ZodTypeDef,
  CheckoutsConversion
> = z.union([z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsConversion$ {
  /** @deprecated use `CheckoutsConversion$inboundSchema` instead. */
  export const inboundSchema = CheckoutsConversion$inboundSchema;
  /** @deprecated use `CheckoutsConversion$outboundSchema` instead. */
  export const outboundSchema = CheckoutsConversion$outboundSchema;
  /** @deprecated use `CheckoutsConversion$Outbound` instead. */
  export type Outbound = CheckoutsConversion$Outbound;
}

export function checkoutsConversionToJSON(
  checkoutsConversion: CheckoutsConversion,
): string {
  return JSON.stringify(
    CheckoutsConversion$outboundSchema.parse(checkoutsConversion),
  );
}

export function checkoutsConversionFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutsConversion, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutsConversion$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutsConversion' from JSON`,
  );
}

/** @internal */
export const MetricPeriod$inboundSchema: z.ZodType<
  MetricPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  orders: z.union([z.number().int(), z.number()]),
  revenue: z.union([z.number().int(), z.number()]),
  cumulative_revenue: z.union([z.number().int(), z.number()]),
  average_order_value: z.union([z.number().int(), z.number()]),
  one_time_products: z.union([z.number().int(), z.number()]),
  one_time_products_revenue: z.union([z.number().int(), z.number()]),
  new_subscriptions: z.union([z.number().int(), z.number()]),
  new_subscriptions_revenue: z.union([z.number().int(), z.number()]),
  renewed_subscriptions: z.union([z.number().int(), z.number()]),
  renewed_subscriptions_revenue: z.union([z.number().int(), z.number()]),
  active_subscriptions: z.union([z.number().int(), z.number()]),
  monthly_recurring_revenue: z.union([z.number().int(), z.number()]),
  committed_monthly_recurring_revenue: z.union([z.number().int(), z.number()]),
  checkouts: z.union([z.number().int(), z.number()]),
  succeeded_checkouts: z.union([z.number().int(), z.number()]),
  checkouts_conversion: z.union([z.number().int(), z.number()]),
}).transform((v) => {
  return remap$(v, {
    "cumulative_revenue": "cumulativeRevenue",
    "average_order_value": "averageOrderValue",
    "one_time_products": "oneTimeProducts",
    "one_time_products_revenue": "oneTimeProductsRevenue",
    "new_subscriptions": "newSubscriptions",
    "new_subscriptions_revenue": "newSubscriptionsRevenue",
    "renewed_subscriptions": "renewedSubscriptions",
    "renewed_subscriptions_revenue": "renewedSubscriptionsRevenue",
    "active_subscriptions": "activeSubscriptions",
    "monthly_recurring_revenue": "monthlyRecurringRevenue",
    "committed_monthly_recurring_revenue": "committedMonthlyRecurringRevenue",
    "succeeded_checkouts": "succeededCheckouts",
    "checkouts_conversion": "checkoutsConversion",
  });
});

/** @internal */
export type MetricPeriod$Outbound = {
  timestamp: string;
  orders: number | number;
  revenue: number | number;
  cumulative_revenue: number | number;
  average_order_value: number | number;
  one_time_products: number | number;
  one_time_products_revenue: number | number;
  new_subscriptions: number | number;
  new_subscriptions_revenue: number | number;
  renewed_subscriptions: number | number;
  renewed_subscriptions_revenue: number | number;
  active_subscriptions: number | number;
  monthly_recurring_revenue: number | number;
  committed_monthly_recurring_revenue: number | number;
  checkouts: number | number;
  succeeded_checkouts: number | number;
  checkouts_conversion: number | number;
};

/** @internal */
export const MetricPeriod$outboundSchema: z.ZodType<
  MetricPeriod$Outbound,
  z.ZodTypeDef,
  MetricPeriod
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  orders: z.union([z.number().int(), z.number()]),
  revenue: z.union([z.number().int(), z.number()]),
  cumulativeRevenue: z.union([z.number().int(), z.number()]),
  averageOrderValue: z.union([z.number().int(), z.number()]),
  oneTimeProducts: z.union([z.number().int(), z.number()]),
  oneTimeProductsRevenue: z.union([z.number().int(), z.number()]),
  newSubscriptions: z.union([z.number().int(), z.number()]),
  newSubscriptionsRevenue: z.union([z.number().int(), z.number()]),
  renewedSubscriptions: z.union([z.number().int(), z.number()]),
  renewedSubscriptionsRevenue: z.union([z.number().int(), z.number()]),
  activeSubscriptions: z.union([z.number().int(), z.number()]),
  monthlyRecurringRevenue: z.union([z.number().int(), z.number()]),
  committedMonthlyRecurringRevenue: z.union([z.number().int(), z.number()]),
  checkouts: z.union([z.number().int(), z.number()]),
  succeededCheckouts: z.union([z.number().int(), z.number()]),
  checkoutsConversion: z.union([z.number().int(), z.number()]),
}).transform((v) => {
  return remap$(v, {
    cumulativeRevenue: "cumulative_revenue",
    averageOrderValue: "average_order_value",
    oneTimeProducts: "one_time_products",
    oneTimeProductsRevenue: "one_time_products_revenue",
    newSubscriptions: "new_subscriptions",
    newSubscriptionsRevenue: "new_subscriptions_revenue",
    renewedSubscriptions: "renewed_subscriptions",
    renewedSubscriptionsRevenue: "renewed_subscriptions_revenue",
    activeSubscriptions: "active_subscriptions",
    monthlyRecurringRevenue: "monthly_recurring_revenue",
    committedMonthlyRecurringRevenue: "committed_monthly_recurring_revenue",
    succeededCheckouts: "succeeded_checkouts",
    checkoutsConversion: "checkouts_conversion",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricPeriod$ {
  /** @deprecated use `MetricPeriod$inboundSchema` instead. */
  export const inboundSchema = MetricPeriod$inboundSchema;
  /** @deprecated use `MetricPeriod$outboundSchema` instead. */
  export const outboundSchema = MetricPeriod$outboundSchema;
  /** @deprecated use `MetricPeriod$Outbound` instead. */
  export type Outbound = MetricPeriod$Outbound;
}

export function metricPeriodToJSON(metricPeriod: MetricPeriod): string {
  return JSON.stringify(MetricPeriod$outboundSchema.parse(metricPeriod));
}

export function metricPeriodFromJSON(
  jsonString: string,
): SafeParseResult<MetricPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricPeriod' from JSON`,
  );
}
