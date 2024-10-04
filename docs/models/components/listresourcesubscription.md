# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-03-29T05:07:38.347Z"),
      modifiedAt: new Date("2023-05-12T19:52:22.574Z"),
      id: "<value>",
      amount: 855102,
      currency: "Metical",
      recurringInterval: "year",
      status: "canceled",
      currentPeriodStart: new Date("2022-02-25T17:48:53.428Z"),
      currentPeriodEnd: new Date("2024-12-06T11:06:25.063Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-02-14T00:05:59.160Z"),
      endedAt: new Date("2023-09-28T19:36:52.112Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      user: {
        email: "Terrence57@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://delectable-honesty.info/",
      },
      product: {
        createdAt: new Date("2024-03-12T00:37:19.394Z"),
        modifiedAt: new Date("2024-07-10T10:39:26.328Z"),
        id: "<value>",
        name: "<value>",
        description: "corporation however experienced",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-03-09T07:29:26.343Z"),
            modifiedAt: new Date("2024-05-06T08:23:27.414Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            minimumAmount: 164609,
            maximumAmount: 974745,
            presetAmount: 976121,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-07-13T07:36:18.239Z"),
            modifiedAt: new Date("2022-12-24T14:03:33.657Z"),
            id: "<value>",
            description:
              "lest pointless over quietly lest pfft overwork through surprisingly",
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
            path: "/lost+found",
            mimeType: "<value>",
            size: 813251,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-01-14T18:47:42.652Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-06-06T12:10:53.022Z"),
            sizeReadable: "<value>",
            publicUrl: "https://limp-assist.name",
          },
        ],
      },
      price: {
        createdAt: new Date("2022-04-08T02:12:36.144Z"),
        modifiedAt: new Date("2023-01-17T08:48:19.511Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 614426,
        maximumAmount: 627709,
        presetAmount: 886903,
        recurringInterval: "month",
      },
    },
  ],
  pagination: {
    totalCount: 104737,
    maxPage: 113553,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |