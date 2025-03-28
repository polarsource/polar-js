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
    createdAt: new Date("2023-02-08T12:51:00.758Z"),
    modifiedAt: new Date("2025-09-20T05:30:40.558Z"),
    metadata: {
      "key": false,
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
    deletedAt: new Date("2025-11-20T18:50:24.078Z"),
    activeSubscriptions: [
      {
        id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
        createdAt: new Date("2023-05-02T03:10:42.322Z"),
        modifiedAt: new Date("2024-11-22T09:23:59.598Z"),
        metadata: {
          "key": false,
        },
        amount: 1000,
        currency: "usd",
        recurringInterval: "year",
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
        createdAt: new Date("2024-10-23T05:48:28.761Z"),
        modifiedAt: new Date("2023-05-21T07:27:39.514Z"),
        grantedAt: new Date("2025-01-03T13:37:00Z"),
        benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
        benefitType: "github_repository",
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