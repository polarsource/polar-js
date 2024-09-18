# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2023-06-17T05:56:53.587Z"),
  modifiedAt: new Date("2023-09-29T04:04:52.764Z"),
  id: "<value>",
  amount: 977496,
  currency: "Manat",
  recurringInterval: "year",
  status: "past_due",
  currentPeriodStart: new Date("2023-01-06T14:55:59.446Z"),
  currentPeriodEnd: new Date("2022-08-28T08:52:06.660Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-11-19T21:08:29.139Z"),
  endedAt: new Date("2023-05-14T20:45:38.043Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  product: {
    createdAt: new Date("2022-09-11T22:40:46.407Z"),
    modifiedAt: new Date("2024-08-21T05:47:22.603Z"),
    id: "<value>",
    name: "<value>",
    description: "User-centric human-resource task-force",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [],
    benefits: [
      {
        createdAt: new Date("2023-06-17T19:56:27.688Z"),
        modifiedAt: new Date("2023-11-22T23:18:08.988Z"),
        id: "<value>",
        description: "Reactive system-worthy initiative",
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
        path: "/media",
        mimeType: "<value>",
        size: 844550,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-19T10:36:40.490Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-08-01T23:58:39.870Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  price: {
    createdAt: new Date("2022-01-15T12:10:56.211Z"),
    modifiedAt: new Date("2024-12-03T18:54:00.014Z"),
    id: "<value>",
    priceCurrency: "<value>",
    isArchived: false,
    minimumAmount: 347233,
    maximumAmount: 862310,
    presetAmount: 148141,
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
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPriceOutput*                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |