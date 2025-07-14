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
      createdAt: new Date("2023-04-20T12:52:58.852Z"),
      modifiedAt: new Date("2023-04-03T08:59:52.381Z"),
      id: "<value>",
      amountType: "metered_unit",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 660745,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2025-01-02T09:29:19.773Z"),
      modifiedAt: new Date("2025-02-05T18:27:31.976Z"),
      type: "downloadables",
      description:
        "considering superior about toward fortunately eek internationalize wedge enrage",
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
      path: "/usr/X11R6",
      mimeType: "<value>",
      size: 327832,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: null,
      version: "<value>",
      service: "product_media",
      isUploaded: true,
      createdAt: new Date("2023-11-10T03:13:37.813Z"),
      sizeReadable: "<value>",
      publicUrl: "https://warlike-tinderbox.com",
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