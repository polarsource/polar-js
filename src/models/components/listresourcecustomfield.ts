/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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

export type ListResourceCustomField = {
  items: Array<CustomField>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceCustomField$inboundSchema: z.ZodType<
  ListResourceCustomField,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(CustomField$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceCustomField$Outbound = {
  items: Array<CustomField$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceCustomField$outboundSchema: z.ZodType<
  ListResourceCustomField$Outbound,
  z.ZodTypeDef,
  ListResourceCustomField
> = z.object({
  items: z.array(CustomField$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceCustomField$ {
  /** @deprecated use `ListResourceCustomField$inboundSchema` instead. */
  export const inboundSchema = ListResourceCustomField$inboundSchema;
  /** @deprecated use `ListResourceCustomField$outboundSchema` instead. */
  export const outboundSchema = ListResourceCustomField$outboundSchema;
  /** @deprecated use `ListResourceCustomField$Outbound` instead. */
  export type Outbound = ListResourceCustomField$Outbound;
}

export function listResourceCustomFieldToJSON(
  listResourceCustomField: ListResourceCustomField,
): string {
  return JSON.stringify(
    ListResourceCustomField$outboundSchema.parse(listResourceCustomField),
  );
}

export function listResourceCustomFieldFromJSON(
  jsonString: string,
): SafeParseResult<ListResourceCustomField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListResourceCustomField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResourceCustomField' from JSON`,
  );
}