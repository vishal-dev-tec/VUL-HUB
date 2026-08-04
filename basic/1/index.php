<!DOCTYPE html>
<html>
<head>
  <title>Day 1 - 5 Bug Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="glass-container">
    <h2>Day 1 - Vulnerable Site</h2>

    <!-- Bug 1: Reflected XSS -->
    <form method="GET">
      <label>Enter your name:</label><br>
      <input type="text" name="name">
      <button type="submit">Submit</button>
    </form>
    <p>Hello, <?php echo $_GET['name']; ?></p>

    <!-- Bug 2: SQL Injection -->
    <?php
    $conn = new mysqli("localhost", "root", "", "demo");
    if (isset($_GET['user'])) {
      $user = $_GET['user'];
      $result = $conn->query("SELECT * FROM users WHERE username = '$user'");
      if ($row = $result->fetch_assoc()) {
        echo "<p>User found: " . $row['username'] . "</p>";
      } else {
        echo "<p>No user found</p>";
      }
    }
    ?>

    <!-- Bug 3: CSRF -->
    <form method="POST" action="transfer.php">
      <label>Transfer Amount:</label><br>
      <input type="text" name="amount">
      <button type="submit">Transfer</button>
    </form>

    <!-- Bug 4: Insecure File Upload -->
    <form method="POST" enctype="multipart/form-data">
      <label>Upload your profile picture:</label><br>
      <input type="file" name="file">
      <button type="submit">Upload</button>
    </form>
    <?php
    if (isset($_FILES['file'])) {
      move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" . $_FILES['file']['name']);
      echo "<p>File uploaded!</p>";
    }
    ?>

    <!-- Bug 5: Hardcoded Credentials -->
    <?php
    $admin_user = "admin";
    $admin_pass = "password123"; // Vulnerable: hardcoded password
    if (isset($_POST['login'])) {
      if ($_POST['username'] == $admin_user && $_POST['password'] == $admin_pass) {
        echo "<p>Welcome Admin!</p>";
      } else {
        echo "<p>Invalid credentials</p>";
      }
    }
    ?>
    <form method="POST">
      <label>Admin Login:</label><br>
      <input type="text" name="username">
      <input type="password" name="password">
      <button type="submit" name="login">Login</button>
    </form>
  </div>
</body>
</html>
