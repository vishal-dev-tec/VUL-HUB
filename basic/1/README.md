# Day 1 - 5 Bug Demo (Easy)

This demo site contains **5 vulnerabilities** for practice, styled with a black & white aura theme.

---

## 🐞 Vulnerabilities

### 1. Reflected XSS
- **Bug**: User input (`name`) is printed directly.
- **Exploit**: Enter `<script>alert('XSS')</script>`.
- **Fix**: Use `htmlspecialchars($_GET['name']);`.

---

### 2. SQL Injection
- **Bug**: Query uses unsanitized input.
- **Exploit**: `?user=' OR '1'='1`.
- **Fix**: Use prepared statements:
```php
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
CSRF
Bug: Transfer form has no CSRF token.

Exploit: Attacker can trick user into submitting hidden form.

Fix: Add CSRF token validation in form and server-side check.

Insecure File Upload
Bug: Any file type can be uploaded and executed.

Exploit: Upload shell.php disguised as image.

Fix: Restrict file types, validate MIME type, store outside webroot.

5. Hardcoded Credentials

Hardcoded Credentials
Bug: Admin username and password are hardcoded in source.

Exploit: Anyone who sees code knows credentials.

Fix: Store credentials securely (e.g., environment variables, hashed passwords in DB).


---

✅ Now you have a **Day 1 site with 5 bugs**, styled in **black & white aura Liquid Glass UI**, and fully documented with exploit + fix instructions.  

Would you like me to continue and produce **Day 2 (5 SQL Injection variations)** in the same aura theme, so your series builds progressively?



