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
    createdAt: new Date("2024-11-11T01:49:22.411Z"),
    modifiedAt: new Date("2023-04-04T15:00:02.168Z"),
    id: "<value>",
    name: "<value>",
    description: "fooey saturate chilly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-04-14T16:58:20.839Z"),
        modifiedAt: new Date("2025-06-02T22:15:58.153Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 920481,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-09-20T05:01:32.162Z"),
        modifiedAt: new Date("2025-10-03T14:15:25.440Z"),
        id: "<value>",
        type: "license_keys",
        description:
          "legging sophisticated heating stage what embossing than glittering sauerkraut",
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
        path: "/dev",
        mimeType: "<value>",
        size: 686979,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-11T05:53:16.436Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-05-20T14:58:08.242Z"),
        sizeReadable: "<value>",
        publicUrl: "https://agreeable-outlaw.biz/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-09-07T19:02:09.571Z"),
    modifiedAt: new Date("2024-06-29T18:16:50.237Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 117700,
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