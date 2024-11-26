# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-07-12T13:59:51.236Z"),
      modifiedAt: new Date("2023-11-04T22:50:34.224Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      clientSecret: "<value>",
      successUrl: "https://timely-reboot.info/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2022-01-20T14:53:59.810Z"),
        modifiedAt: new Date("2024-03-17T14:54:52.778Z"),
        id: "<value>",
        name: "<value>",
        description: "shiny coast up",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-11-17T21:55:34.014Z"),
            modifiedAt: new Date("2024-02-16T10:15:12.106Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 915170,
            maximumAmount: 46371,
            presetAmount: 217281,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-06-01T06:00:53.623Z"),
            modifiedAt: new Date("2022-03-19T00:02:48.052Z"),
            id: "<value>",
            description: "till private crystallize painfully",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              paidArticles: false,
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/local/bin",
            mimeType: "<value>",
            size: 167540,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-12-10T08:42:56.831Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-11T18:16:52.321Z"),
            sizeReadable: "<value>",
            publicUrl: "https://average-pants.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2022-02-27T05:53:54.747Z"),
        modifiedAt: new Date("2024-08-02T10:54:37.794Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 457552,
        currency: "Surinam Dollar",
        createdAt: new Date("2024-09-24T21:01:28.984Z"),
        modifiedAt: new Date("2023-09-15T18:42:51.260Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-04-03T00:06:33.908Z"),
        endsAt: new Date("2024-06-08T19:18:02.881Z"),
        maxRedemptions: 780666,
        redemptionsCount: 718930,
        organizationId: "<value>",
      },
      url: "https://likely-cruelty.biz/",
    },
  ],
  pagination: {
    totalCount: 682260,
    maxPage: 325439,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |