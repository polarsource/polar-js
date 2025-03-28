/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PaymentMethodCardData = {
  brand: string;
  last4: string;
  expMonth: number;
  expYear: number;
  wallet?: string | null | undefined;
};

/** @internal */
export const PaymentMethodCardData$inboundSchema: z.ZodType<
  PaymentMethodCardData,
  z.ZodTypeDef,
  unknown
> = z.object({
  brand: z.string(),
  last4: z.string(),
  exp_month: z.number().int(),
  exp_year: z.number().int(),
  wallet: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "exp_month": "expMonth",
    "exp_year": "expYear",
  });
});

/** @internal */
export type PaymentMethodCardData$Outbound = {
  brand: string;
  last4: string;
  exp_month: number;
  exp_year: number;
  wallet?: string | null | undefined;
};

/** @internal */
export const PaymentMethodCardData$outboundSchema: z.ZodType<
  PaymentMethodCardData$Outbound,
  z.ZodTypeDef,
  PaymentMethodCardData
> = z.object({
  brand: z.string(),
  last4: z.string(),
  expMonth: z.number().int(),
  expYear: z.number().int(),
  wallet: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    expMonth: "exp_month",
    expYear: "exp_year",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodCardData$ {
  /** @deprecated use `PaymentMethodCardData$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodCardData$inboundSchema;
  /** @deprecated use `PaymentMethodCardData$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodCardData$outboundSchema;
  /** @deprecated use `PaymentMethodCardData$Outbound` instead. */
  export type Outbound = PaymentMethodCardData$Outbound;
}

export function paymentMethodCardDataToJSON(
  paymentMethodCardData: PaymentMethodCardData,
): string {
  return JSON.stringify(
    PaymentMethodCardData$outboundSchema.parse(paymentMethodCardData),
  );
}

export function paymentMethodCardDataFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethodCardData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethodCardData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethodCardData' from JSON`,
  );
}
