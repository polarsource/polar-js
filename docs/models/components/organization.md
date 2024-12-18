# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components";

let value: Organization = {
  createdAt: new Date("2022-04-04T03:54:32.981Z"),
  modifiedAt: new Date("2022-12-19T23:19:10.766Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://tinted-derby.info",
  bio: "<value>",
  company: "Runolfsdottir Group",
  blog: "<value>",
  location: "<value>",
  email: "Beverly_Johns@gmail.com",
  twitterUsername: "<value>",
  pledgeMinimumAmount: 706786,
  pledgeBadgeShowAmount: false,
  defaultUpfrontSplitToContributors: 545201,
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