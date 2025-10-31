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
        createdAt: new Date("2024-05-31T12:38:58.045Z"),
        modifiedAt: new Date("2023-07-02T22:48:54.737Z"),
        trialInterval: null,
        trialIntervalCount: 57218,
        name: "<value>",
        description:
          "arraign but insistent provided apud um furiously palate devise yowza",
        recurringInterval: "day",
        recurringIntervalCount: 622455,
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        prices: [],
        benefits: [],
        medias: [],
        organization: {
          createdAt: new Date("2024-04-23T21:20:15.611Z"),
          modifiedAt: new Date("2024-05-22T15:08:17.767Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://late-cutover.org",
          email: "Phyllis_Romaguera@gmail.com",
          website: "<value>",
          socials: [],
          status: "denied",
          detailsSubmittedAt: new Date("2025-03-30T02:02:42.344Z"),
          featureSettings: null,
          subscriptionSettings: {
            allowMultipleSubscriptions: true,
            allowCustomerUpdates: true,
            prorationBehavior: "invoice",
            benefitRevocationGracePeriod: 916709,
          },
          notificationSettings: {
            newOrder: true,
            newSubscription: true,
          },
          customerEmailSettings: {
            orderConfirmation: true,
            subscriptionCancellation: true,
            subscriptionConfirmation: false,
            subscriptionCycled: true,
            subscriptionPastDue: false,
            subscriptionRevoked: false,
            subscriptionUncanceled: false,
            subscriptionUpdated: true,
          },
        },
      },
      subscription: {
        createdAt: new Date("2024-07-13T22:13:37.550Z"),
        modifiedAt: new Date("2023-07-08T08:21:02.517Z"),
        id: "<value>",
        amount: 10000,
        currency: "usd",
        recurringInterval: "week",
        recurringIntervalCount: 893964,
        status: "trialing",
        currentPeriodStart: new Date("2024-10-10T08:15:03.005Z"),
        currentPeriodEnd: new Date("2025-04-25T19:12:17.639Z"),
        trialStart: new Date("2024-07-25T01:03:46.818Z"),
        trialEnd: new Date("2025-09-06T02:36:50.793Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-02-28T03:03:35.134Z"),
        startedAt: new Date("2023-12-12T17:15:19.456Z"),
        endsAt: new Date("2025-05-22T22:43:11.961Z"),
        endedAt: new Date("2025-06-01T22:56:15.909Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: null,
        customerCancellationComment: "<value>",
      },
      items: [],
      description: "Pro Plan",
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