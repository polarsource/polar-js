# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-01T07:38:52.026Z"),
        modifiedAt: new Date("2024-08-12T03:02:25.209Z"),
        id: "<value>",
        amount: 161262,
        currency: "Yemeni Rial",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2022-03-21T05:06:33.575Z"),
        currentPeriodEnd: new Date("2022-06-07T13:45:15.402Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-04-29T18:28:37.139Z"),
        endedAt: new Date("2022-02-22T05:57:53.960Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2022-10-23T09:17:13.863Z"),
          modifiedAt: new Date("2023-10-19T07:47:44.539Z"),
          id: "<value>",
          name: "<value>",
          description: "boastfully hmph postbox doting",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-06-22T18:43:56.404Z"),
              modifiedAt: new Date("2022-10-09T08:12:15.828Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 477431,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-03-14T14:18:20.001Z"),
              modifiedAt: new Date("2023-02-15T18:11:36.520Z"),
              id: "<value>",
              type: "ads",
              description: "pack drat seldom",
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
              path: "/bin",
              mimeType: "<value>",
              size: 975882,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-03T12:53:40.926Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-04-15T20:50:15.089Z"),
              sizeReadable: "<value>",
              publicUrl: "https://incomplete-poetry.com",
            },
          ],
          organization: {
            createdAt: new Date("2024-10-02T18:04:38.815Z"),
            modifiedAt: new Date("2023-08-24T18:41:55.864Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://waterlogged-hepatitis.com",
            bio: "<value>",
            company: "Kozey - Mayer",
            blog: "<value>",
            location: "<value>",
            email: "Jefferey_Crooks@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 328174,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 949128,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2022-11-24T22:52:55.481Z"),
          modifiedAt: new Date("2023-01-31T22:05:16.754Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 96454,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 865585,
      maxPage: 480790,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |