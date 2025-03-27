# CustomerProduct

Schema of a product for customer portal.

## Example Usage

```typescript
import { CustomerProduct } from "@polar-sh/sdk/models/components/customerproduct.js";

let value: CustomerProduct = {
  createdAt: new Date("2023-05-11T09:25:22.123Z"),
  modifiedAt: new Date("2023-02-13T14:07:36.704Z"),
  id: "<value>",
  name: "<value>",
  description: "pish heavily weakly aw unless heartache",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-09-21T04:25:18.763Z"),
      modifiedAt: new Date("2025-06-08T18:22:37.952Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      createdAt: new Date("2024-02-01T09:53:39.231Z"),
      modifiedAt: new Date("2024-02-29T23:21:45.876Z"),
      id: "<value>",
      type: "license_keys",
      description: "usable gray aha",
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
      path: "/usr/bin",
      mimeType: "<value>",
      size: 777583,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-02-26T06:41:33.845Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-01-19T08:43:15.594Z"),
      sizeReadable: "<value>",
      publicUrl: "https://excellent-parsnip.info",
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