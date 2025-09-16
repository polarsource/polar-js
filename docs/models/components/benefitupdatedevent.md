# BenefitUpdatedEvent

An event created by Polar when a benefit is updated.

## Example Usage

```typescript
import { BenefitUpdatedEvent } from "@polar-sh/sdk/models/components/benefitupdatedevent.js";

let value: BenefitUpdatedEvent = {
  id: "<value>",
  timestamp: new Date("2023-08-28T11:47:00.673Z"),
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
    metadata: {
      "key": "<value>",
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
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  externalCustomerId: "<id>",
  source: "system",
  name: "benefit.updated",
  metadata: {
    benefitId: "<id>",
    benefitGrantId: "<id>",
    benefitType: "github_repository",
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