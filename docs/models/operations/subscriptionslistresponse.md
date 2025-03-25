# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-21T03:17:26.002Z"),
        modifiedAt: new Date("2025-02-18T11:59:52.074Z"),
        id: "<value>",
        amount: 472355,
        currency: "Indian Rupee",
        recurringInterval: "year",
        status: "trialing",
        currentPeriodStart: new Date("2023-09-19T04:38:43.212Z"),
        currentPeriodEnd: new Date("2025-09-21T19:24:43.932Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-05-31T19:26:40.800Z"),
        startedAt: new Date("2023-12-31T22:04:58.038Z"),
        endsAt: new Date("2023-11-15T04:34:57.852Z"),
        endedAt: new Date("2025-04-08T08:38:32.225Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-07-21T21:47:53.222Z"),
          modifiedAt: new Date("2024-05-04T22:23:11.834Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "SE",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-10-15T06:39:38.625Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Catherine.Fritsch98@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-03-27T02:09:03.208Z"),
          modifiedAt: new Date("2025-03-27T12:57:13.873Z"),
          id: "<value>",
          name: "<value>",
          description: "giggle wherever mechanically taxicab",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 432668,
          },
          prices: [
            {
              createdAt: new Date("2025-04-21T05:46:15.342Z"),
              modifiedAt: new Date("2025-04-27T00:34:32.428Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 203411,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-05T06:38:06.989Z"),
              modifiedAt: new Date("2023-01-11T20:48:09.099Z"),
              id: "<value>",
              description:
                "ick pushy above phew crossly league athwart phooey positively",
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
              path: "/srv",
              mimeType: "<value>",
              size: 215212,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-03-23T19:55:15.274Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-05-12T05:27:49.525Z"),
              sizeReadable: "<value>",
              publicUrl: "https://prestigious-eyebrow.biz/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-09-28T08:39:39.127Z"),
                modifiedAt: new Date("2023-01-18T13:41:31.922Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {
                  options: [
                    {
                      value: "<value>",
                      label: "<value>",
                    },
                  ],
                },
              },
              order: 874003,
              required: false,
            },
          ],
        },
        discount: {
          duration: "repeating",
          durationInMonths: 193278,
          type: "percentage",
          basisPoints: 492205,
          createdAt: new Date("2023-10-16T10:23:17.202Z"),
          modifiedAt: new Date("2024-12-06T11:49:29.517Z"),
          id: "<value>",
          metadata: {
            "key": 144838,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-04-14T00:35:39.583Z"),
          endsAt: new Date("2025-09-25T01:30:25.474Z"),
          maxRedemptions: 308988,
          redemptionsCount: 99171,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2024-05-21T15:33:06.527Z"),
          modifiedAt: new Date("2025-04-17T06:12:27.095Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        prices: [
          {
            createdAt: new Date("2025-05-07T19:52:37.336Z"),
            modifiedAt: new Date("2024-02-26T15:17:44.821Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 253656,
      maxPage: 553029,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |