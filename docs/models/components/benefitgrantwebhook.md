# BenefitGrantWebhook

## Example Usage

```typescript
import { BenefitGrantWebhook } from "@polar-sh/sdk/models/components/benefitgrantwebhook.js";

let value: BenefitGrantWebhook = {
  createdAt: new Date("2025-08-08T02:04:00.602Z"),
  modifiedAt: new Date("2023-02-15T08:39:53.949Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: false,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  userId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-03-12T06:24:46.513Z"),
    modifiedAt: new Date("2025-08-01T01:47:59.550Z"),
    metadata: {
      "key": 84620,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2023-12-13T18:22:28.160Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  properties: {},
  benefit: {
    createdAt: new Date("2023-07-03T20:54:21.016Z"),
    modifiedAt: new Date("2023-04-13T08:26:12.730Z"),
    id: "<value>",
    description: "per mid service unaccountably nudge",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 678129,
        timeframe: "year",
      },
      activations: {
        limit: 756641,
        enableCustomerAdmin: false,
      },
      limitUsage: 103328,
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