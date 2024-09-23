# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2023-03-15T04:39:30.711Z"),
      modifiedAt: new Date("2024-01-06T20:04:15.683Z"),
      id: "<value>",
      amount: 344718,
      taxAmount: 713767,
      currency: "New Zealand Dollar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2023-03-14T11:32:05.153Z"),
        modifiedAt: new Date("2023-04-19T05:01:06.232Z"),
        id: "<value>",
        name: "<value>",
        description: "Polarised analyzing secured line",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-08-12T11:13:21.434Z"),
            modifiedAt: new Date("2022-05-02T01:59:23.739Z"),
            id: "<value>",
            isArchived: false,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-03-21T06:56:48.204Z"),
            modifiedAt: new Date("2022-12-18T20:42:53.316Z"),
            id: "<value>",
            type: "custom",
            description: "Realigned background methodology",
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
            path: "/usr/bin",
            mimeType: "<value>",
            size: 634786,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-11-17T05:16:40.066Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-04-24T05:09:16.816Z"),
            sizeReadable: "<value>",
            publicUrl: "<value>",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-08-10T06:27:10.627Z"),
        modifiedAt: new Date("2023-03-20T01:13:26.854Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        priceAmount: 524184,
      },
      subscription: {
        createdAt: new Date("2023-02-05T03:35:13.798Z"),
        modifiedAt: new Date("2022-07-28T20:40:19.670Z"),
        id: "<value>",
        amount: 19122,
        currency: "Libyan Dinar",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2022-09-02T06:12:35.528Z"),
        currentPeriodEnd: new Date("2022-03-30T06:18:49.749Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-04-04T12:01:06.678Z"),
        endedAt: new Date("2022-08-31T15:36:43.644Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 100014,
    maxPage: 265039,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |