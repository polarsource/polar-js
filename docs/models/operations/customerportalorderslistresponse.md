# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-10-09T07:17:06.745Z"),
        modifiedAt: new Date("2025-11-24T17:01:47.390Z"),
        id: "<value>",
        status: "pending",
        paid: true,
        subtotalAmount: 821688,
        discountAmount: 145302,
        netAmount: 54212,
        amount: 86342,
        taxAmount: 358052,
        totalAmount: 677875,
        refundedAmount: 884503,
        refundedTaxAmount: 200618,
        currency: "Yuan Renminbi",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-01-20T06:11:11.809Z"),
          modifiedAt: new Date("2025-09-23T15:39:22.837Z"),
          id: "<value>",
          name: "<value>",
          description: "brown aside advanced sashay beyond abseil",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-05-07T11:24:30.588Z"),
              modifiedAt: new Date("2025-02-23T09:52:38.187Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 345778,
              maximumAmount: 338035,
              presetAmount: 538560,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2023-04-04T02:02:37.761Z"),
              modifiedAt: new Date("2024-12-28T08:07:18.629Z"),
              metadata: {
                "key": false,
              },
              type: "license_keys",
              description:
                "supposing apud absent whether provided dramatize of notwithstanding",
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
              path: "/bin",
              mimeType: "<value>",
              size: 420806,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-01T10:32:13.882Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-06-05T11:45:05.656Z"),
              sizeReadable: "<value>",
              publicUrl: "https://courteous-defendant.info/",
            },
          ],
          organization: {
            createdAt: new Date("2024-09-22T04:43:27.475Z"),
            modifiedAt: new Date("2025-11-22T03:35:44.605Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://unrealistic-tackle.com/",
            email: "Ardith_Pfannerstill@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "other",
                url: "https://willing-adrenalin.net/",
              },
            ],
            detailsSubmittedAt: new Date("2024-02-14T01:49:13.911Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Kiehn, Huels and Yundt",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
          },
        },
        productPrice: {
          createdAt: new Date("2025-10-25T23:58:56.565Z"),
          modifiedAt: new Date("2025-03-23T03:32:06.424Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 348051,
        },
        subscription: {
          createdAt: new Date("2025-01-23T00:56:23.290Z"),
          modifiedAt: new Date("2024-09-05T04:43:47.823Z"),
          id: "<value>",
          amount: 683687,
          currency: "Bahamian Dollar",
          recurringInterval: "month",
          status: "canceled",
          currentPeriodStart: new Date("2025-03-28T20:28:43.012Z"),
          currentPeriodEnd: new Date("2023-09-15T10:05:17.413Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-06-21T21:54:34.284Z"),
          startedAt: new Date("2025-09-04T14:36:37.692Z"),
          endsAt: new Date("2024-01-23T00:31:20.303Z"),
          endedAt: new Date("2025-05-14T11:55:05.531Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "missing_features",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2025-10-12T05:40:01.907Z"),
            modifiedAt: new Date("2023-09-25T22:00:29.438Z"),
            id: "<value>",
            label: "<value>",
            amount: 731406,
            taxAmount: 838925,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 58458,
      maxPage: 464220,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |