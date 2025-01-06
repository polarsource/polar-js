# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2025-08-14T07:37:23.995Z"),
    modifiedAt: new Date("2023-05-15T01:02:04.729Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-11-02T18:45:39.253Z"),
      modifiedAt: new Date("2024-11-27T14:24:37.887Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Maybell.Hane15@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Burundi",
      },
      taxId: [
        "om_vat",
      ],
      organizationId: "<value>",
      avatarUrl: "https://old-finding.com",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-05-02T02:33:58.780Z"),
      modifiedAt: new Date("2024-08-02T04:04:19.829Z"),
      id: "<value>",
      description: "yowza behind before pillbox",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        guildId: "<id>",
        roleId: "<id>",
        guildToken: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |