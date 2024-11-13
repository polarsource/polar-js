# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components";

let value: Repository = {
  id: "33b7ac97-682c-4ecd-9d2f-a6e9fc5bb5e2",
  isPrivate: false,
  name: "MyOrg",
  description:
    "emphasise signature but shyly idealistic maroon ameliorate lest",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "1b5220cb-746e-4103-8801-b7fe46e95cea",
    name: "<value>",
    avatarUrl: "https://innocent-precedent.info",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Bernhard, Crist and Dietrich",
    blog: "<value>",
    location: "<value>",
    email: "Darron.Pouros23@gmail.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2023-03-13T23:04:07.056Z"),
    modifiedAt: new Date("2024-11-16T14:49:58.732Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://friendly-bathrobe.info/",
    bio: "<value>",
    company: "Ruecker - Brown",
    blog: "<value>",
    location: "<value>",
    email: "Dudley_Stamm57@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 318878,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 592218,
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