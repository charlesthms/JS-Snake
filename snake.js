class Snake {
    x = 0
    y = 0
    color = lightGreen
    head = darkGreen
    dir = 2
    corp = []

    update() {
        let prev = { x: this.x, y: this.y }

        for (let i in this.corp) {
            // Déplace le corp du snake
            var current = this.corp[i]
            this.corp[i] = prev
            prev = current

            if (this.x == current.x && this.y == current.y){
                console.log('GAME OVER !')
                this.reset()
            }   
        }

        switch(this.dir){
            case 0:
                this.x -= 1
                break
            case 1:
                this.y -= 1
                break
            case 2:
                this.x += 1
                break
            case 3:
                this.y +=1
                break
        }

        this.x = this.lim(this.x)
        this.y = this.lim(this.y)
    }

    addCorp() {
        this.corp.push( { x: this.x-20, y: this.y-20 } )
    }

    lim(value) {
        if (value < 0) {
            value = tableSize
        } else if ( value >= tableSize) {
            value = 0
        }
        return value
    }

    reset() {
        this.x = 0
        this.y = 0
        this.corp = []
        apple.spawnApple()
    }
}