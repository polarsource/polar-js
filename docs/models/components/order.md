# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components/order.js";

let value: Order = {
  createdAt: new Date("2024-11-19T18:15:00.201Z"),
  modifiedAt: new Date("2024-01-17T08:33:48.573Z"),
  id: "<value>",
  metadata: {
    "key": 79252,
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
      "key": "<value>",
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
    deletedAt: new Date("2023-03-02T02:03:14.124Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Mavis54@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2025-03-12T15:53:30.275Z"),
    modifiedAt: new Date("2023-04-07T15:22:31.660Z"),
    id: "<value>",
    name: "<value>",
    description:
      "aha yahoo excitedly phew commonly airbrush odd rebuff worldly",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2024-08-19T17:11:32.963Z"),
    modifiedAt: new Date("2023-01-17T11:39:33.089Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 184494,
  },
  discount: {
    duration: "repeating",
    durationInMonths: 307932,
    type: "fixed",
    basisPoints: 105889,
    createdAt: new Date("2024-10-10T00:46:39.859Z"),
    modifiedAt: new Date("2024-11-24T15:59:23.894Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-12-10T23:25:07.768Z"),
    endsAt: new Date("2024-10-10T21:32:53.850Z"),
    maxRedemptions: 578285,
    redemptionsCount: 675496,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2024-06-20T18:46:26.121Z"),
    modifiedAt: new Date("2025-03-28T22:15:18.283Z"),
    id: "<value>",
    amount: 872143,
    currency: "Yen",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2025-11-10T12:23:20.754Z"),
    currentPeriodEnd: new Date("2023-04-28T01:45:54.206Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-08-15T17:52:23.310Z"),
    startedAt: new Date("2025-10-09T01:35:33.832Z"),
    endsAt: new Date("2024-12-30T05:32:54.758Z"),
    endedAt: new Date("2024-04-01T13:18:43.547Z"),
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
      createdAt: new Date("2023-09-09T18:43:51.153Z"),
      modifiedAt: new Date("2024-02-12T18:45:01.134Z"),
      id: "<value>",
      label: "<value>",
      amount: 652414,
      taxAmount: 214184,
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