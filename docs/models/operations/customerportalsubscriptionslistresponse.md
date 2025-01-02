# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-29T03:30:19.700Z"),
        modifiedAt: new Date("2024-07-23T17:16:26.152Z"),
        id: "<value>",
        amount: 907111,
        currency: "UAE Dirham",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2025-05-06T19:40:45.220Z"),
        currentPeriodEnd: new Date("2024-03-02T09:50:18.418Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2025-07-06T08:09:01.868Z"),
        endedAt: new Date("2024-08-01T21:03:06.067Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2025-11-07T04:58:21.844Z"),
          modifiedAt: new Date("2024-04-29T23:40:43.285Z"),
          id: "<value>",
          name: "<value>",
          description: "ceramics plus blah likewise and",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-11-07T03:08:42.980Z"),
              modifiedAt: new Date("2024-05-06T11:17:28.215Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 94903,
              maximumAmount: 386002,
              presetAmount: 617859,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-10-17T12:43:49.669Z"),
              modifiedAt: new Date("2024-06-30T02:59:06.785Z"),
              id: "<value>",
              type: "ads",
              description: "sleet before bravely tankful step-mother anti",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/usr/libexec",
              mimeType: "<value>",
              size: 253262,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-11-12T05:07:17.320Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-14T06:40:09.825Z"),
              sizeReadable: "<value>",
              publicUrl: "https://silky-replacement.biz/",
            },
          ],
          organization: {
            createdAt: new Date("2025-08-25T00:50:34.161Z"),
            modifiedAt: new Date("2023-04-08T15:48:04.523Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://abandoned-programme.name",
            bio: "<value>",
            company: "O'Conner LLC",
            blog: "<value>",
            location: "<value>",
            email: "Colleen33@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 946912,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 712252,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2024-06-06T21:54:56.557Z"),
          modifiedAt: new Date("2023-03-24T00:32:50.154Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 898072,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 357041,
      maxPage: 453344,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |