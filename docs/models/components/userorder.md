# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2023-11-08T22:52:26.062Z"),
  modifiedAt: new Date("2022-07-16T20:17:42.476Z"),
  id: "<value>",
  amount: 542499,
  taxAmount: 24678,
  currency: "Venezuelan bolívar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-03-15T16:56:03.439Z"),
    modifiedAt: new Date("2024-03-26T05:49:25.687Z"),
    id: "<value>",
    name: "<value>",
    description: "Progressive homogeneous hub",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
    prices: [],
    benefits: [
      {
        createdAt: new Date("2023-10-28T07:42:47.820Z"),
        modifiedAt: new Date("2024-09-09T18:02:29.830Z"),
        id: "<value>",
        description: "Realigned zero tolerance implementation",
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
        path: "/home/user/dir",
        mimeType: "<value>",
        size: 456015,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-28T17:36:32.640Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-09-20T10:25:17.071Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-01-23T15:12:14.503Z"),
    modifiedAt: new Date("2022-09-09T05:23:06.262Z"),
    id: "<value>",
    priceCurrency: "<value>",
    isArchived: false,
    minimumAmount: 758379,
    maximumAmount: 881586,
    presetAmount: 320017,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2023-02-25T06:38:03.101Z"),
    modifiedAt: new Date("2023-12-09T18:43:05.199Z"),
    id: "<value>",
    amount: 588317,
    currency: "Lempira",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-11-21T08:44:18.797Z"),
    currentPeriodEnd: new Date("2022-01-01T01:27:21.369Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-08-14T10:12:10.426Z"),
    endedAt: new Date("2022-12-08T19:10:16.465Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.UserOrderProduct](../../models/components/userorderproduct.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPriceOutput*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |