# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-11T20:33:26.772Z"),
        modifiedAt: new Date("2024-09-21T23:39:35.603Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        amount: 455838,
        taxAmount: 682564,
        currency: "Pakistan Rupee",
        billingReason: "subscription_create",
        billingAddress: {
          country: "Cape Verde",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2023-09-16T09:33:09.269Z"),
          modifiedAt: new Date("2022-02-09T12:55:51.265Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Melvin67@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Suriname",
          },
          taxId: [
            "hr_oib",
          ],
          organizationId: "<value>",
          avatarUrl: "https://baggy-airline.net",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Randi.Wilderman50@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2022-04-21T18:58:19.815Z"),
          modifiedAt: new Date("2023-08-17T02:13:31.093Z"),
          id: "<value>",
          name: "<value>",
          description: "thread excepting unnecessarily",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-06-21T02:08:41.206Z"),
          modifiedAt: new Date("2023-06-23T22:06:31.167Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 804881,
          maximumAmount: 152042,
          presetAmount: 988523,
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 759401,
          type: "percentage",
          basisPoints: 795071,
          createdAt: new Date("2024-12-31T01:26:55.915Z"),
          modifiedAt: new Date("2024-01-19T23:29:36.422Z"),
          id: "<value>",
          metadata: {
            "key": 698666,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-04-11T05:49:26.732Z"),
          endsAt: new Date("2023-05-20T14:58:04.167Z"),
          maxRedemptions: 228869,
          redemptionsCount: 218081,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2024-04-11T07:27:11.730Z"),
          modifiedAt: new Date("2023-01-19T02:44:06.797Z"),
          id: "<value>",
          amount: 758592,
          currency: "Bahamian Dollar",
          recurringInterval: "year",
          status: "incomplete",
          currentPeriodStart: new Date("2023-10-13T18:11:53.175Z"),
          currentPeriodEnd: new Date("2022-01-29T06:07:04.295Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-02-04T07:28:31.329Z"),
          endedAt: new Date("2024-05-18T00:02:04.577Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 412393,
      maxPage: 356112,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |