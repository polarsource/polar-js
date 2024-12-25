# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-14T11:39:05.439Z"),
        modifiedAt: new Date("2022-11-22T18:08:51.311Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 419990,
        taxAmount: 410248,
        currency: "Libyan Dinar",
        billingReason: "subscription_cycle",
        billingAddress: {
          country: "Bonaire, Sint Eustatius and Saba",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2022-04-12T22:50:54.198Z"),
          modifiedAt: new Date("2022-06-20T08:26:29.394Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Alexandre.Schmidt@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Cameroon",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://cultivated-passport.name/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Destany_Kris67@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-04-19T01:05:03.927Z"),
          modifiedAt: new Date("2023-05-01T03:38:37.774Z"),
          id: "<value>",
          name: "<value>",
          description:
            "zowie thankfully submissive pro afterwards unabashedly great",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-04-02T06:32:43.364Z"),
          modifiedAt: new Date("2024-05-15T15:45:13.659Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 360744,
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 729858,
          createdAt: new Date("2024-09-26T16:56:57.899Z"),
          modifiedAt: new Date("2023-10-02T21:44:40.357Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-24T05:36:28.539Z"),
          endsAt: new Date("2023-08-22T02:59:30.434Z"),
          maxRedemptions: 252120,
          redemptionsCount: 642514,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2023-12-12T12:14:26.116Z"),
          modifiedAt: new Date("2022-03-03T01:21:59.910Z"),
          id: "<value>",
          amount: 188644,
          currency: "Dominican Peso",
          recurringInterval: "month",
          status: "unpaid",
          currentPeriodStart: new Date("2024-01-03T03:27:45.938Z"),
          currentPeriodEnd: new Date("2022-09-12T11:37:04.367Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2022-07-01T10:58:17.419Z"),
          endedAt: new Date("2022-02-22T23:07:25.713Z"),
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
      totalCount: 283012,
      maxPage: 336707,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |