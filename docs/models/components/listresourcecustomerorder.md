# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-11-08T03:51:26.863Z"),
      modifiedAt: new Date("2022-08-11T09:17:08.951Z"),
      id: "<value>",
      amount: 288809,
      taxAmount: 445060,
      currency: "Kyat",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2022-07-12T05:01:41.315Z"),
        modifiedAt: new Date("2023-10-15T16:36:34.415Z"),
        id: "<value>",
        name: "<value>",
        description: "finding yum whose consequently negative cannon helpful",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-06-29T17:32:17.792Z"),
            modifiedAt: new Date("2023-04-09T13:26:15.845Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 940084,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-11-06T20:26:10.616Z"),
            modifiedAt: new Date("2024-11-25T07:30:04.232Z"),
            id: "<value>",
            type: "custom",
            description:
              "pneumonia physically unhealthy arrogantly drowse restfully ew monasticism",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 389007,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-05-10T16:59:51.268Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-26T02:08:19.912Z"),
            sizeReadable: "<value>",
            publicUrl: "https://intent-hygienic.info",
          },
        ],
        organization: {
          createdAt: new Date("2022-06-21T04:11:10.093Z"),
          modifiedAt: new Date("2024-05-30T14:10:56.971Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://mindless-drive.org/",
          bio: "<value>",
          company: "Wiegand, Hickle and Torphy",
          blog: "<value>",
          location: "<value>",
          email: "Kieran_Purdy81@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 22523,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 460636,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2024-12-31T07:50:18.161Z"),
        modifiedAt: new Date("2023-11-19T12:27:44.573Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      subscription: {
        createdAt: new Date("2024-08-24T22:10:38.820Z"),
        modifiedAt: new Date("2024-06-08T23:30:23.858Z"),
        id: "<value>",
        amount: 538609,
        currency: "Bulgarian Lev",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2023-02-09T20:00:38.933Z"),
        currentPeriodEnd: new Date("2023-10-23T11:52:04.814Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-11-16T17:10:57.545Z"),
        endedAt: new Date("2024-09-04T02:47:05.966Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 915997,
    maxPage: 955706,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |