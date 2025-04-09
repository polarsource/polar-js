# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-07-02T15:02:56.189Z"),
      modifiedAt: new Date("2023-10-02T12:22:46.823Z"),
      id: "<value>",
      grantedAt: new Date("2024-04-14T08:26:37.572Z"),
      revokedAt: new Date("2025-05-28T07:05:09.153Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-09-03T02:15:05.150Z"),
        modifiedAt: new Date("2025-03-02T17:39:16.099Z"),
        id: "<value>",
        email: "Jay_Roob@gmail.com",
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
        createdAt: new Date("2025-08-17T14:14:57.975Z"),
        modifiedAt: new Date("2025-05-22T01:38:35.771Z"),
        id: "<value>",
        description:
          "hmph substantiate unknown definite sarcastic though and comfortable",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-10-15T17:27:41.286Z"),
          modifiedAt: new Date("2024-01-23T03:06:50.165Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://ruddy-warming.com/",
          email: "Iliana.VonRueden76@yahoo.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://raw-prohibition.name",
            },
          ],
          detailsSubmittedAt: new Date("2023-08-28T03:15:53.007Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Brekke - Brakus",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 893255,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 303901,
          profileSettings: {},
        },
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 146200,
            timeframe: "month",
          },
          activations: {
            limit: 572004,
            enableCustomerAdmin: false,
          },
          limitUsage: 236051,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 28197,
    maxPage: 860386,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |