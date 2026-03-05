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
            path: "/private/tmp",
            mimeType: "<value>",
            size: 16733,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2026-12-06T15:49:55.309Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2025-07-11T05:48:37.631Z"),
            sizeReadable: "<value>",
            publicUrl: "https://impressionable-viability.com/",
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
        currentPeriodEnd: new Date("2026-04-25T19:12:17.639Z"),
        trialStart: new Date("2025-07-25T01:03:46.818Z"),
        trialEnd: new Date("2026-09-06T02:36:50.793Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-02-27T03:03:35.134Z"),
        startedAt: new Date("2024-12-11T17:15:19.456Z"),
        endsAt: new Date("2026-05-22T22:43:11.961Z"),
        endedAt: new Date("2026-06-01T22:56:15.909Z"),
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