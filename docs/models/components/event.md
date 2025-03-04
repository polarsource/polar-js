# Event

## Example Usage

```typescript
import { Event } from "@polar-sh/sdk/models/components/event.js";

let value: Event = {
  metadata: {
    "key": "<value>",
  },
  id: "<value>",
  timestamp: new Date("2025-09-17T06:24:00.140Z"),
  name: "<value>",
  source: "system",
  organizationId: "<value>",
  customerId: "<value>",
  customer: {
    createdAt: new Date("2024-08-11T20:27:07.720Z"),
    modifiedAt: new Date("2023-12-26T16:17:58.881Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    externalId: "<id>",
    email: "Darby15@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Republic of Korea",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://separate-disclosure.org",
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