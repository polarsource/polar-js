# CheckoutLinkProduct

Product data for a checkout link.

## Example Usage

```typescript
import { CheckoutLinkProduct } from "@polar-sh/sdk/models/components/checkoutlinkproduct.js";

let value: CheckoutLinkProduct = {
  metadata: {},
  id: "<value>",
  createdAt: new Date("2024-01-20T21:47:18.016Z"),
  modifiedAt: new Date("2023-12-02T12:11:56.919Z"),
  trialInterval: "week",
  trialIntervalCount: null,
  name: "<value>",
  description: "opposite clavicle countess gastropod",
  recurringInterval: "day",
  isRecurring: true,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2025-11-25T06:14:29.943Z"),
      modifiedAt: new Date("2025-11-17T10:45:38.825Z"),
      id: "<value>",
      amountType: "free",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "day",
      legacy: true,
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-09-04T12:35:29.724Z"),
      modifiedAt: new Date("2024-05-27T08:53:02.662Z"),
      type: "downloadables",
      description: "cautiously pike true considering superior about",
      selectable: true,
      deletable: false,
      organizationId: "<value>",
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/sbin",
      mimeType: "<value>",
      size: 498972,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
      version: "<value>",
      service: "product_media",
      isUploaded: false,
      createdAt: new Date("2024-08-06T00:24:30.544Z"),
      sizeReadable: "<value>",
      publicUrl: "https://enchanting-bell.net/",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                        | Record<string, *components.CheckoutLinkProductMetadata*>                                                                                                          | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `id`                                                                                                                                                              | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the object.                                                                                                                                             |
| `createdAt`                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Creation timestamp of the object.                                                                                                                                 |
| `modifiedAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                     | :heavy_check_mark:                                                                                                                                                | Last modification timestamp of the object.                                                                                                                        |
| `trialInterval`                                                                                                                                                   | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                              | :heavy_check_mark:                                                                                                                                                | The interval unit for the trial period.                                                                                                                           |
| `trialIntervalCount`                                                                                                                                              | *number*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The number of interval units for the trial period.                                                                                                                |
| `name`                                                                                                                                                            | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The name of the product.                                                                                                                                          |
| `description`                                                                                                                                                     | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The description of the product.                                                                                                                                   |
| `recurringInterval`                                                                                                                                               | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                              | :heavy_check_mark:                                                                                                                                                | The recurring interval of the product. If `None`, the product is a one-time purchase.Note that the `day` and `week` values are for internal Polar staff use only. |
| `isRecurring`                                                                                                                                                     | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | Whether the product is a subscription.                                                                                                                            |
| `isArchived`                                                                                                                                                      | *boolean*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                | Whether the product is archived and no longer available.                                                                                                          |
| `organizationId`                                                                                                                                                  | *string*                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                | The ID of the organization owning the product.                                                                                                                    |
| `prices`                                                                                                                                                          | *components.CheckoutLinkProductPrices*[]                                                                                                                          | :heavy_check_mark:                                                                                                                                                | List of prices for this product.                                                                                                                                  |
| `benefits`                                                                                                                                                        | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                            | :heavy_check_mark:                                                                                                                                                | List of benefits granted by the product.                                                                                                                          |
| `medias`                                                                                                                                                          | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                              | :heavy_check_mark:                                                                                                                                                | List of medias associated to the product.                                                                                                                         |