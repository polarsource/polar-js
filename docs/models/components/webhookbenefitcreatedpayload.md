# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2023-08-02T18:43:36.209Z"),
    modifiedAt: new Date("2025-07-17T11:05:43.873Z"),
    id: "<value>",
    description:
      "of notwithstanding aha throughout impressive designation admonish masterpiece yippee",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {},
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |