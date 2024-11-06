# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2023-03-27T12:43:43.871Z"),
    modifiedAt: new Date("2024-07-16T06:38:50.927Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {},
    benefit: {
      createdAt: new Date("2022-01-19T15:42:01.485Z"),
      modifiedAt: new Date("2022-01-30T17:42:43.078Z"),
      id: "<value>",
      description: "broadly cruelly monocle embalm pace",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 252144,
          timeframe: "month",
        },
        activations: {
          limit: 337514,
          enableUserAdmin: false,
        },
        limitUsage: 926674,
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