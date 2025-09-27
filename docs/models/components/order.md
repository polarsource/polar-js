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
  fromBalanceAmount: 250136,
  refundedAmount: 782415,
  refundedTaxAmount: 65687,
  currency: "Cordoba Oro",
  billingReason: "purchase",
  billingName: "<value>",
  billingAddress: {
    country: "US",
  },
  invoiceNumber: "<value>",
  isInvoiceGenerated: true,
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: null,
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
    id: "<value>",
    createdAt: new Date("2024-09-10T09:53:33.542Z"),
    modifiedAt: new Date("2023-01-29T03:42:25.281Z"),
    trialInterval: null,
    trialIntervalCount: 212587,
    name: "<value>",
    description: "ferociously sternly gah whoever drat regarding exterior ha",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: true,
    organizationId: "<value>",
  },
  discount: null,
  subscription: {
    metadata: {},
    createdAt: new Date("2024-11-20T15:28:12.891Z"),
    modifiedAt: new Date("2023-06-21T16:47:17.985Z"),
    id: "<value>",
    amount: 74671,
    currency: "Uganda Shilling",
    recurringInterval: "week",
    status: "incomplete",
    currentPeriodStart: new Date("2025-02-03T14:23:56.921Z"),
    currentPeriodEnd: new Date("2024-06-20T06:09:26.582Z"),
    trialStart: new Date("2023-03-30T20:20:03.602Z"),
    trialEnd: new Date("2025-11-20T18:15:09.797Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-07-26T03:49:25.286Z"),
    startedAt: new Date("2025-10-27T09:20:54.423Z"),
    endsAt: new Date("2025-02-12T10:41:21.406Z"),
    endedAt: new Date("2024-02-22T13:40:24.594Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: null,
    checkoutId: "<value>",
    customerCancellationReason: "too_complex",
    customerCancellationComment: "<value>",
  },
  items: [
    {
      createdAt: new Date("2023-03-08T18:55:46.865Z"),
      modifiedAt: new Date("2024-05-21T03:01:04.091Z"),
      id: "<value>",
      label: "<value>",
      amount: 864952,
      taxAmount: 346483,
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
| `fromBalanceAmount`                                                                                                     | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | How much of this invoice was paid using the customer's balance. Amount in cents.                                        |                                                                                                                         |
| `refundedAmount`                                                                                                        | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Amount refunded in cents.                                                                                               |                                                                                                                         |
| `refundedTaxAmount`                                                                                                     | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | Sales tax refunded in cents.                                                                                            |                                                                                                                         |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `billingReason`                                                                                                         | [components.OrderBillingReason](../../models/components/orderbillingreason.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `billingName`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The name of the customer that should appear on the invoice.                                                             |                                                                                                                         |
| `billingAddress`                                                                                                        | [components.Address](../../models/components/address.md)                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `invoiceNumber`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The invoice number associated with this order.                                                                          |                                                                                                                         |
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