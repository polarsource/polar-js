# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2022-12-23T01:26:30.649Z"),
      modifiedAt: new Date("2022-09-16T04:04:59.142Z"),
      id: "<value>",
      amount: 735902,
      currency: "Cape Verde Escudo",
      recurringInterval: "year",
      status: "unpaid",
      currentPeriodStart: new Date("2023-04-29T14:20:35.511Z"),
      currentPeriodEnd: new Date("2024-06-09T09:10:09.556Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-07-04T12:44:41.019Z"),
      endedAt: new Date("2024-05-23T20:16:16.759Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      product: {
        createdAt: new Date("2024-11-20T20:44:10.098Z"),
        modifiedAt: new Date("2023-07-21T15:47:00.097Z"),
        id: "<value>",
        name: "<value>",
        description: "whenever per own brr about",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-06-29T02:21:22.949Z"),
            modifiedAt: new Date("2023-10-19T22:57:45.544Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 634880,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-11-22T13:47:16.167Z"),
            modifiedAt: new Date("2024-07-14T15:27:37.349Z"),
            id: "<value>",
            description: "unused furthermore quietly around towards concerned",
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
            size: 132268,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-02-03T10:22:11.476Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-30T18:05:35.215Z"),
            sizeReadable: "<value>",
            publicUrl: "https://parched-bell.com",
          },
        ],
      },
      price: {
        createdAt: new Date("2022-01-05T05:42:14.405Z"),
        modifiedAt: new Date("2024-07-12T13:55:51.903Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 468580,
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 884147,
    maxPage: 500776,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |