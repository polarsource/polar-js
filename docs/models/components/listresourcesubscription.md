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
      trialStart: new Date("2024-09-18T17:56:40.238Z"),
      trialEnd: new Date("2025-05-30T07:43:56.615Z"),
      cancelAtPeriodEnd: false,
      canceledAt: null,
      startedAt: new Date("2023-08-16T04:57:32.501Z"),
      endsAt: new Date("2023-09-10T21:56:03.551Z"),
      endedAt: new Date("2023-03-07T10:05:14.304Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
      customerCancellationComment: "<value>",
      metadata: {},
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
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        metadata: {},
        prices: [
          {
            createdAt: new Date("2024-12-14T23:57:12.104Z"),
            modifiedAt: new Date("2025-02-07T10:27:56.492Z"),
            id: "<value>",
            amountType: "fixed",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "week",
            priceCurrency: "<value>",
            priceAmount: 350820,
            legacy: true,
          },
        ],
        benefits: [],
        medias: [],
        attachedCustomFields: [],
      },
      discount: {
        duration: "once",
        durationInMonths: 661521,
        type: "fixed",
        amount: 612623,
        currency: "Qatari Rial",
        createdAt: new Date("2023-08-09T19:02:05.824Z"),
        modifiedAt: new Date("2024-02-04T10:44:12.276Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-12-15T00:12:04.750Z"),
        endsAt: new Date("2025-09-01T19:21:53.135Z"),
        maxRedemptions: 88385,
        redemptionsCount: 897746,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2023-01-15T20:25:32.405Z"),
          modifiedAt: new Date("2024-03-03T02:45:50.186Z"),
          id: "<value>",
          amountType: "seat_based",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          priceCurrency: "<value>",
          seatTiers: {
            tiers: [
              {
                minSeats: 63601,
                pricePerSeat: 931587,
              },
            ],
          },
        },
      ],
      meters: [],
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