# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2024-07-08T04:57:58.789Z"),
    modifiedAt: new Date("2023-07-14T06:31:19.124Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-09-10T18:58:43.516Z"),
      modifiedAt: new Date("2024-08-25T11:58:09.669Z"),
      id: "<value>",
      metadata: {
        "key": 962513,
      },
      email: "Hollie85@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Finland",
      },
      taxId: [
        "au_arn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://quarterly-extension.com/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2023-12-15T15:28:10.903Z"),
      modifiedAt: new Date("2024-03-31T13:49:57.045Z"),
      id: "<value>",
      description: "feather sans impressionable",
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