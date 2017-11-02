Vue.component("navigation",{
    
    props:['leftPath','leftSrc','title','rightPath','rightSrc'],
    template:'<div class="header"> \
            <div class="left"> \
                <a v-bind:href="leftPath"><img v-bind:src="leftSrc"/></a> \
            </div> \
            <div class="title"> \
                {{title}}  \
            </div> \
            <div class="right"> \
                <a v-bind:href="rightPath"><img v-bind:src="rightSrc"/></a> \
            </div> \
        </div>'
    
})
