# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components/organization.js";

let value: Organization = {
  createdAt: new Date("2025-08-18T16:08:36.319Z"),
  modifiedAt: new Date("2023-06-29T18:21:41.585Z"),
  id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://medium-formula.org",
  email: "Waino.Paucek35@yahoo.com",
  website: "<value>",
  socials: [
    {
      platform: "youtube",
      url: "https://torn-bob.net",
    },
  ],
  detailsSubmittedAt: new Date("2024-10-03T20:10:35.957Z"),
  featureSettings: {},
  subscriptionSettings: {
    allowMultipleSubscriptions: false,
    allowCustomerUpdates: false,
    prorationBehavior: "prorate",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | Creation timestamp of the object.                                                                          |                                                                                                            |
| `modifiedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | Last modification timestamp of the object.                                                                 |                                                                                                            |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The organization ID.                                                                                       | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                       |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Organization name shown in checkout, customer portal, emails etc.                                          |                                                                                                            |
| `slug`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique organization slug in checkout, customer portal and credit card statements.                          |                                                                                                            |
| `avatarUrl`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Avatar URL shown in checkout, customer portal, emails etc.                                                 |                                                                                                            |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Public support email.                                                                                      |                                                                                                            |
| `website`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Official website of the organization.                                                                      |                                                                                                            |
| `socials`                                                                                                  | [components.OrganizationSocialLink](../../models/components/organizationsociallink.md)[]                   | :heavy_check_mark:                                                                                         | Links to social profiles.                                                                                  |                                                                                                            |
| `detailsSubmittedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | When the business details were submitted.                                                                  |                                                                                                            |
| `featureSettings`                                                                                          | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md)           | :heavy_check_mark:                                                                                         | Organization feature settings                                                                              |                                                                                                            |
| `subscriptionSettings`                                                                                     | [components.OrganizationSubscriptionSettings](../../models/components/organizationsubscriptionsettings.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |