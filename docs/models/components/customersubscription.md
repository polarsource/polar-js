# CustomerSubscription

## Example Usage

```typescript
import { CustomerSubscription } from "@polar-sh/sdk/models/components/customersubscription.js";

let value: CustomerSubscription = {
  createdAt: new Date("2024-12-27T19:31:25.752Z"),
  modifiedAt: new Date("2024-07-08T00:41:48.344Z"),
  id: "<value>",
  amount: 886202,
  currency: "Bahamian Dollar",
  recurringInterval: "month",
  status: "active",
  currentPeriodStart: new Date("2023-03-10T15:25:48.651Z"),
  currentPeriodEnd: new Date("2025-09-11T13:49:33.195Z"),
  cancelAtPeriodEnd: true,
  canceledAt: new Date("2025-03-15T17:36:38.777Z"),
  startedAt: new Date("2023-09-02T14:51:23.839Z"),
  endsAt: new Date("2023-04-03T10:51:32.868Z"),
  endedAt: new Date("2025-08-17T12:53:53.746Z"),
  customerId: "<value>",
  productId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "too_expensive",
  customerCancellationComment: "<value>",
  product: {
    createdAt: new Date("2023-10-20T22:40:18.625Z"),
    modifiedAt: null,
    id: "<value>",
    name: "<value>",
    description:
      "gee sniff after beneath tomatillo cautiously reassuringly tangible exotic deliberately",
    recurringInterval: "month",
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-08-22T09:43:58.793Z"),
        modifiedAt: new Date("2023-02-16T00:22:02.887Z"),
        type: "custom",
        description: "inside any judgementally grown consequently naturally",
        selectable: false,
        deletable: true,
        organizationId: "<value>",
      },
    ],
    medias: [],
    organization: {
      createdAt: new Date("2025-01-01T18:22:02.718Z"),
      modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: null,
      email: "Hannah_Price@gmail.com",
      website: "<value>",
      socials: [
        {
          platform: "youtube",
          url: "https://expert-elevation.org",
        },
      ],
      detailsSubmittedAt: new Date("2025-12-07T19:21:48.818Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      notificationSettings: {
        newOrder: true,
        newSubscription: true,
      },
    },
  },
  prices: [],
  meters: [
    {
      createdAt: new Date("2023-09-30T02:03:52.048Z"),
      modifiedAt: new Date("2025-02-16T18:07:59.288Z"),
      id: "<value>",
      consumedUnits: 25,
      creditedUnits: 100,
      amount: 0,
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      meter: {
        createdAt: new Date("2025-10-13T05:14:46.856Z"),
        modifiedAt: null,
        id: "<value>",
        name: "<value>",
      },
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
| `product`                                                                                                                     | [components.CustomerSubscriptionProduct](../../models/components/customersubscriptionproduct.md)                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `prices`                                                                                                                      | *components.CustomerSubscriptionPrices*[]                                                                                     | :heavy_check_mark:                                                                                                            | List of enabled prices for the subscription.                                                                                  |
| `meters`                                                                                                                      | [components.CustomerSubscriptionMeter](../../models/components/customersubscriptionmeter.md)[]                                | :heavy_check_mark:                                                                                                            | List of meters associated with the subscription.                                                                              |