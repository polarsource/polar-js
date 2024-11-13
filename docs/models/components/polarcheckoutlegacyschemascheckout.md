# PolarCheckoutLegacySchemasCheckout

A checkout session.

## Example Usage

```typescript
import { PolarCheckoutLegacySchemasCheckout } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutLegacySchemasCheckout = {
  id: "<id>",
  customerEmail: "<value>",
  customerName: "<value>",
  product: {
    createdAt: new Date("2023-04-12T03:41:23.498Z"),
    modifiedAt: new Date("2023-12-29T22:55:04.311Z"),
    id: "<value>",
    name: "<value>",
    description: "digit loyally internal pastel healthily per",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-11-29T16:28:43.939Z"),
        modifiedAt: new Date("2024-03-14T21:12:21.541Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-05-18T21:51:08.310Z"),
        modifiedAt: new Date("2022-04-28T02:22:10.521Z"),
        id: "<value>",
        type: "discord",
        description: "as across haversack hasty wee regularly for premier",
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
        size: 33295,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-03-31T01:33:21.843Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-15T15:41:01.316Z"),
        sizeReadable: "<value>",
        publicUrl: "https://negative-cruelty.com",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-08-23T14:07:24.267Z"),
    modifiedAt: new Date("2022-07-08T20:28:56.674Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 808797,
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