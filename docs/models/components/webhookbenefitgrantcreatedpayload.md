# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2025-10-16T21:05:49.513Z"),
    modifiedAt: new Date("2024-10-12T05:48:42.839Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-05-12T18:50:06.377Z"),
      modifiedAt: new Date("2024-07-04T08:33:29.105Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Maci40@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Bosnia and Herzegovina",
      },
      taxId: [
        "is_vat",
      ],
      organizationId: "<value>",
      avatarUrl: "https://mysterious-runway.org",
    },
    properties: {
      advertisementCampaignId: "<id>",
    },
    benefit: {
      createdAt: new Date("2024-02-06T21:53:27.255Z"),
      modifiedAt: new Date("2023-02-16T14:34:47.648Z"),
      id: "<value>",
      description: "gadzooks testing adult under curse meager",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        repositoryOwner: "polarsource",
        repositoryName: "private_repo",
        permission: "pull",
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