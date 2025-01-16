# CustomerBenefitGrantGitHubRepository

## Example Usage

```typescript
import { CustomerBenefitGrantGitHubRepository } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantGitHubRepository = {
  createdAt: new Date("2024-03-07T15:44:13.722Z"),
  modifiedAt: new Date("2024-01-14T06:26:47.561Z"),
  id: "<value>",
  grantedAt: new Date("2025-01-07T07:05:25.430Z"),
  revokedAt: new Date("2023-06-27T03:54:40.912Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-05-23T11:42:22.121Z"),
    modifiedAt: new Date("2024-09-27T20:12:42.622Z"),
    id: "<value>",
    email: "Spencer.Romaguera61@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Saint Martin",
    },
    taxId: [
      "ru_kpp",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2025-10-24T22:25:14.547Z"),
    modifiedAt: new Date("2025-09-01T04:46:57.939Z"),
    id: "<value>",
    description:
      "encode always mindless underneath bran come scarcely winged mid contravene",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-07-26T06:38:49.989Z"),
      modifiedAt: new Date("2024-01-10T11:58:44.248Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://medium-anticodon.com/",
      bio: "<value>",
      company: "Kutch - Harber",
      blog: "<value>",
      location: "<value>",
      email: "Bernadine_Gusikowski@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 561677,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 796898,
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