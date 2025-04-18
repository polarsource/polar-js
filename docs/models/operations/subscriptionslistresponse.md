# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-02T12:44:40.752Z"),
        modifiedAt: new Date("2023-06-08T23:38:57.617Z"),
        id: "<value>",
        amount: 949183,
        currency: "New Taiwan Dollar",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2024-07-20T11:55:36.744Z"),
        currentPeriodEnd: new Date("2024-06-07T20:08:56.081Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-10-26T11:44:16.609Z"),
        startedAt: new Date("2023-10-07T22:09:10.335Z"),
        endsAt: new Date("2024-08-18T02:05:31.549Z"),
        endedAt: new Date("2025-06-17T10:24:35.511Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-03-25T05:52:34.723Z"),
          modifiedAt: new Date("2025-03-19T15:00:07.500Z"),
          metadata: {
            "key": 1621.41,
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
          deletedAt: new Date("2024-12-24T06:45:52.511Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        product: {
          createdAt: new Date("2023-03-12T22:35:46.828Z"),
          modifiedAt: new Date("2024-12-15T11:15:25.213Z"),
          id: "<value>",
          name: "<value>",
          description: "though concerning splay ugh boo",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2024-11-03T00:30:05.931Z"),
              modifiedAt: new Date("2025-06-04T14:27:42.879Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 526629,
              maximumAmount: 392186,
              presetAmount: 685649,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2024-04-20T13:57:40.434Z"),
              modifiedAt: new Date("2024-02-12T02:14:40.759Z"),
              description: "owlishly quarrel beret doing comestible huzzah",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              metadata: {
                "key": 7061.91,
              },
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
              path: "/proc",
              mimeType: "<value>",
              size: 942797,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-09-13T10:14:31.711Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-07-30T18:25:16.917Z"),
              sizeReadable: "<value>",
              publicUrl: "https://uncommon-operating.biz",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2025-01-20T12:30:15.601Z"),
                modifiedAt: new Date("2024-01-17T10:51:44.396Z"),
                id: "<value>",
                metadata: {
                  "key": 175458,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 169689,
              required: false,
            },
          ],
        },
        discount: {
          duration: "once",
          durationInMonths: 814531,
          type: "percentage",
          amount: 503222,
          currency: "Kyat",
          createdAt: new Date("2025-10-11T13:56:21.251Z"),
          modifiedAt: new Date("2024-08-17T14:59:50.690Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-26T13:10:24.499Z"),
          endsAt: new Date("2023-03-14T14:07:32.344Z"),
          maxRedemptions: 799657,
          redemptionsCount: 176285,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        prices: [
          {
            createdAt: new Date("2024-12-25T14:36:13.087Z"),
            modifiedAt: new Date("2023-01-04T21:39:11.375Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 443568,
          },
        ],
        meters: [
          {
            createdAt: new Date("2024-03-14T00:32:49.114Z"),
            modifiedAt: new Date("2024-02-15T00:43:10.633Z"),
            id: "<value>",
            consumedUnits: 25,
            creditedUnits: 100,
            amount: 0,
            meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
            meter: {
              metadata: {
                "key": 748798,
              },
              createdAt: new Date("2023-02-22T09:29:16.495Z"),
              modifiedAt: new Date("2023-12-07T19:19:58.717Z"),
              id: "<value>",
              name: "<value>",
              filter: {
                conjunction: "and",
                clauses: [],
              },
              aggregation: {},
              organizationId: "<value>",
            },
          },
        ],
      },
    ],
    pagination: {
      totalCount: 993668,
      maxPage: 58850,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |