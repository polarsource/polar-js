# SubscriptionOutput

## Example Usage

```typescript
import { SubscriptionOutput } from "@polar-sh/sdk/models/components";

let value: SubscriptionOutput = {
  createdAt: new Date("2023-11-26T20:40:31.357Z"),
  modifiedAt: new Date("2023-08-25T04:14:46.672Z"),
  id: "<value>",
  status: "unpaid",
  currentPeriodStart: new Date("2023-07-24T12:41:05.594Z"),
  currentPeriodEnd: new Date("2024-10-27T11:16:32.801Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-01-18T06:22:44.650Z"),
  endedAt: new Date("2024-04-02T20:07:08.341Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Maximus.Cormier99@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2024-02-15T21:03:39.279Z"),
    modifiedAt: new Date("2023-05-11T04:43:03.044Z"),
    id: "<value>",
    name: "<value>",
    description: "Reactive analyzing methodology",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "free",
    isHighlighted: false,
    prices: [
      {
        createdAt: new Date("2022-06-16T23:32:17.170Z"),
        modifiedAt: new Date("2023-05-06T11:27:26.710Z"),
        id: "<value>",
        priceAmount: 417486,
        priceCurrency: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-19T15:29:27.129Z"),
        modifiedAt: new Date("2023-10-25T02:42:53.109Z"),
        id: "<value>",
        type: "custom",
        description: "Innovative web-enabled superstructure",
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
        path: "/dev",
        mimeType: "<value>",
        size: 967795,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-01-22T03:40:59.160Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-08-23T09:15:37.162Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  price: {
    createdAt: new Date("2022-10-29T04:57:33.126Z"),
    modifiedAt: new Date("2022-06-12T17:34:03.034Z"),
    id: "<value>",
    priceAmount: 592231,
    priceCurrency: "<value>",
    isArchived: false,
    recurringInterval: "month",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `status`                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodStart`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelAtPeriodEnd`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.ProductOutput](../../models/components/productoutput.md)                          | :heavy_check_mark:                                                                            | A product.                                                                                    |
| `price`                                                                                       | *components.ProductPriceOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |