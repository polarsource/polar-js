# BenefitGitHubRepositorySubscriberProperties

Properties available to subscribers for a benefit of type `github_repository`.

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriberProperties } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositorySubscriberProperties = {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `repositoryOwner`            | *string*                     | :heavy_check_mark:           | The owner of the repository. | polarsource                  |
| `repositoryName`             | *string*                     | :heavy_check_mark:           | The name of the repository.  | private_repo                 |