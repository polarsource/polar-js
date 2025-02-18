# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-04T21:22:38.582Z"),
        modifiedAt: new Date("2025-04-30T01:58:10.702Z"),
        id: "<value>",
        amount: 126102,
        currency: "Somali Shilling",
        recurringInterval: "year",
        status: "active",
        currentPeriodStart: new Date("2024-06-10T13:58:52.529Z"),
        currentPeriodEnd: new Date("2023-04-12T13:16:40.715Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-09-02T04:01:25.237Z"),
        startedAt: new Date("2024-12-05T13:27:11.598Z"),
        endsAt: new Date("2025-08-14T21:58:30.720Z"),
        endedAt: new Date("2023-09-17T23:22:47.269Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-06-13T08:12:46.565Z"),
          modifiedAt: new Date("2023-10-01T17:38:56.757Z"),
          id: "<value>",
          name: "<value>",
          description: "lest twine nun",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-09-28T04:30:28.795Z"),
              modifiedAt: new Date("2023-11-16T15:57:42.226Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 614757,
              maximumAmount: 331190,
              presetAmount: 894698,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-01-09T02:39:11.825Z"),
              modifiedAt: new Date("2025-07-21T19:03:37.383Z"),
              id: "<value>",
              type: "ads",
              description:
                "but throughout finally cautiously tightly who since whether large into",
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
              path: "/proc",
              mimeType: "<value>",
              size: 267685,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-05-29T13:25:31.981Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-07T20:16:32.554Z"),
              sizeReadable: "<value>",
              publicUrl: "https://burly-warming.net",
            },
          ],
          organization: {
            createdAt: new Date("2023-04-03T00:34:21.849Z"),
            modifiedAt: new Date("2025-11-28T02:21:09.295Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://alive-declaration.name",
            bio: "<value>",
            company: "Beatty, Kling and Borer",
            blog: "<value>",
            location: "<value>",
            email: "Bridgette11@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 560823,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 236987,
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
          createdAt: new Date("2024-12-25T15:47:23.577Z"),
          modifiedAt: new Date("2024-11-24T16:51:06.275Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 664026,
        },
      },
    ],
    pagination: {
      totalCount: 311829,
      maxPage: 776273,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |