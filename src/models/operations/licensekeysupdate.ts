/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type LicenseKeysUpdateRequest = {
  id: string;
  licenseKeyUpdate: components.LicenseKeyUpdate;
};

/** @internal */
export const LicenseKeysUpdateRequest$inboundSchema: z.ZodType<
  LicenseKeysUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  LicenseKeyUpdate: components.LicenseKeyUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "LicenseKeyUpdate": "licenseKeyUpdate",
  });
});

/** @internal */
export type LicenseKeysUpdateRequest$Outbound = {
  id: string;
  LicenseKeyUpdate: components.LicenseKeyUpdate$Outbound;
};

/** @internal */
export const LicenseKeysUpdateRequest$outboundSchema: z.ZodType<
  LicenseKeysUpdateRequest$Outbound,
  z.ZodTypeDef,
  LicenseKeysUpdateRequest
> = z.object({
  id: z.string(),
  licenseKeyUpdate: components.LicenseKeyUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    licenseKeyUpdate: "LicenseKeyUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeysUpdateRequest$ {
  /** @deprecated use `LicenseKeysUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = LicenseKeysUpdateRequest$inboundSchema;
  /** @deprecated use `LicenseKeysUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = LicenseKeysUpdateRequest$outboundSchema;
  /** @deprecated use `LicenseKeysUpdateRequest$Outbound` instead. */
  export type Outbound = LicenseKeysUpdateRequest$Outbound;
}
