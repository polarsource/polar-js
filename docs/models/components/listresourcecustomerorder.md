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
      appliedBalanceAmount: 332443,
      dueAmount: 908041,
      refundedAmount: 252369,
      refundedTaxAmount: 903566,
      currency: "Kuwaiti Dinar",
      billingReason: "subscription_create",
      billingName: "<value>",
      billingAddress: null,
      invoiceNumber: "<value>",
      isInvoiceGenerated: false,
      customerId: "<value>",
      productId: "<value>",
      discountId: null,
      subscriptionId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        id: "<value>",
        createdAt: new Date("2025-06-24T08:35:46.274Z"),
        modifiedAt: new Date("2024-10-17T12:40:24.698Z"),
        trialInterval: "day",
        trialIntervalCount: 39950,
        name: "<value>",
        description:
          "than elementary restructure defrag unnaturally abaft impeccable",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [],
        medias: [],
        organization: {
          createdAt: new Date("2025-02-03T21:10:18.351Z"),
          modifiedAt: new Date("2024-01-24T22:47:46.870Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://super-ocelot.org",
          email: "Adolph.Kuhn40@gmail.com",
          website: "<value>",
          socials: [],
          status: "onboarding_started",
          detailsSubmittedAt: new Date("2023-06-02T11:26:30.723Z"),
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
        createdAt: new Date("2024-02-20T16:51:58.506Z"),
        modifiedAt: new Date("2023-07-17T12:53:53.043Z"),
        id: "<value>",
        amount: 134396,
        currency: "Cayman Islands Dollar",
        recurringInterval: "day",
        status: "unpaid",
        currentPeriodStart: new Date("2024-11-13T05:03:23.906Z"),
        currentPeriodEnd: new Date("2025-11-26T02:12:01.065Z"),
        trialStart: new Date("2024-04-26T02:48:59.389Z"),
        trialEnd: new Date("2024-11-09T05:08:53.524Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-07-08T08:21:02.517Z"),
        startedAt: new Date("2025-09-06T18:49:12.695Z"),
        endsAt: new Date("2024-10-10T08:15:03.005Z"),
        endedAt: new Date("2025-04-25T19:12:17.639Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-02-28T03:03:35.134Z"),
          modifiedAt: new Date("2023-12-12T17:15:19.456Z"),
          id: "<value>",
          label: "<value>",
          amount: 343185,
          taxAmount: 796484,
          proration: true,
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