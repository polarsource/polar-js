/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customerPortalOrganizationsGet } from "../funcs/customerPortalOrganizationsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class PolarOrganizations extends ClientSDK {
  /**
   * Get Organization
   *
   * @remarks
   * Get a customer portal's organization by slug.
   */
  async get(
    request: operations.CustomerPortalOrganizationsGetRequest,
    options?: RequestOptions,
  ): Promise<components.Organization> {
    return unwrapAsync(customerPortalOrganizationsGet(
      this,
      request,
      options,
    ));
  }
}