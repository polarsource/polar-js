# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components/order.js";

let value: Order = {
  createdAt: new Date("2023-12-13T22:17:51.524Z"),
  modifiedAt: new Date("2023-11-24T10:19:41.436Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  status: "<value>",
  amount: 750537,
  taxAmount: 998023,
  refundedAmount: 533978,
  refundedTaxAmount: 944203,
  currency: "Iranian Rial",
  billingReason: "purchase",
  billingAddress: {
    country: "Hungary",
  },
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  customer: {
    createdAt: new Date("2023-11-21T13:20:41.827Z"),
    modifiedAt: new Date("2024-06-24T18:34:36.250Z"),
    id: "<value>",
    metadata: {
      "key": 461050,
    },
    email: "Shayna39@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Eswatini",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://scared-object.net",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Jayne.Von@hotmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2024-08-12T14:07:32.789Z"),
    modifiedAt: new Date("2025-10-24T16:17:24.086Z"),
    id: "<value>",
    name: "<value>",
    description: "gleaming while phooey the worthless",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2023-02-16T10:20:38.020Z"),
    modifiedAt: new Date("2023-09-07T14:29:56.720Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    minimumAmount: 836991,
    maximumAmount: 221824,
    presetAmount: 493945,
  },
  discount: {
    duration: "repeating",
    durationInMonths: 798079,
    type: "percentage",
    basisPoints: 980467,
    createdAt: new Date("2024-10-07T04:10:09.540Z"),
    modifiedAt: new Date("2023-02-19T21:06:49.752Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-03-19T15:09:55.930Z"),
    endsAt: new Date("2024-10-20T23:59:41.091Z"),
    maxRedemptions: 771931,
    redemptionsCount: 413086,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": false,
    },
    createdAt: new Date("2025-05-15T16:43:38.676Z"),
    modifiedAt: new Date("2023-12-14T17:12:44.022Z"),
    id: "<value>",
    amount: 979271,
    currency: "Balboa",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2025-03-23T19:07:41.270Z"),
    currentPeriodEnd: new Date("2025-04-24T12:23:27.589Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-09-22T10:33:55.323Z"),
    startedAt: new Date("2023-06-14T18:48:00.017Z"),
    endsAt: new Date("2024-09-03T21:05:13.882Z"),
    endedAt: new Date("2024-04-14T12:04:06.271Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
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