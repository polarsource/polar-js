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
    benefit: {
      id: "<value>",
      createdAt: new Date("2025-01-19T02:50:19.451Z"),
      modifiedAt: new Date("2025-06-16T20:41:24.432Z"),
      type: "custom",
      description: "cassava vainly vague father",
      selectable: true,
      deletable: true,
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