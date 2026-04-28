# BenefitFeatureFlagSubscriber

## Example Usage

```typescript
import { BenefitFeatureFlagSubscriber } from "@polar-sh/sdk/models/components/benefitfeatureflagsubscriber.js";

let value: BenefitFeatureFlagSubscriber = {
  id: "<value>",
  createdAt: new Date("2026-09-13T06:31:11.541Z"),
  modifiedAt: new Date("2025-10-15T08:40:49.608Z"),
  type: "feature_flag",
  description: "next fibre matter sharply pressure",
  selectable: true,
  deletable: false,
  isDeleted: true,
  organizationId: "<value>",
  metadata: {
    "key": 915870,
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
  properties: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `type`                                                                                                                 | *"feature_flag"*                                                                                                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `isDeleted`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deleted.                                                                                        |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `metadata`                                                                                                             | Record<string, *components.MetadataOutputType*>                                                                        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitFeatureFlagSubscriberProperties](../../models/components/benefitfeatureflagsubscriberproperties.md) | :heavy_check_mark:                                                                                                     | Properties available to subscribers for a benefit of type `feature_flag`.                                              |