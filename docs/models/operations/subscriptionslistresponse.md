# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-21T21:28:12.872Z"),
        modifiedAt: new Date("2024-05-05T09:10:53.396Z"),
        id: "<value>",
        amount: 710308,
        currency: "Lempira",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2024-05-13T23:16:26.464Z"),
        currentPeriodEnd: new Date("2024-09-15T21:22:35.169Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-05-31T21:39:06.690Z"),
        startedAt: new Date("2024-01-23T08:51:17.105Z"),
        endsAt: new Date("2024-06-23T19:13:34.057Z"),
        endedAt: new Date("2024-07-09T12:16:50.674Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "customer_service",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-05-01T11:45:39.826Z"),
          modifiedAt: new Date("2024-10-18T16:24:14.861Z"),
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
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-09-03T02:34:59.893Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Trent0@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-12-19T20:55:47.008Z"),
          modifiedAt: new Date("2025-06-09T19:38:34.690Z"),
          id: "<value>",
          name: "<value>",
          description: "analyse after meh bustling ew shyly since pish gosh",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2025-05-02T08:30:53.907Z"),
              modifiedAt: new Date("2023-04-22T00:35:29.397Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 591293,
              maximumAmount: 126505,
              presetAmount: 53407,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-11-16T14:41:05.189Z"),
              modifiedAt: new Date("2024-03-15T22:04:13.650Z"),
              id: "<value>",
              description:
                "sonata throughout innocently er wilt punctually sudden affectionate",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                guildId: "<id>",
                roleId: "<id>",
                guildToken: "<value>",
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/etc/periodic",
              mimeType: "<value>",
              size: 186760,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-06-11T17:24:07.582Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-10-10T01:47:12.756Z"),
              sizeReadable: "<value>",
              publicUrl: "https://candid-cellar.net/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-12-25T08:25:58.170Z"),
                modifiedAt: new Date("2024-03-06T01:05:25.783Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 850392,
              required: false,
            },
          ],
        },
        discount: {
          duration: "repeating",
          durationInMonths: 693648,
          type: "fixed",
          amount: 35591,
          currency: "Tenge",
          createdAt: new Date("2024-02-24T10:34:06.485Z"),
          modifiedAt: new Date("2025-09-25T00:15:26.523Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-12-15T17:53:37.407Z"),
          endsAt: new Date("2025-01-26T04:20:35.290Z"),
          maxRedemptions: 912855,
          redemptionsCount: 213703,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2025-04-12T03:18:11.966Z"),
          modifiedAt: new Date("2023-02-01T18:10:57.547Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 773533,
        },
        prices: [
          {
            createdAt: new Date("2025-07-09T03:06:50.530Z"),
            modifiedAt: new Date("2023-06-18T21:54:42.100Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 674864,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 692858,
      maxPage: 921767,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |