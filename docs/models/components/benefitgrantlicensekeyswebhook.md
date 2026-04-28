# BenefitGrantLicenseKeysWebhook

## Example Usage

```typescript
import { BenefitGrantLicenseKeysWebhook } from "@polar-sh/sdk/models/components/benefitgrantlicensekeyswebhook.js";

let value: BenefitGrantLicenseKeysWebhook = {
  createdAt: new Date("2024-03-27T04:10:14.057Z"),
  modifiedAt: new Date("2026-11-09T06:34:32.498Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-12-24T12:07:36.548Z"),
    modifiedAt: new Date("2025-12-03T11:49:28.207Z"),
    metadata: {},
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
    deletedAt: new Date("2026-12-15T07:47:35.269Z"),
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
    createdAt: new Date("2025-10-15T22:21:01.919Z"),
    modifiedAt: new Date("2024-02-16T12:33:48.786Z"),
    type: "license_keys",
    description: "ouch woot geez wheel analyse duh",
    selectable: false,
    deletable: false,
    isDeleted: true,
    organizationId: "<value>",
    metadata: {},
    properties: {
      prefix: "<value>",
      expires: null,
      activations: {
        limit: 240022,
        enableCustomerAdmin: false,
      },
      limitUsage: null,
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the grant.                                                                                         |
| `grantedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                           |
| `isGranted`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is granted.                                                                              |
| `revokedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                           |
| `isRevoked`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is revoked.                                                                              |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the subscription that granted this benefit.                                                        |
| `orderId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the order that granted this benefit.                                                               |
| `customerId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the customer concerned by this grant.                                                              |
| `memberId`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The ID of the member concerned by this grant.                                                                |
| `benefitId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit concerned by this grant.                                                               |
| `error`                                                                                                      | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                 | :heavy_minus_sign:                                                                                           | The error information if the benefit grant failed with an unrecoverable error.                               |
| `customer`                                                                                                   | *components.Customer*                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `member`                                                                                                     | [components.Member](../../models/components/member.md)                                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `benefit`                                                                                                    | [components.BenefitLicenseKeys](../../models/components/benefitlicensekeys.md)                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantLicenseKeysProperties](../../models/components/benefitgrantlicensekeysproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `previousProperties`                                                                                         | [components.BenefitGrantLicenseKeysProperties](../../models/components/benefitgrantlicensekeysproperties.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |