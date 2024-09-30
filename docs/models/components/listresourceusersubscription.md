# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2024-01-03T01:33:43.374Z"),
      modifiedAt: new Date("2023-04-08T23:57:40.969Z"),
      id: "<value>",
      amount: 265507,
      currency: "Yuan Renminbi",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2024-03-25T08:28:26.995Z"),
      currentPeriodEnd: new Date("2024-09-20T19:47:52.089Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-11-21T00:49:05.762Z"),
      endedAt: new Date("2023-12-14T06:58:44.385Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      product: {
        createdAt: new Date("2023-04-09T07:17:04.384Z"),
        modifiedAt: new Date("2022-02-16T20:12:23.300Z"),
        id: "<value>",
        name: "<value>",
        description: "psst coaxingly shameful after abaft commonly before",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-04-14T16:09:06.266Z"),
            modifiedAt: new Date("2022-04-13T09:59:21.377Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            minimumAmount: 148641,
            maximumAmount: 447016,
            presetAmount: 140083,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-22T02:08:23.621Z"),
            modifiedAt: new Date("2022-02-11T18:35:59.936Z"),
            id: "<value>",
            type: "downloadables",
            description: "unto electrify between fully",
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
            path: "/boot",
            mimeType: "<value>",
            size: 677203,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-06-06T06:43:30.345Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-05-19T10:41:19.543Z"),
            sizeReadable: "<value>",
            publicUrl: "https://unique-nudge.biz",
          },
        ],
      },
      price: {
        createdAt: new Date("2022-08-03T01:37:55.590Z"),
        modifiedAt: new Date("2024-03-13T11:02:48.884Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 522529,
    maxPage: 858802,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |