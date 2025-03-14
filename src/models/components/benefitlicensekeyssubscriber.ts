/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitLicenseKeysSubscriberProperties,
  BenefitLicenseKeysSubscriberProperties$inboundSchema,
  BenefitLicenseKeysSubscriberProperties$Outbound,
  BenefitLicenseKeysSubscriberProperties$outboundSchema,
} from "./benefitlicensekeyssubscriberproperties.js";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";

export type BenefitLicenseKeysSubscriber = {
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
  type?: "license_keys" | undefined;
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
  organization: Organization;
  properties: BenefitLicenseKeysSubscriberProperties;
};

/** @internal */
export const BenefitLicenseKeysSubscriber$inboundSchema: z.ZodType<
  BenefitLicenseKeysSubscriber,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  type: z.literal("license_keys").optional(),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  organization: Organization$inboundSchema,
  properties: BenefitLicenseKeysSubscriberProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitLicenseKeysSubscriber$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  type: "license_keys";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  organization: Organization$Outbound;
  properties: BenefitLicenseKeysSubscriberProperties$Outbound;
};

/** @internal */
export const BenefitLicenseKeysSubscriber$outboundSchema: z.ZodType<
  BenefitLicenseKeysSubscriber$Outbound,
  z.ZodTypeDef,
  BenefitLicenseKeysSubscriber
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  type: z.literal("license_keys").default("license_keys" as const),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  organization: Organization$outboundSchema,
  properties: BenefitLicenseKeysSubscriberProperties$outboundSchema,
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
export namespace BenefitLicenseKeysSubscriber$ {
  /** @deprecated use `BenefitLicenseKeysSubscriber$inboundSchema` instead. */
  export const inboundSchema = BenefitLicenseKeysSubscriber$inboundSchema;
  /** @deprecated use `BenefitLicenseKeysSubscriber$outboundSchema` instead. */
  export const outboundSchema = BenefitLicenseKeysSubscriber$outboundSchema;
  /** @deprecated use `BenefitLicenseKeysSubscriber$Outbound` instead. */
  export type Outbound = BenefitLicenseKeysSubscriber$Outbound;
}

export function benefitLicenseKeysSubscriberToJSON(
  benefitLicenseKeysSubscriber: BenefitLicenseKeysSubscriber,
): string {
  return JSON.stringify(
    BenefitLicenseKeysSubscriber$outboundSchema.parse(
      benefitLicenseKeysSubscriber,
    ),
  );
}

export function benefitLicenseKeysSubscriberFromJSON(
  jsonString: string,
): SafeParseResult<BenefitLicenseKeysSubscriber, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitLicenseKeysSubscriber$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitLicenseKeysSubscriber' from JSON`,
  );
}
