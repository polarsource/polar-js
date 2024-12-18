# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2023-11-10T04:02:31.063Z"),
      modifiedAt: new Date("2022-08-30T19:42:05.316Z"),
      id: "<value>",
      amount: 294893,
      taxAmount: 402178,
      currency: "Saint Helena Pound",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-09-17T23:36:54.053Z"),
        modifiedAt: new Date("2022-01-27T21:17:56.684Z"),
        id: "<value>",
        name: "<value>",
        description:
          "trench schedule gladly limply fidget aw elegant culture inasmuch ugh",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-04-25T11:53:31.235Z"),
            modifiedAt: new Date("2022-05-03T03:10:03.746Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 927286,
            maximumAmount: 218555,
            presetAmount: 270281,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-18T14:25:02.046Z"),
            modifiedAt: new Date("2023-09-02T01:59:47.325Z"),
            id: "<value>",
            type: "discord",
            description:
              "vibration incidentally up round sophisticated violently",
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
            path: "/usr/src",
            mimeType: "<value>",
            size: 268674,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-09T22:51:22.991Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-04-09T16:23:40.595Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dapper-technologist.com",
          },
        ],
        organization: {
          createdAt: new Date("2024-01-08T16:17:32.860Z"),
          modifiedAt: new Date("2024-01-04T09:31:36.839Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://enchanted-commodity.name",
          bio: "<value>",
          company: "Gottlieb, Schinner and Hammes",
          blog: "<value>",
          location: "<value>",
          email: "Markus_Ankunding@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 785318,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 355921,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2023-05-07T01:33:06.900Z"),
        modifiedAt: new Date("2023-06-17T05:41:02.707Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 156181,
        maximumAmount: 803459,
        presetAmount: 290592,
      },
      subscription: {
        createdAt: new Date("2023-07-20T20:38:40.921Z"),
        modifiedAt: new Date("2022-10-27T06:47:16.886Z"),
        id: "<value>",
        amount: 859284,
        currency: "Manat",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2024-08-30T02:25:42.565Z"),
        currentPeriodEnd: new Date("2024-07-30T07:23:10.648Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-09-21T21:20:54.703Z"),
        endedAt: new Date("2022-06-11T17:47:53.592Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 704149,
    maxPage: 944788,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |