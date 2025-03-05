# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantupdatedpayload.js";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2023-08-09T06:52:57.434Z"),
    modifiedAt: new Date("2024-11-13T23:17:33.665Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-04-29T11:47:52.155Z"),
      modifiedAt: new Date("2023-02-01T18:40:51.816Z"),
      metadata: {
        "key": 718859,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "FR",
      },
      taxId: [
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2024-06-16T20:00:28.055Z"),
      modifiedAt: new Date("2023-08-17T12:20:23.359Z"),
      id: "<value>",
      description: "char chasuble noxious imaginary below whereas yak",
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
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | benefit_grant.updated                                                            |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |