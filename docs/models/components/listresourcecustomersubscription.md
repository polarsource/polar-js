# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2022-03-04T10:13:58.711Z"),
      modifiedAt: new Date("2022-10-26T20:34:22.774Z"),
      id: "<value>",
      amount: 72124,
      currency: "Kyat",
      recurringInterval: "month",
      status: "trialing",
      currentPeriodStart: new Date("2024-05-14T22:15:44.887Z"),
      currentPeriodEnd: new Date("2024-09-17T19:20:42.432Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-07-01T14:29:36.398Z"),
      endedAt: new Date("2022-11-02T18:12:33.953Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-06-03T02:39:13.052Z"),
        modifiedAt: new Date("2022-05-04T17:14:22.025Z"),
        id: "<value>",
        name: "<value>",
        description: "yippee narrate apud fully curse decisive",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-09-19T18:07:16.947Z"),
            modifiedAt: new Date("2023-04-22T10:31:33.307Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-08T08:09:49.487Z"),
            modifiedAt: new Date("2024-02-05T02:33:57.609Z"),
            id: "<value>",
            type: "ads",
            description: "husky avalanche squid noxious connect amused",
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
            path: "/private",
            mimeType: "<value>",
            size: 473905,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-01-29T05:16:30.896Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-10-19T23:23:19.077Z"),
            sizeReadable: "<value>",
            publicUrl: "https://impolite-bowling.name",
          },
        ],
        organization: {
          createdAt: new Date("2022-01-29T22:14:42.973Z"),
          modifiedAt: new Date("2024-02-25T14:45:53.645Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://partial-sunbeam.net/",
          bio: "<value>",
          company: "Kemmer Inc",
          blog: "<value>",
          location: "<value>",
          email: "Garnett_Conroy@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 982213,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 872528,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2023-02-09T12:38:41.237Z"),
        modifiedAt: new Date("2022-03-15T02:39:13.427Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 342521,
        maximumAmount: 245684,
        presetAmount: 608551,
      },
    },
  ],
  pagination: {
    totalCount: 720164,
    maxPage: 292425,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |