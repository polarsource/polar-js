# UsersOrdersListResponse

## Example Usage

```typescript
import { UsersOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-10-17T22:52:14.955Z"),
        modifiedAt: new Date("2024-04-28T13:26:34.681Z"),
        id: "<value>",
        amount: 456150,
        taxAmount: 568434,
        currency: "Lek",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        product: {
          createdAt: new Date("2023-11-08T22:17:02.814Z"),
          modifiedAt: new Date("2023-11-02T20:33:57.206Z"),
          id: "<value>",
          name: "<value>",
          description: "Polarised value-added neural-net",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-04T14:29:27.520Z"),
              modifiedAt: new Date("2022-03-08T00:10:14.900Z"),
              id: "<value>",
              isArchived: false,
              priceCurrency: "<value>",
              priceAmount: 666767,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-05-22T07:16:38.400Z"),
              modifiedAt: new Date("2022-12-12T17:01:38.434Z"),
              id: "<value>",
              type: "ads",
              description: "Organized grid-enabled website",
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
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 208876,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-06-26T19:05:08.010Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-12-17T19:21:41.015Z"),
              sizeReadable: "<value>",
              publicUrl: "<value>",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-09-25T21:22:14.779Z"),
          modifiedAt: new Date("2022-06-24T05:32:09.341Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 110375,
          recurringInterval: "year",
        },
        subscription: {
          createdAt: new Date("2022-06-01T10:45:51.668Z"),
          modifiedAt: new Date("2022-08-04T10:54:08.790Z"),
          id: "<value>",
          amount: 368725,
          currency: "Baht",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2022-04-16T07:46:21.076Z"),
          currentPeriodEnd: new Date("2024-12-06T04:47:23.164Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-05-29T15:24:04.349Z"),
          endedAt: new Date("2024-12-06T12:43:25.190Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 604846,
      maxPage: 739264,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.ListResourceUserOrder](../../models/components/listresourceuserorder.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |