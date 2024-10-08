/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Meta = {};

export type LicenseKeyActivationBase = {
  id: string;
  licenseKeyId: string;
  label: string;
  meta: Meta;
  createdAt: Date;
  modifiedAt: Date | null;
};

/** @internal */
export const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Meta$Outbound = {};

/** @internal */
export const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Meta$ {
  /** @deprecated use `Meta$inboundSchema` instead. */
  export const inboundSchema = Meta$inboundSchema;
  /** @deprecated use `Meta$outboundSchema` instead. */
  export const outboundSchema = Meta$outboundSchema;
  /** @deprecated use `Meta$Outbound` instead. */
  export type Outbound = Meta$Outbound;
}

/** @internal */
export const LicenseKeyActivationBase$inboundSchema: z.ZodType<
  LicenseKeyActivationBase,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  license_key_id: z.string(),
  label: z.string(),
  meta: z.lazy(() => Meta$inboundSchema),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
}).transform((v) => {
  return remap$(v, {
    "license_key_id": "licenseKeyId",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
  });
});

/** @internal */
export type LicenseKeyActivationBase$Outbound = {
  id: string;
  license_key_id: string;
  label: string;
  meta: Meta$Outbound;
  created_at: string;
  modified_at: string | null;
};

/** @internal */
export const LicenseKeyActivationBase$outboundSchema: z.ZodType<
  LicenseKeyActivationBase$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivationBase
> = z.object({
  id: z.string(),
  licenseKeyId: z.string(),
  label: z.string(),
  meta: z.lazy(() => Meta$outboundSchema),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
}).transform((v) => {
  return remap$(v, {
    licenseKeyId: "license_key_id",
    createdAt: "created_at",
    modifiedAt: "modified_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivationBase$ {
  /** @deprecated use `LicenseKeyActivationBase$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivationBase$inboundSchema;
  /** @deprecated use `LicenseKeyActivationBase$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivationBase$outboundSchema;
  /** @deprecated use `LicenseKeyActivationBase$Outbound` instead. */
  export type Outbound = LicenseKeyActivationBase$Outbound;
}
