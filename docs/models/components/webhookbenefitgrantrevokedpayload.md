# WebhookBenefitGrantRevokedPayload

Sent when a new benefit grant is revoked.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantRevokedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantrevokedpayload.js";

let value: WebhookBenefitGrantRevokedPayload = {
  data: {
    createdAt: new Date("2025-03-23T13:46:19.980Z"),
    modifiedAt: new Date("2023-06-21T20:48:34.925Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2024-08-07T21:56:49.330Z"),
      modifiedAt: new Date("2024-06-25T03:10:41.430Z"),
      id: "<value>",
      metadata: {
        "key": 679888,
      },
      email: "Darby_Beer@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Vietnam",
      },
      taxId: [
        "ca_qst",
      ],
      organizationId: "<value>",
      avatarUrl: "https://profitable-piglet.name",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2023-09-22T15:26:38.721Z"),
      modifiedAt: new Date("2025-03-14T08:40:19.035Z"),
      id: "<value>",
      description: "creative yieldingly hidden probe emphasise signature",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        note: "<value>",
      },
      isTaxApplicable: false,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |