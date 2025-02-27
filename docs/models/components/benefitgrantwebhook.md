# BenefitGrantWebhook

## Example Usage

```typescript
import { BenefitGrantWebhook } from "@polar-sh/sdk/models/components/benefitgrantwebhook.js";

let value: BenefitGrantWebhook = {
  createdAt: new Date("2024-02-09T00:05:44.146Z"),
  modifiedAt: new Date("2024-12-04T15:42:27.623Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  customer: {
    createdAt: new Date("2023-06-06T03:35:17.126Z"),
    modifiedAt: new Date("2023-11-13T20:42:37.829Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    externalId: "<id>",
    email: "Larue.Brekke95@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Kuwait",
    },
    taxId: [
      "ca_qst",
    ],
    organizationId: "<value>",
    avatarUrl: "https://magnificent-distinction.org/",
  },
  properties: {},
  benefit: {
    createdAt: new Date("2023-01-10T11:10:36.870Z"),
    modifiedAt: new Date("2024-11-20T07:15:29.281Z"),
    id: "<value>",
    description: "design horde though whether",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      archived: {
        "key": false,
      },
      files: [
        "<value>",
      ],
    },
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