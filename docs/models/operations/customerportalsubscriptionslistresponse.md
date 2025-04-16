# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-10T11:08:28.622Z"),
        modifiedAt: new Date("2025-08-01T11:31:35.018Z"),
        id: "<value>",
        amount: 435964,
        currency: "Namibia Dollar",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2024-02-23T17:53:28.293Z"),
        currentPeriodEnd: new Date("2024-06-04T23:43:59.093Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-07-26T13:42:22.696Z"),
        startedAt: new Date("2025-12-12T06:24:34.907Z"),
        endsAt: new Date("2024-04-26T18:30:27.337Z"),
        endedAt: new Date("2023-07-16T18:10:41.850Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-05-10T15:41:14.073Z"),
          modifiedAt: new Date("2023-04-17T09:47:01.324Z"),
          id: "<value>",
          name: "<value>",
          description: "ack hmph while majestically antelope laughter",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-08-09T00:56:14.811Z"),
              modifiedAt: new Date("2023-10-31T13:15:27.208Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 665561,
              maximumAmount: 392247,
              presetAmount: 822840,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-11-26T04:36:45.032Z"),
              modifiedAt: new Date("2025-12-07T00:57:57.571Z"),
              metadata: {
                "key": false,
              },
              type: "downloadables",
              description:
                "mortar unwelcome repurpose eek considering unethically conservative experienced cleverly gosh",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/opt",
              mimeType: "<value>",
              size: 488762,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-09-03T17:41:17.186Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-05-12T15:42:22.268Z"),
              sizeReadable: "<value>",
              publicUrl: "https://shameful-hunt.org/",
            },
          ],
          organization: {
            createdAt: new Date("2023-08-25T15:54:44.248Z"),
            modifiedAt: new Date("2023-02-14T12:39:48.692Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://deep-labourer.com/",
            email: "Rachael.Romaguera12@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "facebook",
                url: "https://present-warming.org/",
              },
            ],
            detailsSubmittedAt: new Date("2023-03-06T00:54:10.898Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Carroll and Sons",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
          },
        },
        price: {
          createdAt: new Date("2024-04-03T21:26:09.074Z"),
          modifiedAt: new Date("2025-07-07T13:49:12.230Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 810003,
        },
        prices: [
          {
            createdAt: new Date("2023-05-01T03:50:00.648Z"),
            modifiedAt: new Date("2024-02-05T17:16:55.970Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
        meters: [
          {
            createdAt: new Date("2023-03-05T07:33:40.887Z"),
            modifiedAt: new Date("2025-05-22T12:58:01.456Z"),
            id: "<value>",
            consumedUnits: 25,
            creditedUnits: 100,
            amount: 0,
            meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
            meter: {
              createdAt: new Date("2025-05-30T04:59:25.637Z"),
              modifiedAt: new Date("2024-04-23T11:50:49.497Z"),
              id: "<value>",
              name: "<value>",
            },
          },
        ],
      },
    ],
    pagination: {
      totalCount: 552199,
      maxPage: 136559,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |