/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customerPortalOrdersGet } from "../funcs/customerPortalOrdersGet.js";
import { customerPortalOrdersInvoice } from "../funcs/customerPortalOrdersInvoice.js";
import { customerPortalOrdersList } from "../funcs/customerPortalOrdersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CustomerOrder } from "../models/components/customerorder.js";
import { CustomerOrderInvoice } from "../models/components/customerorderinvoice.js";
import { CustomerPortalOrdersGetRequest } from "../models/operations/customerportalordersget.js";
import { CustomerPortalOrdersInvoiceRequest } from "../models/operations/customerportalordersinvoice.js";
import {
  CustomerPortalOrdersListRequest,
  CustomerPortalOrdersListResponse,
} from "../models/operations/customerportalorderslist.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PolarOrders extends ClientSDK {
  /**
   * List Orders
   *
   * @remarks
   * List orders of the authenticated customer or user.
   */
  async list(
    request: CustomerPortalOrdersListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<CustomerPortalOrdersListResponse, { page: number }>> {
    return unwrapResultIterator(customerPortalOrdersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order
   *
   * @remarks
   * Get an order by ID for the authenticated customer or user.
   */
  async get(
    request: CustomerPortalOrdersGetRequest,
    options?: RequestOptions,
  ): Promise<CustomerOrder> {
    return unwrapAsync(customerPortalOrdersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order Invoice
   *
   * @remarks
   * Get an order's invoice data.
   */
  async invoice(
    request: CustomerPortalOrdersInvoiceRequest,
    options?: RequestOptions,
  ): Promise<CustomerOrderInvoice> {
    return unwrapAsync(customerPortalOrdersInvoice(
      this,
      request,
      options,
    ));
  }
}
