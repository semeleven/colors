export const xml = `
<?xml version="1.0" encoding="utf-8"?>

<resources>
    <color name="zen_screen_header_color">#FFFFFF</color>

    <!-- tabs bar configuration -->
    <dimen name="zen_tabs_bar_height">48dp</dimen>
    <dimen name="zen_tabs_bar_height_v2">56dp</dimen>
    <dimen name="zen_tabs_bar_height_text">42dp</dimen>
    <dimen name="zen_tabs_bar_float_padding">8dp</dimen>
    <color name="zen_tabs_bar_color_fixed">@color/zen_screen_header_color</color>
    <color name="zen_tabs_bar_background">@android:color/transparent</color>
    <dimen name="zen_tab_bar_elevation">0dp</dimen>

    <style name="ZenTabTextStyle" parent="@style/ZenTextMedium"/>
    <color name="zen_tab_bar_background">@color/zen_all_background</color>
    <color name="zen_multifeed_tab_icon_color">#CC000000</color>
    <color name="zen_multifeed_tab_text_color">#000</color>
    <color name="zen_multifeed_tab_selected_text_color">#fff</color>
    <drawable name="zen_multifeed_tab_bcg_selected">@drawable/zen_multifeed_tab_bcg</drawable>
    <drawable name="zen_filterfeed_tab_bcg_selected">@drawable/zen_filterfeed_tab_bcg</drawable>
    <dimen name="zen_multifeed_tabs_height">48dp</dimen>
    <dimen name="zen_multifeed_done_button_height">40dp</dimen> <!-- zen_multifeed_tabs_height - 2*4dp -->
    <dimen name="zen_multifeed_content_top_padding">0dp</dimen>
    <dimen name="zen_multifeed_tabs_corner_radius">24dp</dimen>
    <dimen name="zen_multifeed_tabs_horizontal_padding">16dp</dimen>
    <dimen name="zen_multifeed_tabs_text_compound_drawable_padding">5dp</dimen>
    <dimen name="zen_multifeed_tabs_text_drawable_padding">8dp</dimen>
    <dimen name="zen_multifeed_tabs_text_padding">16dp</dimen>
    <bool name="zen_multifeed_tab_image_enabled">true</bool>
    <dimen name="zen_multifeed_tabs_text_size">14dp</dimen>

    <dimen name="zen_card_separator_height">2px</dimen>
    <dimen name="zen_card_zero_safe_corner_radius">0.5px</dimen>

    <item name="wrap_content" format="integer" type="dimen">-2</item>
    <item name="match_parent" format="integer" type="dimen">-1</item>
    <integer name="visible">0</integer>
    <integer name="invisible">1</integer>
    <integer name="gone">2</integer>

    <integer name="duration_animation_activity_menu_profile_out">250</integer>
    <integer name="duration_animation_activity_menu_profile_in">180</integer>

    <dimen name="zen_grid_space">8dp</dimen>
    <dimen name="zen_grid_title">28dp</dimen>
    <dimen name="zen_source_title_horizontal_padding">4dp</dimen>
    <dimen name="zen_suggest_source_icon_size">28dp</dimen>
    <dimen name="zen_suggest_source_icon_margin">6dp</dimen>
    <dimen name="zen_suggest_icon_margin_center">20dp</dimen>
    <dimen name="zen_grid_corners_radius">4dp</dimen>
    <dimen name="zen_grid_tile_min_width">120dp</dimen>

    <dimen name="zen_scroll_offset_feedback">50dp</dimen>
    <dimen name="zen_scroll_offset_teaser">50dp</dimen>
    <dimen name="zen_scroll_offset_similar">-120dp</dimen>
    <dimen name="zen_scroll_offset_similar_std">-120dp</dimen>
    <dimen name="zen_scroll_offset_similar_new">-120dp</dimen>

    <dimen name="zen_more_card_threshold">2dp</dimen>
    <dimen name="zen_overscroll_threshold">80dp</dimen>
    <integer name="zen_overscroll_resilience">4</integer>
    <integer name="zen_overscroll_compression">2</integer>

    <dimen name="zen_multi_feed_side_margin">16dp</dimen>
    <dimen name="zen_multi_feed_side_margin_minus8">8dp</dimen>
    <dimen name="zen_card_spacing">20dp</dimen>
    <dimen name="zen_card_spacing_redesign_v3">@dimen/zen_card_spacing</dimen>
    <dimen name="zen_card_half_spacing">@dimen/zen_card_spacing</dimen>
    <dimen name="zen_card_narrow_side_margin_redesign_v3">4dp</dimen>
    <dimen name="zen_card_narrow_bottom_margin_redesign_v3">6dp</dimen>
    <color name="zen_card_icon_fade">#0D333333</color>
    <dimen name="zen_card_top_margin">3dp</dimen>
    <dimen name="zen_card_elevation">0dp</dimen>
    <dimen name="zen_card_elevation_redesign_v3">@dimen/zen_card_elevation</dimen>
    <dimen name="zen_feed_side_margin">11dp</dimen>
    <dimen name="zen_feed_side_margin_redesign_v3">@dimen/zen_feed_side_margin</dimen>
    <dimen name="zen_feed_dual_side_margin">22dp</dimen><!--zen_feed_side_margin * 2-->
    <dimen name="zen_card_spacing_negative">-220dp</dimen>
    <dimen name="zen_card_height">404dp</dimen>
    <dimen name="zen_content_card_height">@dimen/zen_card_height</dimen>
    <dimen name="zen_content_image_card_height">@dimen/zen_content_card_height</dimen>
    <dimen name="zen_ice_card_spacing">32dp</dimen>
    <dimen name="zen_ice_card_margin_horizontal">11dp</dimen>
    <dimen name="zen_less_card_height">212dp</dimen>
    <dimen name="zen_block_card_height">160dp</dimen>
    <dimen name="zen_card_content_photo_mirror_blur_radius">15dp</dimen>
    <dimen name="zen_similar_card_height">116dp</dimen>
    <dimen name="zen_similar_card_spacing">@dimen/zen_card_spacing</dimen>
    <dimen name="zen_similar_block_spacing_two_state_after">32dp</dimen><!-- zen_card_spacing + 12dp-->
    <dimen name="zen_similar_text_width">@dimen/match_parent</dimen>
    <dimen name="zen_helper_card_side_margin">0dp</dimen>
    <dimen name="zen_card_content_title_margin_right">40dp</dimen>
    <dimen name="zen_card_content_parallax_distance">20dp</dimen>
    <dimen name="zen_card_content_like_height">57dp</dimen>
    <dimen name="zen_card_content_menu_height">48dp</dimen>
    <dimen name="zen_card_content_menu_horizontal_padding">12dp</dimen>
    <dimen name="zen_card_content_comments_badge_width">32dp</dimen>
    <dimen name="zen_card_content_compound_instant_logo_size">18dp</dimen>
    <dimen name="zen_card_content_photo_margin_bottom">0dp</dimen>
    <item name="zen_card_content_promo_label_alpha" format="float" type="dimen">0.9</item>
    <dimen name="zen_card_content_text_title_margin_top">16dp</dimen>
    <dimen name="zen_card_content_text_title_margin_bottom">16dp</dimen>

    <integer name="zen_card_content_card_aspect_ratio_height">432</integer>
    <integer name="zen_card_content_card_aspect_ratio_width">328</integer>
    <integer name="zen_card_content_card_aspect_ratio_height_land">@integer/zen_card_content_card_aspect_ratio_height</integer>
    <integer name="zen_card_content_card_aspect_ratio_width_land">@integer/zen_card_content_card_aspect_ratio_width</integer>

    <dimen name="zen_mini_card_height">168dp</dimen>
    <dimen name="zen_multi_ad_card_height_one_column">172dp</dimen>
    <dimen name="zen_direct_multi_content_ad_title_text_size">19dp</dimen>
    <dimen name="zen_direct_multi_content_ad_title_line_height">24dp</dimen>
    <dimen name="zen_card_corner_radius">3dp</dimen>
    <dimen name="zen_card_corner_radius_redesign_v3">@dimen/zen_card_corner_radius</dimen>
    <bool name="zen_menu_always_fullscreen">true</bool>
    <dimen name="zen_card_double_corner_radius">8dp</dimen>
    <dimen name="zen_card_double_corner_radius_redesign_v3">@dimen/zen_card_double_corner_radius</dimen>
    <color name="zen_ads_button_color">#a5b4bf</color>

    <dimen name="zen_inner_margin">16dp</dimen>
    <dimen name="zen_button_margin">20dp</dimen>
    <dimen name="zen_title_text_margin">10dp</dimen>
    <dimen name="zen_title_text_small_margin">4dp</dimen>

    <dimen name="zen_card_photo_header_height">172dp</dimen>
    <dimen name="zen_card_video_header_height">172dp</dimen>
    <dimen name="zen_card_photo_gradient_height">70dp</dimen>
    <dimen name="zen_card_text_header_height">48dp</dimen>
    <dimen name="zen_card_sponsored_header_height">30dp</dimen>
    <dimen name="zen_card_logo_header_height">18dp</dimen>
    <dimen name="zen_card_feedback_back_height">36dp</dimen>
    <dimen name="zen_card_action_bar_height">50dp</dimen>
    <dimen name="zen_card_feedback_btn_width">45dp</dimen>
    <dimen name="zen_card_feedback_btn_with_padding_width">60dp</dimen>
    <dimen name="zen_card_text_y_when_folded">35dp</dimen>
    <dimen name="zen_card_video_feedback_btn_size">48dp</dimen>
    <dimen name="zen_card_feedback_btn_translation_y">-10dp</dimen>
    <dimen name="zen_card_content_subscribe_height">40dp</dimen>
    <dimen name="zen_card_content_subscribe_margin_bottom">18dp</dimen>
    <dimen name="zen_card_content_subscribe_bcg_width">1dp</dimen>
    <dimen name="zen_card_content_like_padding_side">24dp</dimen>
    <dimen name="zen_card_content_like_padding_bottom">15dp</dimen>
    <dimen name="zen_card_content_like_space">5dp</dimen>
    <dimen name="zen_card_content_share_block_height">90dp</dimen>
    <dimen name="zen_card_content_text_layout_margin_left">26dp</dimen>
    <dimen name="zen_card_content_text_layout_margin_right">24dp</dimen>
    <dimen name="zen_card_content_logo_margin_side">26dp</dimen>
    <dimen name="zen_card_content_domain_height">60dp</dimen>

    <dimen name="zen_list_footer_height">40dp</dimen>
    <dimen name="zen_list_header_logo_height">56dp</dimen>
    <dimen name="zen_header_height">56dp</dimen>
    <dimen name="zen_channel_header_padding_top">64dp</dimen> <!--zen_header_height + 8dp-->
    <dimen name="zen_header_animation_range">10dp</dimen>
    <dimen name="zen_channel_header_button_size">48dp</dimen>
    <dimen name="zen_subscriptions_navigation_card_height">56dp</dimen>
    <dimen name="zen_subscriptions_navigation_card_height_v3_step2">54dp</dimen>
    <dimen name="zen_subscriptions_rich_navigation_card_height">68dp</dimen>
    <dimen name="zen_subscriptions_rich_navigation_v2_step1_scroll_padding">16dp</dimen>
    <dimen name="zen_subscriptions_rich_navigation_v2_step2_scroll_padding">14dp</dimen>

    <dimen name="zen_browser_footer_height">59dp</dimen> <!--3dp progress bar + 56dp bottom bar-->
    <dimen name="zen_browser_header_height">56.5dp</dimen> <!--0.5dp delimeter + 56dp top bar-->
    <dimen name="zen_browser_bottom_bar_height">56dp</dimen>
    <dimen name="zen_browser_button_width">48dp</dimen>
    <dimen name="zen_browser_anim_dy">96dp</dimen>
    <dimen name="zen_sliding_sheet_header_button_width">36dp</dimen>
    <dimen name="zen_sliding_sheet_header_height">56dp</dimen>

    <color name="zen_webview_more_color">@android:color/transparent</color>
    <color name="zen_webview_feedback_default_color">@android:color/transparent</color>
    <color name="zen_webview_less_color">@android:color/transparent</color>

    <dimen name="zen_card_read_subscriptions_title_translation">-54dp</dimen>
    <dimen name="zen_card_read_subscriptions_button_padding">8dp</dimen>
    <dimen name="zen_card_read_subscriptions_subtitle_line_height">22sp</dimen>

    <dimen name="zen_card_ad_direct_text_margin_side">16dp</dimen>
    <dimen name="zen_card_ad_direct_body_text_size">13sp</dimen>
    <dimen name="zen_card_ad_direct_body_line_height">18dp</dimen>
    <dimen name="zen_card_ad_direct_warning_margin_top">8dp</dimen>
    <dimen name="zen_card_ad_direct_action_margin_top">10dp</dimen>
    <dimen name="zen_card_ad_direct_feedback_height">76dp</dimen>
    <dimen name="zen_card_ad_direct_title_text_size_design_v3">18sp</dimen>
    <dimen name="zen_card_ad_direct_title_line_spacing_extra_design_v3">4sp</dimen>
    <dimen name="zen_card_ad_direct_inner_radius_design_v3">20dp</dimen>
    <color name="zen_card_ad_direct_title_text_color_design_v3">@color/zen_card_title_text_color_design_v3_step2</color>
    <color name="zen_card_ad_direct_body_text_color_design_v3">@color/zen_card_body_text_color_design_v3_step2</color>
    <color name="zen_card_ad_direct_body_bcg_color_design_v3">#0000</color>
    <dimen name="zen_card_ad_direct_body_padding_bottom_small_design_v3">4dp</dimen>
    <dimen name="zen_card_ad_direct_body_padding_bottom_large_design_v3">16dp</dimen>
    <color name="zen_card_ad_direct_warning_text_color_design_v3">#80000000</color>
    <color name="zen_card_ad_direct_warning_bcg_color_design_v3">#E7E9EF</color>
    <dimen name="zen_card_ad_direct_header_height_design_v3">56dp</dimen>
    <dimen name="zen_card_ad_direct_footer_height_design_v3">48dp</dimen>
    <dimen name="zen_card_ad_direct_smart_media_corner_radius">16dp</dimen>
    <color name="zen_card_ad_direct_smart_media_image_background">#FFF</color>

    <dimen name="zen_direct_small_domain_margin_top">7dp</dimen>
    <dimen name="zen_direct_small_domain_margin_top_2">14dp</dimen>
    <dimen name="zen_direct_small_domain_margin_bottom">4dp</dimen>
    <dimen name="zen_direct_small_domain_margin_bottom_2">8dp</dimen>
    <dimen name="zen_direct_imperial_card_height">203dp</dimen>

    <color name="zen_popup_shadow_color">#80000000</color>
    <color name="zen_placeholder_color">#FFDAE8F3</color>

    <color name="zen_native_video_fade">#19000000</color>
    <color name="zen_native_video_fade_finished">#C0000000</color>
    <color name="zen_similar_video_controls_visibility_layer_shade_color">#33000000</color>
    <color name="zen_feed_pin_item_fade">#33000000</color>
    <color name="zen_native_video_fade_inactive">#99000000</color>
    <dimen name="zen_native_video_circle_button_size">68dp</dimen>
    <dimen name="zen_native_video_play_button_size">84dp</dimen>
    <dimen name="zen_native_video_play_button_margin_top">98dp</dimen>
    <dimen name="zen_native_video_play_button_margin_top_with_finished">73dp</dimen>
    <dimen name="zen_native_video_action_timer_size">84dp</dimen>
    <dimen name="zen_native_video_circle_button_margin_top">98dp</dimen>
    <dimen name="zen_native_video_circle_button_margin_top_with_finished">73dp</dimen>
    <dimen name="zen_native_video_card_title_margin_top">170dp</dimen>
    <color name="zen_video_rewind_circle_bcg">#1FFFFFFF</color>

    <bool name="zen_square_content_image_supported">true</bool>

    <color name="zen_feedback_card_color_darktheme">#7F000000</color>
    <color name="zen_feedback_card_color_lighttheme">#B2000000</color>
    <color name="zen_feedback_separator_color_darktheme">#3dffffff</color>
    <color name="zen_feedback_separator_color_lighttheme">#50ffffff</color>
    <color name="zen_feedback_sub_text_color_darktheme">#99FFFFFF</color>
    <color name="zen_feedback_sub_text_color_lighttheme">#80FFFFFF</color>

    <color name="zen_similar_header_text_color_darktheme">#FFFFFFFF</color>
    <color name="zen_similar_header_text_color_lighttheme">#FF000000</color>
    <color name="zen_saved_carousel_subtitle_text_color_darktheme">#80FFFFFF</color>
    <color name="zen_saved_carousel_subtitle_text_color_lighttheme">#80000000</color>
    <color name="zen_iceboard_title_text_color_darktheme">#FFFFFFFF</color>
    <color name="zen_iceboard_title_text_color_lighttheme">#FF000000</color>
    <color name="zen_iceboard_desc_text_color_darktheme">#99FFFFFF</color>
    <color name="zen_iceboard_desc_text_color_lighttheme">#99000000</color>

    <color name="zen_content_card_color">#FFFFFFFF</color>
    <color name="zen_content_card_color_nighttheme">#000000</color>
    <color name="zen_clear_card_color">#FFFFFFFF</color>
    <color name="zen_clear_card_color_nighttheme">#00000000</color>
    <color name="zen_clear_card_stroke_color">#0D000000</color>
    <color name="zen_card_content_text">#000000</color>
    <color name="zen_card_content_snippet">#CC000000</color>
    <color name="zen_stub_card_color">#F3F1ED</color>
    <color name="zen_stub_content_color">#5FFFFFFF</color>
    <color name="zen_card_video_bcg">#ffffff</color>
    <color name="zen_card_text_bcg">#F3F1ED</color>
    <color name="zen_card_text_bcg_design_v3">@color/zen_card_text_bcg</color>

    <color name="zen_all_background">#F9FAF9</color>
    <color name="zen_channel_feed_background">#F0F1F5</color>
    <color name="zen_all_transparent_background">#00FFFFFF</color>

    <drawable name="likes_up_redesign_v3">@drawable/likes_up</drawable>

    <!-- feed menu configuration -->
    <color name="zen_feed_menu_color">#FFFFFFFF</color>
    <color name="zen_switch_thumb_color_on">#0b75fb</color>
    <color name="zen_switch_thumb_color_off">#999999</color>
    <color name="zen_switch_track_color_on">#7db9fd</color>
    <color name="zen_switch_track_color_off">#bfbfbf</color>
    <dimen name="zen_feed_menu_padding_horizontal">@dimen/zen_multi_feed_side_margin</dimen>

    <!-- web-profile configuration -->
    <dimen name="zen_web_profile_login_side_padding">16dp</dimen>
    <dimen name="zen_web_profile_login_button_corner_radius">5dp</dimen>
    <color name="zen_web_profile_login_button_color">#FFCC00</color>
    <color name="zen_web_profile_stub_color">#F3F1ED</color>
    <color name="zen_web_profile_stub_slim_line_color">#DBD9D6</color>

    <!-- new posts button && swipe configuration -->
    <dimen name="zen_new_posts_height">40dp</dimen>
    <dimen name="zen_new_posts_shadow_delta">16dp</dimen>
    <dimen name="zen_new_posts_shadow_offset">4dp</dimen>
    <dimen name="zen_new_posts_top_margin">50dp</dimen>
    <dimen name="zen_new_posts_bot_margin">14dp</dimen>
    <color name="zen_new_posts_bcg_color_darktheme">#323232</color>
    <color name="zen_new_posts_text_color_darktheme">#FFFFFF</color>
    <bool  name="zen_new_posts_use_shadow_darktheme">false</bool>
    <color name="zen_new_posts_bcg_color_lighttheme">#323232</color>
    <color name="zen_new_posts_text_color_lighttheme">#FFFFFF</color>
    <bool  name="zen_new_posts_use_shadow_lighttheme">false</bool>
    <dimen name="feed_new_posts_large_text_size">16dp</dimen>
    <dimen name="feed_new_posts_large_text_padding">38dp</dimen>
    <dimen name="feed_new_posts_large_line_height">20dp</dimen>
    <dimen name="feed_new_posts_small_text_size">12dp</dimen>
    <dimen name="feed_new_posts_small_text_padding">26dp</dimen>
    <dimen name="feed_new_posts_small_line_height">16dp</dimen>
    <dimen name="feed_new_posts_nano_text_size">9dp</dimen>
    <dimen name="feed_new_posts_nano_line_height">11dp</dimen>
    <dimen name="feed_new_posts_nano_text_padding">26dp</dimen>
    <dimen name="feed_new_posts_pico_text_padding">26dp</dimen>
    <dimen name="feed_new_posts_up_button_width">40dp</dimen>
    <dimen name="feed_new_posts_button_corner_radius">12dp</dimen>
    <dimen name="feed_new_posts_button_corner_radius_big">20dp</dimen>

    <dimen name="feed_swipe_hint_text_size">12dp</dimen>
    <item name="feed_swipe_hint_translation_modifier" format="float" type="dimen">2.0</item>

    <color name="zen_swipe_hint_color_darktheme">#FFFFFFFF</color>
    <color name="zen_swipe_hint_color_lighttheme">#99000000</color>

    <color name="zen_button_pressed_tint_color">#161d1d1d</color>
    <color name="zen_text_tabs_selected_text_color_lighttheme">#e0000000</color>
    <color name="zen_text_tabs_selected_text_color_darktheme">#FFFFFFFF</color>
    <color name="zen_text_tabs_text_color_lighttheme">#80000000</color>
    <color name="zen_text_tabs_text_color_darktheme">#88FFFFFF</color>
    <color name="zen_badge_color">@color/zen_color_palette_red_logo</color>

    <!-- New design features -->
    <dimen name="zen_direct_card_title_default_text_size_one_col">24dp</dimen>
    <dimen name="zen_direct_card_title_default_text_size_two_col">24dp</dimen>
    <integer name="zen_card_face_table_measurer">@integer/measurer_none</integer>

    <dimen name="zen_feedback_text_size">13dp</dimen>
    <dimen name="zen_feedback_card_title_text_size">24dp</dimen>
    <dimen name="zen_feedback_card_button_side_margins">20dp</dimen>
    <dimen name="zen_feedback_card_description_side_margins">20dp</dimen>
    <dimen name="zen_feedback_button_vertical_padding">16dp</dimen>

    <dimen name="zen_video_activity_like_padding_side">15dp</dimen>
    <dimen name="zen_video_activity_like_height">42dp</dimen>
    <dimen name="zen_video_activity_like_width">45dp</dimen>
    <dimen name="zen_video_activity_like_space">12dp</dimen>
    <dimen name="zen_video_circle_button_size">84dp</dimen>
    <dimen name="zen_video_bug_margin_bottom">82dp</dimen>

    <!-- License card -->
    <dimen name="zen_license_text_size">12sp</dimen>
    <dimen name="zen_license_text_line_spacing_extra">8sp</dimen>
    <dimen name="zen_license_text_margin_bottom">8dp</dimen>

    <dimen name="zen_video_player_text_title_margin_bottom">8dp</dimen>

    <!-- TipView -->
    <dimen name="zen_tip_view_padding_horizontal">8dp</dimen>
    <color name="zen_tip_view_background_color">@android:color/black</color>
    <dimen name="zen_tip_view_arrow_size">16dp</dimen>
    <dimen name="zen_tip_view_text_padding_horizontal">16dp</dimen>
    <dimen name="zen_tip_view_text_padding_vertical">12dp</dimen>
    <dimen name="zen_tip_view_close_size">36dp</dimen>
    <dimen name="zen_tip_view_close_margin_start">8dp</dimen>

    <!--Subscription carousel-->
    <dimen name="zen_card_channel_carousel_button_background_radius">3dp</dimen>


    <!-- Menu activity -->
    <color name="zen_menu_activity_background">#FF000000</color>

    <!-- Channel header icons -->
    <dimen name="zen_channel_header_marker_size">18dp</dimen>
    <dimen name="zen_channel_header_social_link_size">18dp</dimen>

    <!-- Share menu -->
    <dimen name="zen_share_icon_size">40dp</dimen>
    <dimen name="zen_share_item_padding_horizontal">8dp</dimen>

    <!-- Share layout -->
    <dimen name="zen_share_layout_item_offset_x">40dp</dimen>
    <dimen name="zen_share_layout_item_offset_y">12dp</dimen>
    <dimen name="zen_share_app_icon">24dp</dimen>

    <color name="zen_bottom_sheet_bcg_color">#fff</color>
    <dimen name="zen_bottom_sheet_bcg_corner_radius">16dp</dimen>
    <dimen name="zen_bottom_sheet_container_padding_top">50dp</dimen> <!-- to limit max height -->

    <!-- Share block -->
    <dimen name="zen_share_block_icon_margin_horizontal">18dp</dimen>
    <dimen name="zen_share_block_more_text_height">14dp</dimen>
    <dimen name="zen_share_block_app_icon_size">25dp</dimen>

    <!-- Error screen -->
    <dimen name="zen_error_screen_title_vertical_margin">8dp</dimen>
    <dimen name="zen_error_screen_button_vertical_padding">15dp</dimen>
    <dimen name="zen_error_screen_button_horizontal_padding">@dimen/zen_multi_feed_side_margin</dimen>

    <dimen name="zen_card_content_text_layout_max_height" /> <!-- actually, used only in new design -->

    <!-- IBA menu -->
    <dimen name="zen_browser_menu_item_horizontal_padding">12dp</dimen>
    <dimen name="zen_browser_menu_item_vertical_padding">24dp</dimen>

    <!-- New icon -->
    <dimen name="zen_new_icon_header_width">28dp</dimen>
    <dimen name="zen_new_icon_header_logo_margin_start">52dp</dimen> <!-- zen_multi_feed_side_margin + zen_new_icon_header_width + 8dp -->

    <!-- Direct card no_snippet exp -->
    <dimen name="zen_ad_icon_size">60dp</dimen>
    <integer name="zen_ad_body_maxlines">2</integer>
    <integer name="zen_ad_warning_maxlines">2</integer>

    <!-- NativeVideoCardView -->
    <dimen name="zen_video_card_scroll_threshold">40dp</dimen>
    <dimen name="zen_video_card_spinner_stroke_width">2dp</dimen>
    <dimen name="zen_video_card_duration_margin_bottom">12dp</dimen>
    <dimen name="zen_video_card_duration_height">20dp</dimen>
    <dimen name="zen_video_card_angle_fade_size">184dp</dimen>

    <dimen name="zen_card_native_video_views_count_top_margin">6dp</dimen>
    <dimen name="zen_card_native_video_views_count_line_height">20dp</dimen>
    <dimen name="zen_card_native_video_views_count_text_size">14dp</dimen>

    <bool name="zen_is_tablet">false</bool>

    <!-- Two column -->
    <color name="zen_similar_two_column_bg">#333333</color>
    <dimen name="zen_similar_two_column_side_padding">16dp</dimen>
    <dimen name="zen_similar_two_column_margin_between_items">11dp</dimen>
    <dimen name="zen_similar_two_column_items_height">94dp</dimen>

    <!-- web sliding sheet panel -->
    <dimen name="zen_web_sliding_sheet_top_anchor_point_default">12dp</dimen>
    <dimen name="zen_web_sliding_sheet_bottom_anchor_point_default">40dp</dimen>
    <dimen name="zen_web_sliding_sheet_bottom_anchor_point_with_next_card">130dp</dimen>
    <dimen name="zen_web_sliding_sheet_next_card_spacing">32dp</dimen>
    <dimen name="zen_web_sliding_sheet_scroll_threshold">40dp</dimen>
    <dimen name="zen_web_sliding_sheet_card_corner_radius">24dp</dimen>
    <dimen name="zen_web_sliding_sheet_handle_width">56dp</dimen>
    <dimen name="zen_web_sliding_sheet_handle_height">4dp</dimen>
    <dimen name="zen_web_sliding_sheet_handle_offset">-8dp</dimen>
    <color name="zen_web_sliding_sheet_gray_bottom_inset_bcg">#66000000</color>
    <color name="zen_web_sliding_sheet_bcg">#fff</color>
    <color name="zen_web_browser_subscribe_tint">#000000</color>
    <color name="zen_web_browser_subscribed_tint">#b3b3b3</color>
    <item name="zen_web_browser_subscribe_alpha" format="float" type="dimen">1.0</item>
    <item name="zen_web_browser_subscribed_alpha" format="float" type="dimen">0.45</item>
    <item name="zen_web_browser_icon_foreground_alpha" format="float" type="dimen">0.05</item>
    <dimen name="zen_web_browser_scroll_threshold_for_hide_share">3dp</dimen>

    <!-- Game card -->
    <dimen name="zen_game_card_logo_and_title_margin_top">16dp</dimen>
    <dimen name="zen_game_card_button_margin_top">14dp</dimen>
    <dimen name="zen_game_card_button_width">120dp</dimen>
    <dimen name="zen_game_card_button_height">38dp</dimen>
    <dimen name="zen_game_card_rate_star_width">14dp</dimen>
    <dimen name="zen_game_card_rate_star_height">14dp</dimen>
    <dimen name="zen_game_card_rate_star_padding">1dp</dimen>
    <dimen name="zen_game_card_rate_star_margin_top">5dp</dimen>
    <dimen name="zen_game_card_logo_width">54dp</dimen>
    <dimen name="zen_game_card_logo_height">54dp</dimen>
    <dimen name="zen_game_card_fade_height">80dp</dimen>
    <dimen name="zen_game_card_rate_text_line_height">18dp</dimen>
    <dimen name="zen_game_card_rate_text_margin_top">2dp</dimen>

    <!-- call2action -->
    <dimen name="zen_cta_card_height">44dp</dimen>
    <color name="zen_cta_expand_again_state_background_color">#B3000000</color>
    <dimen name="zen_s2l_product_card_margin_side">12dp</dimen>

    <!-- Design components -->
    <dimen name="zen_card_component_title_container_vertical_padding">4dp</dimen>
    <dimen name="zen_card_component_title_container_horizontal_padding">16dp</dimen>
    <dimen name="zen_card_component_snippet_container_vertical_padding">2dp</dimen>
    <dimen name="zen_card_component_snippet_container_horizontal_padding">16dp</dimen>
    <dimen name="zen_complex_card_content_title_text_size">18sp</dimen>
    <dimen name="zen_complex_card_content_title_line_height">22sp</dimen>
    <dimen name="zen_text_card_content_design_v3_title_text_size">22sp</dimen>
    <dimen name="zen_text_card_content_design_v3_title_line_height">26sp</dimen>
    <dimen name="zen_card_component_snippet_text_size">14sp</dimen>
    <dimen name="zen_card_component_snippet_line_height">18sp</dimen>
    <dimen name="zen_card_component_header_horizontal_padding">16dp</dimen>
    <dimen name="zen_card_component_header_height">56dp</dimen>
    <dimen name="zen_card_component_header_large_icon_size">36dp</dimen>
    <dimen name="zen_card_component_header_large_icon_corners_radius">18dp</dimen> <!-- icon_size / 2 -->
    <dimen name="zen_card_component_header_medium_icon_size">24dp</dimen>
    <dimen name="zen_card_component_header_small_icon_size">16dp</dimen>
    <dimen name="zen_card_component_header_avatar_margin_start">16dp</dimen>
    <dimen name="zen_card_component_header_title_subtitle_margin">2dp</dimen>
    <dimen name="zen_card_component_header_m_title_text_size">18sp</dimen>
    <dimen name="zen_card_component_header_m_title_line_height">22sp</dimen>
    <dimen name="zen_card_component_card_header_m_title_text_size">16sp</dimen>
    <dimen name="zen_card_component_card_header_m_title_line_height">20sp</dimen>
    <dimen name="zen_card_component_card_header_m_menu_margin_end">12dp</dimen>
    <color name="zen_card_component_footer_background_color">#FFFFFF</color>
    <color name="zen_card_component_footer_empty_color">#80000000</color>
    <color name="zen_card_component_footer_text_color">#CC000000</color>
    <color name="zen_card_component_footer_like_bcg_color">#00B341</color>
    <dimen name="zen_card_component_footer_image_size">24dp</dimen>
    <dimen name="zen_card_component_footer_image_corner_radius">12dp</dimen> <!-- Twice less than zen_card_component_footer_image_size -->
    <dimen name="zen_card_component_footer_image_stroke_width">2dp</dimen>
    <dimen name="zen_card_component_footer_height">48dp</dimen>
    <dimen name="zen_card_component_footer_icon_margin_start">18dp</dimen>
    <dimen name="zen_card_component_footer_icon_margin_vertical">12dp</dimen>
    <dimen name="zen_card_component_footer_dislike_margin_end">12dp</dimen>
    <color name="zen_card_component_footer_feedback_icons_tint_color">#000</color>

    <dimen name="zen_card_component_icon_size">40dp</dimen> <!-- 32dp icon + 4dp padding from each size -->
    <dimen name="zen_card_component_footer_feedback_icon_size">@dimen/zen_card_component_icon_size</dimen>
    <dimen name="zen_card_component_icon_padding">4dp</dimen>
    <dimen name="zen_card_component_footer_feedback_icon_padding">@dimen/zen_card_component_icon_padding</dimen>
    <dimen name="zen_card_component_header_icon_size">@dimen/zen_card_component_icon_size</dimen>
    <dimen name="zen_card_component_header_rating_icon_size">16dp</dimen>
    <color name="zen_card_component_space_divider_color">#E7E9EF</color>
    <dimen name="zen_card_component_space_4">4dp</dimen>
    <dimen name="zen_card_component_space_8">8dp</dimen>
    <dimen name="zen_card_component_space_12">12dp</dimen>
    <dimen name="zen_card_component_space_14">14dp</dimen>
    <dimen name="zen_card_component_space_16">16dp</dimen>
    <dimen name="zen_card_component_button_touch_extension">8dp</dimen>

    <dimen name="zen_card_component_snippet_with_button_bcg_corner_radius">12dp</dimen>
    <color name="zen_card_component_snippet_with_button_bcg_color">#F0F1F5</color>
    <dimen name="zen_card_component_button_bcg_corner_radius">44dp</dimen>
    <dimen name="zen_card_component_promo_rounded_background">30dp</dimen>

    <!-- card in design v3 step 2-->
    <color name="zen_card_background_color_design_v3_step2">#FFFFFF</color>
    <dimen name="zen_card_corner_radius_design_v3_step2">24dp</dimen>
    <dimen name="zen_card_spacing_design_v3_step2">12dp</dimen>
    <color name="zen_card_content_background_color_design_v3_step2">#F0F1F5</color>
    <color name="zen_card_title_text_color_design_v3_step2">#000000</color>
    <color name="zen_card_body_text_color_design_v3_step2">#CC000000</color>
    <dimen name="zen_card_content_inner_block_horizontal_margin">4dp</dimen>
    <dimen name="zen_card_content_inner_block_corner_radius">20dp</dimen>
    <dimen name="zen_card_direct_call_to_action_corners_radius">21dp</dimen>
    <dimen name="zen_card_content_corner_radius">0dp</dimen>
    <dimen name="zen_card_content_bottom_space_height">16dp</dimen>
    <dimen name="zen_card_content_video_layered_reversed_top_height">10dp</dimen>
    <dimen name="zen_card_content_video_layered_reversed_bottom_height">12dp</dimen>
    <dimen name="zen_card_content_news_bottom_height">8dp</dimen>
    <dimen name="zen_card_content_news_top_height">8dp</dimen>
    <dimen name="zen_card_small_stub_height">94dp</dimen>

    <!--auth card design v3 step 2-->
    <dimen name="zen_auth_card_button_margin_start">20dp</dimen>

    <!-- similar video card in design v3 step 2-->
    <color name="zen_similar_video_card_background_color">#000000</color>
    <color name="zen_similar_video_card_title_text_color">#CCFFFFFF</color>
    <color name="zen_similar_video_card_subtitle_text_color">#80FFFFFF</color>
    <color name="zen_similar_video_card_description_title_text_color">#99FFFFFF</color>
    <color name="zen_similar_video_card_description_body_text_color">#73FFFFFF</color>
    <color name="zen_similar_video_menu_tint_color">#CCFFFFFF</color>
    <color name="zen_similar_video_feedback_button_tint_color">#CCFFFFFF</color>
    <color name="zen_similar_video_feedback_comment_text_color">#99FFFFFF</color>
    <color name="zen_similar_video_feedback_no_comments_text_color">#80FFFFFF</color>
    <dimen name="zen_similar_video_card_corner_radius">0dp</dimen>

    <!-- pull-up animation -->
    <bool name="zen_pull_up_show_photo">false</bool>
    <integer name="zen_screen_size_large_small_edge">0</integer>
    <dimen name="zen_pull_up_title_size">24dp</dimen>
    <dimen name="zen_pull_up_title_line_height">28dp</dimen>
    <dimen name="zen_pull_up_title_small_size">24dp</dimen>
    <dimen name="zen_pull_up_title_small_line_height">28dp</dimen>
    <color name="zen_pull_up_title_color">#000000</color>
    <color name="zen_pull_up_no_image_color">#ffffff</color>

    <!-- pull-up layout -->
    <dimen name="zen_pull_up_layout_min_height">120dp</dimen>

    <!-- interview -->
    <dimen name="zenkit_inside_card_interview_top_margin">4dp</dimen>

    <!-- market model card-->
    <dimen name="zen_card_market_big_text_size">18sp</dimen>
    <dimen name="zen_card_market_text_size">14sp</dimen>
    <dimen name="zen_card_action_height">32dp</dimen>
    <dimen name="zen_card_market_small_text_size">12sp</dimen>
    <dimen name="zen_card_market_rating_corner_radius">4dp</dimen>
    <dimen name="zen_card_market_action_btn_size">36dp</dimen>
    <dimen name="zen_card_market_image_margin">64dp</dimen>
    <color name="zen_card_market_text_color">#808080</color>
    <color name="zen_card_market_rating_text_color">#FFFFFFFF</color>
    <color name="zen_card_market_rating_bcg_color">@color/zen_color_palette_grass</color>
    <color name="zen_card_market_price_text_color_red">#F13630</color>
    <color name="zen_card_market_price_text_color_black">#000000</color>
    <color name="zen_card_market_image_fade_color">#0F152562</color>
    <color name="zen_card_market_image_bcg_color">#FFFFFFFF</color>

    <!--  day/night palette  -->
    <color name="zen_color_palette_text_primary_day">#000000</color>
    <color name="zen_color_palette_text_primary_night">#CCFFFFFF</color>
    <color name="zen_color_palette_text_secondary_day">#CC000000</color>
    <color name="zen_color_palette_text_secondary_night">#99FFFFFF</color>
    <color name="zen_color_palette_text_tertiary_day">#80000000</color>
    <color name="zen_color_palette_text_tertiary_night">#73FFFFFF</color>
    <color name="zen_color_palette_text_quaternary_day">#4DFFFFFF</color>
    <color name="zen_color_palette_background_primary_day">#FFFFFF</color>
    <color name="zen_color_palette_background_primary_night">#111215</color>
    <color name="zen_color_palette_background_secondary_day">#F0F1F5</color>
    <color name="zen_color_palette_background_secondary_night">#1D1E22</color>
    <color name="zen_color_palette_background_quaternary_night">#2E2F34</color>
    <color name="zen_color_palette_background_neutral_grey_day">#F2F2F2</color>
    <color name="zen_color_palette_background_neutral_grey_night">#2E2F34</color>
    <color name="zen_color_palette_button_secondary_day">#F0F1F5</color>
    <color name="zen_color_palette_button_secondary_night">#2E2F34</color>
    <color name="zen_color_palette_accent_yellow_day">#FFCC00</color>
    <color name="zen_color_palette_accent_yellow_night">#FDDE55</color>
    <color name="zen_color_palette_accent_red_day">#FF3333</color>
    <color name="zen_color_palette_accent_red_night">#FB5C56</color>
    <color name="zen_color_palette_support_avatar_fade_day">#0D333333</color>
    <color name="zen_color_palette_support_avatar_fade_night">#0DFFFFFF</color>
    <color name="zen_color_palette_adaptive_blue_day">#0077FF</color>
    <color name="zen_color_palette_adaptive_blue_night">#56A8FC</color>

    <!--  strict palette  -->
    <color name="zen_color_palette_anthracite">#252630</color>
    <color name="zen_color_palette_grass">#1DB232</color>
    <color name="zen_color_palette_brick_1">#FF4200</color>
    <color name="zen_color_palette_white_absolute">#FFFFFF</color>
    <color name="zen_color_palette_dark_quaternary">#2E2F34</color>
    <color name="zen_color_palette_red_logo">#FF0000</color>
    <color name="zen_color_palette_fade_light">#4B000000</color>

    <!-- feed header profile -->
    <dimen name="zen_feed_header_profile_avatar_size">32dp</dimen>
    <dimen name="zen_feed_header_profile_avatar_corner_radius">16dp</dimen>
    <dimen name="zen_feed_header_profile_badge_min_size">16dp</dimen>
    <dimen name="zen_feed_header_profile_badge_padding_horizontal">4dp</dimen>
    <dimen name="zen_feed_header_profile_badge_extra_space">4dp</dimen> <!-- space outside profile image -->

    <!-- verified channel icon -->
    <dimen name="zen_verified_channel_icon_left_bound">4dp</dimen>
    <dimen name="zen_verified_channel_icon_right_bound">16dp</dimen>
    <dimen name="zen_verified_channel_icon_bottom_bound">12dp</dimen>
    <dimen name="zen_verified_channel_icon_relative_translation">1dp</dimen>

    <dimen name="zen_channel_header_icon_left_bound">8dp</dimen>
    <dimen name="zen_channel_header_icon_right_bound">26dp</dimen>
    <dimen name="zen_channel_header_icon_bottom_bound">18dp</dimen>

    <dimen name="zen_search_result_channel_header_icon_left_bound">6dp</dimen>
    <dimen name="zen_search_result_channel_header_icon_right_bound">18dp</dimen>
    <dimen name="zen_search_result_channel_header_icon_bottom_bound">12dp</dimen>
    <dimen name="zen_search_result_channel_header_icon_relative_translation">1dp</dimen>

    <!-- sharing stories -->
    <dimen name="zen_sharing_stories_top_title_margin">28dp</dimen>
    <dimen name="zen_sharing_stories_top_buttons_margin">16dp</dimen>
    <dimen name="zen_sharing_stories_half_space_between_buttons">10dp</dimen>
    <dimen name="zen_sharing_stories_button_image_size">48dp</dimen>
    <dimen name="zen_sharing_stories_button_image_padding">12dp</dimen>
    <dimen name="zen_sharing_stories_top_button_title_margin">4dp</dimen>
    <dimen name="zen_sharing_stories_bottom_buttons_space">32dp</dimen>
    <dimen name="zen_sharing_stories_back_button_bottom_margin">24dp</dimen>
    <dimen name="zen_sharing_stories_back_button_horizontal_margin">12dp</dimen>
    <dimen name="zen_sharing_stories_height">12dp</dimen>
    <dimen name="zen_sharing_stories_back_button_corner_radius">12dp</dimen>
    <dimen name="zen_sharing_stories_back_button_height">48dp</dimen>

    <dimen name="zen_sharing_stories_back_button_title_text_size">16sp</dimen>
    <dimen name="zen_sharing_stories_title_text_size">18sp</dimen>
    <dimen name="zen_sharing_stories_button_title_text_size">12sp</dimen>

    <color name="zen_sharing_stories_back_button_background_color">#F3F3F2</color>

    <!-- top zen panel -->
    <dimen name="zen_feed_top_panel_height">56dp</dimen>

    <color name="zen_ad_large_icon_view_tint">#0d000000</color>
    <dimen name="zen_card_component_ad_single_content_body_expandable_text_view_bottom_padding_dimen">14dp</dimen>

    <dimen name="zen_card_component_video_reversed_content_block_bottom_padding_dimen">16dp</dimen>
</resources>
`;