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
    createdAt: new Date("2023-08-26T04:55:24.796Z"),
    modifiedAt: new Date("2023-12-03T06:03:57.837Z"),
    id: "<value>",
    name: "<value>",
    description: "knowingly traditionalism ghost",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-10-03T21:34:19.414Z"),
        modifiedAt: new Date("2022-03-22T23:42:49.599Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 530871,
        maximumAmount: 426323,
        presetAmount: 759464,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-02-24T17:46:42.444Z"),
        modifiedAt: new Date("2024-01-16T05:36:08.764Z"),
        id: "<value>",
        type: "discord",
        description: "hairy councilman soon",
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
        path: "/usr/src",
        mimeType: "<value>",
        size: 118794,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-11-06T18:27:01.469Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-11T04:17:24.386Z"),
        sizeReadable: "<value>",
        publicUrl: "https://oval-hovel.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-11-11T12:57:03.441Z"),
    modifiedAt: new Date("2022-06-15T12:31:01.479Z"),
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