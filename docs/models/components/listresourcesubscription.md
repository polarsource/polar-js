# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2025-12-15T00:04:42.925Z"),
      modifiedAt: new Date("2023-02-13T16:01:02.803Z"),
      id: "<value>",
      amount: 190895,
      currency: "Swedish Krona",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2025-06-12T17:38:39.918Z"),
      currentPeriodEnd: new Date("2024-12-31T21:10:10.994Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-10-23T11:48:21.731Z"),
      startedAt: new Date("2025-01-17T06:41:20.361Z"),
      endsAt: new Date("2023-03-12T09:53:29.242Z"),
      endedAt: new Date("2023-04-18T04:30:42.882Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      metadata: {
        "key": 995715,
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-06-18T10:36:53.507Z"),
        modifiedAt: new Date("2025-10-12T10:05:20.456Z"),
        metadata: {
          "key": "<value>",
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
        deletedAt: new Date("2025-03-16T17:11:00.930Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Margot2@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-05-06T17:31:48.462Z"),
        modifiedAt: new Date("2025-03-04T18:09:48.048Z"),
        id: "<value>",
        name: "<value>",
        description: "cruelly tectonics for",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 317022,
        },
        prices: [
          {
            createdAt: new Date("2025-12-19T07:26:14.545Z"),
            modifiedAt: new Date("2024-11-24T09:57:01.792Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 985903,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-02-27T17:42:57.598Z"),
            modifiedAt: new Date("2023-10-16T14:42:22.872Z"),
            id: "<value>",
            description:
              "about helpless astride breed essential huzzah oxygenate productive behold",
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
            path: "/Network",
            mimeType: "<value>",
            size: 690050,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-10-19T16:12:56.499Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-04-19T19:22:55.409Z"),
            sizeReadable: "<value>",
            publicUrl: "https://cool-possession.info/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-02-15T18:34:08.550Z"),
              modifiedAt: new Date("2024-04-14T20:09:21.741Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 600948,
            required: false,
          },
        ],
      },
      discount: {
        duration: "once",
        type: "fixed",
        amount: 34590,
        currency: "Leone",
        createdAt: new Date("2025-07-21T15:37:23.186Z"),
        modifiedAt: new Date("2024-04-01T03:08:30.116Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-08-04T12:04:26.255Z"),
        endsAt: new Date("2025-07-31T23:34:05.499Z"),
        maxRedemptions: 367184,
        redemptionsCount: 954348,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      price: {
        createdAt: new Date("2025-09-01T03:51:37.593Z"),
        modifiedAt: new Date("2023-01-05T12:10:11.777Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 81790,
        maximumAmount: 862357,
        presetAmount: 281711,
      },
      prices: [
        {
          createdAt: new Date("2025-06-14T08:39:13.611Z"),
          modifiedAt: new Date("2024-10-14T01:14:59.861Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 362377,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 279684,
    maxPage: 478120,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |