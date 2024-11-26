# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [
    {
      createdAt: new Date("2024-06-30T09:18:46.693Z"),
      modifiedAt: new Date("2023-02-18T14:55:40.419Z"),
      id: "<value>",
      amount: 28088,
      currency: "Yen",
      recurringInterval: "month",
      status: "trialing",
      currentPeriodStart: new Date("2024-12-15T17:30:31.626Z"),
      currentPeriodEnd: new Date("2024-07-28T15:50:46.966Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-09-17T03:43:51.884Z"),
      endedAt: new Date("2023-02-17T01:18:56.856Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      product: {
        createdAt: new Date("2023-04-18T13:22:03.376Z"),
        modifiedAt: new Date("2024-04-17T04:47:37.706Z"),
        id: "<value>",
        name: "<value>",
        description: "jump whoever among",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-10-28T16:59:00.609Z"),
            modifiedAt: new Date("2024-11-09T15:56:51.918Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-04-10T19:29:52.339Z"),
            modifiedAt: new Date("2024-11-07T23:21:57.092Z"),
            id: "<value>",
            description:
              "best-seller instead sonar availability even which filthy ah",
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
            path: "/home/user",
            mimeType: "<value>",
            size: 78486,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-11-17T18:41:58.866Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-07-09T05:45:55.648Z"),
            sizeReadable: "<value>",
            publicUrl: "https://babyish-affiliate.net/",
          },
        ],
        organization: {
          createdAt: new Date("2022-07-26T07:48:42.795Z"),
          modifiedAt: new Date("2022-10-20T05:47:37.552Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://criminal-sushi.biz/",
          bio: "<value>",
          company: "Cruickshank, Fritsch and Stroman",
          blog: "<value>",
          location: "<value>",
          email: "Dolores_Bechtelar84@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 798619,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 961171,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2024-01-16T01:22:24.438Z"),
        modifiedAt: new Date("2022-10-20T07:59:07.851Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 649661,
        maximumAmount: 474867,
        presetAmount: 405542,
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 797903,
    maxPage: 934608,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |