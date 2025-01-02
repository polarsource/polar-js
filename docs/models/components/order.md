# Order

## Example Usage

```typescript
import { Order } from "@polar-sh/sdk/models/components";

let value: Order = {
  createdAt: new Date("2023-09-07T04:32:30.698Z"),
  modifiedAt: new Date("2023-03-17T11:04:55.466Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  amount: 395233,
  taxAmount: 310840,
  currency: "Russian Ruble",
  billingReason: "subscription_create",
  billingAddress: {
    country: "Reunion",
  },
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  customer: {
    createdAt: new Date("2025-06-12T11:00:17.620Z"),
    modifiedAt: new Date("2023-08-27T13:24:12.363Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    email: "Efren52@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Timor-Leste",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://chilly-impostor.biz",
  },
  userId: "<value>",
  user: {
    id: "<value>",
    email: "Jaylon_Bernhard73@gmail.com",
    publicName: "<value>",
  },
  product: {
    createdAt: new Date("2025-10-26T07:41:18.790Z"),
    modifiedAt: new Date("2024-07-08T22:02:12.267Z"),
    id: "<value>",
    name: "<value>",
    description:
      "strange earnest boo legitimize well meh unibody majestically ew airmail",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
  },
  productPrice: {
    createdAt: new Date("2025-07-24T03:46:55.765Z"),
    modifiedAt: new Date("2024-06-04T22:56:35.057Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 969206,
    maximumAmount: 265632,
    presetAmount: 13508,
    recurringInterval: "month",
  },
  discount: {
    duration: "repeating",
    durationInMonths: 232772,
    type: "fixed",
    amount: 791228,
    currency: "Russian Ruble",
    createdAt: new Date("2024-09-03T14:58:47.025Z"),
    modifiedAt: new Date("2025-02-11T14:57:13.755Z"),
    id: "<value>",
    metadata: {
      "key": 5310,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-01-13T10:41:07.081Z"),
    endsAt: new Date("2024-07-14T07:10:40.441Z"),
    maxRedemptions: 83291,
    redemptionsCount: 51075,
    organizationId: "<value>",
  },
  subscription: {
    metadata: {
      "key": false,
    },
    createdAt: new Date("2025-07-30T11:12:19.561Z"),
    modifiedAt: new Date("2023-06-16T14:55:27.064Z"),
    id: "<value>",
    amount: 664,
    currency: "East Caribbean Dollar",
    recurringInterval: "month",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2025-01-27T21:25:45.366Z"),
    currentPeriodEnd: new Date("2023-04-30T08:36:14.207Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-18T01:20:34.893Z"),
    endedAt: new Date("2025-12-04T16:53:25.686Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
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