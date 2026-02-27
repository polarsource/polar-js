# WebhookBenefitCreatedPayload

Sent when a new benefit is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitcreatedpayload.js";

let value: WebhookBenefitCreatedPayload = {
  type: "benefit.created",
  timestamp: new Date("2026-02-08T18:43:22.755Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2026-01-16T07:13:19.224Z"),
    modifiedAt: new Date("2026-06-11T23:07:15.256Z"),
    type: "github_repository",
    description:
      "while sticky hm saturate inasmuch quizzically although formation helpful",
    selectable: true,
    deletable: false,
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"benefit.created"*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           | benefit.created                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | *components.Benefit*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |