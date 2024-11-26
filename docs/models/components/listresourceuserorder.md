# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2023-11-20T04:44:06.594Z"),
      modifiedAt: new Date("2024-04-28T22:11:42.800Z"),
      id: "<value>",
      amount: 485097,
      taxAmount: 648414,
      currency: "Solomon Islands Dollar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2024-03-19T17:13:45.452Z"),
        modifiedAt: new Date("2022-01-02T21:42:42.464Z"),
        id: "<value>",
        name: "<value>",
        description: "past footrest knight",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-08-17T20:58:31.938Z"),
            modifiedAt: new Date("2024-01-18T22:37:38.992Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 768361,
            maximumAmount: 320760,
            presetAmount: 559209,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-06-25T17:55:44.890Z"),
            modifiedAt: new Date("2024-11-22T15:42:40.032Z"),
            id: "<value>",
            description: "down glorious favorite instead by knottily",
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
            path: "/usr/include",
            mimeType: "<value>",
            size: 268878,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-12-02T08:07:08.018Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-12-01T19:09:40.569Z"),
            sizeReadable: "<value>",
            publicUrl: "https://empty-meatloaf.org",
          },
        ],
        organization: {
          createdAt: new Date("2024-03-09T09:33:22.960Z"),
          modifiedAt: new Date("2023-01-04T15:22:03.493Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://well-lit-gazebo.net",
          bio: "<value>",
          company: "Tremblay - Boyer",
          blog: "<value>",
          location: "<value>",
          email: "Kari_OConner@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 546014,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 812186,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-08-17T23:04:53.906Z"),
        modifiedAt: new Date("2024-01-08T21:27:35.981Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      subscription: {
        createdAt: new Date("2022-04-06T05:17:56.944Z"),
        modifiedAt: new Date("2023-06-01T13:31:39.531Z"),
        id: "<value>",
        amount: 860144,
        currency: "Metical",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2022-04-16T13:07:21.369Z"),
        currentPeriodEnd: new Date("2023-11-18T18:26:23.317Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-04-10T15:42:56.368Z"),
        endedAt: new Date("2024-05-07T05:17:18.959Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 256742,
    maxPage: 538752,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |