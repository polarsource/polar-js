# BenefitGrantMetadata

## Example Usage

```typescript
import { BenefitGrantMetadata } from "@polar-sh/sdk/models/components/benefitgrantmetadata.js";

let value: BenefitGrantMetadata = {
  benefitId: "<id>",
  benefitGrantId: "<id>",
  benefitType: "downloadables",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `benefitId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `benefitGrantId`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `benefitType`                                                    | [components.BenefitType](../../models/components/benefittype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `memberId`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |