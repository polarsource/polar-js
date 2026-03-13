# PendingSubscriptionUpdate

Pending update to be applied to a subscription at the beginning of the next period.

## Example Usage

```typescript
import { PendingSubscriptionUpdate } from "@polar-sh/sdk/models/components/pendingsubscriptionupdate.js";

let value: PendingSubscriptionUpdate = {
  createdAt: new Date("2026-04-25T08:53:21.450Z"),
  modifiedAt: new Date("2024-09-04T15:39:10.846Z"),
  id: "<value>",
  appliesAt: new Date("2025-11-18T08:18:58.748Z"),
  productId: null,
  seats: 982684,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the object.                                                                          |
| `appliesAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | The date and time when the subscription update will be applied.                                |
| `productId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the new product to apply to the subscription. If `null`, the product won't be changed.   |
| `seats`                                                                                        | *number*                                                                                       | :heavy_check_mark:                                                                             | Number of seats to apply to the subscription. If `null`, the number of seats won't be changed. |