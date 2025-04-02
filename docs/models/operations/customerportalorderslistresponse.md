# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-05T03:08:13.101Z"),
        modifiedAt: new Date("2023-04-03T00:34:21.849Z"),
        id: "<value>",
        status: "partially_refunded",
        paid: true,
        subtotalAmount: 617426,
        discountAmount: 24903,
        netAmount: 224536,
        amount: 519282,
        taxAmount: 943601,
        totalAmount: 50588,
        refundedAmount: 452829,
        refundedTaxAmount: 90534,
        currency: "Jamaican Dollar",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-05-30T10:57:07.050Z"),
          modifiedAt: new Date("2025-06-26T03:48:39.798Z"),
          id: "<value>",
          name: "<value>",
          description: "yippee general after outbid than",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-05-13T08:35:21.302Z"),
              modifiedAt: new Date("2023-04-29T22:32:20.326Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 69708,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-05-09T13:41:33.490Z"),
              modifiedAt: new Date("2023-09-19T07:51:00.664Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "without loftily anti under inasmuch amazing brr phew unkempt",
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
              path: "/etc",
              mimeType: "<value>",
              size: 430848,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-02-27T05:16:31.476Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-07T09:46:12.801Z"),
              sizeReadable: "<value>",
              publicUrl: "https://far-flung-packaging.biz/",
            },
          ],
          organization: {
            createdAt: new Date("2023-11-24T02:13:04.748Z"),
            modifiedAt: new Date("2023-07-07T15:18:37.152Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://parched-overcoat.info/",
            email: "Casper_Orn52@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "x",
                url: "https://insecure-cow.biz/",
              },
            ],
            detailsSubmittedAt: new Date("2023-01-02T16:27:36.400Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Kulas - Quitzon",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 801685,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 645919,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-06-26T15:20:42.922Z"),
          modifiedAt: new Date("2023-11-19T03:02:45.412Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 493568,
        },
        subscription: {
          createdAt: new Date("2025-05-20T18:00:55.896Z"),
          modifiedAt: new Date("2025-09-15T12:26:36.251Z"),
          id: "<value>",
          amount: 382266,
          currency: "Hryvnia",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2025-08-20T04:31:33.388Z"),
          currentPeriodEnd: new Date("2025-10-13T11:07:24.039Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-09-16T18:48:09.238Z"),
          startedAt: new Date("2024-05-03T07:33:03.370Z"),
          endsAt: new Date("2024-08-13T10:10:36.917Z"),
          endedAt: new Date("2023-06-21T06:47:54.195Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "other",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2023-02-09T00:25:28.672Z"),
            modifiedAt: new Date("2025-06-21T20:04:56.598Z"),
            id: "<value>",
            label: "<value>",
            amount: 203218,
            taxAmount: 313465,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 714294,
      maxPage: 66076,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |