# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-02-09T00:05:44.146Z"),
      modifiedAt: new Date("2023-12-05T15:42:27.623Z"),
      id: "<value>",
      amount: 142472,
      currency: "Pound Sterling",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2023-10-12T19:34:57.872Z"),
      currentPeriodEnd: new Date("2023-07-28T04:35:19.088Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-05-01T03:09:19.651Z"),
      endedAt: new Date("2022-06-10T14:36:01.082Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      user: {
        email: "Abdiel.Roob@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://unaware-translation.net/",
      },
      product: {
        createdAt: new Date("2022-01-10T11:10:36.870Z"),
        modifiedAt: new Date("2023-11-21T07:15:29.281Z"),
        id: "<value>",
        name: "<value>",
        description: "design horde though whether",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-02-27T02:13:18.268Z"),
            modifiedAt: new Date("2022-02-25T17:48:53.428Z"),
            id: "<value>",
            isArchived: false,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-02-14T00:05:59.160Z"),
            modifiedAt: new Date("2023-09-28T19:36:52.112Z"),
            id: "<value>",
            description: "lazy kick when",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 804638,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-23T08:04:09.219Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-05T14:36:30.552Z"),
            sizeReadable: "<value>",
            publicUrl: "https://flustered-pomelo.org/",
          },
        ],
      },
      price: {
        createdAt: new Date("2023-09-24T15:48:31.283Z"),
        modifiedAt: new Date("2024-11-11T12:00:22.100Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 247145,
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 524026,
    maxPage: 728387,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.SubscriptionOutput](../../models/components/subscriptionoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |