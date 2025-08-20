# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-07-07T12:47:13.276Z"),
        modifiedAt: new Date("2023-06-15T22:50:06.458Z"),
        status: "paid",
        paid: true,
        subtotalAmount: 635381,
        discountAmount: 714409,
        netAmount: 515356,
        taxAmount: 431945,
        totalAmount: 881695,
        refundedAmount: 759912,
        refundedTaxAmount: 562703,
        currency: "Malagasy Ariary",
        billingReason: "purchase",
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        isInvoiceGenerated: false,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-11-29T23:08:09.503Z"),
          modifiedAt: new Date("2025-04-19T04:57:52.293Z"),
          metadata: {
            "key": 9564.92,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-08-01T02:10:59.019Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2024-09-10T09:53:33.542Z"),
          modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
          id: "<value>",
          name: "<value>",
          description: null,
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 150108,
          createdAt: new Date("2023-04-20T20:07:27.928Z"),
          modifiedAt: new Date("2023-02-13T04:19:42.935Z"),
          id: "<value>",
          metadata: {},
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-31T01:19:30.644Z"),
          endsAt: null,
          maxRedemptions: 360581,
          redemptionsCount: 917395,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: null,
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
      totalCount: 47105,
      maxPage: 607201,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |