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
    createdAt: new Date("2024-11-09T00:32:22.940Z"),
    modifiedAt: new Date("2023-03-11T19:51:43.225Z"),
    id: "<value>",
    name: "<value>",
    description: "where that prance",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-06-25T04:35:26.551Z"),
        modifiedAt: new Date("2024-03-05T22:33:02.662Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 319664,
        maximumAmount: 388215,
        presetAmount: 851544,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-01-17T12:18:48.322Z"),
        modifiedAt: new Date("2022-04-01T14:34:31.000Z"),
        id: "<value>",
        type: "github_repository",
        description: "diligently now new",
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
        path: "/var/log",
        mimeType: "<value>",
        size: 806335,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-17T21:53:55.767Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-09-10T10:14:58.997Z"),
        sizeReadable: "<value>",
        publicUrl: "https://grounded-tenant.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-06-17T04:35:28.321Z"),
    modifiedAt: new Date("2023-10-08T10:08:37.588Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 396101,
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