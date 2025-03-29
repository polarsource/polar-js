# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-28T09:48:38.630Z"),
        modifiedAt: new Date("2024-01-15T17:28:57.595Z"),
        id: "<value>",
        status: "pending",
        paid: true,
        subtotalAmount: 476139,
        discountAmount: 640884,
        netAmount: 458449,
        amount: 810731,
        taxAmount: 190141,
        totalAmount: 887348,
        refundedAmount: 683029,
        refundedTaxAmount: 976744,
        currency: "Gibraltar Pound",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-05-08T07:16:48.828Z"),
          modifiedAt: new Date("2023-12-29T15:26:44.728Z"),
          id: "<value>",
          name: "<value>",
          description:
            "misreport incomparable helpfully newsprint bathhouse pace rag",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-10-18T05:20:57.644Z"),
              modifiedAt: new Date("2024-08-17T13:29:32.081Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-19T17:15:57.061Z"),
              modifiedAt: new Date("2024-07-15T10:43:45.973Z"),
              id: "<value>",
              type: "custom",
              description:
                "until juvenile preheat phew unique knottily perspire carefree",
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
              path: "/net",
              mimeType: "<value>",
              size: 249867,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-04T01:20:18.979Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-07-24T21:35:01.126Z"),
              sizeReadable: "<value>",
              publicUrl: "https://confused-tooth.info/",
            },
          ],
          organization: {
            createdAt: new Date("2025-07-20T11:22:55.248Z"),
            modifiedAt: new Date("2025-09-13T01:57:49.894Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://french-scratch.biz/",
            email: "Zachariah.Keeling@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "linkedin",
                url: "https://helpless-formula.com",
              },
            ],
            detailsSubmittedAt: new Date("2024-03-26T12:38:41.209Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Hammes - Kertzmann",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 886281,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 521926,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2023-10-13T11:50:50.046Z"),
          modifiedAt: new Date("2024-09-10T01:39:19.005Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 53817,
          maximumAmount: 107030,
          presetAmount: 355325,
        },
        subscription: {
          createdAt: new Date("2024-12-14T08:40:21.638Z"),
          modifiedAt: new Date("2025-12-03T04:18:47.213Z"),
          id: "<value>",
          amount: 876467,
          currency: "South Sudanese pound",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2025-01-28T23:33:57.597Z"),
          currentPeriodEnd: new Date("2024-07-29T14:59:59.189Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-04-04T01:08:35.841Z"),
          startedAt: new Date("2023-11-08T11:59:58.962Z"),
          endsAt: new Date("2024-06-30T07:02:39.812Z"),
          endedAt: new Date("2023-10-25T12:43:35.230Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "missing_features",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-02-16T08:22:09.554Z"),
            modifiedAt: new Date("2023-08-11T08:01:18.310Z"),
            id: "<value>",
            label: "<value>",
            amount: 136555,
            taxAmount: 76344,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 883502,
      maxPage: 849598,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |