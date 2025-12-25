export const REGISTER_RULES_MD = `
This endpoint allows a user to create an account.

The following validation rules apply to the registration form:

---

**First name & Last name**
- Must be provided  
- Between 1 and 64 characters  
- May contain letters (including accents), spaces, apostrophes or hyphens  
  *(Example: Alice, Jean-Michel, O'Connor)*

---

**Email**
- Must be a valid email address  
- Maximum length: 254 characters  
- Automatically trimmed, normalized and converted to lowercase

---

**Password**
- Minimum 10 characters, maximum 128  
- No spaces allowed  
- Must contain at least:  
  • one lowercase letter  
  • one uppercase letter  
  • one number  
  • one symbol *(ex: ! @ # ? %)*  
  *(Example: StrongPass123!)*

---
`.trim()

export const LOGIN_RULES_MD = `
This endpoint allows a user to authenticate and receive an access token.

The following validation rules apply to the login form:

---

**Email**
- Must be a valid email address  
- Maximum length: 254 characters  
- Automatically trimmed, normalized and converted to lowercase

---

**Password**
- Plain string input (validated against the stored hash)  
- No specific complexity enforced at login, only during registration  

---

If the credentials are correct, an opaque \`bearer\` access token is returned.
`.trim()

export const LOGOUT_RULES_MD = `
This endpoint invalidates the currently active access token.

The following rules apply to the logout request:

---

**Authentication**
- Requires a valid \`Authorization: Bearer <token>\` header  
- The token must not be expired or already revoked

---

**Behavior**
- The token is deleted from the database and can no longer be used  
- No payload is required in the request body  
- The response includes a confirmation message

---

Once logged out, a new login is required to obtain a new token.
`.trim()
