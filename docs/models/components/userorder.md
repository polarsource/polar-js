# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2024-09-15T03:58:39.261Z"),
  modifiedAt: new Date("2024-12-17T17:51:01.747Z"),
  id: "<value>",
  amount: 327411,
  taxAmount: 703431,
  currency: "Guyana Dollar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2022-04-26T01:40:35.064Z"),
    modifiedAt: new Date("2023-03-07T09:22:42.385Z"),
    id: "<value>",
    name: "<value>",
    description: "brr opposite confute who boo little hmph",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-12-29T14:19:48.722Z"),
        modifiedAt: new Date("2024-06-23T12:45:36.188Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 243938,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-01-12T00:01:57.325Z"),
        modifiedAt: new Date("2024-05-27T22:36:34.200Z"),
        id: "<value>",
        type: "custom",
        description: "bitter ah versus",
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
        path: "/net",
        mimeType: "<value>",
        size: 41436,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-03-16T07:41:57.893Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-16T05:06:45.488Z"),
        sizeReadable: "<value>",
        publicUrl: "https://white-bump.org",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-04-15T14:47:40.530Z"),
    modifiedAt: new Date("2022-05-08T15:09:38.886Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 247796,
    maximumAmount: 742272,
    presetAmount: 23007,
    recurringInterval: "month",
  },
  subscription: {
    createdAt: new Date("2022-01-28T15:07:41.807Z"),
    modifiedAt: new Date("2024-07-28T16:44:07.656Z"),
    id: "<value>",
    amount: 617325,
    currency: "Swiss Franc",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-10-21T06:40:33.930Z"),
    currentPeriodEnd: new Date("2024-10-07T00:23:12.112Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-01-09T13:26:23.661Z"),
    endedAt: new Date("2023-10-08T13:24:38.931Z"),
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