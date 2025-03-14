# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  data: {
    createdAt: new Date("2023-11-13T23:20:26.533Z"),
    modifiedAt: new Date("2025-06-05T11:34:22.007Z"),
    id: "<value>",
    description: "different abnormally whenever",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "triage",
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.created      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |