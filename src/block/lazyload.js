/**
 * 运行jQuery.lazyload的函数
 *
 * @author feng
 * @since 0.0.1
 * @example
 *
 * lazyload()
 */
function lazyload () {
  $("img.lazy").lazyload({
    skip_invisible: false,
    failure_limit: 10,
    effect: "fadeIn"
  });
}
