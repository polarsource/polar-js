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
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-09-08T09:42:52.953Z"),
    modifiedAt: new Date("2025-05-17T13:12:41.176Z"),
    metadata: {},
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
    deletedAt: new Date("2025-12-23T04:41:58.036Z"),
    activeSubscriptions: [],
    grantedBenefits: [],
    activeMeters: [
      {
        id: "<value>",
        createdAt: new Date("2023-03-22T19:19:39.234Z"),
        modifiedAt: new Date("2023-03-24T14:16:16.143Z"),
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        consumedUnits: 25,
        creditedUnits: 100,
        balance: 75,
      },
    ],
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | customer.state_changed                                                                                         |
| `data`                                                                                                         | [components.CustomerState](../../models/components/customerstate.md)                                           | :heavy_check_mark:                                                                                             | A customer along with additional state information:<br/><br/>* Active subscriptions<br/>* Granted benefits<br/>* Active meters |                                                                                                                |