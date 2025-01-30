# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-06-23T23:34:58.651Z"),
      modifiedAt: new Date("2025-11-01T17:29:09.841Z"),
      id: "<value>",
      metadata: {
        "key": 727645,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://aggressive-toothbrush.org",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2023-08-14T05:05:54.788Z"),
        modifiedAt: new Date("2024-03-25T01:06:23.500Z"),
        id: "<value>",
        name: "<value>",
        description: "bulky inwardly importance",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-02T06:03:57.837Z"),
            modifiedAt: new Date("2023-03-06T13:25:23.485Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 617530,
            maximumAmount: 132273,
            presetAmount: 431813,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-27T16:26:09.723Z"),
            modifiedAt: new Date("2023-08-17T19:12:36.222Z"),
            id: "<value>",
            type: "discord",
            description: "excluding break cinema",
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
            path: "/etc/ppp",
            mimeType: "<value>",
            size: 716005,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-01-15T05:36:08.764Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-07-21T09:07:41.522Z"),
            sizeReadable: "<value>",
            publicUrl: "https://tight-willow.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-01-19T20:11:42.821Z"),
        modifiedAt: new Date("2024-01-20T23:38:05.989Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "once",
        type: "fixed",
        amount: 459536,
        currency: "Indian Rupee",
        createdAt: new Date("2023-02-02T19:05:41.893Z"),
        modifiedAt: new Date("2023-08-07T11:34:37.599Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-01-14T23:04:34.235Z"),
        endsAt: new Date("2024-11-09T13:41:21.375Z"),
        maxRedemptions: 98946,
        redemptionsCount: 148389,
        organizationId: "<value>",
      },
      url: "https://sneaky-switch.com/",
    },
  ],
  pagination: {
    totalCount: 615665,
    maxPage: 619689,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |