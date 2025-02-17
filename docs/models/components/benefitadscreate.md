# BenefitAdsCreate

## Example Usage

```typescript
import { BenefitAdsCreate } from "@polar-sh/sdk/models/components/benefitadscreate.js";

let value: BenefitAdsCreate = {
  description: "resource better corner positively lobster",
  properties: {},
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `type`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `description`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | The description of the benefit. Will be displayed on products having this benefit.                |
| `organizationId`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | The ID of the organization owning the benefit. **Required unless you use an organization token.** |
| `properties`                                                                                      | [components.BenefitAdsProperties](../../models/components/benefitadsproperties.md)                | :heavy_check_mark:                                                                                | Properties for a benefit of type `ads`.                                                           |