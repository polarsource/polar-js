# EventCreateCustomer

## Example Usage

```typescript
import { EventCreateCustomer } from "@polar-sh/sdk/models/components/eventcreatecustomer.js";

let value: EventCreateCustomer = {
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The timestamp of the event.                                                                     |                                                                                                 |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The name of the event.                                                                          |                                                                                                 |
| `organizationId`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ID of the organization owning the event. **Required unless you use an organization token.** | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                            |
| `externalId`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | Your unique identifier for this event. Useful for deduplication and parent-child relationships. |                                                                                                 |
| `parentId`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ID of the parent event. Can be either a Polar event ID (UUID) or an external event ID.      |                                                                                                 |
| `metadata`                                                                                      | Record<string, *components.EventMetadataInput*>                                                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `customerId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | ID of the customer in your Polar organization associated with the event.                        |                                                                                                 |