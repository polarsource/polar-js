# BenefitGrant

## Example Usage

```typescript
import { BenefitGrant } from "@polar-sh/sdk/models/components/benefitgrant.js";

let value: BenefitGrant = {
  createdAt: new Date("2024-11-19T05:40:00.333Z"),
  modifiedAt: new Date("2025-10-18T12:49:42.272Z"),
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
    createdAt: new Date("2024-04-06T10:06:23.670Z"),
    modifiedAt: new Date("2024-11-28T16:15:54.686Z"),
    metadata: {
      "key": 473938,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-10-14T06:29:58.286Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  properties: {},
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
| `properties`                                                                                                            | *components.Properties*                                                                                                 | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |