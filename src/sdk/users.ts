/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Downloadables } from "./downloadables.js";
import { PolarAdvertisements } from "./polaradvertisements.js";
import { PolarBenefits } from "./polarbenefits.js";
import { PolarLicenseKeys } from "./polarlicensekeys.js";
import { PolarOrders } from "./polarorders.js";
import { PolarSubscriptions } from "./polarsubscriptions.js";

export class Users extends ClientSDK {
  private _benefits?: PolarBenefits;
  get benefits(): PolarBenefits {
    return (this._benefits ??= new PolarBenefits(this._options));
  }

  private _orders?: PolarOrders;
  get orders(): PolarOrders {
    return (this._orders ??= new PolarOrders(this._options));
  }

  private _subscriptions?: PolarSubscriptions;
  get subscriptions(): PolarSubscriptions {
    return (this._subscriptions ??= new PolarSubscriptions(this._options));
  }

  private _advertisements?: PolarAdvertisements;
  get advertisements(): PolarAdvertisements {
    return (this._advertisements ??= new PolarAdvertisements(this._options));
  }

  private _downloadables?: Downloadables;
  get downloadables(): Downloadables {
    return (this._downloadables ??= new Downloadables(this._options));
  }

  private _licenseKeys?: PolarLicenseKeys;
  get licenseKeys(): PolarLicenseKeys {
    return (this._licenseKeys ??= new PolarLicenseKeys(this._options));
  }
}
