AFRAME.registerComponent('rotate',{
    schema:{
        rotatey:{
            type:'number',default:0
        },
    },
    tick:function(){
        var pos = this.el.getAttribute('rotation')
            this.data.rotatey = this.data.rotatey+0.001

        var pos = this.el.getAttribute('rotation')
        pos.y = pos.y + this.data.rotatey
        this.el.setAttribute('rotation',{x:pos.x,y:pos.y,z:pos.z})
    },
    update:function(){
        window.addEventListener('click' ,e=>{
            this.data.clickCounter = this.data.clickCounter + 1
            if (this.data.clickCounter === 1){
                const rotation = {x:0,y:20,z:0}
                this.el.setAttribute('rotation',rotation)
            }
            else if(this.data.clickCounter === 2){
                const rotation = {x:0,y:100,z:0}
            }
        })
    }
})
