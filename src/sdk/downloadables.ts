/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customerPortalDownloadablesGet } from "../funcs/customerPortalDownloadablesGet.js";
import { customerPortalDownloadablesList } from "../funcs/customerPortalDownloadablesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest } from "../models/operations/customerportaldownloadablescustomerportaldownloadablesget.js";
import {
  CustomerPortalDownloadablesListRequest,
  CustomerPortalDownloadablesListResponse,
  CustomerPortalDownloadablesListSecurity,
} from "../models/operations/customerportaldownloadableslist.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Downloadables extends ClientSDK {
  /**
   * List Downloadables
   *
   * @remarks
   * **Scopes**: `customer_portal:read` `customer_portal:write`
   */
  async list(
    security: CustomerPortalDownloadablesListSecurity,
    request: CustomerPortalDownloadablesListRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<CustomerPortalDownloadablesListResponse, { page: number }>
  > {
    return unwrapResultIterator(customerPortalDownloadablesList(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get Downloadable
   */
  async get(
    request: CustomerPortalDownloadablesCustomerPortalDownloadablesGetRequest,
    options?: RequestOptions,
  ): Promise<any | undefined> {
    return unwrapAsync(customerPortalDownloadablesGet(
      this,
      request,
      options,
    ));
  }
}
