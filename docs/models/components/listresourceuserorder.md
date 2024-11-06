# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2023-12-26T14:51:25.668Z"),
      modifiedAt: new Date("2022-05-20T06:52:25.822Z"),
      id: "<value>",
      amount: 432280,
      taxAmount: 416624,
      currency: "Denar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2023-07-27T00:25:02.800Z"),
        modifiedAt: new Date("2023-02-08T00:40:57.806Z"),
        id: "<value>",
        name: "<value>",
        description:
          "viciously scorn silk meaningfully likewise hmph angrily order cautiously",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-02-24T18:09:40.072Z"),
            modifiedAt: new Date("2023-03-03T23:09:58.976Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 920234,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-30T08:52:26.881Z"),
            modifiedAt: new Date("2023-04-30T13:46:10.741Z"),
            id: "<value>",
            description: "incidentally deduce with",
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
            path: "/private",
            mimeType: "<value>",
            size: 979665,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-07-27T18:33:03.482Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-06-15T05:10:45.704Z"),
            sizeReadable: "<value>",
            publicUrl: "https://adolescent-descendant.info/",
          },
        ],
        organization: {
          createdAt: new Date("2023-04-18T12:27:46.530Z"),
          modifiedAt: new Date("2024-08-29T14:37:53.760Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://jagged-willow.name",
          bio: "<value>",
          company: "Pollich - Kunze",
          blog: "<value>",
          location: "<value>",
          email: "Sophie62@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 832589,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 366410,
          donationsEnabled: false,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-03-03T23:38:16.866Z"),
        modifiedAt: new Date("2022-11-18T13:05:27.659Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2023-06-21T22:56:39.250Z"),
        modifiedAt: new Date("2024-11-14T14:23:19.654Z"),
        id: "<value>",
        amount: 986623,
        currency: "Lari",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2022-01-09T23:21:30.384Z"),
        currentPeriodEnd: new Date("2022-07-11T14:54:03.454Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-10-22T22:05:47.312Z"),
        endedAt: new Date("2022-02-02T06:15:52.112Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 100976,
    maxPage: 420647,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |