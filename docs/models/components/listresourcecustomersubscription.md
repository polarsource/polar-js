# ListResourceCustomerSubscription

## Example Usage

```typescript
import { ListResourceCustomerSubscription } from "@polar-sh/sdk/models/components/listresourcecustomersubscription.js";

let value: ListResourceCustomerSubscription = {
  items: [
    {
      createdAt: new Date("2024-05-22T08:02:04.970Z"),
      modifiedAt: new Date("2023-03-10T17:53:13.416Z"),
      id: "<value>",
      amount: 242200,
      currency: "Riel",
      recurringInterval: "year",
      status: "incomplete_expired",
      currentPeriodStart: new Date("2025-04-29T20:05:11.691Z"),
      currentPeriodEnd: new Date("2023-07-11T17:41:21.318Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-12-05T00:00:18.378Z"),
      startedAt: new Date("2023-09-05T05:45:56.563Z"),
      endsAt: new Date("2025-04-26T02:20:39.748Z"),
      endedAt: new Date("2024-08-17T14:27:20.338Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "other",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2023-04-28T00:46:40.480Z"),
        modifiedAt: new Date("2023-07-27T10:55:02.173Z"),
        id: "<value>",
        name: "<value>",
        description:
          "hotfoot optimal controvert innocent venture seldom yahoo whoever jealous",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-03-07T02:01:25.736Z"),
            modifiedAt: new Date("2025-03-18T12:21:35.318Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-09-24T06:04:53.029Z"),
            modifiedAt: new Date("2024-09-28T00:16:41.299Z"),
            id: "<value>",
            type: "custom",
            description:
              "once barring tectonics fowl husk diagram conjecture gut with shimmering",
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
            path: "/net",
            mimeType: "<value>",
            size: 432322,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-09-26T16:42:50.105Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-09T20:45:49.123Z"),
            sizeReadable: "<value>",
            publicUrl: "https://low-conservation.net/",
          },
        ],
        organization: {
          createdAt: new Date("2023-04-26T07:49:59.337Z"),
          modifiedAt: new Date("2025-03-03T05:53:22.940Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://rigid-tomography.net",
          email: "Reinhold_Sipes@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "instagram",
              url: "https://lazy-chap.name/",
            },
          ],
          detailsSubmittedAt: new Date("2024-08-22T08:34:57.906Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Walsh LLC",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 12476,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 880332,
          profileSettings: {},
        },
      },
      price: {
        createdAt: new Date("2023-08-05T09:02:26.709Z"),
        modifiedAt: new Date("2023-05-16T03:16:29.831Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      prices: [
        {
          createdAt: new Date("2024-05-06T09:05:33.673Z"),
          modifiedAt: new Date("2024-10-03T22:19:18.223Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 724678,
          maximumAmount: 939203,
          presetAmount: 498480,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 121761,
    maxPage: 843481,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.CustomerSubscription](../../models/components/customersubscription.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |