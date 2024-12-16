# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-16T02:55:17.401Z"),
        modifiedAt: new Date("2024-11-01T01:06:17.820Z"),
        id: "<value>",
        amount: 374444,
        currency: "Australian Dollar",
        recurringInterval: "year",
        status: "canceled",
        currentPeriodStart: new Date("2022-11-29T08:43:46.201Z"),
        currentPeriodEnd: new Date("2022-10-22T23:11:32.871Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-02-10T20:20:37.854Z"),
        endedAt: new Date("2022-06-21T10:04:50.151Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          createdAt: new Date("2024-08-01T05:59:09.495Z"),
          modifiedAt: new Date("2023-09-13T17:13:44.662Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Darron_Kiehn45@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Sweden",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://super-tuba.biz",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Amos.Crona23@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2022-08-23T02:26:40.384Z"),
          modifiedAt: new Date("2023-10-28T17:30:10.640Z"),
          id: "<value>",
          name: "<value>",
          description: "where reporter except before unzip yet gracefully",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2023-06-14T08:57:51.625Z"),
              modifiedAt: new Date("2022-11-13T19:30:07.544Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 236544,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-01-05T04:06:45.165Z"),
              modifiedAt: new Date("2024-05-20T00:02:58.462Z"),
              id: "<value>",
              description: "forenenst untimely at whose dream after",
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
              path: "/usr/lib",
              mimeType: "<value>",
              size: 440210,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-01T09:05:51.525Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-07-19T15:18:09.282Z"),
              sizeReadable: "<value>",
              publicUrl: "https://firm-lady.biz/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-04-11T23:29:18.829Z"),
                modifiedAt: new Date("2023-11-01T13:24:54.291Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 278654,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2023-12-08T13:31:44.722Z"),
          modifiedAt: new Date("2024-12-26T08:24:45.040Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 230766,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 329012,
          type: "fixed",
          basisPoints: 429518,
          createdAt: new Date("2023-08-19T15:47:38.887Z"),
          modifiedAt: new Date("2024-04-13T03:06:07.719Z"),
          id: "<value>",
          metadata: {
            "key": 672127,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-05-30T12:07:26.736Z"),
          endsAt: new Date("2024-04-29T06:13:47.879Z"),
          maxRedemptions: 473254,
          redemptionsCount: 104812,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 814336,
      maxPage: 601774,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |