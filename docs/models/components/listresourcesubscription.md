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
            type: "one_time",
            recurringInterval: "day",
            priceAmount: 142128,
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Applications",
            mimeType: "<value>",
            size: 764885,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-04-23T23:01:02.489Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2025-12-09T18:31:15.290Z"),
            sizeReadable: "<value>",
            publicUrl: "https://winding-godfather.name/",
          },
        ],
        attachedCustomFields: [],
      },
      discount: {
        duration: "forever",
        durationInMonths: 223305,
        type: "percentage",
        basisPoints: 1000,
        createdAt: new Date("2026-10-18T04:31:13.670Z"),
        modifiedAt: new Date("2025-07-05T12:20:19.177Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-05-28T10:32:14.665Z"),
        endsAt: null,
        maxRedemptions: 186229,
        redemptionsCount: 948301,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [
        {
          createdAt: new Date("2024-06-25T07:15:52.470Z"),
          modifiedAt: null,
          id: "<value>",
          source: "ad_hoc",
          amountType: "seat_based",
          priceCurrency: "<value>",
          isArchived: true,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "day",
          seatTiers: {
            tiers: [
              {
                minSeats: 834838,
                pricePerSeat: 337669,
              },
            ],
            minimumSeats: 958690,
            maximumSeats: 665075,
          },
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