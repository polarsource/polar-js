/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PaymentMethodGeneric = {
  id: string;
  type: string;
  createdAt: Date;
  default: boolean;
};

/** @internal */
export const PaymentMethodGeneric$inboundSchema: z.ZodType<
  PaymentMethodGeneric,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  default: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
  });
});

/** @internal */
export type PaymentMethodGeneric$Outbound = {
  id: string;
  type: string;
  created_at: string;
  default: boolean;
};

/** @internal */
export const PaymentMethodGeneric$outboundSchema: z.ZodType<
  PaymentMethodGeneric$Outbound,
  z.ZodTypeDef,
  PaymentMethodGeneric
> = z.object({
  id: z.string(),
  type: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  default: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentMethodGeneric$ {
  /** @deprecated use `PaymentMethodGeneric$inboundSchema` instead. */
  export const inboundSchema = PaymentMethodGeneric$inboundSchema;
  /** @deprecated use `PaymentMethodGeneric$outboundSchema` instead. */
  export const outboundSchema = PaymentMethodGeneric$outboundSchema;
  /** @deprecated use `PaymentMethodGeneric$Outbound` instead. */
  export type Outbound = PaymentMethodGeneric$Outbound;
}

export function paymentMethodGenericToJSON(
  paymentMethodGeneric: PaymentMethodGeneric,
): string {
  return JSON.stringify(
    PaymentMethodGeneric$outboundSchema.parse(paymentMethodGeneric),
  );
}

export function paymentMethodGenericFromJSON(
  jsonString: string,
): SafeParseResult<PaymentMethodGeneric, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PaymentMethodGeneric$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PaymentMethodGeneric' from JSON`,
  );
}
