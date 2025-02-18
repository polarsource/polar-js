# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components/organization.js";

let value: Organization = {
  createdAt: new Date("2025-03-07T15:05:08.285Z"),
  modifiedAt: new Date("2025-10-27T07:44:33.910Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://grandiose-coin.info",
  bio: "<value>",
  company: "Sanford LLC",
  blog: "<value>",
  location: "<value>",
  email: "Rashad36@gmail.com",
  twitterUsername: "<value>",
  pledgeMinimumAmount: 138708,
  pledgeBadgeShowAmount: false,
  defaultUpfrontSplitToContributors: 524880,
  profileSettings: {},
  featureSettings: {},
  subscriptionSettings: {
    allowMultipleSubscriptions: false,
    allowCustomerUpdates: false,
    prorationBehavior: "prorate",
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