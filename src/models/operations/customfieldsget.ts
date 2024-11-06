/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type CustomFieldsGetRequest = {
  /**
   * The custom field ID.
   */
  id: string;
};

/** @internal */
export const CustomFieldsGetRequest$inboundSchema: z.ZodType<
  CustomFieldsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CustomFieldsGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const CustomFieldsGetRequest$outboundSchema: z.ZodType<
  CustomFieldsGetRequest$Outbound,
  z.ZodTypeDef,
  CustomFieldsGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldsGetRequest$ {
  /** @deprecated use `CustomFieldsGetRequest$inboundSchema` instead. */
  export const inboundSchema = CustomFieldsGetRequest$inboundSchema;
  /** @deprecated use `CustomFieldsGetRequest$outboundSchema` instead. */
  export const outboundSchema = CustomFieldsGetRequest$outboundSchema;
  /** @deprecated use `CustomFieldsGetRequest$Outbound` instead. */
  export type Outbound = CustomFieldsGetRequest$Outbound;
}