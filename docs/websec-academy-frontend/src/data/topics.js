// Single source of truth for the vulnerability catalog.
// Phase 5 (content) will move this into the database; the shape stays the same
// so the UI components don't need to change when the data source does.

export const LEVELS = {
  beginner: { label: "Beginner", accent: "text-severity-low", badge: "bg-severity-low/10 text-severity-low border-severity-low/20" },
  intermediate: { label: "Intermediate", accent: "text-severity-medium", badge: "bg-severity-medium/10 text-severity-medium border-severity-medium/20" },
  advanced: { label: "Advanced", accent: "text-severity-critical", badge: "bg-severity-critical/10 text-severity-critical border-severity-critical/20" }
};

export const TOPICS = [
  { slug: "information-disclosure", title: "Information Disclosure", level: "beginner", cwe: "CWE-200", severity: "critical" },
  { slug: "sql-injection", title: "SQL Injection", level: "beginner", cwe: "CWE-89", severity: "high" },
  { slug: "xss", title: "Cross-Site Scripting (XSS)", level: "beginner", cwe: "CWE-79", severity: "high" },
  { slug: "csrf", title: "CSRF", level: "beginner", cwe: "CWE-352", severity: "medium" },
  { slug: "idor", title: "IDOR", level: "beginner", cwe: "CWE-639", severity: "high" },
  { slug: "file-upload", title: "File Upload Vulnerabilities", level: "beginner", cwe: "CWE-434", severity: "medium" },
  { slug: "auth-issues", title: "Authentication Issues", level: "beginner", cwe: "CWE-287", severity: "high" },
  { slug: "session-security", title: "Session Security", level: "beginner", cwe: "CWE-384", severity: "medium" },
  { slug: "security-misconfig", title: "Security Misconfiguration", level: "beginner", cwe: "CWE-16", severity: "medium" },

  { slug: "jwt-vulnerabilities", title: "JWT Vulnerabilities", level: "intermediate", cwe: "CWE-347", severity: "high" },
  { slug: "ssrf", title: "SSRF", level: "intermediate", cwe: "CWE-918", severity: "critical" },
  { slug: "path-traversal", title: "Path Traversal", level: "intermediate", cwe: "CWE-22", severity: "high" },
  { slug: "api-security", title: "API Security", level: "intermediate", cwe: "OWASP API Top 10", severity: "medium" },
  { slug: "race-conditions", title: "Race Conditions", level: "intermediate", cwe: "CWE-362", severity: "medium" },
  { slug: "advanced-access-control", title: "Advanced Access Control Issues", level: "intermediate", cwe: "CWE-284", severity: "high" },

  { slug: "exploit-chains", title: "Exploit Chains", level: "advanced", cwe: "Multi-stage", severity: "critical" },
  { slug: "business-logic-flaws", title: "Business Logic Flaws", level: "advanced", cwe: "CWE-840", severity: "high" },
  { slug: "advanced-auth-bypass", title: "Advanced Authentication Bypass", level: "advanced", cwe: "CWE-288", severity: "critical" },
  { slug: "cloud-security-mistakes", title: "Cloud Security Mistakes", level: "advanced", cwe: "Misconfiguration", severity: "high" }
];

export const SEVERITY_DOT = {
  critical: "bg-severity-critical shadow-[0_0_0_3px_rgba(220,38,38,0.14)]",
  high: "bg-severity-high shadow-[0_0_0_3px_rgba(234,88,12,0.14)]",
  medium: "bg-severity-medium shadow-[0_0_0_3px_rgba(217,119,6,0.14)]",
  low: "bg-severity-low shadow-[0_0_0_3px_rgba(2,132,199,0.14)]"
};
