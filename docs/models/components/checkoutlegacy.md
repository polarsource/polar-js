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
    createdAt: new Date("2023-09-03T22:41:08.280Z"),
    modifiedAt: new Date("2025-04-27T10:53:52.931Z"),
    id: "<value>",
    name: "<value>",
    description:
      "eek suspiciously preheat lanky politely feminize deduction sometimes",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-04-07T08:31:51.847Z"),
        modifiedAt: new Date("2025-09-20T05:01:32.162Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-10-03T14:15:25.440Z"),
        modifiedAt: new Date("2025-12-29T11:39:30.330Z"),
        id: "<value>",
        type: "downloadables",
        description: "frizzy entire minor since tomatillo",
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
        path: "/srv",
        mimeType: "<value>",
        size: 275363,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-11-12T01:21:46.772Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-09-09T03:43:52.763Z"),
        sizeReadable: "<value>",
        publicUrl: "https://frank-papa.info/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-04-17T05:13:34.787Z"),
    modifiedAt: new Date("2025-10-14T10:52:25.199Z"),
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