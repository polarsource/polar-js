# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2023-07-05T01:46:55.006Z"),
    modifiedAt: new Date("2022-03-17T06:50:06.523Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {},
    benefit: {
      createdAt: new Date("2022-11-30T19:27:06.717Z"),
      modifiedAt: new Date("2024-10-30T16:04:35.456Z"),
      id: "<value>",
      description:
        "anti ouch microchip gadzooks someplace pneumonia if wealthy",
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantRevokedPayloadType](../../models/components/webhookbenefitgrantrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |