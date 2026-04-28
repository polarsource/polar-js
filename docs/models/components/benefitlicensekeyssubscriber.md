# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components/benefitlicensekeyssubscriber.js";

let value: BenefitLicenseKeysSubscriber = {
  id: "<value>",
  createdAt: new Date("2025-07-17T05:09:36.262Z"),
  modifiedAt: null,
  type: "license_keys",
  description: "allegation properly editor quinoa mortally",
  selectable: false,
  deletable: false,
  isDeleted: false,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  organization: {
    createdAt: new Date("2026-08-25T19:07:42.873Z"),
    modifiedAt: new Date("2025-12-26T12:35:13.942Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: null,
    prorationBehavior: "reset",
    allowCustomerUpdates: false,
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 708691,
      timeframe: "day",
    },
    activations: {
      limit: 240022,
      enableCustomerAdmin: false,
    },
    limitUsage: 441892,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `type`                                                                                                                 | *"license_keys"*                                                                                                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `isDeleted`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deleted.                                                                                        |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `metadata`                                                                                                             | Record<string, *components.MetadataOutputType*>                                                                        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitLicenseKeysSubscriberProperties](../../models/components/benefitlicensekeyssubscriberproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |