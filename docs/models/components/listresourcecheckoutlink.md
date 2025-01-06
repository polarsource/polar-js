# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2025-02-27T23:43:34.291Z"),
      modifiedAt: new Date("2023-12-17T08:06:24.932Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://overdue-making.com/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2023-05-11T03:13:41.281Z"),
        modifiedAt: new Date("2025-10-14T06:10:04.916Z"),
        id: "<value>",
        name: "<value>",
        description: "whoever gah boohoo oh transcend for ack",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-05-03T04:09:06.657Z"),
            modifiedAt: new Date("2025-04-28T14:16:56.411Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 668154,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-02T13:11:55.885Z"),
            modifiedAt: new Date("2024-08-05T05:54:35.974Z"),
            id: "<value>",
            type: "ads",
            description:
              "blah per verbally merrily legend punctually amid joyously gee hateful",
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
            path: "/usr/include",
            mimeType: "<value>",
            size: 936796,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-01-18T18:59:13.114Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-10-05T21:58:09.997Z"),
            sizeReadable: "<value>",
            publicUrl: "https://drab-handful.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-08-23T12:17:46.590Z"),
        modifiedAt: new Date("2024-04-28T19:57:08.545Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 119158,
        createdAt: new Date("2025-06-15T07:00:27.081Z"),
        modifiedAt: new Date("2024-04-29T09:33:54.132Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-01-01T03:57:20.246Z"),
        endsAt: new Date("2023-05-07T01:41:54.981Z"),
        maxRedemptions: 368343,
        redemptionsCount: 397657,
        organizationId: "<value>",
      },
      url: "https://memorable-tomography.info",
    },
  ],
  pagination: {
    totalCount: 66963,
    maxPage: 457962,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |