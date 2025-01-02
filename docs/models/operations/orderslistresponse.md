# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-30T14:06:00.507Z"),
        modifiedAt: new Date("2025-10-11T05:12:55.893Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        amount: 550564,
        taxAmount: 973111,
        currency: "Cayman Islands Dollar",
        billingReason: "subscription_update",
        billingAddress: {
          country: "Antigua and Barbuda",
        },
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        customer: {
          createdAt: new Date("2024-07-28T05:07:27.507Z"),
          modifiedAt: new Date("2023-01-04T03:36:40.213Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Hassie_Jacobson@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Azerbaijan",
          },
          taxId: [
            "jp_rn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://trusting-fog.info",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Jaden59@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-08-29T10:19:40.657Z"),
          modifiedAt: new Date("2024-10-04T08:38:09.184Z"),
          id: "<value>",
          name: "<value>",
          description:
            "psst hamburger help on drat woot carelessly preclude ew",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
        },
        productPrice: {
          createdAt: new Date("2024-06-08T17:30:09.345Z"),
          modifiedAt: new Date("2025-10-02T16:17:12.780Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 677492,
          maximumAmount: 319975,
          presetAmount: 765552,
          recurringInterval: "month",
        },
        discount: {
          duration: "forever",
          type: "fixed",
          basisPoints: 500629,
          createdAt: new Date("2023-04-21T18:22:25.645Z"),
          modifiedAt: new Date("2025-07-17T08:39:28.965Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-09-15T09:57:46.655Z"),
          endsAt: new Date("2023-02-19T01:11:58.352Z"),
          maxRedemptions: 852874,
          redemptionsCount: 842074,
          organizationId: "<value>",
        },
        subscription: {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2025-03-01T04:04:19.932Z"),
          modifiedAt: new Date("2023-03-01T00:27:19.326Z"),
          id: "<value>",
          amount: 811861,
          currency: "Dobra",
          recurringInterval: "year",
          status: "active",
          currentPeriodStart: new Date("2024-06-28T14:28:28.613Z"),
          currentPeriodEnd: new Date("2024-04-17T11:51:25.496Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-07-13T08:53:09.254Z"),
          endedAt: new Date("2025-06-12T15:23:06.895Z"),
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
      totalCount: 868374,
      maxPage: 15364,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |