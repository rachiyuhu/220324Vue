

new Vue ({
    el:"#app",
    data : {
        id: 0, 
        title: '',
        memo : '',
        memolist : [{id:0, title:"미리 만든 제목", memo:"미리 만든 메모"}],
    },
    methods : {
        addMemo : function(){
            this.memolist.push( {id: this.id, title:this.title, memo:this.memo} );
            this.id+=1;
            this.title='';
            this.memo='';
        },
        deleteMemo : function(id) {
        
            let index=0;
    
            this.memolist.forEach( (element, i) => {
            
                if(element.id ==id) {
                    index = i;
                }
            });
            this.memolist.splice(index,1);
        }

    }
})


