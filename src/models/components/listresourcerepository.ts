/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import {
  Repository,
  Repository$inboundSchema,
  Repository$Outbound,
  Repository$outboundSchema,
} from "./repository.js";

export type ListResourceRepository = {
  items: Array<Repository>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceRepository$inboundSchema: z.ZodType<
  ListResourceRepository,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Repository$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceRepository$Outbound = {
  items: Array<Repository$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceRepository$outboundSchema: z.ZodType<
  ListResourceRepository$Outbound,
  z.ZodTypeDef,
  ListResourceRepository
> = z.object({
  items: z.array(Repository$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceRepository$ {
  /** @deprecated use `ListResourceRepository$inboundSchema` instead. */
  export const inboundSchema = ListResourceRepository$inboundSchema;
  /** @deprecated use `ListResourceRepository$outboundSchema` instead. */
  export const outboundSchema = ListResourceRepository$outboundSchema;
  /** @deprecated use `ListResourceRepository$Outbound` instead. */
  export type Outbound = ListResourceRepository$Outbound;
}

export function listResourceRepositoryToJSON(
  listResourceRepository: ListResourceRepository,
): string {
  return JSON.stringify(
    ListResourceRepository$outboundSchema.parse(listResourceRepository),
  );
}

export function listResourceRepositoryFromJSON(
  jsonString: string,
): SafeParseResult<ListResourceRepository, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListResourceRepository$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResourceRepository' from JSON`,
  );
}
