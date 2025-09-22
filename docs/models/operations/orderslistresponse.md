# OrdersListResponse

## Example Usage

```typescript
import { OrdersListResponse } from "@polar-sh/sdk/models/operations/orderslist.js";

let value: OrdersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-07-07T12:47:13.276Z"),
        modifiedAt: new Date("2023-06-15T22:50:06.458Z"),
        status: "paid",
        paid: true,
        subtotalAmount: 635381,
        discountAmount: 714409,
        netAmount: 515356,
        taxAmount: 431945,
        totalAmount: 881695,
        fromBalanceAmount: 759912,
        refundedAmount: 562703,
        refundedTaxAmount: 534015,
        currency: "Belize Dollar",
        billingReason: "subscription_create",
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        isInvoiceGenerated: false,
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        subscriptionId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": 6072.74,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-11-29T23:08:09.503Z"),
          modifiedAt: new Date("2025-04-19T04:57:52.293Z"),
          metadata: {
            "key": 9564.92,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-08-01T02:10:59.019Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
        },
        userId: "<value>",
        product: {
          metadata: {
            "key": "<value>",
          },
          id: "<value>",
          createdAt: new Date("2024-09-10T09:53:33.542Z"),
          modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
          trialInterval: null,
          trialIntervalCount: 212587,
          name: "<value>",
          description:
            "ferociously sternly gah whoever drat regarding exterior ha",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: true,
          organizationId: "<value>",
        },
        discount: {
          duration: "forever",
          type: "fixed",
          amount: 100217,
          currency: "Rufiyaa",
          createdAt: new Date("2023-02-13T04:19:42.935Z"),
          modifiedAt: new Date("2025-09-05T23:46:12.711Z"),
          id: "<value>",
          metadata: {
            "key": 66.69,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-02T11:08:34.577Z"),
          endsAt: null,
          maxRedemptions: 595140,
          redemptionsCount: 625174,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        subscription: {
          metadata: {},
          createdAt: new Date("2024-11-20T15:28:12.891Z"),
          modifiedAt: new Date("2023-06-21T16:47:17.985Z"),
          id: "<value>",
          amount: 74671,
          currency: "Uganda Shilling",
          recurringInterval: "week",
          status: "incomplete",
          currentPeriodStart: new Date("2025-02-03T14:23:56.921Z"),
          currentPeriodEnd: new Date("2024-06-20T06:09:26.582Z"),
          trialStart: new Date("2023-03-30T20:20:03.602Z"),
          trialEnd: new Date("2025-11-20T18:15:09.797Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-07-26T03:49:25.286Z"),
          startedAt: new Date("2025-10-27T09:20:54.423Z"),
          endsAt: new Date("2025-02-12T10:41:21.406Z"),
          endedAt: new Date("2024-02-22T13:40:24.594Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: null,
          checkoutId: "<value>",
          customerCancellationReason: "too_complex",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2023-03-08T18:55:46.865Z"),
            modifiedAt: new Date("2024-05-21T03:01:04.091Z"),
            id: "<value>",
            label: "<value>",
            amount: 864952,
            taxAmount: 346483,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `result`                                                                     | [components.ListResourceOrder](../../models/components/listresourceorder.md) | :heavy_check_mark:                                                           | N/A                                                                          |