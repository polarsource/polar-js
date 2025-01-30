# CheckoutLegacy

A checkout session.

## Example Usage

```typescript
import { CheckoutLegacy } from "@polar-sh/sdk/models/components/checkoutlegacy.js";

let value: CheckoutLegacy = {
  id: "<id>",
  customerEmail: "<value>",
  customerName: "<value>",
  product: {
    createdAt: new Date("2025-01-14T23:41:16.557Z"),
    modifiedAt: new Date("2024-12-24T17:17:57.453Z"),
    id: "<value>",
    name: "<value>",
    description: "into so beside worth aha",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-04-03T03:19:40.194Z"),
        modifiedAt: new Date("2025-11-14T23:46:27.525Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 967421,
        maximumAmount: 96914,
        presetAmount: 928334,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-02-19T17:19:26.112Z"),
        modifiedAt: new Date("2024-02-02T14:43:20.833Z"),
        id: "<value>",
        type: "downloadables",
        description:
          "where continually taxicab meanwhile whoa and shabby vulgarise geez",
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
        size: 805620,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-07-29T10:09:09.367Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-03-25T03:51:27.034Z"),
        sizeReadable: "<value>",
        publicUrl: "https://sweet-yarmulke.com",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-02-09T18:57:00.819Z"),
    modifiedAt: new Date("2025-06-14T21:21:42.344Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 376639,
    maximumAmount: 398935,
    presetAmount: 572046,
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