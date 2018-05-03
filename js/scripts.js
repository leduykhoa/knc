/**
 * Copyright © 2009-2017 Lê Duy Khoa. All rights reserved.
 * Mail: leduykhoa060690@gmail.com
 * Skype: leduykhoa060690
 * Website: web-fast.com
 * Mobile: +84973421508
 * Date: 2018/05/03
 * Time: 14:19
 */

jQuery(function () {
    let tableSize = 992;

    function coinHeader() {
        // Get width in
        let itemsWidth = 0;
        jQuery('.coin-header .block-item').each(function (index, dom) {
            itemsWidth += jQuery(dom).width();
        });

        // Get width out
        let coinHeader = jQuery('.coin-header');
        let coinHeaderWidth = coinHeader.width();

        // Check
        if (coinHeaderWidth < itemsWidth && tableSize > jQuery(window).width()) {
            coinHeader.addClass('coin-header-mobile');
        } else {
            coinHeader.removeClass('coin-header-mobile');
            coinHeader.removeClass('coin-header-mobile-active');
        }
    }

    jQuery('.coin-header .btn-menu').click(function () {
        let coinHeader = jQuery('.coin-header');
        if (coinHeader.hasClass('coin-header-mobile') && !coinHeader.hasClass('coin-header-mobile-active')) {
            coinHeader.addClass('coin-header-mobile-active');
        } else if (coinHeader.hasClass('coin-header-mobile') && coinHeader.hasClass('coin-header-mobile-active')) {
            coinHeader.removeClass('coin-header-mobile-active');
        }
    });

    // Window resize
    function formSearch() {
        let windowWidth = jQuery(window).width();
        if (windowWidth < tableSize) {
            jQuery('.search-key').hide();
        }else{
            jQuery('.search-key').show();
        }
    }

    let searchIsOpen = false;
    // Submit
    jQuery('.form-search').submit(function (event) {
        let searchKey = jQuery('.search-key').val();
        let windowWidth = jQuery(window).width();
        // Check is mobile mode and form is close
        if (searchIsOpen === false && windowWidth < tableSize) {
            jQuery('.search-key').show();
            searchIsOpen = true;
            event.preventDefault();
        }else if (searchIsOpen === true && windowWidth < tableSize) {
            jQuery('.search-key').hide();
            searchIsOpen = false;
            event.preventDefault();
        }else if (searchKey == '' || searchKey === undefined) {
            alert("Please input search!");
            event.preventDefault();
        }
    });

    // Esc press
    jQuery('.btn-search').on('keyup',function(event) {
        let windowWidth = jQuery(window).width();
        if (event.keyCode === 27 && windowWidth < tableSize) {
            jQuery('.search-key').hide();
            searchIsOpen = false;
            event.preventDefault();
        }
    });

    // On blur
    jQuery('.btn-search').blur(function(event) {
        let windowWidth = jQuery(window).width();
        if (windowWidth < tableSize) {
            jQuery('.search-key').hide();
            searchIsOpen = false;
            event.preventDefault();
        }
    });

    jQuery(window).on('resize', function () {
        coinHeader();
        formSearch();
    });
    coinHeader();
    formSearch();
});