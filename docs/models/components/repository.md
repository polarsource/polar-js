# Repository

## Example Usage

```typescript
import { Repository } from "@polar-sh/sdk/models/components/repository.js";

let value: Repository = {
  id: "65e28620-cd98-4ec4-9497-c4a0d922f084",
  platform: "github",
  isPrivate: false,
  name: "MyOrg",
  description: "netsuke phew separately versus beautifully famously",
  stars: 1337,
  license: "<value>",
  homepage: "<value>",
  profileSettings: {},
  organization: {
    id: "265125ed-6105-4e80-919c-b542139a5e58",
    platform: "github",
    name: "<value>",
    avatarUrl: "https://wrong-fundraising.biz",
    isPersonal: false,
    bio: "<value>",
    prettyName: "<value>",
    company: "Schiller LLC",
    blog: "<value>",
    location: "<value>",
    email: "Fatima42@hotmail.com",
    twitterUsername: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  internalOrganization: {
    createdAt: new Date("2023-12-07T12:59:55.318Z"),
    modifiedAt: new Date("2023-08-01T21:21:15.803Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://afraid-linseed.name",
    email: "Ole6@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "instagram",
        url: "https://distant-newsstand.info",
      },
    ],
    detailsSubmittedAt: new Date("2024-07-28T07:12:05.059Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Haag - Marks",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 893244,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 297338,
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