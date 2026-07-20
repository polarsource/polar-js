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
      status: "draft",
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
        createdAt: new Date("2024-07-01T22:48:54.737Z"),
        modifiedAt: null,
        trialInterval: "day",
        trialIntervalCount: 918472,
        name: "<value>",
        description: "gee than elementary restructure defrag",
        visibility: "private",
        recurringInterval: "week",
        recurringIntervalCount: 984078,
        meterInterval: "year",
        meterIntervalCount: null,
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [],
        medias: [],
        organization: {
          createdAt: new Date("2024-11-13T04:56:58.190Z"),
          modifiedAt: new Date("2025-02-17T06:08:03.827Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: null,
          prorationBehavior: "invoice",
          allowCustomerUpdates: false,
          customerPortalSettings: {
            usage: {
              show: true,
            },
            subscription: {
              updateSeats: true,
              updatePlan: false,
            },
          },
        },
      },
      subscription: null,
      items: [],
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