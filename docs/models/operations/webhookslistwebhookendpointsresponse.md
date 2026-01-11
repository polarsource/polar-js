# WebhooksListWebhookEndpointsResponse

## Example Usage

```typescript
import { WebhooksListWebhookEndpointsResponse } from "@polar-sh/sdk/models/operations/webhookslistwebhookendpoints.js";

let value: WebhooksListWebhookEndpointsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-05-07T08:31:11.287Z"),
        modifiedAt: new Date("2025-08-23T07:26:51.753Z"),
        id: "<value>",
        url: "https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0",
        format: "slack",
        secret: "polar_whs_ovyN6cPrTv56AApvzCaJno08SSmGJmgbWilb33N2JuK",
        organizationId: "<value>",
        events: [],
        enabled: false,
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `result`                                                                                         | [components.ListResourceWebhookEndpoint](../../models/components/listresourcewebhookendpoint.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |