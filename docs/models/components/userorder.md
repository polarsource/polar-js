# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-09-27T05:11:28.515Z"),
  modifiedAt: new Date("2024-09-25T12:13:11.837Z"),
  id: "<value>",
  amount: 40155,
  taxAmount: 752573,
  currency: "North Korean Won",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2024-07-04T15:55:26.085Z"),
    modifiedAt: new Date("2023-05-26T04:08:34.395Z"),
    id: "<value>",
    name: "<value>",
    description: "basket out and",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-12T01:11:19.363Z"),
        modifiedAt: new Date("2022-11-01T22:35:54.505Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 406914,
        maximumAmount: 192649,
        presetAmount: 419683,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-11-01T09:06:02.132Z"),
        modifiedAt: new Date("2023-12-29T03:34:41.469Z"),
        id: "<value>",
        description: "ick backbone or tankful sans fairly than",
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
        path: "/private/var",
        mimeType: "<value>",
        size: 773652,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-16T02:15:17.887Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-08-04T18:06:39.289Z"),
        sizeReadable: "<value>",
        publicUrl: "https://pleasant-hyphenation.com",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-04-25T19:30:11.470Z"),
    modifiedAt: new Date("2024-07-20T00:51:35.962Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 596802,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2022-07-26T01:21:42.082Z"),
    modifiedAt: new Date("2022-10-15T02:24:56.339Z"),
    id: "<value>",
    amount: 163132,
    currency: "Tunisian Dinar",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2022-06-04T16:14:49.332Z"),
    currentPeriodEnd: new Date("2022-05-16T21:24:15.280Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-01-16T22:49:58.030Z"),
    endedAt: new Date("2022-12-29T01:36:34.090Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
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
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.UserOrderSubscription](../../models/components/userordersubscription.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |