# CheckoutLinkProduct

Product data for a checkout link.

## Example Usage

```typescript
import { CheckoutLinkProduct } from "@polar-sh/sdk/models/components/checkoutlinkproduct.js";

let value: CheckoutLinkProduct = {
  metadata: {},
  id: "<value>",
  createdAt: new Date("2025-01-19T21:47:18.016Z"),
  modifiedAt: new Date("2024-12-01T12:11:56.919Z"),
  trialInterval: "week",
  trialIntervalCount: null,
  name: "<value>",
  description: "opposite clavicle countess gastropod",
  visibility: "public",
  recurringInterval: "day",
  recurringIntervalCount: 987154,
  meterInterval: "month",
  meterIntervalCount: 372878,
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2026-06-05T11:09:11.850Z"),
      modifiedAt: new Date("2025-02-11T10:03:44.343Z"),
      id: "<value>",
      source: "catalog",
      amountType: "custom",
      priceCurrency: "<value>",
      taxBehavior: "location",
      isArchived: true,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      minimumAmount: 329056,
      maximumAmount: 552011,
      presetAmount: 574478,
      legacy: true,
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2024-01-22T00:59:04.968Z"),
      modifiedAt: new Date("2024-05-30T13:40:06.041Z"),
      type: "github_repository",
      description:
        "cautiously however competent distorted gosh incidentally legislature tall across",
      selectable: true,
      deletable: true,
      isDeleted: true,
      organizationId: "<value>",
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/var/yp",
      mimeType: "<value>",
      size: 772025,
      storageVersion: null,
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-10-14T04:04:24.781Z"),
      version: "<value>",
      service: "product_media",
      isUploaded: false,
      createdAt: new Date("2026-03-20T16:38:16.465Z"),
      sizeReadable: "<value>",
      publicUrl: "https://esteemed-coal.com",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `metadata`                                                                                                                                                                                                   | Record<string, *components.MetadataOutputType*>                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `id`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the object.                                                                                                                                                                                        |
| `createdAt`                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Creation timestamp of the object.                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Last modification timestamp of the object.                                                                                                                                                                   |
| `trialInterval`                                                                                                                                                                                              | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The interval unit for the trial period.                                                                                                                                                                      |
| `trialIntervalCount`                                                                                                                                                                                         | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The number of interval units for the trial period.                                                                                                                                                           |
| `name`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The name of the product.                                                                                                                                                                                     |
| `description`                                                                                                                                                                                                | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The description of the product.                                                                                                                                                                              |
| `visibility`                                                                                                                                                                                                 | [components.ProductVisibility](../../models/components/productvisibility.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `recurringInterval`                                                                                                                                                                                          | [components.RecurringInterval](../../models/components/recurringinterval.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                        |
| `recurringIntervalCount`                                                                                                                                                                                     | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. |
| `meterInterval`                                                                                                                                                                                              | [components.RecurringInterval](../../models/components/recurringinterval.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | The meter cycle of the product, independent of the billing interval. If `None`, metered concerns follow the billing interval.                                                                                |
| `meterIntervalCount`                                                                                                                                                                                         | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of meter interval units. None when no meter cycle is set.                                                                                                                                             |
| `isRecurring`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is a subscription.                                                                                                                                                                       |
| `isArchived`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is archived and no longer available.                                                                                                                                                     |
| `organizationId`                                                                                                                                                                                             | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the organization owning the product.                                                                                                                                                               |
| `prices`                                                                                                                                                                                                     | *components.CheckoutLinkProductPrices*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | List of prices for this product.                                                                                                                                                                             |
| `benefits`                                                                                                                                                                                                   | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                           | List of benefits granted by the product.                                                                                                                                                                     |
| `medias`                                                                                                                                                                                                     | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | List of medias associated to the product.                                                                                                                                                                    |