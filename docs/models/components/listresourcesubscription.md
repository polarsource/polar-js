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
      trialStart: new Date("2024-03-21T09:05:03.177Z"),
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
        type: "team",
        name: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-02-03T10:44:12.276Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      product: {
        id: "<value>",
        createdAt: new Date("2024-11-20T04:38:53.340Z"),
        modifiedAt: new Date("2026-11-26T03:50:00.293Z"),
        trialInterval: "year",
        trialIntervalCount: 555482,
        name: "<value>",
        description: null,
        visibility: "public",
        recurringInterval: "month",
        recurringIntervalCount: 13550,
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        metadata: {},
        prices: [
          {
            createdAt: new Date("2024-10-19T01:40:55.754Z"),
            modifiedAt: new Date("2024-03-15T20:39:49.840Z"),
            id: "<value>",
            source: "catalog",
            amountType: "free",
            priceCurrency: "<value>",
            taxBehavior: "exclusive",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 238122,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2026-06-12T01:48:20.505Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2026-06-20T18:25:36.529Z"),
            sizeReadable: "<value>",
            publicUrl: "https://sophisticated-affect.biz",
          },
        ],
        attachedCustomFields: [],
      },
      discount: {
        duration: "once",
        durationInMonths: 322913,
        type: "percentage",
        basisPoints: 1000,
        createdAt: new Date("2026-09-28T19:56:37.285Z"),
        modifiedAt: new Date("2026-09-30T21:17:04.789Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-20T23:12:51.407Z"),
        endsAt: new Date("2024-01-07T14:45:36.833Z"),
        maxRedemptions: 131658,
        redemptionsCount: 758621,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      prices: [],
      meters: [],
      pendingUpdate: {
        createdAt: new Date("2024-02-25T01:22:58.741Z"),
        modifiedAt: new Date("2025-03-01T22:24:22.500Z"),
        id: "<value>",
        appliesAt: new Date("2026-04-07T05:04:30.181Z"),
        productId: null,
        seats: 226862,
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