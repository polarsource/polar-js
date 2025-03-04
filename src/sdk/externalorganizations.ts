/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { externalOrganizationsList } from "../funcs/externalOrganizationsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  ExternalOrganizationsListRequest,
  ExternalOrganizationsListResponse,
} from "../models/operations/externalorganizationslist.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class ExternalOrganizations extends ClientSDK {
  /**
   * List External Organizations
   *
   * @remarks
   * List external organizations.
   *
   * **Scopes**: `external_organizations:read`
   */
  async list(
    request: ExternalOrganizationsListRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<ExternalOrganizationsListResponse, { page: number }>
  > {
    return unwrapResultIterator(externalOrganizationsList(
      this,
      request,
      options,
    ));
  }
}
