# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2022-05-16T14:56:40.238Z"),
      modifiedAt: new Date("2023-09-12T09:38:08.141Z"),
      id: "<value>",
      amount: 97748,
      currency: "Kyat",
      recurringInterval: "month",
      status: "incomplete",
      currentPeriodStart: new Date("2022-05-04T22:59:01.944Z"),
      currentPeriodEnd: new Date("2024-09-25T11:36:35.384Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-10-18T12:05:19.674Z"),
      endedAt: new Date("2022-10-02T04:10:30.103Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": "<value>",
      },
      user: {
        email: "Burdette39@yahoo.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://noxious-statue.name",
      },
      product: {
        createdAt: new Date("2023-09-26T14:36:58.483Z"),
        modifiedAt: new Date("2022-12-04T13:11:15.560Z"),
        id: "<value>",
        name: "<value>",
        description:
          "needily forenenst ugh privilege resource cumbersome drag battle briskly nor",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2022-01-02T14:38:26.655Z"),
            modifiedAt: new Date("2023-06-14T05:21:09.862Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 894109,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-05-18T07:48:42.632Z"),
            modifiedAt: new Date("2024-08-01T07:14:49.018Z"),
            id: "<value>",
            description: "after hence belabor",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              prefix: "<value>",
              expires: {
                ttl: 354533,
                timeframe: "year",
              },
              activations: {
                limit: 982197,
                enableUserAdmin: false,
              },
              limitUsage: 143971,
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
            size: 480043,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-05-06T04:06:41.754Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-10-26T06:31:29.994Z"),
            sizeReadable: "<value>",
            publicUrl: "https://altruistic-transparency.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2022-07-10T01:53:42.639Z"),
              modifiedAt: new Date("2023-02-09T00:05:44.146Z"),
              id: "<value>",
              metadata: {
                "key": 142472,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 289108,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2024-07-14T14:53:59.208Z"),
        modifiedAt: new Date("2023-10-12T19:34:57.872Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 109609,
    maxPage: 146540,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |