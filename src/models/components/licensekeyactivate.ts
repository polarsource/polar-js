/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LicenseKeyActivateConditions = {};

export type LicenseKeyActivateMeta = {};

export type LicenseKeyActivate = {
  key: string;
  organizationId: string;
  label: string;
  conditions?: LicenseKeyActivateConditions | undefined;
  meta?: LicenseKeyActivateMeta | undefined;
};

/** @internal */
export const LicenseKeyActivateConditions$inboundSchema: z.ZodType<
  LicenseKeyActivateConditions,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type LicenseKeyActivateConditions$Outbound = {};

/** @internal */
export const LicenseKeyActivateConditions$outboundSchema: z.ZodType<
  LicenseKeyActivateConditions$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivateConditions
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivateConditions$ {
  /** @deprecated use `LicenseKeyActivateConditions$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivateConditions$inboundSchema;
  /** @deprecated use `LicenseKeyActivateConditions$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivateConditions$outboundSchema;
  /** @deprecated use `LicenseKeyActivateConditions$Outbound` instead. */
  export type Outbound = LicenseKeyActivateConditions$Outbound;
}

export function licenseKeyActivateConditionsToJSON(
  licenseKeyActivateConditions: LicenseKeyActivateConditions,
): string {
  return JSON.stringify(
    LicenseKeyActivateConditions$outboundSchema.parse(
      licenseKeyActivateConditions,
    ),
  );
}

export function licenseKeyActivateConditionsFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivateConditions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivateConditions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivateConditions' from JSON`,
  );
}

/** @internal */
export const LicenseKeyActivateMeta$inboundSchema: z.ZodType<
  LicenseKeyActivateMeta,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type LicenseKeyActivateMeta$Outbound = {};

/** @internal */
export const LicenseKeyActivateMeta$outboundSchema: z.ZodType<
  LicenseKeyActivateMeta$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivateMeta
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivateMeta$ {
  /** @deprecated use `LicenseKeyActivateMeta$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivateMeta$inboundSchema;
  /** @deprecated use `LicenseKeyActivateMeta$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivateMeta$outboundSchema;
  /** @deprecated use `LicenseKeyActivateMeta$Outbound` instead. */
  export type Outbound = LicenseKeyActivateMeta$Outbound;
}

export function licenseKeyActivateMetaToJSON(
  licenseKeyActivateMeta: LicenseKeyActivateMeta,
): string {
  return JSON.stringify(
    LicenseKeyActivateMeta$outboundSchema.parse(licenseKeyActivateMeta),
  );
}

export function licenseKeyActivateMetaFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivateMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivateMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivateMeta' from JSON`,
  );
}

/** @internal */
export const LicenseKeyActivate$inboundSchema: z.ZodType<
  LicenseKeyActivate,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  organization_id: z.string(),
  label: z.string(),
  conditions: z.lazy(() => LicenseKeyActivateConditions$inboundSchema)
    .optional(),
  meta: z.lazy(() => LicenseKeyActivateMeta$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type LicenseKeyActivate$Outbound = {
  key: string;
  organization_id: string;
  label: string;
  conditions?: LicenseKeyActivateConditions$Outbound | undefined;
  meta?: LicenseKeyActivateMeta$Outbound | undefined;
};

/** @internal */
export const LicenseKeyActivate$outboundSchema: z.ZodType<
  LicenseKeyActivate$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivate
> = z.object({
  key: z.string(),
  organizationId: z.string(),
  label: z.string(),
  conditions: z.lazy(() => LicenseKeyActivateConditions$outboundSchema)
    .optional(),
  meta: z.lazy(() => LicenseKeyActivateMeta$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivate$ {
  /** @deprecated use `LicenseKeyActivate$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivate$inboundSchema;
  /** @deprecated use `LicenseKeyActivate$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivate$outboundSchema;
  /** @deprecated use `LicenseKeyActivate$Outbound` instead. */
  export type Outbound = LicenseKeyActivate$Outbound;
}

export function licenseKeyActivateToJSON(
  licenseKeyActivate: LicenseKeyActivate,
): string {
  return JSON.stringify(
    LicenseKeyActivate$outboundSchema.parse(licenseKeyActivate),
  );
}

export function licenseKeyActivateFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivate' from JSON`,
  );
}
