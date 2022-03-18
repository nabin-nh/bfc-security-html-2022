import jQuery from 'jquery'

jQuery('#searchBarToggler').on('click', function (e) {
    let searchFormWrapper = jQuery('.search-form-wrapper');

    if (searchFormWrapper.length < 1) {
        return;
    }

    searchFormWrapper.toggleClass('open');
});

jQuery('#searchBarToggler').on('click', function (e) {
    let topBar = jQuery('.top-bar');

    if (topBar.length < 1) {
        return;
    }

    topBar.toggleClass('open');
});