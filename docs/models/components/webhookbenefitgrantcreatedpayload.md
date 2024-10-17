# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-07T17:47:09.467Z"),
    modifiedAt: new Date("2024-11-01T12:43:32.735Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {
      advertisementCampaignId: "<id>",
    },
    benefit: {
      createdAt: new Date("2023-07-21T23:45:41.026Z"),
      modifiedAt: new Date("2023-09-20T12:26:05.228Z"),
      id: "<value>",
      description: "arrogantly which nor and reiterate gosh negligible",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantCreatedPayloadType](../../models/components/webhookbenefitgrantcreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |