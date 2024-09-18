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
    createdAt: new Date("2023-10-02T09:51:49.346Z"),
    modifiedAt: new Date("2023-10-09T07:19:47.340Z"),
    id: "<value>",
    name: "<value>",
    description: "Upgradable optimizing task-force",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [],
    benefits: [
      {
        createdAt: new Date("2024-10-22T16:07:37.247Z"),
        modifiedAt: new Date("2023-10-16T10:44:14.107Z"),
        id: "<value>",
        type: "license_keys",
        description: "Total foreground productivity",
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
        path: "/opt/bin",
        mimeType: "<value>",
        size: 211534,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-06-11T23:57:33.459Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-18T10:24:49.909Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-12-21T19:27:59.096Z"),
    modifiedAt: new Date("2024-09-12T00:58:19.414Z"),
    id: "<value>",
    priceCurrency: "<value>",
    isArchived: false,
    priceAmount: 862063,
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