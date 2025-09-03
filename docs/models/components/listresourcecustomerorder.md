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
      refundedAmount: 332443,
      refundedTaxAmount: 908041,
      currency: "Egyptian Pound",
      billingReason: "subscription_update",
      billingName: "<value>",
      billingAddress: {
        country: "US",
      },
      isInvoiceGenerated: true,
      customerId: "<value>",
      productId: "<value>",
      discountId: null,
      subscriptionId: "<value>",
      checkoutId: null,
      userId: "<value>",
      product: {
        createdAt: new Date("2024-04-08T05:09:43.678Z"),
        modifiedAt: new Date("2025-06-24T08:35:46.274Z"),
        id: "<value>",
        name: "<value>",
        description: "because geez eek out mid blink woot",
        recurringInterval: "month",
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-12-05T16:51:45.959Z"),
            modifiedAt: new Date("2024-05-02T19:24:39.019Z"),
            id: "<value>",
            amountType: "fixed",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "day",
            priceCurrency: "<value>",
            priceAmount: 202641,
            legacy: true,
          },
        ],
        benefits: [],
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
              platform: "youtube",
              url: "https://expert-elevation.org",
            },
          ],
          status: "denied",
          detailsSubmittedAt: new Date("2023-09-01T05:50:45.596Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          notificationSettings: {
            newOrder: true,
            newSubscription: false,
          },
        },
      },
      subscription: {
        createdAt: new Date("2023-07-17T12:53:53.043Z"),
        modifiedAt: new Date("2024-06-08T20:21:58.462Z"),
        id: "<value>",
        amount: 184899,
        currency: "Rand",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2025-11-26T02:12:01.065Z"),
        currentPeriodEnd: new Date("2024-04-26T02:48:59.389Z"),
        cancelAtPeriodEnd: true,
        canceledAt: new Date("2024-07-13T22:13:37.550Z"),
        startedAt: new Date("2023-07-08T08:21:02.517Z"),
        endsAt: new Date("2025-09-06T18:49:12.695Z"),
        endedAt: new Date("2024-10-10T08:15:03.005Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2025-09-26T23:45:02.094Z"),
          modifiedAt: null,
          id: "<value>",
          label: "<value>",
          amount: 475844,
          taxAmount: 549894,
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