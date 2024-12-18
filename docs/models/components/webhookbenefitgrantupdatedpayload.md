# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2022-06-07T00:46:55.861Z"),
    modifiedAt: new Date("2024-04-14T16:09:06.266Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {},
    benefit: {
      createdAt: new Date("2023-05-05T22:17:51.096Z"),
      modifiedAt: new Date("2022-06-03T12:45:41.057Z"),
      id: "<value>",
      description:
        "inasmuch ectoderm where oof planula forenenst eminent inasmuch",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantUpdatedPayloadType](../../models/components/webhookbenefitgrantupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |