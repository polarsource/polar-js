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
        priceId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-03-25T05:52:34.723Z"),
          modifiedAt: new Date("2025-03-19T15:00:07.500Z"),
          metadata: {
            "key": 162141,
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
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Macie_Lockman68@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-05-19T05:22:00.117Z"),
          modifiedAt: new Date("2025-02-22T06:25:33.303Z"),
          id: "<value>",
          name: "<value>",
          description:
            "concerning splay ugh boo among concerning gripping outnumber",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2024-12-07T16:19:34.014Z"),
              modifiedAt: new Date("2025-06-07T01:54:49.129Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 75956,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-10-26T11:12:01.917Z"),
              modifiedAt: new Date("2023-06-16T00:30:09.541Z"),
              id: "<value>",
              description:
                "so energetically unbalance now frenetically wonderful petal republican",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                prefix: "<value>",
                expires: {
                  ttl: 47806,
                  timeframe: "year",
                },
                activations: {
                  limit: 149919,
                  enableCustomerAdmin: false,
                },
                limitUsage: 380832,
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/var/yp",
              mimeType: "<value>",
              size: 58850,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-04T13:36:03.981Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-02-21T14:45:33.903Z"),
              sizeReadable: "<value>",
              publicUrl: "https://delicious-baritone.com",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-11-07T20:39:53.123Z"),
                modifiedAt: new Date("2023-12-28T22:15:27.637Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 249686,
              required: false,
            },
          ],
        },
        discount: {
          duration: "once",
          durationInMonths: 79176,
          type: "percentage",
          basisPoints: 276141,
          createdAt: new Date("2025-12-23T07:28:52.401Z"),
          modifiedAt: new Date("2025-07-10T23:00:33.430Z"),
          id: "<value>",
          metadata: {
            "key": 838548,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-03-12T10:39:56.820Z"),
          endsAt: new Date("2023-08-06T18:12:04.159Z"),
          maxRedemptions: 146514,
          redemptionsCount: 297009,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2023-11-27T15:06:59.053Z"),
          modifiedAt: new Date("2023-05-03T10:31:06.960Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: "<value>",
          capAmount: 658734,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
        prices: [
          {
            createdAt: new Date("2024-06-29T17:00:22.744Z"),
            modifiedAt: new Date("2025-05-28T17:50:05.779Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 58215,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 37779,
      maxPage: 88997,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |