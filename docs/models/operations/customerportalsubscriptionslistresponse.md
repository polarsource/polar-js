# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-07T03:10:47.772Z"),
        modifiedAt: new Date("2023-04-25T18:34:12.157Z"),
        id: "<value>",
        amount: 249728,
        currency: "New Taiwan Dollar",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2024-03-18T12:21:35.318Z"),
        currentPeriodEnd: new Date("2023-01-03T07:20:18.003Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-07-31T16:00:23.359Z"),
        endedAt: new Date("2022-09-24T06:04:53.029Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-09-29T00:16:41.299Z"),
          modifiedAt: new Date("2022-05-23T18:01:37.769Z"),
          id: "<value>",
          name: "<value>",
          description:
            "once barring tectonics fowl husk diagram conjecture gut with shimmering",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-09-27T16:42:50.105Z"),
              modifiedAt: new Date("2022-01-09T20:45:49.123Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 271660,
              maximumAmount: 486148,
              presetAmount: 180507,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-04-26T07:49:59.337Z"),
              modifiedAt: new Date("2024-03-03T05:53:22.940Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "supposing than which angrily colorfully mostly impact ick",
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
              path: "/private/tmp",
              mimeType: "<value>",
              size: 291293,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-04-06T21:56:28.637Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-08-21T18:01:23.530Z"),
              sizeReadable: "<value>",
              publicUrl: "https://stiff-runway.net",
            },
          ],
          organization: {
            createdAt: new Date("2022-05-02T15:28:19.816Z"),
            modifiedAt: new Date("2023-01-06T18:04:00.281Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://shiny-rubric.net",
            bio: "<value>",
            company: "Shanahan - Bogan",
            blog: "<value>",
            location: "<value>",
            email: "Emile49@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 650441,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 992044,
            profileSettings: {},
            featureSettings: {},
          },
        },
        price: {
          createdAt: new Date("2023-03-27T19:23:32.284Z"),
          modifiedAt: new Date("2022-05-13T09:45:50.507Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 379758,
      maxPage: 859650,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |