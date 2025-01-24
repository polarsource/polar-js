# CustomerBenefitGrantGitHubRepository

## Example Usage

```typescript
import { CustomerBenefitGrantGitHubRepository } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantGitHubRepository = {
  createdAt: new Date("2025-07-20T21:58:44.449Z"),
  modifiedAt: new Date("2024-12-28T01:17:07.421Z"),
  id: "<value>",
  grantedAt: new Date("2025-02-15T22:53:05.739Z"),
  revokedAt: new Date("2024-07-20T13:01:21.633Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-10-07T23:19:47.321Z"),
    modifiedAt: new Date("2023-06-29T12:28:45.551Z"),
    id: "<value>",
    email: "Herminio_Pagac@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Kazakhstan",
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
    createdAt: new Date("2023-03-05T23:56:33.777Z"),
    modifiedAt: new Date("2025-10-26T21:27:50.253Z"),
    id: "<value>",
    description: "come scarcely winged",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-06-29T20:49:57.624Z"),
      modifiedAt: new Date("2024-08-12T05:24:23.232Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://secondary-fisherman.com/",
      bio: "<value>",
      company: "Grady LLC",
      blog: "<value>",
      location: "<value>",
      email: "Rosamond.Hodkiewicz@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 104150,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 508107,
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