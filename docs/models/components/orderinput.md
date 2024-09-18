# OrderInput

## Example Usage

```typescript
import { OrderInput } from "@polar-sh/sdk/models/components";

let value: OrderInput = {
  createdAt: new Date("2024-07-12T18:27:18.298Z"),
  modifiedAt: new Date("2022-03-28T13:13:27.654Z"),
  id: "<value>",
  amount: 818034,
  taxAmount: 726878,
  currency: "Brunei Dollar",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  user: {
    id: "<value>",
    email: "Carli24@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "<value>",
  },
  product: {
    createdAt: new Date("2022-03-24T14:14:41.960Z"),
    modifiedAt: new Date("2022-02-10T01:42:00.893Z"),
    id: "<value>",
    name: "<value>",
    description: "Managed fresh-thinking array",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    type: "business",
    isHighlighted: false,
  },
  productPrice: {
    createdAt: new Date("2022-09-28T05:26:01.347Z"),
    modifiedAt: new Date("2022-11-08T08:36:05.792Z"),
    id: "<value>",
    priceCurrency: "<value>",
    isArchived: false,
    priceAmount: 596433,
  },
  subscription: {
    createdAt: new Date("2024-10-22T02:10:51.327Z"),
    modifiedAt: new Date("2022-05-09T19:23:40.334Z"),
    id: "<value>",
    amount: 772266,
    currency: "Rand",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2022-01-03T22:25:03.402Z"),
    currentPeriodEnd: new Date("2023-03-06T09:49:36.001Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-10-17T22:18:30.709Z"),
    endedAt: new Date("2022-09-23T10:15:56.342Z"),
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
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taxAmount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPriceInput*                                                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |