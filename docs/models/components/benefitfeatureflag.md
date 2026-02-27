# BenefitFeatureFlag

A benefit of type `feature_flag`.

Use it to grant feature flags with key-value metadata
that can be queried via the API and webhooks.

## Example Usage

```typescript
import { BenefitFeatureFlag } from "@polar-sh/sdk/models/components/benefitfeatureflag.js";

let value: BenefitFeatureFlag = {
  id: "<value>",
  createdAt: new Date("2026-01-23T21:17:09.985Z"),
  modifiedAt: new Date("2026-03-18T19:56:22.426Z"),
  type: "feature_flag",
  description: "while dreary bestride revoke continually hm so terrible",
  selectable: true,
  deletable: true,
  organizationId: "<value>",
  metadata: {},
  properties: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the benefit.                                                                             |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `type`                                                                                             | *"feature_flag"*                                                                                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the benefit.                                                                    |
| `selectable`                                                                                       | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is selectable when creating a product.                                         |
| `deletable`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the benefit is deletable.                                                                  |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the organization owning the benefit.                                                     |
| `metadata`                                                                                         | Record<string, *components.MetadataOutputType*>                                                    | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | [components.BenefitFeatureFlagProperties](../../models/components/benefitfeatureflagproperties.md) | :heavy_check_mark:                                                                                 | Properties for a benefit of type `feature_flag`.                                                   |