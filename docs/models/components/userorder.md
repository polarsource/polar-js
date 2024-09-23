# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2022-03-14T11:59:43.625Z"),
  modifiedAt: new Date("2022-03-13T21:40:13.537Z"),
  id: "<value>",
  amount: 856277,
  taxAmount: 162120,
  currency: "Pataca",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2024-04-27T16:58:28.709Z"),
    modifiedAt: new Date("2023-05-16T05:23:49.944Z"),
    id: "<value>",
    name: "<value>",
    description: "De-engineered cohesive help-desk",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-05-06T12:02:21.857Z"),
        modifiedAt: new Date("2024-04-03T02:52:24.426Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 927212,
        maximumAmount: 28952,
        presetAmount: 895692,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-20T16:42:36.427Z"),
        modifiedAt: new Date("2024-01-28T02:24:09.907Z"),
        id: "<value>",
        type: "license_keys",
        description: "Reverse-engineered executive installation",
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
        path: "/opt/bin",
        mimeType: "<value>",
        size: 364912,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-10-13T22:49:55.026Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-28T14:00:09.538Z"),
        sizeReadable: "<value>",
        publicUrl: "<value>",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-07-29T17:17:11.582Z"),
    modifiedAt: new Date("2022-05-09T15:34:16.528Z"),
    id: "<value>",
    isArchived: false,
    priceCurrency: "<value>",
    priceAmount: 159845,
  },
  subscription: {
    createdAt: new Date("2022-02-21T07:11:39.675Z"),
    modifiedAt: new Date("2024-11-29T22:07:11.535Z"),
    id: "<value>",
    amount: 3860,
    currency: "Chilean Peso",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2024-08-24T13:24:20.223Z"),
    currentPeriodEnd: new Date("2024-02-28T16:53:19.075Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-11-25T03:55:18.512Z"),
    endedAt: new Date("2023-07-11T08:50:43.565Z"),
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