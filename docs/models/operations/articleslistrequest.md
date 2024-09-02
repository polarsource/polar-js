# ArticlesListRequest

## Example Usage

```typescript
import { ArticlesListRequest } from "@polar-sh/sdk/models/operations";

let value: ArticlesListRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `organizationId`                                        | *operations.ArticlesListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                      | Filter by organization ID.                              |
| `slug`                                                  | *string*                                                | :heavy_minus_sign:                                      | Filter by slug.                                         |
| `visibility`                                            | *operations.ArticleVisibilityFilter*                    | :heavy_minus_sign:                                      | Filter by visibility.                                   |
| `isSubscribed`                                          | *boolean*                                               | :heavy_minus_sign:                                      | Filter by subscription status.                          |
| `isPublished`                                           | *boolean*                                               | :heavy_minus_sign:                                      | Filter by published status.                             |
| `isPinned`                                              | *boolean*                                               | :heavy_minus_sign:                                      | Filter by pinned status.                                |
| `page`                                                  | *number*                                                | :heavy_minus_sign:                                      | Page number, defaults to 1.                             |
| `limit`                                                 | *number*                                                | :heavy_minus_sign:                                      | Size of a page, defaults to 10. Maximum is 100.         |