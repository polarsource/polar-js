# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2025-11-20T21:55:24.201Z"),
    modifiedAt: new Date("2024-08-28T21:26:21.279Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2024-04-18T03:44:37.000Z"),
      modifiedAt: new Date("2025-11-07T20:33:08.048Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Ezra.Runolfsson87@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Lao People's Democratic Republic",
      },
      taxId: [
        "do_rcn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://far-jazz.biz/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2023-01-16T15:27:04.636Z"),
      modifiedAt: new Date("2025-08-19T20:43:23.096Z"),
      id: "<value>",
      description: "baa highlight aw",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |