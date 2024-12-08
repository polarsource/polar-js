/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BenefitGrantDiscordProperties = {
  guildId?: string | undefined;
  roleId?: string | undefined;
  accountId?: string | undefined;
};

/** @internal */
export const BenefitGrantDiscordProperties$inboundSchema: z.ZodType<
  BenefitGrantDiscordProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string().optional(),
  role_id: z.string().optional(),
  account_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "role_id": "roleId",
    "account_id": "accountId",
  });
});

/** @internal */
export type BenefitGrantDiscordProperties$Outbound = {
  guild_id?: string | undefined;
  role_id?: string | undefined;
  account_id?: string | undefined;
};

/** @internal */
export const BenefitGrantDiscordProperties$outboundSchema: z.ZodType<
  BenefitGrantDiscordProperties$Outbound,
  z.ZodTypeDef,
  BenefitGrantDiscordProperties
> = z.object({
  guildId: z.string().optional(),
  roleId: z.string().optional(),
  accountId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    roleId: "role_id",
    accountId: "account_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantDiscordProperties$ {
  /** @deprecated use `BenefitGrantDiscordProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitGrantDiscordProperties$inboundSchema;
  /** @deprecated use `BenefitGrantDiscordProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitGrantDiscordProperties$outboundSchema;
  /** @deprecated use `BenefitGrantDiscordProperties$Outbound` instead. */
  export type Outbound = BenefitGrantDiscordProperties$Outbound;
}

export function benefitGrantDiscordPropertiesToJSON(
  benefitGrantDiscordProperties: BenefitGrantDiscordProperties,
): string {
  return JSON.stringify(
    BenefitGrantDiscordProperties$outboundSchema.parse(
      benefitGrantDiscordProperties,
    ),
  );
}

export function benefitGrantDiscordPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGrantDiscordProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGrantDiscordProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGrantDiscordProperties' from JSON`,
  );
}
