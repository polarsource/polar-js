# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-05-09T07:01:19.772Z"),
      modifiedAt: new Date("2025-07-08T05:40:38.975Z"),
      id: "<value>",
      grantedAt: new Date("2024-04-07T00:27:41.040Z"),
      revokedAt: new Date("2023-09-30T15:10:49.815Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-03-29T17:53:51.271Z"),
        modifiedAt: new Date("2025-06-21T23:34:21.915Z"),
        id: "<value>",
        email: "Jeffrey_Beier@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "SE",
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
        createdAt: new Date("2025-09-12T19:18:28.211Z"),
        modifiedAt: new Date("2024-03-23T21:56:02.071Z"),
        id: "<value>",
        description: "consequently improbable quarterly testify",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2025-06-05T17:21:16.311Z"),
          modifiedAt: new Date("2025-07-16T09:22:57.749Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://fantastic-tail.info/",
          email: "Elise_Dare47@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "youtube",
              url: "https://mild-obedience.name/",
            },
          ],
          detailsSubmittedAt: new Date("2025-06-13T14:18:18.458Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Grimes - Jacobson",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 769488,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 904183,
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
    totalCount: 24532,
    maxPage: 993419,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |