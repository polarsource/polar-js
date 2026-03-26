# Organization

## Example Usage

```typescript
import { Organization } from "@polar-sh/sdk/models/components/organization.js";

let value: Organization = {
  createdAt: new Date("2026-08-18T16:08:36.319Z"),
  modifiedAt: new Date("2025-09-21T03:00:08.692Z"),
  id: "<value>",
  name: "<value>",
  slug: "<value>",
  avatarUrl: "https://weighty-goodwill.org/",
  prorationBehavior: "next_period",
  allowCustomerUpdates: false,
  email: "Alaina8@yahoo.com",
  website: "<value>",
  socials: [
    {
      platform: "facebook",
      url: "https://unhealthy-marksman.org/",
    },
  ],
  status: "active",
  detailsSubmittedAt: new Date("2024-08-01T14:19:41.512Z"),
  defaultPresentmentCurrency: "<value>",
  defaultTaxBehavior: "exclusive",
  featureSettings: {},
  subscriptionSettings: {
    allowMultipleSubscriptions: false,
    allowCustomerUpdates: true,
    prorationBehavior: "invoice",
    benefitRevocationGracePeriod: 730000,
    preventTrialAbuse: true,
  },
  notificationSettings: {
    newOrder: false,
    newSubscription: true,
  },
  customerEmailSettings: {
    orderConfirmation: true,
    subscriptionCancellation: false,
    subscriptionConfirmation: false,
    subscriptionCycled: false,
    subscriptionCycledAfterTrial: false,
    subscriptionPastDue: false,
    subscriptionRenewalReminder: true,
    subscriptionRevoked: false,
    subscriptionTrialConversionReminder: false,
    subscriptionUncanceled: true,
    subscriptionUpdated: false,
  },
  customerPortalSettings: {
    usage: {
      show: false,
    },
    subscription: {
      updateSeats: true,
      updatePlan: true,
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | Creation timestamp of the object.                                                                                                  |
| `modifiedAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | Last modification timestamp of the object.                                                                                         |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the object.                                                                                                              |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Organization name shown in checkout, customer portal, emails etc.                                                                  |
| `slug`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Unique organization slug in checkout, customer portal and credit card statements.                                                  |
| `avatarUrl`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Avatar URL shown in checkout, customer portal, emails etc.                                                                         |
| `prorationBehavior`                                                                                                                | [components.SubscriptionProrationBehavior](../../models/components/subscriptionprorationbehavior.md)                               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `allowCustomerUpdates`                                                                                                             | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | Whether customers can update their subscriptions from the customer portal.                                                         |
| `email`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Public support email.                                                                                                              |
| `website`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Official website of the organization.                                                                                              |
| `socials`                                                                                                                          | [components.OrganizationSocialLink](../../models/components/organizationsociallink.md)[]                                           | :heavy_check_mark:                                                                                                                 | Links to social profiles.                                                                                                          |
| `status`                                                                                                                           | [components.OrganizationStatus](../../models/components/organizationstatus.md)                                                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `detailsSubmittedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_check_mark:                                                                                                                 | When the business details were submitted for review.                                                                               |
| `defaultPresentmentCurrency`                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Default presentment currency. Used as fallback in checkout and customer portal, if the customer's local currency is not available. |
| `defaultTaxBehavior`                                                                                                               | [components.TaxBehaviorOption](../../models/components/taxbehavioroption.md)                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `featureSettings`                                                                                                                  | [components.OrganizationFeatureSettings](../../models/components/organizationfeaturesettings.md)                                   | :heavy_check_mark:                                                                                                                 | Organization feature settings                                                                                                      |
| `subscriptionSettings`                                                                                                             | [components.OrganizationSubscriptionSettings](../../models/components/organizationsubscriptionsettings.md)                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `notificationSettings`                                                                                                             | [components.OrganizationNotificationSettings](../../models/components/organizationnotificationsettings.md)                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `customerEmailSettings`                                                                                                            | [components.OrganizationCustomerEmailSettings](../../models/components/organizationcustomeremailsettings.md)                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `customerPortalSettings`                                                                                                           | [components.OrganizationCustomerPortalSettings](../../models/components/organizationcustomerportalsettings.md)                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `country`                                                                                                                          | [components.CountryAlpha2](../../models/components/countryalpha2.md)                                                               | :heavy_minus_sign:                                                                                                                 | Two-letter country code (ISO 3166-1 alpha-2).                                                                                      |