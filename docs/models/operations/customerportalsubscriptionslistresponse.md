# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-07T18:35:11.871Z"),
        modifiedAt: new Date("2023-06-27T13:14:11.326Z"),
        id: "<value>",
        amount: 688621,
        currency: "Nepalese Rupee",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-10-14T20:33:57.787Z"),
        currentPeriodEnd: new Date("2023-04-17T06:37:14.204Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-11-10T09:01:33.376Z"),
        startedAt: new Date("2024-12-31T00:45:57.025Z"),
        endsAt: new Date("2023-03-19T16:43:42.877Z"),
        endedAt: new Date("2025-12-06T13:45:21.749Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-10-18T05:20:57.644Z"),
          modifiedAt: new Date("2024-08-17T13:29:32.081Z"),
          id: "<value>",
          name: "<value>",
          description: "gadzooks worse linear comestible pish graft which from",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-04-05T11:44:55.742Z"),
              modifiedAt: new Date("2023-04-23T07:00:19.315Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              unitAmount: 31072,
              includedUnits: 853923,
              capAmount: 74260,
              meterId: "<value>",
              meter: {
                id: "<value>",
                name: "<value>",
              },
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-30T09:11:23.741Z"),
              modifiedAt: new Date("2025-10-04T17:19:03.800Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "worth usable yum option sustenance edge best-seller cruelly than",
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
              path: "/var/log",
              mimeType: "<value>",
              size: 712246,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-27T06:20:15.256Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-10-21T09:02:15.702Z"),
              sizeReadable: "<value>",
              publicUrl: "https://joyous-conversation.biz/",
            },
          ],
          organization: {
            createdAt: new Date("2023-03-18T20:19:48.527Z"),
            modifiedAt: new Date("2023-08-07T11:04:15.060Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://sick-operating.info/",
            email: "Dangelo.Lowe78@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "linkedin",
                url: "https://impolite-surface.name",
              },
            ],
            detailsSubmittedAt: new Date("2024-08-26T08:54:42.652Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "O'Connell Inc",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 453682,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 228069,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2024-01-26T13:43:41.994Z"),
          modifiedAt: new Date("2023-04-24T19:37:44.221Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 270122,
          maximumAmount: 885829,
          presetAmount: 20064,
        },
        prices: [
          {
            createdAt: new Date("2023-11-28T03:21:01.284Z"),
            modifiedAt: new Date("2023-07-05T14:31:16.363Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 949647,
      maxPage: 628304,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |