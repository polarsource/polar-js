# BenefitDownloadablesCreate

## Example Usage

```typescript
import { BenefitDownloadablesCreate } from "@polar-sh/sdk/models/components/benefitdownloadablescreate.js";

let value: BenefitDownloadablesCreate = {
  description: "uselessly yowza whoever shallow fit lock huzzah",
  properties: {
    files: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The description of the benefit. Will be displayed on products having this benefit.                                 |
| `organizationId`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The ID of the organization owning the benefit. **Required unless you use an organization token.**                  |
| `properties`                                                                                                       | [components.BenefitDownloadablesCreateProperties](../../models/components/benefitdownloadablescreateproperties.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |