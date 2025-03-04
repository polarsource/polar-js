# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "32bc56c0-548e-40d8-a9f2-4379b06e7d14",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "husky truthfully extract allocation pish towards on",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "148e790f-7258-423e-bd14-a40b354222fb",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://grandiose-coin.info",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Sanford LLC",
    blog: "<value>",
    location: "<value>",
    email: "Rashad36@gmail.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2023-06-02T00:35:18.950Z"),
    modifiedAt: new Date("2024-07-29T06:26:35.927Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://unused-insolence.com",
    bio: "<value>",
    company: "Gorczany - Schmeler",
    blog: "<value>",
    location: "<value>",
    email: "Leonardo9@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 449100,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 279575,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
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