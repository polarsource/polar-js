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
    createdAt: new Date("2022-03-16T12:13:21.445Z"),
    modifiedAt: new Date("2024-12-12T14:47:34.950Z"),
    id: "<value>",
    name: "<value>",
    description: "like astride apologise um handy into",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-08-31T13:02:18.053Z"),
        modifiedAt: new Date("2023-06-16T13:05:35.278Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 494136,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-09-30T19:30:59.394Z"),
        modifiedAt: new Date("2023-04-03T20:16:14.287Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "worth near likewise freckle offensively duh yet rarely dally woot",
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
        path: "/boot",
        mimeType: "<value>",
        size: 40256,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-12-06T04:06:39.697Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-21T02:24:58.276Z"),
        sizeReadable: "<value>",
        publicUrl: "https://smart-guide.net",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-06-05T05:25:45.254Z"),
    modifiedAt: new Date("2022-11-11T19:39:57.152Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 533877,
    maximumAmount: 813932,
    presetAmount: 403314,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | The ID of the checkout.                                         |
| `url`                                                           | *string*                                                        | :heavy_minus_sign:                                              | URL the customer should be redirected to complete the purchase. |
| `customerEmail`                                                 | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `customerName`                                                  | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `product`                                                       | [components.Product](../../models/components/product.md)        | :heavy_check_mark:                                              | A product.                                                      |
| `productPrice`                                                  | *components.ProductPrice*                                       | :heavy_check_mark:                                              | N/A                                                             |