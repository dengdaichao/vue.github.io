Vue.component("tabbar",{
    
    props:['activeIndex'],
    
    template:'<div class="footer"> \
                <ul> \
                    <li id="main" v-bind:class="{active:activeIndex==0}"> \
                        <a href="index.html"> \
                           <span class="tab-icon"></span> \
                           <span class="tab-title">首页</span> \
                        </a> \
                    </li> \
                    <li id="read" v-bind:class="{active:activeIndex==1}"> \
                        <a href="readList.html"> \
                           <span class="tab-icon"></span> \
                           <span class="tab-title">阅读</span> \
                        </a> \
                    </li> \
                    <li id="music" v-bind:class="{active:activeIndex==2}"> \
                        <a href="musicList.html"> \
                           <span class="tab-icon"></span> \
                           <span class="tab-title">音乐</span> \
                        </a> \
                    </li> \
                    <li id="movie" v-bind:class="{active:activeIndex==3}"> \
                        <a href="movieList.html"> \
                           <span class="tab-icon"></span> \
                           <span class="tab-title">影视</span> \
                        </a> \
                    </li> \
                </ul> \
            </div>'
})
