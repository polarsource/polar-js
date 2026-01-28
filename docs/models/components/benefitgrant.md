# BenefitGrant

## Example Usage

```typescript
import { BenefitGrant } from "@polar-sh/sdk/models/components/benefitgrant.js";

let value: BenefitGrant = {
  createdAt: new Date("2025-02-22T09:47:56.049Z"),
  modifiedAt: new Date("2025-05-23T17:55:06.576Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-10-27T06:21:23.052Z"),
    modifiedAt: new Date("2026-06-23T08:48:04.338Z"),
    type: "custom",
    description: "geez against aha ugh um across serpentine",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 430936,
    },
    properties: {
      note: "<value>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the grant.                                                                          |
| `grantedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the benefit was granted. If `None`, the benefit is not granted.            |
| `isGranted`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is granted.                                                               |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.            |
| `isRevoked`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is revoked.                                                               |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the subscription that granted this benefit.                                         |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the order that granted this benefit.                                                |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the customer concerned by this grant.                                               |
| `memberId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the member concerned by this grant.                                                 |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit concerned by this grant.                                                |
| `error`                                                                                       | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                  | :heavy_minus_sign:                                                                            | The error information if the benefit grant failed with an unrecoverable error.                |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | A customer in an organization.                                                                |
| `benefit`                                                                                     | *components.Benefit*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | *components.Properties*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |