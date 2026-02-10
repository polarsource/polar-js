# WebhookMemberUpdatedPayload

Sent when a member is updated.

This event is triggered when member details are updated,
such as their name or role within the customer.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookMemberUpdatedPayload } from "@polar-sh/sdk/models/components/webhookmemberupdatedpayload.js";

let value: WebhookMemberUpdatedPayload = {
  type: "member.updated",
  timestamp: new Date("2024-05-19T14:42:29.553Z"),
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
| `type`                                                                                        | *"member.updated"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | member.updated                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Member](../../models/components/member.md)                                        | :heavy_check_mark:                                                                            | A member of a customer.                                                                       |                                                                                               |