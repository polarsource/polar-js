# UsersOrdersListResponse

## Example Usage

```typescript
import { UsersOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-02-03T03:18:29.615Z"),
        modifiedAt: new Date("2024-02-18T12:41:59.818Z"),
        id: "<value>",
        amount: 7884,
        taxAmount: 372679,
        currency: "Moldovan Leu",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        product: {
          createdAt: new Date("2024-10-07T15:13:11.606Z"),
          modifiedAt: new Date("2022-04-09T02:03:52.245Z"),
          id: "<value>",
          name: "<value>",
          description: "minority eek where kindly materialise antique",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-11-09T13:09:41.435Z"),
              modifiedAt: new Date("2022-11-25T19:57:38.512Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 160467,
              maximumAmount: 886305,
              presetAmount: 446394,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-12-26T14:02:06.082Z"),
              modifiedAt: new Date("2023-04-28T12:41:51.916Z"),
              id: "<value>",
              type: "custom",
              description: "zowie instead gah vision um sneaky never hmph",
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
              path: "/var/mail",
              mimeType: "<value>",
              size: 983427,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-15T04:23:01.364Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-02-21T20:20:12.003Z"),
              sizeReadable: "<value>",
              publicUrl: "https://right-peony.org/",
            },
          ],
          organization: {
            createdAt: new Date("2022-04-17T14:16:27.461Z"),
            modifiedAt: new Date("2023-06-30T13:31:25.620Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://excellent-comestible.org",
            bio: "<value>",
            company: "Kovacek - Buckridge",
            blog: "<value>",
            location: "<value>",
            email: "Wilhelm.Stiedemann@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 399812,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 671384,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2023-12-02T13:10:19.910Z"),
          modifiedAt: new Date("2023-03-14T11:32:05.153Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        subscription: {
          createdAt: new Date("2023-11-05T12:32:11.817Z"),
          modifiedAt: new Date("2022-03-18T18:23:23.170Z"),
          id: "<value>",
          amount: 822407,
          currency: "Balboa",
          recurringInterval: "year",
          status: "active",
          currentPeriodStart: new Date("2022-05-02T01:59:23.739Z"),
          currentPeriodEnd: new Date("2023-03-20T22:03:24.380Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-03-21T06:56:48.204Z"),
          endedAt: new Date("2022-12-18T20:42:53.316Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 29950,
      maxPage: 737254,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.ListResourceUserOrder](../../models/components/listresourceuserorder.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |