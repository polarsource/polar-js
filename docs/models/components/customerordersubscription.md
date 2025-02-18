# CustomerOrderSubscription

## Example Usage

```typescript
import { CustomerOrderSubscription } from "@polar-sh/sdk/models/components/customerordersubscription.js";

let value: CustomerOrderSubscription = {
  createdAt: new Date("2024-09-01T08:37:51.173Z"),
  modifiedAt: new Date("2025-08-19T11:27:16.475Z"),
  id: "<value>",
  amount: 688039,
  currency: "Belize Dollar",
  recurringInterval: "month",
  status: "past_due",
  currentPeriodStart: new Date("2024-08-09T23:30:03.418Z"),
  currentPeriodEnd: new Date("2025-03-15T18:56:40.991Z"),
  cancelAtPeriodEnd: false,
  canceledAt: new Date("2024-08-30T18:52:50.822Z"),
  startedAt: new Date("2025-12-18T10:40:41.400Z"),
  endsAt: new Date("2025-12-11T21:06:28.460Z"),
  endedAt: new Date("2023-10-26T06:52:39.499Z"),
  customerId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  discountId: "<value>",
  checkoutId: "<value>",
  customerCancellationReason: "unused",
  customerCancellationComment: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currency`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cancelAtPeriodEnd`                                                                                  | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `canceledAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endsAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `discountId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `checkoutId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customerCancellationReason`                                                                         | [components.CustomerCancellationReason](../../models/components/customercancellationreason.md)       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customerCancellationComment`                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |