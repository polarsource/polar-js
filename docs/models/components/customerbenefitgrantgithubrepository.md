# CustomerBenefitGrantGitHubRepository

## Example Usage

```typescript
import { CustomerBenefitGrantGitHubRepository } from "@polar-sh/sdk/models/components/customerbenefitgrantgithubrepository.js";

let value: CustomerBenefitGrantGitHubRepository = {
  createdAt: new Date("2023-11-28T20:55:03.426Z"),
  modifiedAt: new Date("2024-06-29T06:44:42.522Z"),
  id: "<value>",
  grantedAt: new Date("2025-12-17T11:39:48.039Z"),
  revokedAt: new Date("2023-02-03T08:27:26.933Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-05-25T14:10:23.111Z"),
    modifiedAt: new Date("2024-06-03T09:35:20.972Z"),
    id: "<value>",
    email: "Dion.Jacobs63@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "FR",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2024-10-15T22:48:46.810Z"),
    modifiedAt: new Date("2025-08-12T11:56:33.463Z"),
    id: "<value>",
    description: "corrupt honorable ah before zowie oh woefully um",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2023-05-26T16:11:49.684Z"),
      modifiedAt: new Date("2023-04-08T08:19:25.840Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://sizzling-fledgling.name/",
      email: "Pearline16@hotmail.com",
      website: "<value>",
      socials: [
        {
          platform: "github",
          url: "https://pleasing-cleaner.org",
        },
      ],
      detailsSubmittedAt: new Date("2023-03-06T02:49:57.342Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
      bio: "<value>",
      company: "Turcotte - Hills",
      blog: "<value>",
      location: "<value>",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 789841,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 394238,
      profileSettings: {},
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the object.                                                                                                  |
| `grantedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `revokedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `benefitId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `orderId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `isGranted`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `isRevoked`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customer`                                                                                                             | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                                 | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `benefit`                                                                                                              | [components.BenefitGitHubRepositorySubscriber](../../models/components/benefitgithubrepositorysubscriber.md)           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitGrantGitHubRepositoryProperties](../../models/components/benefitgrantgithubrepositoryproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |