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
            amountType: "custom",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "week",
            priceCurrency: "<value>",
            minimumAmount: 232490,
            maximumAmount: null,
            presetAmount: 922780,
            legacy: true,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-01-16T01:29:59.311Z"),
            modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
            type: "license_keys",
            description: "out beneath off phew",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            metadata: {},
            properties: {
              prefix: null,
              expires: {
                ttl: 56931,
                timeframe: "month",
              },
              activations: {
                limit: 936323,
                enableCustomerAdmin: false,
              },
              limitUsage: 702937,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/sbin",
            mimeType: "<value>",
            size: 498972,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: false,
            createdAt: new Date("2024-08-06T00:24:30.544Z"),
            sizeReadable: "<value>",
            publicUrl: "https://enchanting-bell.net/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-01-17T02:26:08.207Z"),
              modifiedAt: new Date("2025-04-09T14:51:17.764Z"),
              id: "<value>",
              metadata: {
                "key": true,
              },
              type: "select",
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 252765,
            required: false,
          },
        ],
      },
      discount: {
        duration: "once",
        durationInMonths: 365530,
        type: "percentage",
        amount: 785414,
        currency: "Bahraini Dinar",
        createdAt: new Date("2023-01-08T01:56:34.831Z"),
        modifiedAt: new Date("2023-06-30T21:23:01.391Z"),
        id: "<value>",
        metadata: {
          "key": 1217.39,
        },
        name: "<value>",
        code: null,
        startsAt: new Date("2023-02-15T03:03:57.233Z"),
        endsAt: new Date("2023-12-16T11:47:17.463Z"),
        maxRedemptions: 100765,
        redemptionsCount: 803957,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [],
      meters: [
        {
          createdAt: new Date("2024-07-10T16:58:33.224Z"),
          modifiedAt: new Date("2025-02-06T15:53:25.753Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {},
            createdAt: new Date("2023-08-07T08:10:45.405Z"),
            modifiedAt: new Date("2023-02-21T14:45:53.075Z"),
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
            aggregation: {
              func: "min",
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