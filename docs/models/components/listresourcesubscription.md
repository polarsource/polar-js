# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-11-23T04:42:23.119Z"),
      modifiedAt: new Date("2023-03-17T04:26:37.100Z"),
      id: "<value>",
      amount: 352527,
      currency: "Danish Krone",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2023-06-07T11:23:10.059Z"),
      currentPeriodEnd: new Date("2023-11-02T05:56:05.835Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-11-12T16:15:27.788Z"),
      startedAt: new Date("2025-07-16T13:12:18.198Z"),
      endsAt: new Date("2025-05-17T05:55:31.078Z"),
      endedAt: new Date("2024-09-26T04:25:54.105Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "missing_features",
      customerCancellationComment: "<value>",
      metadata: {
        "key": "<value>",
      },
      customer: {
        createdAt: new Date("2024-10-11T01:42:34.219Z"),
        modifiedAt: new Date("2025-03-21T21:26:59.863Z"),
        id: "<value>",
        metadata: {
          "key": 509562,
        },
        email: "Mabel.Bernier@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Bolivia",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://secret-popularity.net/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Leslie_Durgan63@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-09-11T09:38:08.141Z"),
        modifiedAt: new Date("2023-04-18T03:10:55.746Z"),
        id: "<value>",
        name: "<value>",
        description: "as premium upon needily forenenst ugh privilege",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2025-03-30T13:43:21.206Z"),
            modifiedAt: new Date("2024-09-15T09:06:29.012Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 690874,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-01-26T18:17:02.928Z"),
            modifiedAt: new Date("2025-04-24T07:58:02.328Z"),
            id: "<value>",
            description: "since raw depart whoever SUV carefully",
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
            path: "/var/spool",
            mimeType: "<value>",
            size: 386967,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-19T13:53:58.623Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-05-30T14:51:27.507Z"),
            sizeReadable: "<value>",
            publicUrl: "https://aggressive-meander.biz/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-01-02T19:55:45.970Z"),
              modifiedAt: new Date("2023-05-26T04:40:33.142Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 249941,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2023-11-02T14:31:06.448Z"),
        modifiedAt: new Date("2023-10-03T20:43:05.773Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 299646,
        recurringInterval: "month",
      },
      discount: {
        duration: "once",
        durationInMonths: 354533,
        type: "fixed",
        basisPoints: 982197,
        createdAt: new Date("2023-06-07T19:01:56.808Z"),
        modifiedAt: new Date("2024-06-09T00:32:06.678Z"),
        id: "<value>",
        metadata: {
          "key": 781178,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-10-26T06:31:29.994Z"),
        endsAt: new Date("2025-03-19T14:24:12.773Z"),
        maxRedemptions: 26338,
        redemptionsCount: 927151,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 98955,
    maxPage: 480829,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |