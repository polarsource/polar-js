/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Oauth2ClientsOauth2DeleteClientRequest = {
  clientId: string;
};

/** @internal */
export const Oauth2ClientsOauth2DeleteClientRequest$inboundSchema: z.ZodType<
  Oauth2ClientsOauth2DeleteClientRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  client_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "client_id": "clientId",
  });
});

/** @internal */
export type Oauth2ClientsOauth2DeleteClientRequest$Outbound = {
  client_id: string;
};

/** @internal */
export const Oauth2ClientsOauth2DeleteClientRequest$outboundSchema: z.ZodType<
  Oauth2ClientsOauth2DeleteClientRequest$Outbound,
  z.ZodTypeDef,
  Oauth2ClientsOauth2DeleteClientRequest
> = z.object({
  clientId: z.string(),
}).transform((v) => {
  return remap$(v, {
    clientId: "client_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Oauth2ClientsOauth2DeleteClientRequest$ {
  /** @deprecated use `Oauth2ClientsOauth2DeleteClientRequest$inboundSchema` instead. */
  export const inboundSchema =
    Oauth2ClientsOauth2DeleteClientRequest$inboundSchema;
  /** @deprecated use `Oauth2ClientsOauth2DeleteClientRequest$outboundSchema` instead. */
  export const outboundSchema =
    Oauth2ClientsOauth2DeleteClientRequest$outboundSchema;
  /** @deprecated use `Oauth2ClientsOauth2DeleteClientRequest$Outbound` instead. */
  export type Outbound = Oauth2ClientsOauth2DeleteClientRequest$Outbound;
}
