# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2025-05-04T07:22:05.808Z"),
      modifiedAt: new Date("2025-07-29T01:03:47.705Z"),
      id: "<value>",
      amount: 276101,
      currency: "Somali Shilling",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2025-02-26T21:52:23.922Z"),
      currentPeriodEnd: new Date("2025-01-21T15:14:30.409Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-07-04T12:12:40.835Z"),
      startedAt: new Date("2025-01-04T04:21:00.181Z"),
      endsAt: new Date("2023-02-25T09:13:01.764Z"),
      endedAt: new Date("2023-11-12T22:34:54.900Z"),
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
        createdAt: new Date("2023-08-16T15:03:18.055Z"),
        modifiedAt: new Date("2025-07-31T14:13:57.881Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Jazmin_Williamson21@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Australia",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://experienced-toothbrush.org/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Jazlyn26@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-01-20T00:03:23.440Z"),
        modifiedAt: new Date("2023-05-16T02:26:50.442Z"),
        id: "<value>",
        name: "<value>",
        description:
          "yippee forenenst galvanize gently from ick meanwhile likewise",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 7092,
        },
        prices: [
          {
            createdAt: new Date("2023-04-10T03:04:00.178Z"),
            modifiedAt: new Date("2023-08-30T11:08:28.655Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 733681,
            maximumAmount: 244713,
            presetAmount: 390423,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-21T06:20:08.783Z"),
            modifiedAt: new Date("2024-09-11T00:54:49.380Z"),
            id: "<value>",
            description: "blindly gee limply",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 764854,
                timeframe: "day",
              },
              activations: {
                limit: 119716,
                enableCustomerAdmin: false,
              },
              limitUsage: 404439,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/libdata",
            mimeType: "<value>",
            size: 594080,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-08-21T00:05:24.956Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-22T22:51:59.592Z"),
            sizeReadable: "<value>",
            publicUrl: "https://pink-simple.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-10-24T08:09:44.362Z"),
              modifiedAt: new Date("2023-01-09T14:33:29.493Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 15446,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2025-11-11T15:35:12.640Z"),
        modifiedAt: new Date("2023-06-28T17:29:55.881Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 514095,
        maximumAmount: 814625,
        presetAmount: 507425,
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 880858,
        createdAt: new Date("2023-07-16T03:22:51.500Z"),
        modifiedAt: new Date("2025-04-07T19:20:03.652Z"),
        id: "<value>",
        metadata: {
          "key": 332922,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-16T12:38:22.784Z"),
        endsAt: new Date("2025-07-11T05:03:41.662Z"),
        maxRedemptions: 285557,
        redemptionsCount: 202683,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 358990,
    maxPage: 332116,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |