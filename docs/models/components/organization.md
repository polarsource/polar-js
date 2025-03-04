# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components/organization.js";

let value: Organization = {
  createdAt: new Date("2025-01-07T18:45:06.828Z"),
  modifiedAt: new Date("2023-03-12T08:18:21.576Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://disloyal-toothbrush.com",
  bio: "<value>",
  company: "Flatley and Sons",
  blog: "<value>",
  location: "<value>",
  email: "Lamar_Kris@gmail.com",
  twitterUsername: "<value>",
  pledgeMinimumAmount: 703599,
  pledgeBadgeShowAmount: false,
  defaultUpfrontSplitToContributors: 859082,
  profileSettings: {},
  featureSettings: {},
  subscriptionSettings: {
    allowMultipleSubscriptions: false,
    allowCustomerUpdates: false,
    prorationBehavior: "invoice",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | Creation timestamp of the object.                                                                          |
| `modifiedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | Last modification timestamp of the object.                                                                 |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The organization ID.                                                                                       |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `avatarUrl`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `bio`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `company`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `blog`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `location`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `twitterUsername`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pledgeMinimumAmount`                                                                                      | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pledgeBadgeShowAmount`                                                                                    | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `defaultUpfrontSplitToContributors`                                                                        | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `profileSettings`                                                                                          | [components.OrganizationProfileSettings](../../models/components/organizationprofilesettings.md)           | :heavy_check_mark:                                                                                         | Settings for the organization profile                                                                      |
| `featureSettings`                                                                                          | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md)           | :heavy_check_mark:                                                                                         | Settings for the organization features                                                                     |
| `subscriptionSettings`                                                                                     | [components.OrganizationSubscriptionSettings](../../models/components/organizationsubscriptionsettings.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |