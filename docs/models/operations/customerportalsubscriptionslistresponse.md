# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-17T14:15:47.145Z"),
        modifiedAt: new Date("2023-01-17T04:26:28.465Z"),
        id: "<value>",
        amount: 603437,
        currency: "Aruban Guilder",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2025-09-14T17:23:49.285Z"),
        currentPeriodEnd: new Date("2024-12-11T11:25:49.041Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-02-04T00:06:32.788Z"),
        startedAt: new Date("2024-09-07T18:44:00.744Z"),
        endsAt: new Date("2023-03-26T23:06:39.615Z"),
        endedAt: new Date("2023-04-01T00:38:08.817Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-05-14T02:27:58.691Z"),
          modifiedAt: new Date("2024-08-02T14:29:39.309Z"),
          id: "<value>",
          name: "<value>",
          description: "which milky rotten yahoo though gut neatly",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-11-17T05:07:47.437Z"),
              modifiedAt: new Date("2025-06-03T00:37:14.106Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 900208,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-25T04:35:19.601Z"),
              modifiedAt: new Date("2023-11-26T14:30:46.698Z"),
              id: "<value>",
              type: "custom",
              description: "foretell given scarcely huddle underneath lazily",
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
              path: "/usr/libdata",
              mimeType: "<value>",
              size: 361350,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-01T19:51:18.551Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-06-13T06:37:29.999Z"),
              sizeReadable: "<value>",
              publicUrl: "https://lawful-wear.net",
            },
          ],
          organization: {
            createdAt: new Date("2023-05-27T18:45:21.938Z"),
            modifiedAt: new Date("2024-01-20T10:45:07.072Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://stable-sticker.name",
            bio: "<value>",
            company: "Hirthe - Hauck",
            blog: "<value>",
            location: "<value>",
            email: "Candida16@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 431433,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 905909,
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
          createdAt: new Date("2025-05-21T02:16:12.635Z"),
          modifiedAt: new Date("2024-12-30T09:58:26.971Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 999020,
      maxPage: 716292,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |