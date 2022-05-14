
function drawMonsters(shold_move){
    let blue_monster_img = new Image()
    blue_monster_img.src = "media/blue_monster.png"
    let pink_monster_img = new Image()
    pink_monster_img.src = "media/pink_monster.jpg"
    let yellow_monster_img = new Image()
    yellow_monster_img.src = "media/yellow_monster.png"
    let red_monster_img = new Image()
    red_monster_img.src = "media/red_monster.jpg"
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
    let dist=Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j-shape.j,2))
    if (Math.sqrt(Math.pow(location.i-1-shape.i,2)+Math.pow(location.j-shape.j,2))<dist&&board[location.i-1,location.j]!=="X"){
        dist=Math.sqrt(Math.pow(location.i-1-shape.i,2)+Math.pow(location.j-shape.j,2))
        location.i-=1
    }
    else if (Math.sqrt(Math.pow(location.i+1-shape.i,2)+Math.pow(location.j-shape.j,2))<dist&&board[location.i+1,location.j]!=="X"){
        dist=Math.sqrt(Math.pow(location.i+1-shape.i,2)+Math.pow(location.j-shape.j,2))
        location.i+=1
    }
    else if (Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j-1-shape.j,2))<dist&&board[location.i,location.j-1]!=="X"){
        dist=Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j-1-shape.j,2))
        location.j-=1
    }
    else if (Math.sqrt(Math.pow(location.i-shape.i,2)+Math.pow(location.j+1-shape.j,2))<dist&&board[location.i,location.j+1]!=="X"){
        location.j+=1
    }
return location
}