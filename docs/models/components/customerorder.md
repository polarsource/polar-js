# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2025-10-27T00:07:49.997Z"),
  modifiedAt: new Date("2023-11-25T14:57:51.552Z"),
  id: "<value>",
  status: "refunded",
  paid: true,
  subtotalAmount: 175785,
  discountAmount: 3721,
  netAmount: 86176,
  taxAmount: 961655,
  totalAmount: 882330,
  refundedAmount: 991943,
  refundedTaxAmount: 816554,
  currency: "Azerbaijanian Manat",
  customerId: "<value>",
  productId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-09-08T14:32:11.975Z"),
    modifiedAt: new Date("2024-06-29T02:21:41.206Z"),
    id: "<value>",
    name: "<value>",
    description: "so sedately through corny consequently",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-10-14T02:58:02.790Z"),
        modifiedAt: new Date("2023-06-04T11:45:58.378Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 367452,
        maximumAmount: 63036,
        presetAmount: 754305,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-09-28T06:14:22.747Z"),
        modifiedAt: new Date("2024-08-08T09:16:37.102Z"),
        type: "github_repository",
        description:
          "while via innovation indeed however excepting before improbable whether quizzically",
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
        path: "/usr/share",
        mimeType: "<value>",
        size: 348068,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-12T04:02:12.390Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-19T15:01:05.733Z"),
        sizeReadable: "<value>",
        publicUrl: "https://sugary-license.net",
      },
    ],
    organization: {
      createdAt: new Date("2024-12-29T02:23:28.044Z"),
      modifiedAt: new Date("2023-10-22T01:38:00.841Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://known-produce.name/",
      email: "Ottis_Davis@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "linkedin",
          url: "https://ample-instruction.info/",
        },
      ],
      detailsSubmittedAt: new Date("2024-06-09T17:00:52.619Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  },
  subscription: {
    createdAt: new Date("2024-08-28T18:48:57.342Z"),
    modifiedAt: new Date("2023-11-11T03:07:03.537Z"),
    id: "<value>",
    amount: 929799,
    currency: "Balboa",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-03-02T02:27:24.406Z"),
    currentPeriodEnd: new Date("2023-06-04T23:19:40.379Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-10-31T11:44:03.904Z"),
    startedAt: new Date("2023-03-13T05:18:32.374Z"),
    endsAt: new Date("2023-01-15T00:21:31.316Z"),
    endedAt: new Date("2023-08-06T07:45:53.263Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_complex",
    customerCancellationComment: "<value>",
  },
  items: [
    {
      createdAt: new Date("2024-06-03T23:13:33.176Z"),
      modifiedAt: new Date("2023-01-16T15:27:23.363Z"),
      id: "<value>",
      label: "<value>",
      amount: 838516,
      taxAmount: 140846,
      proration: false,
      productPriceId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |                                                                                                                         |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |                                                                                                                         |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
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
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |                                                                                                                         |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `items`                                                                                                                 | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                              | :heavy_check_mark:                                                                                                      | Line items composing the order.                                                                                         |                                                                                                                         |