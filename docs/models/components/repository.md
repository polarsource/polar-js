# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "14000300-3c0f-4ada-9c44-a982386f86f1",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "putrefy boo feather sans impressionable",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "b2879ad3-609e-46f9-a38a-aa333b7ac976",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://spiteful-thyme.net/",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Simonis, Dare and Zieme",
    blog: "<value>",
    location: "<value>",
    email: "Helena_McCullough@yahoo.com",
    twitterUsername: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  internalOrganization: {
    createdAt: new Date("2025-03-24T20:21:24.388Z"),
    modifiedAt: new Date("2025-03-11T04:48:45.754Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://unfinished-character.info/",
    email: "Javonte75@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "facebook",
        url: "https://jubilant-granny.name/",
      },
    ],
    detailsSubmittedAt: new Date("2023-08-20T21:30:39.014Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Tillman, Orn and Green",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 873245,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 421228,
    profileSettings: {},
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