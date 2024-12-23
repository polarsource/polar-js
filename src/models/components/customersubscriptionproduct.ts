/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitBase,
  BenefitBase$inboundSchema,
  BenefitBase$Outbound,
  BenefitBase$outboundSchema,
} from "./benefitbase.js";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";
import {
  ProductMediaFileRead,
  ProductMediaFileRead$inboundSchema,
  ProductMediaFileRead$Outbound,
  ProductMediaFileRead$outboundSchema,
} from "./productmediafileread.js";
import {
  ProductPrice,
  ProductPrice$inboundSchema,
  ProductPrice$Outbound,
  ProductPrice$outboundSchema,
} from "./productprice.js";

export type CustomerSubscriptionProduct = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * Whether the product is a subscription tier.
   */
  isRecurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organizationId: string;
  /**
   * List of prices for this product.
   */
  prices: Array<ProductPrice>;
  /**
   * List of benefits granted by the product.
   */
  benefits: Array<BenefitBase>;
  /**
   * List of medias associated to the product.
   */
  medias: Array<ProductMediaFileRead>;
  organization: Organization;
};

/** @internal */
export const CustomerSubscriptionProduct$inboundSchema: z.ZodType<
  CustomerSubscriptionProduct,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  is_recurring: z.boolean(),
  is_archived: z.boolean(),
  organization_id: z.string(),
  prices: z.array(ProductPrice$inboundSchema),
  benefits: z.array(BenefitBase$inboundSchema),
  medias: z.array(ProductMediaFileRead$inboundSchema),
  organization: Organization$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "is_recurring": "isRecurring",
    "is_archived": "isArchived",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CustomerSubscriptionProduct$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  description: string | null;
  is_recurring: boolean;
  is_archived: boolean;
  organization_id: string;
  prices: Array<ProductPrice$Outbound>;
  benefits: Array<BenefitBase$Outbound>;
  medias: Array<ProductMediaFileRead$Outbound>;
  organization: Organization$Outbound;
};

/** @internal */
export const CustomerSubscriptionProduct$outboundSchema: z.ZodType<
  CustomerSubscriptionProduct$Outbound,
  z.ZodTypeDef,
  CustomerSubscriptionProduct
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  isRecurring: z.boolean(),
  isArchived: z.boolean(),
  organizationId: z.string(),
  prices: z.array(ProductPrice$outboundSchema),
  benefits: z.array(BenefitBase$outboundSchema),
  medias: z.array(ProductMediaFileRead$outboundSchema),
  organization: Organization$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    isRecurring: "is_recurring",
    isArchived: "is_archived",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerSubscriptionProduct$ {
  /** @deprecated use `CustomerSubscriptionProduct$inboundSchema` instead. */
  export const inboundSchema = CustomerSubscriptionProduct$inboundSchema;
  /** @deprecated use `CustomerSubscriptionProduct$outboundSchema` instead. */
  export const outboundSchema = CustomerSubscriptionProduct$outboundSchema;
  /** @deprecated use `CustomerSubscriptionProduct$Outbound` instead. */
  export type Outbound = CustomerSubscriptionProduct$Outbound;
}

export function customerSubscriptionProductToJSON(
  customerSubscriptionProduct: CustomerSubscriptionProduct,
): string {
  return JSON.stringify(
    CustomerSubscriptionProduct$outboundSchema.parse(
      customerSubscriptionProduct,
    ),
  );
}

export function customerSubscriptionProductFromJSON(
  jsonString: string,
): SafeParseResult<CustomerSubscriptionProduct, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerSubscriptionProduct$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerSubscriptionProduct' from JSON`,
  );
}
