# CustomerPortalSubscriptionsListResponse

## Example Usage

```typescript
import { CustomerPortalSubscriptionsListResponse } from "@polar-sh/sdk/models/operations/customerportalsubscriptionslist.js";

let value: CustomerPortalSubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-02T10:31:29.677Z"),
        modifiedAt: new Date("2025-11-19T20:22:16.810Z"),
        id: "<value>",
        amount: 256821,
        currency: "Bahamian Dollar",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2025-07-08T17:52:05.619Z"),
        currentPeriodEnd: new Date("2023-12-09T08:00:08.881Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-06-15T01:54:27.733Z"),
        startedAt: new Date("2024-06-27T16:13:50.864Z"),
        endsAt: new Date("2024-03-26T11:04:49.329Z"),
        endedAt: new Date("2023-06-15T05:25:43.825Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_expensive",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-07-09T23:45:06.528Z"),
          modifiedAt: new Date("2023-07-10T13:25:19.753Z"),
          id: "<value>",
          name: "<value>",
          description:
            "for phooey readmit given mmm collectivization aboard er where",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-01-05T00:42:10.944Z"),
              modifiedAt: new Date("2024-06-26T10:14:39.317Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 730873,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-18T21:57:01.781Z"),
              modifiedAt: new Date("2025-04-10T13:38:15.013Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "till mash however whose after clonk between given scaffold store",
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
              path: "/lib",
              mimeType: "<value>",
              size: 84777,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-06-13T08:12:46.565Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-10-01T17:38:56.757Z"),
              sizeReadable: "<value>",
              publicUrl: "https://fake-experience.name/",
            },
          ],
          organization: {
            createdAt: new Date("2025-05-30T16:36:36.294Z"),
            modifiedAt: new Date("2024-05-15T23:22:06.356Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://imaginative-obedience.com/",
            email: "Katlyn_Blanda@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "x",
                url: "https://spherical-topsail.name",
              },
            ],
            detailsSubmittedAt: new Date("2025-10-13T00:26:49.399Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Volkman Inc",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 445838,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 822880,
            profileSettings: {},
          },
        },
        price: {
          createdAt: new Date("2025-09-07T14:07:32.676Z"),
          modifiedAt: new Date("2023-01-09T02:39:11.825Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 983830,
          maximumAmount: 40735,
          presetAmount: 146951,
        },
        prices: [
          {
            createdAt: new Date("2023-11-27T12:04:30.707Z"),
            modifiedAt: new Date("2024-10-01T18:53:20.966Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 704207,
            maximumAmount: 440137,
            presetAmount: 669270,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 400341,
      maxPage: 542245,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerSubscription](../../models/components/listresourcecustomersubscription.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |