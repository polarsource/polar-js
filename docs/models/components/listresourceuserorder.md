# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2022-04-06T03:24:49.820Z"),
      modifiedAt: new Date("2022-07-30T22:07:34.485Z"),
      id: "<value>",
      amount: 852445,
      taxAmount: 24522,
      currency: "Kenyan Shilling",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2024-05-27T19:49:50.767Z"),
        modifiedAt: new Date("2022-04-20T21:11:30.522Z"),
        id: "<value>",
        name: "<value>",
        description: "correctly ha provided unless",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-11-16T17:16:25.681Z"),
            modifiedAt: new Date("2024-04-25T08:20:17.706Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 300321,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-12-04T09:37:55.219Z"),
            modifiedAt: new Date("2022-04-20T00:24:10.846Z"),
            id: "<value>",
            description:
              "absent midst before serene scientific aboard tremendously geez ah",
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
            path: "/usr/X11R6",
            mimeType: "<value>",
            size: 438281,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-04-16T09:16:04.113Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-31T06:08:34.343Z"),
            sizeReadable: "<value>",
            publicUrl: "https://winged-statue.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-08-31T01:40:43.170Z"),
        modifiedAt: new Date("2024-04-30T16:47:28.347Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
      subscription: {
        createdAt: new Date("2022-03-19T21:53:46.097Z"),
        modifiedAt: new Date("2023-01-11T06:39:44.285Z"),
        id: "<value>",
        amount: 479021,
        currency: "East Caribbean Dollar",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2022-04-15T20:23:47.603Z"),
        currentPeriodEnd: new Date("2023-03-20T09:04:49.131Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-08-11T08:24:04.543Z"),
        endedAt: new Date("2024-09-18T05:15:49.402Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 294879,
    maxPage: 308864,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |