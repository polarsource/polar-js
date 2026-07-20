# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2026-12-20T05:17:36.698Z"),
      modifiedAt: new Date("2025-08-19T22:33:31.713Z"),
      id: "<value>",
      amount: 10000,
      currency: "usd",
      recurringInterval: "day",
      recurringIntervalCount: 11381,
      status: "incomplete",
      currentPeriodStart: new Date("2024-06-21T05:37:36.578Z"),
      currentPeriodEnd: new Date("2026-05-12T09:48:05.553Z"),
      currentMeterPeriodStart: new Date("2024-03-21T09:05:03.177Z"),
      currentMeterPeriodEnd: new Date("2025-09-18T17:56:40.238Z"),
      trialStart: new Date("2026-05-30T07:43:56.615Z"),
      trialEnd: new Date("2024-03-26T20:08:54.216Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-02-19T03:51:57.979Z"),
      startedAt: new Date("2025-02-09T00:54:32.146Z"),
      endsAt: null,
      endedAt: new Date("2026-05-19T05:25:02.528Z"),
      pauseAtPeriodEnd: true,
      pausedAt: new Date("2026-03-20T12:56:06.574Z"),
      resumesAt: new Date("2026-05-06T20:26:26.597Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "missing_features",
      customerCancellationComment: "<value>",
      metadata: {
        "key": "<value>",
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-09-11T22:43:44.126Z"),
        modifiedAt: new Date("2024-11-20T04:38:53.340Z"),
        metadata: {},
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        type: "team",
        name: "John Doe",
        billingName: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2026-09-01T19:21:53.135Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      product: {
        id: "<value>",
        createdAt: new Date("2025-08-31T19:24:02.332Z"),
        modifiedAt: null,
        trialInterval: "year",
        trialIntervalCount: 838599,
        name: "<value>",
        description: null,
        visibility: "draft",
        recurringInterval: "week",
        recurringIntervalCount: 935017,
        meterInterval: "week",
        meterIntervalCount: 68303,
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": 42745,
        },
        prices: [
          {
            createdAt: new Date("2026-09-27T11:50:11.984Z"),
            modifiedAt: null,
            id: "<value>",
            source: "catalog",
            amountType: "fixed",
            priceCurrency: "<value>",
            taxBehavior: "exclusive",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceAmount: 322230,
            legacy: true,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2025-11-20T23:12:51.407Z"),
            modifiedAt: new Date("2024-01-07T14:45:36.833Z"),
            type: "slack_shared_channel",
            description: "yowza revoke in heavenly cautious wearily",
            selectable: false,
            deletable: false,
            isDeleted: false,
            organizationId: "<value>",
            metadata: {},
            visibility: "draft",
            properties: {
              slackIntegrationId: "<value>",
              channelNameTemplate: "<value>",
              private: true,
              archiveOnRevoke: true,
            },
            visibilityConfigurable: false,
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
        amounts: {
          "eur": 900,
          "usd": 1000,
        },
        createdAt: new Date("2025-01-05T02:03:02.818Z"),
        modifiedAt: new Date("2025-04-10T00:28:23.328Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2026-10-05T03:17:34.194Z"),
        endsAt: new Date("2024-04-17T09:15:17.215Z"),
        maxRedemptions: 537607,
        redemptionsCount: 738231,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [],
      meters: [],
      pendingUpdate: {
        createdAt: new Date("2024-07-10T15:45:53.558Z"),
        modifiedAt: new Date("2025-08-10T01:22:04.827Z"),
        id: "<value>",
        appliesAt: new Date("2024-09-28T01:26:28.000Z"),
        productId: null,
        seats: 90478,
      },
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