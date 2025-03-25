# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "76f05d75-9654-45ef-81ba-a04b708dee87",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description:
    "er jellyfish psst on communicate beyond simple into sympathetically",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "491391b7-4da1-4a3e-8293-f59279c8bd45",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://winding-recommendation.org",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Rogahn Group",
    blog: "<value>",
    location: "<value>",
    email: "Luigi.Bartell@yahoo.com",
    twitterUsername: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  internalOrganization: {
    createdAt: new Date("2024-05-06T10:50:37.185Z"),
    modifiedAt: new Date("2025-07-27T08:56:13.386Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://plump-statue.net/",
    email: "Amelia.Dare@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "tiktok",
        url: "https://downright-metal.net/",
      },
    ],
    detailsSubmittedAt: new Date("2025-01-31T16:00:33.103Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Kuvalis - Kuhn",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 321582,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 686421,
    profileSettings: {},
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `platform`                                                                                   | [components.Platforms](../../models/components/platforms.md)                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `isPrivate`                                                                                  | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | MyOrg                                                                                        |
| `description`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `stars`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 1337                                                                                         |
| `license`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `homepage`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `profileSettings`                                                                            | [components.RepositoryProfileSettings](../../models/components/repositoryprofilesettings.md) | :heavy_check_mark:                                                                           | Settings for the repository profile                                                          |                                                                                              |
| `organization`                                                                               | [components.ExternalOrganization](../../models/components/externalorganization.md)           | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `internalOrganization`                                                                       | [components.Organization](../../models/components/organization.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |