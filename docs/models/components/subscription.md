# Subscription

## Example Usage

```typescript
import { Subscription } from "@polar-sh/sdk/models/components";

let value: Subscription = {
  createdAt: new Date("2023-04-02T19:35:39.049Z"),
  modifiedAt: new Date("2022-07-23T02:41:14.039Z"),
  id: "<value>",
  amount: 920954,
  currency: "Cape Verde Escudo",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2022-12-29T02:54:01.627Z"),
  currentPeriodEnd: new Date("2023-12-30T09:32:24.672Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-10-26T08:38:31.722Z"),
  endedAt: new Date("2024-10-26T13:07:40.238Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Leda_Morar26@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://funny-goodwill.com",
  },
  product: {
    createdAt: new Date("2024-01-18T02:51:27.106Z"),
    modifiedAt: new Date("2022-03-05T14:02:18.907Z"),
    id: "<value>",
    name: "<value>",
    description: "across qua gee barring drat frankly accomplished graffiti",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-08-13T22:20:42.028Z"),
        modifiedAt: new Date("2024-10-07T05:53:02.445Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 727896,
        maximumAmount: 94668,
        presetAmount: 777139,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-06-23T15:00:48.247Z"),
        modifiedAt: new Date("2023-06-07T12:50:02.652Z"),
        id: "<value>",
        description:
          "drat connect providence hmph gnash stuff tarragon design merit",
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
        path: "/lost+found",
        mimeType: "<value>",
        size: 597500,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-19T02:37:07.150Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-03-06T05:57:12.023Z"),
        sizeReadable: "<value>",
        publicUrl: "https://austere-story.org/",
      },
    ],
  },
  price: {
    createdAt: new Date("2022-04-01T12:58:28.992Z"),
    modifiedAt: new Date("2024-05-10T12:13:20.887Z"),
    id: "<value>",
    isArchived: false,
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
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.Product](../../models/components/product.md)                                             | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceRecurring*                                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |