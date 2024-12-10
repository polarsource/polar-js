# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-01-12T16:44:46.474Z"),
        modifiedAt: new Date("2023-09-12T17:04:31.167Z"),
        id: "<value>",
        amount: 515900,
        currency: "Saint Helena Pound",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2022-07-22T09:00:46.743Z"),
        currentPeriodEnd: new Date("2023-12-24T23:52:06.888Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2022-12-29T13:25:29.981Z"),
        endedAt: new Date("2023-05-14T10:30:39.040Z"),
        userId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        user: {
          email: "Trycia58@yahoo.com",
          publicName: "<value>",
          githubUsername: "<value>",
          avatarUrl: "https://squeaky-density.com/",
        },
        product: {
          createdAt: new Date("2022-07-18T17:37:30.719Z"),
          modifiedAt: new Date("2023-01-11T03:58:02.965Z"),
          id: "<value>",
          name: "<value>",
          description: "nucleotidase nor gullible cake aha valentine",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 579240,
          },
          prices: [
            {
              createdAt: new Date("2022-07-08T20:56:24.426Z"),
              modifiedAt: new Date("2024-11-08T23:14:36.883Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 187940,
              maximumAmount: 128146,
              presetAmount: 362451,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-12-07T04:48:23.043Z"),
              modifiedAt: new Date("2023-08-31T05:51:37.577Z"),
              id: "<value>",
              description:
                "brr and alligator blah analyse descriptive seemingly allegation than",
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
              path: "/lib",
              mimeType: "<value>",
              size: 863685,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-10-19T12:33:56.667Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-05-04T16:07:59.078Z"),
              sizeReadable: "<value>",
              publicUrl: "https://punctual-league.org/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-07-05T01:46:55.006Z"),
                modifiedAt: new Date("2022-03-17T06:50:06.523Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 448491,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2024-10-30T16:04:35.456Z"),
          modifiedAt: new Date("2023-12-31T18:24:30.633Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 270530,
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          type: "fixed",
          amount: 641948,
          currency: "Swiss Franc",
          createdAt: new Date("2024-01-13T04:38:24.107Z"),
          modifiedAt: new Date("2022-05-09T22:38:55.155Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-11-18T13:47:13.953Z"),
          endsAt: new Date("2023-09-25T21:50:23.276Z"),
          maxRedemptions: 187271,
          redemptionsCount: 740871,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 236052,
      maxPage: 798044,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |