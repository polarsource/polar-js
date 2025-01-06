# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-30T22:25:36.191Z"),
        modifiedAt: new Date("2023-04-25T12:59:08.238Z"),
        id: "<value>",
        amount: 581340,
        currency: "North Korean Won",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2023-07-24T01:54:16.556Z"),
        currentPeriodEnd: new Date("2023-04-17T23:23:59.287Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-05-12T04:30:10.787Z"),
        startedAt: new Date("2023-01-21T23:46:01.067Z"),
        endsAt: new Date("2024-06-28T16:07:27.261Z"),
        endedAt: new Date("2025-03-20T07:59:36.852Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          createdAt: new Date("2025-10-01T21:33:32.957Z"),
          modifiedAt: new Date("2025-09-28T16:24:17.935Z"),
          id: "<value>",
          metadata: {
            "key": 386586,
          },
          email: "Jamison.Kling@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Uzbekistan",
          },
          taxId: [
            "ve_rif",
          ],
          organizationId: "<value>",
          avatarUrl: "https://cautious-decryption.biz",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Shyanne3@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-04-15T14:34:09.142Z"),
          modifiedAt: new Date("2024-04-21T15:26:51.405Z"),
          id: "<value>",
          name: "<value>",
          description: "crossly sprinkles when how",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2025-01-17T15:11:03.432Z"),
              modifiedAt: new Date("2023-12-23T20:27:41.424Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-06-13T10:46:10.763Z"),
              modifiedAt: new Date("2025-10-12T11:41:32.180Z"),
              id: "<value>",
              description: "about despite bah oh once any lest oof wilted",
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
              path: "/etc",
              mimeType: "<value>",
              size: 594786,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-01-12T15:19:31.438Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-29T10:19:40.657Z"),
              sizeReadable: "<value>",
              publicUrl: "https://sorrowful-editor.org",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-06-03T10:10:43.292Z"),
                modifiedAt: new Date("2025-03-09T20:13:31.276Z"),
                id: "<value>",
                metadata: {
                  "key": 514491,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 474816,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2023-12-19T08:16:20.843Z"),
          modifiedAt: new Date("2023-04-01T20:57:17.921Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 760315,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 657119,
          type: "fixed",
          amount: 133898,
          currency: "Tenge",
          createdAt: new Date("2023-07-30T21:51:42.150Z"),
          modifiedAt: new Date("2024-04-04T18:07:06.210Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-10-30T08:56:58.673Z"),
          endsAt: new Date("2024-04-20T08:15:49.364Z"),
          maxRedemptions: 31480,
          redemptionsCount: 894030,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 79533,
      maxPage: 634463,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |