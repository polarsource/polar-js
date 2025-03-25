# BenefitGitHubRepositorySubscriber

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriber } from "@polar-sh/sdk/models/components/benefitgithubrepositorysubscriber.js";

let value: BenefitGitHubRepositorySubscriber = {
  createdAt: new Date("2025-05-29T11:27:32.508Z"),
  modifiedAt: new Date("2024-09-07T09:12:50.878Z"),
  id: "<value>",
  description: "colonialism for that off underneath concerning management",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-05-12T15:20:34.562Z"),
    modifiedAt: new Date("2024-12-04T12:38:16.171Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://elastic-overload.biz",
    email: "Donato34@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "github",
        url: "https://basic-procurement.name/",
      },
    ],
    detailsSubmittedAt: new Date("2024-06-03T20:31:20.070Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Sporer, Schuster and Swift",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 777025,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 139437,
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