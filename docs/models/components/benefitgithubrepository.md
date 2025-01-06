# BenefitGitHubRepository

A benefit of type `github_repository`.

Use it to automatically invite your backers to a private GitHub repository.

## Example Usage

```typescript
import { BenefitGitHubRepository } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepository = {
  createdAt: new Date("2025-09-25T03:42:59.679Z"),
  modifiedAt: new Date("2024-07-05T20:47:44.778Z"),
  id: "<value>",
  description: "once louse deployment circa trolley from deduction",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "triage",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit.                                                                                       |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `properties`                                                                                                 | [components.BenefitGitHubRepositoryProperties](../../models/components/benefitgithubrepositoryproperties.md) | :heavy_check_mark:                                                                                           | Properties for a benefit of type `github_repository`.                                                        |