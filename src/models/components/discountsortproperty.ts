/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const DiscountSortProperty = {
  CreatedAt: "created_at",
  MinusCreatedAt: "-created_at",
  Name: "name",
  MinusName: "-name",
  Code: "code",
  MinusCode: "-code",
  RedemptionsCount: "redemptions_count",
  MinusRedemptionsCount: "-redemptions_count",
} as const;
export type DiscountSortProperty = ClosedEnum<typeof DiscountSortProperty>;

/** @internal */
export const DiscountSortProperty$inboundSchema: z.ZodNativeEnum<
  typeof DiscountSortProperty
> = z.nativeEnum(DiscountSortProperty);

/** @internal */
export const DiscountSortProperty$outboundSchema: z.ZodNativeEnum<
  typeof DiscountSortProperty
> = DiscountSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountSortProperty$ {
  /** @deprecated use `DiscountSortProperty$inboundSchema` instead. */
  export const inboundSchema = DiscountSortProperty$inboundSchema;
  /** @deprecated use `DiscountSortProperty$outboundSchema` instead. */
  export const outboundSchema = DiscountSortProperty$outboundSchema;
}