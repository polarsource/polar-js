# WebhookCustomerDeletedPayload

Sent when a customer is deleted.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCustomerDeletedPayload } from "@polar-sh/sdk/models/components/webhookcustomerdeletedpayload.js";

let value: WebhookCustomerDeletedPayload = {
  type: "customer.deleted",
  timestamp: new Date("2025-11-08T15:29:39.211Z"),
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-04-18T21:06:42.043Z"),
    modifiedAt: new Date("2025-06-13T03:52:25.976Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-03-28T00:56:21.995Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"customer.deleted"*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           | customer.deleted                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.Customer*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |