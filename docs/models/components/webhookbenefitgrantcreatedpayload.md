# WebhookBenefitGrantCreatedPayload

Sent when a new benefit grant is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookBenefitGrantCreatedPayload } from "@polar-sh/sdk/models/components/webhookbenefitgrantcreatedpayload.js";

let value: WebhookBenefitGrantCreatedPayload = {
  data: {
    createdAt: new Date("2025-12-30T04:04:24.405Z"),
    modifiedAt: new Date("2023-05-03T14:40:56.825Z"),
    id: "<value>",
    isGranted: false,
    isRevoked: false,
    subscriptionId: "<value>",
    orderId: "<value>",
    customerId: "<value>",
    userId: "<value>",
    benefitId: "<value>",
    customer: {
      createdAt: new Date("2023-01-03T07:54:22.986Z"),
      modifiedAt: new Date("2025-03-30T13:43:21.206Z"),
      id: "<value>",
      metadata: {
        "key": 690874,
      },
      email: "Jeremie62@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Canada",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://stark-mentor.org/",
    },
    properties: {},
    benefit: {
      createdAt: new Date("2025-04-19T09:50:49.398Z"),
      modifiedAt: new Date("2024-12-21T16:12:19.264Z"),
      id: "<value>",
      description:
        "incline regarding behind about after hence belabor search controvert",
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