# Permission

The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).

## Example Usage

```typescript
import { Permission } from "@polar-sh/sdk/models/components/benefitgithubrepositoryproperties.js";

let value: Permission = "admin";
```

## Values

```typescript
"pull" | "triage" | "push" | "maintain" | "admin"
```