# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2022-05-28T20:04:45.914Z"),
      modifiedAt: new Date("2023-08-03T21:22:08.721Z"),
      id: "<value>",
      amount: 132268,
      currency: "Netherlands Antillian Guilder",
      recurringInterval: "year",
      status: "unpaid",
      currentPeriodStart: new Date("2023-10-15T13:29:16.655Z"),
      currentPeriodEnd: new Date("2022-03-21T09:16:05.859Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-03-09T15:41:33.926Z"),
      endedAt: new Date("2022-12-11T17:51:13.874Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": "<value>",
      },
      user: {
        email: "Abel_Koss@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://gifted-event.com",
      },
      product: {
        createdAt: new Date("2023-08-21T18:12:26.248Z"),
        modifiedAt: new Date("2022-03-31T12:16:51.444Z"),
        id: "<value>",
        name: "<value>",
        description: "oxidize except understanding ascribe upwardly qua",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-12-14T06:58:44.385Z"),
            modifiedAt: new Date("2023-04-09T07:17:04.384Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 42739,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-02-03T14:49:56.249Z"),
            modifiedAt: new Date("2022-01-16T01:02:59.626Z"),
            id: "<value>",
            description: "relieve minus ashamed apricot adjudge fibre",
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
            size: 636019,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-02-05T11:00:40.920Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-05-01T20:48:13.554Z"),
            sizeReadable: "<value>",
            publicUrl: "https://corrupt-riser.com/",
          },
        ],
      },
      price: {
        createdAt: new Date("2023-05-05T22:17:51.096Z"),
        modifiedAt: new Date("2022-06-03T12:45:41.057Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 746936,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 879644,
    maxPage: 38115,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |