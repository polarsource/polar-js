# CustomerBenefitGrantGitHubRepository

## Example Usage

```typescript
import { CustomerBenefitGrantGitHubRepository } from "@polar-sh/sdk/models/components/customerbenefitgrantgithubrepository.js";

let value: CustomerBenefitGrantGitHubRepository = {
  createdAt: new Date("2023-01-10T19:30:49.833Z"),
  modifiedAt: new Date("2025-12-21T06:53:31.334Z"),
  id: "<value>",
  grantedAt: new Date("2024-03-21T02:38:53.717Z"),
  revokedAt: new Date("2023-04-30T23:37:49.180Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-03-17T16:27:59.408Z"),
    modifiedAt: new Date("2023-12-23T06:21:53.920Z"),
    id: "<value>",
    email: "Birdie.Zemlak@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Indonesia",
    },
    taxId: [
      "<id>",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2024-03-24T17:37:09.177Z"),
    modifiedAt: new Date("2023-02-02T01:48:16.382Z"),
    id: "<value>",
    description:
      "apud scoop triumphantly terribly thankfully jovially duh knowingly mmm despite",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2023-12-03T11:11:57.521Z"),
      modifiedAt: new Date("2024-04-17T22:12:43.442Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://courteous-invite.net",
      bio: "<value>",
      company: "Stracke - Watsica",
      blog: "<value>",
      location: "<value>",
      email: "Bettie_Larson@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 68690,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 98870,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
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