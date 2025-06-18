# CheckoutLinkProduct

Product data for a checkout link.

## Example Usage

```typescript
import { CheckoutLinkProduct } from "@polar-sh/sdk/models/components/checkoutlinkproduct.js";

let value: CheckoutLinkProduct = {
  metadata: {},
  createdAt: new Date("2024-01-20T21:47:18.016Z"),
  modifiedAt: new Date("2023-12-02T12:11:56.919Z"),
  id: "<value>",
  name: "<value>",
  description: "embossing so knottily imagineer pip",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2025-02-28T01:09:21.212Z"),
      modifiedAt: new Date("2023-02-15T16:10:30.309Z"),
      type: "downloadables",
      description: "drowse whoever until continually amidst gentle quadruple",
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
      path: "/private",
      mimeType: "<value>",
      size: 782007,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: null,
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2024-07-08T02:43:14.288Z"),
      sizeReadable: "<value>",
      publicUrl: "https://aged-fellow.net",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                           | Record<string, *components.CheckoutLinkProductMetadata*>                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product.                                                                               |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the product.                                                                             |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the product.                                                                      |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | The recurring interval of the product. If `None`, the product is a one-time purchase.                |
| `isRecurring`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is a subscription.                                                               |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the product is archived and no longer available.                                             |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the product.                                                       |
| `prices`                                                                                             | *components.CheckoutLinkProductPrices*[]                                                             | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                               | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |