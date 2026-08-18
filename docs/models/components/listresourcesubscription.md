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
        firstUserEventAt: new Date("2024-04-06T20:53:24.313Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      product: {
        id: "<value>",
        createdAt: new Date("2026-09-10T22:17:40.637Z"),
        modifiedAt: new Date("2026-02-16T12:29:23.294Z"),
        trialInterval: "day",
        trialIntervalCount: 389704,
        name: "<value>",
        description:
          "formula zowie familiarize ceramic joyously unique why deck fluctuate",
        visibility: "private",
        recurringInterval: "day",
        recurringIntervalCount: 186229,
        meterInterval: "month",
        meterIntervalCount: 976880,
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2026-10-14T01:53:23.230Z"),
            modifiedAt: new Date("2025-01-05T02:03:02.818Z"),
            type: "custom",
            description:
              "importance usefully breed plus patiently lazy pulp ick healthily e-mail",
            selectable: true,
            deletable: true,
            isDeleted: false,
            organizationId: "<value>",
            metadata: {
              "key": "<value>",
            },
            visibility: "private",
            properties: {
              note: null,
            },
            visibilityConfigurable: false,
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/var/yp",
            mimeType: "<value>",
            size: 772025,
            storageVersion: null,
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-10-14T04:04:24.781Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: false,
            createdAt: new Date("2026-03-20T16:38:16.465Z"),
            sizeReadable: "<value>",
            publicUrl: "https://esteemed-coal.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-06-02T04:10:19.278Z"),
              modifiedAt: new Date("2025-08-16T21:21:02.814Z"),
              id: "<value>",
              metadata: {
                "key": 488238,
              },
              type: "number",
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 275070,
            required: true,
          },
        ],
      },
      discount: {
        duration: "once",
        type: "percentage",
        amount: 1000,
        currency: "usd",
        amounts: {
          "eur": 900,
          "usd": 1000,
        },
        createdAt: new Date("2024-09-10T23:22:39.835Z"),
        modifiedAt: new Date("2024-05-26T13:43:30.714Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2026-07-24T12:44:10.720Z"),
        endsAt: new Date("2026-06-05T23:45:05.517Z"),
        maxRedemptions: 608141,
        maxRedemptionsPerCustomer: 441162,
        redemptionsCount: 243123,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2024-12-06T15:19:40.131Z"),
          modifiedAt: new Date("2025-12-12T08:33:17.228Z"),
          id: "<value>",
          source: "catalog",
          amountType: "custom",
          priceCurrency: "<value>",
          taxBehavior: "location",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          minimumAmount: 393152,
          maximumAmount: 918066,
          presetAmount: 435765,
          legacy: true,
        },
      ],
      meters: [
        {
          createdAt: new Date("2024-04-05T03:10:05.602Z"),
          modifiedAt: new Date("2025-03-25T02:35:33.003Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {},
            createdAt: new Date("2025-08-16T16:57:16.542Z"),
            modifiedAt: null,
            id: "<value>",
            name: "<value>",
            unit: "token",
            filter: {
              conjunction: "or",
              clauses: [
                {
                  property: "<value>",
                  operator: "lt",
                  value: false,
                },
              ],
            },
            aggregation: {
              func: "count",
            },
            organizationId: "<value>",
          },
        },
      ],
      pendingUpdate: {
        createdAt: new Date("2025-08-18T08:06:18.153Z"),
        modifiedAt: new Date("2024-09-18T15:34:20.197Z"),
        id: "<value>",
        appliesAt: new Date("2024-04-09T10:02:05.072Z"),
        productId: "<value>",
        seats: 333931,
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