# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-09-13T07:03:50.482Z"),
        modifiedAt: new Date("2025-05-01T10:56:04.818Z"),
        id: "<value>",
        amount: 783242,
        taxAmount: 298221,
        currency: "Riel",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-07-11T09:17:17.799Z"),
          modifiedAt: new Date("2023-01-06T18:31:00.573Z"),
          id: "<value>",
          name: "<value>",
          description:
            "milky rotten yahoo though gut neatly gracefully pish aw chairperson",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-24T15:28:40.373Z"),
              modifiedAt: new Date("2023-04-03T02:30:21.355Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-22T10:37:19.141Z"),
              modifiedAt: new Date("2023-06-13T23:31:57.151Z"),
              id: "<value>",
              type: "ads",
              description: "underneath lazily westernise near armchair outfox",
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
              path: "/usr/lib",
              mimeType: "<value>",
              size: 794795,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-30T09:58:26.971Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-12-30T22:13:06.413Z"),
              sizeReadable: "<value>",
              publicUrl: "https://plain-sushi.net",
            },
          ],
          organization: {
            createdAt: new Date("2023-05-23T19:42:16.496Z"),
            modifiedAt: new Date("2025-04-22T20:02:07.778Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://creamy-elevator.net/",
            bio: "<value>",
            company: "Hegmann and Sons",
            blog: "<value>",
            location: "<value>",
            email: "Elfrieda53@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 962090,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 79278,
            profileSettings: {},
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        productPrice: {
          createdAt: new Date("2023-01-20T19:32:27.742Z"),
          modifiedAt: new Date("2024-01-22T16:24:11.216Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 770461,
          maximumAmount: 122517,
          presetAmount: 244727,
        },
        subscription: {
          createdAt: new Date("2023-05-12T02:08:01.225Z"),
          modifiedAt: new Date("2023-02-07T10:39:04.040Z"),
          id: "<value>",
          amount: 837651,
          currency: "Mexican Peso",
          recurringInterval: "year",
          status: "incomplete",
          currentPeriodStart: new Date("2025-01-15T07:56:56.753Z"),
          currentPeriodEnd: new Date("2024-09-22T05:59:40.163Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-07-07T05:15:36.403Z"),
          startedAt: new Date("2024-06-10T11:25:59.466Z"),
          endsAt: new Date("2023-11-12T01:52:40.233Z"),
          endedAt: new Date("2024-07-10T23:13:51.219Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 686124,
      maxPage: 944158,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |