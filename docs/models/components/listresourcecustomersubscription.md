# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2023-03-19T09:21:08.569Z"),
      modifiedAt: new Date("2023-08-21T01:51:34.538Z"),
      id: "<value>",
      amount: 40176,
      currency: "Zimbabwe Dollar",
      recurringInterval: "month",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2022-03-21T01:09:01.645Z"),
      currentPeriodEnd: new Date("2023-08-24T04:21:45.116Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-01-21T14:13:42.501Z"),
      endedAt: new Date("2023-02-16T07:53:13.439Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-05-14T22:15:44.887Z"),
        modifiedAt: new Date("2024-09-17T19:20:42.432Z"),
        id: "<value>",
        name: "<value>",
        description: "around elementary unbearably rebel",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-11-19T11:06:17.765Z"),
            modifiedAt: new Date("2022-11-02T17:00:24.297Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 812103,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-03-23T01:23:19.166Z"),
            modifiedAt: new Date("2022-03-16T12:13:00.379Z"),
            id: "<value>",
            type: "custom",
            description: "scratch rundown via foolhardy pfft woot",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/local/src",
            mimeType: "<value>",
            size: 561482,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-25T18:14:41.086Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-12-08T01:27:00.110Z"),
            sizeReadable: "<value>",
            publicUrl: "https://little-invite.name/",
          },
        ],
        organization: {
          createdAt: new Date("2022-07-04T01:30:00.013Z"),
          modifiedAt: new Date("2022-07-05T03:19:41.489Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://petty-euphonium.info/",
          bio: "<value>",
          company: "Bartell, Konopelski and Krajcik",
          blog: "<value>",
          location: "<value>",
          email: "Dion.Jacobs63@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 716802,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 12140,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2024-02-05T10:56:06.975Z"),
        modifiedAt: new Date("2023-11-16T06:44:17.249Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 431791,
    maxPage: 336195,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |