# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2022-11-21T07:08:33.168Z"),
      modifiedAt: new Date("2022-11-29T09:47:26.523Z"),
      id: "<value>",
      amount: 355889,
      currency: "Syrian Pound",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2022-03-27T18:11:07.462Z"),
      currentPeriodEnd: new Date("2023-02-11T22:19:54.417Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-04-20T04:24:39.583Z"),
      endedAt: new Date("2024-01-25T19:07:43.861Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      user: {
        email: "Oceane73@hotmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "<value>",
      },
      product: {
        createdAt: new Date("2022-11-01T16:14:51.028Z"),
        modifiedAt: new Date("2024-05-19T10:28:52.033Z"),
        id: "<value>",
        name: "<value>",
        description: "Profound logistical product",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-06-11T13:12:44.267Z"),
            modifiedAt: new Date("2024-04-08T21:22:45.615Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 83791,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-08-29T23:13:04.327Z"),
            modifiedAt: new Date("2022-10-28T15:04:27.098Z"),
            id: "<value>",
            description: "Re-contextualized 4th generation strategy",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/opt/share",
            mimeType: "<value>",
            size: 502393,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-08-15T21:25:17.893Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-12-09T12:23:49.649Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
          },
        ],
      },
      price: {
        createdAt: new Date("2022-12-15T22:38:22.380Z"),
        modifiedAt: new Date("2022-07-04T06:48:36.981Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 556133,
        maximumAmount: 318028,
        presetAmount: 958068,
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 620126,
    maxPage: 617497,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.SubscriptionOutput](../../models/components/subscriptionoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |