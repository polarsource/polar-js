# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2025-07-10T10:39:26.328Z"),
    modifiedAt: new Date("2023-01-13T10:05:01.779Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2024-06-26T07:37:02.234Z"),
      modifiedAt: new Date("2023-10-20T22:11:31.924Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Robyn52@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Venezuela",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://flustered-pomelo.org/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2024-09-23T15:48:31.283Z"),
      modifiedAt: new Date("2025-11-11T12:00:22.100Z"),
      id: "<value>",
      description: "why commercial likewise naturally",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        guildId: "<id>",
        roleId: "<id>",
        guildToken: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |