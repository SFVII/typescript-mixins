# Example

````
class Human {
    public legs = 2;
    public foot = 2;
    
    
    getFoots(){
        return this.foot;
    }
    
    getLegs() {
        return this.legs;
    }
}


class Woman {
    public wear : {
       clothe : 'dress' | 'skirt' | 'pants'
       footWear : 'socks' | 'shoes' | 'basket'
    }
    public clothes : 'dress' | 'skirt' | 'pants';
    public footWear: 'socks' | 'shoes' | 'basket';
}


class GirlCharacter extends Mixins(Human, [Woman]) {
    
    constructor(config = {
        clothe : 'dress',
        footWear : 'basket'
    }){
        this.wear = config;
        console.log(this.getLegs())
    }
    
}


const girl = new GirlCharacter();
console.log(girl.getLegs()) // will print 2
