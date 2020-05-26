class Apple{
    x = 0
    y = 0
    color = red

    spawnApple(corp){
        this.x = parseInt(Math.random() * tableSize)
        this.y = parseInt(Math.random() * tableSize)
        
        for (let i=0; i<corp.length; i++) {
            if (this.x === corp[i].x && this.y === corp[i].y) {
                this.spawnApple(corp) // Vérifie récursivement si les coordonées sont en dehors du corp
            }
        }
    }
}