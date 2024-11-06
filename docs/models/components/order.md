# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2022-01-09T04:32:15.217Z"),
  modifiedAt: new Date("2023-06-04T16:24:12.271Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  amount: 836804,
  taxAmount: 419707,
  currency: "Cuban Peso",
  billingReason: "subscription_create",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Major50@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://fluffy-minion.name/",
  },
  product: {
    createdAt: new Date("2022-04-25T01:43:31.801Z"),
    modifiedAt: new Date("2022-07-12T00:53:04.419Z"),
    id: "<value>",
    name: "<value>",
    description: "among until mmm word lean from quarrel finally altruistic",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2024-08-21T18:47:35.544Z"),
    modifiedAt: new Date("2022-06-07T04:12:06.961Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 30643,
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2022-03-08T19:15:27.321Z"),
    modifiedAt: new Date("2023-07-27T07:33:30.803Z"),
    id: "<value>",
    amount: 215248,
    currency: "Sudanese Pound",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-06-28T22:40:32.191Z"),
    currentPeriodEnd: new Date("2022-02-20T00:32:42.159Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-05-13T05:22:03.123Z"),
    endedAt: new Date("2022-05-03T11:52:05.226Z"),
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
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customFieldData`                                                                             | [components.OrderCustomFieldData](../../models/components/ordercustomfielddata.md)            | :heavy_minus_sign:                                                                            | Key-value object storing custom field values.                                                 |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billingReason`                                                                               | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |