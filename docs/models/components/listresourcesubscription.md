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
      amount: 162513,
      currency: "Afghani",
      recurringInterval: "day",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2025-05-12T09:48:05.553Z"),
      currentPeriodEnd: new Date("2023-03-22T09:05:03.177Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-11-06T09:47:00.681Z"),
      startedAt: new Date("2024-11-19T01:45:47.615Z"),
      endsAt: null,
      endedAt: new Date("2023-08-16T04:57:32.501Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "customer_service",
      customerCancellationComment: "<value>",
      metadata: {
        "key": 694742,
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
        createdAt: new Date("2024-06-29T11:55:37.867Z"),
        modifiedAt: null,
        id: "<value>",
        name: "<value>",
        description: "nor so sleepily scram ascertain ascribe",
        recurringInterval: "day",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {},
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
        type: "fixed",
        amount: 730131,
        currency: "Argentine Peso",
        createdAt: new Date("2023-09-25T16:35:51.122Z"),
        modifiedAt: new Date("2023-02-17T22:27:48.746Z"),
        id: "<value>",
        metadata: {
          "key": 2446.34,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-16T07:39:17.060Z"),
        endsAt: new Date("2024-07-16T03:03:58.095Z"),
        maxRedemptions: 328255,
        redemptionsCount: 466795,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2024-12-26T00:38:16.576Z"),
          modifiedAt: new Date("2024-11-02T10:26:18.566Z"),
          id: "<value>",
          amountType: "custom",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "day",
          priceCurrency: "<value>",
          minimumAmount: 364459,
          maximumAmount: 334931,
          presetAmount: 317526,
          legacy: true,
        },
      ],
      meters: [
        {
          createdAt: new Date("2024-02-17T20:04:32.852Z"),
          modifiedAt: new Date("2024-05-28T01:02:31.690Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {},
            createdAt: new Date("2023-04-30T10:26:58.812Z"),
            modifiedAt: new Date("2025-02-17T07:09:21.144Z"),
            id: "<value>",
            name: "<value>",
            filter: {
              conjunction: "or",
              clauses: [],
            },
            aggregation: {
              func: "max",
              property: "<value>",
            },
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