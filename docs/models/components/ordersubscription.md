# OrderSubscription

## Example Usage

```typescript
import { OrderSubscription } from "@polar-sh/sdk/models/components";

let value: OrderSubscription = {
    createdAt: new Date("2023-12-02T13:10:20.148Z"),
    modifiedAt: new Date("2023-02-23T00:16:14.412Z"),
    id: "<value>",
    status: "trialing",
    currentPeriodStart: new Date("2022-01-25T01:59:40.254Z"),
    currentPeriodEnd: new Date("2023-04-19T05:01:06.012Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-02-15T17:29:42.348Z"),
    endedAt: new Date("2023-11-05T12:32:11.394Z"),
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