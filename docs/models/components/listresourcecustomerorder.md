# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2023-05-20T15:53:22.635Z"),
      modifiedAt: new Date("2023-01-20T08:35:02.035Z"),
      status: "pending",
      paid: true,
      subtotalAmount: 95401,
      discountAmount: 172160,
      netAmount: 590618,
      taxAmount: 614593,
      totalAmount: 710994,
      fromBalanceAmount: 332443,
      refundedAmount: 908041,
      refundedTaxAmount: 252369,
      currency: "Uzbekistan Sum",
      billingReason: "subscription_create",
      billingName: "<value>",
      billingAddress: {
        country: "US",
      },
      invoiceNumber: "<value>",
      isInvoiceGenerated: true,
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      subscriptionId: null,
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        id: "<value>",
        createdAt: new Date("2025-10-03T15:28:24.829Z"),
        modifiedAt: new Date("2023-11-16T06:21:02.029Z"),
        trialInterval: "year",
        trialIntervalCount: 313224,
        name: "<value>",
        description: null,
        recurringInterval: "month",
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-09-04T12:35:29.724Z"),
            modifiedAt: new Date("2024-05-27T08:53:02.662Z"),
            type: "downloadables",
            description: "cautiously pike true considering superior about",
            selectable: true,
            deletable: false,
            organizationId: "<value>",
          },
        ],
        medias: [],
        organization: {
          createdAt: new Date("2025-01-01T18:22:02.718Z"),
          modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: null,
          email: "Hannah_Price@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "github",
              url: "https://scratchy-midwife.net/",
            },
          ],
          status: "denied",
          detailsSubmittedAt: new Date("2023-09-01T05:50:45.596Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: true,
            allowCustomerUpdates: true,
            prorationBehavior: "invoice",
          },
          notificationSettings: {
            newOrder: false,
            newSubscription: true,
          },
        },
      },
      subscription: {
        createdAt: new Date("2024-11-12T09:58:36.462Z"),
        modifiedAt: new Date("2023-10-30T21:58:21.451Z"),
        id: "<value>",
        amount: 389698,
        currency: "CFP Franc",
        recurringInterval: "week",
        status: "unpaid",
        currentPeriodStart: new Date("2023-09-01T16:28:55.798Z"),
        currentPeriodEnd: new Date("2023-02-06T14:59:10.086Z"),
        trialStart: new Date("2023-03-18T03:28:52.944Z"),
        trialEnd: new Date("2023-10-09T19:42:21.526Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-09-01T17:40:05.914Z"),
        startedAt: new Date("2023-04-23T01:56:55.379Z"),
        endsAt: new Date("2024-03-06T19:03:50.234Z"),
        endedAt: new Date("2024-09-01T07:31:10.688Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2023-03-08T18:55:46.865Z"),
          modifiedAt: new Date("2024-05-21T03:01:04.091Z"),
          id: "<value>",
          label: "<value>",
          amount: 864952,
          taxAmount: 346483,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |