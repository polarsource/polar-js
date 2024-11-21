# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2022-04-15T00:20:50.174Z"),
    modifiedAt: new Date("2023-02-28T01:23:53.379Z"),
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
      createdAt: new Date("2023-07-01T02:59:06.785Z"),
      modifiedAt: new Date("2022-09-27T02:59:25.428Z"),
      id: "<value>",
      description: "sleet before bravely tankful step-mother anti",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 773588,
          timeframe: "year",
        },
        activations: {
          limit: 287603,
          enableUserAdmin: false,
        },
        limitUsage: 983831,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantCreatedPayloadType](../../models/components/webhookbenefitgrantcreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |