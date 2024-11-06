# WebhookBenefitUpdatedPayload

Sent when a benefit is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitUpdatedPayload = {
  data: {
    createdAt: new Date("2024-09-26T16:56:57.899Z"),
    modifiedAt: new Date("2023-10-02T21:44:40.357Z"),
    id: "<value>",
    description:
      "babyish collaboration cap neck crowded westernize huge down cantaloupe yet",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookBenefitUpdatedPayloadType](../../models/components/webhookbenefitupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | *components.BenefitInput*                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |