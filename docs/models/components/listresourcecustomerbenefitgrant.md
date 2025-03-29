# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-02-12T18:04:44.177Z"),
      modifiedAt: new Date("2023-07-06T20:36:46.094Z"),
      id: "<value>",
      grantedAt: new Date("2023-12-20T03:37:12.994Z"),
      revokedAt: new Date("2023-02-18T09:00:03.263Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-05-21T12:12:56.473Z"),
        modifiedAt: new Date("2024-07-17T03:29:58.237Z"),
        id: "<value>",
        email: "Bryana29@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        oauthAccounts: {
          "key": {
            accountId: "<id>",
            accountUsername: "<value>",
          },
        },
      },
      benefit: {
        createdAt: new Date("2023-11-20T18:41:24.024Z"),
        modifiedAt: new Date("2023-05-27T00:29:35.698Z"),
        id: "<value>",
        description: "barring athwart refer",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-05-31T22:14:48.309Z"),
          modifiedAt: new Date("2023-11-10T09:14:40.659Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://informal-innovation.biz",
          email: "Kathleen.Johnston30@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "x",
              url: "https://burdensome-ice-cream.org",
            },
          ],
          detailsSubmittedAt: new Date("2024-04-07T00:27:41.040Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Senger Group",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 488778,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 193506,
          profileSettings: {},
        },
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 60269,
    maxPage: 785555,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |