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
        productPriceId: "<value>",
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
        user: {
          id: "<value>",
          email: "Lenny_Botsford15@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-10-02T10:08:37.346Z"),
          modifiedAt: new Date("2023-02-13T04:19:42.935Z"),
          id: "<value>",
          name: "<value>",
          description: "vastly outdo rubbery boo",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-07-14T11:06:57.535Z"),
          modifiedAt: new Date("2025-01-09T07:48:57.064Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 313876,
          maximumAmount: 844187,
          presetAmount: 273955,
        },
        discount: {
          duration: "forever",
          type: "percentage",
          amount: 32681,
          currency: "Pakistan Rupee",
          createdAt: new Date("2025-07-27T17:43:41.871Z"),
          modifiedAt: new Date("2024-11-25T10:35:23.060Z"),
          id: "<value>",
          metadata: {
            "key": 633805,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-11-12T19:17:09.365Z"),
          endsAt: new Date("2025-07-16T19:16:18.193Z"),
          maxRedemptions: 497145,
          redemptionsCount: 44088,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2024-12-04T12:27:30.421Z"),
          modifiedAt: new Date("2023-11-07T22:50:45.782Z"),
          id: "<value>",
          amount: 208568,
          currency: "Baht",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2025-10-10T00:29:39.589Z"),
          currentPeriodEnd: new Date("2025-02-24T20:20:29.546Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-05-24T11:40:33.238Z"),
          startedAt: new Date("2025-08-19T01:28:11.741Z"),
          endsAt: new Date("2023-06-30T04:52:24.272Z"),
          endedAt: new Date("2024-12-27T21:29:31.212Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "other",
          customerCancellationComment: "<value>",
          priceId: "<value>",
          userId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-05-01T12:49:50.437Z"),
            modifiedAt: new Date("2023-12-06T02:57:13.562Z"),
            id: "<value>",
            label: "<value>",
            amount: 199971,
            taxAmount: 693651,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 803097,
      maxPage: 422797,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |