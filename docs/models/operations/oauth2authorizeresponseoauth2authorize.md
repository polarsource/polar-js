# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-01-06T17:59:23.766Z"),
    modifiedAt: new Date("2023-02-17T03:45:50.562Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://all-postbox.net",
    logoUri: "https://hard-to-find-department.org/",
    tosUri: "https://slushy-offset.com/",
    policyUri: "https://fatal-strait.biz/",
  },
  sub: {
    id: "<value>",
    email: "Lolita.Goyette@hotmail.com",
    avatarUrl: "https://well-groomed-packaging.org/",
  },
  scopes: [
    "license_keys:read",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-07-13T06:25:35.667Z"),
    modifiedAt: new Date("2023-06-30T02:24:12.549Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://critical-haircut.info",
    logoUri: "https://experienced-aircraft.name/",
    tosUri: "https://best-league.com/",
    policyUri: "https://shrill-freezing.org",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://ultimate-perfection.com/",
  },
  scopes: [
    "products:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://posh-reconsideration.name",
    },
  ],
};
```

