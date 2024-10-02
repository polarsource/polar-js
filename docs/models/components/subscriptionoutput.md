# SubscriptionOutput

## Example Usage

```typescript
import { SubscriptionOutput } from "@polar-sh/sdk/models/components";

let value: SubscriptionOutput = {
  createdAt: new Date("2024-05-06T08:23:27.414Z"),
  modifiedAt: new Date("2022-06-30T09:52:52.165Z"),
  id: "<value>",
  amount: 974745,
  currency: "Lesotho Loti",
  recurringInterval: "year",
  status: "canceled",
  currentPeriodStart: new Date("2022-12-24T14:03:33.657Z"),
  currentPeriodEnd: new Date("2024-07-22T20:45:22.257Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-08-31T14:34:42.904Z"),
  endedAt: new Date("2022-10-20T02:42:42.383Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Nikki.Brekke@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://purple-sediment.net/",
  },
  product: {
    createdAt: new Date("2023-11-08T19:38:58.776Z"),
    modifiedAt: new Date("2024-09-20T11:43:37.795Z"),
    id: "<value>",
    name: "<value>",
    description: "sunbathe whose synthesise seriously",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-06-03T18:10:10.891Z"),
        modifiedAt: new Date("2024-08-13T11:33:11.689Z"),
        id: "<value>",
        isArchived: false,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-03-26T00:12:31.127Z"),
        modifiedAt: new Date("2023-05-24T22:42:36.749Z"),
        id: "<value>",
        description: "limply adrenalin bonfire catch brr than a yet coolly",
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
        path: "/Applications",
        mimeType: "<value>",
        size: 386742,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-25T00:59:33.503Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-12-21T15:28:22.104Z"),
        sizeReadable: "<value>",
        publicUrl: "https://free-fold.com/",
      },
    ],
  },
  price: {
    createdAt: new Date("2023-11-15T10:34:48.905Z"),
    modifiedAt: new Date("2022-01-14T23:52:35.398Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 633732,
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
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.ProductOutput](../../models/components/productoutput.md)                                 | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceOutput*                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |