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
    createdAt: new Date("2024-10-27T06:21:23.052Z"),
    modifiedAt: new Date("2026-06-23T08:48:04.338Z"),
    metadata: {
      "key": 8409.19,
    },
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
    deletedAt: new Date("2026-12-09T05:38:07.432Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-12-02T19:15:10.730Z"),
    modifiedAt: new Date("2024-04-06T16:51:23.311Z"),
    type: "meter_credit",
    description: "suspiciously wherever flu microchip",
    selectable: false,
    deletable: true,
    isDeleted: true,
    organizationId: "<value>",
    metadata: {
      "key": 7257.4,
    },
    properties: {
      units: 507849,
      rollover: false,
      meterId: "<value>",
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
| `customer`                                                                                    | *components.Customer*                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.Member](../../models/components/member.md)                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `benefit`                                                                                     | *components.Benefit*                                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | *components.Properties*                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |