# UsersOrdersListResponse

## Example Usage

```typescript
import { UsersOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-01-31T03:47:25.523Z"),
        modifiedAt: new Date("2024-06-27T04:59:29.330Z"),
        id: "<value>",
        amount: 924967,
        taxAmount: 46007,
        currency: "Danish Krone",
        userId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        product: {
          createdAt: new Date("2023-01-17T23:27:12.582Z"),
          modifiedAt: new Date("2024-06-12T04:52:41.784Z"),
          id: "<value>",
          name: "<value>",
          description:
            "unit grade soap sizzling huzzah like nor sizzling cheerfully hungrily",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-08-19T20:54:27.100Z"),
              modifiedAt: new Date("2022-11-06T20:07:53.826Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-02-18T12:41:59.818Z"),
              modifiedAt: new Date("2022-01-09T15:23:00.451Z"),
              id: "<value>",
              type: "ads",
              description: "ew a sidetrack popularity clamor svelte ah",
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
              path: "/etc/periodic",
              mimeType: "<value>",
              size: 886305,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-05-05T05:57:31.337Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-09-22T00:45:34.682Z"),
              sizeReadable: "<value>",
              publicUrl: "https://quintessential-hunt.com/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-02-13T10:02:48.141Z"),
          modifiedAt: new Date("2022-03-07T16:46:29.356Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 61078,
        },
        subscription: {
          createdAt: new Date("2024-09-21T21:00:27.770Z"),
          modifiedAt: new Date("2024-03-21T21:54:23.669Z"),
          id: "<value>",
          amount: 898063,
          currency: "Philippine Peso",
          recurringInterval: "year",
          status: "trialing",
          currentPeriodStart: new Date("2024-12-29T18:23:56.613Z"),
          currentPeriodEnd: new Date("2023-02-01T23:01:15.623Z"),
          cancelAtPeriodEnd: false,
          startedAt: new Date("2023-05-31T19:56:59.856Z"),
          endedAt: new Date("2023-02-19T13:21:39.892Z"),
          userId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          checkoutId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 979527,
      maxPage: 174658,
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `result`                                                                             | [components.ListResourceUserOrder](../../models/components/listresourceuserorder.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |