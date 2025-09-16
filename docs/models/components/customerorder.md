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
  refundedAmount: 816554,
  refundedTaxAmount: 62143,
  currency: "Danish Krone",
  billingReason: "subscription_create",
  billingName: "<value>",
  billingAddress: {
    country: "US",
  },
  isInvoiceGenerated: false,
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2024-04-08T05:09:43.678Z"),
    modifiedAt: new Date("2025-06-24T08:35:46.274Z"),
    id: "<value>",
    name: "<value>",
    description: "because geez eek out mid blink woot",
    recurringInterval: "month",
    isRecurring: true,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-12-05T16:51:45.959Z"),
        modifiedAt: new Date("2024-05-02T19:24:39.019Z"),
        id: "<value>",
        amountType: "fixed",
        isArchived: true,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "day",
        priceCurrency: "<value>",
        priceAmount: 202641,
        legacy: true,
      },
    ],
    benefits: [],
    medias: [],
    organization: {
      createdAt: new Date("2025-10-05T12:57:48.267Z"),
      modifiedAt: new Date("2025-09-05T05:45:42.406Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://medium-object.org",
      email: "Elena.Barton@hotmail.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://scratchy-midwife.net/",
        },
      ],
      status: "denied",
      detailsSubmittedAt: new Date("2024-02-17T13:14:03.864Z"),
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
    createdAt: new Date("2023-07-17T12:53:53.043Z"),
    modifiedAt: new Date("2024-06-08T20:21:58.462Z"),
    id: "<value>",
    amount: 184899,
    currency: "Rand",
    recurringInterval: "month",
    status: "trialing",
    currentPeriodStart: new Date("2025-11-26T02:12:01.065Z"),
    currentPeriodEnd: new Date("2024-04-26T02:48:59.389Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2024-07-13T22:13:37.550Z"),
    startedAt: new Date("2023-07-08T08:21:02.517Z"),
    endsAt: new Date("2025-09-06T18:49:12.695Z"),
    endedAt: new Date("2024-10-10T08:15:03.005Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_complex",
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
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `items`                                                                                                                 | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                              | :heavy_check_mark:                                                                                                      | Line items composing the order.                                                                                         |                                                                                                                         |
| `nextPaymentAttemptAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | When the next payment retry is scheduled                                                                                |                                                                                                                         |