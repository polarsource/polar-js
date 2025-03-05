# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components/order.js";

let value: Order = {
  createdAt: new Date("2024-11-05T08:13:52.054Z"),
  modifiedAt: new Date("2025-05-18T13:53:28.368Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  status: "<value>",
  amount: 483459,
  taxAmount: 881189,
  refundedAmount: 916419,
  refundedTaxAmount: 271551,
  currency: "Metical",
  billingReason: "subscription_cycle",
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
    createdAt: new Date("2025-10-24T16:17:24.086Z"),
    modifiedAt: new Date("2023-12-01T11:41:01.088Z"),
    metadata: {
      "key": false,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Odessa67@hotmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2023-01-18T19:30:48.072Z"),
    modifiedAt: new Date("2024-12-05T12:17:59.943Z"),
    id: "<value>",
    name: "<value>",
    description: "gosh longboat synthesise lively nervous save",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2023-12-14T17:12:44.022Z"),
    modifiedAt: new Date("2025-12-09T06:43:27.819Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "year",
  },
  discount: {
    duration: "repeating",
    type: "percentage",
    basisPoints: 908249,
    createdAt: new Date("2023-06-14T18:48:00.017Z"),
    modifiedAt: new Date("2024-09-03T21:05:13.882Z"),
    id: "<value>",
    metadata: {
      "key": 923159,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-04-26T04:24:39.015Z"),
    endsAt: new Date("2025-12-12T21:37:24.845Z"),
    maxRedemptions: 875452,
    redemptionsCount: 73826,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  subscription: {
    metadata: {
      "key": 717560,
    },
    createdAt: new Date("2025-03-20T00:20:17.729Z"),
    modifiedAt: new Date("2025-09-20T12:25:17.293Z"),
    id: "<value>",
    amount: 799866,
    currency: "Gibraltar Pound",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2023-06-01T17:26:33.631Z"),
    currentPeriodEnd: new Date("2023-08-01T14:44:02.184Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-06-11T05:20:25.998Z"),
    startedAt: new Date("2023-11-23T21:03:26.961Z"),
    endsAt: new Date("2025-08-03T08:45:30.623Z"),
    endedAt: new Date("2024-10-04T13:26:19.195Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    userId: "<value>",
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
| `customFieldData`                                                                                                       | Record<string, *components.OrderCustomFieldData*>                                                                       | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `status`                                                                                                                | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `refundedAmount`                                                                                                        | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Amount refunded                                                                                                         |
| `refundedTaxAmount`                                                                                                     | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Sales tax refunded                                                                                                      |
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
| `productPrice`                                                                                                          | *components.OrderProductPrice*                                                                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.OrderDiscount*                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.OrderSubscription](../../models/components/ordersubscription.md)                                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |