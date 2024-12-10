# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2024-06-21T19:10:18.665Z"),
      modifiedAt: new Date("2022-11-15T02:07:42.804Z"),
      id: "<value>",
      amount: 776031,
      currency: "UAE Dirham",
      recurringInterval: "month",
      status: "trialing",
      currentPeriodStart: new Date("2024-06-04T17:43:22.991Z"),
      currentPeriodEnd: new Date("2023-03-18T15:07:30.797Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2022-03-18T14:04:55.018Z"),
      endedAt: new Date("2024-02-16T09:24:38.615Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": "<value>",
      },
      user: {
        email: "Jessie.Haley82@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://cavernous-castanet.com",
      },
      product: {
        createdAt: new Date("2022-06-12T14:00:52.276Z"),
        modifiedAt: new Date("2024-05-21T01:52:05.438Z"),
        id: "<value>",
        name: "<value>",
        description:
          "phew pro pace provided with inspection boo incidentally alarmed",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2022-11-18T12:31:27.009Z"),
            modifiedAt: new Date("2024-12-10T09:42:46.729Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 44220,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-06-25T11:00:30.377Z"),
            modifiedAt: new Date("2022-02-17T02:28:27.960Z"),
            id: "<value>",
            description: "up separately priesthood technician ha warm",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 836546,
                timeframe: "day",
              },
              activations: {
                limit: 115886,
                enableUserAdmin: false,
              },
              limitUsage: 989474,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/home/user",
            mimeType: "<value>",
            size: 80904,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-12-21T20:44:36.481Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-01-09T03:24:34.628Z"),
            sizeReadable: "<value>",
            publicUrl: "https://some-grandson.name",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-04-18T21:34:27.901Z"),
              modifiedAt: new Date("2023-09-29T21:12:10.022Z"),
              id: "<value>",
              metadata: {
                "key": 681458,
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
            order: 240101,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2022-03-20T12:11:06.196Z"),
        modifiedAt: new Date("2024-06-13T14:07:06.026Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 70999,
        maximumAmount: 298797,
        presetAmount: 925633,
        recurringInterval: "year",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 68180,
        currency: "Danish Krone",
        createdAt: new Date("2023-12-05T22:01:21.527Z"),
        modifiedAt: new Date("2022-08-06T21:19:05.670Z"),
        id: "<value>",
        metadata: {
          "key": 165860,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2024-01-08T06:50:44.539Z"),
        endsAt: new Date("2023-08-06T05:38:05.357Z"),
        maxRedemptions: 969433,
        redemptionsCount: 133813,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 530721,
    maxPage: 311724,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |