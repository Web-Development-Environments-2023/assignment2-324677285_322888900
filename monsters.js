var blue_monster_img = new Image()
var pink_monster_img = new Image()
var yellow_monster_img = new Image();
var red_monster_img = new Image()
blue_monster_img.src = "media/blue_monster.png"
pink_monster_img.src = "media/pink_monster.jpg"
yellow_monster_img.src = "media/yellow_monster.png"
red_monster_img.src = "media/red_monster.jpg"
//TODO - add special monster

function drawMonsters(shold_move){

    if(shold_move)
        blue_monster_location= moveMonster(blue_monster_location)
    context.drawImage(blue_monster_img, blue_monster_location.i * 30 - 5, blue_monster_location.j * 30 - 5, 20, 20);
    if(number_of_monsters>1){
        if(shold_move)
            pink_monster_location= moveMonster(pink_monster_location)
        context.drawImage(pink_monster_img, pink_monster_location.i * 30 - 5, pink_monster_location.j * 30 - 5, 20, 20);
    }

    if(number_of_monsters>2){
        if(shold_move)
            red_monster_location= moveMonster(red_monster_location)
        context.drawImage(red_monster_img, red_monster_location.i * 30 - 5, red_monster_location.j * 30 - 5, 20, 20);
    }
    if(number_of_monsters>3){
        if(shold_move)
            yellow_monster_location= moveMonster(yellow_monster_location)
        context.drawImage(yellow_monster_img, yellow_monster_location.i * 30 - 5, yellow_monster_location.j * 30 - 5, 20, 20);
    }
}


function moveMonster(location){
    let rnd=getRndInteger(0,10)
    if(rnd>5)
        return moveRandom(location)
    let dist=Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j-shape.j,2))

    if (Math.sqrt(Math.pow(location.i-1-shape.i,2)+Math.pow(location.j-shape.j,2))<dist){
        if(board[location.i-1][location.j]!=='X') {
            location.i -= 1
            return location
        }
    }
    if (Math.sqrt(Math.pow(location.i+1-shape.i,2)+Math.pow(location.j-shape.j,2))<dist){
        if(board[location.i+1][location.j]!=='X') {
            location.i += 1
            return location

        }
    }
     if (Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j-1-shape.j,2))<dist){
        if(board[location.i][location.j-1]!=='X') {
            location.j -= 1
            return location

        }
    }
     if (Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j+1-shape.j,2))<dist){
        if(board[location.i][location.j+1]!=='X') {
            location.j += 1
            return location
        }
     }
     return location
}
function moveRandom(location){

        if(board[location.i-1][location.j]!=='X') {
            location.i -= 1
            return location
        }
        if(board[location.i+1][location.j]!=='X') {
            location.i += 1
            return location
    }
        if(board[location.i][location.j-1]!=='X') {
            location.j -= 1
            return location
    }
        if(board[location.i][location.j+1]!=='X') {
            location.j += 1
            return location
    }
    return location
}