# WebhookEndpointUpdate

Schema to update a webhook endpoint.

## Example Usage

```typescript
import { WebhookEndpointUpdate } from "@polar-sh/sdk/models/components/webhookendpointupdate.js";

let value: WebhookEndpointUpdate = {
  url: "https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                   | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     | https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0                                                               |
| ~~`secret`~~                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. | polar_whs_ovyN6cPrTv56AApvzCaJno08SSmGJmgbWilb33N2JuK                                                                   |
| `format`                                                                                                                | [components.WebhookFormat](../../models/components/webhookformat.md)                                                    | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `events`                                                                                                                | [components.WebhookEventType](../../models/components/webhookeventtype.md)[]                                            | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |