# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-18T03:00:36.748Z"),
        modifiedAt: new Date("2024-10-03T17:26:45.068Z"),
        id: "<value>",
        amount: 120120,
        currency: "Guyana Dollar",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2024-09-13T06:05:41.309Z"),
        currentPeriodEnd: new Date("2022-03-04T08:05:57.928Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-12-10T14:41:41.611Z"),
        endedAt: new Date("2022-04-16T17:02:36.383Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        user: {
          email: "Kenny_Heaney@hotmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://lovable-tennis.name",
        },
        product: {
          createdAt: new Date("2024-06-25T05:46:03.384Z"),
          modifiedAt: new Date("2024-03-06T05:29:10.468Z"),
          id: "<value>",
          name: "<value>",
          description: "legitimize geez mmm",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-12-03T07:19:37.207Z"),
              modifiedAt: new Date("2022-06-27T22:39:48.462Z"),
              id: "<value>",
              isArchived: false,
              priceCurrency: "<value>",
              priceAmount: 290841,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-01-14T16:10:50.825Z"),
              modifiedAt: new Date("2023-06-11T03:31:17.736Z"),
              id: "<value>",
              type: "discord",
              description:
                "inasmuch voluntarily positively upbeat merge mozzarella alliance airbrush oil",
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
              path: "/tmp",
              mimeType: "<value>",
              size: 948541,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-05-02T23:46:34.697Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-07-18T18:52:26.316Z"),
              sizeReadable: "<value>",
              publicUrl: "https://dependent-yeast.com/",
            },
          ],
        },
        price: {
          createdAt: new Date("2022-03-16T15:07:15.176Z"),
          modifiedAt: new Date("2024-10-31T11:03:10.627Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 964925,
          maximumAmount: 719389,
          presetAmount: 349993,
          recurringInterval: "month",
        },
      },
    ],
    pagination: {
      totalCount: 265303,
      maxPage: 127294,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |