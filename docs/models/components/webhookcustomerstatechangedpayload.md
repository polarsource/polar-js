# WebhookCustomerStateChangedPayload

Sent when a customer state has changed.

It's triggered when:

* Customer is created, updated or deleted.
* A subscription is created or updated.
* A benefit is granted or revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCustomerStateChangedPayload } from "@polar-sh/sdk/models/components/webhookcustomerstatechangedpayload.js";

let value: WebhookCustomerStateChangedPayload = {
  type: "customer.state_changed",
  timestamp: new Date("2024-09-07T09:42:52.953Z"),
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2026-05-17T13:12:41.176Z"),
    modifiedAt: null,
    metadata: {},
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingName: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-05-10T12:26:13.692Z"),
    firstUserEventAt: new Date("2026-07-20T12:52:40.041Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    activeSubscriptions: [],
    grantedBenefits: [
      {
        id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
        createdAt: new Date("2025-03-18T01:05:28.322Z"),
        modifiedAt: new Date("2025-10-16T08:51:00.130Z"),
        grantedAt: new Date("2025-01-03T13:37:00Z"),
        benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
        benefitType: "downloadables",
        benefitMetadata: {},
        properties: {},
      },
    ],
    activeMeters: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"customer.state_changed"*                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           | customer.state_changed                                                                        |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.CustomerState*                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |