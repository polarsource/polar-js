# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-27T19:23:32.284Z"),
        modifiedAt: new Date("2022-05-13T09:45:50.507Z"),
        id: "<value>",
        amount: 379758,
        currency: "Trinidad and Tobago Dollar",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2023-08-06T08:45:43.654Z"),
        currentPeriodEnd: new Date("2023-10-28T18:18:02.027Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-05-10T16:07:10.579Z"),
        endedAt: new Date("2024-04-19T21:02:01.154Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-07-11T15:52:40.789Z"),
          modifiedAt: new Date("2023-10-06T12:04:09.498Z"),
          id: "<value>",
          name: "<value>",
          description: "appertain overproduce which",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-01-09T15:45:50.642Z"),
              modifiedAt: new Date("2024-09-01T08:10:24.577Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-06-07T13:45:15.402Z"),
              modifiedAt: new Date("2023-04-29T18:28:37.139Z"),
              id: "<value>",
              type: "custom",
              description: "where that advertisement considering now",
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
              path: "/opt/include",
              mimeType: "<value>",
              size: 374779,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-11-25T06:24:50.807Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-01-25T01:58:27.894Z"),
              sizeReadable: "<value>",
              publicUrl: "https://known-disposer.biz",
            },
          ],
          organization: {
            createdAt: new Date("2022-06-23T01:36:53.052Z"),
            modifiedAt: new Date("2024-11-06T03:12:54.205Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://fatal-diver.org",
            bio: "<value>",
            company: "Cruickshank and Sons",
            blog: "<value>",
            location: "<value>",
            email: "Marcelle.Conroy75@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 712800,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 23055,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2023-04-15T20:50:15.089Z"),
          modifiedAt: new Date("2024-05-21T07:11:51.975Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 410156,
          maximumAmount: 687160,
          presetAmount: 24047,
        },
      },
    ],
    pagination: {
      totalCount: 917658,
      maxPage: 548156,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |