# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2022-01-16T11:35:43.531Z"),
      modifiedAt: new Date("2023-08-07T19:59:13.240Z"),
      id: "<value>",
      amount: 885336,
      currency: "Jordanian Dinar",
      recurringInterval: "month",
      status: "active",
      currentPeriodStart: new Date("2024-07-26T04:36:15.801Z"),
      currentPeriodEnd: new Date("2023-10-31T13:28:06.854Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-03-30T02:19:05.351Z"),
      endedAt: new Date("2024-02-27T02:13:18.268Z"),
      userId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": "<value>",
      },
      user: {
        email: "Weston.McClure@gmail.com",
        publicName: "<value>",
        githubUsername: "<value>",
        avatarUrl: "https://infinite-minority.org",
      },
      product: {
        createdAt: new Date("2023-05-21T01:41:48.690Z"),
        modifiedAt: new Date("2022-07-16T18:23:38.506Z"),
        id: "<value>",
        name: "<value>",
        description: "confute uh-huh foolhardy pro fax boo",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-12-26T02:48:40.217Z"),
            modifiedAt: new Date("2023-04-06T18:20:13.817Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            priceAmount: 648676,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-11-08T19:38:58.776Z"),
            modifiedAt: new Date("2024-09-20T11:43:37.795Z"),
            id: "<value>",
            description: "sunbathe whose synthesise seriously",
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
            path: "/var/mail",
            mimeType: "<value>",
            size: 906587,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-06-03T18:10:10.891Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-13T11:33:11.689Z"),
            sizeReadable: "<value>",
            publicUrl: "https://incomparable-injunction.net",
          },
        ],
      },
      price: {
        createdAt: new Date("2023-12-23T01:19:11.714Z"),
        modifiedAt: new Date("2022-03-06T01:45:57.066Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    },
  ],
  pagination: {
    totalCount: 25744,
    maxPage: 387768,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |