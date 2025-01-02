# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-10T09:38:33.519Z"),
        modifiedAt: new Date("2025-02-13T02:44:27.976Z"),
        id: "<value>",
        amount: 978687,
        currency: "Kwacha",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2025-05-08T05:53:08.264Z"),
        currentPeriodEnd: new Date("2023-07-16T06:45:03.338Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-11-21T05:47:05.975Z"),
        endedAt: new Date("2025-01-01T15:52:46.782Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          createdAt: new Date("2025-03-09T19:52:42.065Z"),
          modifiedAt: new Date("2025-05-21T11:33:27.752Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Genesis81@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Hungary",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://kooky-deduction.biz/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Mara_Cronin-Walker@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-07-07T00:56:00.393Z"),
          modifiedAt: new Date("2024-08-01T06:43:02.119Z"),
          id: "<value>",
          name: "<value>",
          description:
            "badly meanwhile disclosure mount wherever thankfully allegation rigidly",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2023-09-27T03:49:30.939Z"),
              modifiedAt: new Date("2025-11-23T09:43:27.791Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 34675,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-01-01T21:33:09.750Z"),
              modifiedAt: new Date("2023-09-24T08:14:03.791Z"),
              id: "<value>",
              description:
                "oval anenst petty which unlined although righteously airline psst",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                repositoryOwner: "polarsource",
                repositoryName: "private_repo",
                permission: "triage",
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 541143,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-07T21:20:12.170Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-19T09:38:38.711Z"),
              sizeReadable: "<value>",
              publicUrl: "https://gruesome-subexpression.biz/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2025-09-25T04:15:37.769Z"),
                modifiedAt: new Date("2023-07-07T22:13:16.221Z"),
                id: "<value>",
                metadata: {
                  "key": 395874,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 65139,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2025-12-29T22:14:55.291Z"),
          modifiedAt: new Date("2024-04-08T00:17:00.771Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 505052,
          type: "fixed",
          basisPoints: 251859,
          createdAt: new Date("2025-08-10T16:52:30.619Z"),
          modifiedAt: new Date("2023-03-26T02:50:46.475Z"),
          id: "<value>",
          metadata: {
            "key": 489133,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-06-22T22:06:31.167Z"),
          endsAt: new Date("2025-06-01T03:35:11.920Z"),
          maxRedemptions: 152042,
          redemptionsCount: 988523,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 314581,
      maxPage: 826020,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |