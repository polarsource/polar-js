# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2024-05-21T23:12:32.595Z"),
  modifiedAt: new Date("2023-01-13T14:31:45.263Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  amount: 735894,
  taxAmount: 141506,
  currency: "New Taiwan Dollar",
  billingReason: "subscription_create",
  billingAddress: {
    country: "Kyrgyz Republic",
  },
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  customer: {
    createdAt: new Date("2023-05-07T09:54:10.374Z"),
    modifiedAt: new Date("2023-09-15T08:37:16.402Z"),
    id: "<value>",
    metadata: {
      "key": 498180,
    },
    email: "Lizzie_Johnson34@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Austria",
    },
    taxId: [
      "tw_vat",
    ],
    organizationId: "<value>",
    avatarUrl: "https://gray-complication.com/",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Anahi_Boyer-Stracke@hotmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2024-04-10T01:42:23.126Z"),
    modifiedAt: new Date("2022-12-11T18:32:09.426Z"),
    id: "<value>",
    name: "<value>",
    description:
      "apprehensive legitimize geez mmm forearm before substantiate mosh",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2023-10-10T19:23:01.599Z"),
    modifiedAt: new Date("2024-10-07T04:53:54.006Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 805264,
    recurringInterval: "year",
  },
  discount: {
    duration: "repeating",
    type: "fixed",
    basisPoints: 873833,
    createdAt: new Date("2024-07-03T01:03:11.378Z"),
    modifiedAt: new Date("2022-08-23T08:43:29.864Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2022-01-14T08:09:00.404Z"),
    endsAt: new Date("2022-12-20T19:42:29.360Z"),
    maxRedemptions: 229567,
    redemptionsCount: 506863,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": false,
    },
    createdAt: new Date("2022-04-18T01:16:45.009Z"),
    modifiedAt: new Date("2023-07-19T08:30:48.959Z"),
    id: "<value>",
    amount: 938412,
    currency: "Danish Krone",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2022-01-12T00:42:55.621Z"),
    currentPeriodEnd: new Date("2023-06-06T12:07:56.121Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-02-16T19:29:46.908Z"),
    endedAt: new Date("2022-02-18T04:43:47.150Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the object.                                                                                                   |
| `metadata`                                                                                                              | Record<string, *components.OrderMetadata*>                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customFieldData`                                                                                                       | [components.OrderCustomFieldData](../../models/components/ordercustomfielddata.md)                                      | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `billingReason`                                                                                                         | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `billingAddress`                                                                                                        | [components.Address](../../models/components/address.md)                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPriceId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customer`                                                                                                              | [components.OrderCustomer](../../models/components/ordercustomer.md)                                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `user`                                                                                                                  | [components.OrderUser](../../models/components/orderuser.md)                                                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `product`                                                                                                               | [components.OrderProduct](../../models/components/orderproduct.md)                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.OrderDiscount*                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.OrderSubscription](../../models/components/ordersubscription.md)                                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |