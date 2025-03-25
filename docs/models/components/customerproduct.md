# CustomerProduct

Schema of a product for customer portal.

## Example Usage

```typescript
import { CustomerProduct } from "@polar-sh/sdk/models/components/customerproduct.js";

let value: CustomerProduct = {
  createdAt: new Date("2025-03-21T10:59:46.035Z"),
  modifiedAt: new Date("2024-03-12T09:34:16.987Z"),
  id: "<value>",
  name: "<value>",
  description: "jaggedly readmit intellect blah certification about freely",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-07-03T06:02:08.606Z"),
      modifiedAt: new Date("2025-04-28T21:26:57.802Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 399165,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2023-11-22T18:08:51.311Z"),
      modifiedAt: new Date("2023-11-11T01:24:16.150Z"),
      id: "<value>",
      type: "github_repository",
      description: "deeply consequently pfft drat via and",
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
      path: "/usr/local/src",
      mimeType: "<value>",
      size: 802027,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-11-26T13:01:36.250Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-04-20T14:32:08.849Z"),
      sizeReadable: "<value>",
      publicUrl: "https://intrepid-larva.net/",
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