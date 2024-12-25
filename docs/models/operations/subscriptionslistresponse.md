# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-04-07T23:51:00.199Z"),
        modifiedAt: new Date("2023-05-17T23:08:38.509Z"),
        id: "<value>",
        amount: 783071,
        currency: "Chilean Peso",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2022-12-15T08:19:24.644Z"),
        currentPeriodEnd: new Date("2024-03-09T19:52:42.065Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2024-05-21T11:33:27.752Z"),
        endedAt: new Date("2024-06-29T12:53:20.591Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": 378795,
        },
        customer: {
          createdAt: new Date("2023-11-09T20:03:10.103Z"),
          modifiedAt: new Date("2022-07-24T03:40:16.074Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Reanna.Koss45@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Croatia",
          },
          taxId: [
            "ng_tin",
          ],
          organizationId: "<value>",
          avatarUrl: "https://cute-traditionalism.net",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Madalyn97@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2022-03-28T00:11:16.408Z"),
          modifiedAt: new Date("2024-02-25T14:49:29.759Z"),
          id: "<value>",
          name: "<value>",
          description:
            "giant correctly hm concrete er regulate spellcheck oof even qualified",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2022-09-12T06:10:57.363Z"),
              modifiedAt: new Date("2023-03-15T02:44:36.501Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 156726,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-07-15T09:20:19.722Z"),
              modifiedAt: new Date("2023-08-28T11:10:24.984Z"),
              id: "<value>",
              description: "strictly modulo frequent trash joyful lest",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {},
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/var/spool",
              mimeType: "<value>",
              size: 63984,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-06T03:55:27.330Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-10-23T16:59:04.416Z"),
              sizeReadable: "<value>",
              publicUrl: "https://nautical-account.biz/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-01-15T09:37:09.079Z"),
                modifiedAt: new Date("2024-08-04T00:50:43.545Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 322133,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2022-07-07T22:13:16.221Z"),
          modifiedAt: new Date("2023-11-16T12:57:07.514Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "percentage",
          amount: 422456,
          currency: "Malaysian Ringgit",
          createdAt: new Date("2024-07-06T11:14:34.931Z"),
          modifiedAt: new Date("2024-05-11T04:04:22.601Z"),
          id: "<value>",
          metadata: {
            "key": 284190,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2022-10-04T00:53:50.240Z"),
          endsAt: new Date("2024-08-10T16:52:30.619Z"),
          maxRedemptions: 76750,
          redemptionsCount: 590325,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 489133,
      maxPage: 491716,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |