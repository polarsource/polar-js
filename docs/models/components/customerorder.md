# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2023-12-03T11:11:57.521Z"),
  modifiedAt: new Date("2024-04-17T22:12:43.442Z"),
  id: "<value>",
  amount: 708746,
  taxAmount: 145482,
  currency: "Cayman Islands Dollar",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-05-18T23:12:46.422Z"),
    modifiedAt: new Date("2023-09-30T12:05:03.388Z"),
    id: "<value>",
    name: "<value>",
    description:
      "sermon though anti ouch microchip gadzooks someplace pneumonia if",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-01-20T02:39:15.832Z"),
        modifiedAt: new Date("2025-11-07T04:52:23.286Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 503910,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-11-01T01:06:17.820Z"),
        modifiedAt: new Date("2024-02-15T09:23:09.263Z"),
        id: "<value>",
        type: "custom",
        description: "hmph inside trust at tight how opposite even boo",
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
        path: "/usr/include",
        mimeType: "<value>",
        size: 23668,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-02-05T00:56:02.970Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-11-10T13:57:16.361Z"),
        sizeReadable: "<value>",
        publicUrl: "https://big-ecliptic.com/",
      },
    ],
    organization: {
      createdAt: new Date("2024-07-03T00:38:08.268Z"),
      modifiedAt: new Date("2023-07-18T03:51:13.957Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://informal-government.com",
      bio: "<value>",
      company: "Casper Inc",
      blog: "<value>",
      location: "<value>",
      email: "Ayana.Brown28@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 223296,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 669865,
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
    createdAt: new Date("2025-03-12T05:09:38.589Z"),
    modifiedAt: new Date("2023-10-23T00:05:45.383Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 870461,
    recurringInterval: "month",
  },
  subscription: {
    createdAt: new Date("2023-02-26T04:08:50.752Z"),
    modifiedAt: new Date("2024-05-30T11:53:32.749Z"),
    id: "<value>",
    amount: 299905,
    currency: "Won",
    recurringInterval: "month",
    status: "unpaid",
    currentPeriodStart: new Date("2025-12-04T02:11:47.695Z"),
    currentPeriodEnd: new Date("2024-11-07T19:38:45.779Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-09-20T14:09:26.370Z"),
    startedAt: new Date("2023-12-09T23:28:03.526Z"),
    endsAt: new Date("2025-05-13T12:44:04.791Z"),
    endedAt: new Date("2025-04-18T11:56:30.460Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
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
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |