# WebhookEndpoint

A webhook endpoint.

## Example Usage

```typescript
import { WebhookEndpoint } from "@polar-sh/sdk/models/components/webhookendpoint.js";

let value: WebhookEndpoint = {
  createdAt: new Date("2026-11-07T23:32:02.142Z"),
  modifiedAt: new Date("2026-04-09T02:24:33.049Z"),
  id: "<value>",
  url: "https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0",
  format: "discord",
  secret: "polar_whs_ovyN6cPrTv56AApvzCaJno08SSmGJmgbWilb33N2JuK",
  organizationId: "<value>",
  events: [
    "member.created",
  ],
  enabled: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL where the webhook events will be sent.                                                | https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0                                     |
| `format`                                                                                      | [components.WebhookFormat](../../models/components/webhookformat.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `secret`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The secret used to sign the webhook events.                                                   | polar_whs_ovyN6cPrTv56AApvzCaJno08SSmGJmgbWilb33N2JuK                                         |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The organization ID associated with the webhook endpoint.                                     |                                                                                               |
| `events`                                                                                      | [components.WebhookEventType](../../models/components/webhookeventtype.md)[]                  | :heavy_check_mark:                                                                            | The events that will trigger the webhook.                                                     |                                                                                               |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the webhook endpoint is enabled and will receive events.                              |                                                                                               |