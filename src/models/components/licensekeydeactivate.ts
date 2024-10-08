/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type LicenseKeyDeactivate = {
  key: string;
  organizationId: string;
  activationId: string;
};

/** @internal */
export const LicenseKeyDeactivate$inboundSchema: z.ZodType<
  LicenseKeyDeactivate,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  organization_id: z.string(),
  activation_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "activation_id": "activationId",
  });
});

/** @internal */
export type LicenseKeyDeactivate$Outbound = {
  key: string;
  organization_id: string;
  activation_id: string;
};

/** @internal */
export const LicenseKeyDeactivate$outboundSchema: z.ZodType<
  LicenseKeyDeactivate$Outbound,
  z.ZodTypeDef,
  LicenseKeyDeactivate
> = z.object({
  key: z.string(),
  organizationId: z.string(),
  activationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    activationId: "activation_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyDeactivate$ {
  /** @deprecated use `LicenseKeyDeactivate$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyDeactivate$inboundSchema;
  /** @deprecated use `LicenseKeyDeactivate$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyDeactivate$outboundSchema;
  /** @deprecated use `LicenseKeyDeactivate$Outbound` instead. */
  export type Outbound = LicenseKeyDeactivate$Outbound;
}
