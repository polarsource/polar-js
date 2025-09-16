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
  timestamp: new Date("2023-09-08T09:42:52.953Z"),
  data: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-01-02T01:29:12.545Z"),
    modifiedAt: new Date("2023-02-02T14:52:07.640Z"),
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
    deletedAt: new Date("2024-05-10T12:26:13.692Z"),
    activeSubscriptions: [],
    grantedBenefits: [
      {
        id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
        createdAt: new Date("2023-03-22T19:19:39.234Z"),
        modifiedAt: new Date("2023-03-24T14:16:16.143Z"),
        grantedAt: new Date("2025-01-03T13:37:00Z"),
        benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
        benefitType: "downloadables",
        benefitMetadata: {
          "key": "value",
        },
        properties: {},
      },
    ],
    activeMeters: [
      {
        id: "<value>",
        createdAt: new Date("2024-12-08T11:33:48.224Z"),
        modifiedAt: new Date("2025-01-16T06:03:11.033Z"),
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
| `timestamp`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `data`                                                                                                         | [components.CustomerState](../../models/components/customerstate.md)                                           | :heavy_check_mark:                                                                                             | A customer along with additional state information:<br/><br/>* Active subscriptions<br/>* Granted benefits<br/>* Active meters |                                                                                                                |