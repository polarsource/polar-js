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
    createdAt: new Date("2023-10-10T22:41:15.933Z"),
    modifiedAt: new Date("2022-10-30T11:14:17.437Z"),
    id: "<value>",
    name: "<value>",
    description: "amongst supposing elastic",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-04-14T04:11:39.460Z"),
        modifiedAt: new Date("2022-08-10T02:00:43.034Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 116887,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-09-05T16:37:05.169Z"),
        modifiedAt: new Date("2022-12-14T10:57:14.837Z"),
        id: "<value>",
        type: "ads",
        description: "how sushi smoothly shout conclude twist",
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
        path: "/lib",
        mimeType: "<value>",
        size: 898086,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-02-26T05:37:22.947Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-02-03T07:11:24.720Z"),
        sizeReadable: "<value>",
        publicUrl: "https://proud-lobster.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-11-17T01:41:28.180Z"),
    modifiedAt: new Date("2022-07-20T06:31:48.274Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 259129,
    maximumAmount: 120583,
    presetAmount: 594602,
    recurringInterval: "year",
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