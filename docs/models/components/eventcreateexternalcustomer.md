# EventCreateExternalCustomer

## Example Usage

```typescript
import { EventCreateExternalCustomer } from "@polar-sh/sdk/models/components/eventcreateexternalcustomer.js";

let value: EventCreateExternalCustomer = {
  name: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  externalCustomerId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | The timestamp of the event.                                                                     |                                                                                                 |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The name of the event.                                                                          |                                                                                                 |
| `organizationId`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ID of the organization owning the event. **Required unless you use an organization token.** | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                            |
| `metadata`                                                                                      | Record<string, *components.EventMetadataInput*>                                                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |
| `externalCustomerId`                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | ID of the customer in your system associated with the event.                                    |                                                                                                 |