/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import {
  UserSubscription,
  UserSubscription$inboundSchema,
  UserSubscription$Outbound,
  UserSubscription$outboundSchema,
} from "./usersubscription.js";

export type ListResourceUserSubscription = {
  items: Array<UserSubscription>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceUserSubscription$inboundSchema: z.ZodType<
  ListResourceUserSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(UserSubscription$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceUserSubscription$Outbound = {
  items: Array<UserSubscription$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceUserSubscription$outboundSchema: z.ZodType<
  ListResourceUserSubscription$Outbound,
  z.ZodTypeDef,
  ListResourceUserSubscription
> = z.object({
  items: z.array(UserSubscription$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceUserSubscription$ {
  /** @deprecated use `ListResourceUserSubscription$inboundSchema` instead. */
  export const inboundSchema = ListResourceUserSubscription$inboundSchema;
  /** @deprecated use `ListResourceUserSubscription$outboundSchema` instead. */
  export const outboundSchema = ListResourceUserSubscription$outboundSchema;
  /** @deprecated use `ListResourceUserSubscription$Outbound` instead. */
  export type Outbound = ListResourceUserSubscription$Outbound;
}
