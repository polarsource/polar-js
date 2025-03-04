# LicenseKeyRead

## Example Usage

```typescript
import { LicenseKeyRead } from "@polar-sh/sdk/models/components/licensekeyread.js";

let value: LicenseKeyRead = {
  id: "<value>",
  organizationId: "<value>",
  userId: "<value>",
  customerId: "<value>",
  user: {
    id: "<value>",
    email: "Leanne10@gmail.com",
    publicName: "<value>",
  },
  customer: {
    createdAt: new Date("2025-01-16T01:47:37.881Z"),
    modifiedAt: new Date("2025-04-27T04:38:56.421Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    externalId: "<id>",
    email: "Matilda61@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Zimbabwe",
    },
    taxId: [
      "ch_uid",
    ],
    organizationId: "<value>",
    avatarUrl: "https://cavernous-haversack.org/",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "revoked",
  limitActivations: 51733,
  usage: 165911,
  limitUsage: 669678,
  validations: 691226,
  lastValidatedAt: new Date("2023-08-06T01:17:24.651Z"),
  expiresAt: new Date("2025-06-06T21:57:47.252Z"),
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