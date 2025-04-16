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
          },
        },
        productPrice: {
          createdAt: new Date("2025-01-19T07:41:39.867Z"),
          modifiedAt: new Date("2023-05-25T21:55:57.322Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2025-03-28T20:28:43.012Z"),
          modifiedAt: new Date("2023-09-15T10:05:17.413Z"),
          id: "<value>",
          amount: 823826,
          currency: "US Dollar",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2023-12-22T03:25:08.493Z"),
          currentPeriodEnd: new Date("2025-10-12T05:40:01.907Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-09-25T22:00:29.438Z"),
          startedAt: new Date("2025-03-12T14:53:27.209Z"),
          endsAt: new Date("2025-07-08T11:05:06.696Z"),
          endedAt: new Date("2023-03-06T01:40:41.562Z"),
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
            createdAt: new Date("2024-01-11T02:28:52.255Z"),
            modifiedAt: new Date("2023-03-06T12:19:41.508Z"),
            id: "<value>",
            label: "<value>",
            amount: 838094,
            taxAmount: 637572,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 801331,
      maxPage: 478880,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |