# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2023-09-05T11:02:41.111Z"),
    modifiedAt: new Date("2023-11-06T00:23:38.763Z"),
    id: "<value>",
    description: "suspiciously phooey gah amongst",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {},
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitCreatedPayloadType](../../models/components/webhookbenefitcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.WebhookBenefitCreatedPayloadBenefit*                                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |