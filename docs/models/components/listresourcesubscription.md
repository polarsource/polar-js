# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2025-08-03T20:11:13.463Z"),
      modifiedAt: new Date("2025-12-20T05:17:36.698Z"),
      id: "<value>",
      amount: 570759,
      currency: "Denar",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2023-02-03T16:09:01.508Z"),
      currentPeriodEnd: new Date("2023-06-22T05:37:36.578Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-05-12T09:48:05.553Z"),
      startedAt: new Date("2025-05-04T08:08:19.321Z"),
      endsAt: new Date("2023-03-22T09:05:03.177Z"),
      endedAt: new Date("2025-10-03T02:11:14.654Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
      metadata: {
        "key": 803214,
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-11-19T01:45:47.615Z"),
        modifiedAt: new Date("2023-03-27T20:08:54.216Z"),
        metadata: {
          "key": 2073.05,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2024-02-10T00:54:32.146Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      product: {
        createdAt: new Date("2023-03-07T10:05:14.304Z"),
        modifiedAt: new Date("2025-11-15T15:17:20.320Z"),
        id: "<value>",
        name: "<value>",
        description:
          "frenetically circa nimble excitedly trouser once terraform flickering upwardly",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2023-01-08T07:16:11.048Z"),
            modifiedAt: new Date("2025-04-18T07:32:22.812Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2025-03-15T12:44:12.271Z"),
            modifiedAt: new Date("2025-11-07T00:46:07.643Z"),
            description: "grok till repeatedly venture willfully gadzooks",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            metadata: {
              "key": "<value>",
            },
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 885424,
                timeframe: "day",
              },
              activations: {
                limit: 919834,
                enableCustomerAdmin: false,
              },
              limitUsage: 457039,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/etc",
            mimeType: "<value>",
            size: 492922,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-08-12T05:12:13.472Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-03-20T02:25:31.650Z"),
            sizeReadable: "<value>",
            publicUrl: "https://little-taxicab.biz/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-08-10T01:22:04.827Z"),
              modifiedAt: new Date("2023-09-29T01:26:28.000Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
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
            order: 238665,
            required: false,
          },
        ],
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 291450,
        currency: "Balboa",
        createdAt: new Date("2023-06-30T13:36:44.690Z"),
        modifiedAt: new Date("2023-06-17T04:12:06.307Z"),
        id: "<value>",
        metadata: {
          "key": 3118.5,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-06-11T23:02:44.049Z"),
        endsAt: new Date("2025-03-20T19:43:53.594Z"),
        maxRedemptions: 134142,
        redemptionsCount: 26048,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2023-10-18T22:08:53.982Z"),
          modifiedAt: new Date("2024-05-26T00:52:37.759Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 856369,
        },
      ],
      meters: [
        {
          createdAt: new Date("2024-03-21T09:01:04.142Z"),
          modifiedAt: new Date("2025-02-11T11:20:23.848Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {
              "key": 411783,
            },
            createdAt: new Date("2025-11-19T22:38:15.458Z"),
            modifiedAt: new Date("2025-01-23T10:46:43.284Z"),
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
    totalCount: 246927,
    maxPage: 650511,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |