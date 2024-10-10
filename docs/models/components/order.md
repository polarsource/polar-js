# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-05-22T10:20:56.336Z"),
  modifiedAt: new Date("2022-02-06T11:47:57.029Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  amount: 81263,
  taxAmount: 929429,
  currency: "Seychelles Rupee",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Corine.Rutherford21@yahoo.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://political-pants.org",
  },
  product: {
    createdAt: new Date("2024-09-04T09:52:55.353Z"),
    modifiedAt: new Date("2024-01-16T18:51:08.358Z"),
    id: "<value>",
    name: "<value>",
    description:
      "ew quarrelsomely materialise blah lost wherever oh inasmuch paltry scholarship",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-08-15T15:59:22.837Z"),
    modifiedAt: new Date("2024-10-25T03:21:56.772Z"),
    id: "<value>",
    isArchived: false,
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2023-09-26T16:34:12.626Z"),
    modifiedAt: new Date("2022-03-24T22:50:12.488Z"),
    id: "<value>",
    amount: 313717,
    currency: "Namibia Dollar",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2024-09-30T14:20:49.162Z"),
    currentPeriodEnd: new Date("2023-01-31T23:13:50.155Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-03-29T20:55:19.511Z"),
    endedAt: new Date("2022-06-10T07:21:24.112Z"),
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
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |