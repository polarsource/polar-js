# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2025-07-13T07:42:24.687Z"),
  modifiedAt: new Date("2023-02-15T18:15:28.299Z"),
  id: "<value>",
  status: "partially_refunded",
  paid: true,
  subtotalAmount: 615884,
  discountAmount: 745815,
  netAmount: 977455,
  amount: 220474,
  taxAmount: 361381,
  totalAmount: 552589,
  refundedAmount: 336087,
  refundedTaxAmount: 864625,
  currency: "Denar",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-01-06T18:10:52.734Z"),
    modifiedAt: new Date("2025-09-25T11:00:47.759Z"),
    id: "<value>",
    name: "<value>",
    description: "tired carelessly unto following minus considering yet",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-11-03T09:06:30.437Z"),
        modifiedAt: new Date("2023-10-15T12:25:54.318Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 193819,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-03T18:13:52.827Z"),
        modifiedAt: new Date("2025-12-16T12:03:21.969Z"),
        id: "<value>",
        type: "license_keys",
        description:
          "unless respray connect whenever supposing including reluctantly loosely",
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
        path: "/root",
        mimeType: "<value>",
        size: 240941,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-30T14:06:00.507Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-10-11T05:12:55.893Z"),
        sizeReadable: "<value>",
        publicUrl: "https://nervous-volleyball.info/",
      },
    ],
    organization: {
      createdAt: new Date("2025-09-19T00:17:31.188Z"),
      modifiedAt: new Date("2023-02-11T15:02:00.343Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://acceptable-dream.org",
      email: "Jalon.Ritchie51@yahoo.com",
      website: "<value>",
      socials: [
        {
          platform: "tiktok",
          url: "https://winged-sundae.info",
        },
      ],
      detailsSubmittedAt: new Date("2024-02-13T05:07:31.431Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Luettgen and Sons",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 90657,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 594786,
      profileSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2024-10-04T08:38:09.184Z"),
    modifiedAt: new Date("2025-04-29T08:16:33.102Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 130265,
  },
  subscription: {
    createdAt: new Date("2024-06-03T10:10:43.292Z"),
    modifiedAt: new Date("2025-03-09T20:13:31.276Z"),
    id: "<value>",
    amount: 440191,
    currency: "Libyan Dinar",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2023-12-19T08:16:20.843Z"),
    currentPeriodEnd: new Date("2023-04-01T20:57:17.921Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-04-13T07:19:44.653Z"),
    startedAt: new Date("2024-06-07T10:31:05.437Z"),
    endsAt: new Date("2024-03-22T05:58:45.443Z"),
    endedAt: new Date("2025-04-13T23:28:29.053Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    priceId: "<value>",
  },
  items: [
    {
      createdAt: new Date("2024-03-28T22:44:50.176Z"),
      modifiedAt: new Date("2023-05-27T18:03:05.713Z"),
      id: "<value>",
      label: "<value>",
      amount: 482597,
      taxAmount: 192437,
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