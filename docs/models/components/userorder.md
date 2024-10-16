# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-04-14T13:23:36.206Z"),
  modifiedAt: new Date("2022-12-02T16:06:08.205Z"),
  id: "<value>",
  amount: 836018,
  taxAmount: 646181,
  currency: "Cuban Peso",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-06-26T08:34:16.566Z"),
    modifiedAt: new Date("2024-09-18T07:34:26.865Z"),
    id: "<value>",
    name: "<value>",
    description: "whoever supposing however for suckle",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-19T00:42:36.357Z"),
        modifiedAt: new Date("2022-05-31T22:42:51.636Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 649070,
        maximumAmount: 856035,
        presetAmount: 93212,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-07T20:38:23.153Z"),
        modifiedAt: new Date("2022-04-25T02:02:03.058Z"),
        id: "<value>",
        description: "however indeed flash far somber",
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
        path: "/opt",
        mimeType: "<value>",
        size: 17747,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-22T15:24:11.981Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-08-05T20:49:45.334Z"),
        sizeReadable: "<value>",
        publicUrl: "https://victorious-zen.biz/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-05-17T14:56:25.246Z"),
    modifiedAt: new Date("2024-08-06T23:09:15.332Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 701506,
    recurringInterval: "year",
  },
  subscription: {
    createdAt: new Date("2022-09-08T09:58:53.295Z"),
    modifiedAt: new Date("2024-03-11T13:54:59.030Z"),
    id: "<value>",
    amount: 918527,
    currency: "Falkland Islands Pound",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2022-11-15T02:07:18.027Z"),
    currentPeriodEnd: new Date("2024-11-28T16:58:32.600Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-01-18T02:26:54.532Z"),
    endedAt: new Date("2022-04-29T04:52:40.857Z"),
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