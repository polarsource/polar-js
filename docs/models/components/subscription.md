# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2023-05-02T19:22:49.014Z"),
  modifiedAt: new Date("2023-07-09T16:37:49.740Z"),
  id: "<value>",
  amount: 255953,
  currency: "Jordanian Dinar",
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2024-06-10T07:44:52.955Z"),
  currentPeriodEnd: new Date("2022-01-14T18:47:42.652Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2022-06-06T12:10:53.022Z"),
  endedAt: new Date("2024-10-11T03:06:32.161Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  checkoutId: "<value>",
  metadata: {
    "key": "<value>",
  },
  user: {
    email: "Ambrose.Klocko@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://unfortunate-jury.com",
  },
  product: {
    createdAt: new Date("2022-05-05T10:54:03.342Z"),
    modifiedAt: new Date("2023-04-02T19:35:39.049Z"),
    id: "<value>",
    name: "<value>",
    description: "eek fine and stigmatize",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-18T05:10:09.456Z"),
        modifiedAt: new Date("2023-02-16T10:14:16.859Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 129469,
        maximumAmount: 15406,
        presetAmount: 386742,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-05-23T12:39:44.257Z"),
        modifiedAt: new Date("2022-11-20T05:30:05.170Z"),
        id: "<value>",
        description: "pick creature with where that",
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
        path: "/usr/lib",
        mimeType: "<value>",
        size: 670961,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-03-05T10:39:39.567Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-08-01T20:06:37.720Z"),
        sizeReadable: "<value>",
        publicUrl: "https://narrow-toothpick.net/",
      },
    ],
  },
  price: {
    createdAt: new Date("2024-05-01T17:51:17.309Z"),
    modifiedAt: new Date("2024-09-15T06:04:46.672Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 825389,
    recurringInterval: "month",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currency`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cancelAtPeriodEnd`                                                                                  | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `checkoutId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *string*>                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.Product](../../models/components/product.md)                                             | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |