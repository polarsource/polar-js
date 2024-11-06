# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2022-08-13T04:05:41.912Z"),
    modifiedAt: new Date("2022-08-15T19:08:33.127Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    properties: {},
    benefit: {
      createdAt: new Date("2022-05-01T12:37:32.096Z"),
      modifiedAt: new Date("2023-07-09T00:24:34.770Z"),
      id: "<value>",
      description: "collaborate pfft nor",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        paidArticles: false,
      },
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookBenefitGrantUpdatedPayloadType](../../models/components/webhookbenefitgrantupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md)                                     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |