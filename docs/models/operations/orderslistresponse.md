# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-05T06:58:41.609Z"),
        modifiedAt: new Date("2023-06-19T10:52:57.240Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        status: "<value>",
        subtotalAmount: 254354,
        discountAmount: 2466,
        netAmount: 777134,
        amount: 590299,
        taxAmount: 671457,
        totalAmount: 598626,
        refundedAmount: 232318,
        refundedTaxAmount: 329104,
        currency: "Afghani",
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
          createdAt: new Date("2023-07-04T05:11:18.697Z"),
          modifiedAt: new Date("2023-01-01T11:08:29.712Z"),
          metadata: {
            "key": false,
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
          deletedAt: new Date("2024-08-05T12:30:07.482Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Libby_Hickle20@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-05-06T00:22:28.522Z"),
          modifiedAt: new Date("2024-07-02T10:31:53.774Z"),
          id: "<value>",
          name: "<value>",
          description: "underneath whereas tough utterly however quit",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-08-01T13:53:00.776Z"),
          modifiedAt: new Date("2023-03-13T01:06:04.851Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 545567,
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 75613,
          currency: "Tunisian Dinar",
          createdAt: new Date("2023-03-17T04:18:02.494Z"),
          modifiedAt: new Date("2023-07-04T17:00:41.448Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-20T06:57:50.822Z"),
          endsAt: new Date("2023-02-07T21:52:59.274Z"),
          maxRedemptions: 60497,
          redemptionsCount: 482627,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 963408,
          },
          createdAt: new Date("2024-05-05T09:10:53.396Z"),
          modifiedAt: new Date("2025-02-17T11:55:41.330Z"),
          id: "<value>",
          amount: 350398,
          currency: "Yuan Renminbi",
          recurringInterval: "year",
          status: "active",
          currentPeriodStart: new Date("2024-09-15T21:22:35.169Z"),
          currentPeriodEnd: new Date("2025-05-31T21:39:06.690Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-01-23T08:51:17.105Z"),
          startedAt: new Date("2024-06-23T19:13:34.057Z"),
          endsAt: new Date("2024-07-09T12:16:50.674Z"),
          endedAt: new Date("2023-03-16T20:11:31.182Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_expensive",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-05-01T11:45:39.826Z"),
            modifiedAt: new Date("2024-10-18T16:24:14.861Z"),
            id: "<value>",
            label: "<value>",
            amount: 886956,
            taxAmount: 262232,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 673687,
      maxPage: 557580,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |