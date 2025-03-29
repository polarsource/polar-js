# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2025-02-15T09:24:38.615Z"),
      modifiedAt: new Date("2023-01-15T11:49:02.871Z"),
      id: "<value>",
      metadata: {
        "key": 498330,
      },
      status: "refunded",
      paid: true,
      subtotalAmount: 313064,
      discountAmount: 104097,
      netAmount: 825257,
      amount: 9822,
      taxAmount: 873132,
      totalAmount: 106497,
      refundedAmount: 125701,
      refundedTaxAmount: 166229,
      currency: "Belarusian Ruble",
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
        createdAt: new Date("2023-07-05T17:41:09.307Z"),
        modifiedAt: new Date("2023-05-04T07:39:48.578Z"),
        metadata: {
          "key": 699707,
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
        deletedAt: new Date("2025-04-19T15:11:07.418Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Mike47@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-04-16T16:09:45.798Z"),
        modifiedAt: new Date("2024-07-07T09:44:17.770Z"),
        id: "<value>",
        name: "<value>",
        description: "expatiate woot smoothly gosh gadzooks where furiously",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2023-01-29T09:13:03.501Z"),
        modifiedAt: new Date("2025-10-21T22:03:00.999Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 458545,
      },
      discount: {
        duration: "once",
        durationInMonths: 932252,
        type: "percentage",
        basisPoints: 280418,
        createdAt: new Date("2024-04-22T05:47:33.050Z"),
        modifiedAt: new Date("2025-10-09T10:00:22.006Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-03-09T20:02:32.363Z"),
        endsAt: new Date("2023-07-26T20:04:49.437Z"),
        maxRedemptions: 225621,
        redemptionsCount: 179389,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": "<value>",
        },
        createdAt: new Date("2025-02-25T13:18:01.458Z"),
        modifiedAt: new Date("2023-06-27T11:59:02.381Z"),
        id: "<value>",
        amount: 455389,
        currency: "Boliviano boliviano",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2025-09-27T15:10:59.185Z"),
        currentPeriodEnd: new Date("2025-02-12T00:39:06.977Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-09-20T03:09:49.442Z"),
        startedAt: new Date("2024-06-20T01:11:23.657Z"),
        endsAt: new Date("2023-07-05T14:21:45.884Z"),
        endedAt: new Date("2024-03-24T22:59:34.235Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
      },
      items: [
        {
          createdAt: new Date("2024-08-16T04:54:46.128Z"),
          modifiedAt: new Date("2025-09-09T08:25:10.783Z"),
          id: "<value>",
          label: "<value>",
          amount: 592378,
          taxAmount: 256631,
          proration: false,
          productPriceId: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 952587,
    maxPage: 173926,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |