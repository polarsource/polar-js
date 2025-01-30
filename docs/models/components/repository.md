# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "6336156d-e449-4250-a618-af33fd9d3dd3",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description:
    "beside prance before fondly gosh drain tasty arrogantly address excluding",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "19365a61-38c0-4919-8d37-c22ebbd878b6",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://winged-atrium.net/",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Christiansen, Reichert and Gutmann",
    blog: "<value>",
    location: "<value>",
    email: "Royce17@gmail.com",
    twitterUsername: "<value>",
    organizationId: "<value>",
  },
  internalOrganization: {
    createdAt: new Date("2025-08-23T20:08:02.439Z"),
    modifiedAt: new Date("2023-12-16T06:21:27.186Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://ugly-advertisement.org",
    bio: "<value>",
    company: "Jerde LLC",
    blog: "<value>",
    location: "<value>",
    email: "Mireya_Kuhlman23@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 678638,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 702212,
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