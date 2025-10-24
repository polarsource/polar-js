# WebhookEvent

A webhook event.

An event represent something that happened in the system
that should be sent to the webhook endpoint.

It can be delivered multiple times until it's marked as succeeded,
each one creating a new delivery.

## Example Usage

```typescript
import { WebhookEvent } from "@polar-sh/sdk/models/components/webhookevent.js";

let value: WebhookEvent = {
  createdAt: new Date("2025-11-22T22:13:57.512Z"),
  modifiedAt: null,
  id: "<value>",
  payload: "<value>",
  type: "subscription.updated",
  isArchived: true,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the object.                                                                                            |
| `lastHttpCode`                                                                                                   | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Last HTTP code returned by the URL. `null` if no delviery has been attempted or if the endpoint was unreachable. |
| `succeeded`                                                                                                      | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether this event was successfully delivered. `null` if no delivery has been attempted.                         |
| `payload`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The payload of the webhook event.                                                                                |
| `type`                                                                                                           | [components.WebhookEventType](../../models/components/webhookeventtype.md)                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isArchived`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether this event is archived. Archived events can't be redelivered, and the payload is not accessible anymore. |