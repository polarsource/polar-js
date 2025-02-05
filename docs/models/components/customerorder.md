# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2023-04-08T08:19:25.840Z"),
  modifiedAt: new Date("2024-04-12T05:52:48.696Z"),
  id: "<value>",
  amount: 750956,
  taxAmount: 340070,
  currency: "Kina",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-09-01T19:47:14.357Z"),
    modifiedAt: new Date("2025-05-19T07:19:58.851Z"),
    id: "<value>",
    name: "<value>",
    description: "than indeed hassle",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-03-25T22:52:07.722Z"),
        modifiedAt: new Date("2024-03-31T06:40:04.841Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 151092,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-11-29T23:56:50.889Z"),
        modifiedAt: new Date("2024-06-04T01:21:54.034Z"),
        id: "<value>",
        type: "discord",
        description: "collectivization geez discrete gym aha",
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
        path: "/Library",
        mimeType: "<value>",
        size: 132707,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-09-17T16:51:01.606Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-10-06T18:59:00.388Z"),
        sizeReadable: "<value>",
        publicUrl: "https://radiant-strait.net",
      },
    ],
    organization: {
      createdAt: new Date("2024-02-17T00:44:13.481Z"),
      modifiedAt: new Date("2025-05-30T10:39:49.151Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://trusting-language.name/",
      bio: "<value>",
      company: "Parker, Blick and Fritsch",
      blog: "<value>",
      location: "<value>",
      email: "Augusta_Gislason@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 426373,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 73292,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  },
  productPrice: {
    createdAt: new Date("2025-08-15T09:01:20.024Z"),
    modifiedAt: new Date("2025-10-16T21:16:15.870Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
  },
  subscription: {
    createdAt: new Date("2023-10-24T17:16:51.911Z"),
    modifiedAt: new Date("2023-06-14T13:59:56.674Z"),
    id: "<value>",
    amount: 638493,
    currency: "Cuban Peso",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-03-13T09:32:54.501Z"),
    currentPeriodEnd: new Date("2024-05-07T00:30:07.587Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-11-28T13:10:32.383Z"),
    startedAt: new Date("2023-04-14T04:07:05.692Z"),
    endsAt: new Date("2024-08-25T11:47:00.419Z"),
    endedAt: new Date("2024-04-23T18:30:17.394Z"),
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