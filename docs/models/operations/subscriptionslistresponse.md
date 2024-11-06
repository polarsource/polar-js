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
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        user: {
          email: "Adrain_Gerhold23@gmail.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://second-mathematics.net",
        },
        product: {
          createdAt: new Date("2023-04-04T19:49:26.614Z"),
          modifiedAt: new Date("2022-01-06T19:40:31.772Z"),
          id: "<value>",
          name: "<value>",
          description: "abnormally within whether",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-02-08T03:18:25.211Z"),
              modifiedAt: new Date("2024-09-27T23:01:52.690Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 524577,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-05-12T19:46:31.016Z"),
              modifiedAt: new Date("2024-04-07T08:55:07.116Z"),
              id: "<value>",
              description:
                "beneath biodegradable failing step-mother amidst however astride until fabricate usefully",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                note: "<value>",
              },
              isTaxApplicable: false,
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 18096,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-10T06:45:28.118Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-04-23T08:13:17.912Z"),
              sizeReadable: "<value>",
              publicUrl: "https://vague-essence.info",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-10-07T14:44:09.655Z"),
                modifiedAt: new Date("2024-12-14T07:17:28.090Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 697330,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2022-10-17T02:08:42.808Z"),
          modifiedAt: new Date("2024-11-01T07:26:05.631Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 135548,
          maximumAmount: 720266,
          presetAmount: 925395,
          recurringInterval: "year",
        },
      },
    ],
    pagination: {
      totalCount: 423054,
      maxPage: 198991,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |