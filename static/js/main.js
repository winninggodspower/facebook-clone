$(document).ready(()=>{
    const SuggestionDiv = document.querySelector('.friend-suggestion');
    const FriendScrollLeftBtn = $('.slide-left')
    const FriendScrollRightBtn = $('.slide-right')

    const TimelineDiv = document.querySelector('header.timeline')
    const TimelineScrolllLeftBtn = $(TimelineDiv.querySelector('.scroll-right'));
    
    //setting event listeners the styled scroll bar
    const scrollSuggestion = new ScrollHorizontal(SuggestionDiv);
    FriendScrollLeftBtn.click(()=>{scrollSuggestion.ScrollLeft()})
    FriendScrollRightBtn.click(()=>{scrollSuggestion.ScrollRight()})

    //setting for the timeline scrolling
    const ScrollTimeline = new ScrollHorizontal(TimelineDiv);
    TimelineScrolllLeftBtn.click(()=>{ ScrollTimeline.ScrollRight() })

    function ScrollHorizontal(parent) {
        this.parent = parent;

        this.getScrollWidth = ()=> {
            let childDiv = this.parent.children[1];
            childDiv = $(childDiv);
            childDiv =  childDiv.css('width').slice(0,childDiv.length - 3)
            return childDiv;    
        }

        this.ScrollLeft = ()=>{
            let scrollWidth = this.getScrollWidth()
            this.parent.scrollBy(- scrollWidth,0)

        }
        
        this.ScrollRight = ()=>{
            let scrollWidth = this.getScrollWidth()
            this.parent.scrollBy(scrollWidth,0)

        }
    }


    //code for search bar
    const searchIcon = $('#search-icon');
    const searchBar = $('#search-bar');

    searchIcon.click(()=>{
        searchBar.css('display','block')
        console.log(searchBar.css('display'))
    })


})


