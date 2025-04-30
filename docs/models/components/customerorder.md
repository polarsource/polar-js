# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  id: "<value>",
  createdAt: new Date("2025-10-27T00:07:49.997Z"),
  modifiedAt: new Date("2023-11-25T14:57:51.552Z"),
  status: "refunded",
  paid: true,
  subtotalAmount: 175785,
  discountAmount: 3721,
  netAmount: 86176,
  amount: 961655,
  taxAmount: 882330,
  totalAmount: 991943,
  refundedAmount: 816554,
  refundedTaxAmount: 62143,
  currency: "Danish Krone",
  billingReason: "subscription_create",
  billingAddress: {
    country: "US",
  },
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  subscriptionId: "<value>",
  checkoutId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-10-18T04:42:41.097Z"),
    modifiedAt: new Date("2025-05-11T08:24:10.879Z"),
    id: "<value>",
    name: "<value>",
    description:
      "alive recklessly incidentally speedily downchange when however masticate",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-11-06T20:30:34.080Z"),
        modifiedAt: new Date("2024-02-27T16:10:35.101Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 777866,
        maximumAmount: 629037,
        presetAmount: 253888,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-03-20T05:45:16.230Z"),
        modifiedAt: new Date("2024-05-25T04:39:43.603Z"),
        type: "meter_credit",
        description:
          "almighty discontinue after knottily finally blah guilty out ack major",
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
        path: "/bin",
        mimeType: "<value>",
        size: 470890,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-18T11:04:00.653Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-06-09T17:00:52.619Z"),
        sizeReadable: "<value>",
        publicUrl: "https://next-effector.org/",
      },
    ],
    organization: {
      createdAt: new Date("2024-12-19T16:50:11.429Z"),
      modifiedAt: new Date("2023-04-07T22:41:36.387Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://awful-characterization.name/",
      email: "Adolphus1@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://supportive-awareness.net/",
        },
      ],
      detailsSubmittedAt: new Date("2024-03-02T13:09:44.658Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  },
  subscription: {
    createdAt: new Date("2023-12-27T09:57:17.448Z"),
    modifiedAt: new Date("2025-07-31T07:15:56.583Z"),
    id: "<value>",
    amount: 170234,
    currency: "Nakfa",
    recurringInterval: "year",
    status: "canceled",
    currentPeriodStart: new Date("2025-04-25T21:06:16.888Z"),
    currentPeriodEnd: new Date("2025-03-27T08:13:22.996Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-10-13T20:32:05.084Z"),
    startedAt: new Date("2024-08-09T12:37:01.128Z"),
    endsAt: new Date("2024-05-25T20:34:18.882Z"),
    endedAt: new Date("2024-10-01T23:47:41.851Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
  },
  items: [
    {
      createdAt: new Date("2024-08-28T14:51:21.030Z"),
      modifiedAt: new Date("2024-09-15T19:27:34.202Z"),
      id: "<value>",
      label: "<value>",
      amount: 219003,
      taxAmount: 741278,
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
| `billingAddress`                                                                                                                                                            | [components.Address](../../models/components/address.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `customerId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `productId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `discountId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `subscriptionId`                                                                                                                                                            | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `checkoutId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`userId`~~                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `product`                                                                                                                                                                   | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                                                                          | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `subscription`                                                                                                                                                              | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                                                                                | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `items`                                                                                                                                                                     | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                                          | Line items composing the order.                                                                                                                                             |                                                                                                                                                                             |