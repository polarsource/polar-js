/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  CustomFieldCheckboxProperties,
  CustomFieldCheckboxProperties$inboundSchema,
  CustomFieldCheckboxProperties$Outbound,
  CustomFieldCheckboxProperties$outboundSchema,
} from "./customfieldcheckboxproperties.js";

export const CustomFieldCreateCheckboxType = {
  Checkbox: "checkbox",
} as const;
export type CustomFieldCreateCheckboxType = ClosedEnum<
  typeof CustomFieldCreateCheckboxType
>;

/**
 * Schema to create a custom field of type checkbox.
 */
export type CustomFieldCreateCheckbox = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be a string with a maximum length of **500 characters**.
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string } | undefined;
  type?: "checkbox" | undefined;
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  properties: CustomFieldCheckboxProperties;
};

/** @internal */
export const CustomFieldCreateCheckboxType$inboundSchema: z.ZodNativeEnum<
  typeof CustomFieldCreateCheckboxType
> = z.nativeEnum(CustomFieldCreateCheckboxType);

/** @internal */
export const CustomFieldCreateCheckboxType$outboundSchema: z.ZodNativeEnum<
  typeof CustomFieldCreateCheckboxType
> = CustomFieldCreateCheckboxType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateCheckboxType$ {
  /** @deprecated use `CustomFieldCreateCheckboxType$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateCheckboxType$inboundSchema;
  /** @deprecated use `CustomFieldCreateCheckboxType$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateCheckboxType$outboundSchema;
}

/** @internal */
export const CustomFieldCreateCheckbox$inboundSchema: z.ZodType<
  CustomFieldCreateCheckbox,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()).optional(),
  type: z.literal("checkbox").optional(),
  slug: z.string(),
  name: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: CustomFieldCheckboxProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CustomFieldCreateCheckbox$Outbound = {
  metadata?: { [k: string]: string } | undefined;
  type: "checkbox";
  slug: string;
  name: string;
  organization_id?: string | null | undefined;
  properties: CustomFieldCheckboxProperties$Outbound;
};

/** @internal */
export const CustomFieldCreateCheckbox$outboundSchema: z.ZodType<
  CustomFieldCreateCheckbox$Outbound,
  z.ZodTypeDef,
  CustomFieldCreateCheckbox
> = z.object({
  metadata: z.record(z.string()).optional(),
  type: z.literal("checkbox").default("checkbox"),
  slug: z.string(),
  name: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: CustomFieldCheckboxProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateCheckbox$ {
  /** @deprecated use `CustomFieldCreateCheckbox$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateCheckbox$inboundSchema;
  /** @deprecated use `CustomFieldCreateCheckbox$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateCheckbox$outboundSchema;
  /** @deprecated use `CustomFieldCreateCheckbox$Outbound` instead. */
  export type Outbound = CustomFieldCreateCheckbox$Outbound;
}