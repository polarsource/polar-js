# BenefitGitHubRepositorySubscriber

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitGitHubRepositorySubscriber = {
  createdAt: new Date("2022-04-01T09:54:32.778Z"),
  modifiedAt: new Date("2023-06-05T20:01:47.770Z"),
  id: "<value>",
  description: "ha tremendously likewise vanadyl broadly",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-06-06T08:49:54.446Z"),
      modifiedAt: new Date("2024-09-18T19:37:34.618Z"),
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
    createdAt: new Date("2023-06-25T07:10:39.639Z"),
    modifiedAt: new Date("2024-01-28T01:47:04.369Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://elderly-chow.name/",
    bio: "<value>",
    company: "Beier - Gutkowski",
    blog: "<value>",
    location: "<value>",
    email: "Koby.Skiles@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 478216,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 445973,
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