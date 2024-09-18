# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2022-12-08T21:24:04.186Z"),
  modifiedAt: new Date("2023-08-31T10:47:34.939Z"),
  id: "<value>",
  description: "Integrated composite concept",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 222443,
      timeframe: "year",
    },
    activations: {
      limit: 218749,
      enableUserAdmin: false,
    },
    limitUsage: 944373,
  },
  grants: [
    {
      createdAt: new Date("2023-09-17T06:03:43.855Z"),
      modifiedAt: new Date("2024-03-21T13:08:38.951Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      properties: {
        licenseKeyId: "<value>",
        displayKey: "<value>",
      },
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `type`                                                                                                                 | [components.BenefitLicenseKeysSubscriberType](../../models/components/benefitlicensekeyssubscribertype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `properties`                                                                                                           | [components.BenefitLicenseKeysSubscriberProperties](../../models/components/benefitlicensekeyssubscriberproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `grants`                                                                                                               | [components.BenefitGrantLicenseKeys](../../models/components/benefitgrantlicensekeys.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |