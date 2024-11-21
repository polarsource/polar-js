# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2022-01-08T15:25:00.783Z"),
    modifiedAt: new Date("2023-02-17T01:58:37.561Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {},
    benefit: {
      createdAt: new Date("2022-08-30T22:57:38.964Z"),
      modifiedAt: new Date("2023-08-14T20:40:28.054Z"),
      id: "<value>",
      description: "mindless that deer instead",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 295816,
          timeframe: "year",
        },
        activations: {
          limit: 52636,
          enableUserAdmin: false,
        },
        limitUsage: 812673,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantUpdatedPayloadType](../../models/components/webhookbenefitgrantupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |