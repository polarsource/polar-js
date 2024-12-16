# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2023-05-17T23:21:07.043Z"),
      modifiedAt: new Date("2023-03-08T13:53:51.205Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      clientSecret: "<value>",
      successUrl: "https://rotating-cinema.biz/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2022-03-11T01:49:52.647Z"),
        modifiedAt: new Date("2022-08-28T01:07:17.997Z"),
        id: "<value>",
        name: "<value>",
        description: "eek guide hyena",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-08-17T20:23:24.936Z"),
            modifiedAt: new Date("2024-06-21T06:46:17.409Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 186640,
            maximumAmount: 129904,
            presetAmount: 263484,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-04-19T08:31:46.576Z"),
            modifiedAt: new Date("2023-08-05T09:00:15.814Z"),
            id: "<value>",
            type: "downloadables",
            description:
              "gah speedy whether border boo fledgling developmental arrogantly midwife",
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
            path: "/home/user/dir",
            mimeType: "<value>",
            size: 377150,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-01-20T05:07:04.882Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-09-30T22:48:08.333Z"),
            sizeReadable: "<value>",
            publicUrl: "https://cluttered-petal.org",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-05-28T04:43:05.121Z"),
        modifiedAt: new Date("2024-09-07T10:36:08.764Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 729926,
      },
      discount: {
        duration: "forever",
        durationInMonths: 499013,
        type: "percentage",
        basisPoints: 429014,
        createdAt: new Date("2024-01-05T12:05:28.621Z"),
        modifiedAt: new Date("2023-04-11T08:26:08.401Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-11-04T02:15:55.992Z"),
        endsAt: new Date("2023-04-29T23:56:17.825Z"),
        maxRedemptions: 549022,
        redemptionsCount: 598149,
        organizationId: "<value>",
      },
      url: "https://regular-pronoun.org",
    },
  ],
  pagination: {
    totalCount: 67661,
    maxPage: 187613,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |