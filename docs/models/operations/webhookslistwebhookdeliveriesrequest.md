# WebhooksListWebhookDeliveriesRequest

## Example Usage

```typescript
import { WebhooksListWebhookDeliveriesRequest } from "@polar-sh/sdk/models/operations/webhookslistwebhookdeliveries.js";

let value: WebhooksListWebhookDeliveriesRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `endpointId`                                                                                  | *operations.EndpointId*                                                                       | :heavy_minus_sign:                                                                            | Filter by webhook endpoint ID.                                                                |
| `startTimestamp`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter deliveries after this timestamp.                                                       |
| `endTimestamp`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter deliveries before this timestamp.                                                      |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | Page number, defaults to 1.                                                                   |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Size of a page, defaults to 10. Maximum is 100.                                               |