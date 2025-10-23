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
  recurringIntervalCount: null,
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  prices: [
    {
      createdAt: new Date("2024-02-13T16:10:48.243Z"),
      modifiedAt: new Date("2025-01-21T17:16:14.204Z"),
      id: "<value>",
      amountType: "seat_based",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: null,
      priceCurrency: "<value>",
      seatTiers: {
        tiers: [
          {
            minSeats: 922152,
            pricePerSeat: 415895,
          },
        ],
      },
    },
  ],
  benefits: [
    {
      id: "<value>",
      createdAt: new Date("2023-01-24T18:47:57.919Z"),
      modifiedAt: new Date("2025-10-21T11:30:14.929Z"),
      type: "github_repository",
      description:
        "mockingly despite aw guidance defensive once at understated admonish",
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
      path: "/home/user",
      mimeType: "<value>",
      size: 715587,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: null,
      version: "<value>",
      service: "product_media",
      isUploaded: false,
      createdAt: new Date("2025-12-06T11:20:59.061Z"),
      sizeReadable: "<value>",
      publicUrl: "https://gaseous-markup.net",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `metadata`                                                                                                                                                                                                 | Record<string, *components.CheckoutLinkProductMetadata*>                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |
| `id`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The ID of the object.                                                                                                                                                                                      |
| `createdAt`                                                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                              | :heavy_check_mark:                                                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                                                          |
| `modifiedAt`                                                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                              | :heavy_check_mark:                                                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                                                 |
| `trialInterval`                                                                                                                                                                                            | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                         | The interval unit for the trial period.                                                                                                                                                                    |
| `trialIntervalCount`                                                                                                                                                                                       | *number*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The number of interval units for the trial period.                                                                                                                                                         |
| `name`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The name of the product.                                                                                                                                                                                   |
| `description`                                                                                                                                                                                              | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The description of the product.                                                                                                                                                                            |
| `recurringInterval`                                                                                                                                                                                        | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                                                         | The recurring interval of the product. If `None`, the product is a one-time purchase.                                                                                                                      |
| `recurringIntervalCount`                                                                                                                                                                                   | *number*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | Number of interval units of the subscription.If this is set to 1 the charge will happen every interval (e.g. every month),if set to 2 it will be every other month, and so on. None for one-time products. |
| `isRecurring`                                                                                                                                                                                              | *boolean*                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                         | Whether the product is a subscription.                                                                                                                                                                     |
| `isArchived`                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                         | Whether the product is archived and no longer available.                                                                                                                                                   |
| `organizationId`                                                                                                                                                                                           | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The ID of the organization owning the product.                                                                                                                                                             |
| `prices`                                                                                                                                                                                                   | *components.CheckoutLinkProductPrices*[]                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | List of prices for this product.                                                                                                                                                                           |
| `benefits`                                                                                                                                                                                                 | [components.BenefitPublic](../../models/components/benefitpublic.md)[]                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                         | List of benefits granted by the product.                                                                                                                                                                   |
| `medias`                                                                                                                                                                                                   | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                         | List of medias associated to the product.                                                                                                                                                                  |