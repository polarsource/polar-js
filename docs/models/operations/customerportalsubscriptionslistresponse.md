# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-10T11:08:28.622Z"),
        modifiedAt: new Date("2025-08-01T11:31:35.018Z"),
        id: "<value>",
        amount: 435964,
        currency: "Namibia Dollar",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2024-02-23T17:53:28.293Z"),
        currentPeriodEnd: new Date("2024-06-04T23:43:59.093Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-07-26T13:42:22.696Z"),
        startedAt: new Date("2025-12-12T06:24:34.907Z"),
        endsAt: new Date("2024-04-26T18:30:27.337Z"),
        endedAt: new Date("2023-07-16T18:10:41.850Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-05-10T15:41:14.073Z"),
          modifiedAt: new Date("2023-04-17T09:47:01.324Z"),
          id: "<value>",
          name: "<value>",
          description: "ack hmph while majestically antelope laughter",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-08-09T00:56:14.811Z"),
              modifiedAt: new Date("2023-10-31T13:15:27.208Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 665561,
              maximumAmount: 392247,
              presetAmount: 822840,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-26T04:36:45.032Z"),
              modifiedAt: new Date("2025-12-07T00:57:57.571Z"),
              id: "<value>",
              type: "meter_credit",
              description: "ugh whose bah regularly which as gah",
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
              path: "/etc/ppp",
              mimeType: "<value>",
              size: 890652,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-08-26T06:18:23.587Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-22T18:47:28.341Z"),
              sizeReadable: "<value>",
              publicUrl: "https://muddy-swath.biz/",
            },
          ],
          organization: {
            createdAt: new Date("2025-06-03T22:50:44.302Z"),
            modifiedAt: new Date("2025-11-06T19:28:38.303Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://ambitious-bar.info",
            email: "Herman31@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "linkedin",
                url: "https://lumbering-tapioca.info/",
              },
            ],
            detailsSubmittedAt: new Date("2023-07-20T17:39:40.181Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Weber Group",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 40627,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 104975,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2023-05-10T18:55:29.918Z"),
          modifiedAt: new Date("2025-09-17T09:33:40.140Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 375207,
        },
        prices: [
          {
            createdAt: new Date("2023-05-14T01:30:26.069Z"),
            modifiedAt: new Date("2023-10-13T20:44:48.321Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 630469,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 977233,
      maxPage: 930959,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |