# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2024-10-22T04:57:04.113Z"),
  modifiedAt: new Date("2024-02-03T21:16:09.204Z"),
  id: "<value>",
  status: "pending",
  paid: true,
  subtotalAmount: 685354,
  discountAmount: 902332,
  netAmount: 398498,
  amount: 96468,
  taxAmount: 280607,
  totalAmount: 400653,
  refundedAmount: 407058,
  refundedTaxAmount: 637675,
  currency: "Brunei Dollar",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-05-04T10:00:03.073Z"),
    modifiedAt: new Date("2023-07-10T04:52:57.046Z"),
    id: "<value>",
    name: "<value>",
    description: "status yippee after sundae",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-09-18T18:45:50.627Z"),
        modifiedAt: new Date("2024-10-03T03:42:54.774Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 197677,
        maximumAmount: 912920,
        presetAmount: 204810,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-03-13T14:24:49.734Z"),
        modifiedAt: new Date("2024-11-22T01:36:41.126Z"),
        id: "<value>",
        type: "discord",
        description: "dispense zealous sentimental superb",
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
        path: "/usr",
        mimeType: "<value>",
        size: 364171,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-08T08:57:56.546Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-25T23:50:00.815Z"),
        sizeReadable: "<value>",
        publicUrl: "https://jam-packed-tinderbox.org",
      },
    ],
    organization: {
      createdAt: new Date("2025-03-29T05:10:24.186Z"),
      modifiedAt: new Date("2023-08-10T10:42:10.674Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://punctual-discourse.com/",
      email: "Lawson.Moore@yahoo.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://lavish-cellar.com/",
        },
      ],
      detailsSubmittedAt: new Date("2024-07-08T00:24:34.770Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
      bio: "<value>",
      company: "Rohan and Sons",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 499877,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 257140,
      profileSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2025-10-16T19:49:07.268Z"),
    modifiedAt: new Date("2025-04-07T12:40:12.871Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 926284,
  },
  subscription: {
    createdAt: new Date("2025-11-13T20:01:57.814Z"),
    modifiedAt: new Date("2023-10-03T11:19:19.279Z"),
    id: "<value>",
    amount: 171866,
    currency: "Guarani",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-01-31T12:03:59.290Z"),
    currentPeriodEnd: new Date("2024-01-30T10:01:58.731Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-05-25T02:31:19.753Z"),
    startedAt: new Date("2023-10-15T14:10:02.904Z"),
    endsAt: new Date("2024-09-04T13:28:38.697Z"),
    endedAt: new Date("2025-06-30T11:25:29.230Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
    priceId: "<value>",
  },
  items: [
    {
      createdAt: new Date("2023-11-04T01:43:26.070Z"),
      modifiedAt: new Date("2025-10-21T04:47:53.381Z"),
      id: "<value>",
      label: "<value>",
      amount: 549746,
      taxAmount: 232703,
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
| `id`                                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
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
| `customerId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `productId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`productPriceId`~~                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `subscriptionId`                                                                                                                                                            | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`userId`~~                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `product`                                                                                                                                                                   | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                                                                          | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| ~~`productPrice`~~                                                                                                                                                          | *components.CustomerOrderProductPrice*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |                                                                                                                                                                             |
| `subscription`                                                                                                                                                              | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                                                                                | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |                                                                                                                                                                             |
| `items`                                                                                                                                                                     | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                                          | Line items composing the order.                                                                                                                                             |                                                                                                                                                                             |