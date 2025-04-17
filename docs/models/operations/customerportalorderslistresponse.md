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
        taxAmount: 86342,
        totalAmount: 358052,
        refundedAmount: 677875,
        refundedTaxAmount: 884503,
        currency: "Costa Rican Colon",
        customerId: "<value>",
        productId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-07-23T11:46:21.084Z"),
          modifiedAt: new Date("2024-01-20T06:11:11.809Z"),
          id: "<value>",
          name: "<value>",
          description:
            "trim heartache er hence sadly into phooey uh-huh wildly swear",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-05-16T05:36:01.128Z"),
              modifiedAt: new Date("2025-07-25T10:24:56.356Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 212609,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2023-02-21T19:56:39.166Z"),
              modifiedAt: new Date("2024-08-11T16:44:12.313Z"),
              type: "custom",
              description: "sans athwart than",
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
              size: 809025,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-03-24T01:34:56.771Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-11-12T18:58:26.773Z"),
              sizeReadable: "<value>",
              publicUrl: "https://haunting-step-mother.biz/",
            },
          ],
          organization: {
            createdAt: new Date("2023-01-28T01:43:20.163Z"),
            modifiedAt: new Date("2025-12-22T09:07:53.332Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://alert-hepatitis.name",
            email: "Cale57@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "x",
                url: "https://uniform-casement.com",
              },
            ],
            detailsSubmittedAt: new Date("2023-03-25T23:37:24.261Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
          },
        },
        subscription: {
          createdAt: new Date("2025-01-22T10:18:14.275Z"),
          modifiedAt: new Date("2025-06-14T22:50:01.018Z"),
          id: "<value>",
          amount: 214030,
          currency: "Lempira",
          recurringInterval: "year",
          status: "incomplete_expired",
          currentPeriodStart: new Date("2025-11-28T05:46:31.105Z"),
          currentPeriodEnd: new Date("2023-01-15T03:02:24.661Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-06-19T10:31:21.199Z"),
          startedAt: new Date("2024-02-14T01:49:13.911Z"),
          endsAt: new Date("2023-12-28T16:09:38.079Z"),
          endedAt: new Date("2025-12-13T10:04:33.802Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "switched_service",
          customerCancellationComment: "<value>",
        },
        items: [
          {
            createdAt: new Date("2024-03-07T01:14:02.645Z"),
            modifiedAt: new Date("2025-12-18T11:20:47.371Z"),
            id: "<value>",
            label: "<value>",
            amount: 218962,
            taxAmount: 595143,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 938868,
      maxPage: 741011,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |