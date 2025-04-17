# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-06-18T02:56:08.754Z"),
        modifiedAt: new Date("2025-07-07T12:47:13.276Z"),
        id: "<value>",
        metadata: {
          "key": 151415,
        },
        status: "paid",
        paid: true,
        subtotalAmount: 635381,
        discountAmount: 714409,
        netAmount: 515356,
        amount: 431945,
        taxAmount: 881695,
        totalAmount: 759912,
        refundedAmount: 562703,
        refundedTaxAmount: 534015,
        currency: "Belize Dollar",
        billingReason: "subscription_create",
        billingAddress: {
          country: "SE",
        },
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-06-03T00:19:30.299Z"),
          modifiedAt: new Date("2025-10-03T16:05:36.713Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-10-31T02:47:18.612Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": 6072.74,
          },
          createdAt: new Date("2025-02-26T09:15:51.040Z"),
          modifiedAt: new Date("2023-04-14T23:09:22.753Z"),
          id: "<value>",
          name: "<value>",
          description:
            "programme gadzooks wiggly unfortunately fooey drive bah",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 497145,
          createdAt: new Date("2023-02-18T07:41:25.454Z"),
          modifiedAt: new Date("2023-02-22T20:45:46.812Z"),
          id: "<value>",
          metadata: {
            "key": 2837.15,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-08-17T14:11:18.065Z"),
          endsAt: new Date("2025-06-20T09:54:03.220Z"),
          maxRedemptions: 774227,
          redemptionsCount: 214740,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": false,
          },
          createdAt: new Date("2025-02-24T20:20:29.546Z"),
          modifiedAt: new Date("2023-05-24T11:40:33.238Z"),
          id: "<value>",
          amount: 876881,
          currency: "Congolese Franc",
          recurringInterval: "year",
          status: "unpaid",
          currentPeriodStart: new Date("2025-05-01T12:49:50.437Z"),
          currentPeriodEnd: new Date("2023-12-06T02:57:13.562Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-08-08T04:03:19.582Z"),
          startedAt: new Date("2025-01-30T05:47:34.515Z"),
          endsAt: new Date("2025-05-30T04:39:36.747Z"),
          endedAt: new Date("2024-04-08T09:15:27.816Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-10-02T19:46:14.425Z"),
            modifiedAt: new Date("2025-08-17T04:59:53.663Z"),
            id: "<value>",
            label: "<value>",
            amount: 723796,
            taxAmount: 217306,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 430488,
      maxPage: 991210,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |