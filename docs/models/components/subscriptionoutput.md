# SubscriptionOutput

## Example Usage

```typescript
import { SubscriptionOutput } from "@polar-sh/sdk/models/components";

let value: SubscriptionOutput = {
  createdAt: new Date("2024-12-15T23:23:51.945Z"),
  modifiedAt: new Date("2024-08-30T11:05:45.637Z"),
  id: "<value>",
  amount: 765070,
  currency: "Dalasi",
  recurringInterval: "month",
  status: "incomplete_expired",
  currentPeriodStart: new Date("2023-06-18T21:56:39.590Z"),
  currentPeriodEnd: new Date("2024-12-21T10:39:12.983Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-09-26T17:13:07.205Z"),
  endedAt: new Date("2022-05-10T17:03:48.644Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Stanley_Dooley64@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2022-10-12T12:31:28.351Z"),
    modifiedAt: new Date("2022-03-07T20:17:26.783Z"),
    id: "<value>",
    name: "<value>",
    description: "Diverse bi-directional circuit",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-04-22T15:11:01.678Z"),
        modifiedAt: new Date("2022-05-28T01:18:12.153Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 316541,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-10-07T13:11:52.112Z"),
        modifiedAt: new Date("2024-04-02T14:06:58.075Z"),
        id: "<value>",
        type: "license_keys",
        description: "Operative value-added function",
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
        path: "/etc/defaults",
        mimeType: "<value>",
        size: 408774,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-11-21T13:20:41.827Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-25T18:34:36.250Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  price: {
    createdAt: new Date("2024-10-21T22:27:43.595Z"),
    modifiedAt: new Date("2024-08-27T16:51:13.989Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    minimumAmount: 701978,
    maximumAmount: 489685,
    presetAmount: 131687,
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