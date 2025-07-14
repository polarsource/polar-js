# WebhooksUpdateWebhookEndpointRequest

## Example Usage

```typescript
import { WebhooksUpdateWebhookEndpointRequest } from "@polar-sh/sdk/models/operations/webhooksupdatewebhookendpoint.js";

let value: WebhooksUpdateWebhookEndpointRequest = {
  id: "<value>",
  webhookEndpointUpdate: {
    url: "https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0",
    secret: "f_z6mfSpxkjogyw3FkA2aH2gYE5huxruNf34MpdWMcA",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The webhook endpoint ID.                                                             |
| `webhookEndpointUpdate`                                                              | [components.WebhookEndpointUpdate](../../models/components/webhookendpointupdate.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |