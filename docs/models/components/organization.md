# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components";

let value: Organization = {
  createdAt: new Date("2022-11-22T08:25:04.194Z"),
  modifiedAt: new Date("2023-03-12T00:12:11.849Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://ultimate-smoke.net/",
  bio: "<value>",
  company: "Lynch - Feil",
  blog: "<value>",
  location: "<value>",
  email: "Oswald_Kutch@gmail.com",
  twitterUsername: "<value>",
  pledgeMinimumAmount: 52819,
  pledgeBadgeShowAmount: false,
  defaultUpfrontSplitToContributors: 72,
  profileSettings: {},
  featureSettings: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Creation timestamp of the object.                                                                |
| `modifiedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | Last modification timestamp of the object.                                                       |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | The organization ID.                                                                             |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `slug`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `avatarUrl`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `bio`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `company`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `blog`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `location`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `email`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `twitterUsername`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pledgeMinimumAmount`                                                                            | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pledgeBadgeShowAmount`                                                                          | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `defaultUpfrontSplitToContributors`                                                              | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `profileSettings`                                                                                | [components.OrganizationProfileSettings](../../models/components/organizationprofilesettings.md) | :heavy_check_mark:                                                                               | Settings for the organization profile                                                            |
| `featureSettings`                                                                                | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md) | :heavy_check_mark:                                                                               | Settings for the organization features                                                           |