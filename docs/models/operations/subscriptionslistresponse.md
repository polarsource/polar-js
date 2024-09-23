# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-03-30T21:17:27.464Z"),
        modifiedAt: new Date("2023-03-23T08:04:18.382Z"),
        id: "<value>",
        amount: 232234,
        currency: "Bahamian Dollar",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2022-01-13T12:35:16.338Z"),
        currentPeriodEnd: new Date("2024-04-24T13:21:21.631Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-06-11T01:17:04.418Z"),
        endedAt: new Date("2022-03-29T03:44:55.897Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        user: {
          email: "Margarett86@gmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "<value>",
        },
        product: {
          createdAt: new Date("2022-10-24T06:42:18.790Z"),
          modifiedAt: new Date("2022-05-25T02:31:24.789Z"),
          id: "<value>",
          name: "<value>",
          description: "Balanced disintermediate customer loyalty",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-02T09:43:54.200Z"),
              modifiedAt: new Date("2022-11-07T17:40:47.066Z"),
              id: "<value>",
              isArchived: false,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-05-14T05:54:04.161Z"),
              modifiedAt: new Date("2022-03-04T07:19:54.489Z"),
              id: "<value>",
              type: "github_repository",
              description: "Robust reciprocal core",
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
              path: "/opt/bin",
              mimeType: "<value>",
              size: 587600,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-10-27T00:18:26.357Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-02-11T10:54:43.310Z"),
              sizeReadable: "<value>",
              publicUrl: "<value>",
            },
          ],
        },
        price: {
          createdAt: new Date("2022-02-18T21:28:55.099Z"),
          modifiedAt: new Date("2024-05-26T13:49:51.412Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 76956,
          recurringInterval: "year",
        },
      },
    ],
    pagination: {
      totalCount: 306810,
      maxPage: 577543,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |