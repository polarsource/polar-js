# WebhookBenefitGrantUpdatedPayload

Sent when a benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  type: "benefit_grant.updated",
  timestamp: new Date("2024-04-17T13:08:43.650Z"),
  data: {
    createdAt: new Date("2026-10-11T19:34:50.666Z"),
    modifiedAt: new Date("2024-08-03T03:55:46.311Z"),
    id: "<value>",
    isGranted: true,
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
      createdAt: new Date("2026-01-19T18:11:16.982Z"),
      modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
      customerId: "<value>",
      email: "member@example.com",
      name: "Jane Doe",
      externalId: "usr_1337",
      role: "billing_manager",
    },
    benefit: {
      id: "<value>",
      createdAt: new Date("2026-03-26T16:08:46.490Z"),
      modifiedAt: new Date("2024-05-22T09:29:41.973Z"),
      type: "custom",
      description: "seldom essay oval if boo profuse uh-huh",
      selectable: true,
      deletable: false,
      organizationId: "<value>",
      metadata: {},
      properties: {
        note: "<value>",
      },
    },
    properties: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"benefit_grant.updated"*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit_grant.updated                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.BenefitGrantWebhook*                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |