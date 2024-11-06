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
    createdAt: new Date("2023-10-22T07:26:03.546Z"),
    modifiedAt: new Date("2023-07-17T20:00:09.846Z"),
    id: "<value>",
    name: "<value>",
    description:
      "whether border boo fledgling developmental arrogantly midwife out substitution",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-09-08T01:04:48.170Z"),
        modifiedAt: new Date("2023-04-16T04:46:35.940Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 670168,
        maximumAmount: 424591,
        presetAmount: 708007,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-08-25T17:28:28.690Z"),
        modifiedAt: new Date("2023-10-18T13:42:30.603Z"),
        id: "<value>",
        type: "license_keys",
        description: "furthermore saturate aw sadly ah and poor right",
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
        path: "/var/mail",
        mimeType: "<value>",
        size: 407209,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-04-26T21:45:53.740Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-07-13T01:37:39.797Z"),
        sizeReadable: "<value>",
        publicUrl: "https://afraid-honesty.name/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-10-29T06:16:02.069Z"),
    modifiedAt: new Date("2024-08-27T16:44:25.827Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 873618,
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