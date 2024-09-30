# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2022-12-24T14:03:33.657Z"),
      modifiedAt: new Date("2024-07-22T20:45:22.257Z"),
      id: "<value>",
      amount: 888328,
      currency: "Euro",
      recurringInterval: "month",
      status: "canceled",
      currentPeriodStart: new Date("2023-09-26T04:44:57.014Z"),
      currentPeriodEnd: new Date("2022-04-29T05:14:00.990Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-03-14T20:35:42.999Z"),
      endedAt: new Date("2022-12-30T20:55:35.607Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      user: {
        email: "Helen61@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://mediocre-retention.biz/",
      },
      product: {
        createdAt: new Date("2022-08-21T00:23:22.376Z"),
        modifiedAt: new Date("2024-01-20T23:07:05.447Z"),
        id: "<value>",
        name: "<value>",
        description:
          "an representation lest aha analyse firm than given jealously",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-12-30T09:32:24.672Z"),
            modifiedAt: new Date("2023-10-26T08:38:31.722Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 939368,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-10-23T20:18:15.326Z"),
            modifiedAt: new Date("2023-05-05T14:18:17.602Z"),
            id: "<value>",
            description: "a yet coolly but pick creature with",
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
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 233076,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-10-17T21:27:41.163Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-09T09:24:23.665Z"),
            sizeReadable: "<value>",
            publicUrl: "https://entire-scratch.net/",
          },
        ],
      },
      price: {
        createdAt: new Date("2024-10-02T10:43:07.540Z"),
        modifiedAt: new Date("2023-01-05T23:07:42.228Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 28818,
      },
    },
  ],
  pagination: {
    totalCount: 637419,
    maxPage: 737600,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.SubscriptionOutput](../../models/components/subscriptionoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |