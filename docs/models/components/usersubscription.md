# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2023-11-19T06:08:13.166Z"),
  modifiedAt: new Date("2022-12-11T17:58:32.838Z"),
  id: "<value>",
  amount: 303356,
  currency: "Bahamian Dollar",
  recurringInterval: "year",
  status: "incomplete",
  currentPeriodStart: new Date("2023-05-05T18:11:47.315Z"),
  currentPeriodEnd: new Date("2022-12-19T14:38:20.910Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-05-16T10:11:19.877Z"),
  endedAt: new Date("2023-02-23T01:32:43.530Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  product: {
    createdAt: new Date("2024-09-15T00:55:56.712Z"),
    modifiedAt: new Date("2022-07-27T17:24:30.359Z"),
    id: "<value>",
    name: "<value>",
    description:
      "across psst helpless angle during gee psst coaxingly shameful after",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-02-18T22:42:20.577Z"),
        modifiedAt: new Date("2023-07-06T19:14:17.884Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 920548,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-01-16T01:27:31.910Z"),
        modifiedAt: new Date("2023-10-07T04:07:32.437Z"),
        id: "<value>",
        type: "discord",
        description: "fibre sometimes upright",
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
        path: "/boot",
        mimeType: "<value>",
        size: 855199,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-06-18T13:50:36.049Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-10-11T11:53:45.934Z"),
        sizeReadable: "<value>",
        publicUrl: "https://menacing-airline.net/",
      },
    ],
  },
  price: {
    createdAt: new Date("2023-12-27T07:38:47.221Z"),
    modifiedAt: new Date("2022-11-07T20:19:04.814Z"),
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
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPriceOutput*                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |