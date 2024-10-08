/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ArticlesUpdateRequest = {
  id: string;
  articleUpdate: components.ArticleUpdate;
};

/** @internal */
export const ArticlesUpdateRequest$inboundSchema: z.ZodType<
  ArticlesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  ArticleUpdate: components.ArticleUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "ArticleUpdate": "articleUpdate",
  });
});

/** @internal */
export type ArticlesUpdateRequest$Outbound = {
  id: string;
  ArticleUpdate: components.ArticleUpdate$Outbound;
};

/** @internal */
export const ArticlesUpdateRequest$outboundSchema: z.ZodType<
  ArticlesUpdateRequest$Outbound,
  z.ZodTypeDef,
  ArticlesUpdateRequest
> = z.object({
  id: z.string(),
  articleUpdate: components.ArticleUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    articleUpdate: "ArticleUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticlesUpdateRequest$ {
  /** @deprecated use `ArticlesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = ArticlesUpdateRequest$inboundSchema;
  /** @deprecated use `ArticlesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = ArticlesUpdateRequest$outboundSchema;
  /** @deprecated use `ArticlesUpdateRequest$Outbound` instead. */
  export type Outbound = ArticlesUpdateRequest$Outbound;
}
