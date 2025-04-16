# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components/order.js";

let value: Order = {
  createdAt: new Date("2024-11-19T18:15:00.201Z"),
  modifiedAt: new Date("2024-01-17T08:33:48.573Z"),
  id: "<value>",
  metadata: {
    "key": 792.52,
  },
  status: "paid",
  paid: true,
  subtotalAmount: 870722,
  discountAmount: 795990,
  netAmount: 390856,
  amount: 863634,
  taxAmount: 250136,
  totalAmount: 782415,
  refundedAmount: 65687,
  refundedTaxAmount: 623249,
  currency: "Australian Dollar",
  billingReason: "subscription_create",
  billingAddress: {
    country: "SE",
  },
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-02-16T11:18:39.347Z"),
    modifiedAt: new Date("2024-04-19T13:47:00.983Z"),
    metadata: {
      "key": 43704,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2023-10-24T00:55:41.034Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Tanya90@hotmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2023-04-07T15:22:31.660Z"),
    modifiedAt: new Date("2025-04-10T16:16:20.501Z"),
    id: "<value>",
    name: "<value>",
    description: "gladly exaggerate after versus see ew oily instead",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2025-04-04T00:20:39.118Z"),
    modifiedAt: new Date("2025-12-06T06:47:38.470Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
  },
  discount: {
    duration: "once",
    type: "fixed",
    amount: 544449,
    currency: "Lek",
    createdAt: new Date("2025-09-21T10:41:01.762Z"),
    modifiedAt: new Date("2023-07-22T04:56:50.823Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-08-18T16:58:00.098Z"),
    endsAt: new Date("2023-12-04T11:50:21.599Z"),
    maxRedemptions: 77451,
    redemptionsCount: 105889,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  subscription: {
    metadata: {
      "key": 6329.07,
    },
    createdAt: new Date("2025-09-30T07:13:45.438Z"),
    modifiedAt: new Date("2023-12-10T23:25:07.768Z"),
    id: "<value>",
    amount: 592060,
    currency: "Rufiyaa",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-06-20T18:46:26.121Z"),
    currentPeriodEnd: new Date("2025-03-28T22:15:18.283Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-08-13T20:49:38.241Z"),
    startedAt: new Date("2024-04-11T06:02:11.692Z"),
    endsAt: new Date("2023-05-03T07:55:57.487Z"),
    endedAt: new Date("2024-08-25T00:14:59.084Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    userId: "<value>",
  },
  items: [
    {
      createdAt: new Date("2023-04-28T01:45:54.206Z"),
      modifiedAt: new Date("2023-08-15T17:52:23.310Z"),
      id: "<value>",
      label: "<value>",
      amount: 923419,
      taxAmount: 665357,
      proration: false,
      productPriceId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_check_mark:                                                                                                                                                          | Creation timestamp of the object.                                                                                                                                           |                                                                                                                                                                             |
| `modifiedAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_check_mark:                                                                                                                                                          | Last modification timestamp of the object.                                                                                                                                  |                                                                                                                                                                             |
| `id`                                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The ID of the object.                                                                                                                                                       |                                                                                                                                                                             |
| `metadata`                                                                                                                                                                  | Record<string, *components.OrderMetadata*>                                                                                                                                  | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `customFieldData`                                                                                                                                                           | Record<string, *components.OrderCustomFieldData*>                                                                                                                           | :heavy_minus_sign:                                                                                                                                                          | Key-value object storing custom field values.                                                                                                                               |                                                                                                                                                                             |
| `status`                                                                                                                                                                    | [components.OrderStatus](../../models/components/orderstatus.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `paid`                                                                                                                                                                      | *boolean*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                          | Whether the order has been paid for.                                                                                                                                        | true                                                                                                                                                                        |
| `subtotalAmount`                                                                                                                                                            | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount in cents, before discounts and taxes.                                                                                                                                |                                                                                                                                                                             |
| `discountAmount`                                                                                                                                                            | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Discount amount in cents.                                                                                                                                                   |                                                                                                                                                                             |
| `netAmount`                                                                                                                                                                 | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount in cents, after discounts but before taxes.                                                                                                                          |                                                                                                                                                                             |
| ~~`amount`~~                                                                                                                                                                | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Amount in cents, after discounts but before taxes. |                                                                                                                                                                             |
| `taxAmount`                                                                                                                                                                 | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Sales tax amount in cents.                                                                                                                                                  |                                                                                                                                                                             |
| `totalAmount`                                                                                                                                                               | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount in cents, after discounts and taxes.                                                                                                                                 |                                                                                                                                                                             |
| `refundedAmount`                                                                                                                                                            | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount refunded in cents.                                                                                                                                                   |                                                                                                                                                                             |
| `refundedTaxAmount`                                                                                                                                                         | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Sales tax refunded in cents.                                                                                                                                                |                                                                                                                                                                             |
| `currency`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `billingReason`                                                                                                                                                             | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                                                                                              | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `billingAddress`                                                                                                                                                            | [components.Address](../../models/components/address.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `customerId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `productId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`productPriceId`~~                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `discountId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `subscriptionId`                                                                                                                                                            | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `checkoutId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `customer`                                                                                                                                                                  | [components.OrderCustomer](../../models/components/ordercustomer.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`userId`~~                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `user`                                                                                                                                                                      | [components.OrderUser](../../models/components/orderuser.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `product`                                                                                                                                                                   | [components.OrderProduct](../../models/components/orderproduct.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`productPrice`~~                                                                                                                                                          | *components.OrderProductPrice*                                                                                                                                              | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `discount`                                                                                                                                                                  | *components.OrderDiscount*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `subscription`                                                                                                                                                              | [components.OrderSubscription](../../models/components/ordersubscription.md)                                                                                                | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `items`                                                                                                                                                                     | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                                          | Line items composing the order.                                                                                                                                             |                                                                                                                                                                             |