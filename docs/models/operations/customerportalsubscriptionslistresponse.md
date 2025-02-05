# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-06T19:20:56.885Z"),
        modifiedAt: new Date("2024-09-17T14:26:52.744Z"),
        id: "<value>",
        amount: 355205,
        currency: "Tugrik",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2025-10-18T21:22:24.698Z"),
        currentPeriodEnd: new Date("2025-04-22T11:09:07.785Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-03-07T10:39:53.773Z"),
        startedAt: new Date("2025-06-02T02:35:41.235Z"),
        endsAt: new Date("2024-08-19T03:32:25.730Z"),
        endedAt: new Date("2023-08-14T10:53:30.820Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-11-07T11:10:32.200Z"),
          modifiedAt: new Date("2023-11-07T09:51:48.285Z"),
          id: "<value>",
          name: "<value>",
          description: "notwithstanding solicit um via quick apud unfinished",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-09-05T16:51:20.305Z"),
              modifiedAt: new Date("2025-01-01T13:16:47.178Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-06-05T14:27:13.096Z"),
              modifiedAt: new Date("2024-08-26T21:33:54.654Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "cemetery which decongestant convoke railway singing clear huzzah even sew",
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
              path: "/etc/namedb",
              mimeType: "<value>",
              size: 837785,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-21T17:45:11.070Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-09T00:17:48.149Z"),
              sizeReadable: "<value>",
              publicUrl: "https://dead-pile.org",
            },
          ],
          organization: {
            createdAt: new Date("2023-03-30T16:27:34.642Z"),
            modifiedAt: new Date("2023-01-11T02:56:26.303Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://staid-heartbeat.info",
            bio: "<value>",
            company: "Smitham Group",
            blog: "<value>",
            location: "<value>",
            email: "Bruce_Littel14@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 215097,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 517526,
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
          createdAt: new Date("2025-04-19T15:12:09.561Z"),
          modifiedAt: new Date("2023-03-27T08:21:58.735Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 898190,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 753003,
      maxPage: 154610,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |