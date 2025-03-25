# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-12-30T04:19:31.943Z"),
        modifiedAt: new Date("2023-02-22T04:07:24.139Z"),
        id: "<value>",
        metadata: {
          "key": 409380,
        },
        status: "partially_refunded",
        paid: true,
        subtotalAmount: 154916,
        discountAmount: 823715,
        netAmount: 130418,
        amount: 772858,
        taxAmount: 892749,
        totalAmount: 746511,
        refundedAmount: 949446,
        refundedTaxAmount: 600315,
        currency: "Falkland Islands Pound",
        billingReason: "subscription_update",
        billingAddress: {
          country: "FR",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-07-07T22:11:11.258Z"),
          modifiedAt: new Date("2024-08-02T20:37:27.184Z"),
          metadata: {
            "key": false,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-09-05T14:38:16.890Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Abagail_Wilderman54@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-03-24T10:58:16.071Z"),
          modifiedAt: new Date("2024-11-12T23:45:49.092Z"),
          id: "<value>",
          name: "<value>",
          description:
            "queasily likewise helplessly um convoke affiliate acidly",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-01-15T03:27:12.416Z"),
          modifiedAt: new Date("2024-01-21T09:24:32.337Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 796190,
          maximumAmount: 141696,
          presetAmount: 820801,
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 144686,
          createdAt: new Date("2023-08-24T17:55:33.239Z"),
          modifiedAt: new Date("2024-07-21T04:59:48.153Z"),
          id: "<value>",
          metadata: {
            "key": 261600,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-11-03T21:33:58.006Z"),
          endsAt: new Date("2025-04-19T15:12:09.561Z"),
          maxRedemptions: 77872,
          redemptionsCount: 898190,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": 753003,
          },
          createdAt: new Date("2023-06-19T10:52:57.240Z"),
          modifiedAt: new Date("2025-05-14T13:39:05.949Z"),
          id: "<value>",
          amount: 254354,
          currency: "UAE Dirham",
          recurringInterval: "year",
          status: "past_due",
          currentPeriodStart: new Date("2025-01-05T21:59:18.509Z"),
          currentPeriodEnd: new Date("2024-10-18T02:15:44.818Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-09-12T14:54:20.124Z"),
          startedAt: new Date("2023-12-27T16:45:58.853Z"),
          endsAt: new Date("2023-01-09T03:00:56.460Z"),
          endedAt: new Date("2025-09-26T15:24:16.086Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2023-07-04T05:11:18.697Z"),
            modifiedAt: new Date("2023-01-01T11:08:29.712Z"),
            id: "<value>",
            label: "<value>",
            amount: 785188,
            taxAmount: 343742,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 284430,
      maxPage: 531497,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |