# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2023-05-19T12:16:27.570Z"),
    modifiedAt: new Date("2024-01-11T15:35:24.124Z"),
    id: "<value>",
    name: "<value>",
    description: "disconnection until jaggedly encouragement",
    recurringInterval: "year",
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [],
    benefits: [],
    medias: [],
    attachedCustomFields: [],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | product.updated                                          |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |                                                          |