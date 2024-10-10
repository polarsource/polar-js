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
    createdAt: new Date("2023-01-19T13:22:59.390Z"),
    modifiedAt: new Date("2023-03-24T08:43:04.460Z"),
    id: "<value>",
    name: "<value>",
    description:
      "glittering parched now fashion judgementally yak through excitedly steep",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-09-14T07:43:31.648Z"),
        modifiedAt: new Date("2023-09-10T05:55:09.703Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-07-09T15:57:29.739Z"),
        modifiedAt: new Date("2022-03-05T03:05:50.686Z"),
        id: "<value>",
        type: "downloadables",
        description:
          "zowie vibration abaft grizzled despite quarrelsomely mesh cuckoo",
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
        path: "/lost+found",
        mimeType: "<value>",
        size: 766004,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-03-28T13:18:59.699Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-09-07T06:13:39.585Z"),
        sizeReadable: "<value>",
        publicUrl: "https://secret-rim.org/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-01-22T23:18:37.610Z"),
    modifiedAt: new Date("2023-03-02T13:30:13.678Z"),
    id: "<value>",
    isArchived: false,
    recurringInterval: "year",
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