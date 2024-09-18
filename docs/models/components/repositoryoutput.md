# RepositoryOutput

## Example Usage

```typescript
import { RepositoryOutput } from "@polar-sh/sdk/models/components";

let value: RepositoryOutput = {
  id: "ea19f1d1-7051-4339-9080-86a1840394c2",
  isPrivate: false,
  name: "MyOrg",
  description: "Implemented 24/7 initiative",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "1f93f5f0-642d-4ac7-af51-5cc413aa63aa",
    name: "<value>",
    avatarUrl: "<value>",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Larson, Stehr and Kassulke",
    blog: "<value>",
    location: "<value>",
    email: "Kayla82@yahoo.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
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