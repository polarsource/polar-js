# BenefitGitHubRepositorySubscriber

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositorySubscriber = {
  createdAt: new Date("2024-01-17T05:20:40.624Z"),
  modifiedAt: new Date("2024-10-08T23:33:49.995Z"),
  id: "<value>",
  description: "suspiciously youthfully frenetically eek since grade",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-03-30T02:29:26.135Z"),
      modifiedAt: new Date("2024-06-30T02:36:41.216Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
  organization: {
    createdAt: new Date("2022-06-28T11:34:52.703Z"),
    modifiedAt: new Date("2024-04-04T02:08:10.936Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://unimportant-video.com",
    bio: "<value>",
    company: "Schmidt - Crooks",
    blog: "<value>",
    location: "<value>",
    email: "Shanny_Hamill@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 566089,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 575838,
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
| `type`                                                                                                                           | [components.BenefitGitHubRepositorySubscriberType](../../models/components/benefitgithubrepositorysubscribertype.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The description of the benefit.                                                                                                  |
| `selectable`                                                                                                                     | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | Whether the benefit is selectable when creating a product.                                                                       |
| `deletable`                                                                                                                      | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | Whether the benefit is deletable.                                                                                                |
| `organizationId`                                                                                                                 | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the organization owning the benefit.                                                                                   |
| `grants`                                                                                                                         | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `organization`                                                                                                                   | [components.Organization](../../models/components/organization.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `properties`                                                                                                                     | [components.BenefitGitHubRepositorySubscriberProperties](../../models/components/benefitgithubrepositorysubscriberproperties.md) | :heavy_check_mark:                                                                                                               | Properties available to subscribers for a benefit of type `github_repository`.                                                   |