# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-03-04T23:15:42.598Z"),
        modifiedAt: new Date("2025-09-22T23:51:29.754Z"),
        id: "<value>",
        amount: 693429,
        currency: "Saudi Riyal",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2025-05-20T04:09:40.373Z"),
        currentPeriodEnd: new Date("2023-03-06T02:16:46.893Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-09-12T22:41:13.247Z"),
        startedAt: new Date("2024-08-20T18:04:06.658Z"),
        endsAt: new Date("2025-02-02T10:55:26.311Z"),
        endedAt: new Date("2025-06-24T18:17:35.994Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-01-12T05:24:05.684Z"),
          modifiedAt: new Date("2025-06-03T04:32:33.374Z"),
          id: "<value>",
          name: "<value>",
          description: "kookily dowse tennis colorfully nearly",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-06-29T18:23:08.660Z"),
              modifiedAt: new Date("2024-09-26T17:09:06.903Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-04-30T12:56:06.723Z"),
              modifiedAt: new Date("2024-02-01T02:31:59.627Z"),
              id: "<value>",
              type: "downloadables",
              description: "rotten yahoo though gut neatly gracefully pish",
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
              path: "/etc/periodic",
              mimeType: "<value>",
              size: 347877,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-09-30T15:59:26.427Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-03-30T17:49:29.666Z"),
              sizeReadable: "<value>",
              publicUrl: "https://wicked-lyre.net",
            },
          ],
          organization: {
            createdAt: new Date("2024-06-22T21:15:23.987Z"),
            modifiedAt: new Date("2023-04-15T20:24:55.759Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://monthly-reach.com/",
            bio: "<value>",
            company: "Predovic LLC",
            blog: "<value>",
            location: "<value>",
            email: "Ethel.Cormier@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 822881,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 777702,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2023-05-26T15:25:57.138Z"),
          modifiedAt: new Date("2025-08-26T04:15:22.074Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 456280,
          recurringInterval: "year",
        },
      },
    ],
    pagination: {
      totalCount: 695483,
      maxPage: 744937,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |