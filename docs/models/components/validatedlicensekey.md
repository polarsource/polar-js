# ValidatedLicenseKey

## Example Usage

```typescript
import { ValidatedLicenseKey } from "@polar-sh/sdk/models/components/validatedlicensekey.js";

let value: ValidatedLicenseKey = {
  id: "<value>",
  organizationId: "<value>",
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-08-17T02:59:17.361Z"),
    modifiedAt: new Date("2025-01-27T15:02:56.977Z"),
    metadata: {
      "key": 358677,
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
    deletedAt: new Date("2023-10-06T15:13:44.969Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "revoked",
  limitActivations: 570776,
  usage: 718020,
  limitUsage: 583768,
  validations: 885534,
  lastValidatedAt: new Date("2025-06-12T09:40:53.789Z"),
  expiresAt: new Date("2025-12-31T07:21:14.827Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [components.LicenseKeyCustomer](../../models/components/licensekeycustomer.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The benefit ID.                                                                               |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `displayKey`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.LicenseKeyStatus](../../models/components/licensekeystatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitActivations`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limitUsage`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `validations`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastValidatedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `activation`                                                                                  | [components.LicenseKeyActivationBase](../../models/components/licensekeyactivationbase.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |