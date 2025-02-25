# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-29T15:36:24.115Z"),
        modifiedAt: new Date("2023-01-01T04:22:41.062Z"),
        id: "<value>",
        amount: 582858,
        currency: "Falkland Islands Pound",
        recurringInterval: "year",
        status: "active",
        currentPeriodStart: new Date("2025-08-04T03:42:51.281Z"),
        currentPeriodEnd: new Date("2023-01-26T19:28:14.217Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-09-13T10:44:13.753Z"),
        startedAt: new Date("2024-06-03T15:32:33.741Z"),
        endsAt: new Date("2025-01-09T22:21:42.922Z"),
        endedAt: new Date("2024-09-15T19:50:08.604Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-10-03T17:42:06.024Z"),
          modifiedAt: new Date("2025-01-07T21:03:02.220Z"),
          id: "<value>",
          name: "<value>",
          description:
            "blacken among reassuringly er monthly where passionate stuff indeed",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-04-22T21:51:55.442Z"),
              modifiedAt: new Date("2025-08-26T04:18:23.907Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 963937,
              maximumAmount: 973534,
              presetAmount: 824871,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-09-05T14:39:24.069Z"),
              modifiedAt: new Date("2023-04-03T15:24:33.492Z"),
              id: "<value>",
              type: "discord",
              description: "commodity marksman knowingly per so fatherly",
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
              path: "/usr/share",
              mimeType: "<value>",
              size: 927431,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-09-16T18:48:09.238Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-05-03T07:33:03.370Z"),
              sizeReadable: "<value>",
              publicUrl: "https://cuddly-tuber.com",
            },
          ],
          organization: {
            createdAt: new Date("2025-06-21T20:04:56.598Z"),
            modifiedAt: new Date("2023-08-11T17:27:25.041Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://scratchy-basket.net/",
            bio: "<value>",
            company: "Shields - Kuvalis",
            blog: "<value>",
            location: "<value>",
            email: "Keaton.Feil@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 811890,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 575333,
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
          createdAt: new Date("2023-04-17T18:29:01.984Z"),
          modifiedAt: new Date("2023-07-05T18:48:28.877Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 865562,
        },
      },
    ],
    pagination: {
      totalCount: 524615,
      maxPage: 613784,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |