# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-03-02T21:37:18.320Z"),
        modifiedAt: new Date("2023-02-21T14:52:32.135Z"),
        id: "<value>",
        amount: 54714,
        currency: "Singapore Dollar",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2024-05-06T10:26:17.942Z"),
        currentPeriodEnd: new Date("2024-01-07T22:26:18.708Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-07-25T09:39:53.212Z"),
        startedAt: new Date("2024-08-17T15:09:29.883Z"),
        endsAt: new Date("2024-04-14T15:28:24.459Z"),
        endedAt: new Date("2025-01-20T07:20:38.657Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-04-08T04:45:27.878Z"),
          modifiedAt: new Date("2023-09-30T02:37:21.700Z"),
          id: "<value>",
          name: "<value>",
          description: "below upon frivolous",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-12-23T07:19:02.739Z"),
              modifiedAt: new Date("2024-08-31T18:10:45.518Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 341152,
              maximumAmount: 162317,
              presetAmount: 374045,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-08-16T05:15:12.672Z"),
              modifiedAt: new Date("2025-06-02T04:28:57.188Z"),
              id: "<value>",
              type: "custom",
              description:
                "questionably afore why log sashay for phooey readmit",
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
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 783015,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-01-12T04:38:06.746Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-03-01T00:40:00.692Z"),
              sizeReadable: "<value>",
              publicUrl: "https://impractical-junior.com/",
            },
          ],
          organization: {
            createdAt: new Date("2023-11-12T19:38:21.336Z"),
            modifiedAt: new Date("2023-01-08T08:46:22.557Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://round-minor.net/",
            email: "Lazaro_Brakus55@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "instagram",
                url: "https://experienced-toaster.org/",
              },
            ],
            detailsSubmittedAt: new Date("2025-05-24T02:47:14.110Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Gibson, Kerluke and Mueller",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 448738,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 40615,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2023-09-12T13:24:15.510Z"),
          modifiedAt: new Date("2024-02-24T09:44:42.882Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 218577,
        },
        prices: [
          {
            createdAt: new Date("2025-06-04T03:12:57.765Z"),
            modifiedAt: new Date("2023-07-31T08:10:03.337Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 528166,
            maximumAmount: 253592,
            presetAmount: 730873,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 44630,
      maxPage: 757818,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |