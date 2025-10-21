# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2024-12-27T19:31:25.752Z"),
  modifiedAt: new Date("2024-07-08T00:41:48.344Z"),
  id: "<value>",
  amount: 10000,
  currency: "usd",
  recurringInterval: "year",
  status: "incomplete",
  currentPeriodStart: new Date("2024-05-18T03:51:27.815Z"),
  currentPeriodEnd: new Date("2023-03-10T15:25:48.651Z"),
  trialStart: new Date("2025-09-11T13:49:33.195Z"),
  trialEnd: null,
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2023-05-05T19:36:14.043Z"),
  startedAt: new Date("2024-11-02T22:59:24.322Z"),
  endsAt: null,
  endedAt: new Date("2025-08-17T12:53:53.746Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "too_expensive",
  customerCancellationComment: "<value>",
  product: {
    id: "<value>",
    createdAt: new Date("2023-10-20T22:40:18.625Z"),
    modifiedAt: null,
    trialInterval: "year",
    trialIntervalCount: 406310,
    name: "<value>",
    description: "unabashedly regarding lest",
    recurringInterval: "day",
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    prices: [],
    benefits: [],
    medias: [],
    organization: {
      createdAt: new Date("2024-03-27T03:55:24.068Z"),
      modifiedAt: new Date("2025-02-03T21:10:18.351Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://huge-lid.net/",
      email: "Dalton_Anderson49@hotmail.com",
      website: "<value>",
      socials: [],
      status: "under_review",
      detailsSubmittedAt: new Date("2024-02-22T02:01:31.430Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: true,
        allowCustomerUpdates: true,
        prorationBehavior: "invoice",
      },
      notificationSettings: {
        newOrder: false,
        newSubscription: true,
      },
      customerEmailSettings: {
        orderConfirmation: true,
        subscriptionCancellation: true,
        subscriptionConfirmation: true,
        subscriptionCycled: false,
        subscriptionPastDue: true,
        subscriptionRevoked: false,
        subscriptionUncanceled: false,
        subscriptionUpdated: false,
      },
    },
  },
  prices: [],
  meters: [],
  isPolarManaged: false,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Creation timestamp of the object.                                                                                             |                                                                                                                               |
| `modifiedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Last modification timestamp of the object.                                                                                    |                                                                                                                               |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the object.                                                                                                         |                                                                                                                               |
| `amount`                                                                                                                      | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The amount of the subscription.                                                                                               | 10000                                                                                                                         |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The currency of the subscription.                                                                                             | usd                                                                                                                           |
| `recurringInterval`                                                                                                           | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                          | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `status`                                                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `currentPeriodStart`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The start timestamp of the current billing period.                                                                            |                                                                                                                               |
| `currentPeriodEnd`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The end timestamp of the current billing period.                                                                              |                                                                                                                               |
| `trialStart`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The start timestamp of the trial period, if any.                                                                              |                                                                                                                               |
| `trialEnd`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The end timestamp of the trial period, if any.                                                                                |                                                                                                                               |
| `cancelAtPeriodEnd`                                                                                                           | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether the subscription will be canceled at the end of the current period.                                                   |                                                                                                                               |
| `canceledAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription was canceled. The subscription might still be active if `cancel_at_period_end` is `true`. |                                                                                                                               |
| `startedAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription started.                                                                                  |                                                                                                                               |
| `endsAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription will end.                                                                                 |                                                                                                                               |
| `endedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | The timestamp when the subscription ended.                                                                                    |                                                                                                                               |
| `customerId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed customer.                                                                                            |                                                                                                                               |
| `productId`                                                                                                                   | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the subscribed product.                                                                                             |                                                                                                                               |
| `discountId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The ID of the applied discount, if any.                                                                                       |                                                                                                                               |
| `checkoutId`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `customerCancellationReason`                                                                                                  | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)                                | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `customerCancellationComment`                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `product`                                                                                                                     | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |
| `prices`                                                                                                                      | *components.CustomerSubscriptionPrices*[]                                                                                     | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |                                                                                                                               |
| `meters`                                                                                                                      | [components.CustomerSubscriptionMeter](../../models/components/customersubscriptionmeter.md)[]                                | :heavy_check_mark:                                                                                                            | List of meters associated with the subscription.                                                                              |                                                                                                                               |
| `isPolarManaged`                                                                                                              | *boolean*                                                                                                                     | :heavy_check_mark:                                                                                                            | Whether the subscription is managed by Polar.                                                                                 |                                                                                                                               |