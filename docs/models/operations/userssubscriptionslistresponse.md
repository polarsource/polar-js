# UsersSubscriptionsListResponse

## Example Usage

```typescript
import { UsersSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-12T17:39:01.246Z"),
        modifiedAt: new Date("2022-11-21T13:40:18.320Z"),
        id: "<value>",
        amount: 118727,
        currency: "Dalasi",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2024-01-29T22:47:11.861Z"),
        currentPeriodEnd: new Date("2023-09-13T23:53:04.745Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-10-18T20:48:18.611Z"),
        endedAt: new Date("2023-07-28T11:31:00.474Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        product: {
          createdAt: new Date("2022-04-13T23:00:40.302Z"),
          modifiedAt: new Date("2023-09-24T05:41:47.829Z"),
          id: "<value>",
          name: "<value>",
          description: "Up-sized eco-centric moratorium",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-11-14T04:32:16.328Z"),
              modifiedAt: new Date("2022-07-20T18:39:56.110Z"),
              id: "<value>",
              isArchived: false,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-06-27T12:26:18.703Z"),
              modifiedAt: new Date("2022-01-06T03:30:35.300Z"),
              id: "<value>",
              type: "github_repository",
              description: "Extended optimal toolset",
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
              size: 576157,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-11T21:04:15.457Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-09-20T04:30:50.868Z"),
              sizeReadable: "<value>",
              publicUrl: "<value>",
            },
          ],
        },
        price: {
          createdAt: new Date("2023-05-06T01:11:09.453Z"),
          modifiedAt: new Date("2024-07-16T15:56:01.395Z"),
          id: "<value>",
          isArchived: false,
          recurringInterval: "year",
        },
      },
    ],
    pagination: {
      totalCount: 297437,
      maxPage: 813798,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceUserSubscription](../../models/components/listresourceusersubscription.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |