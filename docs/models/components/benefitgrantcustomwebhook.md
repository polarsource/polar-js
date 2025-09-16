# BenefitGrantCustomWebhook

## Example Usage

```typescript
import { BenefitGrantCustomWebhook } from "@polar-sh/sdk/models/components/benefitgrantcustomwebhook.js";

let value: BenefitGrantCustomWebhook = {
  createdAt: new Date("2023-04-19T19:54:48.401Z"),
  modifiedAt: new Date("2025-04-22T15:54:09.627Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
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
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-01-20T02:50:19.451Z"),
    modifiedAt: new Date("2024-06-16T20:41:24.432Z"),
    type: "custom",
    description: "cassava vainly vague father",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      note: "<value>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Creation timestamp of the object.                                                                     |
| `modifiedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Last modification timestamp of the object.                                                            |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the grant.                                                                                  |
| `grantedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                    |
| `isGranted`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Whether the benefit is granted.                                                                       |
| `revokedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                    |
| `isRevoked`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | Whether the benefit is revoked.                                                                       |
| `subscriptionId`                                                                                      | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the subscription that granted this benefit.                                                 |
| `orderId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the order that granted this benefit.                                                        |
| `customerId`                                                                                          | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the customer concerned by this grant.                                                       |
| `benefitId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of the benefit concerned by this grant.                                                        |
| `error`                                                                                               | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                          | :heavy_minus_sign:                                                                                    | The error information if the benefit grant failed with an unrecoverable error.                        |
| `customer`                                                                                            | [components.Customer](../../models/components/customer.md)                                            | :heavy_check_mark:                                                                                    | A customer in an organization.                                                                        |
| `benefit`                                                                                             | [components.BenefitCustom](../../models/components/benefitcustom.md)                                  | :heavy_check_mark:                                                                                    | A benefit of type `custom`.<br/><br/>Use it to grant any kind of benefit that doesn't fit in the other types. |
| `properties`                                                                                          | [components.BenefitGrantCustomProperties](../../models/components/benefitgrantcustomproperties.md)    | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `previousProperties`                                                                                  | [components.BenefitGrantCustomProperties](../../models/components/benefitgrantcustomproperties.md)    | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |