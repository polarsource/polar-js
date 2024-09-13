# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2024-05-05T08:20:33.285Z"),
  modifiedAt: new Date("2024-12-12T02:02:24.696Z"),
  id: "<value>",
  status: "unpaid",
  currentPeriodStart: new Date("2023-06-09T07:03:09.156Z"),
  currentPeriodEnd: new Date("2024-04-05T21:53:41.566Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-06-30T03:22:57.117Z"),
  endedAt: new Date("2022-01-05T10:28:52.927Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  product: {
    createdAt: new Date("2023-12-02T20:41:06.265Z"),
    modifiedAt: new Date("2022-10-23T08:23:13.536Z"),
    id: "<value>",
    name: "<value>",
    description: "Horizontal fresh-thinking budgetary management",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "individual",
    isHighlighted: false,
    prices: [
      {
        createdAt: new Date("2022-11-23T10:25:52.610Z"),
        modifiedAt: new Date("2022-07-28T01:45:34.289Z"),
        id: "<value>",
        priceAmount: 401132,
        priceCurrency: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-09-03T20:26:05.997Z"),
        modifiedAt: new Date("2024-12-10T20:19:27.165Z"),
        id: "<value>",
        type: "custom",
        description: "Intuitive systemic local area network",
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
        path: "/var/tmp",
        mimeType: "<value>",
        size: 343605,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-11-19T01:47:41.109Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-14T14:30:34.010Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  price: {
    createdAt: new Date("2023-03-27T20:44:24.039Z"),
    modifiedAt: new Date("2024-04-28T08:32:28.084Z"),
    id: "<value>",
    priceAmount: 359271,
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
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodStart`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelAtPeriodEnd`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `price`                                                                                       | *components.ProductPriceOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |