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
      currentPeriodEnd: new Date("2026-05-04T08:08:19.321Z"),
      trialStart: null,
      trialEnd: new Date("2025-09-18T17:56:40.238Z"),
      cancelAtPeriodEnd: true,
      canceledAt: new Date("2025-11-19T01:45:47.615Z"),
      startedAt: null,
      endsAt: new Date("2024-08-15T04:57:32.501Z"),
      endedAt: new Date("2024-09-09T21:56:03.551Z"),
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
        createdAt: new Date("2026-05-06T20:26:26.597Z"),
        modifiedAt: new Date("2024-10-26T12:38:37.731Z"),
        metadata: {
          "key": 612623,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        type: "individual",
        name: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2024-09-11T22:43:44.126Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      product: {
        id: "<value>",
        createdAt: new Date("2025-02-03T10:44:12.276Z"),
        modifiedAt: new Date("2025-01-02T02:01:45.933Z"),
        trialInterval: "week",
        trialIntervalCount: 889423,
        name: "<value>",
        description: "joyously biodegrade beside",
        visibility: "public",
        recurringInterval: "day",
        recurringIntervalCount: 763611,
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 543181,
        },
        prices: [
          {
            createdAt: new Date("2024-01-07T14:45:36.833Z"),
            modifiedAt: new Date("2024-05-24T07:08:25.699Z"),
            id: "<value>",
            source: "ad_hoc",
            amountType: "fixed",
            priceCurrency: "<value>",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            priceAmount: 479731,
            legacy: true,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-06-04T18:32:44.963Z"),
            modifiedAt: new Date("2026-04-07T05:04:30.181Z"),
            type: "custom",
            description: "cap permafrost treble",
            selectable: true,
            deletable: false,
            organizationId: "<value>",
            metadata: {
              "key": "<value>",
            },
            properties: {
              note: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private/tmp",
            mimeType: "<value>",
            size: 16733,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2026-12-06T15:49:55.309Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2025-07-11T05:48:37.631Z"),
            sizeReadable: "<value>",
            publicUrl: "https://impressionable-viability.com/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-09-17T23:34:10.111Z"),
              modifiedAt: new Date("2025-04-12T21:32:26.120Z"),
              id: "<value>",
              metadata: {},
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
            order: 797456,
            required: false,
          },
        ],
      },
      discount: {
        duration: "repeating",
        durationInMonths: 424288,
        type: "percentage",
        amount: 1000,
        currency: "usd",
        createdAt: new Date("2024-04-24T03:43:50.210Z"),
        modifiedAt: new Date("2026-12-03T13:13:09.933Z"),
        id: "<value>",
        metadata: {
          "key": 97979,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2026-03-20T02:25:31.650Z"),
        endsAt: new Date("2025-06-05T08:55:27.030Z"),
        maxRedemptions: 174869,
        redemptionsCount: 624711,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2024-09-18T13:50:43.325Z"),
          modifiedAt: null,
          id: "<value>",
          source: "ad_hoc",
          amountType: "custom",
          priceCurrency: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "week",
          minimumAmount: 654396,
          maximumAmount: 152532,
          presetAmount: 311850,
          legacy: true,
        },
      ],
      meters: [
        {
          createdAt: new Date("2026-03-20T19:43:53.594Z"),
          modifiedAt: new Date("2024-01-29T13:10:13.616Z"),
          id: "<value>",
          consumedUnits: 25,
          creditedUnits: 100,
          amount: 0,
          meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          meter: {
            metadata: {},
            createdAt: new Date("2026-01-05T19:13:23.632Z"),
            modifiedAt: new Date("2026-10-09T02:26:38.751Z"),
            id: "<value>",
            name: "<value>",
            filter: {
              conjunction: "or",
              clauses: [],
            },
            aggregation: {
              func: "unique",
              property: "<value>",
            },
            organizationId: "<value>",
          },
        },
      ],
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