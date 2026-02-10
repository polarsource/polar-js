# WebhookCustomerSeatRevokedPayload

Sent when a customer seat is revoked.

This event is triggered when access to a seat is revoked, either manually by the organization or automatically when a subscription is canceled.

## Example Usage

```typescript
import { WebhookCustomerSeatRevokedPayload } from "@polar-sh/sdk/models/components/webhookcustomerseatrevokedpayload.js";

let value: WebhookCustomerSeatRevokedPayload = {
  type: "customer_seat.revoked",
  timestamp: new Date("2026-12-11T18:02:13.823Z"),
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
| `type`                                                                                        | *"customer_seat.revoked"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | customer_seat.revoked                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.CustomerSeat](../../models/components/customerseat.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |