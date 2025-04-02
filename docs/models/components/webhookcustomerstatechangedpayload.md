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
    createdAt: new Date("2025-12-14T07:17:28.090Z"),
    modifiedAt: new Date("2025-02-03T06:34:29.704Z"),
    metadata: {
      "key": 263767,
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
    deletedAt: new Date("2025-02-28T09:52:22.744Z"),
    activeSubscriptions: [
      {
        id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
        createdAt: new Date("2025-10-11T05:35:26.683Z"),
        modifiedAt: new Date("2024-12-29T11:21:48.918Z"),
        metadata: {
          "key": 198991,
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
        createdAt: new Date("2025-02-13T17:33:21.870Z"),
        modifiedAt: new Date("2024-12-12T21:20:53.638Z"),
        grantedAt: new Date("2025-01-03T13:37:00Z"),
        benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
        benefitType: "meter_credit",
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