# Product

A product.

## Example Usage

```typescript
import { Product } from "@polar-sh/sdk/models/components/product.js";

let value: Product = {
  createdAt: new Date("2023-05-16T09:46:19.201Z"),
  modifiedAt: new Date("2024-05-22T11:55:09.881Z"),
  id: "<value>",
  name: "<value>",
  description:
    "vulgarise yum near emphasize overload stiff unto excepting insidious please",
  recurringInterval: "year",
  isRecurring: false,
  isArchived: false,
  organizationId: "<value>",
  metadata: {
    "key": 90969,
  },
  prices: [
    {
      createdAt: new Date("2025-02-17T17:07:55.792Z"),
      modifiedAt: new Date("2024-07-07T14:30:14.002Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 722151,
    },
  ],
  benefits: [
    {
      createdAt: new Date("2025-12-21T12:53:01.858Z"),
      modifiedAt: new Date("2025-07-15T12:42:19.873Z"),
      id: "<value>",
      description: "deployment circa trolley from deduction yummy pish",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        imageHeight: 400,
        imageWidth: 400,
      },
    },
  ],
  medias: [
    {
      id: "<value>",
      organizationId: "<value>",
      name: "<value>",
      path: "/media",
      mimeType: "<value>",
      size: 371935,
      storageVersion: "<value>",
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
      checksumSha256Hex: "<value>",
      lastModifiedAt: new Date("2025-11-01T03:26:54.317Z"),
      version: "<value>",
      isUploaded: false,
      createdAt: new Date("2025-03-09T07:16:52.030Z"),
      sizeReadable: "<value>",
      publicUrl: "https://sour-casket.info",
    },
  ],
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2023-09-14T01:05:30.071Z"),
        modifiedAt: new Date("2023-06-05T11:40:35.040Z"),
        id: "<value>",
        metadata: {
          "key": 381639,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 947309,
      required: false,
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
| `metadata`                                                                                           | Record<string, *components.ProductMetadata*>                                                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `prices`                                                                                             | *components.Prices*[]                                                                                | :heavy_check_mark:                                                                                   | List of prices for this product.                                                                     |
| `benefits`                                                                                           | *components.Benefit*[]                                                                               | :heavy_check_mark:                                                                                   | List of benefits granted by the product.                                                             |
| `medias`                                                                                             | [components.ProductMediaFileRead](../../models/components/productmediafileread.md)[]                 | :heavy_check_mark:                                                                                   | List of medias associated to the product.                                                            |
| `attachedCustomFields`                                                                               | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                   | :heavy_check_mark:                                                                                   | List of custom fields attached to the product.                                                       |