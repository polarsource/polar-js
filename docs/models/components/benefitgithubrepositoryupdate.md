# BenefitGitHubRepositoryUpdate

## Example Usage

```typescript
import { BenefitGitHubRepositoryUpdate } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositoryUpdate = {
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "maintain",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The description of the benefit. Will be displayed on products having this benefit.                                       |
| `type`                                                                                                                   | [components.BenefitGitHubRepositoryUpdateType](../../models/components/benefitgithubrepositoryupdatetype.md)             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `properties`                                                                                                             | [components.BenefitGitHubRepositoryCreateProperties](../../models/components/benefitgithubrepositorycreateproperties.md) | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |