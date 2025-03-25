# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-12T14:05:02.894Z"),
        modifiedAt: new Date("2025-12-23T03:06:01.181Z"),
        id: "<value>",
        amount: 411983,
        currency: "Kenyan Shilling",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2024-08-09T09:24:30.662Z"),
        currentPeriodEnd: new Date("2025-06-15T01:55:32.955Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-10-05T05:45:38.820Z"),
        startedAt: new Date("2024-02-07T03:33:55.701Z"),
        endsAt: new Date("2024-01-28T13:29:26.156Z"),
        endedAt: new Date("2023-04-13T05:31:32.532Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-11-24T06:43:52.548Z"),
          modifiedAt: new Date("2023-12-30T17:52:46.862Z"),
          id: "<value>",
          name: "<value>",
          description: "option sustenance edge best-seller cruelly",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-08T23:41:54.694Z"),
              modifiedAt: new Date("2023-08-11T12:21:42.277Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
              unitAmount: 916755,
              includedUnits: 712246,
              capAmount: 189109,
              meterId: "<value>",
              meter: {
                id: "<value>",
                name: "<value>",
              },
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-10-21T09:02:15.702Z"),
              modifiedAt: new Date("2023-12-06T12:31:46.283Z"),
              id: "<value>",
              type: "github_repository",
              description: "gymnast enchanted outstanding event",
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
              path: "/opt",
              mimeType: "<value>",
              size: 103848,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-09-20T12:01:51.716Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-09T01:45:15.580Z"),
              sizeReadable: "<value>",
              publicUrl: "https://unfit-agreement.info/",
            },
          ],
          organization: {
            createdAt: new Date("2025-08-01T12:48:52.738Z"),
            modifiedAt: new Date("2023-11-28T03:21:01.284Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://quick-unique.name/",
            email: "Nellie_Littel42@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "other",
                url: "https://impeccable-incandescence.com/",
              },
            ],
            detailsSubmittedAt: new Date("2024-07-29T12:09:43.909Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Barton Group",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 392271,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 424011,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2025-03-05T00:14:08.533Z"),
          modifiedAt: new Date("2024-11-05T10:32:46.494Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 672546,
          maximumAmount: 309867,
          presetAmount: 736024,
        },
        prices: [
          {
            createdAt: new Date("2024-10-06T02:26:29.970Z"),
            modifiedAt: new Date("2023-01-16T08:08:55.874Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 380775,
            maximumAmount: 904028,
            presetAmount: 940977,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 339011,
      maxPage: 532239,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |