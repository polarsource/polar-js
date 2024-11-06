/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  CustomField,
  CustomField$inboundSchema,
  CustomField$Outbound,
  CustomField$outboundSchema,
} from "./customfield.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type ListResource = {
  items: Array<CustomField>;
  pagination: Pagination;
};

/** @internal */
export const ListResource$inboundSchema: z.ZodType<
  ListResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(CustomField$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResource$Outbound = {
  items: Array<CustomField$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResource$outboundSchema: z.ZodType<
  ListResource$Outbound,
  z.ZodTypeDef,
  ListResource
> = z.object({
  items: z.array(CustomField$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResource$ {
  /** @deprecated use `ListResource$inboundSchema` instead. */
  export const inboundSchema = ListResource$inboundSchema;
  /** @deprecated use `ListResource$outboundSchema` instead. */
  export const outboundSchema = ListResource$outboundSchema;
  /** @deprecated use `ListResource$Outbound` instead. */
  export type Outbound = ListResource$Outbound;
}