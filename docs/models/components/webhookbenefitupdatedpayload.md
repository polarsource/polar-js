# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-04-05T16:59:11.772Z"),
    modifiedAt: new Date("2024-10-19T12:09:04.999Z"),
    id: "<value>",
    description: "idolized after phooey preside",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      archived: {
        "key": false,
      },
      files: [
        "<value>",
      ],
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |