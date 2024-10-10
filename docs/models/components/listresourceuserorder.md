# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2024-05-04T05:05:58.982Z"),
      modifiedAt: new Date("2024-05-03T14:22:38.068Z"),
      id: "<value>",
      amount: 975804,
      taxAmount: 382718,
      currency: "Iraqi Dinar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2022-01-02T23:51:35.966Z"),
        modifiedAt: new Date("2024-06-28T14:08:46.947Z"),
        id: "<value>",
        name: "<value>",
        description:
          "broadly dishearten until duh small helpfully chasuble defiantly",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-12-05T02:02:21.383Z"),
            modifiedAt: new Date("2022-01-06T16:56:17.091Z"),
            id: "<value>",
            isArchived: false,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-01-15T23:14:29.526Z"),
            modifiedAt: new Date("2022-02-05T19:26:06.390Z"),
            id: "<value>",
            type: "ads",
            description: "supposing great wrongly",
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
            path: "/usr/ports",
            mimeType: "<value>",
            size: 904920,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-21T17:54:28.966Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-11-19T09:21:25.817Z"),
            sizeReadable: "<value>",
            publicUrl: "https://moral-pillow.net/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-04-23T23:25:57.748Z"),
        modifiedAt: new Date("2022-08-17T05:07:46.724Z"),
        id: "<value>",
        isArchived: false,
        priceCurrency: "<value>",
        minimumAmount: 552962,
        maximumAmount: 275913,
        presetAmount: 535055,
        recurringInterval: "month",
      },
      subscription: {
        createdAt: new Date("2024-09-13T08:05:18.568Z"),
        modifiedAt: new Date("2023-01-06T13:27:24.144Z"),
        id: "<value>",
        amount: 610335,
        currency: "Boliviano boliviano",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-11-14T08:36:25.032Z"),
        currentPeriodEnd: new Date("2023-03-08T23:50:01.730Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-10-28T17:13:19.444Z"),
        endedAt: new Date("2022-08-25T12:45:17.173Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 861477,
    maxPage: 804333,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |