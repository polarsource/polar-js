# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2025-11-21T15:56:29.957Z"),
  modifiedAt: new Date("2023-06-11T23:45:58.648Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  status: "<value>",
  amount: 873557,
  taxAmount: 491892,
  refundedAmount: 898961,
  refundedTaxAmount: 185518,
  currency: "Malagasy Ariary",
  billingReason: "subscription_create",
  billingAddress: {
    country: "French Polynesia",
  },
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  customer: {
    createdAt: new Date("2024-05-04T18:39:05.975Z"),
    modifiedAt: new Date("2024-04-19T15:40:09.196Z"),
    id: "<value>",
    metadata: {
      "key": 914971,
    },
    email: "Monique_Mayert@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Saint Vincent and the Grenadines",
    },
    taxId: [
      "ca_bn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://jubilant-jogging.info",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Lilliana_Streich@yahoo.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2025-06-07T16:17:56.157Z"),
    modifiedAt: new Date("2024-01-17T14:50:27.103Z"),
    id: "<value>",
    name: "<value>",
    description: "before hm zowie utterly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2023-04-20T07:22:31.598Z"),
    modifiedAt: new Date("2024-06-05T05:53:46.089Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 820023,
    recurringInterval: "month",
  },
  discount: {
    duration: "once",
    type: "percentage",
    amount: 140384,
    currency: "Danish Krone",
    createdAt: new Date("2023-03-17T11:04:55.466Z"),
    modifiedAt: new Date("2025-02-12T10:59:49.190Z"),
    id: "<value>",
    metadata: {
      "key": 310840,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-02-26T14:44:54.858Z"),
    endsAt: new Date("2024-01-04T05:33:11.785Z"),
    maxRedemptions: 727772,
    redemptionsCount: 815200,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": "<value>",
    },
    createdAt: new Date("2025-12-03T07:19:37.207Z"),
    modifiedAt: new Date("2023-06-27T22:39:48.462Z"),
    id: "<value>",
    amount: 290841,
    currency: "Chilean Peso",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2024-07-26T07:18:50.610Z"),
    currentPeriodEnd: new Date("2025-07-24T13:15:12.012Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-09-01T20:02:16.057Z"),
    startedAt: new Date("2023-08-30T05:36:43.034Z"),
    endsAt: new Date("2024-11-13T16:36:16.642Z"),
    endedAt: new Date("2023-05-03T04:47:32.248Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
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
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discount`                                                                                                              | *components.OrderDiscount*                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.OrderSubscription](../../models/components/ordersubscription.md)                                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |