# BenefitGrantWebhook

## Example Usage

```typescript
import { BenefitGrantWebhook } from "@polar-sh/sdk/models/components/benefitgrantwebhook.js";

let value: BenefitGrantWebhook = {
  createdAt: new Date("2025-05-20T06:29:58.394Z"),
  modifiedAt: new Date("2025-04-20T07:46:05.447Z"),
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
    createdAt: new Date("2024-08-03T22:31:58.796Z"),
    modifiedAt: new Date("2025-03-23T10:27:37.150Z"),
    metadata: {
      "key": false,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "SE",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2023-07-03T18:19:30.365Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  properties: {},
  benefit: {
    createdAt: new Date("2023-12-27T22:17:00.210Z"),
    modifiedAt: new Date("2024-02-10T10:41:30.057Z"),
    id: "<value>",
    description: "toward while fooey democratize or er um twin elver",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "maintain",
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