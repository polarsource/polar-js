# BenefitGrantWebhook

## Example Usage

```typescript
import { BenefitGrantWebhook } from "@polar-sh/sdk/models/components/benefitgrantwebhook.js";

let value: BenefitGrantWebhook = {
  createdAt: new Date("2024-05-10T08:04:00.367Z"),
  modifiedAt: new Date("2023-10-31T16:22:57.100Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  customer: {
    createdAt: new Date("2023-03-02T22:30:52.651Z"),
    modifiedAt: new Date("2023-12-04T11:57:18.685Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    externalId: "<id>",
    email: "Dangelo.Ernser83@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Saint Helena",
    },
    taxId: [
      "bo_tin",
    ],
    organizationId: "<value>",
    avatarUrl: "https://known-section.name",
  },
  properties: {},
  benefit: {
    createdAt: new Date("2024-06-13T05:21:09.862Z"),
    modifiedAt: new Date("2025-09-06T22:38:24.153Z"),
    id: "<value>",
    description:
      "bravely fill essence coincide transparency below wholly barring how scrutinise",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      note: "<value>",
    },
    isTaxApplicable: false,
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the grant.                                                                                                    |
| `grantedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                                      |
| `isGranted`                                                                                                             | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the benefit is granted.                                                                                         |
| `revokedAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_minus_sign:                                                                                                      | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                                      |
| `isRevoked`                                                                                                             | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the benefit is revoked.                                                                                         |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the subscription that granted this benefit.                                                                   |
| `orderId`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the order that granted this benefit.                                                                          |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the customer concerned by this grant.                                                                         |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `benefitId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the benefit concerned by this grant.                                                                          |
| `customer`                                                                                                              | [components.Customer](../../models/components/customer.md)                                                              | :heavy_check_mark:                                                                                                      | A customer in an organization.                                                                                          |
| `properties`                                                                                                            | *components.BenefitGrantWebhookProperties*                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `benefit`                                                                                                               | *components.Benefit*                                                                                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `previousProperties`                                                                                                    | *components.PreviousProperties*                                                                                         | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |