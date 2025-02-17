# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2025-01-19T16:48:57.666Z"),
      modifiedAt: new Date("2025-06-23T05:40:17.320Z"),
      id: "<value>",
      metadata: {
        "key": 344243,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://gullible-hammock.net/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2025-02-18T04:27:42.766Z"),
        modifiedAt: new Date("2025-06-25T05:15:41.596Z"),
        id: "<value>",
        name: "<value>",
        description:
          "rotating happily till since while between small until since regarding",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-03T21:26:34.888Z"),
            modifiedAt: new Date("2025-03-17T14:39:57.805Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-09-03T09:44:13.946Z"),
            modifiedAt: new Date("2023-04-30T02:32:00.110Z"),
            id: "<value>",
            type: "license_keys",
            description:
              "yuck whup arrogantly provided last ew fully zowie indeed cope",
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
            path: "/var/yp",
            mimeType: "<value>",
            size: 413308,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-09T23:31:28.664Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-04-09T16:36:06.881Z"),
            sizeReadable: "<value>",
            publicUrl: "https://deafening-pulse.biz/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-10-09T00:49:09.882Z"),
        modifiedAt: new Date("2024-08-19T11:50:24.629Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 144856,
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 49900,
        currency: "Belarusian Ruble",
        createdAt: new Date("2025-01-07T02:49:45.816Z"),
        modifiedAt: new Date("2024-06-06T12:48:42.851Z"),
        id: "<value>",
        metadata: {
          "key": 458275,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-10-11T08:44:45.015Z"),
        endsAt: new Date("2025-06-23T11:20:33.120Z"),
        maxRedemptions: 980145,
        redemptionsCount: 939233,
        organizationId: "<value>",
      },
      url: "https://aware-zen.info",
    },
  ],
  pagination: {
    totalCount: 60997,
    maxPage: 991424,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |