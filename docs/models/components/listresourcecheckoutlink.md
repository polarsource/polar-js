# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2025-09-30T14:20:49.162Z"),
      modifiedAt: new Date("2024-01-31T23:13:50.155Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://ruddy-junior.info/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2023-09-11T20:14:52.407Z"),
        modifiedAt: new Date("2025-12-18T06:02:19.380Z"),
        id: "<value>",
        name: "<value>",
        description: "malfunction keel tune-up",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-03-21T05:24:16.803Z"),
            modifiedAt: new Date("2023-07-07T13:31:28.655Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 634157,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-10-02T08:39:37.015Z"),
            modifiedAt: new Date("2025-05-19T10:16:04.212Z"),
            id: "<value>",
            type: "ads",
            description:
              "pivot proud gee yippee hm white scorn as thankfully vista",
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
            path: "/etc/mail",
            mimeType: "<value>",
            size: 396784,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-02-23T08:23:08.142Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-27T18:36:35.061Z"),
            sizeReadable: "<value>",
            publicUrl: "https://roasted-gown.net",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-06-26T13:10:48.126Z"),
        modifiedAt: new Date("2023-12-24T14:14:54.996Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 747067,
      },
      discount: {
        duration: "once",
        type: "percentage",
        amount: 767388,
        currency: "Syrian Pound",
        createdAt: new Date("2025-04-10T01:04:29.834Z"),
        modifiedAt: new Date("2023-04-16T01:33:18.918Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-02-18T20:51:07.229Z"),
        endsAt: new Date("2023-08-29T18:03:19.269Z"),
        maxRedemptions: 567567,
        redemptionsCount: 345865,
        organizationId: "<value>",
      },
      url: "https://rowdy-step.org",
    },
  ],
  pagination: {
    totalCount: 799564,
    maxPage: 141549,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |