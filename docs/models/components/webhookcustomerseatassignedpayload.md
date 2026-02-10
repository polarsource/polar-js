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
    status: "claimed",
    member: {
      id: "<value>",
      createdAt: new Date("2026-04-15T16:04:23.824Z"),
      modifiedAt: new Date("2025-04-16T17:12:33.507Z"),
      customerId: "<value>",
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
      role: "member",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"customer_seat.assigned"*                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           | customer_seat.assigned                                                                        |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.CustomerSeat](../../models/components/customerseat.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |