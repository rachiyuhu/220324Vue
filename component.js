Vue.component('memo-component',{
    props :['id'],
    template : `<div>
    <button @click="deletememo">X</button>
    <p>{{time}}</p>
    <div>`,
    data : function() {
        return  {
            time : new Date(),
        }
    },
    methods : {
        deletememo : function(){
            this.$emit("delete",this.id);
        }
    }
})