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
    createdAt: new Date("2022-04-22T00:10:50.995Z"),
    modifiedAt: new Date("2023-06-14T22:00:04.745Z"),
    id: "<value>",
    name: "<value>",
    description: "Fully-configurable impactful emulation",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-12-12T17:59:43.779Z"),
        modifiedAt: new Date("2023-10-20T03:23:15.846Z"),
        id: "<value>",
        isArchived: false,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-23T08:46:33.172Z"),
        modifiedAt: new Date("2022-07-25T08:20:28.144Z"),
        id: "<value>",
        type: "github_repository",
        description: "Virtual client-driven collaboration",
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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 779154,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-22T15:24:08.414Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-10-31T05:11:34.005Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-05-03T19:56:19.516Z"),
    modifiedAt: new Date("2022-12-19T06:40:56.361Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 284779,
    recurringInterval: "month",
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