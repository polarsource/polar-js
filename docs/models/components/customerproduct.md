# CustomerProduct

Schema of a product for customer portal.

## Example Usage

```typescript
import { CustomerProduct } from "@polar-sh/sdk/models/components/customerproduct.js";

let value: CustomerProduct = {
  id: "<value>",
  createdAt: new Date("2024-08-01T14:57:17.701Z"),
  modifiedAt: null,
  trialInterval: "week",
  trialIntervalCount: 275288,
  name: "<value>",
  description: "wherever relative who above speedily",
  visibility: "public",
  recurringInterval: "week",
  recurringIntervalCount: 240276,
  isRecurring: false,
  isArchived: true,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-06-08T17:45:59.840Z"),
      modifiedAt: new Date("2025-11-13T21:16:35.629Z"),
      id: "<value>",
      source: "catalog",
      amountType: "custom",
      priceCurrency: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      minimumAmount: 722126,
      maximumAmount: 935259,
      presetAmount: 52456,
      legacy: true,
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2024-03-14T00:55:02.549Z"),
      modifiedAt: new Date("2024-09-16T13:02:40.897Z"),
      type: "custom",
      description: "considering speedily for into across extricate",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/Applications",
      mimeType: "<value>",
      size: 764885,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2024-04-23T23:01:02.489Z"),
      version: "<value>",
      service: "product_media",
      isUploaded: true,
      createdAt: new Date("2025-12-09T18:31:15.290Z"),
      sizeReadable: "<value>",
      publicUrl: "https://winding-godfather.name/",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                                                         | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the object.                                                                                                                                                                                        |
| `createdAt`                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Creation timestamp of the object.                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                | :heavy_check_mark:                                                                                                                                                                                           | Last modification timestamp of the object.                                                                                                                                                                   |
| `trialInterval`                                                                                                                                                                                              | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The interval unit for the trial period.                                                                                                                                                                      |
| `trialIntervalCount`                                                                                                                                                                                         | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The number of interval units for the trial period.                                                                                                                                                           |
| `name`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The name of the product.                                                                                                                                                                                     |
| `description`                                                                                                                                                                                                | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The description of the product.                                                                                                                                                                              |
| `visibility`                                                                                                                                                                                                 | [components.ProductVisibility](../../models/components/productvisibility.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `recurringInterval`                                                                                                                                                                                          | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                        |
| `recurringIntervalCount`                                                                                                                                                                                     | *number*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | Number of interval units of the subscription. If this is set to 1 the charge will happen every interval (e.g. every month), if set to 2 it will be every other month, and so on. None for one-time products. |
| `isRecurring`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is a subscription.                                                                                                                                                                       |
| `isArchived`                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                           | Whether the product is archived and no longer available.                                                                                                                                                     |
| `organizationId`                                                                                                                                                                                             | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | The ID of the organization owning the product.                                                                                                                                                               |
| `prices`                                                                                                                                                                                                     | *components.CustomerProductPrices*[]                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | List of available prices for this product.                                                                                                                                                                   |
| `benefits`                                                                                                                                                                                                   | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                           | The benefits granted by the product.                                                                                                                                                                         |
| `medias`                                                                                                                                                                                                     | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | The medias associated to the product.                                                                                                                                                                        |