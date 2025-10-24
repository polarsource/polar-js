# WebhookCustomerSeatAssignedPayload

Sent when a new customer seat is assigned.

This event is triggered when a seat is assigned to a customer by the organization.
The customer will receive an invitation email to claim the seat.

## Example Usage

```typescript
import { WebhookCustomerSeatAssignedPayload } from "@polar-sh/sdk/models/components/webhookcustomerseatassignedpayload.js";

let value: WebhookCustomerSeatAssignedPayload = {
  type: "customer_seat.assigned",
  timestamp: new Date("2023-06-01T07:20:57.034Z"),
  data: {
    createdAt: new Date("2024-08-30T15:13:29.736Z"),
    modifiedAt: new Date("2023-10-11T18:38:33.972Z"),
    id: "c913995a-f8f6-4f86-baf7-95adb32a1f73",
    status: "claimed",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | customer_seat.assigned                                                                        |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.CustomerSeat](../../models/components/customerseat.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |