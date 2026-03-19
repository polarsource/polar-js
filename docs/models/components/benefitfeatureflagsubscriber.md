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
  organizationId: "<value>",
  metadata: {},
  organization: {
    createdAt: new Date("2024-02-09T14:46:30.040Z"),
    modifiedAt: new Date("2025-07-28T16:12:54.009Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://spotless-knight.com/",
    prorationBehavior: "prorate",
    allowCustomerUpdates: true,
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
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `metadata`                                                                                                             | Record<string, *components.MetadataOutputType*>                                                                        | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitFeatureFlagSubscriberProperties](../../models/components/benefitfeatureflagsubscriberproperties.md) | :heavy_check_mark:                                                                                                     | Properties available to subscribers for a benefit of type `feature_flag`.                                              |