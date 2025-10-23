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
        createdAt: new Date("2024-10-21T10:07:05.567Z"),
        modifiedAt: new Date("2025-10-06T23:18:15.275Z"),
        metadata: {
          "key": 8022.6,
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
        deletedAt: new Date("2025-09-25T13:44:27.391Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      product: {
        id: "<value>",
        createdAt: new Date("2024-06-29T11:55:37.867Z"),
        modifiedAt: null,
        trialInterval: "week",
        trialIntervalCount: 279574,
        name: "<value>",
        description: "sense busily outside extremely challenge",
        recurringInterval: "month",
        recurringIntervalCount: null,
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": 3270.53,
        },
        prices: [
          {
            createdAt: new Date("2024-08-30T00:59:04.800Z"),
            modifiedAt: new Date("2023-11-19T07:09:34.058Z"),
            id: "<value>",
            amountType: "free",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            legacy: true,
          },
        ],
        benefits: [],
        medias: [],
        attachedCustomFields: [],
      },
      discount: {
        duration: "forever",
        durationInMonths: 300165,
        type: "fixed",
        amount: 1000,
        currency: "usd",
        createdAt: new Date("2023-05-29T14:09:28.797Z"),
        modifiedAt: null,
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-01-13T13:43:10.078Z"),
        endsAt: new Date("2024-08-25T16:24:44.378Z"),
        maxRedemptions: 731444,
        redemptionsCount: 88175,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [],
      meters: [
        {
          createdAt: new Date("2025-07-24T18:19:06.074Z"),
          modifiedAt: new Date("2024-09-19T00:13:29.723Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {},
            createdAt: new Date("2024-10-27T01:55:18.902Z"),
            modifiedAt: new Date("2024-06-09T17:37:57.976Z"),
            id: "<value>",
            name: "<value>",
            filter: {
              conjunction: "and",
              clauses: [
                {
                  conjunction: "or",
                  clauses: [],
                },
              ],
            },
            aggregation: {},
            organizationId: "<value>",
          },
        },
      ],
    },
  ],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |