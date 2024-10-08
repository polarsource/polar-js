/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CheckoutsGetRequest = {
  id: string;
};

/** @internal */
export const CheckoutsGetRequest$inboundSchema: z.ZodType<
  CheckoutsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CheckoutsGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const CheckoutsGetRequest$outboundSchema: z.ZodType<
  CheckoutsGetRequest$Outbound,
  z.ZodTypeDef,
  CheckoutsGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsGetRequest$ {
  /** @deprecated use `CheckoutsGetRequest$inboundSchema` instead. */
  export const inboundSchema = CheckoutsGetRequest$inboundSchema;
  /** @deprecated use `CheckoutsGetRequest$outboundSchema` instead. */
  export const outboundSchema = CheckoutsGetRequest$outboundSchema;
  /** @deprecated use `CheckoutsGetRequest$Outbound` instead. */
  export type Outbound = CheckoutsGetRequest$Outbound;
}
