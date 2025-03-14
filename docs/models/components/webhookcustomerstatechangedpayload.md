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
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-03-09T14:44:52.776Z"),
    modifiedAt: new Date("2025-11-13T04:34:33.275Z"),
    metadata: {
      "key": 118917,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-01-30T08:19:18.118Z"),
    activeSubscriptions: [
      {
        id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
        createdAt: new Date("2025-10-01T07:24:57.730Z"),
        modifiedAt: new Date("2023-10-12T06:39:45.765Z"),
        metadata: {
          "key": false,
        },
        amount: 1000,
        currency: "usd",
        recurringInterval: "month",
        currentPeriodStart: new Date("2025-02-03T13:37:00Z"),
        currentPeriodEnd: new Date("2025-03-03T13:37:00Z"),
        cancelAtPeriodEnd: false,
        canceledAt: null,
        startedAt: new Date("2025-01-03T13:37:00Z"),
        endsAt: null,
        productId: "d8dd2de1-21b7-4a41-8bc3-ce909c0cfe23",
        discountId: null,
        priceId: "196ca717-4d84-4d28-a1b8-777255797dbc",
      },
    ],
    grantedBenefits: [
      {
        id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
        createdAt: new Date("2024-09-20T16:13:50.823Z"),
        modifiedAt: new Date("2025-11-12T17:32:52.430Z"),
        grantedAt: new Date("2025-01-03T13:37:00Z"),
        benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
        benefitType: "license_keys",
        properties: {},
      },
    ],
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | customer.state_changed                                                                        |
| `data`                                                                                        | [components.CustomerState](../../models/components/customerstate.md)                          | :heavy_check_mark:                                                                            | A customer along with additional state information:<br/><br/>* Active subscriptions<br/>* Active benefits |                                                                                               |