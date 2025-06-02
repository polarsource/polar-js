# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2023-10-09T07:17:06.745Z"),
        modifiedAt: new Date("2025-11-24T17:01:47.390Z"),
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
        billingReason: "subscription_create",
        billingName: "<value>",
        billingAddress: {
          country: "FR",
        },
        isInvoiceGenerated: false,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-05-29T06:46:44.696Z"),
          modifiedAt: new Date("2025-08-17T08:50:14.899Z"),
          id: "<value>",
          name: "<value>",
          description: "justly fail stigmatize acclaimed boo citizen",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-03-01T22:41:29.405Z"),
              modifiedAt: new Date("2024-01-14T23:20:28.732Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-08-13T06:17:01.790Z"),
              modifiedAt: new Date("2023-04-04T02:02:37.761Z"),
              type: "downloadables",
              description:
                "fondly unto since dial character before uh-huh anaesthetise consequently unlike",
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
              path: "/usr/src",
              mimeType: "<value>",
              size: 121790,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-24T01:06:11.030Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-03-25T23:37:24.261Z"),
              sizeReadable: "<value>",
              publicUrl: "https://ripe-skeleton.biz",
            },
          ],
          organization: {
            createdAt: new Date("2024-01-15T04:39:48.793Z"),
            modifiedAt: new Date("2025-10-05T18:17:00.901Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://willing-adrenalin.net/",
            email: "Ernesto_Kiehn-Huels@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "other",
                url: "https://angelic-follower.net",
              },
            ],
            detailsSubmittedAt: new Date("2024-09-05T04:43:47.823Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        subscription: {
          createdAt: new Date("2023-05-25T21:55:57.322Z"),
          modifiedAt: new Date("2023-01-04T04:28:21.744Z"),
          id: "<value>",
          amount: 819983,
          currency: "Seychelles Rupee",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2025-09-04T14:36:37.692Z"),
          currentPeriodEnd: new Date("2024-01-23T00:31:20.303Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-05-14T11:55:05.531Z"),
          startedAt: new Date("2023-12-22T03:25:08.493Z"),
          endsAt: new Date("2025-10-12T05:40:01.907Z"),
          endedAt: new Date("2023-09-25T22:00:29.438Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_expensive",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-07-08T11:05:06.696Z"),
            modifiedAt: new Date("2023-03-06T01:40:41.562Z"),
            id: "<value>",
            label: "<value>",
            amount: 464220,
            taxAmount: 342247,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 58862,
      maxPage: 838094,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |