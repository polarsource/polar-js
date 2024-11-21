# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-06-05T10:21:41.832Z"),
        modifiedAt: new Date("2022-12-14T03:17:00.431Z"),
        id: "<value>",
        amount: 626707,
        currency: "Saudi Riyal",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2023-12-16T17:29:07.234Z"),
        currentPeriodEnd: new Date("2024-07-24T03:46:55.765Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-06-05T22:56:35.057Z"),
        endedAt: new Date("2024-11-28T05:59:28.499Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        user: {
          email: "Jayson31@gmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://normal-presume.info",
        },
        product: {
          createdAt: new Date("2022-01-06T19:40:31.772Z"),
          modifiedAt: new Date("2022-01-13T10:41:07.081Z"),
          id: "<value>",
          name: "<value>",
          description: "warmly that ocelot ouch marketplace minty coin",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 262800,
          },
          prices: [
            {
              createdAt: new Date("2024-09-20T05:30:40.558Z"),
              modifiedAt: new Date("2024-06-13T17:38:48.093Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 552581,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-11-20T18:50:24.078Z"),
              modifiedAt: new Date("2022-05-02T03:10:42.322Z"),
              id: "<value>",
              description: "for graceful grouper at bah poorly so mmm",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                archived: {
                  "key": false,
                },
                files: [
                  "<value>",
                ],
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/var/log",
              mimeType: "<value>",
              size: 664666,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-04-09T16:01:26.379Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-08-07T02:15:27.661Z"),
              sizeReadable: "<value>",
              publicUrl: "https://sarcastic-patroller.org/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-06-13T12:01:45.796Z"),
                modifiedAt: new Date("2024-09-25T22:48:13.771Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 369523,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2023-09-07T06:05:32.228Z"),
          modifiedAt: new Date("2024-01-03T08:48:44.316Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 286716,
          maximumAmount: 19462,
          presetAmount: 399222,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 860311,
          type: "percentage",
          basisPoints: 344289,
          createdAt: new Date("2023-08-25T12:55:52.067Z"),
          modifiedAt: new Date("2024-06-12T11:40:46.096Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-05-27T23:28:25.141Z"),
          endsAt: new Date("2022-02-15T03:11:35.631Z"),
          maxRedemptions: 816421,
          redemptionsCount: 807564,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 51007,
      maxPage: 627161,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |