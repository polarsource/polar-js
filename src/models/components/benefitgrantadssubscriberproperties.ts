/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type BenefitGrantAdsSubscriberProperties = {
  /**
   * The ID of the enabled advertisement campaign for this benefit grant.
   */
  advertisementCampaignId?: string | null | undefined;
};

/** @internal */
export const BenefitGrantAdsSubscriberProperties$inboundSchema: z.ZodType<
  BenefitGrantAdsSubscriberProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  advertisement_campaign_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "advertisement_campaign_id": "advertisementCampaignId",
  });
});

/** @internal */
export type BenefitGrantAdsSubscriberProperties$Outbound = {
  advertisement_campaign_id?: string | null | undefined;
};

/** @internal */
export const BenefitGrantAdsSubscriberProperties$outboundSchema: z.ZodType<
  BenefitGrantAdsSubscriberProperties$Outbound,
  z.ZodTypeDef,
  BenefitGrantAdsSubscriberProperties
> = z.object({
  advertisementCampaignId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    advertisementCampaignId: "advertisement_campaign_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantAdsSubscriberProperties$ {
  /** @deprecated use `BenefitGrantAdsSubscriberProperties$inboundSchema` instead. */
  export const inboundSchema =
    BenefitGrantAdsSubscriberProperties$inboundSchema;
  /** @deprecated use `BenefitGrantAdsSubscriberProperties$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGrantAdsSubscriberProperties$outboundSchema;
  /** @deprecated use `BenefitGrantAdsSubscriberProperties$Outbound` instead. */
  export type Outbound = BenefitGrantAdsSubscriberProperties$Outbound;
}