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
    email: "Caden58@gmail.com",
    publicName: "<value>",
  },
  customer: {
    createdAt: new Date("2024-11-15T04:01:56.929Z"),
    modifiedAt: new Date("2024-10-18T12:27:31.429Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    email: "Jamal31@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Niger",
    },
    taxId: [
      "tr_tin",
    ],
    organizationId: "<value>",
    avatarUrl: "https://impassioned-bandwidth.com/",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "revoked",
  limitActivations: 517133,
  usage: 437523,
  limitUsage: 716963,
  validations: 265906,
  lastValidatedAt: new Date("2024-03-30T05:36:59.222Z"),
  expiresAt: new Date("2025-10-25T06:50:26.826Z"),
  activations: [
    {
      id: "<value>",
      licenseKeyId: "<value>",
      label: "<value>",
      meta: {},
      createdAt: new Date("2024-09-13T12:44:39.147Z"),
      modifiedAt: new Date("2025-01-16T20:25:36.336Z"),
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