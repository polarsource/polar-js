# UsersSubscriptionsListResponse

## Example Usage

```typescript
import { UsersSubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-12-26T11:23:46.953Z"),
        modifiedAt: new Date("2024-01-16T15:53:28.719Z"),
        id: "<value>",
        amount: 63207,
        currency: "Metical",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2022-09-19T07:13:22.589Z"),
        currentPeriodEnd: new Date("2023-07-18T21:44:35.519Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-02-08T05:58:01.482Z"),
        endedAt: new Date("2023-05-16T08:17:57.191Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        product: {
          createdAt: new Date("2023-01-05T21:00:18.180Z"),
          modifiedAt: new Date("2024-11-29T15:51:58.019Z"),
          id: "<value>",
          name: "<value>",
          description: "form rundown phew trolley",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-21T20:20:12.003Z"),
              modifiedAt: new Date("2022-06-11T23:57:33.954Z"),
              id: "<value>",
              isArchived: false,
              priceCurrency: "<value>",
              minimumAmount: 684935,
              maximumAmount: 656762,
              presetAmount: 862063,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-06-30T13:31:25.620Z"),
              modifiedAt: new Date("2023-09-29T20:46:44.681Z"),
              id: "<value>",
              type: "articles",
              description: "woot foot whereas besides",
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
              path: "/bin",
              mimeType: "<value>",
              size: 737254,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-05-01T07:46:13.385Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-10-27T12:19:44.874Z"),
              sizeReadable: "<value>",
              publicUrl: "https://prickly-venom.com",
            },
          ],
        },
        price: {
          createdAt: new Date("2023-08-10T06:27:10.627Z"),
          modifiedAt: new Date("2023-03-20T01:13:26.854Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          priceAmount: 524184,
        },
      },
    ],
    pagination: {
      totalCount: 365100,
      maxPage: 190567,
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [components.ListResourceUserSubscription](../../models/components/listresourceusersubscription.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |