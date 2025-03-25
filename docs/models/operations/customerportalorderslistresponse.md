# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-31T07:22:42.631Z"),
        modifiedAt: new Date("2025-10-16T06:12:38.743Z"),
        id: "<value>",
        status: "partially_refunded",
        paid: true,
        subtotalAmount: 939278,
        discountAmount: 265936,
        netAmount: 210450,
        amount: 569799,
        taxAmount: 636406,
        totalAmount: 934318,
        refundedAmount: 621630,
        refundedTaxAmount: 246932,
        currency: "Won",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-02-23T13:08:52.873Z"),
          modifiedAt: new Date("2023-04-28T18:31:01.247Z"),
          id: "<value>",
          name: "<value>",
          description: "noisily joyful absent recklessly busy",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-09-18T03:56:38.271Z"),
              modifiedAt: new Date("2023-11-18T10:35:24.953Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 126682,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-06-13T01:07:51.083Z"),
              modifiedAt: new Date("2025-05-29T12:13:42.652Z"),
              id: "<value>",
              type: "downloadables",
              description: "huzzah scarcely mountain slushy",
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
              path: "/Library",
              mimeType: "<value>",
              size: 50402,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-24T19:19:35.600Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-01-03T22:09:25.037Z"),
              sizeReadable: "<value>",
              publicUrl: "https://silver-fold.com",
            },
          ],
          organization: {
            createdAt: new Date("2024-06-05T20:21:34.498Z"),
            modifiedAt: new Date("2024-12-03T09:48:28.665Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://stunning-cope.org/",
            email: "Whitney.Sawayn52@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "x",
                url: "https://helpless-advancement.org/",
              },
            ],
            detailsSubmittedAt: new Date("2024-07-29T03:29:40.213Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Rice, Hahn and Medhurst",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 555275,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 409288,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-09-02T11:59:19.980Z"),
          modifiedAt: new Date("2023-05-04T01:16:35.084Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        subscription: {
          createdAt: new Date("2024-01-01T02:10:46.912Z"),
          modifiedAt: new Date("2023-12-22T04:25:05.928Z"),
          id: "<value>",
          amount: 248751,
          currency: "UAE Dirham",
          recurringInterval: "month",
          status: "active",
          currentPeriodStart: new Date("2024-08-25T01:09:21.524Z"),
          currentPeriodEnd: new Date("2025-02-17T21:26:19.684Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2024-10-23T04:34:27.425Z"),
          startedAt: new Date("2023-07-26T03:53:08.683Z"),
          endsAt: new Date("2024-08-15T11:03:33.023Z"),
          endedAt: new Date("2025-04-14T11:51:34.071Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "customer_service",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-09-20T04:16:18.316Z"),
            modifiedAt: new Date("2025-01-18T14:48:44.152Z"),
            id: "<value>",
            label: "<value>",
            amount: 67412,
            taxAmount: 314727,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 178383,
      maxPage: 572410,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |