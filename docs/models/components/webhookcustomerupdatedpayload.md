# WebhookCustomerUpdatedPayload

Sent when a customer is updated.

This event is fired when the customer details are updated.

If you want to be notified when a customer subscription or benefit state changes, you should listen to the `customer_state_changed` event.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCustomerUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcustomerupdatedpayload.js";

let value: WebhookCustomerUpdatedPayload = {
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-11T21:34:00.499Z"),
    modifiedAt: new Date("2025-09-05T09:46:09.295Z"),
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
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-04-22T08:13:17.912Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | customer.updated                                           |
| `data`                                                     | [components.Customer](../../models/components/customer.md) | :heavy_check_mark:                                         | A customer in an organization.                             |                                                            |