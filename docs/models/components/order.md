# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-07-08T15:12:48.113Z"),
  modifiedAt: new Date("2024-05-10T10:58:39.596Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  amount: 281064,
  taxAmount: 574591,
  currency: "Malagasy Ariary",
  billingReason: "purchase",
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Nicholaus_Nikolaus58@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://compassionate-dress.name",
  },
  product: {
    createdAt: new Date("2022-02-15T01:23:01.586Z"),
    modifiedAt: new Date("2022-01-01T22:22:58.693Z"),
    id: "<value>",
    name: "<value>",
    description:
      "where though sarcastic godparent weird patiently married alliance sonar keenly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2022-08-20T06:58:32.848Z"),
    modifiedAt: new Date("2022-09-05T20:51:23.814Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 690696,
    maximumAmount: 151557,
    presetAmount: 281986,
    recurringInterval: "month",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2022-02-11T10:30:57.987Z"),
    modifiedAt: new Date("2024-02-05T09:06:07.394Z"),
    id: "<value>",
    amount: 404429,
    currency: "Bhutanese Ngultrum",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-01-30T22:12:53.323Z"),
    currentPeriodEnd: new Date("2023-10-10T16:45:39.713Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-09-04T01:52:32.823Z"),
    endedAt: new Date("2023-05-22T07:36:17.577Z"),
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
| `metadata`                                                                                    | Record<string, *components.OrderMetadata*>                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
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