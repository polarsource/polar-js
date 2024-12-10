# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components";

let value: Repository = {
  id: "ca009a29-3561-4ff7-84fd-b76c8a9b1623",
  isPrivate: false,
  name: "MyOrg",
  description: "cheerfully yuck statement oof scruple carelessly memorise",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "327ccf66-0dac-47e0-8161-193aed31ff57",
    name: "<value>",
    avatarUrl: "https://insecure-settler.name",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Harvey - Schowalter",
    blog: "<value>",
    location: "<value>",
    email: "Lora_Moen@hotmail.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2024-04-10T11:46:49.394Z"),
    modifiedAt: new Date("2023-02-09T23:07:56.607Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://important-cruelty.biz/",
    bio: "<value>",
    company: "Hane - Hudson",
    blog: "<value>",
    location: "<value>",
    email: "Dakota14@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 342655,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 122365,
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