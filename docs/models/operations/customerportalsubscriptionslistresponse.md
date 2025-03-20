# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-09T17:11:39.632Z"),
        modifiedAt: new Date("2025-09-28T01:57:20.979Z"),
        id: "<value>",
        amount: 372480,
        currency: "Rwanda Franc",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2024-05-19T07:44:52.892Z"),
        currentPeriodEnd: new Date("2025-01-07T02:38:22.039Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-12-06T14:44:50.740Z"),
        startedAt: new Date("2025-03-17T16:22:25.733Z"),
        endsAt: new Date("2025-10-21T14:53:42.812Z"),
        endedAt: new Date("2023-10-24T09:52:44.650Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-01-16T08:08:55.874Z"),
          modifiedAt: new Date("2024-11-24T18:41:39.768Z"),
          id: "<value>",
          name: "<value>",
          description: "moralise er misguided powerless meh vain obediently",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-09-14T20:25:12.952Z"),
              modifiedAt: new Date("2023-01-01T16:39:18.155Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 882085,
              maximumAmount: 370371,
              presetAmount: 135020,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-10-31T06:29:57.244Z"),
              modifiedAt: new Date("2025-01-21T14:33:59.942Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "following failing whose interestingly finally privilege hygienic brilliant",
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
              path: "/lib",
              mimeType: "<value>",
              size: 107457,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-09T10:04:51.542Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-06T05:23:24.419Z"),
              sizeReadable: "<value>",
              publicUrl: "https://baggy-ceramic.info/",
            },
          ],
          organization: {
            createdAt: new Date("2023-11-10T08:26:14.729Z"),
            modifiedAt: new Date("2025-08-15T18:09:46.436Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://hospitable-labourer.net/",
            email: "Tod26@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "youtube",
                url: "https://round-sundae.info/",
              },
            ],
            detailsSubmittedAt: new Date("2025-12-23T07:19:02.739Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Kuhlman, Heaney and Crooks",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 374045,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 541258,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2024-11-23T21:57:45.636Z"),
          modifiedAt: new Date("2025-05-07T05:57:08.825Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 799353,
        },
        prices: [
          {
            createdAt: new Date("2024-11-12T00:05:12.049Z"),
            modifiedAt: new Date("2023-06-03T12:36:52.658Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 40910,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 48314,
      maxPage: 391720,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |