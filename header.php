
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Tailwind CSS CDN を最優先で読み込み -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap" rel="stylesheet">
    <script>
      // Tailwindのカスタム設定
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              panablue: '#000f9f',
            },
            fontFamily: {
              maru: ['Zen Maru Gothic', 'sans-serif'],
              sans: ['Noto Sans JP', 'sans-serif'],
            },
          }
        }
      }
    </script>
    <style>
        body { font-family: 'Noto Sans JP', sans-serif; scroll-behavior: smooth; margin: 0; }
        .font-maru { font-family: 'Zen Maru Gothic', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #000f9f; border-radius: 10px; }
        /* 画像が巨大化するのを防ぐための最低限のスタイル */
        img { max-width: 100%; height: auto; }
    </style>
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-gray-800'); ?>>
<?php wp_body_open(); ?>
