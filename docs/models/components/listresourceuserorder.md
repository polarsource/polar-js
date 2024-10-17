# ListResourceUserOrder

## Example Usage

```typescript
import { ListResourceUserOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceUserOrder = {
  items: [
    {
      createdAt: new Date("2023-12-26T05:38:43.189Z"),
      modifiedAt: new Date("2024-04-18T00:54:24.193Z"),
      id: "<value>",
      amount: 539502,
      taxAmount: 158515,
      currency: "Jamaican Dollar",
      userId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      product: {
        createdAt: new Date("2022-03-26T06:04:02.019Z"),
        modifiedAt: new Date("2024-01-26T11:21:55.369Z"),
        id: "<value>",
        name: "<value>",
        description:
          "recovery furthermore glaring huddle well-lit gently excluding notwithstanding whack versus",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2022-06-18T21:53:52.884Z"),
            modifiedAt: new Date("2022-09-26T12:13:20.933Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 592946,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-06-21T04:35:15.122Z"),
            modifiedAt: new Date("2023-06-13T08:09:17.911Z"),
            id: "<value>",
            type: "discord",
            description:
              "loyally beyond onto if carefully eek clavicle cantaloupe inside",
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
            size: 649070,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-07-27T05:08:40.414Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-04-13T03:51:39.302Z"),
            sizeReadable: "<value>",
            publicUrl: "https://rotating-substitution.com",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2022-01-25T03:09:39.299Z"),
        modifiedAt: new Date("2024-03-15T13:07:35.858Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
      subscription: {
        createdAt: new Date("2023-05-12T19:42:35.257Z"),
        modifiedAt: new Date("2023-04-22T00:36:49.607Z"),
        id: "<value>",
        amount: 278469,
        currency: "UAE Dirham",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2024-08-08T13:05:34.702Z"),
        currentPeriodEnd: new Date("2022-10-20T02:08:16.863Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-11-22T06:26:59.776Z"),
        endedAt: new Date("2023-02-08T00:18:45.540Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 297585,
    maxPage: 152807,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.UserOrder](../../models/components/userorder.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |