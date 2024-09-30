# SubscriptionInput

## Example Usage

```typescript
import { SubscriptionInput } from "@polar-sh/sdk/models/components";

let value: SubscriptionInput = {
  createdAt: new Date("2022-05-08T21:46:59.571Z"),
  modifiedAt: new Date("2022-03-28T17:01:37.333Z"),
  id: "<value>",
  amount: 467579,
  currency: "Dalasi",
  recurringInterval: "year",
  status: "trialing",
  currentPeriodStart: new Date("2024-06-20T13:02:49.294Z"),
  currentPeriodEnd: new Date("2022-01-06T08:39:30.649Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-11-06T07:58:52.676Z"),
  endedAt: new Date("2022-03-01T13:04:14.388Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Albin_Bechtelar-Heller32@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://scratchy-giggle.net/",
  },
  product: {
    createdAt: new Date("2024-03-20T22:07:45.001Z"),
    modifiedAt: new Date("2023-10-05T05:47:27.023Z"),
    id: "<value>",
    name: "<value>",
    description: "pants unless metabolite",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-04-27T21:02:57.653Z"),
        modifiedAt: new Date("2023-03-30T14:27:14.676Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 840168,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-07-01T20:08:02.445Z"),
        modifiedAt: new Date("2024-01-04T23:12:08.263Z"),
        id: "<value>",
        type: "github_repository",
        description: "phew unless tattered hourly",
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
        path: "/etc/mail",
        mimeType: "<value>",
        size: 854563,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-03T06:57:33.906Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-01-29T06:24:38.751Z"),
      },
    ],
  },
  price: {
    createdAt: new Date("2023-07-15T07:08:04.117Z"),
    modifiedAt: new Date("2024-04-25T07:01:38.359Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 413054,
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
| `price`                                                                                              | *components.ProductPriceInput*                                                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |