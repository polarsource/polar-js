# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2024-08-02T22:25:17.358Z"),
      modifiedAt: new Date("2023-07-11T19:35:53.842Z"),
      id: "<value>",
      amount: 461094,
      taxAmount: 965117,
      currency: "South Sudanese pound",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2023-09-05T08:51:35.936Z"),
        modifiedAt: new Date("2022-12-29T08:33:05.197Z"),
        id: "<value>",
        name: "<value>",
        description:
          "numeric positively rosemary shaft barring happily obesity lamp ill-fated",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-01-09T02:39:07.024Z"),
            modifiedAt: new Date("2024-11-10T10:02:57.999Z"),
            id: "<value>",
            isArchived: false,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2022-11-16T07:58:25.136Z"),
            modifiedAt: new Date("2024-10-03T03:11:16.049Z"),
            id: "<value>",
            type: "downloadables",
            description: "when co-producer over dearly",
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
            path: "/lib",
            mimeType: "<value>",
            size: 592946,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-11-03T05:14:01.508Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-09-12T22:21:35.224Z"),
            sizeReadable: "<value>",
            publicUrl: "https://long-term-ignorance.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2022-07-02T11:07:10.887Z"),
        modifiedAt: new Date("2023-08-07T00:52:08.467Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
      subscription: {
        createdAt: new Date("2022-07-14T18:39:25.284Z"),
        modifiedAt: new Date("2023-05-25T13:18:45.811Z"),
        id: "<value>",
        amount: 609079,
        currency: "Yuan Renminbi",
        recurringInterval: "year",
        status: "incomplete",
        currentPeriodStart: new Date("2024-11-03T06:30:48.767Z"),
        currentPeriodEnd: new Date("2023-05-29T04:05:53.462Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-01-04T09:22:53.989Z"),
        endedAt: new Date("2022-05-09T00:29:29.459Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 432597,
    maxPage: 659804,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |