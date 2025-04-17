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
        id: "<value>",
        createdAt: new Date("2025-08-17T14:14:57.975Z"),
        modifiedAt: new Date("2025-05-22T01:38:35.771Z"),
        description:
          "hmph substantiate unknown definite sarcastic though and comfortable",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": 3532.2,
        },
        organization: {
          createdAt: new Date("2024-05-13T18:15:58.060Z"),
          modifiedAt: new Date("2025-02-03T11:54:30.799Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://courteous-heroine.info",
          email: "Tevin.Rowe@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://prime-dandelion.biz",
            },
          ],
          detailsSubmittedAt: new Date("2023-10-01T13:40:51.922Z"),
          featureSettings: {
            issueFundingEnabled: false,
            usageBasedBillingEnabled: false,
          },
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 102251,
            timeframe: "day",
          },
          activations: {
            limit: 303901,
            enableCustomerAdmin: false,
          },
          limitUsage: 146200,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 443619,
    maxPage: 572004,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |