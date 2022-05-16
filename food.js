function PaintBalls(i,j,center,n5,n15,n25){
    let rndnum=getRndInteger(1,4)
    console.log(rndnum)
    let color="white"
    let flag=false
    if(i%rnd_i==0&&j%rnd_j==0) {
    if(rndnum==1 && n15>0){
        color="pink"
        flag=true
    }
    if(rndnum==2 && n25>0){
        color="red"
        flag=true
    }
    if(rndnum==3 && n5>0){
        flag=true
    }
    if(flag) {
        context.beginPath();
        context.arc(center.x, center.y, 5, 0, 2 * Math.PI); // circle
        context.fillStyle = color; //color
        context.fill();
        food_counter++;
    }
    }
    if(color=="pink"){
        return 15
    }
    if(color=="red"){
        return 25
    }
    else{
        if(color=="white"&&flag)
            return 5
    }
    return 1
}
