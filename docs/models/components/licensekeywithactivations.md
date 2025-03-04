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
    email: "Rubye_Balistreri@gmail.com",
    publicName: "<value>",
  },
  customer: {
    createdAt: new Date("2025-04-25T07:01:38.359Z"),
    modifiedAt: new Date("2024-03-28T16:57:44.341Z"),
    id: "<value>",
    metadata: {
      "key": 546439,
    },
    externalId: "<id>",
    email: "Jaunita73@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Australia",
    },
    taxId: [
      "<id>",
    ],
    organizationId: "<value>",
    avatarUrl: "https://joyful-newsstand.name",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "granted",
  limitActivations: 731105,
  usage: 58312,
  limitUsage: 537963,
  validations: 552638,
  lastValidatedAt: new Date("2023-08-10T05:25:17.901Z"),
  expiresAt: new Date("2025-04-02T11:09:31.783Z"),
  activations: [
    {
      id: "<value>",
      licenseKeyId: "<value>",
      label: "<value>",
      meta: {},
      createdAt: new Date("2025-09-09T05:02:05.909Z"),
      modifiedAt: new Date("2025-12-09T01:24:16.778Z"),
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