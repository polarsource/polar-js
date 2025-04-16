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
    createdAt: new Date("2023-09-08T09:42:52.953Z"),
    modifiedAt: new Date("2024-01-02T01:29:12.545Z"),
    metadata: {
      "key": false,
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
    deletedAt: new Date("2025-10-09T10:42:19.731Z"),
    activeSubscriptions: [
      {
        id: "e5149aae-e521-42b9-b24c-abb3d71eea2e",
        createdAt: new Date("2025-12-23T04:41:58.036Z"),
        modifiedAt: new Date("2024-05-10T12:26:13.692Z"),
        metadata: {
          "key": "<value>",
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
        meters: [
          {
            createdAt: new Date("2023-03-22T19:19:39.234Z"),
            modifiedAt: new Date("2025-04-22T10:13:21.181Z"),
            id: "<value>",
            consumedUnits: 25,
            creditedUnits: 100,
            amount: 0,
            meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
          },
        ],
      },
    ],
    grantedBenefits: [
      {
        id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
        createdAt: new Date("2023-03-24T14:16:16.143Z"),
        modifiedAt: new Date("2024-12-10T01:12:28.755Z"),
        grantedAt: new Date("2025-01-03T13:37:00Z"),
        benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
        benefitType: "discord",
        properties: {},
      },
    ],
    activeMeters: [
      {
        createdAt: new Date("2024-12-08T11:33:48.224Z"),
        modifiedAt: new Date("2023-11-11T06:48:37.139Z"),
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        consumedUnits: 25,
        creditedUnits: 100,
        balance: 75,
      },
    ],
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | customer.state_changed                                                                                         |
| `data`                                                                                                         | [components.CustomerState](../../models/components/customerstate.md)                                           | :heavy_check_mark:                                                                                             | A customer along with additional state information:<br/><br/>* Active subscriptions<br/>* Granted benefits<br/>* Active meters |                                                                                                                |