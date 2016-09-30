export default function smoothScroll(selector, autoActive = false) {
    const $document = $(document)
    const $body = $('html, body')

    const $trigger = $(selector)

    let $targets = {}
    $trigger.each((index,target) => {
        $targets[target.hash || "body"] = $(target.hash || "body")
    })

    $trigger.on('click', (e) => {
        $document.off('scroll')

        $trigger.removeClass('active')
        $(this).addClass('active')

        let hash = e.target.hash
        $body.stop().animate({
            'scrollTop': $targets[hash].offset().top + 2
        }, 500, 'swing')
    })

    let $menuItems = {}
    let menuTransition = false
    const activeMenu = function() {
        if(menuTransition) return

        let scrollTop = $document.scrollTop()
        $trigger.each((index, element) => {
            let hash = element.hash || "body"
            let $target = $targets[hash]

            let elementTop = $target.position().top - 100
            let elementBottom = $target.position().top + $target.height()

            // Cache for next query
            let $item = $menuItems[hash]
            if(!$item) {
                $menuItems[hash] = $item = $(element).parent()
            }

            $item.removeClass('is-active')

            if(elementTop <= scrollTop && elementBottom > scrollTop) {
                $item.addClass('is-active')
            }
        })

        // Prevent frequent call this method
        menuTransition = true
        setTimeout(() => { menuTransition = false }, 10)
    }

    if(autoActive) {
        window.addEventListener('scroll', activeMenu)
    }
}
