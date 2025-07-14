# BenefitGrantedEvent

An event created by Polar when a benefit is granted to a customer.

## Example Usage

```typescript
import { BenefitGrantedEvent } from "@polar-sh/sdk/models/components/benefitgrantedevent.js";

let value: BenefitGrantedEvent = {
  id: "<value>",
  timestamp: new Date("2025-06-01T19:12:32.636Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2023-07-12T03:53:00.913Z"),
    modifiedAt: new Date("2024-04-26T10:19:45.222Z"),
    metadata: {
      "key": 5951.8,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-07-29T02:37:49.390Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  source: "system",
  name: "benefit.granted",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "discord",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the object.                                                                                                          |                                                                                                                                |
| `timestamp`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | The timestamp of the event.                                                                                                    |                                                                                                                                |
| `organizationId`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the organization owning the event.                                                                                   | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                           |
| `customerId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the customer in your Polar organization associated with the event.                                                       |                                                                                                                                |
| `customer`                                                                                                                     | [components.Customer](../../models/components/customer.md)                                                                     | :heavy_check_mark:                                                                                                             | The customer associated with the event.                                                                                        |                                                                                                                                |
| `externalCustomerId`                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the customer in your system associated with the event.                                                                   |                                                                                                                                |
| `source`                                                                                                                       | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The source of the event. `system` events are created by Polar. `user` events are the one you create through our ingestion API. |                                                                                                                                |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The name of the event.                                                                                                         |                                                                                                                                |
| `metadata`                                                                                                                     | [components.BenefitGrantMetadata](../../models/components/benefitgrantmetadata.md)                                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |