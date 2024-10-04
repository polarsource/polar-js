# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2022-12-11T04:50:31.711Z"),
      modifiedAt: new Date("2024-06-26T11:43:18.514Z"),
      id: "<value>",
      amount: 782079,
      taxAmount: 575307,
      currency: "Belarusian Ruble",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2024-02-04T07:55:19.464Z"),
        modifiedAt: new Date("2024-09-08T07:15:04.514Z"),
        id: "<value>",
        name: "<value>",
        description: "throughout absent midst before serene",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-05-04T04:00:11.729Z"),
            modifiedAt: new Date("2023-07-24T11:55:05.448Z"),
            id: "<value>",
            isArchived: false,
            priceCurrency: "<value>",
            minimumAmount: 660582,
            maximumAmount: 566193,
            presetAmount: 712186,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-07-03T03:06:50.452Z"),
            modifiedAt: new Date("2022-09-23T06:43:21.886Z"),
            id: "<value>",
            type: "articles",
            description:
              "cheerfully yuck statement oof scruple carelessly memorise",
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
            path: "/home",
            mimeType: "<value>",
            size: 144727,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-06-21T11:44:04.584Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-05-04T05:05:58.982Z"),
            sizeReadable: "<value>",
            publicUrl: "https://witty-godfather.info",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-12-10T16:54:52.534Z"),
        modifiedAt: new Date("2024-04-23T20:01:53.080Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2024-10-05T12:46:10.291Z"),
        modifiedAt: new Date("2022-02-01T21:48:33.617Z"),
        id: "<value>",
        amount: 115281,
        currency: "New Israeli Sheqel",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2023-09-14T07:01:08.248Z"),
        currentPeriodEnd: new Date("2022-08-25T20:52:24.970Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-11-18T16:22:55.843Z"),
        endedAt: new Date("2024-10-15T14:55:58.519Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 823883,
    maxPage: 248430,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |