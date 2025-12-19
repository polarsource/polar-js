# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2025-12-20T05:17:36.698Z"),
      modifiedAt: new Date("2024-08-19T22:33:31.713Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "day",
      recurringIntervalCount: 11381,
      status: "incomplete",
      currentPeriodStart: new Date("2023-06-22T05:37:36.578Z"),
      currentPeriodEnd: new Date("2025-05-04T08:08:19.321Z"),
      trialStart: null,
      trialEnd: new Date("2024-09-18T17:56:40.238Z"),
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2024-11-19T01:45:47.615Z"),
      startedAt: null,
      endsAt: new Date("2023-08-16T04:57:32.501Z"),
      endedAt: new Date("2023-09-10T21:56:03.551Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: null,
      customerCancellationReason: "unused",
      customerCancellationComment: "<value>",
      metadata: {
        "key": 1262.44,
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-05-06T20:26:26.597Z"),
        modifiedAt: new Date("2023-10-27T12:38:37.731Z"),
        metadata: {
          "key": 612623,
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
        deletedAt: new Date("2023-09-12T22:43:44.126Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      product: {
        id: "<value>",
        createdAt: new Date("2024-02-04T10:44:12.276Z"),
        modifiedAt: new Date("2024-01-03T02:01:45.933Z"),
        trialInterval: "week",
        trialIntervalCount: 889423,
        name: "<value>",
        description: "joyously biodegrade beside",
        recurringInterval: "year",
        recurringIntervalCount: null,
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 9159.56,
        },
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-11-20T23:12:51.407Z"),
            modifiedAt: new Date("2023-01-07T14:45:36.833Z"),
            type: "meter_credit",
            description: "yowza revoke in heavenly cautious wearily",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            metadata: {
              "key": "<value>",
            },
            properties: {
              units: 76669,
              rollover: false,
              meterId: "<value>",
            },
          },
        ],
        medias: [],
        attachedCustomFields: [],
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 1000,
        currency: "usd",
        createdAt: new Date("2024-04-08T09:15:27.816Z"),
        modifiedAt: new Date("2025-10-02T19:46:14.425Z"),
        id: "<value>",
        metadata: {
          "key": 2173.06,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-07-22T01:23:46.436Z"),
        endsAt: new Date("2023-10-25T03:56:27.220Z"),
        maxRedemptions: 50796,
        redemptionsCount: 458242,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2025-11-16T17:21:28.873Z"),
          modifiedAt: new Date("2024-12-29T22:07:08.859Z"),
          id: "<value>",
          source: "catalog",
          amountType: "fixed",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          priceCurrency: "<value>",
          priceAmount: 97979,
          legacy: true,
        },
      ],
      meters: [],
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |