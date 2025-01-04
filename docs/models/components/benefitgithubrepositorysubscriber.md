# BenefitGitHubRepositorySubscriber

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositorySubscriber = {
  createdAt: new Date("2025-10-26T21:27:50.253Z"),
  modifiedAt: new Date("2023-04-20T04:28:39.456Z"),
  id: "<value>",
  description: "coaxingly unlike married behind whether",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-01-10T11:58:44.248Z"),
    modifiedAt: new Date("2023-04-25T03:34:55.800Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://apt-coast.com",
    bio: "<value>",
    company: "Harber LLC",
    blog: "<value>",
    location: "<value>",
    email: "Elmira_Rogahn@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 796898,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 871210,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    repositoryOwner: "polarsource",
    repositoryName: "private_repo",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_check_mark:                                                                                                               | Creation timestamp of the object.                                                                                                |
| `modifiedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_check_mark:                                                                                                               | Last modification timestamp of the object.                                                                                       |
| `id`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the benefit.                                                                                                           |
| `type`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The description of the benefit.                                                                                                  |
| `selectable`                                                                                                                     | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | Whether the benefit is selectable when creating a product.                                                                       |
| `deletable`                                                                                                                      | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | Whether the benefit is deletable.                                                                                                |
| `organizationId`                                                                                                                 | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the organization owning the benefit.                                                                                   |
| `organization`                                                                                                                   | [components.Organization](../../models/components/organization.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `properties`                                                                                                                     | [components.BenefitGitHubRepositorySubscriberProperties](../../models/components/benefitgithubrepositorysubscriberproperties.md) | :heavy_check_mark:                                                                                                               | Properties available to subscribers for a benefit of type `github_repository`.                                                   |