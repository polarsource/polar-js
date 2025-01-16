# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-05-27T20:34:46.070Z"),
        modifiedAt: new Date("2023-04-14T01:43:46.701Z"),
        id: "<value>",
        amount: 297239,
        currency: "Pa'anga",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2024-08-09T12:03:56.304Z"),
        currentPeriodEnd: new Date("2025-09-22T19:19:28.493Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-11-20T10:48:09.719Z"),
        startedAt: new Date("2023-03-28T21:20:40.864Z"),
        endsAt: new Date("2025-11-05T12:32:55.334Z"),
        endedAt: new Date("2025-11-19T00:13:51.965Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-01-20T19:32:27.742Z"),
          modifiedAt: new Date("2024-01-22T16:24:11.216Z"),
          id: "<value>",
          name: "<value>",
          description:
            "pish including since neat because oval phooey fervently ugh",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-11T14:07:26.855Z"),
              modifiedAt: new Date("2025-08-27T06:22:43.425Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 658321,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-08-05T04:18:33.269Z"),
              modifiedAt: new Date("2023-11-11T12:32:14.872Z"),
              id: "<value>",
              type: "custom",
              description: "railway raw lest ouch",
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
              path: "/var/mail",
              mimeType: "<value>",
              size: 600315,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-11-04T22:28:05.369Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-08T16:43:50.985Z"),
              sizeReadable: "<value>",
              publicUrl: "https://taut-loaf.org",
            },
          ],
          organization: {
            createdAt: new Date("2023-05-07T05:33:43.269Z"),
            modifiedAt: new Date("2025-10-04T22:06:31.923Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://spirited-cd.org/",
            bio: "<value>",
            company: "Weber, Lowe and Dare",
            blog: "<value>",
            location: "<value>",
            email: "Lily87@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 874430,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 390177,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2025-12-13T14:03:27.995Z"),
          modifiedAt: new Date("2024-03-03T10:05:18.387Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 815604,
          maximumAmount: 589781,
          presetAmount: 314640,
        },
      },
    ],
    pagination: {
      totalCount: 411795,
      maxPage: 352333,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |