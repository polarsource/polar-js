# WebhookMemberCreatedPayload

Sent when a new member is created.

A member represents an individual within a customer (team).
This event is triggered when a member is added to a customer,
either programmatically via the API or when an owner is automatically
created for a new customer.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookMemberCreatedPayload } from "@polar-sh/sdk/models/components/webhookmembercreatedpayload.js";

let value: WebhookMemberCreatedPayload = {
  type: "member.created",
  timestamp: new Date("2026-10-13T07:14:27.870Z"),
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
| `type`                                                                                        | *"member.created"*                                                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | member.created                                                                                |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Member](../../models/components/member.md)                                        | :heavy_check_mark:                                                                            | A member of a customer.                                                                       |                                                                                               |