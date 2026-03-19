# WebhookMemberDeletedPayload

Sent when a member is deleted.

This event is triggered when a member is removed from a customer.
Any active seats assigned to the member will be automatically revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookMemberDeletedPayload } from "@polar-sh/sdk/models/components/webhookmemberdeletedpayload.js";

let value: WebhookMemberDeletedPayload = {
  type: "member.deleted",
  timestamp: new Date("2024-10-02T05:48:22.944Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2026-09-16T23:48:20.778Z"),
    modifiedAt: new Date("2025-06-24T13:20:05.682Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "owner",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"member.deleted"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | member.deleted                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Member](../../models/components/member.md)                                        | :heavy_check_mark:                                                                            | A member of a customer.                                                                       |                                                                                               |