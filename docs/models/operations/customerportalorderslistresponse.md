# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-20T07:43:39.299Z"),
        modifiedAt: new Date("2025-05-17T00:38:55.045Z"),
        id: "<value>",
        status: "pending",
        paid: true,
        subtotalAmount: 426630,
        discountAmount: 991907,
        netAmount: 411983,
        amount: 430246,
        taxAmount: 409699,
        totalAmount: 875600,
        refundedAmount: 535029,
        refundedTaxAmount: 817592,
        currency: "Dong",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-02-07T03:33:55.701Z"),
          modifiedAt: new Date("2024-01-28T13:29:26.156Z"),
          id: "<value>",
          name: "<value>",
          description: "misguided bungalow cheerfully",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-11-08T11:59:58.962Z"),
              modifiedAt: new Date("2024-06-30T07:02:39.812Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-02-16T08:22:09.554Z"),
              modifiedAt: new Date("2023-08-11T08:01:18.310Z"),
              id: "<value>",
              type: "custom",
              description: "cruelly than boohoo",
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
              path: "/etc/ppp",
              mimeType: "<value>",
              size: 70116,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-08-07T11:04:15.060Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-02-15T06:00:45.519Z"),
              sizeReadable: "<value>",
              publicUrl: "https://possible-gymnast.net",
            },
          ],
          organization: {
            createdAt: new Date("2023-09-05T12:05:01.095Z"),
            modifiedAt: new Date("2024-01-07T12:28:10.203Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://made-up-scenario.biz",
            email: "Ray_Swift@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "youtube",
                url: "https://jagged-ignorance.biz",
              },
            ],
            detailsSubmittedAt: new Date("2024-07-15T02:36:01.008Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Braun LLC",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 979082,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 270122,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-04-21T19:17:53.692Z"),
          modifiedAt: new Date("2025-08-01T12:48:52.738Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 658850,
        },
        subscription: {
          createdAt: new Date("2025-11-06T19:30:28.000Z"),
          modifiedAt: new Date("2024-11-19T14:53:38.504Z"),
          id: "<value>",
          amount: 90307,
          currency: "Sudanese Pound",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2025-07-19T15:20:58.490Z"),
          currentPeriodEnd: new Date("2024-04-16T00:19:26.129Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-08-29T16:35:44.513Z"),
          startedAt: new Date("2025-08-19T03:06:36.051Z"),
          endsAt: new Date("2023-06-19T11:04:26.527Z"),
          endedAt: new Date("2024-03-12T07:16:09.551Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2023-02-04T11:43:47.327Z"),
            modifiedAt: new Date("2024-07-29T12:09:43.909Z"),
            id: "<value>",
            label: "<value>",
            amount: 603093,
            taxAmount: 415718,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 35105,
      maxPage: 110305,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |