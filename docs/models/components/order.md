# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2025-02-12T10:59:49.190Z"),
  modifiedAt: new Date("2024-03-09T04:12:54.857Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  amount: 718627,
  taxAmount: 335977,
  currency: "Saudi Riyal",
  billingReason: "subscription_update",
  billingAddress: {
    country: "Croatia",
  },
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  customer: {
    createdAt: new Date("2025-12-03T07:19:37.207Z"),
    modifiedAt: new Date("2023-06-27T22:39:48.462Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Ezekiel_Lebsack88@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Nepal",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://glorious-eyeliner.info/",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Annie.Rice@hotmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2025-12-31T18:57:53.420Z"),
    modifiedAt: new Date("2023-08-05T04:42:47.563Z"),
    id: "<value>",
    name: "<value>",
    description: "noted abaft ick phooey alongside near thick",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2025-12-27T09:55:31.678Z"),
    modifiedAt: new Date("2023-05-22T18:34:26.178Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 471457,
    recurringInterval: "month",
  },
  discount: {
    duration: "repeating",
    durationInMonths: 719389,
    type: "fixed",
    basisPoints: 254382,
    createdAt: new Date("2023-10-18T18:32:19.135Z"),
    modifiedAt: new Date("2023-05-20T12:20:31.360Z"),
    id: "<value>",
    metadata: {
      "key": 141817,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-12-14T03:17:00.431Z"),
    endsAt: new Date("2024-11-17T20:53:13.717Z"),
    maxRedemptions: 727544,
    redemptionsCount: 24272,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": 652125,
    },
    createdAt: new Date("2025-07-24T03:46:55.765Z"),
    modifiedAt: new Date("2024-06-04T22:56:35.057Z"),
    id: "<value>",
    amount: 969206,
    currency: "Ethiopian Birr",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-10-08T16:49:02.151Z"),
    currentPeriodEnd: new Date("2025-06-21T19:04:10.722Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-09-13T02:51:08.528Z"),
    startedAt: new Date("2023-12-07T10:47:27.448Z"),
    endsAt: new Date("2025-05-17T04:26:46.844Z"),
    endedAt: new Date("2025-02-22T19:07:41.165Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_complex",
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
| `customFieldData`                                                                                                       | [components.OrderCustomFieldData](../../models/components/ordercustomfielddata.md)                                      | :heavy_minus_sign:                                                                                                      | Key-value object storing custom field values.                                                                           |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
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