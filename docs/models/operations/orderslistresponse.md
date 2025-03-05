# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-21T21:47:53.222Z"),
        modifiedAt: new Date("2024-05-04T22:23:11.834Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "<value>",
        amount: 620714,
        taxAmount: 320785,
        refundedAmount: 929086,
        refundedTaxAmount: 803796,
        currency: "Congolese Franc",
        billingReason: "subscription_update",
        billingAddress: {
          country: "US",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-11-12T05:07:17.320Z"),
          modifiedAt: new Date("2025-12-14T06:40:09.825Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Shanon.Raynor@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-02-20T07:18:49.357Z"),
          modifiedAt: new Date("2024-12-13T11:15:46.970Z"),
          id: "<value>",
          name: "<value>",
          description: "wilt while often as along with vice mount",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2025-04-18T04:27:12.304Z"),
          modifiedAt: new Date("2024-07-30T06:38:24.415Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 516759,
          maximumAmount: 852366,
          presetAmount: 122710,
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 630684,
          currency: "New Zealand Dollar",
          createdAt: new Date("2024-02-29T05:41:16.915Z"),
          modifiedAt: new Date("2024-04-22T11:23:06.527Z"),
          id: "<value>",
          metadata: {
            "key": 476719,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-11-21T22:44:43.009Z"),
          endsAt: new Date("2023-03-11T14:53:21.190Z"),
          maxRedemptions: 229557,
          redemptionsCount: 566873,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 241547,
          },
          createdAt: new Date("2023-04-12T21:22:01.938Z"),
          modifiedAt: new Date("2023-08-18T16:02:32.488Z"),
          id: "<value>",
          amount: 529650,
          currency: "Bhutanese Ngultrum",
          recurringInterval: "month",
          status: "incomplete",
          currentPeriodStart: new Date("2023-02-27T16:32:19.117Z"),
          currentPeriodEnd: new Date("2025-06-09T16:32:01.402Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-08-25T13:48:26.011Z"),
          startedAt: new Date("2025-10-19T23:59:57.430Z"),
          endsAt: new Date("2023-09-27T07:12:55.319Z"),
          endedAt: new Date("2023-06-02T04:00:17.091Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 593497,
      maxPage: 593545,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |