# WebhookCustomerSeatAssignedPayload

Sent when a new customer seat is assigned.

This event is triggered when a seat is assigned to a customer by the organization.
The customer will receive an invitation email to claim the seat.

## Example Usage

```typescript
import { WebhookCustomerSeatAssignedPayload } from "@polar-sh/sdk/models/components/webhookcustomerseatassignedpayload.js";

let value: WebhookCustomerSeatAssignedPayload = {
  type: "customer_seat.assigned",
  timestamp: new Date("2024-05-31T07:20:57.034Z"),
  data: {
    createdAt: new Date("2025-08-30T15:13:29.736Z"),
    modifiedAt: new Date("2024-10-10T18:38:33.972Z"),
    id: "c913995a-f8f6-4f86-baf7-95adb32a1f73",
    subscriptionId: "c33cf100-4d2c-44b5-acf3-f259628bf160",
    orderId: "76e7aba5-22c6-4790-9ab8-f0daba8e2ff3",
    status: "claimed",
    customerId: "7c491782-eef2-4bc7-9860-2e2a5cf672c9",
    memberId: "13d49f6b-2b17-4425-937f-3be9de0c078b",
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
    email: null,
    customerEmail: "<value>",
    invitationTokenExpiresAt: new Date("2026-05-18T21:10:57.895Z"),
    claimedAt: null,
    revokedAt: new Date("2026-06-12T22:02:58.268Z"),
    seatMetadata: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"customer_seat.assigned"*                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           | customer_seat.assigned                                                                        |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.CustomerSeat](../../models/components/customerseat.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |