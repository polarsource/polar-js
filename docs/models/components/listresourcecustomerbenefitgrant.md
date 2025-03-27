# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2025-10-13T07:18:44.318Z"),
      modifiedAt: new Date("2023-08-28T12:53:24.536Z"),
      id: "<value>",
      grantedAt: new Date("2023-10-24T05:28:30.875Z"),
      revokedAt: new Date("2024-09-02T17:41:59.365Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-06-17T14:25:02.046Z"),
        modifiedAt: new Date("2024-09-01T01:59:47.325Z"),
        id: "<value>",
        email: "Gus.Kuphal94@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "SE",
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
        createdAt: new Date("2023-04-18T08:47:11.414Z"),
        modifiedAt: new Date("2025-03-01T08:18:06.425Z"),
        id: "<value>",
        description: "battle lest slow mechanically times till than mooch meh",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2023-06-21T04:11:10.093Z"),
          modifiedAt: new Date("2025-05-30T14:10:56.971Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://mindless-drive.org/",
          email: "Valentine_Torphy57@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://sudden-best-seller.com",
            },
          ],
          detailsSubmittedAt: new Date("2024-05-19T20:34:01.386Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Zulauf, Murazik and Tillman",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 812025,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 538609,
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
    totalCount: 90450,
    maxPage: 130833,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |