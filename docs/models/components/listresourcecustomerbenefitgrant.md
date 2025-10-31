# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-10-02T12:22:46.823Z"),
      modifiedAt: new Date("2025-05-28T07:05:09.153Z"),
      id: "<value>",
      grantedAt: new Date("2025-03-02T17:39:16.099Z"),
      revokedAt: null,
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2025-10-07T04:17:24.786Z"),
        modifiedAt: new Date("2025-05-05T02:01:44.871Z"),
        id: "<value>",
        email: "Sedrick_Paucek@hotmail.com",
        emailVerified: true,
        name: "<value>",
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        oauthAccounts: {},
      },
      benefit: {
        id: "<value>",
        createdAt: new Date("2024-06-21T03:24:54.887Z"),
        modifiedAt: new Date("2024-02-08T05:32:59.931Z"),
        type: "license_keys",
        description: "mathematics limited except however father",
        selectable: false,
        deletable: true,
        organizationId: "<value>",
        metadata: {
          "key": true,
        },
        organization: {
          createdAt: new Date("2024-04-23T21:20:15.611Z"),
          modifiedAt: new Date("2024-05-22T15:08:17.767Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://late-cutover.org",
          email: "Phyllis_Romaguera@gmail.com",
          website: "<value>",
          socials: [],
          status: "denied",
          detailsSubmittedAt: new Date("2025-03-30T02:02:42.344Z"),
          featureSettings: null,
          subscriptionSettings: {
            allowMultipleSubscriptions: true,
            allowCustomerUpdates: true,
            prorationBehavior: "invoice",
            benefitRevocationGracePeriod: 916709,
          },
          notificationSettings: {
            newOrder: true,
            newSubscription: true,
          },
          customerEmailSettings: {
            orderConfirmation: true,
            subscriptionCancellation: true,
            subscriptionConfirmation: false,
            subscriptionCycled: true,
            subscriptionPastDue: false,
            subscriptionRevoked: false,
            subscriptionUncanceled: false,
            subscriptionUpdated: true,
          },
        },
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 93452,
            timeframe: "day",
          },
          activations: {
            limit: 777902,
            enableCustomerAdmin: true,
          },
          limitUsage: 596467,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |