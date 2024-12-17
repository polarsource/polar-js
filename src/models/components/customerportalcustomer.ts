/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  CustomerPortalOAuthAccount,
  CustomerPortalOAuthAccount$inboundSchema,
  CustomerPortalOAuthAccount$Outbound,
  CustomerPortalOAuthAccount$outboundSchema,
} from "./customerportaloauthaccount.js";
import {
  TaxIDFormat,
  TaxIDFormat$inboundSchema,
  TaxIDFormat$outboundSchema,
} from "./taxidformat.js";

export type CustomerPortalCustomerTaxId = string | TaxIDFormat;

export type CustomerPortalCustomer = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  emailVerified: boolean;
  name: string | null;
  billingAddress: Address | null;
  taxId: Array<string | TaxIDFormat> | null;
  oauthAccounts: { [k: string]: CustomerPortalOAuthAccount };
};

/** @internal */
export const CustomerPortalCustomerTaxId$inboundSchema: z.ZodType<
  CustomerPortalCustomerTaxId,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), TaxIDFormat$inboundSchema]);

/** @internal */
export type CustomerPortalCustomerTaxId$Outbound = string | string;

/** @internal */
export const CustomerPortalCustomerTaxId$outboundSchema: z.ZodType<
  CustomerPortalCustomerTaxId$Outbound,
  z.ZodTypeDef,
  CustomerPortalCustomerTaxId
> = z.union([z.string(), TaxIDFormat$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalCustomerTaxId$ {
  /** @deprecated use `CustomerPortalCustomerTaxId$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalCustomerTaxId$inboundSchema;
  /** @deprecated use `CustomerPortalCustomerTaxId$outboundSchema` instead. */
  export const outboundSchema = CustomerPortalCustomerTaxId$outboundSchema;
  /** @deprecated use `CustomerPortalCustomerTaxId$Outbound` instead. */
  export type Outbound = CustomerPortalCustomerTaxId$Outbound;
}

export function customerPortalCustomerTaxIdToJSON(
  customerPortalCustomerTaxId: CustomerPortalCustomerTaxId,
): string {
  return JSON.stringify(
    CustomerPortalCustomerTaxId$outboundSchema.parse(
      customerPortalCustomerTaxId,
    ),
  );
}

export function customerPortalCustomerTaxIdFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalCustomerTaxId, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerPortalCustomerTaxId$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalCustomerTaxId' from JSON`,
  );
}

/** @internal */
export const CustomerPortalCustomer$inboundSchema: z.ZodType<
  CustomerPortalCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  email: z.string(),
  email_verified: z.boolean(),
  name: z.nullable(z.string()),
  billing_address: z.nullable(Address$inboundSchema),
  tax_id: z.nullable(z.array(z.union([z.string(), TaxIDFormat$inboundSchema]))),
  oauth_accounts: z.record(CustomerPortalOAuthAccount$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "email_verified": "emailVerified",
    "billing_address": "billingAddress",
    "tax_id": "taxId",
    "oauth_accounts": "oauthAccounts",
  });
});

/** @internal */
export type CustomerPortalCustomer$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  email: string;
  email_verified: boolean;
  name: string | null;
  billing_address: Address$Outbound | null;
  tax_id: Array<string | string> | null;
  oauth_accounts: { [k: string]: CustomerPortalOAuthAccount$Outbound };
};

/** @internal */
export const CustomerPortalCustomer$outboundSchema: z.ZodType<
  CustomerPortalCustomer$Outbound,
  z.ZodTypeDef,
  CustomerPortalCustomer
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  name: z.nullable(z.string()),
  billingAddress: z.nullable(Address$outboundSchema),
  taxId: z.nullable(z.array(z.union([z.string(), TaxIDFormat$outboundSchema]))),
  oauthAccounts: z.record(CustomerPortalOAuthAccount$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    emailVerified: "email_verified",
    billingAddress: "billing_address",
    taxId: "tax_id",
    oauthAccounts: "oauth_accounts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalCustomer$ {
  /** @deprecated use `CustomerPortalCustomer$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalCustomer$inboundSchema;
  /** @deprecated use `CustomerPortalCustomer$outboundSchema` instead. */
  export const outboundSchema = CustomerPortalCustomer$outboundSchema;
  /** @deprecated use `CustomerPortalCustomer$Outbound` instead. */
  export type Outbound = CustomerPortalCustomer$Outbound;
}

export function customerPortalCustomerToJSON(
  customerPortalCustomer: CustomerPortalCustomer,
): string {
  return JSON.stringify(
    CustomerPortalCustomer$outboundSchema.parse(customerPortalCustomer),
  );
}

export function customerPortalCustomerFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerPortalCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalCustomer' from JSON`,
  );
}