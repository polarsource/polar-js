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
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        id: "<value>",
        createdAt: new Date("2023-10-04T14:18:57.229Z"),
        modifiedAt: new Date("2024-05-31T12:38:58.045Z"),
        trialInterval: "day",
        trialIntervalCount: null,
        name: "<value>",
        description: "emotional dearly joyously",
        recurringInterval: "week",
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-03-18T03:28:52.944Z"),
            modifiedAt: new Date("2023-10-09T19:42:21.526Z"),
            id: "<value>",
            amountType: "fixed",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 556329,
            legacy: true,
          },
        ],
        benefits: [],
        medias: [],
        organization: {
          createdAt: new Date("2024-03-27T03:55:24.068Z"),
          modifiedAt: new Date("2025-02-03T21:10:18.351Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://huge-lid.net/",
          email: "Dalton_Anderson49@hotmail.com",
          website: "<value>",
          socials: [],
          status: "under_review",
          detailsSubmittedAt: new Date("2024-02-22T02:01:31.430Z"),
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
          customerEmailSettings: {
            orderConfirmation: true,
            subscriptionCancellation: true,
            subscriptionConfirmation: true,
            subscriptionCycled: false,
            subscriptionPastDue: true,
            subscriptionRevoked: false,
            subscriptionUncanceled: false,
            subscriptionUpdated: false,
          },
        },
      },
      subscription: {
        createdAt: new Date("2024-03-06T19:03:50.234Z"),
        modifiedAt: new Date("2024-09-01T07:31:10.688Z"),
        id: "<value>",
        amount: 10000,
        currency: "usd",
        recurringInterval: "day",
        status: "active",
        currentPeriodStart: new Date("2025-07-01T15:38:18.028Z"),
        currentPeriodEnd: new Date("2024-04-02T15:56:55.286Z"),
        trialStart: new Date("2023-03-23T00:47:15.496Z"),
        trialEnd: new Date("2023-06-22T17:34:45.530Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2023-01-30T05:51:07.887Z"),
        startedAt: null,
        endsAt: new Date("2025-05-27T19:20:07.033Z"),
        endedAt: new Date("2023-12-07T08:15:27.487Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-02-16T11:18:39.347Z"),
          modifiedAt: new Date("2023-11-25T23:33:09.773Z"),
          id: "<value>",
          label: "Pro Plan",
          amount: 10000,
          taxAmount: 720,
          proration: false,
          productPriceId: null,
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