# BenefitGitHubRepositorySubscriber

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriber } from "@polar-sh/sdk/models/components/benefitgithubrepositorysubscriber.js";

let value: BenefitGitHubRepositorySubscriber = {
  createdAt: new Date("2025-04-15T22:53:38.434Z"),
  modifiedAt: new Date("2025-12-06T21:44:01.922Z"),
  id: "<value>",
  description: "aside soupy instead whether",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-04-06T10:57:38.658Z"),
    modifiedAt: new Date("2024-04-10T15:34:25.525Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://awful-meadow.info",
    email: "Jazmyne.Brown@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "instagram",
        url: "https://concrete-exploration.info",
      },
    ],
    detailsSubmittedAt: new Date("2024-02-10T11:32:18.130Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Waters, Hartmann and Heidenreich",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 382232,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 124429,
    profileSettings: {},
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