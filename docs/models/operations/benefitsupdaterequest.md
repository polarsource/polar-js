# BenefitsUpdateRequest

## Example Usage

```typescript
import { BenefitsUpdateRequest } from "@polar-sh/sdk/models/operations/benefitsupdate.js";

let value: BenefitsUpdateRequest = {
  id: "<value>",
  requestBody: {
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "maintain",
    },
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `id`                                     | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `requestBody`                            | *operations.BenefitsUpdateBenefitUpdate* | :heavy_check_mark:                       | N/A                                      |