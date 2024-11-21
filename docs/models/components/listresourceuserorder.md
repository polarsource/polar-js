# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2023-05-22T19:39:49.574Z"),
      modifiedAt: new Date("2023-03-11T21:56:42.620Z"),
      id: "<value>",
      amount: 433265,
      taxAmount: 243712,
      currency: "Bahamian Dollar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2022-10-30T03:06:02.828Z"),
        modifiedAt: new Date("2022-09-20T13:54:48.068Z"),
        id: "<value>",
        name: "<value>",
        description:
          "inquisitively prickly frugal out phew viciously scorn silk",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-11-26T08:57:48.541Z"),
            modifiedAt: new Date("2024-06-27T02:43:23.928Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 747382,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-10-24T06:34:09.259Z"),
            modifiedAt: new Date("2024-10-20T05:24:13.548Z"),
            id: "<value>",
            type: "custom",
            description:
              "eyeliner dependent likely shocked yahoo however gadzooks pliers drat",
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
            path: "/var/tmp",
            mimeType: "<value>",
            size: 189574,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-06-15T05:10:45.704Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-07-01T18:36:52.222Z"),
            sizeReadable: "<value>",
            publicUrl: "https://everlasting-gymnast.info/",
          },
        ],
        organization: {
          createdAt: new Date("2024-08-29T14:37:53.760Z"),
          modifiedAt: new Date("2023-11-28T16:51:17.097Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://wretched-obesity.biz/",
          bio: "<value>",
          company: "Kunze, Thompson and Treutel",
          blog: "<value>",
          location: "<value>",
          email: "Kelsi_Murazik@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 95380,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 966682,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2022-12-13T16:53:10.230Z"),
        modifiedAt: new Date("2023-06-21T22:56:39.250Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 956752,
        recurringInterval: "year",
      },
      subscription: {
        createdAt: new Date("2022-11-21T13:19:02.770Z"),
        modifiedAt: new Date("2023-01-21T05:01:58.399Z"),
        id: "<value>",
        amount: 511807,
        currency: "Afghani",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2022-02-02T06:15:52.112Z"),
        currentPeriodEnd: new Date("2022-04-21T16:04:48.222Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-04-07T00:41:56.890Z"),
        endedAt: new Date("2024-03-12T16:04:02.474Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 268878,
    maxPage: 305965,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |