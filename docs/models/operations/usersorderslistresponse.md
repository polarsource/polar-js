# UsersOrdersListResponse

## Example Usage

```typescript
import { UsersOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-06-09T07:31:01.739Z"),
        modifiedAt: new Date("2023-12-27T16:42:31.674Z"),
        id: "<value>",
        amount: 458192,
        taxAmount: 249124,
        currency: "UAE Dirham",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        product: {
          createdAt: new Date("2024-10-05T02:35:48.852Z"),
          modifiedAt: new Date("2024-02-04T00:36:36.509Z"),
          id: "<value>",
          name: "<value>",
          description:
            "poetry tank bicycle left since for representation among elliptical",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-12T13:13:35.041Z"),
              modifiedAt: new Date("2023-07-15T16:45:43.480Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-11-01T12:43:32.735Z"),
              modifiedAt: new Date("2023-10-20T00:06:26.156Z"),
              id: "<value>",
              type: "ads",
              description:
                "crossly harvest energetically apologise incidentally ack livid",
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
              path: "/usr/ports",
              mimeType: "<value>",
              size: 548319,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-22T13:01:24.491Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-09-18T13:31:21.764Z"),
              sizeReadable: "<value>",
              publicUrl: "https://well-off-roundabout.name/",
            },
          ],
          organization: {
            createdAt: new Date("2024-12-22T04:24:01.444Z"),
            modifiedAt: new Date("2024-02-01T16:50:29.323Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://classic-diversity.net/",
            bio: "<value>",
            company: "Hyatt and Sons",
            blog: "<value>",
            location: "<value>",
            email: "Raphaelle.Davis3@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 996268,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 488197,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-06-03T16:23:05.334Z"),
          modifiedAt: new Date("2024-02-13T12:07:10.324Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 1556,
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2022-05-03T04:26:31.662Z"),
          modifiedAt: new Date("2024-11-05T16:50:02.471Z"),
          id: "<value>",
          amount: 332736,
          currency: "Comoro Franc",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2022-12-04T18:03:27.933Z"),
          currentPeriodEnd: new Date("2023-09-02T20:46:43.071Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2024-10-12T13:18:26.518Z"),
          endedAt: new Date("2022-06-21T05:16:24.845Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 867330,
      maxPage: 500239,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.ListResourceUserOrder](../../models/components/listresourceuserorder.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |