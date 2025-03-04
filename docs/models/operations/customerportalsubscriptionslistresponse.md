# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-24T12:23:08.388Z"),
        modifiedAt: new Date("2024-11-14T23:52:31.916Z"),
        id: "<value>",
        amount: 403535,
        currency: "Serbian Dinar",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2024-08-23T15:09:56.506Z"),
        currentPeriodEnd: new Date("2024-06-23T23:40:26.806Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-05-08T05:54:32.042Z"),
        startedAt: new Date("2023-09-07T17:50:46.509Z"),
        endsAt: new Date("2025-08-05T06:29:12.813Z"),
        endedAt: new Date("2025-06-13T00:44:29.190Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-08-15T17:29:43.529Z"),
          modifiedAt: new Date("2024-11-27T12:35:34.929Z"),
          id: "<value>",
          name: "<value>",
          description: "or upward via incinerate or unto beside",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
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
              priceAmount: 380775,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-09-17T19:32:20.666Z"),
              modifiedAt: new Date("2025-10-28T07:26:11.639Z"),
              id: "<value>",
              type: "discord",
              description:
                "enthusiastically worldly lightly when preside geez after",
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
              size: 357399,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-08-24T18:21:39.946Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-02-10T22:14:56.342Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wavy-pneumonia.info/",
            },
          ],
          organization: {
            createdAt: new Date("2025-02-11T02:09:14.166Z"),
            modifiedAt: new Date("2025-09-20T10:55:22.416Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://nimble-release.org/",
            bio: "<value>",
            company: "Koch - Conn",
            blog: "<value>",
            location: "<value>",
            email: "Jordy.Larson44@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 211150,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 320583,
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
          createdAt: new Date("2025-11-12T05:24:42.453Z"),
          modifiedAt: new Date("2023-05-18T23:59:25.241Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 556884,
          maximumAmount: 622665,
          presetAmount: 680000,
        },
      },
    ],
    pagination: {
      totalCount: 402291,
      maxPage: 364542,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |