# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-27T16:32:19.117Z"),
        modifiedAt: new Date("2025-06-09T16:32:01.402Z"),
        id: "<value>",
        amount: 549795,
        currency: "Tala",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2023-02-02T22:34:01.781Z"),
        currentPeriodEnd: new Date("2024-10-12T11:20:21.267Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-10-12T12:35:35.775Z"),
        startedAt: new Date("2023-08-24T20:56:46.594Z"),
        endsAt: new Date("2024-03-23T19:55:15.274Z"),
        endedAt: new Date("2023-05-12T05:27:49.525Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-11-22T17:39:04.610Z"),
          modifiedAt: new Date("2023-12-12T19:18:18.470Z"),
          id: "<value>",
          name: "<value>",
          description: "throbbing courageous gah lively about",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-08-24T20:03:18.837Z"),
              modifiedAt: new Date("2024-06-14T11:17:00.227Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 560512,
              maximumAmount: 301002,
              presetAmount: 914385,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-07-21T15:03:42.701Z"),
              modifiedAt: new Date("2024-07-02T20:27:58.335Z"),
              id: "<value>",
              type: "github_repository",
              description: "pro possession suburban smug actually about since",
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
              path: "/usr/libexec",
              mimeType: "<value>",
              size: 783242,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-11-23T20:23:59.357Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-05-02T07:36:13.592Z"),
              sizeReadable: "<value>",
              publicUrl: "https://accurate-swanling.info",
            },
          ],
          organization: {
            createdAt: new Date("2024-09-26T17:09:06.903Z"),
            modifiedAt: new Date("2023-09-12T03:10:25.417Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://heartfelt-plumber.name",
            bio: "<value>",
            company: "Lemke, Sporer and Harber",
            blog: "<value>",
            location: "<value>",
            email: "Mellie.Brown12@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 372070,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 980280,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
          },
        },
        price: {
          createdAt: new Date("2024-02-11T21:16:08.870Z"),
          modifiedAt: new Date("2023-11-28T16:53:58.024Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 365974,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 656900,
      maxPage: 77675,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |