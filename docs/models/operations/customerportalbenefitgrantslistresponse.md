# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-13T01:18:49.376Z"),
        modifiedAt: new Date("2025-02-20T09:36:47.164Z"),
        id: "<value>",
        grantedAt: new Date("2023-01-28T00:16:43.776Z"),
        revokedAt: new Date("2025-02-06T08:24:40.978Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: true,
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
          createdAt: new Date("2023-07-10T03:04:33.155Z"),
          modifiedAt: new Date("2023-06-26T20:31:24.411Z"),
          type: "meter_credit",
          description:
            "yowza er dreamily gadzooks eventually outrun playfully mortally",
          selectable: false,
          deletable: true,
          organizationId: "<value>",
          metadata: {},
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
            units: 430943,
            rollover: true,
            meterId: "<value>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |