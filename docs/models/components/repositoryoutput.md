# RepositoryOutput

## Example Usage

```typescript
import { RepositoryOutput } from "@polar-sh/sdk/models/components";

let value: RepositoryOutput = {
  id: "01f61700-8395-42f3-a044-45c051f277c4",
  isPrivate: false,
  name: "MyOrg",
  description: "yowza yowza more",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "4eeb0a34-2973-4e3c-b02d-8a6622e77a08",
    name: "<value>",
    avatarUrl: "https://indelible-ignorance.org/",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Rogahn LLC",
    blog: "<value>",
    location: "<value>",
    email: "Weston.McClure@gmail.com",
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