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
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        id: "<value>",
        createdAt: new Date("2025-05-31T12:38:58.045Z"),
        modifiedAt: new Date("2024-07-01T22:48:54.737Z"),
        trialInterval: null,
        trialIntervalCount: 57218,
        name: "<value>",
        description:
          "arraign but insistent provided apud um furiously palate devise yowza",
        visibility: "private",
        recurringInterval: "year",
        recurringIntervalCount: 344241,
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Applications",
            mimeType: "<value>",
            size: 764885,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-04-23T23:01:02.489Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2025-12-09T18:31:15.290Z"),
            sizeReadable: "<value>",
            publicUrl: "https://winding-godfather.name/",
          },
        ],
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
              updatePlan: false,
            },
          },
        },
      },
      subscription: {
        createdAt: new Date("2026-10-22T14:36:45.718Z"),
        modifiedAt: new Date("2025-04-25T00:52:48.048Z"),
        id: "<value>",
        amount: 10000,
        currency: "usd",
        recurringInterval: "year",
        recurringIntervalCount: 407509,
        status: "past_due",
        currentPeriodStart: new Date("2026-09-10T09:16:21.463Z"),
        currentPeriodEnd: new Date("2026-08-19T12:31:37.057Z"),
        trialStart: new Date("2026-11-06T17:52:28.201Z"),
        trialEnd: new Date("2025-11-23T23:29:50.024Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-09-29T05:04:46.307Z"),
        startedAt: new Date("2025-01-11T03:08:05.126Z"),
        endsAt: new Date("2024-07-05T00:51:04.924Z"),
        endedAt: new Date("2024-09-26T17:50:53.338Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: null,
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
      },
      items: [
        {
          createdAt: new Date("2026-07-29T12:39:40.191Z"),
          modifiedAt: new Date("2026-07-27T15:03:31.368Z"),
          id: "<value>",
          label: "Pro Plan",
          amount: 10000,
          taxAmount: 720,
          proration: false,
          productPriceId: "<value>",
        },
      ],
      description: "Pro Plan",
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