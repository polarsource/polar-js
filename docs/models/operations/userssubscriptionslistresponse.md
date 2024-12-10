# UsersSubscriptionsListResponse

## Example Usage

```typescript
import { UsersSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-10T04:53:42.729Z"),
        modifiedAt: new Date("2024-06-20T07:13:38.065Z"),
        id: "<value>",
        amount: 442980,
        currency: "Bulgarian Lev",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2023-06-04T19:35:25.688Z"),
        currentPeriodEnd: new Date("2023-12-29T09:49:51.089Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-08-24T06:52:47.595Z"),
        endedAt: new Date("2022-11-30T21:45:00.403Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        product: {
          createdAt: new Date("2024-09-08T18:09:01.569Z"),
          modifiedAt: new Date("2022-01-31T04:12:47.832Z"),
          id: "<value>",
          name: "<value>",
          description: "moral likewise irritably provided bravely",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-16T07:53:13.439Z"),
              modifiedAt: new Date("2024-05-14T22:15:44.887Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 904021,
              maximumAmount: 165697,
              presetAmount: 278977,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-06-03T02:39:13.052Z"),
              modifiedAt: new Date("2022-05-04T17:14:22.025Z"),
              id: "<value>",
              type: "discord",
              description: "impostor embossing yippee thankfully destock",
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
              path: "/home",
              mimeType: "<value>",
              size: 298735,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-08T07:48:14.392Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-11-30T14:18:48.145Z"),
              sizeReadable: "<value>",
              publicUrl: "https://decisive-sesame.net",
            },
          ],
          organization: {
            createdAt: new Date("2024-09-19T18:07:16.947Z"),
            modifiedAt: new Date("2023-04-22T10:31:33.307Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://rundown-drive.info",
            bio: "<value>",
            company: "Schowalter, Franecki and Smith",
            blog: "<value>",
            location: "<value>",
            email: "Seth71@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 285251,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 610802,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2022-08-11T06:09:30.010Z"),
          modifiedAt: new Date("2023-03-01T04:01:52.904Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 738230,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 178915,
      maxPage: 842036,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceUserSubscription](../../models/components/listresourceusersubscription.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |