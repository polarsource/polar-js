# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2025-07-22T20:45:22.257Z"),
    modifiedAt: new Date("2025-08-31T14:34:42.904Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-10-20T02:42:42.383Z"),
      modifiedAt: new Date("2023-07-07T00:56:28.352Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Bernadette_Hartmann@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Sierra Leone",
      },
      taxId: [
        "mx_rfc",
      ],
      organizationId: "<value>",
      avatarUrl: "https://experienced-lady.net",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-01-19T23:07:05.447Z"),
      modifiedAt: new Date("2025-05-05T13:55:56.565Z"),
      id: "<value>",
      description:
        "whose synthesise seriously nor joyously through nor cheerfully neatly juvenile",
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