# WebhookCustomerDeletedPayload

Sent when a customer is deleted.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCustomerDeletedPayload } from "@polar-sh/sdk/models/components/webhookcustomerdeletedpayload.js";

let value: WebhookCustomerDeletedPayload = {
  type: "customer.deleted",
  timestamp: new Date("2024-11-08T15:29:39.211Z"),
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-01-09T10:52:27.442Z"),
    modifiedAt: new Date("2023-09-14T11:32:42.486Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-09-19T01:01:52.549Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | customer.deleted                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | A customer in an organization.                                                                |                                                                                               |