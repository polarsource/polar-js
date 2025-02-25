# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2024-02-13T05:07:31.431Z"),
  modifiedAt: new Date("2024-12-24T15:57:34.849Z"),
  id: "<value>",
  amount: 458447,
  taxAmount: 554611,
  currency: "Rand",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-04-10T08:39:34.010Z"),
    modifiedAt: new Date("2024-10-13T21:14:28.454Z"),
    id: "<value>",
    name: "<value>",
    description:
      "intellect blah certification about freely justly chilly where",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-06-17T22:21:21.794Z"),
        modifiedAt: new Date("2023-07-08T03:11:19.331Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 157489,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-12-10T05:58:02.311Z"),
        modifiedAt: new Date("2024-11-21T04:51:59.437Z"),
        id: "<value>",
        type: "ads",
        description: "drat via and or request",
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
        size: 107406,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-02-17T11:36:04.308Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-06-27T16:57:19.473Z"),
        sizeReadable: "<value>",
        publicUrl: "https://gleaming-countess.com/",
      },
    ],
    organization: {
      createdAt: new Date("2025-08-10T01:54:29.277Z"),
      modifiedAt: new Date("2024-08-12T05:31:21.644Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://educated-cassava.com",
      bio: "<value>",
      company: "Gerlach, Mosciski and Hermann",
      blog: "<value>",
      location: "<value>",
      email: "Rudy31@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 789833,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 360744,
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
    createdAt: new Date("2025-03-10T22:11:06.316Z"),
    modifiedAt: new Date("2025-09-26T16:56:57.899Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 902360,
  },
  subscription: {
    createdAt: new Date("2025-12-24T05:36:28.539Z"),
    modifiedAt: new Date("2024-08-21T02:59:30.434Z"),
    id: "<value>",
    amount: 252120,
    currency: "New Zealand Dollar",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2023-03-03T01:21:59.910Z"),
    currentPeriodEnd: new Date("2023-07-26T18:06:10.816Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-09-19T11:42:12.411Z"),
    startedAt: new Date("2023-09-26T13:03:20.700Z"),
    endsAt: new Date("2025-10-26T06:16:40.684Z"),
    endedAt: new Date("2025-01-02T03:27:45.938Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
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