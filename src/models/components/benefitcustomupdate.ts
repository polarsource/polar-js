/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitCustomProperties,
  BenefitCustomProperties$inboundSchema,
  BenefitCustomProperties$Outbound,
  BenefitCustomProperties$outboundSchema,
} from "./benefitcustomproperties.js";

export type BenefitCustomUpdateMetadata = string | number | number | boolean;

export type BenefitCustomUpdate = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A floating-point number
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null | undefined;
  type: "custom";
  properties?: BenefitCustomProperties | null | undefined;
};

/** @internal */
export const BenefitCustomUpdateMetadata$inboundSchema: z.ZodType<
  BenefitCustomUpdateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/** @internal */
export type BenefitCustomUpdateMetadata$Outbound =
  | string
  | number
  | number
  | boolean;

/** @internal */
export const BenefitCustomUpdateMetadata$outboundSchema: z.ZodType<
  BenefitCustomUpdateMetadata$Outbound,
  z.ZodTypeDef,
  BenefitCustomUpdateMetadata
> = z.union([z.string(), z.number().int(), z.number(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitCustomUpdateMetadata$ {
  /** @deprecated use `BenefitCustomUpdateMetadata$inboundSchema` instead. */
  export const inboundSchema = BenefitCustomUpdateMetadata$inboundSchema;
  /** @deprecated use `BenefitCustomUpdateMetadata$outboundSchema` instead. */
  export const outboundSchema = BenefitCustomUpdateMetadata$outboundSchema;
  /** @deprecated use `BenefitCustomUpdateMetadata$Outbound` instead. */
  export type Outbound = BenefitCustomUpdateMetadata$Outbound;
}

export function benefitCustomUpdateMetadataToJSON(
  benefitCustomUpdateMetadata: BenefitCustomUpdateMetadata,
): string {
  return JSON.stringify(
    BenefitCustomUpdateMetadata$outboundSchema.parse(
      benefitCustomUpdateMetadata,
    ),
  );
}

export function benefitCustomUpdateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<BenefitCustomUpdateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitCustomUpdateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitCustomUpdateMetadata' from JSON`,
  );
}

/** @internal */
export const BenefitCustomUpdate$inboundSchema: z.ZodType<
  BenefitCustomUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.literal("custom"),
  properties: z.nullable(BenefitCustomProperties$inboundSchema).optional(),
});

/** @internal */
export type BenefitCustomUpdate$Outbound = {
  metadata?: { [k: string]: string | number | number | boolean } | undefined;
  description?: string | null | undefined;
  type: "custom";
  properties?: BenefitCustomProperties$Outbound | null | undefined;
};

/** @internal */
export const BenefitCustomUpdate$outboundSchema: z.ZodType<
  BenefitCustomUpdate$Outbound,
  z.ZodTypeDef,
  BenefitCustomUpdate
> = z.object({
  metadata: z.record(
    z.union([z.string(), z.number().int(), z.number(), z.boolean()]),
  ).optional(),
  description: z.nullable(z.string()).optional(),
  type: z.literal("custom"),
  properties: z.nullable(BenefitCustomProperties$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitCustomUpdate$ {
  /** @deprecated use `BenefitCustomUpdate$inboundSchema` instead. */
  export const inboundSchema = BenefitCustomUpdate$inboundSchema;
  /** @deprecated use `BenefitCustomUpdate$outboundSchema` instead. */
  export const outboundSchema = BenefitCustomUpdate$outboundSchema;
  /** @deprecated use `BenefitCustomUpdate$Outbound` instead. */
  export type Outbound = BenefitCustomUpdate$Outbound;
}

export function benefitCustomUpdateToJSON(
  benefitCustomUpdate: BenefitCustomUpdate,
): string {
  return JSON.stringify(
    BenefitCustomUpdate$outboundSchema.parse(benefitCustomUpdate),
  );
}

export function benefitCustomUpdateFromJSON(
  jsonString: string,
): SafeParseResult<BenefitCustomUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitCustomUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitCustomUpdate' from JSON`,
  );
}
