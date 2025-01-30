# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-18T12:21:35.318Z"),
        modifiedAt: new Date("2024-01-03T07:20:18.003Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "<value>",
        amount: 242932,
        taxAmount: 580303,
        refundedAmount: 130247,
        refundedTaxAmount: 883330,
        currency: "Bahamian Dollar",
        billingReason: "subscription_cycle",
        billingAddress: {
          country: "Curacao",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2025-04-09T06:38:23.918Z"),
          modifiedAt: new Date("2023-07-21T21:02:29.433Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Melody_Lynch@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Egypt",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://enchanting-octave.biz/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Stanley.Welch1@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-07-04T13:03:20.225Z"),
          modifiedAt: new Date("2024-01-30T18:20:23.958Z"),
          id: "<value>",
          name: "<value>",
          description:
            "between against provider notwithstanding to glittering until democratize immaculate",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-06-01T07:26:36.126Z"),
          modifiedAt: new Date("2024-11-10T02:57:45.716Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 546859,
          maximumAmount: 673079,
          presetAmount: 638267,
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 120976,
          createdAt: new Date("2025-03-10T04:43:52.607Z"),
          modifiedAt: new Date("2023-08-05T09:02:26.709Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-11-12T09:37:47.736Z"),
          endsAt: new Date("2023-02-09T03:20:07.090Z"),
          maxRedemptions: 30199,
          redemptionsCount: 448338,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": 176610,
          },
          createdAt: new Date("2025-03-05T05:55:41.747Z"),
          modifiedAt: new Date("2025-10-26T08:46:25.013Z"),
          id: "<value>",
          amount: 498480,
          currency: "Boliviano boliviano",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2025-07-01T18:33:39.424Z"),
          currentPeriodEnd: new Date("2024-09-10T21:36:58.913Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-07-09T08:40:48.312Z"),
          startedAt: new Date("2024-02-18T01:32:51.561Z"),
          endsAt: new Date("2024-07-01T15:28:38.660Z"),
          endedAt: new Date("2023-03-31T02:34:43.087Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "missing_features",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 915652,
      maxPage: 853453,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |