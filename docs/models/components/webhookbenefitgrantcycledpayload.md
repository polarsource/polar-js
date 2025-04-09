# WebhookBenefitGrantCycledPayload

Sent when a benefit grant is cycled,
meaning the related subscription has been renewed for another period.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCycledPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcycledpayload.js";

let value: WebhookBenefitGrantCycledPayload = {
  data: {
    createdAt: new Date("2023-11-18T20:31:19.582Z"),
    modifiedAt: new Date("2024-03-08T01:20:16.494Z"),
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
      createdAt: new Date("2024-12-12T14:18:47.000Z"),
      modifiedAt: new Date("2023-08-07T21:00:38.885Z"),
      metadata: {
        "key": false,
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
      deletedAt: new Date("2025-02-26T00:46:37.159Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-07-25T23:55:15.574Z"),
      modifiedAt: new Date("2023-07-06T08:58:45.482Z"),
      id: "<value>",
      description: "buzzing despite boggle whereas across boo",
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              | benefit_grant.cycled                                                             |
| `data`                                                                           | [components.BenefitGrantWebhook](../../models/components/benefitgrantwebhook.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |