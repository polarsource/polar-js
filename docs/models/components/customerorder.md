# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2024-05-14T14:21:07.817Z"),
  modifiedAt: new Date("2025-01-18T02:10:11.377Z"),
  id: "<value>",
  subtotalAmount: 677807,
  discountAmount: 296454,
  netAmount: 163285,
  amount: 568794,
  taxAmount: 36075,
  totalAmount: 822895,
  refundedAmount: 760627,
  refundedTaxAmount: 708833,
  currency: "Vatu",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-11-15T22:58:40.556Z"),
    modifiedAt: new Date("2024-05-27T01:39:32.870Z"),
    id: "<value>",
    name: "<value>",
    description: "airline psst forecast lest sell now even rundown",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-08-28T00:24:16.627Z"),
        modifiedAt: new Date("2023-01-24T23:25:23.825Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 349556,
        maximumAmount: 758592,
        presetAmount: 130229,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-01-06T17:59:23.766Z"),
        modifiedAt: new Date("2023-02-17T03:45:50.562Z"),
        id: "<value>",
        type: "github_repository",
        description: "for inasmuch palate",
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
        path: "/Network",
        mimeType: "<value>",
        size: 952725,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-12-01T02:54:47.752Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-12-25T01:20:14.892Z"),
        sizeReadable: "<value>",
        publicUrl: "https://menacing-coliseum.name",
      },
    ],
    organization: {
      createdAt: new Date("2023-06-15T17:49:51.514Z"),
      modifiedAt: new Date("2024-03-20T15:39:41.594Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://majestic-diagram.com/",
      email: "Ivy99@yahoo.com",
      website: "<value>",
      socials: [
        {
          platform: "facebook",
          url: "https://carefree-swanling.name",
        },
      ],
      detailsSubmittedAt: new Date("2023-03-31T10:39:08.699Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
      bio: "<value>",
      company: "Muller LLC",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 659114,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 643689,
      profileSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2025-11-17T20:17:43.057Z"),
    modifiedAt: new Date("2024-04-16T13:35:33.229Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 940297,
  },
  subscription: {
    createdAt: new Date("2025-10-04T02:51:01.618Z"),
    modifiedAt: new Date("2025-06-15T05:16:58.669Z"),
    id: "<value>",
    amount: 223258,
    currency: "Pound Sterling",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2023-09-27T13:10:46.158Z"),
    currentPeriodEnd: new Date("2025-08-10T13:22:12.445Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-09-17T22:21:07.335Z"),
    startedAt: new Date("2024-11-26T20:48:32.076Z"),
    endsAt: new Date("2025-12-15T03:43:32.459Z"),
    endedAt: new Date("2024-08-27T11:33:48.812Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    priceId: "<value>",
  },
  items: [
    {
      createdAt: new Date("2023-11-29T07:57:21.492Z"),
      modifiedAt: new Date("2025-11-09T11:10:59.812Z"),
      id: "<value>",
      label: "<value>",
      amount: 362146,
      taxAmount: 99549,
      proration: false,
      productPriceId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_check_mark:                                                                                                                                                          | Creation timestamp of the object.                                                                                                                                           |
| `modifiedAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                               | :heavy_check_mark:                                                                                                                                                          | Last modification timestamp of the object.                                                                                                                                  |
| `id`                                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `subtotalAmount`                                                                                                                                                            | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount in cents, before discounts and taxes.                                                                                                                                |
| `discountAmount`                                                                                                                                                            | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Discount amount in cents.                                                                                                                                                   |
| `netAmount`                                                                                                                                                                 | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount in cents, after discounts but before taxes.                                                                                                                          |
| ~~`amount`~~                                                                                                                                                                | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Amount in cents, after discounts but before taxes. |
| `taxAmount`                                                                                                                                                                 | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Sales tax amount in cents.                                                                                                                                                  |
| `totalAmount`                                                                                                                                                               | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount in cents, after discounts and taxes.                                                                                                                                 |
| `refundedAmount`                                                                                                                                                            | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Amount refunded in cents.                                                                                                                                                   |
| `refundedTaxAmount`                                                                                                                                                         | *number*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | Sales tax refunded in cents.                                                                                                                                                |
| `currency`                                                                                                                                                                  | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `customerId`                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `productId`                                                                                                                                                                 | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| ~~`productPriceId`~~                                                                                                                                                        | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |
| `subscriptionId`                                                                                                                                                            | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| ~~`userId`~~                                                                                                                                                                | *string*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |
| `product`                                                                                                                                                                   | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                                                                          | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| ~~`productPrice`~~                                                                                                                                                          | *components.CustomerOrderProductPrice*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                          | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                     |
| `subscription`                                                                                                                                                              | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                                                                                | :heavy_check_mark:                                                                                                                                                          | N/A                                                                                                                                                                         |
| `items`                                                                                                                                                                     | [components.OrderItemSchema](../../models/components/orderitemschema.md)[]                                                                                                  | :heavy_check_mark:                                                                                                                                                          | Line items composing the order.                                                                                                                                             |