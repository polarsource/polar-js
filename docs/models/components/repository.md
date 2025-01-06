# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components";

let value: Repository = {
  id: "38c0919d-37c2-42eb-9bd8-78b612f0bf2b",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "pish except entire queasily",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "475833b6-3d61-4b49-b9f3-4eb7b66284a6",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://crazy-mousse.net",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Bruen LLC",
    blog: "<value>",
    location: "<value>",
    email: "Eric.Hane73@yahoo.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2025-06-01T14:18:08.175Z"),
    modifiedAt: new Date("2025-12-09T03:51:03.988Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://sturdy-colonialism.net/",
    bio: "<value>",
    company: "Larson, Funk and Crooks",
    blog: "<value>",
    location: "<value>",
    email: "Ephraim76@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 636775,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 957139,
    profileSettings: {},
    featureSettings: {},
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