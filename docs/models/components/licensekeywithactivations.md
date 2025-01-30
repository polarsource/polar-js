# LicenseKeyWithActivations

## Example Usage

```typescript
import { LicenseKeyWithActivations } from "@polar-sh/sdk/models/components/licensekeywithactivations.js";

let value: LicenseKeyWithActivations = {
  id: "<value>",
  organizationId: "<value>",
  userId: "<value>",
  customerId: "<value>",
  user: {
    id: "<value>",
    email: "Cloyd.Ritchie-Bode@yahoo.com",
    publicName: "<value>",
  },
  customer: {
    createdAt: new Date("2025-06-20T15:53:40.277Z"),
    modifiedAt: new Date("2023-03-15T03:56:16.597Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Lindsey_Senger-Douglas@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Tunisia",
    },
    taxId: [
      "ca_bn",
    ],
    organizationId: "<value>",
    avatarUrl: "https://utilized-birdbath.com/",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "revoked",
  limitActivations: 224337,
  usage: 826099,
  limitUsage: 416006,
  validations: 482400,
  lastValidatedAt: new Date("2023-05-21T23:41:53.158Z"),
  expiresAt: new Date("2023-01-31T20:48:56.127Z"),
  activations: [
    {
      id: "<value>",
      licenseKeyId: "<value>",
      label: "<value>",
      meta: {},
      createdAt: new Date("2025-04-12T02:56:59.471Z"),
      modifiedAt: new Date("2023-03-23T02:13:30.603Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `organizationId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `user`                                                                                                                  | [components.LicenseKeyUser](../../models/components/licensekeyuser.md)                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customer`                                                                                                              | [components.LicenseKeyCustomer](../../models/components/licensekeycustomer.md)                                          | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `benefitId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The benefit ID.                                                                                                         |
| `key`                                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `displayKey`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `status`                                                                                                                | [components.LicenseKeyStatus](../../models/components/licensekeystatus.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `limitActivations`                                                                                                      | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `usage`                                                                                                                 | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `limitUsage`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `validations`                                                                                                           | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `lastValidatedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `expiresAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `activations`                                                                                                           | [components.LicenseKeyActivationBase](../../models/components/licensekeyactivationbase.md)[]                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |