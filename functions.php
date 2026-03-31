
<?php
/**
 * パナランドフクシマ テーマ関数
 */

function panaland_fukushima_scripts() {
    // 1. メインのスタイルシート
    wp_enqueue_style('panaland-theme-style', get_stylesheet_uri(), array(), '2.1.2');

    // 2. ReactアプリのJS (dist/assets/index.js)
    // ファイルが存在するか確認しやすくするため、絶対パスで指定
    $js_path = '/dist/assets/index.js';
    $js_url = get_template_directory_uri() . $js_path;
    
    wp_enqueue_script(
        'panaland-app-js', 
        $js_url, 
        array(), 
        filemtime(get_template_directory() . $js_path), // ファイル更新日時をバージョンにする（キャッシュ対策）
        true
    );

    // type="module" を付与
    add_filter('script_loader_tag', function($tag, $handle, $src) {
        if ('panaland-app-js' !== $handle) return $tag;
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }, 10, 3);
}
add_action('wp_enqueue_scripts', 'panaland_fukushima_scripts');

function panaland_fukushima_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'panaland_fukushima_setup');
