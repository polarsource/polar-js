# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    id: "<value>",
    createdAt: new Date("2024-05-19T01:49:21.918Z"),
    modifiedAt: new Date("2024-08-16T12:57:27.941Z"),
    description: "cripple across impure dishonor",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "maintain",
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.updated      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |