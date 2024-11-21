# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2022-07-18T08:10:20.804Z"),
      modifiedAt: new Date("2022-04-01T07:16:45.965Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      clientSecret: "<value>",
      successUrl: "https://oddball-scratch.biz/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2023-12-10T08:42:56.831Z"),
        modifiedAt: new Date("2024-03-11T18:16:52.321Z"),
        id: "<value>",
        name: "<value>",
        description:
          "toward unto inconsequential portray state hm what seemingly",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-09-23T00:12:30.613Z"),
            modifiedAt: new Date("2022-10-13T13:05:15.971Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 590659,
            maximumAmount: 688082,
            presetAmount: 385620,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-11-01T16:04:46.969Z"),
            modifiedAt: new Date("2024-12-20T11:54:29.031Z"),
            id: "<value>",
            type: "custom",
            description: "plumber marten dishonor",
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
            path: "/lost+found",
            mimeType: "<value>",
            size: 677488,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-12-14T18:14:41.004Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-13T17:10:17.807Z"),
            sizeReadable: "<value>",
            publicUrl: "https://spotless-mortise.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-05-08T14:24:55.853Z"),
        modifiedAt: new Date("2023-02-06T21:19:44.981Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 134406,
      },
      discount: {
        duration: "repeating",
        type: "fixed",
        basisPoints: 294426,
        createdAt: new Date("2022-10-17T19:40:17.347Z"),
        modifiedAt: new Date("2024-05-07T09:01:06.714Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-04-28T16:00:32.884Z"),
        endsAt: new Date("2023-02-17T18:09:39.181Z"),
        maxRedemptions: 769331,
        redemptionsCount: 439412,
        organizationId: "<value>",
      },
      url: "https://boring-jet.biz/",
    },
  ],
  pagination: {
    totalCount: 685507,
    maxPage: 240083,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |