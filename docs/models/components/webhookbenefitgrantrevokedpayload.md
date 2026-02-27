# WebhookBenefitGrantRevokedPayload

Sent when a benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  type: "benefit_grant.revoked",
  timestamp: new Date("2026-12-18T19:40:40.081Z"),
  data: {
    createdAt: new Date("2024-11-26T09:29:34.234Z"),
    modifiedAt: new Date("2025-07-13T14:44:55.788Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: true,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-06-04T21:28:32.740Z"),
      modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
      metadata: {
        "key": "<value>",
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      type: "individual",
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2026-09-04T17:38:48.600Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
    },
    member: {
      id: "<value>",
      createdAt: new Date("2026-04-15T16:04:23.824Z"),
      modifiedAt: new Date("2025-04-16T17:12:33.507Z"),
      customerId: "<value>",
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
      role: "member",
    },
    benefit: {
      id: "<value>",
      createdAt: new Date("2025-10-04T20:17:27.013Z"),
      modifiedAt: new Date("2026-12-13T13:45:10.283Z"),
      type: "meter_credit",
      description:
        "since longingly store from failing graceful afore hungry trench rim",
      selectable: false,
      deletable: true,
      organizationId: "<value>",
      metadata: {},
      properties: {
        units: 298008,
        rollover: false,
        meterId: "<value>",
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"benefit_grant.revoked"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.revoked                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |