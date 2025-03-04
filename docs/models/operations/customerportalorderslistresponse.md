# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-11T10:35:41.575Z"),
        modifiedAt: new Date("2025-03-09T02:35:35.659Z"),
        id: "<value>",
        amount: 586468,
        taxAmount: 656044,
        currency: "East Caribbean Dollar",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-05-07T03:38:29.979Z"),
          modifiedAt: new Date("2023-12-17T04:34:38.970Z"),
          id: "<value>",
          name: "<value>",
          description: "who naturally achieve scuttle brr ingratiate",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-20T08:59:09.777Z"),
              modifiedAt: new Date("2025-06-12T22:18:05.181Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 102456,
              maximumAmount: 320595,
              presetAmount: 249867,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-04T01:20:18.979Z"),
              modifiedAt: new Date("2025-07-24T21:35:01.126Z"),
              id: "<value>",
              type: "custom",
              description: "sweetly under lest jubilant",
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
              path: "/bin",
              mimeType: "<value>",
              size: 260487,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-09-10T01:39:19.005Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-10-14T06:11:05.227Z"),
              sizeReadable: "<value>",
              publicUrl: "https://celebrated-fork.name/",
            },
          ],
          organization: {
            createdAt: new Date("2025-12-03T04:18:47.213Z"),
            modifiedAt: new Date("2025-08-18T14:34:28.167Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://all-bungalow.net",
            bio: "<value>",
            company: "Rolfson Inc",
            blog: "<value>",
            location: "<value>",
            email: "Donavon.Quitzon13@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 883502,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 849598,
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
          createdAt: new Date("2023-10-22T19:20:47.059Z"),
          modifiedAt: new Date("2023-06-06T12:57:12.595Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 794081,
        },
        subscription: {
          createdAt: new Date("2024-02-08T23:41:54.694Z"),
          modifiedAt: new Date("2023-08-11T12:21:42.277Z"),
          id: "<value>",
          amount: 927018,
          currency: "Metical",
          recurringInterval: "year",
          status: "past_due",
          currentPeriodStart: new Date("2023-07-27T06:20:15.256Z"),
          currentPeriodEnd: new Date("2023-10-21T09:02:15.702Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-12-06T12:31:46.283Z"),
          startedAt: new Date("2024-04-28T05:17:51.708Z"),
          endsAt: new Date("2023-07-23T21:37:23.946Z"),
          endedAt: new Date("2023-07-12T06:54:28.992Z"),
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
      totalCount: 199326,
      maxPage: 374316,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |