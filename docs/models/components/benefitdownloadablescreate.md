# BenefitDownloadablesCreate

## Example Usage

```typescript
import { BenefitDownloadablesCreate } from "@polar-sh/sdk/models/components/benefitdownloadablescreate.js";

let value: BenefitDownloadablesCreate = {
  description: "formal operating duh scar masculinize interestingly",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {
    files: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `description`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The description of the benefit. Will be displayed on products having this benefit.                                 |                                                                                                                    |
| `organizationId`                                                                                                   | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The ID of the organization owning the benefit. **Required unless you use an organization token.**                  | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                               |
| `properties`                                                                                                       | [components.BenefitDownloadablesCreateProperties](../../models/components/benefitdownloadablescreateproperties.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |