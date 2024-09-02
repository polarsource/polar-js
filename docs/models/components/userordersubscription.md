# UserOrderSubscription

## Example Usage

```typescript
import { UserOrderSubscription } from "@polar-sh/sdk/models/components";

let value: UserOrderSubscription = {
    createdAt: new Date("2022-06-08T18:04:31.965Z"),
    modifiedAt: new Date("2022-06-30T19:04:41.355Z"),
    id: "<value>",
    status: "active",
    currentPeriodStart: new Date("2022-05-17T19:36:31.801Z"),
    currentPeriodEnd: new Date("2023-01-25T18:02:14.576Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-03-02T09:36:34.922Z"),
    endedAt: new Date("2024-10-27T17:07:19.393Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `status`                                                                                      | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodStart`                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currentPeriodEnd`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cancelAtPeriodEnd`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |