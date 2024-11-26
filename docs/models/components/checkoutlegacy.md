# CheckoutLegacy

A checkout session.

## Example Usage

```typescript
import { CheckoutLegacy } from "@polar-sh/sdk/models/components";

let value: CheckoutLegacy = {
  id: "<id>",
  customerEmail: "<value>",
  customerName: "<value>",
  product: {
    createdAt: new Date("2024-05-29T22:40:34.959Z"),
    modifiedAt: new Date("2022-01-01T03:57:20.246Z"),
    id: "<value>",
    name: "<value>",
    description: "boastfully circumnavigate however",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-09-21T10:09:14.320Z"),
        modifiedAt: new Date("2024-04-01T05:07:23.085Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 923240,
        maximumAmount: 437621,
        presetAmount: 627810,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-11T12:40:25.231Z"),
        modifiedAt: new Date("2023-10-12T03:17:54.906Z"),
        id: "<value>",
        type: "ads",
        description: "cinema without apostrophize",
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
        size: 459536,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-02-28T06:12:59.898Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-02-02T19:05:41.893Z"),
        sizeReadable: "<value>",
        publicUrl: "https://confused-adrenalin.name/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-04-19T15:04:21.495Z"),
    modifiedAt: new Date("2024-04-18T01:45:32.126Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 883379,
    recurringInterval: "month",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The ID of the checkout.                                                  |
| `url`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | URL the customer should be redirected to complete the purchase.          |
| `customerEmail`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `customerName`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `product`                                                                | [components.CheckoutProduct](../../models/components/checkoutproduct.md) | :heavy_check_mark:                                                       | Product data for a checkout session.                                     |
| `productPrice`                                                           | *components.ProductPrice*                                                | :heavy_check_mark:                                                       | N/A                                                                      |