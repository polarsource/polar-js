# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  id: "<value>",
  createdAt: new Date("2025-10-27T00:07:49.997Z"),
  modifiedAt: new Date("2024-12-06T15:48:24.196Z"),
  status: "pending",
  paid: true,
  subtotalAmount: 3721,
  discountAmount: 86176,
  netAmount: 961655,
  taxAmount: 882330,
  totalAmount: 991943,
  fromBalanceAmount: 816554,
  refundedAmount: 62143,
  refundedTaxAmount: 228655,
  currency: "Lebanese Pound",
  billingReason: "subscription_create",
  billingName: "<value>",
  billingAddress: {
    country: "US",
  },
  invoiceNumber: "<value>",
  isInvoiceGenerated: false,
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  userId: "<value>",
  product: {
    id: "<value>",
    createdAt: new Date("2025-10-03T15:28:24.829Z"),
    modifiedAt: new Date("2023-11-16T06:21:02.029Z"),
    trialInterval: "year",
    trialIntervalCount: 313224,
    name: "<value>",
    description: null,
    recurringInterval: "month",
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-06-16T00:40:28.022Z"),
        modifiedAt: new Date("2025-09-07T23:37:19.259Z"),
        type: "meter_credit",
        description:
          "rationalize well grimy unscramble pish excitedly er bleakly",
        selectable: true,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [],
    organization: {
      createdAt: new Date("2025-11-26T13:33:51.948Z"),
      modifiedAt: new Date("2025-01-01T18:22:02.718Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://annual-comparison.biz",
      email: "Maxime52@hotmail.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://scratchy-midwife.net/",
        },
      ],
      status: "onboarding_started",
      detailsSubmittedAt: new Date("2023-01-14T17:51:08.613Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: true,
        allowCustomerUpdates: true,
        prorationBehavior: "invoice",
      },
      notificationSettings: {
        newOrder: false,
        newSubscription: true,
      },
    },
  },
  subscription: {
    createdAt: new Date("2024-11-12T09:58:36.462Z"),
    modifiedAt: new Date("2023-10-30T21:58:21.451Z"),
    id: "<value>",
    amount: 389698,
    currency: "CFP Franc",
    recurringInterval: "week",
    status: "unpaid",
    currentPeriodStart: new Date("2023-09-01T16:28:55.798Z"),
    currentPeriodEnd: new Date("2023-02-06T14:59:10.086Z"),
    trialStart: new Date("2023-03-18T03:28:52.944Z"),
    trialEnd: new Date("2023-10-09T19:42:21.526Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-09-01T17:40:05.914Z"),
    startedAt: new Date("2023-04-23T01:56:55.379Z"),
    endsAt: new Date("2024-03-06T19:03:50.234Z"),
    endedAt: new Date("2024-09-01T07:31:10.688Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
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
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `items`                                                                                                                 | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                              | :heavy_check_mark:                                                                                                      | Line items composing the order.                                                                                         |                                                                                                                         |
| `nextPaymentAttemptAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | When the next payment retry is scheduled                                                                                |                                                                                                                         |