/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersDelete } from "../funcs/customersDelete.js";
import { customersDeleteExternal } from "../funcs/customersDeleteExternal.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersGetExternal } from "../funcs/customersGetExternal.js";
import { customersGetState } from "../funcs/customersGetState.js";
import { customersGetStateExternal } from "../funcs/customersGetStateExternal.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { customersUpdateExternal } from "../funcs/customersUpdateExternal.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Customer } from "../models/components/customer.js";
import { CustomerCreate } from "../models/components/customercreate.js";
import { CustomerState } from "../models/components/customerstate.js";
import { CustomersDeleteRequest } from "../models/operations/customersdelete.js";
import { CustomersDeleteExternalRequest } from "../models/operations/customersdeleteexternal.js";
import { CustomersGetRequest } from "../models/operations/customersget.js";
import { CustomersGetExternalRequest } from "../models/operations/customersgetexternal.js";
import { CustomersGetStateRequest } from "../models/operations/customersgetstate.js";
import { CustomersGetStateExternalRequest } from "../models/operations/customersgetstateexternal.js";
import {
  CustomersListRequest,
  CustomersListResponse,
} from "../models/operations/customerslist.js";
import { CustomersUpdateRequest } from "../models/operations/customersupdate.js";
import { CustomersUpdateExternalRequest } from "../models/operations/customersupdateexternal.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Customers extends ClientSDK {
  /**
   * List Customers
   *
   * @remarks
   * List customers.
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async list(
    request: CustomersListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<CustomersListResponse, { page: number }>> {
    return unwrapResultIterator(customersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Customer
   *
   * @remarks
   * Create a customer.
   *
   * **Scopes**: `customers:write`
   */
  async create(
    request: CustomerCreate,
    options?: RequestOptions,
  ): Promise<Customer> {
    return unwrapAsync(customersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer
   *
   * @remarks
   * Get a customer by ID.
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async get(
    request: CustomersGetRequest,
    options?: RequestOptions,
  ): Promise<Customer> {
    return unwrapAsync(customersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Customer
   *
   * @remarks
   * Update a customer.
   *
   * **Scopes**: `customers:write`
   */
  async update(
    request: CustomersUpdateRequest,
    options?: RequestOptions,
  ): Promise<Customer> {
    return unwrapAsync(customersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Customer
   *
   * @remarks
   * Delete a customer.
   *
   * This action cannot be undone and will immediately:
   * - Cancel any active subscriptions for the customer
   * - Revoke all their benefits
   * - Clear any `external_id`
   *
   * Use it only in the context of deleting a user within your
   * own service. Otherwise, use more granular API endpoints to cancel
   * a specific subscription or revoke certain benefits.
   *
   * Note: The customers information will nonetheless be retained for historic
   * orders and subscriptions.
   *
   * **Scopes**: `customers:write`
   */
  async delete(
    request: CustomersDeleteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customersDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer by External ID
   *
   * @remarks
   * Get a customer by external ID.
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async getExternal(
    request: CustomersGetExternalRequest,
    options?: RequestOptions,
  ): Promise<Customer> {
    return unwrapAsync(customersGetExternal(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Customer by External ID
   *
   * @remarks
   * Update a customer by external ID.
   *
   * **Scopes**: `customers:write`
   */
  async updateExternal(
    request: CustomersUpdateExternalRequest,
    options?: RequestOptions,
  ): Promise<Customer> {
    return unwrapAsync(customersUpdateExternal(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Customer by External ID
   *
   * @remarks
   * Delete a customer by external ID.
   *
   * Immediately cancels any active subscriptions and revokes any active benefits.
   *
   * **Scopes**: `customers:write`
   */
  async deleteExternal(
    request: CustomersDeleteExternalRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customersDeleteExternal(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer State
   *
   * @remarks
   * Get a customer state by ID.
   *
   * The customer state includes information about
   * the customer's active subscriptions and benefits.
   *
   * It's the ideal endpoint to use when you need to get a full overview
   * of a customer's status.
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async getState(
    request: CustomersGetStateRequest,
    options?: RequestOptions,
  ): Promise<CustomerState> {
    return unwrapAsync(customersGetState(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer State by External ID
   *
   * @remarks
   * Get a customer state by external ID.
   *
   * The customer state includes information about
   * the customer's active subscriptions and benefits.
   *
   * It's the ideal endpoint to use when you need to get a full overview
   * of a customer's status.
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async getStateExternal(
    request: CustomersGetStateExternalRequest,
    options?: RequestOptions,
  ): Promise<CustomerState> {
    return unwrapAsync(customersGetStateExternal(
      this,
      request,
      options,
    ));
  }
}
