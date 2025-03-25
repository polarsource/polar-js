# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-03-26T07:30:42.293Z"),
      modifiedAt: new Date("2023-01-29T16:52:53.504Z"),
      id: "<value>",
      grantedAt: new Date("2024-12-17T02:46:32.806Z"),
      revokedAt: new Date("2023-09-27T11:22:21.513Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2025-02-13T22:14:08.082Z"),
        modifiedAt: new Date("2024-08-06T08:14:46.348Z"),
        id: "<value>",
        email: "Broderick_Terry@gmail.com",
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
        createdAt: new Date("2023-01-19T15:53:11.663Z"),
        modifiedAt: new Date("2023-05-13T16:31:23.365Z"),
        id: "<value>",
        description: "like above psst rigidly nor perfectly extremely",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-12-09T02:59:23.862Z"),
          modifiedAt: new Date("2024-02-18T12:34:13.180Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://tense-premium.info/",
          email: "Savannah.Konopelski@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://agreeable-eternity.com/",
            },
          ],
          detailsSubmittedAt: new Date("2023-02-02T19:14:24.934Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Klein - Smitham",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 421550,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 248752,
          profileSettings: {},
        },
        properties: {
          guildId: "<id>",
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 414001,
    maxPage: 823889,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |