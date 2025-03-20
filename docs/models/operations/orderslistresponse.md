# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-06-02T01:17:23.131Z"),
        modifiedAt: new Date("2023-12-23T07:27:41.103Z"),
        id: "<value>",
        metadata: {
          "key": 784638,
        },
        status: "paid",
        paid: true,
        subtotalAmount: 292398,
        discountAmount: 856627,
        netAmount: 923082,
        amount: 716942,
        taxAmount: 12097,
        totalAmount: 43142,
        refundedAmount: 577724,
        refundedTaxAmount: 775803,
        currency: "Pula",
        billingReason: "subscription_update",
        billingAddress: {
          country: "FR",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-05-18T05:57:25.334Z"),
          modifiedAt: new Date("2024-12-11T18:13:57.013Z"),
          metadata: {
            "key": 92645,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-07-20T11:05:10.084Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Lavada_Simonis-Greenfelder@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-08-17T02:26:23.783Z"),
          modifiedAt: new Date("2024-08-01T13:53:00.776Z"),
          id: "<value>",
          name: "<value>",
          description: "wherever from duh",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-01-23T08:51:17.105Z"),
          modifiedAt: new Date("2024-06-23T19:13:34.057Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 886956,
          createdAt: new Date("2023-10-15T09:45:27.346Z"),
          modifiedAt: new Date("2025-01-08T08:40:15.114Z"),
          id: "<value>",
          metadata: {
            "key": 541071,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-23T09:17:22.501Z"),
          endsAt: new Date("2024-01-29T13:28:14.825Z"),
          maxRedemptions: 68330,
          redemptionsCount: 342279,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2025-06-20T14:12:24.330Z"),
          modifiedAt: new Date("2025-12-19T20:55:47.008Z"),
          id: "<value>",
          amount: 812791,
          currency: "South Sudanese pound",
          recurringInterval: "year",
          status: "past_due",
          currentPeriodStart: new Date("2024-09-14T07:08:11.699Z"),
          currentPeriodEnd: new Date("2024-03-20T05:37:30.541Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-07-09T22:31:57.118Z"),
          startedAt: new Date("2024-12-16T12:35:19.578Z"),
          endsAt: new Date("2023-01-28T14:16:24.495Z"),
          endedAt: new Date("2023-09-12T00:09:19.046Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-07-01T02:17:09.628Z"),
            modifiedAt: new Date("2024-01-26T15:42:40.610Z"),
            id: "<value>",
            label: "<value>",
            amount: 427119,
            taxAmount: 573342,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 76050,
      maxPage: 262790,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |