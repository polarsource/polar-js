# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components/customerbenefitgrantads.js";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2025-04-11T05:43:48.406Z"),
  modifiedAt: new Date("2023-01-27T01:42:16.171Z"),
  id: "<value>",
  grantedAt: new Date("2025-06-10T16:16:44.051Z"),
  revokedAt: new Date("2025-03-31T02:26:27.528Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-07-17T12:03:07.247Z"),
    modifiedAt: new Date("2024-03-02T08:51:53.258Z"),
    id: "<value>",
    email: "Adolf80@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Afghanistan",
    },
    taxId: [
      "br_cnpj",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2025-11-05T16:50:02.471Z"),
    modifiedAt: new Date("2023-12-31T16:17:23.828Z"),
    id: "<value>",
    description: "towards storyboard behind moral likewise irritably",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-10-25T18:56:37.422Z"),
      modifiedAt: new Date("2025-01-08T18:32:25.623Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://variable-numeric.com",
      bio: "<value>",
      company: "Jacobson LLC",
      blog: "<value>",
      location: "<value>",
      email: "Zella.Goldner@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 375300,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 789168,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
    properties: {},
  },
  properties: {
    advertisementCampaignId: "<id>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `grantedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isGranted`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isRevoked`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefit`                                                                                     | [components.BenefitAdsSubscriber](../../models/components/benefitadssubscriber.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitGrantAdsProperties](../../models/components/benefitgrantadsproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |