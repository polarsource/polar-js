# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2025-08-21T00:18:07.571Z"),
      modifiedAt: new Date("2024-09-25T05:44:49.986Z"),
      id: "<value>",
      grantedAt: new Date("2025-11-23T05:57:14.612Z"),
      revokedAt: new Date("2023-07-18T04:17:29.241Z"),
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-05-12T19:04:22.335Z"),
        modifiedAt: new Date("2025-05-06T02:45:05.659Z"),
        id: "<value>",
        email: "Zane_DuBuque@yahoo.com",
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
        createdAt: new Date("2025-04-27T08:26:18.832Z"),
        modifiedAt: new Date("2023-12-22T03:14:57.302Z"),
        id: "<value>",
        description: "inasmuch forenenst guacamole abseil",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        organization: {
          createdAt: new Date("2025-04-24T16:56:02.290Z"),
          modifiedAt: new Date("2025-09-13T17:33:20.087Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://complicated-rule.net/",
          bio: "<value>",
          company: "VonRueden, Baumbach and Lind",
          blog: "<value>",
          location: "<value>",
          email: "Jewell.Mante90@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 25458,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 633439,
          profileSettings: {},
          featureSettings: {
            issueFundingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
        },
        properties: {
          note: "<value>",
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 127759,
    maxPage: 998295,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |