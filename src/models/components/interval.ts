/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Interval = {
  Year: "year",
  Month: "month",
  Week: "week",
  Day: "day",
  Hour: "hour",
} as const;
export type Interval = ClosedEnum<typeof Interval>;

/** @internal */
export const Interval$inboundSchema: z.ZodNativeEnum<typeof Interval> = z
  .nativeEnum(Interval);

/** @internal */
export const Interval$outboundSchema: z.ZodNativeEnum<typeof Interval> =
  Interval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interval$ {
  /** @deprecated use `Interval$inboundSchema` instead. */
  export const inboundSchema = Interval$inboundSchema;
  /** @deprecated use `Interval$outboundSchema` instead. */
  export const outboundSchema = Interval$outboundSchema;
}
