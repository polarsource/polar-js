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
  amount: 882330,
  taxAmount: 991943,
  totalAmount: 816554,
  refundedAmount: 62143,
  refundedTaxAmount: 228655,
  currency: "Lebanese Pound",
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
    createdAt: new Date("2025-10-03T15:28:24.829Z"),
    modifiedAt: new Date("2023-11-16T06:21:02.029Z"),
    id: "<value>",
    name: "<value>",
    description:
      "as however almighty mid claw procrastinate self-confidence proofread grade",
    recurringInterval: "month",
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-02-28T01:09:21.212Z"),
        modifiedAt: new Date("2023-02-15T16:10:30.309Z"),
        type: "downloadables",
        description: "drowse whoever until continually amidst gentle quadruple",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/private",
        mimeType: "<value>",
        size: 782007,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: null,
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-07-08T02:43:14.288Z"),
        sizeReadable: "<value>",
        publicUrl: "https://aged-fellow.net",
      },
    ],
    organization: {
      createdAt: new Date("2024-07-11T02:04:41.072Z"),
      modifiedAt: new Date("2025-11-26T13:33:51.948Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://french-lid.com",
      email: "Hannah_Price@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "youtube",
          url: "https://expert-elevation.org",
        },
      ],
      detailsSubmittedAt: new Date("2025-12-07T19:21:48.818Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  },
  subscription: {
    createdAt: new Date("2025-11-26T02:12:01.065Z"),
    modifiedAt: new Date("2024-04-26T02:48:59.389Z"),
    id: "<value>",
    amount: 162332,
    currency: "Cordoba Oro",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2023-07-08T08:21:02.517Z"),
    currentPeriodEnd: new Date("2025-09-06T18:49:12.695Z"),
    cancelAtPeriodEnd: true,
    canceledAt: new Date("2025-09-10T09:16:21.463Z"),
    startedAt: new Date("2025-08-19T12:31:37.057Z"),
    endsAt: new Date("2025-11-06T17:52:28.201Z"),
    endedAt: new Date("2024-11-23T23:29:50.024Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
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

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 | Example                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The ID of the object.                                                                                                                                                       |                                                                                                                                                                             |
| `createdAt`                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_check_mark:                                                                                                                                                          | Creation timestamp of the object.                                                                                                                                           |                                                                                                                                                                             |
| `modifiedAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_check_mark:                                                                                                                                                          | Last modification timestamp of the object.                                                                                                                                  |                                                                                                                                                                             |
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
| `billingName`                                                                                                                                                               | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | The name of the customer that should appear on the invoice.                                                                                                                 |                                                                                                                                                                             |
| `billingAddress`                                                                                                                                                            | [components.Address](../../models/components/address.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `isInvoiceGenerated`                                                                                                                                                        | *boolean*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                          | Whether an invoice has been generated for this order.                                                                                                                       |                                                                                                                                                                             |
| `customerId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `productId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `discountId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `subscriptionId`                                                                                                                                                            | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `checkoutId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`userId`~~                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `product`                                                                                                                                                                   | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                                                                          | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `subscription`                                                                                                                                                              | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                                                                                | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `items`                                                                                                                                                                     | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                                          | Line items composing the order.                                                                                                                                             |                                                                                                                                                                             |