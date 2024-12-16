# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-27T16:23:16.148Z"),
        modifiedAt: new Date("2024-03-24T19:56:47.262Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 23181,
        taxAmount: 753618,
        currency: "Brazilian Real",
        billingReason: "subscription_update",
        billingAddress: {
          country: "Holy See (Vatican City State)",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2024-11-08T20:46:06.895Z"),
          modifiedAt: new Date("2022-03-12T03:02:47.547Z"),
          id: "<value>",
          metadata: {
            "key": 269806,
          },
          email: "Kara34@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Ethiopia",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://decent-operating.info",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Philip_Jones-Metz@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2022-11-08T11:19:47.753Z"),
          modifiedAt: new Date("2022-10-04T00:53:50.240Z"),
          id: "<value>",
          name: "<value>",
          description:
            "without worth furthermore and furthermore frankly absent stiff once",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-08-30T09:37:49.436Z"),
          modifiedAt: new Date("2023-05-11T02:47:53.663Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 63815,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          amount: 363835,
          currency: "Tunisian Dinar",
          createdAt: new Date("2022-04-22T23:49:59.353Z"),
          modifiedAt: new Date("2024-08-20T01:08:40.919Z"),
          id: "<value>",
          metadata: {
            "key": 81609,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-04-25T10:34:59.735Z"),
          endsAt: new Date("2023-10-17T01:08:36.559Z"),
          maxRedemptions: 623733,
          redemptionsCount: 737007,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": 643689,
          },
          createdAt: new Date("2024-06-18T05:00:51.297Z"),
          modifiedAt: new Date("2022-01-23T12:47:00.295Z"),
          id: "<value>",
          amount: 959714,
          currency: "Kenyan Shilling",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2024-10-27T13:33:53.166Z"),
          currentPeriodEnd: new Date("2024-10-04T02:51:01.618Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-06-15T05:16:58.669Z"),
          endedAt: new Date("2022-09-02T16:34:40.356Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 285971,
      maxPage: 829019,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |