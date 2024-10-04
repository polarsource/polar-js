# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2024-10-01T14:57:07.623Z"),
      modifiedAt: new Date("2022-12-22T17:33:21.807Z"),
      id: "<value>",
      amount: 497004,
      currency: "Kenyan Shilling",
      recurringInterval: "month",
      status: "canceled",
      currentPeriodStart: new Date("2024-10-21T22:24:15.953Z"),
      currentPeriodEnd: new Date("2023-11-29T21:43:15.995Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-11-15T00:33:49.692Z"),
      endedAt: new Date("2022-07-28T17:27:23.627Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      product: {
        createdAt: new Date("2023-09-11T01:48:22.048Z"),
        modifiedAt: new Date("2024-01-22T07:34:32.676Z"),
        id: "<value>",
        name: "<value>",
        description: "own brr about beneath prime gee clonk gloss",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-03-28T20:30:08.294Z"),
            modifiedAt: new Date("2023-05-28T13:15:05.433Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 845404,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-04-06T13:33:00.045Z"),
            modifiedAt: new Date("2024-08-13T00:48:23.012Z"),
            id: "<value>",
            description: "noisily as switchboard because tray",
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
            path: "/srv",
            mimeType: "<value>",
            size: 120241,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-07-05T08:33:29.105Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-10-21T15:19:12.004Z"),
            sizeReadable: "<value>",
            publicUrl: "https://puzzled-barge.info",
          },
        ],
      },
      price: {
        createdAt: new Date("2024-03-26T00:27:29.858Z"),
        modifiedAt: new Date("2022-05-05T06:24:54.553Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 866917,
        maximumAmount: 502432,
        presetAmount: 947573,
      },
    },
  ],
  pagination: {
    totalCount: 537321,
    maxPage: 769226,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |