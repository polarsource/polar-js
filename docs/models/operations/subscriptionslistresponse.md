# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-06-11T16:12:12.042Z"),
        modifiedAt: new Date("2023-07-04T00:38:08.268Z"),
        id: "<value>",
        amount: 180803,
        currency: "Zimbabwe Dollar",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2022-03-12T07:46:19.683Z"),
        currentPeriodEnd: new Date("2023-10-19T01:19:01.556Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-05-17T05:40:28.556Z"),
        endedAt: new Date("2022-10-14T20:50:51.008Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          createdAt: new Date("2022-04-18T12:50:34.974Z"),
          modifiedAt: new Date("2024-06-28T16:41:02.450Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Edwina_Fadel@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "French Southern Territories",
          },
          taxId: [
            "cn_tin",
          ],
          organizationId: "<value>",
          avatarUrl: "https://frank-atrium.info",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Jamie61@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2022-12-09T23:28:03.526Z"),
          modifiedAt: new Date("2024-05-13T12:44:04.791Z"),
          id: "<value>",
          name: "<value>",
          description:
            "darn given pace fraudster honesty enlightened like cheerfully or",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2022-11-30T22:04:47.090Z"),
              modifiedAt: new Date("2022-02-14T07:51:45.628Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 843132,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-10-24T13:04:44.480Z"),
              modifiedAt: new Date("2024-04-23T05:52:51.473Z"),
              id: "<value>",
              description:
                "mmm luck oh fussy graft astride ascertain mainstream",
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
              path: "/usr/local/bin",
              mimeType: "<value>",
              size: 962380,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-11-12T13:52:42.697Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-05-09T03:26:26.188Z"),
              sizeReadable: "<value>",
              publicUrl: "https://angelic-flu.com",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-09-12T00:09:48.443Z"),
                modifiedAt: new Date("2022-08-21T04:25:21.569Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 396391,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2024-07-14T10:56:14.102Z"),
          modifiedAt: new Date("2023-03-29T06:43:43.157Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 982407,
          maximumAmount: 198849,
          presetAmount: 879491,
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          type: "fixed",
          basisPoints: 372767,
          createdAt: new Date("2022-07-16T11:52:25.526Z"),
          modifiedAt: new Date("2023-06-20T01:41:54.596Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2022-02-12T14:32:02.870Z"),
          endsAt: new Date("2024-02-27T05:59:10.672Z"),
          maxRedemptions: 333800,
          redemptionsCount: 172302,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 947974,
      maxPage: 488559,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |