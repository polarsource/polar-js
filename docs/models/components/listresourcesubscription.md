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
        email: "Kailyn.Satterfield@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://right-meander.org",
      },
      product: {
        createdAt: new Date("2023-10-01T09:23:05.568Z"),
        modifiedAt: new Date("2023-09-26T14:36:58.483Z"),
        id: "<value>",
        name: "<value>",
        description: "executor hunt till sheepishly duh",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-01-26T18:17:02.928Z"),
            modifiedAt: new Date("2024-04-24T07:58:02.328Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 380130,
            maximumAmount: 622192,
            presetAmount: 893406,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-01-10T18:16:03.467Z"),
            modifiedAt: new Date("2022-10-09T09:43:33.243Z"),
            id: "<value>",
            description:
              "sugary incline regarding behind about after hence belabor search",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {},
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/lost+found",
            mimeType: "<value>",
            size: 737774,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-01-29T20:48:34.054Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-10-13T03:45:54.403Z"),
            sizeReadable: "<value>",
            publicUrl: "https://lonely-comparison.info/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2022-06-06T03:35:17.126Z"),
              modifiedAt: new Date("2022-11-13T20:42:37.829Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
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
            order: 679183,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2023-10-12T19:34:57.872Z"),
        modifiedAt: new Date("2023-07-28T04:35:19.088Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 146540,
    maxPage: 958192,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |