# Checkout

A checkout session.

## Example Usage

```typescript
import { Checkout } from "@polar-sh/sdk/models/components";

let value: Checkout = {
  id: "<id>",
  customerEmail: "<value>",
  customerName: "<value>",
  product: {
    createdAt: new Date("2024-01-05T15:03:22.969Z"),
    modifiedAt: new Date("2022-07-19T07:36:17.782Z"),
    id: "<value>",
    name: "<value>",
    description: "hollow aha vivaciously who",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-06-10T07:21:24.112Z"),
        modifiedAt: new Date("2024-02-04T02:05:19.101Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-09-11T20:14:52.407Z"),
        modifiedAt: new Date("2024-12-18T06:02:19.380Z"),
        id: "<value>",
        type: "custom",
        description: "bestride how exacerbate seagull",
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
        path: "/net",
        mimeType: "<value>",
        size: 986116,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-01T11:35:03.806Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-01-20T02:42:32.862Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unusual-encouragement.org/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-02-05T22:42:58.048Z"),
    modifiedAt: new Date("2024-11-14T18:55:07.158Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 430616,
    maximumAmount: 634386,
    presetAmount: 637086,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The ID of the checkout.                                              |
| `url`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | URL the customer should be redirected to complete the purchase.      |
| `customerEmail`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `customerName`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `product`                                                            | [components.ProductOutput](../../models/components/productoutput.md) | :heavy_check_mark:                                                   | A product.                                                           |
| `productPrice`                                                       | *components.ProductPriceOutput*                                      | :heavy_check_mark:                                                   | N/A                                                                  |