# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-06-16T09:26:41.863Z"),
        modifiedAt: new Date("2025-04-29T04:35:05.789Z"),
        id: "<value>",
        amount: 604713,
        currency: "Vatu",
        recurringInterval: "month",
        status: "active",
        currentPeriodStart: new Date("2025-04-26T20:46:56.899Z"),
        currentPeriodEnd: new Date("2025-04-15T00:49:44.087Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-12-23T22:20:10.160Z"),
        startedAt: new Date("2023-05-18T15:26:11.061Z"),
        endsAt: new Date("2024-09-25T23:51:52.163Z"),
        endedAt: new Date("2025-11-24T15:03:45.117Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-01-17T04:26:28.465Z"),
          modifiedAt: new Date("2024-10-23T08:47:55.241Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2025-09-14T17:23:49.285Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Alexandre.Blick5@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-08-02T14:29:39.309Z"),
          modifiedAt: new Date("2024-09-13T07:03:50.482Z"),
          id: "<value>",
          name: "<value>",
          description:
            "meh tepid chilly drat after singe tusk colorfully cleaner",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 80969,
          },
          prices: [
            {
              createdAt: new Date("2024-08-12T20:22:46.865Z"),
              modifiedAt: new Date("2025-06-26T09:22:19.433Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              unitAmount: 401921,
              includedUnits: 525550,
              capAmount: 732332,
              meterId: "<value>",
              meter: {
                id: "<value>",
                name: "<value>",
              },
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-04-27T11:49:38.356Z"),
              modifiedAt: new Date("2025-02-01T10:25:39.008Z"),
              id: "<value>",
              description:
                "mostly iterate when outside bobble loyally release secret",
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
              path: "/etc/mail",
              mimeType: "<value>",
              size: 769010,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-06-15T03:14:03.485Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-06-12T22:42:54.501Z"),
              sizeReadable: "<value>",
              publicUrl: "https://similar-monocle.info/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-04-14T01:43:46.701Z"),
                modifiedAt: new Date("2023-11-22T18:34:29.972Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 362405,
              required: false,
            },
          ],
        },
        discount: {
          duration: "forever",
          durationInMonths: 908582,
          type: "percentage",
          amount: 79278,
          currency: "CFA Franc BCEAO",
          createdAt: new Date("2025-11-19T00:13:51.965Z"),
          modifiedAt: new Date("2024-01-18T21:51:15.517Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-01-22T16:24:11.216Z"),
          endsAt: new Date("2025-04-24T10:11:14.990Z"),
          maxRedemptions: 122517,
          redemptionsCount: 244727,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2025-07-07T01:33:43.742Z"),
          modifiedAt: new Date("2024-10-16T02:44:27.027Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 123376,
          maximumAmount: 680047,
          presetAmount: 575045,
        },
        prices: [
          {
            createdAt: new Date("2023-11-12T01:52:40.233Z"),
            modifiedAt: new Date("2024-07-10T23:13:51.219Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 944158,
            maximumAmount: 366611,
            presetAmount: 570805,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 355205,
      maxPage: 557780,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |