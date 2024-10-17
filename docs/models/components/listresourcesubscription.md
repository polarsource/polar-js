# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2024-08-13T00:48:23.012Z"),
      modifiedAt: new Date("2023-02-03T04:35:58.234Z"),
      id: "<value>",
      amount: 694444,
      currency: "Iranian Rial",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2024-11-26T18:30:45.803Z"),
      currentPeriodEnd: new Date("2022-05-28T20:04:45.914Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-08-03T21:22:08.721Z"),
      endedAt: new Date("2022-05-25T23:11:39.729Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": "<value>",
      },
      user: {
        email: "Neil.Mertz-Bins@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://tender-instance.org/",
      },
      product: {
        createdAt: new Date("2024-08-27T00:36:03.531Z"),
        modifiedAt: new Date("2023-07-03T20:25:12.002Z"),
        id: "<value>",
        name: "<value>",
        description:
          "between whoa underneath lest hospitalization gadzooks testing adult",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-11-20T11:22:28.837Z"),
            modifiedAt: new Date("2023-08-01T00:57:37.425Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 500349,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-02-22T11:19:08.608Z"),
            modifiedAt: new Date("2023-09-25T23:37:51.077Z"),
            id: "<value>",
            description: "yahoo mostly who truly quirkily",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/bin",
            mimeType: "<value>",
            size: 110280,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-06-24T00:14:24.030Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-06-07T00:46:55.861Z"),
            sizeReadable: "<value>",
            publicUrl: "https://bulky-chops.info",
          },
        ],
      },
      price: {
        createdAt: new Date("2024-03-29T15:24:18.964Z"),
        modifiedAt: new Date("2023-06-19T13:40:00.682Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 879644,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 855199,
    maxPage: 153811,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |