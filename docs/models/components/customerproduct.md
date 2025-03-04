# CustomerProduct

Schema of a product for customer portal.

## Example Usage

```typescript
import { CustomerProduct } from "@polar-sh/sdk/models/components/customerproduct.js";

let value: CustomerProduct = {
  createdAt: new Date("2023-12-17T16:38:04.549Z"),
  modifiedAt: new Date("2025-04-19T01:05:03.927Z"),
  id: "<value>",
  name: "<value>",
  description: "via and or request equally dearly",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-01-24T11:44:28.978Z"),
      modifiedAt: new Date("2024-04-27T16:09:54.349Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 734282,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-01-03T21:20:38.344Z"),
      modifiedAt: new Date("2025-09-10T07:57:41.624Z"),
      id: "<value>",
      type: "discord",
      description:
        "unwieldy mmm till until character ultimate notarize innocent pneumonia",
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
      path: "/var",
      mimeType: "<value>",
      size: 398498,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2023-04-16T17:30:39.955Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-11-04T13:06:12.786Z"),
      sizeReadable: "<value>",
      publicUrl: "https://impure-pacemaker.com/",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product.                                                                               |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the product.                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the product.                                                                      |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | The recurring interval of the product. If `None`, the product is a one-time purchase.                |
| `isRecurring`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is a subscription.                                                               |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is archived and no longer available.                                             |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the product.                                                       |
| `prices`                                                                                             | *components.CustomerProductPrices*[]                                                                 | :heavy_check_mark:                                                                                   | List of available prices for this product.                                                           |
| `benefits`                                                                                           | [components.BenefitBase](../../models/components/benefitbase.md)[]                                   | :heavy_check_mark:                                                                                   | The benefits granted by the product.                                                                 |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | The medias associated to the product.                                                                |