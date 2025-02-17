# ListResourceOrder

## Example Usage

```typescript
import { ListResourceOrder } from "@polar-sh/sdk/models/components/listresourceorder.js";

let value: ListResourceOrder = {
  items: [
    {
      createdAt: new Date("2023-11-07T16:12:23.476Z"),
      modifiedAt: new Date("2025-12-14T14:02:07.542Z"),
      id: "<value>",
      metadata: {
        "key": 170252,
      },
      status: "<value>",
      amount: 120927,
      taxAmount: 901357,
      refundedAmount: 810244,
      refundedTaxAmount: 619301,
      currency: "Denar",
      billingReason: "subscription_update",
      billingAddress: {
        country: "French Southern Territories",
      },
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      subscriptionId: "<value>",
      checkoutId: "<value>",
      customer: {
        createdAt: new Date("2024-12-02T06:44:12.845Z"),
        modifiedAt: new Date("2025-03-18T13:58:56.966Z"),
        id: "<value>",
        metadata: {
          "key": 168732,
        },
        email: "Randal45@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Samoa",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://passionate-markup.name/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Orion_Keeling19@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-12-02T03:22:48.570Z"),
        modifiedAt: new Date("2024-03-03T12:05:11.807Z"),
        id: "<value>",
        name: "<value>",
        description: "avaricious lid imaginative bid vague",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
      },
      productPrice: {
        createdAt: new Date("2025-02-18T21:52:41.487Z"),
        modifiedAt: new Date("2024-12-28T10:34:57.471Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 767479,
        maximumAmount: 572426,
        presetAmount: 807291,
      },
      discount: {
        duration: "repeating",
        durationInMonths: 357620,
        type: "fixed",
        basisPoints: 637186,
        createdAt: new Date("2024-11-23T01:06:43.392Z"),
        modifiedAt: new Date("2023-01-27T04:56:36.497Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-09-01T04:11:11.405Z"),
        endsAt: new Date("2023-03-01T17:18:33.209Z"),
        maxRedemptions: 153199,
        redemptionsCount: 656781,
        organizationId: "<value>",
      },
      subscription: {
        metadata: {
          "key": 846938,
        },
        createdAt: new Date("2023-04-27T10:52:20.408Z"),
        modifiedAt: new Date("2025-06-28T03:36:20.568Z"),
        id: "<value>",
        amount: 650918,
        currency: "Czech Koruna",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2023-04-29T08:52:25.241Z"),
        currentPeriodEnd: new Date("2023-10-20T00:37:00.901Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-12-01T04:42:08.759Z"),
        startedAt: new Date("2024-02-22T02:38:09.369Z"),
        endsAt: new Date("2025-04-18T17:00:11.017Z"),
        endedAt: new Date("2024-08-10T12:03:37.307Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        userId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 111026,
    maxPage: 733747,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Order](../../models/components/order.md)[]         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |