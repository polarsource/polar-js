# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2023-04-15T05:58:11.260Z"),
      modifiedAt: new Date("2022-11-22T09:26:52.208Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      clientSecret: "<value>",
      successUrl: "https://some-grass.biz",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2022-11-19T06:41:38.705Z"),
        modifiedAt: new Date("2023-08-10T01:38:45.701Z"),
        id: "<value>",
        name: "<value>",
        description: "duh implode quirkily including amidst fuss foot",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-07-26T12:45:38.576Z"),
            modifiedAt: new Date("2023-05-30T19:48:45.859Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-25T05:24:09.981Z"),
            modifiedAt: new Date("2022-11-20T07:02:04.141Z"),
            id: "<value>",
            type: "downloadables",
            description: "pro mockingly onto scrape beside",
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
            size: 992327,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-12-06T15:34:49.873Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-06T12:49:01.406Z"),
            sizeReadable: "<value>",
            publicUrl: "https://rewarding-cheetah.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-01-16T00:30:32.668Z"),
        modifiedAt: new Date("2024-06-01T01:04:24.763Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 717913,
      },
      discount: {
        duration: "forever",
        type: "fixed",
        amount: 462247,
        currency: "Balboa",
        createdAt: new Date("2023-02-12T13:40:10.996Z"),
        modifiedAt: new Date("2023-07-21T21:38:04.131Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2022-12-07T04:29:21.475Z"),
        endsAt: new Date("2022-07-11T19:27:37.850Z"),
        maxRedemptions: 907566,
        redemptionsCount: 483254,
        organizationId: "<value>",
      },
      url: "https://well-lit-doubter.net/",
    },
  ],
  pagination: {
    totalCount: 560156,
    maxPage: 690018,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |