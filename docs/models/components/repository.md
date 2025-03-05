# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "86cbb806-770a-4408-8e00-9801d712950a",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "clonk very out",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "442c74fc-9c1a-45bf-8c9b-740a27ae937a",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://snarling-license.org",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Lind - Trantow",
    blog: "<value>",
    location: "<value>",
    email: "Rae.Marquardt@hotmail.com",
    twitterUsername: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  internalOrganization: {
    createdAt: new Date("2024-11-16T12:51:27.102Z"),
    modifiedAt: new Date("2024-11-07T23:11:32.353Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://steel-bar.org",
    bio: "<value>",
    company: "Dach and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Helen40@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 431723,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 754872,
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