<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uploaded Files</title>
    <style>
        img, video {
            max-width: 300px;
            display: block;
        }
        audio {
            display: block;
        }
        .file-item {
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Uploaded Files</h1>
    <?php
    $directory = "uploads/";
    $files = scandir($directory);

    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            $filePath = $directory . $file;
            echo "<div class='file-item'>";
            if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $file)) {
                echo "<img src='$filePath' alt='$file'><br>";
            } elseif (preg_match('/\.(mp4)$/i', $file)) {
                echo "<video controls>
                        <source src='$filePath' type='video/mp4'>
                      </video><br>";
            } elseif (preg_match('/\.(mp3)$/i', $file)) {
                echo "<audio controls>
                        <source src='$filePath' type='audio/mp3'>
                      </audio><br>";
            } else {
                echo "<a href='$filePath' download>$file</a><br>";
            }
            echo "</div>";
        }
    }
    ?>
</body>
</html>
