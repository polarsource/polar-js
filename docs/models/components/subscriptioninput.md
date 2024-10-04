# SubscriptionInput

## Example Usage

```typescript
import { SubscriptionInput } from "@polar-sh/sdk/models/components";

let value: SubscriptionInput = {
  createdAt: new Date("2024-01-27T04:39:38.483Z"),
  modifiedAt: new Date("2024-10-08T19:25:01.027Z"),
  id: "<value>",
  amount: 941301,
  currency: "Dobra",
  recurringInterval: "year",
  status: "canceled",
  currentPeriodStart: new Date("2023-05-17T16:54:40.123Z"),
  currentPeriodEnd: new Date("2023-02-18T02:26:35.615Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-02-09T18:13:23.683Z"),
  endedAt: new Date("2022-08-16T05:27:11.731Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Freddy_Cartwright66@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://crowded-lashes.net",
  },
  product: {
    createdAt: new Date("2023-03-29T16:57:44.341Z"),
    modifiedAt: new Date("2023-10-17T03:56:02.515Z"),
    id: "<value>",
    name: "<value>",
    description: "um clonk zowie lounge zowie boohoo distorted",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-10-10T15:31:17.507Z"),
        modifiedAt: new Date("2022-08-02T00:05:06.700Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 572268,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-12-06T06:03:53.905Z"),
        modifiedAt: new Date("2024-07-09T17:23:10.289Z"),
        id: "<value>",
        description: "to about incinerate aha last pulse ha",
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
        path: "/usr",
        mimeType: "<value>",
        size: 304021,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-02-21T04:41:02.985Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-09-16T14:31:53.113Z"),
      },
    ],
  },
  price: {
    createdAt: new Date("2023-07-22T13:19:29.931Z"),
    modifiedAt: new Date("2022-05-26T03:50:47.351Z"),
    id: "<value>",
    isArchived: false,
    recurringInterval: "year",
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
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |