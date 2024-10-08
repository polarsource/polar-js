/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersDownloadablesGet } from "../funcs/usersDownloadablesGet.js";
import { usersDownloadablesList } from "../funcs/usersDownloadablesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Downloadables extends ClientSDK {
  /**
   * List Downloadables
   */
  async list(
    request: operations.UsersDownloadablesListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.UsersDownloadablesListResponse>> {
    return unwrapResultIterator(usersDownloadablesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Downloadable
   */
  async get(
    request: operations.UsersDownloadablesGetRequest,
    options?: RequestOptions,
  ): Promise<any | undefined> {
    return unwrapAsync(usersDownloadablesGet(
      this,
      request,
      options,
    ));
  }
}
