# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitupdatedpayload.js";

let value: WebhookBenefitUpdatedPayload = {
  type: "benefit.updated",
  timestamp: new Date("2024-04-12T19:00:24.836Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2024-08-16T12:57:27.941Z"),
    modifiedAt: new Date("2025-01-19T10:49:02.218Z"),
    type: "github_repository",
    description: "porter whoever nasalise what",
    selectable: true,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "admin",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit.updated                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.Benefit*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |