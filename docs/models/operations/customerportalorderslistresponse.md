# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-23T09:01:57.863Z"),
        modifiedAt: new Date("2025-05-08T14:16:36.701Z"),
        id: "<value>",
        amount: 649938,
        taxAmount: 409155,
        currency: "Dominican Peso",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-11-14T12:22:42.084Z"),
          modifiedAt: new Date("2024-12-08T17:18:13.370Z"),
          id: "<value>",
          name: "<value>",
          description: "procrastinate those yahoo",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-06-06T11:37:05.080Z"),
              modifiedAt: new Date("2024-11-21T22:44:43.009Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 63522,
              maximumAmount: 229557,
              presetAmount: 566873,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-09-22T17:39:37.386Z"),
              modifiedAt: new Date("2023-04-12T21:22:01.938Z"),
              id: "<value>",
              type: "ads",
              description: "er aha hence outside thread modulo hence",
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
              path: "/sbin",
              mimeType: "<value>",
              size: 671207,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-09T05:05:40.460Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-02-12T21:33:27.477Z"),
              sizeReadable: "<value>",
              publicUrl: "https://murky-monasticism.name/",
            },
          ],
          organization: {
            createdAt: new Date("2024-06-14T11:17:00.227Z"),
            modifiedAt: new Date("2024-09-06T07:42:30.967Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://unwritten-step.name/",
            bio: "<value>",
            company: "Monahan Group",
            blog: "<value>",
            location: "<value>",
            email: "Sierra_Upton73@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 887719,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 793954,
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
          createdAt: new Date("2025-02-02T10:55:26.311Z"),
          modifiedAt: new Date("2025-06-24T18:17:35.994Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 230328,
          maximumAmount: 343271,
          presetAmount: 806742,
        },
        subscription: {
          createdAt: new Date("2024-02-11T20:26:54.603Z"),
          modifiedAt: new Date("2024-12-17T17:23:25.138Z"),
          id: "<value>",
          amount: 818790,
          currency: "Leone",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2023-11-23T10:40:17.877Z"),
          currentPeriodEnd: new Date("2024-04-14T17:43:01.391Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-04-26T20:46:56.899Z"),
          startedAt: new Date("2025-04-15T00:49:44.087Z"),
          endsAt: new Date("2024-12-23T22:20:10.160Z"),
          endedAt: new Date("2023-05-18T15:26:11.061Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_complex",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 965902,
      maxPage: 263923,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |