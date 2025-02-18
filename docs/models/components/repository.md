# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "76131825-d98f-46e9-965e-948332bc56c0",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "vanadyl bank shyly rapidly brr",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "d7596545-ef1b-4aa0-84b7-08dee873dcd3",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://unwilling-tomb.name",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Bruen Inc",
    blog: "<value>",
    location: "<value>",
    email: "Shanie.Medhurst@yahoo.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2023-06-25T15:45:12.084Z"),
    modifiedAt: new Date("2024-01-07T12:17:32.844Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://content-costume.org",
    bio: "<value>",
    company: "Cartwright, Gottlieb and Nicolas",
    blog: "<value>",
    location: "<value>",
    email: "Abby.Dickinson28@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 135685,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 144913,
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