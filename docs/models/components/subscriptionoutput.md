# SubscriptionOutput

## Example Usage

```typescript
import { SubscriptionOutput } from "@polar-sh/sdk/models/components";

let value: SubscriptionOutput = {
  createdAt: new Date("2023-06-21T12:03:11.539Z"),
  modifiedAt: new Date("2024-11-08T05:51:26.679Z"),
  id: "<value>",
  amount: 891523,
  currency: "Kroon",
  recurringInterval: "month",
  status: "past_due",
  currentPeriodStart: new Date("2023-02-27T05:17:06.651Z"),
  currentPeriodEnd: new Date("2022-03-05T23:00:19.753Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-10-01T17:35:14.588Z"),
  endedAt: new Date("2024-03-11T20:34:20.055Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Shannon13@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2023-02-20T10:42:45.318Z"),
    modifiedAt: new Date("2023-02-15T04:07:46.225Z"),
    id: "<value>",
    name: "<value>",
    description: "Implemented eco-centric portal",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [],
    benefits: [
      {
        createdAt: new Date("2024-05-21T21:44:45.542Z"),
        modifiedAt: new Date("2022-07-08T08:25:26.143Z"),
        id: "<value>",
        type: "discord",
        description: "Monitored discrete encryption",
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
        size: 839189,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-01-21T15:36:11.918Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-09-18T13:33:39.335Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  price: {
    createdAt: new Date("2023-09-01T16:13:21.317Z"),
    modifiedAt: new Date("2024-10-30T01:43:08.700Z"),
    id: "<value>",
    priceCurrency: "<value>",
    isArchived: false,
    minimumAmount: 201517,
    maximumAmount: 633998,
    presetAmount: 548519,
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
| `product`                                                                                            | [components.ProductOutput](../../models/components/productoutput.md)                                 | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceOutput*                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |