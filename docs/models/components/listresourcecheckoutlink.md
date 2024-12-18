# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2022-01-15T12:50:59.883Z"),
      modifiedAt: new Date("2023-04-11T22:26:51.446Z"),
      id: "<value>",
      metadata: {
        "key": 863273,
      },
      clientSecret: "<value>",
      successUrl: "https://waterlogged-switchboard.org/",
      label: "<value>",
      allowDiscountCodes: false,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      product: {
        createdAt: new Date("2023-12-06T08:47:09.306Z"),
        modifiedAt: new Date("2023-05-27T10:58:25.218Z"),
        id: "<value>",
        name: "<value>",
        description:
          "nor yuck bah verbally busy quarrelsomely wry zowie inasmuch",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-10-02T00:07:14.901Z"),
            modifiedAt: new Date("2024-07-12T13:06:18.566Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 770313,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-10-05T14:17:24.216Z"),
            modifiedAt: new Date("2023-06-22T12:17:16.742Z"),
            id: "<value>",
            type: "downloadables",
            description: "meaningfully royal chip bloom representation",
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
            path: "/etc/namedb",
            mimeType: "<value>",
            size: 697160,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-06-23T14:49:51.984Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-04-11T09:26:51.246Z"),
            sizeReadable: "<value>",
            publicUrl: "https://wretched-casket.biz/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-10-22T02:46:29.890Z"),
        modifiedAt: new Date("2024-09-24T18:40:19.566Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 438193,
        recurringInterval: "month",
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        amount: 393289,
        currency: "Cayman Islands Dollar",
        createdAt: new Date("2023-12-24T15:51:09.728Z"),
        modifiedAt: new Date("2023-05-26T06:35:27.544Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2022-11-23T01:03:25.540Z"),
        endsAt: new Date("2023-07-21T23:24:04.907Z"),
        maxRedemptions: 994532,
        redemptionsCount: 489926,
        organizationId: "<value>",
      },
      url: "https://warmhearted-excess.com/",
    },
  ],
  pagination: {
    totalCount: 72285,
    maxPage: 171134,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |