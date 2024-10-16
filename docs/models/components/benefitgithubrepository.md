# BenefitGitHubRepository

A benefit of type `github_repository`.

Use it to automatically invite your backers to a private GitHub repository.

## Example Usage

```typescript
import { BenefitGitHubRepository } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepository = {
  createdAt: new Date("2023-02-10T13:04:40.129Z"),
  modifiedAt: new Date("2023-09-24T23:30:10.421Z"),
  id: "<value>",
  description:
    "versus shoulder whereas around generously from intensely underneath what",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    repositoryId: "<value>",
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "admin",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit.                                                                                       |
| `type`                                                                                                       | [components.BenefitGitHubRepositoryType](../../models/components/benefitgithubrepositorytype.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `properties`                                                                                                 | [components.BenefitGitHubRepositoryProperties](../../models/components/benefitgithubrepositoryproperties.md) | :heavy_check_mark:                                                                                           | Properties for a benefit of type `github_repository`.                                                        |