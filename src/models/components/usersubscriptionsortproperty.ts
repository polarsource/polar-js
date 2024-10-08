/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const UserSubscriptionSortProperty = {
  StartedAt: "started_at",
  MinusStartedAt: "-started_at",
  Amount: "amount",
  MinusAmount: "-amount",
  Status: "status",
  MinusStatus: "-status",
  Organization: "organization",
  MinusOrganization: "-organization",
  Product: "product",
  MinusProduct: "-product",
} as const;
export type UserSubscriptionSortProperty = ClosedEnum<
  typeof UserSubscriptionSortProperty
>;

/** @internal */
export const UserSubscriptionSortProperty$inboundSchema: z.ZodNativeEnum<
  typeof UserSubscriptionSortProperty
> = z.nativeEnum(UserSubscriptionSortProperty);

/** @internal */
export const UserSubscriptionSortProperty$outboundSchema: z.ZodNativeEnum<
  typeof UserSubscriptionSortProperty
> = UserSubscriptionSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserSubscriptionSortProperty$ {
  /** @deprecated use `UserSubscriptionSortProperty$inboundSchema` instead. */
  export const inboundSchema = UserSubscriptionSortProperty$inboundSchema;
  /** @deprecated use `UserSubscriptionSortProperty$outboundSchema` instead. */
  export const outboundSchema = UserSubscriptionSortProperty$outboundSchema;
}
