# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  type: "benefit.updated",
  data: {
    id: "<value>",
    createdAt: new Date("2024-05-19T01:49:21.918Z"),
    modifiedAt: new Date("2023-08-26T23:40:36.460Z"),
    type: "github_repository",
    description: "hotfoot than fortunately woefully unlawful yuck pfft apud",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "admin",
    },
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `type`               | *string*             | :heavy_check_mark:   | N/A                  | benefit.updated      |
| `data`               | *components.Benefit* | :heavy_check_mark:   | N/A                  |                      |