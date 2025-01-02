# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components";

let value: Repository = {
  id: "f52c0140-fb8c-4a23-ad57-60b8a4636afa",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "entry mid custom kinase mainstream smoothly",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "c35a697c-dd99-4704-917d-9a342d482155",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://gigantic-rule.com",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Ortiz - Mitchell",
    blog: "<value>",
    location: "<value>",
    email: "Idell.Murray@gmail.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2023-10-29T06:42:22.472Z"),
    modifiedAt: new Date("2025-03-30T04:46:00.514Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://crooked-advertisement.org/",
    bio: "<value>",
    company: "Larson Group",
    blog: "<value>",
    location: "<value>",
    email: "Estella.Prohaska@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 28088,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 426152,
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