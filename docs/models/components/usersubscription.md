# UserSubscription

## Example Usage

```typescript
import { UserSubscription } from "@polar-sh/sdk/models/components";

let value: UserSubscription = {
  createdAt: new Date("2022-09-04T07:33:24.124Z"),
  modifiedAt: new Date("2023-08-13T08:38:49.313Z"),
  id: "<value>",
  amount: 894165,
  currency: "New Leu",
  recurringInterval: "year",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2023-09-20T18:25:13.476Z"),
  currentPeriodEnd: new Date("2022-12-22T03:37:10.516Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2023-12-24T04:08:16.291Z"),
  endedAt: new Date("2023-07-27T18:43:26.946Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  product: {
    createdAt: new Date("2023-11-17T12:51:27.102Z"),
    modifiedAt: new Date("2023-11-08T23:11:32.353Z"),
    id: "<value>",
    name: "<value>",
    description: "whenever intrepid finally huzzah captain equally apud upward",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-01-15T07:04:47.435Z"),
        modifiedAt: new Date("2024-09-17T02:27:16.094Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 565245,
        maximumAmount: 251713,
        presetAmount: 519469,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-09-21T18:33:16.775Z"),
        modifiedAt: new Date("2022-05-22T12:56:02.834Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "offensively amidst excepting of husky truthfully extract allocation pish",
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
        path: "/usr/src",
        mimeType: "<value>",
        size: 527332,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-05-27T19:06:55.726Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-09-25T19:14:27.967Z"),
        sizeReadable: "<value>",
        publicUrl: "https://steep-subexpression.biz",
      },
    ],
  },
  price: {
    createdAt: new Date("2024-09-27T19:31:42.820Z"),
    modifiedAt: new Date("2024-10-01T13:38:06.863Z"),
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
| `product`                                                                                            | [components.UserSubscriptionProduct](../../models/components/usersubscriptionproduct.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `price`                                                                                              | *components.ProductPriceOutput*                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |