# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-27T23:21:06.966Z"),
        modifiedAt: new Date("2025-06-27T03:13:29.237Z"),
        id: "<value>",
        amount: 501927,
        currency: "Dong",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2023-09-15T22:08:04.776Z"),
        currentPeriodEnd: new Date("2024-05-28T00:20:31.956Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-12-23T06:57:30.946Z"),
        startedAt: new Date("2024-02-04T02:52:21.238Z"),
        endsAt: new Date("2025-06-08T19:56:40.719Z"),
        endedAt: new Date("2024-09-22T13:32:53.211Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-04-02T11:54:26.834Z"),
          modifiedAt: new Date("2023-01-20T19:56:19.663Z"),
          id: "<value>",
          name: "<value>",
          description: "energetic trench huzzah",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-10T11:26:33.315Z"),
              modifiedAt: new Date("2023-04-13T17:03:05.752Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 932673,
              maximumAmount: 219152,
              presetAmount: 960608,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-03-22T02:40:57.081Z"),
              modifiedAt: new Date("2025-06-28T08:33:23.677Z"),
              id: "<value>",
              type: "downloadables",
              description: "word phooey teriyaki lone blond violently",
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
              path: "/opt/include",
              mimeType: "<value>",
              size: 419388,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-18T04:58:40.240Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-09-15T05:06:15.214Z"),
              sizeReadable: "<value>",
              publicUrl: "https://radiant-guide.name/",
            },
          ],
          organization: {
            createdAt: new Date("2025-07-02T14:54:25.092Z"),
            modifiedAt: new Date("2023-12-27T07:31:25.586Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://uncomfortable-grouper.net/",
            email: "Randy.Cartwright@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "facebook",
                url: "https://splendid-poppy.biz",
              },
            ],
            detailsSubmittedAt: new Date("2023-11-27T20:35:45.574Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Labadie, Gusikowski and Padberg",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 959106,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 82541,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2023-12-16T22:02:36.366Z"),
          modifiedAt: new Date("2024-04-22T20:28:41.681Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 318346,
          maximumAmount: 897469,
          presetAmount: 54574,
        },
        prices: [
          {
            createdAt: new Date("2024-10-21T00:03:57.501Z"),
            modifiedAt: new Date("2023-08-15T22:53:15.957Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 153854,
            maximumAmount: 361934,
            presetAmount: 803469,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 846919,
      maxPage: 646599,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |