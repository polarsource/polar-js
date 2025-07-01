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
      recurringInterval: "month",
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
        createdAt: new Date("2024-03-21T22:53:47.601Z"),
        modifiedAt: new Date("2025-08-17T22:26:31.092Z"),
        metadata: {
          "key": 5317.17,
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
        deletedAt: new Date("2025-03-15T06:51:53.014Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      product: {
        createdAt: new Date("2025-05-29T06:38:49.802Z"),
        modifiedAt: new Date("2024-09-23T10:26:31.492Z"),
        id: "<value>",
        name: "<value>",
        description: "hm sense busily outside extremely challenge",
        recurringInterval: "year",
        isRecurring: true,
        isArchived: false,
        organizationId: "<value>",
        metadata: {},
        prices: [
          {
            createdAt: new Date("2023-04-07T20:53:24.313Z"),
            modifiedAt: new Date("2025-09-17T08:34:44.140Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: null,
            priceCurrency: "<value>",
            priceAmount: 220333,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-01-16T01:29:59.311Z"),
            modifiedAt: new Date("2023-05-02T03:13:00.458Z"),
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
            path: "/usr/X11R6",
            mimeType: "<value>",
            size: 327832,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: null,
            version: "<value>",
            isUploaded: true,
            createdAt: new Date("2023-11-10T03:13:37.813Z"),
            sizeReadable: "<value>",
            publicUrl: "https://warlike-tinderbox.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-07-28T05:12:23.569Z"),
              modifiedAt: null,
              id: "<value>",
              metadata: {},
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [],
              },
            },
            order: 650710,
            required: true,
          },
        ],
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
          createdAt: new Date("2025-07-09T21:04:10.991Z"),
          modifiedAt: new Date("2024-05-22T21:38:35.373Z"),
          id: "<value>",
          isArchived: true,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: null,
          maximumAmount: 358972,
          presetAmount: 368377,
        },
      ],
      meters: [
        {
          createdAt: new Date("2025-08-12T21:40:54.973Z"),
          modifiedAt: new Date("2024-03-26T12:19:23.472Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {
              "key": 645986,
            },
            createdAt: new Date("2025-04-20T02:42:18.399Z"),
            modifiedAt: new Date("2023-07-17T20:52:33.753Z"),
            id: "<value>",
            name: "<value>",
            filter: {
              conjunction: "and",
              clauses: [],
            },
            aggregation: {},
            organizationId: "<value>",
          },
        },
      ],
    },
  ],
  pagination: {
    totalCount: 47105,
    maxPage: 607201,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |