/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalOrganizationsGetRequest = {
  /**
   * The organization slug.
   */
  slug: string;
};

/** @internal */
export const CustomerPortalOrganizationsGetRequest$inboundSchema: z.ZodType<
  CustomerPortalOrganizationsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.string(),
});

/** @internal */
export type CustomerPortalOrganizationsGetRequest$Outbound = {
  slug: string;
};

/** @internal */
export const CustomerPortalOrganizationsGetRequest$outboundSchema: z.ZodType<
  CustomerPortalOrganizationsGetRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalOrganizationsGetRequest
> = z.object({
  slug: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrganizationsGetRequest$ {
  /** @deprecated use `CustomerPortalOrganizationsGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalOrganizationsGetRequest$inboundSchema;
  /** @deprecated use `CustomerPortalOrganizationsGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalOrganizationsGetRequest$outboundSchema;
  /** @deprecated use `CustomerPortalOrganizationsGetRequest$Outbound` instead. */
  export type Outbound = CustomerPortalOrganizationsGetRequest$Outbound;
}

export function customerPortalOrganizationsGetRequestToJSON(
  customerPortalOrganizationsGetRequest: CustomerPortalOrganizationsGetRequest,
): string {
  return JSON.stringify(
    CustomerPortalOrganizationsGetRequest$outboundSchema.parse(
      customerPortalOrganizationsGetRequest,
    ),
  );
}

export function customerPortalOrganizationsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalOrganizationsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalOrganizationsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrganizationsGetRequest' from JSON`,
  );
}