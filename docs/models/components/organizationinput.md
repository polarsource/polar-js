# OrganizationInput

## Example Usage

```typescript
import { OrganizationInput } from "@polar-sh/sdk/models/components";

let value: OrganizationInput = {
  createdAt: new Date("2023-12-25T22:44:36.341Z"),
  modifiedAt: new Date("2024-11-16T03:03:53.733Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "<value>",
  bio: "<value>",
  company: "Senger Group",
  blog: "<value>",
  location: "<value>",
  email: "Barbara_Fisher29@hotmail.com",
  twitterUsername: "<value>",
  pledgeMinimumAmount: 976762,
  pledgeBadgeShowAmount: false,
  defaultUpfrontSplitToContributors: 435353,
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