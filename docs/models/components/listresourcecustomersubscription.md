# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2023-10-24T17:16:51.911Z"),
      modifiedAt: new Date("2023-06-14T13:59:56.674Z"),
      id: "<value>",
      amount: 638493,
      currency: "Cuban Peso",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2023-03-13T09:32:54.501Z"),
      currentPeriodEnd: new Date("2024-05-07T00:30:07.587Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2024-11-28T13:10:32.383Z"),
      endedAt: new Date("2023-04-14T04:07:05.692Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-08-25T11:47:00.419Z"),
        modifiedAt: new Date("2024-04-23T18:30:17.394Z"),
        id: "<value>",
        name: "<value>",
        description: "till salty astride lazily worth",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-08-23T10:15:12.130Z"),
            modifiedAt: new Date("2023-02-24T19:05:40.409Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 676732,
            maximumAmount: 565430,
            presetAmount: 515900,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-04-20T00:33:39.135Z"),
            modifiedAt: new Date("2025-05-08T03:46:45.933Z"),
            id: "<value>",
            type: "ads",
            description: "duh enraged proofread blah",
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
            path: "/etc/mail",
            mimeType: "<value>",
            size: 574906,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-03-22T03:07:22.809Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-05-11T13:10:25.231Z"),
            sizeReadable: "<value>",
            publicUrl: "https://our-wallaby.biz",
          },
        ],
        organization: {
          createdAt: new Date("2024-12-13T07:19:22.635Z"),
          modifiedAt: new Date("2025-10-21T11:47:33.986Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://murky-stay.biz/",
          bio: "<value>",
          company: "Zboncak - Jaskolski",
          blog: "<value>",
          location: "<value>",
          email: "Myah69@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 391915,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 763739,
          profileSettings: {},
          featureSettings: {},
        },
      },
      price: {
        createdAt: new Date("2023-02-23T15:09:30.145Z"),
        modifiedAt: new Date("2024-03-24T17:37:09.177Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 29265,
        maximumAmount: 952242,
        presetAmount: 409388,
      },
    },
  ],
  pagination: {
    totalCount: 579240,
    maxPage: 940735,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |