import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import LessonLayout from "../components/lesson/LessonLayout.jsx";
import { TOPICS } from "../data/topics.js";

// Phase 5 will replace this single hardcoded example with real content
// for all 20 topics (likely loaded from the database via GET /api/lessons/:slug).
// This SQL Injection lesson is included as the reference implementation
// every other lesson's content should follow.
const SAMPLE_LESSON = {
  slug: "sql-injection",
  title: "SQL Injection",
  level: "beginner",
  cwe: "CWE-89",
  description:
    "SQL Injection happens when untrusted input is concatenated directly into a database query, letting an attacker change the query's meaning instead of just supplying data.",
  impact:
    "A successful SQL injection can expose an entire database — user credentials, personal data, payment records — and in some configurations allow an attacker to modify or delete data, or escalate to running commands on the database server.",
  whyItHappens:
    "It happens when application code builds SQL statements by joining strings together, trusting that user input will only ever contain data and never query syntax.",
  howItsFound:
    "Attackers probe input fields with characters that have special meaning in SQL, such as a single quote, and watch how the application responds. A database error, a change in returned data, or a timing difference on a deliberately slow query are all signals the input is reaching the query unfiltered.",
  vulnerableCode: `// vulnerable: user input concatenated into the query
const query = \`SELECT * FROM users WHERE email = '${"${email}"}'\`;
db.execute(query);`,
  secureCode: `// secure: parameterized query — input is always treated as data
const query = 'SELECT * FROM users WHERE email = ?';
db.execute(query, [email]);`,
  checklist: [
    "Use parameterized queries or prepared statements for every database call",
    "Never build SQL by concatenating raw user input",
    "Apply least-privilege database accounts for the application",
    "Validate and type-check input before it reaches the query layer",
    "Turn off verbose database error messages in production"
  ],
  references: [
    { label: "OWASP — SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
    { label: "CWE-89", url: "https://cwe.mitre.org/data/definitions/89.html" }
  ],
  challenge: "A login form in the practice lab is vulnerable to SQL injection. Find the bypass, then patch the query."
};

export default function LessonPage() {
  const { slug } = useParams();
  const topic = TOPICS.find((t) => t.slug === slug);
  const lesson = slug === "sql-injection" ? SAMPLE_LESSON : null;

  return (
    <>
      <Navbar />
      {lesson ? (
        <LessonLayout lesson={lesson} />
      ) : (
        <div className="max-w-xl mx-auto text-center py-24 px-6">
          <h1 className="text-2xl font-bold mb-2">{topic ? topic.title : "Lesson"}</h1>
          <p className="text-slate mb-6">
            This lesson's content lands in Phase 5. The layout and routing are already wired up —
            see <code className="font-mono text-sm">SAMPLE_LESSON</code> in this file for the reference format.
          </p>
          <Link to="/dashboard" className="btn btn-primary px-5 py-2.5">Back to dashboard</Link>
        </div>
      )}
    </>
  );
}
