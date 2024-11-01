/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ArticlesExportRequest = {
  organizationId: string;
};

/** @internal */
export const ArticlesExportRequest$inboundSchema: z.ZodType<
  ArticlesExportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type ArticlesExportRequest$Outbound = {
  organization_id: string;
};

/** @internal */
export const ArticlesExportRequest$outboundSchema: z.ZodType<
  ArticlesExportRequest$Outbound,
  z.ZodTypeDef,
  ArticlesExportRequest
> = z.object({
  organizationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticlesExportRequest$ {
  /** @deprecated use `ArticlesExportRequest$inboundSchema` instead. */
  export const inboundSchema = ArticlesExportRequest$inboundSchema;
  /** @deprecated use `ArticlesExportRequest$outboundSchema` instead. */
  export const outboundSchema = ArticlesExportRequest$outboundSchema;
  /** @deprecated use `ArticlesExportRequest$Outbound` instead. */
  export type Outbound = ArticlesExportRequest$Outbound;
}
