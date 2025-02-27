# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-09-29T02:21:43.678Z"),
        modifiedAt: new Date("2023-10-22T15:04:07.392Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "<value>",
        amount: 550176,
        taxAmount: 253702,
        refundedAmount: 512940,
        refundedTaxAmount: 378716,
        currency: "US Dollar",
        billingReason: "purchase",
        billingAddress: {
          country: "Cayman Islands",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2025-09-10T12:46:58.994Z"),
          modifiedAt: new Date("2023-08-18T00:51:36.294Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Stanton86@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Faroe Islands",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://messy-solution.info/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Jaycee35@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-01-15T04:46:55.730Z"),
          modifiedAt: new Date("2025-06-16T14:19:23.344Z"),
          id: "<value>",
          name: "<value>",
          description:
            "regarding permafrost wherever ouch monthly beloved ferociously peaceful",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2023-10-05T02:41:42.862Z"),
          modifiedAt: new Date("2023-04-30T14:22:23.092Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 329851,
        },
        discount: {
          duration: "repeating",
          durationInMonths: 595144,
          type: "percentage",
          basisPoints: 515870,
          createdAt: new Date("2024-03-17T00:43:09.766Z"),
          modifiedAt: new Date("2023-01-26T13:28:29.232Z"),
          id: "<value>",
          metadata: {
            "key": 547083,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-02-28T08:58:51.789Z"),
          endsAt: new Date("2023-09-26T19:08:10.033Z"),
          maxRedemptions: 456609,
          redemptionsCount: 729948,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2024-07-28T02:04:35.206Z"),
          modifiedAt: new Date("2024-11-03T00:00:06.328Z"),
          id: "<value>",
          amount: 277835,
          currency: "Comoro Franc",
          recurringInterval: "month",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2023-03-17T19:09:02.033Z"),
          currentPeriodEnd: new Date("2023-07-23T15:32:26.939Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-07-03T13:40:18.176Z"),
          startedAt: new Date("2024-06-09T14:49:19.697Z"),
          endsAt: new Date("2023-05-11T03:08:05.586Z"),
          endedAt: new Date("2025-11-15T14:53:51.188Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
          userId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 580770,
      maxPage: 539367,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |