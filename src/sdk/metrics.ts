/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsGet } from "../funcs/metricsGet.js";
import { metricsLimits } from "../funcs/metricsLimits.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Metrics extends ClientSDK {
  /**
   * Get Metrics
   *
   * @remarks
   * Get metrics about your orders and subscriptions.
   */
  async get(
    request: operations.MetricsGetRequest,
    options?: RequestOptions,
  ): Promise<components.MetricsResponse> {
    return unwrapAsync(metricsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Metrics Limits
   *
   * @remarks
   * Get the interval limits for the metrics endpoint.
   */
  async limits(
    options?: RequestOptions,
  ): Promise<components.MetricsLimits> {
    return unwrapAsync(metricsLimits(
      this,
      options,
    ));
  }
}
