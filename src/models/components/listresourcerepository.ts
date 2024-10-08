/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import {
  RepositoryOutput,
  RepositoryOutput$inboundSchema,
  RepositoryOutput$Outbound,
  RepositoryOutput$outboundSchema,
} from "./repositoryoutput.js";

export type ListResourceRepository = {
  items: Array<RepositoryOutput>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceRepository$inboundSchema: z.ZodType<
  ListResourceRepository,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(RepositoryOutput$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceRepository$Outbound = {
  items: Array<RepositoryOutput$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceRepository$outboundSchema: z.ZodType<
  ListResourceRepository$Outbound,
  z.ZodTypeDef,
  ListResourceRepository
> = z.object({
  items: z.array(RepositoryOutput$outboundSchema),
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
