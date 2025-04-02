# BenefitGitHubRepositoryCreate

## Example Usage

```typescript
import { BenefitGitHubRepositoryCreate } from "@polar-sh/sdk/models/components/benefitgithubrepositorycreate.js";

let value: BenefitGitHubRepositoryCreate = {
  description:
    "subsidy depart indeed horn anti judgementally yearningly despite exalted obstruct",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "triage",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The description of the benefit. Will be displayed on products having this benefit.                                       |                                                                                                                          |
| `organizationId`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The ID of the organization owning the benefit. **Required unless you use an organization token.**                        | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                     |
| `properties`                                                                                                             | [components.BenefitGitHubRepositoryCreateProperties](../../models/components/benefitgithubrepositorycreateproperties.md) | :heavy_check_mark:                                                                                                       | Properties to create a benefit of type `github_repository`.                                                              |                                                                                                                          |