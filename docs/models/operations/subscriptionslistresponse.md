# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-20T05:06:41.440Z"),
        modifiedAt: new Date("2025-08-30T22:32:53.523Z"),
        id: "<value>",
        amount: 793954,
        currency: "Azerbaijanian Manat",
        recurringInterval: "year",
        status: "active",
        currentPeriodStart: new Date("2025-02-02T10:55:26.311Z"),
        currentPeriodEnd: new Date("2025-06-24T18:17:35.994Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-09-10T10:32:59.950Z"),
        startedAt: new Date("2024-01-12T05:24:05.684Z"),
        endsAt: new Date("2025-06-03T04:32:33.374Z"),
        endedAt: new Date("2024-02-11T20:26:54.603Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-04-29T04:35:05.789Z"),
          modifiedAt: new Date("2024-10-24T18:21:22.581Z"),
          metadata: {
            "key": false,
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
          deletedAt: new Date("2025-04-26T20:46:56.899Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Magdalena_Mayert26@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-01-17T04:26:28.465Z"),
          modifiedAt: new Date("2024-10-23T08:47:55.241Z"),
          id: "<value>",
          name: "<value>",
          description: "blah scenario physically",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2024-07-19T07:56:36.040Z"),
              modifiedAt: new Date("2025-07-14T08:09:41.643Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-12-28T10:29:46.261Z"),
              modifiedAt: new Date("2024-01-19T16:40:09.743Z"),
              id: "<value>",
              description:
                "westernise whoa wildly deselect assist lounge oof revere",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                prefix: "<value>",
                expires: {
                  ttl: 135278,
                  timeframe: "month",
                },
                activations: {
                  limit: 695652,
                  enableCustomerAdmin: false,
                },
                limitUsage: 632888,
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/etc",
              mimeType: "<value>",
              size: 336437,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-22T10:37:19.141Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-06-13T23:31:57.151Z"),
              sizeReadable: "<value>",
              publicUrl: "https://infamous-knickers.net/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-07-01T23:03:46.196Z"),
                modifiedAt: new Date("2023-12-06T03:55:33.898Z"),
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
              order: 883374,
              required: false,
            },
          ],
        },
        discount: {
          duration: "forever",
          durationInMonths: 695483,
          type: "percentage",
          amount: 823411,
          currency: "Kip",
          createdAt: new Date("2024-04-19T20:09:40.616Z"),
          modifiedAt: new Date("2025-04-05T04:31:27.188Z"),
          id: "<value>",
          metadata: {
            "key": 54587,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-06-13T06:37:29.999Z"),
          endsAt: new Date("2024-12-16T21:15:11.586Z"),
          maxRedemptions: 459106,
          redemptionsCount: 980294,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2024-01-20T10:45:07.072Z"),
          modifiedAt: new Date("2024-08-09T08:29:51.766Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 591309,
        },
        prices: [
          {
            createdAt: new Date("2024-01-06T12:13:28.450Z"),
            modifiedAt: new Date("2025-08-22T16:23:18.387Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 263528,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 47284,
      maxPage: 465898,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |