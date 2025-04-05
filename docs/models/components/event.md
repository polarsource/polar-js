# Event

## Example Usage

```typescript
import { Event } from "@polar-sh/sdk/models/components/event.js";

let value: Event = {
  metadata: {
    "key": "<value>",
  },
  id: "<value>",
  timestamp: new Date("2024-09-26T17:50:29.536Z"),
  name: "<value>",
  source: "system",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-05-10T04:29:20.882Z"),
    modifiedAt: new Date("2024-10-21T14:57:43.528Z"),
    metadata: {
      "key": 534176,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2023-08-01T00:23:09.141Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *components.EventMetadata*>                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |                                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the event.                                                                   |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event.                                                                        |                                                                                               |
| `source`                                                                                      | [components.EventSource](../../models/components/eventsource.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the event.                                                  | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                          |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the customer in your Polar organization associated with the event.                      |                                                                                               |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | The customer associated with the event.                                                       |                                                                                               |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the customer in your system associated with the event.                                  |                                                                                               |