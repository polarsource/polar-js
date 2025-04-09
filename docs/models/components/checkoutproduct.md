# CheckoutProduct

Product data for a checkout session.

## Example Usage

```typescript
import { CheckoutProduct } from "@polar-sh/sdk/models/components/checkoutproduct.js";

let value: CheckoutProduct = {
  createdAt: new Date("2023-07-11T03:33:42.639Z"),
  modifiedAt: new Date("2023-06-27T21:42:50.186Z"),
  id: "<value>",
  name: "<value>",
  description:
    "yippee afore as jacket woefully stupendous or embody pish furthermore",
  recurringInterval: "month",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-02-17T11:51:37.189Z"),
      modifiedAt: new Date("2024-02-02T06:39:25.110Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 767501,
      maximumAmount: 55836,
      presetAmount: 99942,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-05-05T03:36:07.701Z"),
      modifiedAt: new Date("2023-04-03T08:59:52.381Z"),
      id: "<value>",
      type: "downloadables",
      description:
        "suburban indeed mealy vainly since split drat restfully char",
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
      path: "/Users",
      mimeType: "<value>",
      size: 456422,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-12-06T08:10:56.135Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2023-01-19T13:19:06.839Z"),
      sizeReadable: "<value>",
      publicUrl: "https://soulful-jury.org/",
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
| `prices`                                                                                             | *components.CheckoutProductPrices*[]                                                                 | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | [components.BenefitBase](../../models/components/benefitbase.md)[]                                   | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |