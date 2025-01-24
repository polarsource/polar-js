# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components/listresourcecustomerorder.js";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-11-28T02:07:26.226Z"),
      modifiedAt: new Date("2025-10-07T11:39:56.050Z"),
      id: "<value>",
      amount: 198534,
      taxAmount: 721212,
      currency: "Czech Koruna",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-11-16T17:19:04.782Z"),
        modifiedAt: new Date("2024-09-29T20:41:02.807Z"),
        id: "<value>",
        name: "<value>",
        description: "embossing yippee thankfully destock the joyously",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-09-27T01:47:20.783Z"),
            modifiedAt: new Date("2025-07-05T13:20:54.308Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-02T13:11:38.475Z"),
            modifiedAt: new Date("2025-08-20T00:50:52.223Z"),
            id: "<value>",
            type: "discord",
            description: "if unto orderly colonialism for that off",
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
            path: "/opt/sbin",
            mimeType: "<value>",
            size: 336195,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-02-10T20:15:12.178Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-02-16T00:41:41.824Z"),
            sizeReadable: "<value>",
            publicUrl: "https://corrupt-swine.name",
          },
        ],
        organization: {
          createdAt: new Date("2024-02-15T09:10:13.932Z"),
          modifiedAt: new Date("2025-12-12T12:06:31.554Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://petty-galoshes.info",
          bio: "<value>",
          company: "Heathcote - Franecki",
          blog: "<value>",
          location: "<value>",
          email: "Mina64@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 218079,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 635050,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-10-24T22:44:03.087Z"),
        modifiedAt: new Date("2024-02-06T17:05:13.398Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 470940,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2024-01-19T13:26:23.208Z"),
        modifiedAt: new Date("2025-09-09T13:26:58.540Z"),
        id: "<value>",
        amount: 134627,
        currency: "Czech Koruna",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2024-08-03T05:37:09.894Z"),
        currentPeriodEnd: new Date("2024-06-03T20:31:20.070Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-02-07T17:15:24.418Z"),
        startedAt: new Date("2025-11-19T15:09:26.906Z"),
        endsAt: new Date("2025-07-14T02:36:39.601Z"),
        endedAt: new Date("2025-06-18T03:07:13.944Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 777025,
    maxPage: 139437,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |