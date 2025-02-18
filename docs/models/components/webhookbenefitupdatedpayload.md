# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-09-11T09:38:08.141Z"),
    modifiedAt: new Date("2023-04-18T03:10:55.746Z"),
    id: "<value>",
    description: "as premium upon needily forenenst ugh privilege",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      imageHeight: 400,
      imageWidth: 400,
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |