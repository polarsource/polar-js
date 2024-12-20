# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-24T20:28:30.681Z"),
        modifiedAt: new Date("2023-05-28T07:40:18.625Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        amount: 619856,
        taxAmount: 145788,
        currency: "Swiss Franc",
        billingReason: "subscription_create",
        billingAddress: {
          country: "Svalbard & Jan Mayen Islands",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2022-12-22T00:55:04.745Z"),
          modifiedAt: new Date("2024-09-01T06:40:45.626Z"),
          id: "<value>",
          metadata: {
            "key": 708312,
          },
          email: "Alysson.Nitzsche@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Zambia",
          },
          taxId: [
            "is_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://pushy-cinema.info/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Jermey_Bahringer45@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-07-22T07:02:26.933Z"),
          modifiedAt: new Date("2022-05-07T00:58:07.143Z"),
          id: "<value>",
          name: "<value>",
          description:
            "blah sugary throbbing which well madly generally haversack tense intently",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-08-05T15:05:18.750Z"),
          modifiedAt: new Date("2023-08-18T14:54:19.654Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 5253,
          maximumAmount: 911003,
          presetAmount: 522192,
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 980995,
          createdAt: new Date("2023-04-30T05:00:39.346Z"),
          modifiedAt: new Date("2024-02-04T23:21:36.977Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2022-04-25T12:59:08.238Z"),
          endsAt: new Date("2023-09-30T03:33:59.750Z"),
          maxRedemptions: 458572,
          redemptionsCount: 992175,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2022-07-24T01:54:16.556Z"),
          modifiedAt: new Date("2022-04-17T23:23:59.287Z"),
          id: "<value>",
          amount: 453638,
          currency: "Lek",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2024-08-26T01:26:53.760Z"),
          currentPeriodEnd: new Date("2024-11-21T17:00:59.466Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-10-01T21:33:32.957Z"),
          endedAt: new Date("2024-09-28T16:24:17.935Z"),
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
      totalCount: 334873,
      maxPage: 386586,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |