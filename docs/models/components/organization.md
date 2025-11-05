# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components/organization.js";

let value: Organization = {
  createdAt: new Date("2025-08-18T16:08:36.319Z"),
  modifiedAt: new Date("2024-09-21T03:00:08.692Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://weighty-goodwill.org/",
  prorationBehavior: "prorate",
  allowCustomerUpdates: false,
  email: "Alaina8@yahoo.com",
  website: "<value>",
  socials: [
    {
      platform: "github",
      url: "https://unhealthy-marksman.org/",
    },
  ],
  status: "active",
  detailsSubmittedAt: new Date("2023-08-02T14:19:41.512Z"),
  featureSettings: {},
  subscriptionSettings: {
    allowMultipleSubscriptions: true,
    allowCustomerUpdates: false,
    prorationBehavior: "invoice",
    benefitRevocationGracePeriod: 164496,
  },
  notificationSettings: {
    newOrder: true,
    newSubscription: false,
  },
  customerEmailSettings: {
    orderConfirmation: true,
    subscriptionCancellation: true,
    subscriptionConfirmation: true,
    subscriptionCycled: true,
    subscriptionPastDue: false,
    subscriptionRevoked: true,
    subscriptionUncanceled: false,
    subscriptionUpdated: false,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the object.                                                                                        |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Organization name shown in checkout, customer portal, emails etc.                                            |
| `slug`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Unique organization slug in checkout, customer portal and credit card statements.                            |
| `avatarUrl`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Avatar URL shown in checkout, customer portal, emails etc.                                                   |
| `prorationBehavior`                                                                                          | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `allowCustomerUpdates`                                                                                       | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether customers can update their subscriptions from the customer portal.                                   |
| `email`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Public support email.                                                                                        |
| `website`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Official website of the organization.                                                                        |
| `socials`                                                                                                    | [components.OrganizationSocialLink](../../models/components/organizationsociallink.md)[]                     | :heavy_check_mark:                                                                                           | Links to social profiles.                                                                                    |
| `status`                                                                                                     | [components.OrganizationStatus](../../models/components/organizationstatus.md)                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `detailsSubmittedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | When the business details were submitted.                                                                    |
| `featureSettings`                                                                                            | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md)             | :heavy_check_mark:                                                                                           | Organization feature settings                                                                                |
| `subscriptionSettings`                                                                                       | [components.OrganizationSubscriptionSettings](../../models/components/organizationsubscriptionsettings.md)   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `notificationSettings`                                                                                       | [components.OrganizationNotificationSettings](../../models/components/organizationnotificationsettings.md)   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customerEmailSettings`                                                                                      | [components.OrganizationCustomerEmailSettings](../../models/components/organizationcustomeremailsettings.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |