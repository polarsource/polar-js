# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-05T10:32:46.494Z"),
        modifiedAt: new Date("2023-02-12T03:41:44.576Z"),
        id: "<value>",
        status: "paid",
        paid: true,
        subtotalAmount: 672546,
        discountAmount: 309867,
        netAmount: 736024,
        amount: 934873,
        taxAmount: 270448,
        totalAmount: 587684,
        refundedAmount: 13995,
        refundedTaxAmount: 633010,
        currency: "Liberian Dollar",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-02-22T07:54:59.907Z"),
          modifiedAt: new Date("2025-09-17T19:32:20.666Z"),
          id: "<value>",
          name: "<value>",
          description:
            "bashfully tennis well-to-do loaf see wherever gah yowza openly or",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-04-30T08:22:33.021Z"),
              modifiedAt: new Date("2023-07-07T22:28:26.700Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 851426,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-06-15T16:06:49.959Z"),
              modifiedAt: new Date("2023-01-17T12:26:05.485Z"),
              id: "<value>",
              type: "license_keys",
              description: "amendment blah despite hourly",
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
              path: "/home",
              mimeType: "<value>",
              size: 542547,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-04-14T15:28:24.459Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-01-20T07:20:38.657Z"),
              sizeReadable: "<value>",
              publicUrl: "https://brilliant-digestive.com",
            },
          ],
          organization: {
            createdAt: new Date("2023-09-09T10:04:51.542Z"),
            modifiedAt: new Date("2023-08-06T05:23:24.419Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://baggy-ceramic.info/",
            email: "Scot79@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "other",
                url: "https://realistic-follower.biz",
              },
            ],
            detailsSubmittedAt: new Date("2025-07-28T10:35:53.843Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Pouros - Swaniawski",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 424110,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 992067,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-06-18T11:43:30.843Z"),
          modifiedAt: new Date("2024-01-09T21:40:14.211Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          unitAmount: 541258,
          includedUnits: 805828,
          capAmount: 105123,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
        subscription: {
          createdAt: new Date("2024-11-23T21:57:45.636Z"),
          modifiedAt: new Date("2025-05-07T05:57:08.825Z"),
          id: "<value>",
          amount: 633900,
          currency: "Qatari Rial",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2023-03-22T03:52:46.818Z"),
          currentPeriodEnd: new Date("2024-11-12T00:05:12.049Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-06-03T12:36:52.658Z"),
          startedAt: new Date("2023-08-26T13:03:45.210Z"),
          endsAt: new Date("2023-02-24T11:33:35.541Z"),
          endedAt: new Date("2023-02-14T20:06:15.157Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-03-05T07:48:44.063Z"),
            modifiedAt: new Date("2023-03-22T01:55:46.017Z"),
            id: "<value>",
            label: "<value>",
            amount: 820439,
            taxAmount: 905109,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 300946,
      maxPage: 324786,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |