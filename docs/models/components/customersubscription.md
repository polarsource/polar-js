# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2024-03-12T09:34:16.987Z"),
  modifiedAt: new Date("2024-07-14T01:14:05.609Z"),
  id: "<value>",
  amount: 63427,
  currency: "Serbian Dinar",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2025-08-12T18:07:32.885Z"),
  currentPeriodEnd: new Date("2024-01-14T14:36:00.166Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2024-02-13T05:07:31.431Z"),
  startedAt: new Date("2024-12-24T15:57:34.849Z"),
  endsAt: new Date("2024-05-17T10:58:40.372Z"),
  endedAt: new Date("2024-08-30T20:29:51.699Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "other",
  customerCancellationComment: "<value>",
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
        type: "discord",
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
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
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
  price: {
    createdAt: new Date("2025-03-10T22:11:06.316Z"),
    modifiedAt: new Date("2025-09-26T16:56:57.899Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 902360,
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the object.                                                                                                   |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The amount of the subscription.                                                                                         |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The currency of the subscription.                                                                                       |
| `recurringInterval`                                                                                                     | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `status`                                                                                                                | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodStart`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currentPeriodEnd`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `cancelAtPeriodEnd`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `canceledAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `startedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endsAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `endedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `priceId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `discountId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the applied discount, if any.                                                                                 |
| `checkoutId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationReason`                                                                                            | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerCancellationComment`                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `price`                                                                                                                 | *components.Price*                                                                                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |