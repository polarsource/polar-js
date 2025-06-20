/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { PolarCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import {
  HTTPValidationError,
  HTTPValidationError$inboundSchema,
} from "../models/errors/httpvalidationerror.js";
import { PolarError } from "../models/errors/polarerror.js";
import { ResponseValidationError } from "../models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest,
  CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest$outboundSchema,
} from "../models/operations/customerportaldownloadablescustomerportaldownloadablesget.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get Downloadable
 */
export function customerPortalDownloadablesGet(
  client: PolarCore,
  request: CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    any | undefined,
    | HTTPValidationError
    | PolarError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: PolarCore,
  request: CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      any | undefined,
      | HTTPValidationError
      | PolarError
      | ResponseValidationError
      | ConnectionError
      | RequestAbortedError
      | RequestTimeoutError
      | InvalidRequestError
      | UnexpectedClientError
      | SDKValidationError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) =>
      CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest$outboundSchema
        .parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    token: encodeSimple("token", payload.token, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v1/customer-portal/downloadables/{token}")(
    pathParams,
  );

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const context = {
    options: client._options,
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID:
      "customer_portal:downloadables:customer_portal.downloadables.get",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    userAgent: client._options.userAgent,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "404", "410", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    any | undefined,
    | HTTPValidationError
    | PolarError
    | ResponseValidationError
    | ConnectionError
    | RequestAbortedError
    | RequestTimeoutError
    | InvalidRequestError
    | UnexpectedClientError
    | SDKValidationError
  >(
    M.json(200, z.any().optional()),
    M.nil(302, z.any().optional()),
    M.jsonErr(422, HTTPValidationError$inboundSchema),
    M.fail([400, 404, 410, "4XX"]),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
