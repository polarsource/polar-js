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
    createdAt: new Date("2023-07-30T06:16:46.899Z"),
    modifiedAt: new Date("2024-01-08T22:15:44.580Z"),
    id: "<value>",
    name: "<value>",
    description: "boohoo whether meanwhile zowie pants goodwill behind",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-06T14:18:27.483Z"),
        modifiedAt: new Date("2023-05-13T12:52:00.880Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 901357,
        maximumAmount: 810244,
        presetAmount: 619301,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-14T12:09:16.429Z"),
        modifiedAt: new Date("2025-05-01T18:15:09.156Z"),
        id: "<value>",
        type: "ads",
        description:
          "questionably pale whereas jet likewise miserable captain digitize",
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
        path: "/home/user",
        mimeType: "<value>",
        size: 390854,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-11-20T22:00:18.063Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-04T12:58:35.956Z"),
        sizeReadable: "<value>",
        publicUrl: "https://responsible-meander.net",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-09-19T09:06:06.239Z"),
    modifiedAt: new Date("2025-06-03T18:58:37.464Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
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