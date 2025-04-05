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
    email: "Micheal.Stracke94@gmail.com",
    publicName: "<value>",
  },
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-07-28T04:39:52.416Z"),
    modifiedAt: new Date("2025-12-24T23:44:03.773Z"),
    metadata: {
      "key": 120252,
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-10-26T06:39:38.603Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
  },
  benefitId: "<value>",
  key: "<key>",
  displayKey: "<value>",
  status: "revoked",
  limitActivations: 92295,
  usage: 313388,
  limitUsage: 920488,
  validations: 806717,
  lastValidatedAt: new Date("2023-06-23T03:57:02.303Z"),
  expiresAt: new Date("2025-12-24T08:23:21.795Z"),
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