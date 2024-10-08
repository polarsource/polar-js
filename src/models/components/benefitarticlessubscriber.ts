/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  BenefitArticlesSubscriberProperties,
  BenefitArticlesSubscriberProperties$inboundSchema,
  BenefitArticlesSubscriberProperties$Outbound,
  BenefitArticlesSubscriberProperties$outboundSchema,
} from "./benefitarticlessubscriberproperties.js";

export const Type = {
  Articles: "articles",
} as const;
export type Type = ClosedEnum<typeof Type>;

export type BenefitArticlesSubscriber = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the benefit.
   */
  id: string;
  type?: "articles" | undefined;
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organizationId: string;
  /**
   * Properties available to subscribers for a benefit of type `articles`.
   */
  properties: BenefitArticlesSubscriberProperties;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const BenefitArticlesSubscriber$inboundSchema: z.ZodType<
  BenefitArticlesSubscriber,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  type: z.literal("articles").optional(),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  properties: BenefitArticlesSubscriberProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitArticlesSubscriber$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  type: "articles";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  properties: BenefitArticlesSubscriberProperties$Outbound;
};

/** @internal */
export const BenefitArticlesSubscriber$outboundSchema: z.ZodType<
  BenefitArticlesSubscriber$Outbound,
  z.ZodTypeDef,
  BenefitArticlesSubscriber
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  type: z.literal("articles").default("articles"),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  properties: BenefitArticlesSubscriberProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitArticlesSubscriber$ {
  /** @deprecated use `BenefitArticlesSubscriber$inboundSchema` instead. */
  export const inboundSchema = BenefitArticlesSubscriber$inboundSchema;
  /** @deprecated use `BenefitArticlesSubscriber$outboundSchema` instead. */
  export const outboundSchema = BenefitArticlesSubscriber$outboundSchema;
  /** @deprecated use `BenefitArticlesSubscriber$Outbound` instead. */
  export type Outbound = BenefitArticlesSubscriber$Outbound;
}
