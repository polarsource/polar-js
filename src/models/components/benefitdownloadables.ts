/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitDownloadablesProperties,
  BenefitDownloadablesProperties$inboundSchema,
  BenefitDownloadablesProperties$Outbound,
  BenefitDownloadablesProperties$outboundSchema,
} from "./benefitdownloadablesproperties.js";

export type BenefitDownloadables = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the benefit.
   */
  id: string;
  type?: "downloadables" | undefined;
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organizationId: string;
  properties: BenefitDownloadablesProperties;
};

/** @internal */
export const BenefitDownloadables$inboundSchema: z.ZodType<
  BenefitDownloadables,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  type: z.literal("downloadables").optional(),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  properties: BenefitDownloadablesProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitDownloadables$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  type: "downloadables";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  properties: BenefitDownloadablesProperties$Outbound;
};

/** @internal */
export const BenefitDownloadables$outboundSchema: z.ZodType<
  BenefitDownloadables$Outbound,
  z.ZodTypeDef,
  BenefitDownloadables
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  type: z.literal("downloadables").default("downloadables" as const),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  properties: BenefitDownloadablesProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDownloadables$ {
  /** @deprecated use `BenefitDownloadables$inboundSchema` instead. */
  export const inboundSchema = BenefitDownloadables$inboundSchema;
  /** @deprecated use `BenefitDownloadables$outboundSchema` instead. */
  export const outboundSchema = BenefitDownloadables$outboundSchema;
  /** @deprecated use `BenefitDownloadables$Outbound` instead. */
  export type Outbound = BenefitDownloadables$Outbound;
}

export function benefitDownloadablesToJSON(
  benefitDownloadables: BenefitDownloadables,
): string {
  return JSON.stringify(
    BenefitDownloadables$outboundSchema.parse(benefitDownloadables),
  );
}

export function benefitDownloadablesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDownloadables, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDownloadables$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDownloadables' from JSON`,
  );
}
