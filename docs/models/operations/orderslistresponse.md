# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-24T09:57:26.547Z"),
        modifiedAt: new Date("2023-07-14T03:19:46.807Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        status: "refunded",
        paid: true,
        subtotalAmount: 533400,
        discountAmount: 472275,
        netAmount: 102322,
        amount: 874587,
        taxAmount: 727829,
        totalAmount: 874430,
        refundedAmount: 390177,
        refundedTaxAmount: 616341,
        currency: "Cayman Islands Dollar",
        billingReason: "subscription_update",
        billingAddress: {
          country: "SE",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-06-12T21:37:48.282Z"),
          modifiedAt: new Date("2024-10-08T09:36:24.328Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "SE",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-04-18T09:41:21.758Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Bettye.Koepp37@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-12-09T07:09:11.821Z"),
          modifiedAt: new Date("2023-07-09T20:56:25.469Z"),
          id: "<value>",
          name: "<value>",
          description: "glider concerned oof incidentally space ew",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-03-08T05:25:47.111Z"),
          modifiedAt: new Date("2025-04-05T06:58:41.609Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 2466,
          type: "percentage",
          basisPoints: 590299,
          createdAt: new Date("2025-01-05T21:59:18.509Z"),
          modifiedAt: new Date("2024-10-18T02:15:44.818Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-12-27T16:45:58.853Z"),
          endsAt: new Date("2023-01-09T03:00:56.460Z"),
          maxRedemptions: 912082,
          redemptionsCount: 438866,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-01-01T11:08:29.712Z"),
          modifiedAt: new Date("2025-05-10T13:34:28.933Z"),
          id: "<value>",
          amount: 343742,
          currency: "Falkland Islands Pound",
          recurringInterval: "year",
          status: "active",
          currentPeriodStart: new Date("2024-11-09T07:05:20.079Z"),
          currentPeriodEnd: new Date("2023-01-05T14:48:18.182Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-02-04T21:25:07.192Z"),
          startedAt: new Date("2025-12-04T03:24:29.291Z"),
          endsAt: new Date("2023-08-16T02:19:13.665Z"),
          endedAt: new Date("2023-12-26T15:44:15.373Z"),
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
            createdAt: new Date("2024-07-02T10:31:53.774Z"),
            modifiedAt: new Date("2024-03-15T03:16:57.341Z"),
            id: "<value>",
            label: "<value>",
            amount: 404383,
            taxAmount: 421528,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 702095,
      maxPage: 451913,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |