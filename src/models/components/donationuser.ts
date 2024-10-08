/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DonationUser = {
  id: string;
  publicName: string;
  avatarUrl: string | null;
};

/** @internal */
export const DonationUser$inboundSchema: z.ZodType<
  DonationUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  public_name: z.string(),
  avatar_url: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "public_name": "publicName",
    "avatar_url": "avatarUrl",
  });
});

/** @internal */
export type DonationUser$Outbound = {
  id: string;
  public_name: string;
  avatar_url: string | null;
};

/** @internal */
export const DonationUser$outboundSchema: z.ZodType<
  DonationUser$Outbound,
  z.ZodTypeDef,
  DonationUser
> = z.object({
  id: z.string(),
  publicName: z.string(),
  avatarUrl: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    publicName: "public_name",
    avatarUrl: "avatar_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DonationUser$ {
  /** @deprecated use `DonationUser$inboundSchema` instead. */
  export const inboundSchema = DonationUser$inboundSchema;
  /** @deprecated use `DonationUser$outboundSchema` instead. */
  export const outboundSchema = DonationUser$outboundSchema;
  /** @deprecated use `DonationUser$Outbound` instead. */
  export type Outbound = DonationUser$Outbound;
}
