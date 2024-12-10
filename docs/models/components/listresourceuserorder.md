# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2022-12-16T04:49:07.856Z"),
      modifiedAt: new Date("2024-03-14T06:20:25.850Z"),
      id: "<value>",
      amount: 404758,
      taxAmount: 747629,
      currency: "Peso Uruguayo",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2023-10-16T08:57:15.593Z"),
        modifiedAt: new Date("2022-06-29T15:57:49.931Z"),
        id: "<value>",
        name: "<value>",
        description:
          "cooperative questionable atop up obesity easily eek fine and stigmatize",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-01-18T05:10:09.456Z"),
            modifiedAt: new Date("2023-02-16T10:14:16.859Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 129469,
            maximumAmount: 15406,
            presetAmount: 386742,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-12-21T15:28:22.104Z"),
            modifiedAt: new Date("2023-05-23T12:39:44.257Z"),
            id: "<value>",
            type: "ads",
            description: "pick creature with where that",
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
            path: "/usr/lib",
            mimeType: "<value>",
            size: 670961,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-05T10:39:39.567Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-01T20:06:37.720Z"),
            sizeReadable: "<value>",
            publicUrl: "https://narrow-toothpick.net/",
          },
        ],
        organization: {
          createdAt: new Date("2022-04-14T18:09:20.036Z"),
          modifiedAt: new Date("2024-05-01T17:51:17.309Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://superior-interior.net",
          bio: "<value>",
          company: "Funk - Stroman",
          blog: "<value>",
          location: "<value>",
          email: "Granville45@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 316392,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 906531,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2022-04-13T08:26:12.730Z"),
        modifiedAt: new Date("2022-11-25T02:16:52.879Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 469043,
      },
      subscription: {
        createdAt: new Date("2022-06-22T02:05:53.320Z"),
        modifiedAt: new Date("2022-09-22T18:12:46.467Z"),
        id: "<value>",
        amount: 933299,
        currency: "Russian Ruble",
        recurringInterval: "year",
        status: "past_due",
        currentPeriodStart: new Date("2022-01-03T23:42:04.530Z"),
        currentPeriodEnd: new Date("2022-06-09T11:47:38.531Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-01-29T03:47:52.443Z"),
        endedAt: new Date("2024-02-23T14:31:52.929Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 852973,
    maxPage: 585550,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |