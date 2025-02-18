# Event

## Example Usage

```typescript
import { Event } from "@polar-sh/sdk/models/components/event.js";

let value: Event = {
  metadata: {
    "key": 295816,
  },
  id: "<value>",
  timestamp: new Date("2023-02-23T01:56:49.955Z"),
  name: "<value>",
  source: "system",
  organizationId: "<value>",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2025-06-09T16:32:01.402Z"),
    modifiedAt: new Date("2024-08-25T13:48:26.011Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    email: "Brock_Medhurst@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Botswana",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://gigantic-euphonium.name",
  },
  externalCustomerId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *components.EventMetadata*>                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp of the event.                                                                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event.                                                                        |
| `source`                                                                                      | [components.EventSource](../../models/components/eventsource.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the event.                                                  |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the customer in your Polar organization associated with the event.                      |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | The customer associated with the event.                                                       |
| `externalCustomerId`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the customer in your system associated with the event.                                  |