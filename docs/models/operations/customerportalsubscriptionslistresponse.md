# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-02T19:53:46.631Z"),
        modifiedAt: new Date("2023-02-26T18:40:53.349Z"),
        id: "<value>",
        amount: 268983,
        currency: "Pula",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2025-05-20T07:30:27.714Z"),
        currentPeriodEnd: new Date("2024-02-08T23:41:54.694Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-08-11T12:21:42.277Z"),
        startedAt: new Date("2025-10-13T00:16:32.775Z"),
        endsAt: new Date("2024-10-28T23:02:26.222Z"),
        endedAt: new Date("2025-10-01T18:18:50.926Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-07-27T06:20:15.256Z"),
          modifiedAt: new Date("2023-10-21T09:02:15.702Z"),
          id: "<value>",
          name: "<value>",
          description: "qua malfunction primary astride dwell",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-08-01T12:48:52.738Z"),
              modifiedAt: new Date("2023-11-28T03:21:01.284Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 658850,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-06T19:30:28.000Z"),
              modifiedAt: new Date("2024-11-19T14:53:38.504Z"),
              id: "<value>",
              type: "custom",
              description:
                "consequently oh pivot dwell versus bashfully tennis well-to-do",
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
              size: 439430,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-05-20T19:39:00.147Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-11-18T17:39:49.893Z"),
              sizeReadable: "<value>",
              publicUrl: "https://unfortunate-loaf.info/",
            },
          ],
          organization: {
            createdAt: new Date("2025-04-10T18:04:09.458Z"),
            modifiedAt: new Date("2023-04-23T09:19:33.086Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://oblong-embossing.net/",
            email: "Lonie12@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "other",
                url: "https://dramatic-lotion.biz/",
              },
            ],
            detailsSubmittedAt: new Date("2025-07-20T07:55:16.790Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Abbott - Brakus",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 357399,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 882085,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2025-10-31T06:29:57.244Z"),
          modifiedAt: new Date("2025-01-21T14:33:59.942Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 704462,
          maximumAmount: 906438,
          presetAmount: 176940,
        },
        prices: [
          {
            createdAt: new Date("2025-12-09T06:26:42.930Z"),
            modifiedAt: new Date("2023-08-18T03:32:33.499Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 571477,
      maxPage: 515412,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |