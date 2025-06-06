/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentsGet } from "../funcs/paymentsGet.js";
import { paymentsList } from "../funcs/paymentsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Payment } from "../models/components/payment.js";
import { PaymentsGetRequest } from "../models/operations/paymentsget.js";
import {
  PaymentsListRequest,
  PaymentsListResponse,
} from "../models/operations/paymentslist.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Payments extends ClientSDK {
  /**
   * List Payments
   *
   * @remarks
   * List payments.
   *
   * **Scopes**: `payments:read`
   */
  async list(
    request: PaymentsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<PaymentsListResponse, { page: number }>> {
    return unwrapResultIterator(paymentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Payment
   *
   * @remarks
   * Get a payment by ID.
   *
   * **Scopes**: `payments:read`
   */
  async get(
    request: PaymentsGetRequest,
    options?: RequestOptions,
  ): Promise<Payment> {
    return unwrapAsync(paymentsGet(
      this,
      request,
      options,
    ));
  }
}
