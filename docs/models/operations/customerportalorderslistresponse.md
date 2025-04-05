# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-09T07:17:06.745Z"),
        modifiedAt: new Date("2025-11-24T17:01:47.390Z"),
        id: "<value>",
        status: "pending",
        paid: true,
        subtotalAmount: 821688,
        discountAmount: 145302,
        netAmount: 54212,
        amount: 86342,
        taxAmount: 358052,
        totalAmount: 677875,
        refundedAmount: 884503,
        refundedTaxAmount: 200618,
        currency: "Yuan Renminbi",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-01-20T06:11:11.809Z"),
          modifiedAt: new Date("2025-09-23T15:39:22.837Z"),
          id: "<value>",
          name: "<value>",
          description: "brown aside advanced sashay beyond abseil",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-05-07T11:24:30.588Z"),
              modifiedAt: new Date("2025-02-23T09:52:38.187Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 345778,
              maximumAmount: 338035,
              presetAmount: 538560,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-04T02:02:37.761Z"),
              modifiedAt: new Date("2024-12-28T08:07:18.629Z"),
              id: "<value>",
              type: "meter_credit",
              description:
                "wildly swear fooey warmly minor yearly release wisecrack curiously",
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
              path: "/home/user/dir",
              mimeType: "<value>",
              size: 494860,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-09-22T04:43:27.475Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-11-22T03:35:44.605Z"),
              sizeReadable: "<value>",
              publicUrl: "https://unrealistic-tackle.com/",
            },
          ],
          organization: {
            createdAt: new Date("2023-01-24T01:06:11.030Z"),
            modifiedAt: new Date("2023-03-25T23:37:24.261Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://ripe-skeleton.biz",
            email: "Thaddeus.Wisozk@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "facebook",
                url: "https://jubilant-granny.org",
              },
            ],
            detailsSubmittedAt: new Date("2023-08-28T23:35:20.509Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Robel, Bartell and Heidenreich",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 687080,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 559486,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2023-01-04T04:28:21.744Z"),
          modifiedAt: new Date("2025-06-17T16:49:05.219Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 823826,
        },
        subscription: {
          createdAt: new Date("2025-09-04T14:36:37.692Z"),
          modifiedAt: new Date("2024-01-23T00:31:20.303Z"),
          id: "<value>",
          amount: 788775,
          currency: "Guinea Franc",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2025-03-12T14:53:27.209Z"),
          currentPeriodEnd: new Date("2025-07-08T11:05:06.696Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-03-06T01:40:41.562Z"),
          startedAt: new Date("2024-05-23T18:50:41.142Z"),
          endsAt: new Date("2024-01-11T02:28:52.255Z"),
          endedAt: new Date("2023-03-06T12:19:41.508Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "unused",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-11-29T18:42:08.747Z"),
            modifiedAt: new Date("2025-05-28T06:12:48.980Z"),
            id: "<value>",
            label: "<value>",
            amount: 478880,
            taxAmount: 28564,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 745532,
      maxPage: 885934,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |