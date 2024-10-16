# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-22T10:07:00.418Z"),
        modifiedAt: new Date("2023-07-21T23:44:43.083Z"),
        id: "<value>",
        amount: 484966,
        currency: "Peso Uruguayo",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2024-03-06T05:29:10.468Z"),
        currentPeriodEnd: new Date("2022-02-12T06:12:35.281Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-04-27T07:53:12.556Z"),
        endedAt: new Date("2022-08-26T16:33:18.210Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        user: {
          email: "Ally.Bradtke82@hotmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://gracious-silk.com/",
        },
        product: {
          createdAt: new Date("2022-09-07T04:32:30.698Z"),
          modifiedAt: new Date("2022-03-17T11:04:55.466Z"),
          id: "<value>",
          name: "<value>",
          description:
            "educated or fedora compromise if made-up deer rightfully",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-06-06T12:07:56.121Z"),
              modifiedAt: new Date("2024-02-16T19:29:46.908Z"),
              id: "<value>",
              isArchived: false,
              priceCurrency: "<value>",
              priceAmount: 43975,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-25T00:13:17.699Z"),
              modifiedAt: new Date("2022-02-03T14:30:29.574Z"),
              id: "<value>",
              description: "lest paintwork but fondly",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                paidArticles: false,
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/Library",
              mimeType: "<value>",
              size: 127294,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-31T06:52:43.326Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-06-05T10:21:41.832Z"),
              sizeReadable: "<value>",
              publicUrl: "https://powerful-railway.com/",
            },
          ],
        },
        price: {
          createdAt: new Date("2023-12-16T17:29:07.234Z"),
          modifiedAt: new Date("2024-07-24T03:46:55.765Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 475325,
          maximumAmount: 969206,
          presetAmount: 265632,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 483753,
      maxPage: 256114,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |