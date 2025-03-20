# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2023-04-06T21:56:28.637Z"),
  modifiedAt: new Date("2025-08-21T18:01:23.530Z"),
  id: "<value>",
  amount: 723020,
  currency: "Dobra",
  recurringInterval: "year",
  status: "canceled",
  currentPeriodStart: new Date("2023-05-02T15:28:19.816Z"),
  currentPeriodEnd: new Date("2024-01-06T18:04:00.281Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2025-06-11T07:56:22.222Z"),
  startedAt: new Date("2025-03-15T18:23:55.861Z"),
  endsAt: new Date("2025-04-20T08:45:33.266Z"),
  endedAt: new Date("2025-04-12T12:48:01.288Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "customer_service",
  customerCancellationComment: "<value>",
  priceId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2025-06-24T09:02:21.407Z"),
    modifiedAt: new Date("2023-04-05T03:50:46.744Z"),
    id: "<value>",
    name: "<value>",
    description: "bah toward psst furthermore as because bell amidst pinion",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-12-02T23:06:12.612Z"),
        modifiedAt: new Date("2025-06-16T13:01:42.846Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 771809,
        maximumAmount: 546608,
        presetAmount: 555825,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-08-11T11:47:49.202Z"),
        modifiedAt: new Date("2023-01-17T15:41:24.386Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "doting gerbil huzzah dapper solemnly where versus machine",
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
        path: "/etc/mail",
        mimeType: "<value>",
        size: 161891,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-09-17T06:24:00.140Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-07-14T00:41:20.047Z"),
        sizeReadable: "<value>",
        publicUrl: "https://gorgeous-unique.com",
      },
    ],
    organization: {
      createdAt: new Date("2023-09-10T07:38:30.814Z"),
      modifiedAt: new Date("2023-11-24T22:52:55.481Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://bustling-clamp.org/",
      email: "Carol87@yahoo.com",
      website: "<value>",
      socials: [
        {
          platform: "other",
          url: "https://polite-distinction.com/",
        },
      ],
      detailsSubmittedAt: new Date("2023-11-14T19:12:16.082Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Haley Group",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 123817,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 610209,
      profileSettings: {},
    },
  },
  price: {
    createdAt: new Date("2023-04-17T00:52:37.415Z"),
    modifiedAt: new Date("2024-06-24T17:08:37.720Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 873606,
  },
  prices: [
    {
      createdAt: new Date("2025-10-04T18:53:15.917Z"),
      modifiedAt: new Date("2024-09-04T17:14:49.605Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 943250,
      maximumAmount: 88826,
      presetAmount: 778001,
    },
  ],
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Creation timestamp of the object.                                                                                             |
| `modifiedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Last modification timestamp of the object.                                                                                    |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the object.                                                                                                         |
| `amount`                                                                                                                      | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The amount of the subscription.                                                                                               |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The currency of the subscription.                                                                                             |
| `recurringInterval`                                                                                                           | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                          | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `status`                                                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `currentPeriodStart`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The start timestamp of the current billing period.                                                                            |
| `currentPeriodEnd`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The end timestamp of the current billing period.                                                                              |
| `cancelAtPeriodEnd`                                                                                                           | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether the subscription will be canceled at the end of the current period.                                                   |
| `canceledAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. |
| `startedAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription started.                                                                                  |
| `endsAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription will end.                                                                                 |
| `endedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription ended.                                                                                    |
| `customerId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed customer.                                                                                            |
| `productId`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed product.                                                                                             |
| `discountId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the applied discount, if any.                                                                                       |
| `checkoutId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customerCancellationReason`                                                                                                  | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `customerCancellationComment`                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`priceId`~~                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| ~~`userId`~~                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `product`                                                                                                                     | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| ~~`price`~~                                                                                                                   | *components.CustomerSubscriptionPrice*                                                                                        | :heavy_check_mark:                                                                                                            | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.       |
| `prices`                                                                                                                      | *components.CustomerSubscriptionPrices*[]                                                                                     | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |