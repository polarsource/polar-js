# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components/order.js";

let value: Order = {
  createdAt: new Date("2024-08-23T21:19:59.665Z"),
  modifiedAt: new Date("2024-08-18T12:20:52.263Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  status: "partially_refunded",
  paid: true,
  subtotalAmount: 277990,
  discountAmount: 793282,
  netAmount: 659971,
  amount: 580238,
  taxAmount: 774880,
  totalAmount: 944033,
  refundedAmount: 36691,
  refundedTaxAmount: 147400,
  currency: "Swedish Krona",
  billingReason: "purchase",
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
    createdAt: new Date("2023-08-29T23:13:04.327Z"),
    modifiedAt: new Date("2023-10-28T15:04:27.098Z"),
    metadata: {
      "key": false,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-05-02T03:34:27.990Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Kamren.Hegmann31@yahoo.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2024-09-01T12:31:37.748Z"),
    modifiedAt: new Date("2023-12-15T13:25:30.391Z"),
    id: "<value>",
    name: "<value>",
    description:
      "genuine aboard barring alongside mortar gadzooks headline service mob skeleton",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2023-08-04T07:26:48.800Z"),
    modifiedAt: new Date("2025-01-05T23:51:52.329Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "month",
    priceCurrency: "<value>",
    minimumAmount: 642804,
    maximumAmount: 442873,
    presetAmount: 898088,
  },
  discount: {
    duration: "forever",
    durationInMonths: 514767,
    type: "fixed",
    amount: 712893,
    currency: "Somoni",
    createdAt: new Date("2023-03-05T11:14:44.230Z"),
    modifiedAt: new Date("2023-11-16T08:41:29.527Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-11-14T08:56:10.067Z"),
    endsAt: new Date("2025-01-01T05:12:31.175Z"),
    maxRedemptions: 964201,
    redemptionsCount: 531494,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  subscription: {
    metadata: {
      "key": false,
    },
    createdAt: new Date("2024-02-15T08:35:07.555Z"),
    modifiedAt: new Date("2024-01-23T18:51:20.998Z"),
    id: "<value>",
    amount: 378268,
    currency: "Nuevo Sol",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2025-12-13T16:03:43.381Z"),
    currentPeriodEnd: new Date("2023-02-03T08:20:20.613Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-08-01T05:04:01.310Z"),
    startedAt: new Date("2023-05-04T00:37:25.698Z"),
    endsAt: new Date("2023-02-16T10:20:38.020Z"),
    endedAt: new Date("2023-09-07T14:29:56.720Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    userId: "<value>",
  },
  items: [
    {
      createdAt: new Date("2025-07-06T08:11:40.447Z"),
      modifiedAt: new Date("2023-09-01T02:51:33.474Z"),
      id: "<value>",
      label: "<value>",
      amount: 493945,
      taxAmount: 929619,
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