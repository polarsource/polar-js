/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CheckoutLinksUpdateRequest = {
  /**
   * The checkout link ID.
   */
  id: string;
  checkoutLinkUpdate: components.CheckoutLinkUpdate;
};

/** @internal */
export const CheckoutLinksUpdateRequest$inboundSchema: z.ZodType<
  CheckoutLinksUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  CheckoutLinkUpdate: components.CheckoutLinkUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CheckoutLinkUpdate": "checkoutLinkUpdate",
  });
});

/** @internal */
export type CheckoutLinksUpdateRequest$Outbound = {
  id: string;
  CheckoutLinkUpdate: components.CheckoutLinkUpdate$Outbound;
};

/** @internal */
export const CheckoutLinksUpdateRequest$outboundSchema: z.ZodType<
  CheckoutLinksUpdateRequest$Outbound,
  z.ZodTypeDef,
  CheckoutLinksUpdateRequest
> = z.object({
  id: z.string(),
  checkoutLinkUpdate: components.CheckoutLinkUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    checkoutLinkUpdate: "CheckoutLinkUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinksUpdateRequest$ {
  /** @deprecated use `CheckoutLinksUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CheckoutLinksUpdateRequest$inboundSchema;
  /** @deprecated use `CheckoutLinksUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CheckoutLinksUpdateRequest$outboundSchema;
  /** @deprecated use `CheckoutLinksUpdateRequest$Outbound` instead. */
  export type Outbound = CheckoutLinksUpdateRequest$Outbound;
}
