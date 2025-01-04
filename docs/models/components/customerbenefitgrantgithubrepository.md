# CustomerBenefitGrantGitHubRepository

## Example Usage

```typescript
import { CustomerBenefitGrantGitHubRepository } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantGitHubRepository = {
  createdAt: new Date("2023-06-09T15:50:46.924Z"),
  modifiedAt: new Date("2025-03-08T08:22:27.702Z"),
  id: "<value>",
  grantedAt: new Date("2023-03-15T06:42:11.490Z"),
  revokedAt: new Date("2025-02-20T14:44:41.629Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-03-18T07:56:55.620Z"),
    modifiedAt: new Date("2024-03-08T04:01:27.021Z"),
    id: "<value>",
    email: "Winfield54@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Kuwait",
    },
    taxId: [
      "es_cif",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2023-11-06T11:58:00.750Z"),
    modifiedAt: new Date("2023-04-19T01:33:18.247Z"),
    id: "<value>",
    description:
      "intellect questionable blah yearningly coincide yippee customise internal hope kiddingly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-04-29T11:11:06.519Z"),
      modifiedAt: new Date("2024-01-17T20:56:10.200Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://radiant-procurement.name",
      bio: "<value>",
      company: "Cruickshank and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Icie_Towne@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 278355,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 58392,
      profileSettings: {},
      featureSettings: {},
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