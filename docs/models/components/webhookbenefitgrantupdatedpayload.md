# WebhookBenefitGrantUpdatedPayload

Sent when a new benefit grant is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookBenefitGrantUpdatedPayload = {
  data: {
    createdAt: new Date("2022-02-14T12:50:16.034Z"),
    modifiedAt: new Date("2024-01-13T05:08:56.049Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2022-06-06T06:43:30.345Z"),
      modifiedAt: new Date("2023-05-19T10:41:19.543Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Leonardo19@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Saint Pierre and Miquelon",
      },
      taxId: [
        "si_tin",
      ],
      organizationId: "<value>",
      avatarUrl: "https://mysterious-taxicab.net/",
    },
    properties: {
      advertisementCampaignId: "<id>",
    },
    benefit: {
      createdAt: new Date("2023-09-20T18:25:13.476Z"),
      modifiedAt: new Date("2022-12-22T03:37:10.516Z"),
      id: "<value>",
      description:
        "wearily empty idolized after phooey preside because midwife",
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