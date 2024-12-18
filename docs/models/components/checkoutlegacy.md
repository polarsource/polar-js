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
    createdAt: new Date("2023-07-25T02:37:30.530Z"),
    modifiedAt: new Date("2022-03-31T15:24:09.344Z"),
    id: "<value>",
    name: "<value>",
    description:
      "heavenly vibrant happy tankful alive overdub while exactly terrorise",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-29T02:45:28.314Z"),
        modifiedAt: new Date("2022-01-02T20:18:32.549Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-06-10T01:19:46.711Z"),
        modifiedAt: new Date("2024-10-02T16:46:38.458Z"),
        id: "<value>",
        type: "custom",
        description: "fooey excitedly tentacle even monstrous plait indeed",
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
        path: "/home/user/dir",
        mimeType: "<value>",
        size: 912070,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-11-29T05:37:45.875Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-30T23:53:33.954Z"),
        sizeReadable: "<value>",
        publicUrl: "https://robust-advertisement.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-11-30T12:43:32.164Z"),
    modifiedAt: new Date("2022-03-05T10:15:44.066Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
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