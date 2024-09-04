# BenefitGitHubRepositoryCreate

## Example Usage

```typescript
import { BenefitGitHubRepositoryCreate } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositoryCreate = {
    description: "Fundamental global toolset",
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
| `type`                                                                                                                   | [components.BenefitGitHubRepositoryCreateType](../../models/components/benefitgithubrepositorycreatetype.md)             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The description of the benefit. Will be displayed on products having this benefit.                                       |
| `organizationId`                                                                                                         | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The ID of the organization owning the benefit. **Required unless you use an organization token.**                        |
| `properties`                                                                                                             | [components.BenefitGitHubRepositoryCreateProperties](../../models/components/benefitgithubrepositorycreateproperties.md) | :heavy_check_mark:                                                                                                       | Properties to create a benefit of type `github_repository`.                                                              |