# UserOrder

## Example Usage

```typescript
import { UserOrder } from "@polar-sh/sdk/models/components";

let value: UserOrder = {
  createdAt: new Date("2024-08-02T04:16:12.146Z"),
  modifiedAt: new Date("2024-05-31T13:10:23.082Z"),
  id: "<value>",
  amount: 245635,
  taxAmount: 911049,
  currency: "Argentine Peso",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  product: {
    createdAt: new Date("2024-04-04T19:41:00.104Z"),
    modifiedAt: new Date("2023-05-17T19:46:49.907Z"),
    id: "<value>",
    name: "<value>",
    description:
      "whereas psst lively kindheartedly infatuated entry mid custom kinase",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-03-31T12:44:44.932Z"),
        modifiedAt: new Date("2022-12-06T10:12:28.995Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 608470,
        maximumAmount: 762787,
        presetAmount: 540826,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-10-02T05:32:35.386Z"),
        modifiedAt: new Date("2024-08-25T07:59:43.022Z"),
        id: "<value>",
        type: "articles",
        description: "than knotty place consequently",
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
        size: 347583,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-12-29T01:36:34.090Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-27T10:09:19.664Z"),
        sizeReadable: "<value>",
        publicUrl: "https://gigantic-rule.com",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-10-23T19:31:34.443Z"),
    modifiedAt: new Date("2022-05-11T23:44:19.772Z"),
    id: "<value>",
    isArchived: false,
    recurringInterval: "month",
  },
  subscription: {
    createdAt: new Date("2022-12-05T21:45:40.894Z"),
    modifiedAt: new Date("2023-11-24T12:43:11.466Z"),
    id: "<value>",
    amount: 129870,
    currency: "Philippine Peso",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-03-30T04:46:00.514Z"),
    currentPeriodEnd: new Date("2022-07-25T22:46:51.003Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-06-16T20:28:00.249Z"),
    endedAt: new Date("2022-01-17T19:55:21.199Z"),
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