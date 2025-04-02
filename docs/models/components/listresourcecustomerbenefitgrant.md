# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2025-09-19T23:23:51.226Z"),
      modifiedAt: new Date("2024-04-11T20:07:47.680Z"),
      id: "<value>",
      grantedAt: new Date("2025-09-27T08:49:35.038Z"),
      revokedAt: new Date("2025-06-01T17:15:51.169Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2023-11-13T01:30:13.128Z"),
        modifiedAt: new Date("2023-12-15T15:00:48.805Z"),
        id: "<value>",
        email: "Lelia_Witting61@yahoo.com",
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
        createdAt: new Date("2024-08-20T01:51:34.538Z"),
        modifiedAt: new Date("2023-02-14T00:47:57.560Z"),
        id: "<value>",
        description:
          "ack ah impostor embossing yippee thankfully destock the joyously husky",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2024-08-16T02:43:11.535Z"),
          modifiedAt: new Date("2025-07-16T04:08:55.447Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://scared-editor.name",
          email: "Eleonore_Howell26@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "linkedin",
              url: "https://juvenile-developing.biz",
            },
          ],
          detailsSubmittedAt: new Date("2024-04-01T03:11:44.762Z"),
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Mayert and Sons",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 77675,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 475013,
          profileSettings: {},
        },
        properties: {
          activeFiles: [
            "<value>",
          ],
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 479402,
    maxPage: 553974,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |