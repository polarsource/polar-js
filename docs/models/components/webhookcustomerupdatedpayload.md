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
    createdAt: new Date("2023-04-17T17:52:21.274Z"),
    modifiedAt: new Date("2024-12-18T07:39:50.624Z"),
    metadata: {
      "key": 7371.17,
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
    deletedAt: new Date("2023-03-01T14:09:57.290Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | customer.updated                                           |
| `data`                                                     | [components.Customer](../../models/components/customer.md) | :heavy_check_mark:                                         | A customer in an organization.                             |                                                            |