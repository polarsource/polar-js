# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-19T16:16:29.816Z"),
        modifiedAt: new Date("2023-09-28T08:39:39.127Z"),
        id: "<value>",
        amount: 16031,
        currency: "Gibraltar Pound",
        recurringInterval: "year",
        status: "unpaid",
        currentPeriodStart: new Date("2025-10-03T19:59:31.448Z"),
        currentPeriodEnd: new Date("2023-07-31T19:59:30.248Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-01-04T03:37:00.423Z"),
        startedAt: new Date("2024-06-23T10:56:58.862Z"),
        endsAt: new Date("2023-10-16T10:23:17.202Z"),
        endedAt: new Date("2024-12-06T11:49:29.517Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-04-14T00:35:39.583Z"),
          modifiedAt: new Date("2025-09-25T01:30:25.474Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-07-19T15:15:21.257Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Norma_Wolf@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-05-07T04:59:11.042Z"),
          modifiedAt: new Date("2023-10-24T05:26:05.632Z"),
          id: "<value>",
          name: "<value>",
          description: "so massive tarry usually glisten",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2025-10-10T02:00:55.209Z"),
              modifiedAt: new Date("2023-11-23T10:40:17.877Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 761893,
              maximumAmount: 659608,
              presetAmount: 125586,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-11-24T15:03:45.117Z"),
              modifiedAt: new Date("2023-10-17T06:13:37.826Z"),
              id: "<value>",
              description: "pasta noisily accurate",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                repositoryOwner: "polarsource",
                repositoryName: "private_repo",
                permission: "admin",
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/private/var",
              mimeType: "<value>",
              size: 579119,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-12T03:10:25.417Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-04-30T12:56:06.723Z"),
              sizeReadable: "<value>",
              publicUrl: "https://right-lay.org/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2025-07-13T14:27:42.268Z"),
                modifiedAt: new Date("2023-12-28T10:29:46.261Z"),
                id: "<value>",
                metadata: {
                  "key": 708477,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 691557,
              required: false,
            },
          ],
        },
        discount: {
          duration: "once",
          type: "fixed",
          amount: 233265,
          currency: "New Israeli Sheqel",
          createdAt: new Date("2025-12-10T09:17:08.132Z"),
          modifiedAt: new Date("2024-02-11T20:32:16.357Z"),
          id: "<value>",
          metadata: {
            "key": 76399,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-02-11T21:16:08.870Z"),
          endsAt: new Date("2023-11-28T16:53:58.024Z"),
          maxRedemptions: 365974,
          redemptionsCount: 118529,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2025-02-02T02:20:17.857Z"),
          modifiedAt: new Date("2023-09-16T14:08:32.927Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 960433,
        },
        prices: [
          {
            createdAt: new Date("2025-10-26T07:59:26.802Z"),
            modifiedAt: new Date("2023-02-10T22:13:56.169Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 259862,
      maxPage: 234235,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |