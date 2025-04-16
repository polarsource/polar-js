# WebhookCustomerCreatedPayload

Sent when a new customer is created.

A customer can be created:

* After a successful checkout.
* Programmatically via the API.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCustomerCreatedPayload } from "@polar-sh/sdk/models/components/webhookcustomercreatedpayload.js";

let value: WebhookCustomerCreatedPayload = {
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-07-14T00:49:20.816Z"),
    modifiedAt: new Date("2025-01-09T10:52:27.442Z"),
    metadata: {
      "key": 234015,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-01-10T21:34:54.851Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | customer.created                                           |
| `data`                                                     | [components.Customer](../../models/components/customer.md) | :heavy_check_mark:                                         | A customer in an organization.                             |                                                            |