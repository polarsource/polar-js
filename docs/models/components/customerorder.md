# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2025-07-07T19:41:40.406Z"),
  modifiedAt: new Date("2025-10-11T04:07:28.860Z"),
  id: "<value>",
  amount: 193960,
  taxAmount: 809346,
  currency: "Jordanian Dinar",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2024-12-15T13:27:34.684Z"),
    modifiedAt: new Date("2023-12-12T20:01:19.784Z"),
    id: "<value>",
    name: "<value>",
    description: "whereas hence ack oval",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-03-25T18:54:20.052Z"),
        modifiedAt: new Date("2023-09-12T06:10:57.363Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 156726,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-06-24T19:09:59.837Z"),
        modifiedAt: new Date("2023-07-15T09:20:19.722Z"),
        id: "<value>",
        type: "github_repository",
        description: "strictly modulo frequent trash joyful lest",
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
        path: "/var/spool",
        mimeType: "<value>",
        size: 63984,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-05T03:55:27.330Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-10-23T16:59:04.416Z"),
        sizeReadable: "<value>",
        publicUrl: "https://nautical-account.biz/",
      },
    ],
    organization: {
      createdAt: new Date("2024-05-10T04:16:32.094Z"),
      modifiedAt: new Date("2024-01-15T09:37:09.079Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://foolhardy-fedora.org",
      bio: "<value>",
      company: "Muller - Hyatt",
      blog: "<value>",
      location: "<value>",
      email: "Philip_Jones-Metz@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 284190,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 251859,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
  },
  productPrice: {
    createdAt: new Date("2024-06-20T02:08:41.206Z"),
    modifiedAt: new Date("2024-06-22T22:06:31.167Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 152042,
  },
  subscription: {
    createdAt: new Date("2025-12-19T10:05:41.682Z"),
    modifiedAt: new Date("2023-12-11T18:45:08.569Z"),
    id: "<value>",
    amount: 826020,
    currency: "Congolese Franc",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2025-05-21T09:32:41.715Z"),
    currentPeriodEnd: new Date("2025-12-31T01:26:55.915Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-01-18T23:29:36.422Z"),
    startedAt: new Date("2024-07-19T06:57:07.830Z"),
    endsAt: new Date("2025-02-04T17:41:38.707Z"),
    endedAt: new Date("2025-04-11T05:49:26.732Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPriceId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPrice`                                                                                                          | *components.CustomerOrderProductPrice*                                                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |