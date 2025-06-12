# CheckoutProduct

Product data for a checkout session.

## Example Usage

```typescript
import { CheckoutProduct } from "@polar-sh/sdk/models/components/checkoutproduct.js";

let value: CheckoutProduct = {
  createdAt: new Date("2023-07-11T03:33:42.639Z"),
  modifiedAt: new Date("2025-08-26T16:53:10.047Z"),
  id: "<value>",
  name: "<value>",
  description:
    "on softly elegantly knotty duh tepid slather woot fervently lest",
  recurringInterval: "month",
  isRecurring: true,
  isArchived: true,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2023-10-17T08:25:07.058Z"),
      modifiedAt: new Date("2025-06-06T14:25:42.735Z"),
      id: "<value>",
      isArchived: true,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-11-27T19:18:37.761Z"),
      modifiedAt: new Date("2024-10-18T19:17:56.937Z"),
      type: "license_keys",
      description: "of siege geez happily",
      selectable: false,
      deletable: true,
      organizationId: "<value>",
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/usr/include",
      mimeType: "<value>",
      size: 496688,
      storageVersion: null,
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-02-05T19:40:37.393Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-11-17T07:41:12.479Z"),
      sizeReadable: "<value>",
      publicUrl: "https://lumpy-baseboard.biz/",
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
| `benefits`                                                                                           | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                               | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |