/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const BenefitArticlesUpdateType = {
  Articles: "articles",
} as const;
export type BenefitArticlesUpdateType = ClosedEnum<
  typeof BenefitArticlesUpdateType
>;

export type BenefitArticlesUpdate = {
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null | undefined;
  type?: "articles" | undefined;
};

/** @internal */
export const BenefitArticlesUpdateType$inboundSchema: z.ZodNativeEnum<
  typeof BenefitArticlesUpdateType
> = z.nativeEnum(BenefitArticlesUpdateType);

/** @internal */
export const BenefitArticlesUpdateType$outboundSchema: z.ZodNativeEnum<
  typeof BenefitArticlesUpdateType
> = BenefitArticlesUpdateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitArticlesUpdateType$ {
  /** @deprecated use `BenefitArticlesUpdateType$inboundSchema` instead. */
  export const inboundSchema = BenefitArticlesUpdateType$inboundSchema;
  /** @deprecated use `BenefitArticlesUpdateType$outboundSchema` instead. */
  export const outboundSchema = BenefitArticlesUpdateType$outboundSchema;
}

/** @internal */
export const BenefitArticlesUpdate$inboundSchema: z.ZodType<
  BenefitArticlesUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  type: z.literal("articles").optional(),
});

/** @internal */
export type BenefitArticlesUpdate$Outbound = {
  description?: string | null | undefined;
  type: "articles";
};

/** @internal */
export const BenefitArticlesUpdate$outboundSchema: z.ZodType<
  BenefitArticlesUpdate$Outbound,
  z.ZodTypeDef,
  BenefitArticlesUpdate
> = z.object({
  description: z.nullable(z.string()).optional(),
  type: z.literal("articles").default("articles"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitArticlesUpdate$ {
  /** @deprecated use `BenefitArticlesUpdate$inboundSchema` instead. */
  export const inboundSchema = BenefitArticlesUpdate$inboundSchema;
  /** @deprecated use `BenefitArticlesUpdate$outboundSchema` instead. */
  export const outboundSchema = BenefitArticlesUpdate$outboundSchema;
  /** @deprecated use `BenefitArticlesUpdate$Outbound` instead. */
  export type Outbound = BenefitArticlesUpdate$Outbound;
}
