# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2025-11-01T00:31:03.453Z"),
    modifiedAt: new Date("2024-04-24T08:05:27.539Z"),
    id: "<value>",
    description:
      "inside during arrange faithfully individual gadzooks lonely hm vice slowly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "push",
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |