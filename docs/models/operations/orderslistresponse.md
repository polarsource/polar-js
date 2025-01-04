# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-31T12:03:59.290Z"),
        modifiedAt: new Date("2024-01-30T10:01:58.731Z"),
        id: "<value>",
        metadata: {
          "key": 262400,
        },
        amount: 558907,
        taxAmount: 831639,
        currency: "Iranian Rial",
        billingReason: "subscription_create",
        billingAddress: {
          country: "Ukraine",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2024-08-25T12:31:12.659Z"),
          modifiedAt: new Date("2023-09-13T01:01:31.367Z"),
          id: "<value>",
          metadata: {
            "key": 500943,
          },
          email: "Alexis.Robel@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Lucia",
          },
          taxId: [
            "ru_inn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://close-antelope.info/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Myrna1@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-10-05T21:40:56.060Z"),
          modifiedAt: new Date("2024-10-20T18:16:25.401Z"),
          id: "<value>",
          name: "<value>",
          description:
            "nor completion apud mysteriously sock ample usable gray",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-03-25T08:40:52.618Z"),
          modifiedAt: new Date("2024-07-12T23:57:26.668Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 514627,
        },
        discount: {
          duration: "forever",
          type: "percentage",
          amount: 777583,
          currency: "Russian Ruble",
          createdAt: new Date("2023-01-19T08:43:15.594Z"),
          modifiedAt: new Date("2025-01-10T09:38:27.401Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-08T16:49:01.680Z"),
          endsAt: new Date("2024-02-21T13:36:12.093Z"),
          maxRedemptions: 573501,
          redemptionsCount: 224738,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2025-09-16T06:41:00.610Z"),
          modifiedAt: new Date("2024-01-02T17:03:51.334Z"),
          id: "<value>",
          amount: 63661,
          currency: "CFA Franc BEAC",
          recurringInterval: "year",
          status: "canceled",
          currentPeriodStart: new Date("2025-11-03T00:52:46.065Z"),
          currentPeriodEnd: new Date("2025-08-16T20:34:49.918Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-07-24T08:00:42.998Z"),
          startedAt: new Date("2025-12-07T03:10:47.772Z"),
          endsAt: new Date("2024-04-24T18:34:12.157Z"),
          endedAt: new Date("2023-10-01T16:51:40.339Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "unused",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 882022,
      maxPage: 59383,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |