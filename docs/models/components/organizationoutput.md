# OrganizationOutput

## Example Usage

```typescript
import { OrganizationOutput } from "@polar-sh/sdk/models/components";

let value: OrganizationOutput = {
  createdAt: new Date("2022-10-03T20:43:05.773Z"),
  modifiedAt: new Date("2022-11-25T09:53:46.990Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://strange-bakeware.info/",
  bio: "<value>",
  company: "Wunsch - Considine",
  blog: "<value>",
  location: "<value>",
  email: "Jaycee2@yahoo.com",
  twitterUsername: "<value>",
  pledgeMinimumAmount: 98955,
  pledgeBadgeShowAmount: false,
  defaultUpfrontSplitToContributors: 480829,
  donationsEnabled: false,
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
| `donationsEnabled`                                                                               | *boolean*                                                                                        | :heavy_check_mark:                                                                               | If this organizations accepts donations                                                          |
| `profileSettings`                                                                                | [components.OrganizationProfileSettings](../../models/components/organizationprofilesettings.md) | :heavy_check_mark:                                                                               | Settings for the organization profile                                                            |
| `featureSettings`                                                                                | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md) | :heavy_check_mark:                                                                               | Settings for the organization features                                                           |