# BenefitGrantGitHubRepositoryWebhook

## Example Usage

```typescript
import { BenefitGrantGitHubRepositoryWebhook } from "@polar-sh/sdk/models/components/benefitgrantgithubrepositorywebhook.js";

let value: BenefitGrantGitHubRepositoryWebhook = {
  createdAt: new Date("2025-03-08T15:32:24.757Z"),
  modifiedAt: new Date("2024-12-19T06:43:20.508Z"),
  id: "<value>",
  isGranted: false,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-08-11T07:30:21.850Z"),
    modifiedAt: new Date("2024-04-18T07:07:21.162Z"),
    type: "github_repository",
    description: "vicinity spectate publication athwart likely far",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    properties: {
      repositoryOwner: "polarsource",
      repositoryName: "private_repo",
      permission: "admin",
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
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the grant.                                                                                                   |
| `grantedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                                     |
| `isGranted`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is granted.                                                                                        |
| `revokedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                                     |
| `isRevoked`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is revoked.                                                                                        |
| `subscriptionId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the subscription that granted this benefit.                                                                  |
| `orderId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the order that granted this benefit.                                                                         |
| `customerId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the customer concerned by this grant.                                                                        |
| `memberId`                                                                                                             | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The ID of the member concerned by this grant.                                                                          |
| `benefitId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit concerned by this grant.                                                                         |
| `error`                                                                                                                | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                           | :heavy_minus_sign:                                                                                                     | The error information if the benefit grant failed with an unrecoverable error.                                         |
| `customer`                                                                                                             | [components.Customer](../../models/components/customer.md)                                                             | :heavy_check_mark:                                                                                                     | A customer in an organization.                                                                                         |
| `benefit`                                                                                                              | [components.BenefitGitHubRepository](../../models/components/benefitgithubrepository.md)                               | :heavy_check_mark:                                                                                                     | A benefit of type `github_repository`.<br/><br/>Use it to automatically invite your backers to a private GitHub repository. |
| `properties`                                                                                                           | [components.BenefitGrantGitHubRepositoryProperties](../../models/components/benefitgrantgithubrepositoryproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `previousProperties`                                                                                                   | [components.BenefitGrantGitHubRepositoryProperties](../../models/components/benefitgrantgithubrepositoryproperties.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |