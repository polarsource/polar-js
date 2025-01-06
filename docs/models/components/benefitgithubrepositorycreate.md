# BenefitGitHubRepositoryCreate

## Example Usage

```typescript
import { BenefitGitHubRepositoryCreate } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositoryCreate = {
  description:
    "furthermore pulse notwithstanding incidentally interestingly gape notwithstanding onto fortunately per",
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "push",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The description of the benefit. Will be displayed on products having this benefit.                                       |
| `organizationId`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The ID of the organization owning the benefit. **Required unless you use an organization token.**                        |
| `properties`                                                                                                             | [components.BenefitGitHubRepositoryCreateProperties](../../models/components/benefitgithubrepositorycreateproperties.md) | :heavy_check_mark:                                                                                                       | Properties to create a benefit of type `github_repository`.                                                              |