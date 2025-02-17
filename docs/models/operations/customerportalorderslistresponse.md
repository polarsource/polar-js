# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-17T12:43:49.669Z"),
        modifiedAt: new Date("2024-06-30T02:59:06.785Z"),
        id: "<value>",
        amount: 245551,
        taxAmount: 444782,
        currency: "Czech Koruna",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-09-22T04:37:01.682Z"),
          modifiedAt: new Date("2025-10-17T03:13:13.340Z"),
          id: "<value>",
          name: "<value>",
          description: "upside-down admonish ugh",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-09-21T19:24:43.932Z"),
              modifiedAt: new Date("2025-05-31T19:26:40.800Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 332956,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-04-08T08:38:32.225Z"),
              modifiedAt: new Date("2025-04-26T09:35:14.757Z"),
              id: "<value>",
              type: "custom",
              description:
                "anti what gee upliftingly famously whoever ruin satisfy ick",
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
              path: "/mnt",
              mimeType: "<value>",
              size: 669673,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-11-22T07:12:32.700Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-02-03T23:50:07.399Z"),
              sizeReadable: "<value>",
              publicUrl: "https://spherical-patroller.info",
            },
          ],
          organization: {
            createdAt: new Date("2023-09-14T10:51:44.160Z"),
            modifiedAt: new Date("2025-11-14T12:22:42.084Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://aching-ghost.com",
            bio: "<value>",
            company: "Ernser, Lind and Dooley",
            blog: "<value>",
            location: "<value>",
            email: "Macie_Leffler@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 852366,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 122710,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
          },
        },
        productPrice: {
          createdAt: new Date("2024-11-22T05:31:12.889Z"),
          modifiedAt: new Date("2024-12-01T08:34:55.818Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 387077,
        },
        subscription: {
          createdAt: new Date("2024-04-22T11:23:06.527Z"),
          modifiedAt: new Date("2024-07-20T15:39:05.838Z"),
          id: "<value>",
          amount: 476719,
          currency: "Nepalese Rupee",
          recurringInterval: "month",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2024-09-13T07:02:12.738Z"),
          currentPeriodEnd: new Date("2024-09-08T15:16:50.595Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-09-22T17:39:37.386Z"),
          startedAt: new Date("2023-04-12T21:22:01.938Z"),
          endsAt: new Date("2023-08-18T16:02:32.488Z"),
          endedAt: new Date("2024-08-03T11:54:03.969Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 295816,
      maxPage: 48431,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |