# BenefitGitHubRepository

A benefit of type `github_repository`.

Use it to automatically invite your backers to a private GitHub repository.

## Example Usage

```typescript
import { BenefitGitHubRepository } from "@polar-sh/sdk/models/components/benefitgithubrepository.js";

let value: BenefitGitHubRepository = {
  id: "<value>",
  createdAt: new Date("2026-09-20T17:50:31.812Z"),
  modifiedAt: new Date("2024-09-08T10:06:16.908Z"),
  type: "github_repository",
  description: "hoarse secrecy entwine stunning energetically",
  selectable: true,
  deletable: true,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
    permission: "admin",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit.                                                                                       |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `type`                                                                                                       | *"github_repository"*                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `metadata`                                                                                                   | Record<string, *components.MetadataOutputType*>                                                              | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGitHubRepositoryProperties](../../models/components/benefitgithubrepositoryproperties.md) | :heavy_check_mark:                                                                                           | Properties for a benefit of type `github_repository`.                                                        |