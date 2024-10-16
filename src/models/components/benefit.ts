/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BenefitAds,
  BenefitAds$inboundSchema,
  BenefitAds$Outbound,
  BenefitAds$outboundSchema,
} from "./benefitads.js";
import {
  BenefitArticles,
  BenefitArticles$inboundSchema,
  BenefitArticles$Outbound,
  BenefitArticles$outboundSchema,
} from "./benefitarticles.js";
import {
  BenefitCustom,
  BenefitCustom$inboundSchema,
  BenefitCustom$Outbound,
  BenefitCustom$outboundSchema,
} from "./benefitcustom.js";
import {
  BenefitDiscord,
  BenefitDiscord$inboundSchema,
  BenefitDiscord$Outbound,
  BenefitDiscord$outboundSchema,
} from "./benefitdiscord.js";
import {
  BenefitDownloadables,
  BenefitDownloadables$inboundSchema,
  BenefitDownloadables$Outbound,
  BenefitDownloadables$outboundSchema,
} from "./benefitdownloadables.js";
import {
  BenefitGitHubRepository,
  BenefitGitHubRepository$inboundSchema,
  BenefitGitHubRepository$Outbound,
  BenefitGitHubRepository$outboundSchema,
} from "./benefitgithubrepository.js";
import {
  BenefitLicenseKeys,
  BenefitLicenseKeys$inboundSchema,
  BenefitLicenseKeys$Outbound,
  BenefitLicenseKeys$outboundSchema,
} from "./benefitlicensekeys.js";

export type Benefit =
  | BenefitArticles
  | BenefitAds
  | BenefitDiscord
  | BenefitGitHubRepository
  | BenefitDownloadables
  | BenefitLicenseKeys
  | BenefitCustom;

/** @internal */
export const Benefit$inboundSchema: z.ZodType<Benefit, z.ZodTypeDef, unknown> =
  z.union([
    BenefitArticles$inboundSchema,
    BenefitAds$inboundSchema,
    BenefitDiscord$inboundSchema,
    BenefitGitHubRepository$inboundSchema,
    BenefitDownloadables$inboundSchema,
    BenefitLicenseKeys$inboundSchema,
    BenefitCustom$inboundSchema,
  ]);

/** @internal */
export type Benefit$Outbound =
  | BenefitArticles$Outbound
  | BenefitAds$Outbound
  | BenefitDiscord$Outbound
  | BenefitGitHubRepository$Outbound
  | BenefitDownloadables$Outbound
  | BenefitLicenseKeys$Outbound
  | BenefitCustom$Outbound;

/** @internal */
export const Benefit$outboundSchema: z.ZodType<
  Benefit$Outbound,
  z.ZodTypeDef,
  Benefit
> = z.union([
  BenefitArticles$outboundSchema,
  BenefitAds$outboundSchema,
  BenefitDiscord$outboundSchema,
  BenefitGitHubRepository$outboundSchema,
  BenefitDownloadables$outboundSchema,
  BenefitLicenseKeys$outboundSchema,
  BenefitCustom$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Benefit$ {
  /** @deprecated use `Benefit$inboundSchema` instead. */
  export const inboundSchema = Benefit$inboundSchema;
  /** @deprecated use `Benefit$outboundSchema` instead. */
  export const outboundSchema = Benefit$outboundSchema;
  /** @deprecated use `Benefit$Outbound` instead. */
  export type Outbound = Benefit$Outbound;
}