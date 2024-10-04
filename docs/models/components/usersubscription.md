# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2024-12-01T10:29:02.107Z"),
  modifiedAt: new Date("2024-03-10T08:44:37.497Z"),
  id: "<value>",
  amount: 577273,
  currency: "Rupiah",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2023-03-29T01:53:09.475Z"),
  currentPeriodEnd: new Date("2024-06-21T01:49:46.650Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2022-07-27T10:06:11.461Z"),
  endedAt: new Date("2024-03-24T22:31:48.669Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  product: {
    createdAt: new Date("2022-02-11T04:04:23.784Z"),
    modifiedAt: new Date("2024-08-29T10:57:12.925Z"),
    id: "<value>",
    name: "<value>",
    description: "testing adult under curse meager dish provided gee",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-11-29T01:49:49.888Z"),
        modifiedAt: new Date("2022-02-05T11:00:40.920Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 110280,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-04-14T16:09:06.266Z"),
        modifiedAt: new Date("2022-04-13T09:59:21.377Z"),
        id: "<value>",
        type: "articles",
        description: "an unto electrify between fully notwithstanding",
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
        path: "/home/user/dir",
        mimeType: "<value>",
        size: 474056,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-02T17:04:41.851Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-08-03T01:37:55.590Z"),
        sizeReadable: "<value>",
        publicUrl: "https://snarling-license.org",
      },
    ],
  },
  price: {
    createdAt: new Date("2024-09-07T00:05:40.883Z"),
    modifiedAt: new Date("2024-02-11T18:00:04.831Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 806875,
    maximumAmount: 222093,
    presetAmount: 572781,
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
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPrice*                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |