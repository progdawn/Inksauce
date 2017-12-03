//Carousel speed
$('.carousel').carousel({
    interval: 2000
})
//Subs collapse stuff
$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function(event) {
        event.stopPropagation();
        $(this)
            .parent().parent()
            .find(".collapse-row")
            .css({"padding-bottom":"6px"});
    }).on('hidden.bs.collapse', function(event) {
        event.stopPropagation();
        $(this)
            .parent().parent()
            .find(".collapse-row")
            .css({"padding-bottom":"0", "border":"none"});
    });
});      
//Initialize Brands datatable
$(document).ready(function (){
    $('#brandstable').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});
//Initialize Abilities datatable
$(document).ready(function (){
    $('#abilitiestable').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
});
//Initialize Gear and Weapons datatables
$(document).ready(function (){
    $('.tab-pane table').DataTable({
        "responsive": true,
        "paging":   false,
        "columnDefs": [ {
            "targets": 'nosort',
            "orderable": false
        } ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $($.fn.dataTable.tables({visible: true, api: true} )).DataTable()
            .columns.adjust()
            .responsive.recalc();
    }); 
    $('.nosort').removeClass('sorting_asc');
});
//Allow overall search for all tabbed tables
$(document).ready( function () {
    var tabbedTables = $('.tab-pane table').DataTable();
    $('#search-all').on('keyup', function () {
        tabbedTables.search( this.value ).draw();   
    });
} );

// Masonry stuff
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});

/*$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});*/



/*$(function () {

    var $container = $('.grid-sizer').masonry({
        itemSelector: '.grid-item',
        columnWidth: 200,
        percentPosition: true
    });

    // reveal initial images
    $container.masonryImagesReveal($('.grid').find('.item'));
});

$.fn.masonryImagesReveal = function ($items) {
    var msnry = this.data('masonry');
    var itemSelector = msnry.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(function (imgLoad, image) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $(image.img).parents(itemSelector);
        // un-hide item
        $item.show();
        // masonry does its thing
        msnry.appended($item);
    });

    return this;
};*/
//Handle resizing Gallery pictures
/*(function ($) {
    var $container = $('.grid'),
        colWidth = function () {
            var w = $container.width(), 
                columnNum = 1,
                columnWidth = 0;
            if (w > 1200) {
                columnNum  = 5;
            } else if (w > 900) {
                columnNum  = 4;
            } else if (w > 600) {
                columnNum  = 3;
            } else if (w > 300) {
                columnNum  = 2;
            }
            columnWidth = Math.floor(w/columnNum);
            $container.find('.item').each(function() {
                var $item = $(this),
                    multiplier_w = $item.attr('class').match(/item-w(\d)/),
                    multiplier_h = $item.attr('class').match(/item-h(\d)/),
                    width = multiplier_w ? columnWidth*multiplier_w[1]-4 : columnWidth-4,
                    height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-4 : columnWidth*0.5-4;
                $item.css({
                    width: width,
                    height: height
                });
            });
            return columnWidth;
        },
        isotope = function () {
            $container.isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: colWidth()
                }
            });
        };
    isotope();
    $(window).on('debouncedresize', isotope);
}(jQuery));*/
/*$(document).ready( function() {

  $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
});*/