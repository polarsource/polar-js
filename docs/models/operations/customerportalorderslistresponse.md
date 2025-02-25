# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-16T07:05:44.712Z"),
        modifiedAt: new Date("2023-12-24T11:27:41.467Z"),
        id: "<value>",
        amount: 594283,
        taxAmount: 17084,
        currency: "Nuevo Sol",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-10-12T05:22:08.272Z"),
          modifiedAt: new Date("2024-11-06T10:33:59.937Z"),
          id: "<value>",
          name: "<value>",
          description:
            "catalyst proofread atop notwithstanding diversity upon pleasing arrange unless",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-08-17T07:12:58.453Z"),
              modifiedAt: new Date("2023-07-06T03:59:48.860Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 224357,
              maximumAmount: 232447,
              presetAmount: 229042,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-06-14T14:19:24.015Z"),
              modifiedAt: new Date("2024-08-29T01:24:58.178Z"),
              id: "<value>",
              type: "ads",
              description: "once availability oof boo aw morbidity",
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
              size: 337809,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-02-22T04:39:21.761Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-01-21T14:36:37.476Z"),
              sizeReadable: "<value>",
              publicUrl: "https://moist-knight.biz",
            },
          ],
          organization: {
            createdAt: new Date("2025-05-29T13:25:31.981Z"),
            modifiedAt: new Date("2025-12-07T20:16:32.554Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://burly-warming.net",
            bio: "<value>",
            company: "Wisozk - Mosciski",
            blog: "<value>",
            location: "<value>",
            email: "Dana.Welch45@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 413765,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 136365,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        productPrice: {
          createdAt: new Date("2023-05-05T03:16:24.627Z"),
          modifiedAt: new Date("2025-11-19T03:28:35.980Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2023-09-17T17:42:49.214Z"),
          modifiedAt: new Date("2025-05-29T04:08:18.615Z"),
          id: "<value>",
          amount: 577352,
          currency: "Algerian Dinar",
          recurringInterval: "year",
          status: "past_due",
          currentPeriodStart: new Date("2025-11-19T23:12:24.597Z"),
          currentPeriodEnd: new Date("2025-02-26T12:18:48.226Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-12-28T18:31:46.699Z"),
          startedAt: new Date("2023-12-08T18:21:15.843Z"),
          endsAt: new Date("2025-04-30T19:05:15.219Z"),
          endedAt: new Date("2023-04-06T10:00:15.211Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 180717,
      maxPage: 606929,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |