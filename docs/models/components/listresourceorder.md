# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2025-11-08T20:16:52.924Z"),
      modifiedAt: new Date("2025-03-20T05:44:31.552Z"),
      id: "<value>",
      metadata: {
        "key": 392735,
      },
      status: "<value>",
      amount: 164327,
      taxAmount: 115730,
      refundedAmount: 299666,
      refundedTaxAmount: 692805,
      currency: "Colombian Peso",
      billingReason: "purchase",
      billingAddress: {
        country: "US",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-07-16T11:44:37.294Z"),
        modifiedAt: new Date("2023-09-22T08:15:25.457Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Theron66@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-09-19T09:06:06.239Z"),
        modifiedAt: new Date("2025-06-03T18:58:37.464Z"),
        id: "<value>",
        name: "<value>",
        description:
          "ouch bump doorpost shrilly athwart marvelous hourly celebrated yippee but",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2024-11-19T05:40:00.333Z"),
        modifiedAt: new Date("2025-10-18T12:49:42.272Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        type: "fixed",
        basisPoints: 854088,
        createdAt: new Date("2024-05-12T21:58:45.738Z"),
        modifiedAt: new Date("2025-10-14T06:29:58.286Z"),
        id: "<value>",
        metadata: {
          "key": 85424,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-03-16T12:13:21.445Z"),
        endsAt: new Date("2025-12-12T14:47:34.950Z"),
        maxRedemptions: 399359,
        redemptionsCount: 587459,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      subscription: {
        metadata: {
          "key": 158896,
        },
        createdAt: new Date("2023-05-18T14:30:43.189Z"),
        modifiedAt: new Date("2023-08-22T02:45:34.555Z"),
        id: "<value>",
        amount: 605338,
        currency: "Kyat",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2023-12-22T03:14:01.788Z"),
        currentPeriodEnd: new Date("2024-03-12T12:58:14.251Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-04-09T00:58:16.271Z"),
        startedAt: new Date("2025-03-19T06:46:43.895Z"),
        endsAt: new Date("2023-08-31T15:55:06.856Z"),
        endedAt: new Date("2023-09-07T12:44:08.279Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 651776,
    maxPage: 561103,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |