# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-14T23:04:50.870Z"),
        modifiedAt: new Date("2024-03-16T02:17:53.200Z"),
        id: "<value>",
        amount: 173551,
        currency: "Convertible Marks",
        recurringInterval: "year",
        status: "active",
        currentPeriodStart: new Date("2025-08-24T14:55:07.414Z"),
        currentPeriodEnd: new Date("2023-06-21T00:29:30.646Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-01-17T06:32:59.005Z"),
        startedAt: new Date("2024-09-30T15:59:26.427Z"),
        endsAt: new Date("2023-03-30T17:49:29.666Z"),
        endedAt: new Date("2025-09-04T21:49:33.036Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-08-12T20:22:46.865Z"),
          modifiedAt: new Date("2025-06-26T09:22:19.433Z"),
          id: "<value>",
          name: "<value>",
          description: "scarcely huddle underneath lazily westernise near",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-01-06T12:13:28.450Z"),
              modifiedAt: new Date("2025-08-22T16:23:18.387Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 153538,
              maximumAmount: 263528,
              presetAmount: 47284,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-06-26T22:34:08.319Z"),
              modifiedAt: new Date("2025-12-06T06:30:21.750Z"),
              id: "<value>",
              type: "discord",
              description:
                "second-hand daily ah bony whoa casket now unwieldy drab gah",
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
              path: "/Network",
              mimeType: "<value>",
              size: 914677,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-09-06T23:42:55.571Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-10-25T18:33:51.208Z"),
              sizeReadable: "<value>",
              publicUrl: "https://oval-density.net",
            },
          ],
          organization: {
            createdAt: new Date("2023-10-25T16:59:49.088Z"),
            modifiedAt: new Date("2024-02-05T17:30:45.548Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://helpful-armoire.com",
            bio: "<value>",
            company: "Bayer, Ziemann and Zemlak",
            blog: "<value>",
            location: "<value>",
            email: "Delilah21@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 598582,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 552784,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        price: {
          createdAt: new Date("2025-08-27T06:22:43.425Z"),
          modifiedAt: new Date("2024-12-22T12:29:01.001Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 864215,
          maximumAmount: 286973,
          presetAmount: 73370,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 258318,
      maxPage: 494252,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |