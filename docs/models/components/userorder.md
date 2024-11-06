# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2024-03-12T16:04:02.474Z"),
  modifiedAt: new Date("2022-10-22T16:34:22.700Z"),
  id: "<value>",
  amount: 305965,
  taxAmount: 305473,
  currency: "Tanzanian Shilling",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-09-05T19:16:17.163Z"),
    modifiedAt: new Date("2023-09-09T09:25:03.473Z"),
    id: "<value>",
    name: "<value>",
    description:
      "blue ugh nautical barring whereas ouch reporter ah offensively obvious",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-08-02T23:14:47.272Z"),
        modifiedAt: new Date("2022-07-20T12:59:24.049Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 315904,
        maximumAmount: 773678,
        presetAmount: 335672,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-11-12T10:13:41.931Z"),
        modifiedAt: new Date("2022-07-25T01:35:33.444Z"),
        id: "<value>",
        description: "astride verbally smug up adult",
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
        path: "/var/tmp",
        mimeType: "<value>",
        size: 132531,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-22T03:49:19.507Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-06T18:26:38.655Z"),
        sizeReadable: "<value>",
        publicUrl: "https://sore-finding.biz",
      },
    ],
    organization: {
      createdAt: new Date("2023-02-18T22:46:45.624Z"),
      modifiedAt: new Date("2022-08-11T14:00:17.759Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://supportive-partridge.biz",
      bio: "<value>",
      company: "McClure - Koepp",
      blog: "<value>",
      location: "<value>",
      email: "Freeda.Nader97@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 658208,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 909558,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2024-04-15T09:46:18.365Z"),
    modifiedAt: new Date("2023-06-18T01:34:34.609Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 992178,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2024-10-09T02:12:59.827Z"),
    modifiedAt: new Date("2022-01-14T09:11:07.833Z"),
    id: "<value>",
    amount: 154539,
    currency: "Zloty",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2023-04-16T01:44:07.536Z"),
    currentPeriodEnd: new Date("2024-02-21T10:39:54.364Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-09-13T12:16:23.117Z"),
    endedAt: new Date("2022-05-12T09:56:36.366Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserOrderProduct](../../models/components/userorderproduct.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |