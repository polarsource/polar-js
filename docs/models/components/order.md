# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components/order.js";

let value: Order = {
  id: "<value>",
  createdAt: new Date("2024-11-19T18:15:00.201Z"),
  modifiedAt: new Date("2024-09-24T15:32:02.340Z"),
  status: "pending",
  paid: true,
  subtotalAmount: 485235,
  discountAmount: 870722,
  netAmount: 795990,
  taxAmount: 390856,
  totalAmount: 863634,
  refundedAmount: 250136,
  refundedTaxAmount: 782415,
  currency: "Convertible Marks",
  billingReason: "subscription_cycle",
  billingName: null,
  billingAddress: {
    country: "US",
  },
  isInvoiceGenerated: false,
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  metadata: {},
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-11-29T23:08:09.503Z"),
    modifiedAt: new Date("2025-04-19T04:57:52.293Z"),
    metadata: {
      "key": 9564.92,
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
    deletedAt: new Date("2024-08-01T02:10:59.019Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  userId: "<value>",
  product: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2024-09-10T09:53:33.542Z"),
    modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
    id: "<value>",
    name: "<value>",
    description: null,
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  discount: {
    duration: "forever",
    type: "fixed",
    amount: 730131,
    currency: "Argentine Peso",
    createdAt: new Date("2023-09-25T16:35:51.122Z"),
    modifiedAt: new Date("2023-02-17T22:27:48.746Z"),
    id: "<value>",
    metadata: {
      "key": 2446.34,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-01-16T07:39:17.060Z"),
    endsAt: new Date("2024-07-16T03:03:58.095Z"),
    maxRedemptions: 328255,
    redemptionsCount: 466795,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2023-10-14T15:57:55.645Z"),
    modifiedAt: new Date("2023-05-04T20:55:46.311Z"),
    id: "<value>",
    amount: 602962,
    currency: "CFA Franc BEAC",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-02-14T05:20:48.992Z"),
    currentPeriodEnd: new Date("2025-11-22T14:25:51.795Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2023-11-02T20:45:43.683Z"),
    startedAt: new Date("2025-11-30T18:32:35.930Z"),
    endsAt: new Date("2023-06-16T10:04:40.672Z"),
    endedAt: new Date("2025-03-27T15:38:39.644Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "customer_service",
    customerCancellationComment: "<value>",
  },
  items: [
    {
      createdAt: new Date("2025-09-26T23:45:02.094Z"),
      modifiedAt: null,
      id: "<value>",
      label: "<value>",
      amount: 475844,
      taxAmount: 549894,
      proration: false,
      productPriceId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the object.                                                                                                   |                                                                                                                         |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |                                                                                                                         |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |                                                                                                                         |
| `status`                                                                                                                | [components.OrderStatus](../../models/components/orderstatus.md)                                                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `paid`                                                                                                                  | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the order has been paid for.                                                                                    | true                                                                                                                    |
| `subtotalAmount`                                                                                                        | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Amount in cents, before discounts and taxes.                                                                            |                                                                                                                         |
| `discountAmount`                                                                                                        | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Discount amount in cents.                                                                                               |                                                                                                                         |
| `netAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Amount in cents, after discounts but before taxes.                                                                      |                                                                                                                         |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Sales tax amount in cents.                                                                                              |                                                                                                                         |
| `totalAmount`                                                                                                           | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Amount in cents, after discounts and taxes.                                                                             |                                                                                                                         |
| `refundedAmount`                                                                                                        | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Amount refunded in cents.                                                                                               |                                                                                                                         |
| `refundedTaxAmount`                                                                                                     | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Sales tax refunded in cents.                                                                                            |                                                                                                                         |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `billingReason`                                                                                                         | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `billingName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the customer that should appear on the invoice.                                                             |                                                                                                                         |
| `billingAddress`                                                                                                        | [components.Address](../../models/components/address.md)                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `isInvoiceGenerated`                                                                                                    | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether an invoice has been generated for this order.                                                                   |                                                                                                                         |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `metadata`                                                                                                              | Record<string, *components.OrderMetadata*>                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `customFieldData`                                                                                                       | Record<string, *components.OrderCustomFieldData*>                                                                       | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |                                                                                                                         |
| `customer`                                                                                                              | [components.OrderCustomer](../../models/components/ordercustomer.md)                                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `product`                                                                                                               | [components.OrderProduct](../../models/components/orderproduct.md)                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `discount`                                                                                                              | *components.OrderDiscount*                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `subscription`                                                                                                          | [components.OrderSubscription](../../models/components/ordersubscription.md)                                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `items`                                                                                                                 | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                              | :heavy_check_mark:                                                                                                      | Line items composing the order.                                                                                         |                                                                                                                         |