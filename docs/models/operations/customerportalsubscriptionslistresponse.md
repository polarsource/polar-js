# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-06-24T17:26:47.807Z"),
        modifiedAt: new Date("2025-09-02T09:07:46.388Z"),
        id: "<value>",
        amount: 391395,
        currency: "Uzbekistan Sum",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2023-07-20T05:06:41.440Z"),
        currentPeriodEnd: new Date("2025-08-30T22:32:53.523Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-05-20T04:09:40.373Z"),
        startedAt: new Date("2023-03-06T02:16:46.893Z"),
        endsAt: new Date("2025-09-12T22:41:13.247Z"),
        endedAt: new Date("2024-08-20T18:04:06.658Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-06-24T18:17:35.994Z"),
          modifiedAt: new Date("2023-09-10T10:32:59.950Z"),
          id: "<value>",
          name: "<value>",
          description: "vain modulo whoever because beneath",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-01-06T18:31:00.573Z"),
              modifiedAt: new Date("2025-08-19T12:14:43.758Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 497962,
              maximumAmount: 579119,
              presetAmount: 231872,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-02-01T02:31:59.627Z"),
              modifiedAt: new Date("2025-01-20T00:39:57.552Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "chilly drat after singe tusk colorfully cleaner solution likely",
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
              path: "/usr/X11R6",
              mimeType: "<value>",
              size: 632888,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-04-03T02:30:21.355Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-01-04T17:38:06.749Z"),
              sizeReadable: "<value>",
              publicUrl: "https://creative-cruelty.info/",
            },
          ],
          organization: {
            createdAt: new Date("2024-07-02T22:06:54.503Z"),
            modifiedAt: new Date("2025-06-20T21:02:58.149Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://marvelous-expense.com",
            bio: "<value>",
            company: "Klocko, Mosciski and Powlowski",
            blog: "<value>",
            location: "<value>",
            email: "Ressie_Kemmer36@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 815946,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 653180,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2025-01-11T02:41:15.306Z"),
          modifiedAt: new Date("2023-05-27T18:45:21.938Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 534995,
      maxPage: 792382,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |