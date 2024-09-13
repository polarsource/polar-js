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
    createdAt: new Date("2022-12-22T04:40:16.326Z"),
    modifiedAt: new Date("2023-08-12T11:13:21.497Z"),
    id: "<value>",
    name: "<value>",
    description: "Fully-configurable background service-desk",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "individual",
    isHighlighted: false,
    prices: [
      {
        createdAt: new Date("2023-03-21T06:56:48.424Z"),
        modifiedAt: new Date("2022-11-05T03:26:51.552Z"),
        id: "<value>",
        priceAmount: 321043,
        priceCurrency: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-09-08T11:43:43.721Z"),
        modifiedAt: new Date("2024-03-19T00:44:08.177Z"),
        id: "<value>",
        type: "ads",
        description: "Configurable intangible methodology",
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
        path: "/etc",
        mimeType: "<value>",
        size: 703218,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-31T13:59:13.213Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-27T17:25:10.266Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-11-17T05:16:39.880Z"),
    modifiedAt: new Date("2024-09-01T15:48:48.906Z"),
    id: "<value>",
    priceAmount: 103298,
    priceCurrency: "<value>",
    isArchived: false,
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