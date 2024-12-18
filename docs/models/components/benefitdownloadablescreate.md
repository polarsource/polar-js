# BenefitDownloadablesCreate

## Example Usage

```typescript
import { BenefitDownloadablesCreate } from "@polar-sh/sdk/models/components";

let value: BenefitDownloadablesCreate = {
  description: "nor heating weary whereas",
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
| `type`                                                                                                             | [components.BenefitDownloadablesCreateType](../../models/components/benefitdownloadablescreatetype.md)             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The description of the benefit. Will be displayed on products having this benefit.                                 |
| `organizationId`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The ID of the organization owning the benefit. **Required unless you use an organization token.**                  |
| `properties`                                                                                                       | [components.BenefitDownloadablesCreateProperties](../../models/components/benefitdownloadablescreateproperties.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |