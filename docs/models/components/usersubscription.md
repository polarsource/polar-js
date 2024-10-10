# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2022-08-03T01:37:55.590Z"),
  modifiedAt: new Date("2024-03-13T11:02:48.884Z"),
  id: "<value>",
  amount: 763825,
  currency: "Moroccan Dirham",
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2023-08-13T08:38:49.313Z"),
  currentPeriodEnd: new Date("2024-09-07T00:05:40.883Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-02-11T18:00:04.831Z"),
  endedAt: new Date("2024-06-03T08:01:18.999Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  checkoutId: "<value>",
  product: {
    createdAt: new Date("2022-09-01T09:56:05.492Z"),
    modifiedAt: new Date("2023-09-20T18:25:13.476Z"),
    id: "<value>",
    name: "<value>",
    description: "beloved powerfully squeaky rim of",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-09-04T20:22:54.281Z"),
        modifiedAt: new Date("2024-03-15T03:24:47.536Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 115202,
        maximumAmount: 665093,
        presetAmount: 610703,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-11-30T15:26:27.741Z"),
        modifiedAt: new Date("2023-01-25T14:14:38.916Z"),
        id: "<value>",
        description: "apud upward inside during",
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
        path: "/usr/local/bin",
        mimeType: "<value>",
        size: 16303,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-12-31T18:47:07.582Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-04T02:57:45.647Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unlawful-anticodon.org",
      },
    ],
  },
  price: {
    createdAt: new Date("2024-11-14T20:01:26.789Z"),
    modifiedAt: new Date("2022-05-21T14:21:31.794Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 276643,
    maximumAmount: 230052,
    presetAmount: 468840,
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
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPrice*                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |