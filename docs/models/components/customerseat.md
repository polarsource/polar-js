# CustomerSeat

## Example Usage

```typescript
import { CustomerSeat } from "@polar-sh/sdk/models/components/customerseat.js";

let value: CustomerSeat = {
  createdAt: new Date("2024-02-11T15:22:33.873Z"),
  modifiedAt: new Date("2025-10-09T03:50:35.674Z"),
  id: "1f465dbd-351b-4777-90e1-11283ba41d87",
  status: "claimed",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The seat ID                                                                                   |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The subscription ID (for recurring seats)                                                     |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The order ID (for one-time purchase seats)                                                    |
| `status`                                                                                      | [components.SeatStatus](../../models/components/seatstatus.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The assigned customer ID                                                                      |
| `customerEmail`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The assigned customer email                                                                   |
| `invitationTokenExpiresAt`                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the invitation token expires                                                             |
| `claimedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the seat was claimed                                                                     |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When the seat was revoked                                                                     |
| `seatMetadata`                                                                                | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Additional metadata for the seat                                                              |