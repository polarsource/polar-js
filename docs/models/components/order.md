# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-08-22T23:08:59.755Z"),
  modifiedAt: new Date("2024-03-04T13:39:39.013Z"),
  id: "<value>",
  metadata: {
    "key": 912317,
  },
  amount: 692115,
  taxAmount: 352319,
  currency: "Naira",
  billingReason: "subscription_create",
  billingAddress: {
    country: "Serbia",
  },
  userId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  user: {
    id: "<value>",
    email: "Kyle_Wuckert27@gmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://prickly-vol.com/",
  },
  product: {
    createdAt: new Date("2022-08-19T10:04:26.453Z"),
    modifiedAt: new Date("2022-10-31T12:43:02.921Z"),
    id: "<value>",
    name: "<value>",
    description:
      "decriminalize tusk without besides viciously impostor youthfully implode ick",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2023-07-20T02:09:27.293Z"),
    modifiedAt: new Date("2024-12-12T18:40:59.500Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 411457,
    recurringInterval: "year",
  },
  discount: {
    duration: "repeating",
    durationInMonths: 177016,
    type: "percentage",
    basisPoints: 626424,
    createdAt: new Date("2024-06-01T22:41:03.562Z"),
    modifiedAt: new Date("2022-11-20T22:17:04.455Z"),
    id: "<value>",
    metadata: {
      "key": 208959,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-07-25T15:30:25.665Z"),
    endsAt: new Date("2022-08-13T05:14:54.417Z"),
    maxRedemptions: 548327,
    redemptionsCount: 417913,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2023-03-28T17:07:54.354Z"),
    modifiedAt: new Date("2024-05-09T16:47:22.985Z"),
    id: "<value>",
    amount: 528933,
    currency: "Cedi",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2024-01-03T07:06:59.391Z"),
    currentPeriodEnd: new Date("2022-05-02T13:11:55.885Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-08-06T05:54:35.974Z"),
    endedAt: new Date("2022-08-06T18:28:46.439Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
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
| `billingAddress`                                                                              | [components.Address](../../models/components/address.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discountId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkoutId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `user`                                                                                        | [components.OrderUser](../../models/components/orderuser.md)                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.OrderProduct](../../models/components/orderproduct.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `discount`                                                                                    | *components.OrderDiscount*                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscription`                                                                                | [components.OrderSubscription](../../models/components/ordersubscription.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |