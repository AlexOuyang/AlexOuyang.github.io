$(document).ready(function () {
    //slowly fade out loading image when the website loads
    $('#doc-loader').fadeOut('slow');

    $(window).load(function () {

        // Create bouncy effects for user profile
        $('#profile-image').addClass("animated bounceInDown");
        $('.social').addClass("animated bounceInUp");


    });


    // ProjectPage's carousel's image retaining period between transitions
    $('#slideshow').carousel({
        interval: 3000
    });

    // Hide the description on start up
    $('.project-description').hide();

    // Hover on top of project card to toggle description
    $('.project').hover(
        function () {
            if (!$('.project-description', this).is(':animated')) {
                //prevents a queue of hover events
                $('.project-description', this).slideDown("fast");
            }
        },
        function () {
            $('.project-description', this).slideUp("fast");
        }
    );
    // Click on project card to toggle description
    $('.project').click(
        function () {
            if (!$('.project-description', this).is(':animated')) {
                //prevents a queue of hover events
                $('.project-description', this).slideDown("fast");
            }
        },
        function () {
            $('.project-description', this).slideUp("fast");
        }
    );

    // Add shadow to the project when hover
    $(".project").hover(
        function () {
            $(".shadow", this).addClass("shadow-bottom");
        },
        function () {
            $(".shadow", this).removeClass("shadow-bottom");
        }
    );

    // Add hover animation to profile elements
    $(".social").hover(
        function () {
            if (!$('.social', this).is(':animated')) {
                //prevents a queue of hover events
                $(this).addClass("animated bounce");
            }
        },
        function () {
            $(this).removeClass("animated bounce");
        }
    );
    $("#profile-image").hover(
        function () {
            if (!$('#profile-image', this).is(':animated')) {
                //prevents a queue of hover events
                $(this).addClass("animated swing");
            }
        },
        function () {
            $(this).removeClass("animated bounce");
        }
    );

    /* smooth scrolling for scroll to top */
    //    $('.scroll-top').click(function () {
    //        $('body,html').animate({
    //            scrollTop: 0
    //        }, 1000);
    //    })

    $('.project').click(function () {
        if (!$('.project-description', this).is(':animated')) {
            //prevents a queue of hover events
            $('.project-description', this).slideDown("fast");
        }
    });
    $('#pinBoot').pinterest_grid({
        no_columns: 3,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 800
    });

    $('#gameSection').pinterest_grid({
        no_columns: 3,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 800
    });
});






/*
    Pinterest Grid Plugin
    Copyright 2014 Mediademons
    @author smm 16/04/2014

    usage:

     $(document).ready(function() {

        $('#blog-landing').pinterest_grid({
            no_columns: 4
        });

    });


*/
;
(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 800
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        // rearrange the projects on resize
        $(window).resize(function () {
            clearTimeout(resize_finish);
            resize_finish = setTimeout(function () {
                self.make_layout_change(self);
            }, 11);
        });

        self.make_layout_change(self);

        setTimeout(function () {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
        $article = $(this.element).children();

        if (single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function () {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function (index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if (single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for (var t = 0; t < columns; t++) {
                //                $this.removeClass('c'+t);
                $this.removeClass('c');
            }

            if (index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function (index) {
                if ($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if (single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top': top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for (var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c' + z).each(function () {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if ($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);