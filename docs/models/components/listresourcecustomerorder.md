# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2024-05-19T15:53:22.635Z"),
      modifiedAt: new Date("2024-01-20T08:35:02.035Z"),
      status: "pending",
      paid: true,
      subtotalAmount: 10000,
      discountAmount: 1000,
      netAmount: 9000,
      taxAmount: 720,
      totalAmount: 9720,
      appliedBalanceAmount: 0,
      dueAmount: 0,
      refundedAmount: 0,
      refundedTaxAmount: 0,
      currency: "usd",
      billingReason: "purchase",
      billingName: "<value>",
      billingAddress: {
        country: "US",
      },
      invoiceNumber: "<value>",
      isInvoiceGenerated: false,
      receiptNumber: "<value>",
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      product: {
        id: "<value>",
        createdAt: new Date("2025-02-28T16:11:09.166Z"),
        modifiedAt: new Date("2024-03-25T07:15:50.587Z"),
        trialInterval: "day",
        trialIntervalCount: 918472,
        name: "<value>",
        description: "gee than elementary restructure defrag",
        visibility: "private",
        recurringInterval: "week",
        recurringIntervalCount: 984078,
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-10-10T05:16:33.838Z"),
            modifiedAt: new Date("2026-02-25T08:33:06.239Z"),
            type: "feature_flag",
            description: "sushi fortunately gigantic soybean tomorrow um where",
            selectable: false,
            deletable: false,
            isDeleted: false,
            organizationId: "<value>",
          },
        ],
        medias: [],
        organization: {
          createdAt: new Date("2026-09-30T11:33:49.764Z"),
          modifiedAt: new Date("2024-03-13T19:22:24.375Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://forceful-grass.com/",
          prorationBehavior: "invoice",
          allowCustomerUpdates: true,
          customerPortalSettings: {
            usage: {
              show: false,
            },
            subscription: {
              updateSeats: true,
              updatePlan: true,
            },
          },
        },
      },
      subscription: {
        createdAt: new Date("2024-11-04T19:41:36.912Z"),
        modifiedAt: null,
        id: "<value>",
        amount: 10000,
        currency: "usd",
        recurringInterval: "day",
        recurringIntervalCount: 413401,
        status: "canceled",
        currentPeriodStart: new Date("2025-10-12T05:58:53.192Z"),
        currentPeriodEnd: new Date("2024-12-06T08:15:27.487Z"),
        trialStart: new Date("2025-09-13T03:55:10.034Z"),
        trialEnd: new Date("2025-05-13T02:59:27.247Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-05-02T19:24:39.019Z"),
        startedAt: new Date("2024-05-18T07:14:51.645Z"),
        endsAt: new Date("2025-05-29T21:01:39.779Z"),
        endedAt: new Date("2024-08-17T08:05:21.446Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2025-11-25T18:23:36.883Z"),
          modifiedAt: new Date("2025-02-21T10:13:38.797Z"),
          id: "<value>",
          label: "Pro Plan",
          amount: 10000,
          taxAmount: 720,
          proration: false,
          productPriceId: "<value>",
        },
      ],
      description: "Pro Plan",
      refundableAmount: 9000,
      refundableTaxAmount: 720,
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |