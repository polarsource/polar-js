# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2024-01-22T05:57:34.526Z"),
      modifiedAt: new Date("2024-06-18T23:56:59.326Z"),
      id: "<value>",
      amount: 964865,
      currency: "Guarani",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2023-10-12T03:35:41.826Z"),
      currentPeriodEnd: new Date("2025-11-16T23:05:15.882Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2025-04-23T10:44:03.462Z"),
      startedAt: new Date("2025-01-13T18:41:59.111Z"),
      endsAt: new Date("2023-03-18T08:05:34.907Z"),
      endedAt: new Date("2025-05-30T23:32:14.193Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      metadata: {
        "key": "<value>",
      },
      customer: {
        createdAt: new Date("2025-08-10T06:13:40.319Z"),
        modifiedAt: new Date("2023-01-06T12:29:49.323Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        externalId: "<id>",
        email: "Demetris.OKon79@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Paraguay",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://webbed-disposer.biz",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Friedrich_Schmidt@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-10-11T06:36:37.814Z"),
        modifiedAt: new Date("2024-10-20T15:06:03.630Z"),
        id: "<value>",
        name: "<value>",
        description:
          "colorfully surprisingly suddenly avaricious aw bitterly lost whoa woot",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 162787,
        },
        prices: [
          {
            createdAt: new Date("2024-05-18T09:15:56.504Z"),
            modifiedAt: new Date("2024-07-15T09:31:31.845Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-08T10:44:05.996Z"),
            modifiedAt: new Date("2023-09-09T04:28:09.469Z"),
            id: "<value>",
            description:
              "amazing heighten overcoat incidentally woefully cannon",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              guildId: "<id>",
              roleId: "<id>",
              guildToken: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/bin",
            mimeType: "<value>",
            size: 90445,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-08-30T11:08:28.655Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-05-10T23:58:01.273Z"),
            sizeReadable: "<value>",
            publicUrl: "https://exhausted-graffiti.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-09-11T00:54:49.380Z"),
              modifiedAt: new Date("2023-05-07T01:41:53.430Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 441646,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2025-12-21T09:00:48.902Z"),
        modifiedAt: new Date("2023-03-06T23:55:50.419Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 776593,
      },
      discount: {
        duration: "once",
        type: "fixed",
        amount: 943603,
        currency: "Norwegian Krone",
        createdAt: new Date("2025-07-01T10:51:36.392Z"),
        modifiedAt: new Date("2025-08-08T08:17:18.251Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-09-26T08:58:46.574Z"),
        endsAt: new Date("2025-12-17T16:29:24.726Z"),
        maxRedemptions: 95645,
        redemptionsCount: 443546,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 764854,
    maxPage: 989578,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |