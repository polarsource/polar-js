# SubscriptionInput

## Example Usage

```typescript
import { SubscriptionInput } from "@polar-sh/sdk/models/components";

let value: SubscriptionInput = {
  createdAt: new Date("2023-02-02T12:16:29.844Z"),
  modifiedAt: new Date("2024-05-01T07:37:23.861Z"),
  id: "<value>",
  amount: 967006,
  currency: "Indian Rupee",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2024-03-28T06:00:49.760Z"),
  currentPeriodEnd: new Date("2023-11-29T06:19:47.637Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2022-03-27T13:40:51.471Z"),
  endedAt: new Date("2022-12-21T05:51:09.548Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Colin.Predovic@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2024-02-22T14:28:14.746Z"),
    modifiedAt: new Date("2023-07-21T03:29:14.909Z"),
    id: "<value>",
    name: "<value>",
    description: "Customer-focused reciprocal functionalities",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-10-16T08:01:27.253Z"),
        modifiedAt: new Date("2023-01-01T12:34:42.729Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 572317,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-07-13T04:54:44.144Z"),
        modifiedAt: new Date("2022-11-03T12:40:15.931Z"),
        id: "<value>",
        description: "Persevering heuristic hierarchy",
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
        path: "/usr/obj",
        mimeType: "<value>",
        size: 923879,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-12T12:17:54.368Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-01-24T08:06:05.859Z"),
      },
    ],
  },
  price: {
    createdAt: new Date("2022-11-19T13:41:55.756Z"),
    modifiedAt: new Date("2023-12-01T08:10:38.131Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 585109,
    maximumAmount: 901563,
    presetAmount: 52407,
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
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.ProductInput](../../models/components/productinput.md)                                   | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceInput*                                                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |