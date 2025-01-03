/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutsCustomClientConfirm } from "../funcs/checkoutsCustomClientConfirm.js";
import { checkoutsCustomClientGet } from "../funcs/checkoutsCustomClientGet.js";
import { checkoutsCustomClientUpdate } from "../funcs/checkoutsCustomClientUpdate.js";
import { checkoutsCustomCreate } from "../funcs/checkoutsCustomCreate.js";
import { checkoutsCustomGet } from "../funcs/checkoutsCustomGet.js";
import { checkoutsCustomList } from "../funcs/checkoutsCustomList.js";
import { checkoutsCustomUpdate } from "../funcs/checkoutsCustomUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Custom extends ClientSDK {
  /**
   * List Checkout Sessions
   *
   * @remarks
   * List checkout sessions.
   */
  async list(
    request: operations.CheckoutsCustomListRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.CheckoutsCustomListResponse, { page: number }>
  > {
    return unwrapResultIterator(checkoutsCustomList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Checkout Session
   *
   * @remarks
   * Create a checkout session.
   */
  async create(
    request: components.CheckoutCreate,
    options?: RequestOptions,
  ): Promise<components.Checkout> {
    return unwrapAsync(checkoutsCustomCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Checkout Session
   *
   * @remarks
   * Get a checkout session by ID.
   */
  async get(
    request: operations.CheckoutsCustomGetRequest,
    options?: RequestOptions,
  ): Promise<components.Checkout> {
    return unwrapAsync(checkoutsCustomGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Checkout Session
   *
   * @remarks
   * Update a checkout session.
   */
  async update(
    request: operations.CheckoutsCustomUpdateRequest,
    options?: RequestOptions,
  ): Promise<components.Checkout> {
    return unwrapAsync(checkoutsCustomUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Checkout Session from Client
   *
   * @remarks
   * Get a checkout session by client secret.
   */
  async clientGet(
    request: operations.CheckoutsCustomClientGetRequest,
    options?: RequestOptions,
  ): Promise<components.CheckoutPublic> {
    return unwrapAsync(checkoutsCustomClientGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Checkout Session from Client
   *
   * @remarks
   * Update a checkout session by client secret.
   */
  async clientUpdate(
    request: operations.CheckoutsCustomClientUpdateRequest,
    options?: RequestOptions,
  ): Promise<components.CheckoutPublic> {
    return unwrapAsync(checkoutsCustomClientUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Confirm Checkout Session from Client
   *
   * @remarks
   * Confirm a checkout session by client secret.
   *
   * Orders and subscriptions will be processed.
   */
  async clientConfirm(
    request: operations.CheckoutsCustomClientConfirmRequest,
    options?: RequestOptions,
  ): Promise<components.CheckoutPublicConfirmed> {
    return unwrapAsync(checkoutsCustomClientConfirm(
      this,
      request,
      options,
    ));
  }
}
