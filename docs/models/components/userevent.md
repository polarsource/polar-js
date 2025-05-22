# UserEvent

An event you created through the ingestion API.

## Example Usage

```typescript
import { UserEvent } from "@polar-sh/sdk/models/components/userevent.js";

let value: UserEvent = {
  metadata: {
    "key": 861780,
  },
  id: "<value>",
  timestamp: new Date("2024-01-14T23:56:20.249Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-10-30T07:02:02.549Z"),
    modifiedAt: new Date("2024-02-13T15:33:42.530Z"),
    metadata: {
      "key": false,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-10-18T12:21:54.037Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  externalCustomerId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `metadata`                                                                                                                     | Record<string, *components.UserEventMetadata*>                                                                                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the object.                                                                                                          |                                                                                                                                |
| `timestamp`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | The timestamp of the event.                                                                                                    |                                                                                                                                |
| `organizationId`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the organization owning the event.                                                                                   | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                           |
| `customerId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the customer in your Polar organization associated with the event.                                                       |                                                                                                                                |
| `customer`                                                                                                                     | [components.Customer](../../models/components/customer.md)                                                                     | :heavy_check_mark:                                                                                                             | The customer associated with the event.                                                                                        |                                                                                                                                |
| `externalCustomerId`                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the customer in your system associated with the event.                                                                   |                                                                                                                                |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The name of the event.                                                                                                         |                                                                                                                                |
| `source`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. |                                                                                                                                |