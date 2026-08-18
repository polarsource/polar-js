# CustomerSeat

## Example Usage

```typescript
import { CustomerSeat } from "@polar-sh/sdk/models/components/customerseat.js";

let value: CustomerSeat = {
  createdAt: new Date("2025-02-10T15:22:33.873Z"),
  modifiedAt: new Date("2026-10-09T03:50:35.674Z"),
  id: "1f465dbd-351b-4777-90e1-11283ba41d87",
  subscriptionId: "4cf58282-69d1-44c6-b6f9-4b33e2c4fc9b",
  orderId: "24f0b043-6aa6-4dcd-bcac-9017b0f9a669",
  status: "pending",
  customerId: "9ad66dec-1f70-4dd6-aff8-f89b917042f6",
  memberId: "259caad7-8ef4-4589-b00f-1f29959a711e",
  member: {
    id: "<value>",
    createdAt: new Date("2024-05-20T19:39:16.494Z"),
    modifiedAt: new Date("2026-10-19T07:28:11.474Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  email: "Damian_Shields0@hotmail.com",
  customerEmail: null,
  invitationTokenExpiresAt: new Date("2025-05-28T14:09:32.270Z"),
  claimedAt: new Date("2024-03-09T23:06:05.390Z"),
  revokedAt: null,
  seatMetadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | Creation timestamp of the object.                                                                                                           |
| `modifiedAt`                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | Last modification timestamp of the object.                                                                                                  |
| `id`                                                                                                                                        | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The seat ID                                                                                                                                 |
| `subscriptionId`                                                                                                                            | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The subscription ID (for recurring seats)                                                                                                   |
| `orderId`                                                                                                                                   | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The order ID (for one-time purchase seats)                                                                                                  |
| `status`                                                                                                                                    | [components.SeatStatus](../../models/components/seatstatus.md)                                                                              | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `customerId`                                                                                                                                | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The customer ID. When member_model_enabled is true, this is the billing customer (purchaser). When false, this is the seat member customer. |
| `memberId`                                                                                                                                  | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The member ID of the seat occupant                                                                                                          |
| `member`                                                                                                                                    | [components.Member](../../models/components/member.md)                                                                                      | :heavy_check_mark:                                                                                                                          | The member associated with this seat                                                                                                        |
| `email`                                                                                                                                     | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Email of the seat member (set when member_model_enabled is true)                                                                            |
| `customerEmail`                                                                                                                             | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | The assigned customer email                                                                                                                 |
| `invitationTokenExpiresAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | When the invitation token expires                                                                                                           |
| `claimedAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | When the seat was claimed                                                                                                                   |
| `revokedAt`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                               | :heavy_check_mark:                                                                                                                          | When the seat was revoked                                                                                                                   |
| `seatMetadata`                                                                                                                              | Record<string, *any*>                                                                                                                       | :heavy_check_mark:                                                                                                                          | Additional metadata for the seat                                                                                                            |