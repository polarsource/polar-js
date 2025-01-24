# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components";

let value: Repository = {
  id: "60633615-6de4-4492-b506-18af33fd9d3d",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "wasabi cutlet silently via",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "24d64b0e-d1cf-479a-84a7-6eced09ba460",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://our-courtroom.info",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Anderson Group",
    blog: "<value>",
    location: "<value>",
    email: "Zack_Carter43@yahoo.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2024-10-19T09:47:09.023Z"),
    modifiedAt: new Date("2023-09-07T22:31:28.438Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://glass-pantyhose.info/",
    bio: "<value>",
    company: "Emmerich - Kutch",
    blog: "<value>",
    location: "<value>",
    email: "Adelia_Buckridge83@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 495515,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 774053,
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