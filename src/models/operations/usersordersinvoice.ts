/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UsersOrdersInvoiceRequest = {
  /**
   * The order ID.
   */
  id: string;
};

/** @internal */
export const UsersOrdersInvoiceRequest$inboundSchema: z.ZodType<
  UsersOrdersInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UsersOrdersInvoiceRequest$Outbound = {
  id: string;
};

/** @internal */
export const UsersOrdersInvoiceRequest$outboundSchema: z.ZodType<
  UsersOrdersInvoiceRequest$Outbound,
  z.ZodTypeDef,
  UsersOrdersInvoiceRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersOrdersInvoiceRequest$ {
  /** @deprecated use `UsersOrdersInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = UsersOrdersInvoiceRequest$inboundSchema;
  /** @deprecated use `UsersOrdersInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = UsersOrdersInvoiceRequest$outboundSchema;
  /** @deprecated use `UsersOrdersInvoiceRequest$Outbound` instead. */
  export type Outbound = UsersOrdersInvoiceRequest$Outbound;
}

export function usersOrdersInvoiceRequestToJSON(
  usersOrdersInvoiceRequest: UsersOrdersInvoiceRequest,
): string {
  return JSON.stringify(
    UsersOrdersInvoiceRequest$outboundSchema.parse(usersOrdersInvoiceRequest),
  );
}

export function usersOrdersInvoiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<UsersOrdersInvoiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsersOrdersInvoiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsersOrdersInvoiceRequest' from JSON`,
  );
}
