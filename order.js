

  var recommend = [2000, 15, 2000, 50, 400];
  var contentName = ["Calories(Kcal)","Saturated Fat(g)", "Salt(mg)", "Sugar(g)","Caffeine(mg)"];
    function coffee(id, name, desc ,contents){
      this.id = id;
      this.name = name;
      this.desc = desc
      this.contents = contents;
    }
    var str ="";
    str = window.location.search;
    var array = str.split("/");

    var order_coffeeid = array[0];
    var order_coffeename = array[1];
    var order_contents = array[2];
    str=order_contents;

    var temp = str.split(",");


    if(order_coffeeid[1] == 1){
        var order_coffee = new coffee(order_coffeeid[1],order_coffeename,"Price : 2$",[Number(temp[0]),Number(temp[1]),Number(temp[2]),Number(temp[3]),Number(temp[4])]);
    }
    else if(order_coffeeid[1] == 2){
        var order_coffee = new coffee(order_coffeeid[1],order_coffeename,"Price : 3$",[Number(temp[0]),Number(temp[1]),Number(temp[2]),Number(temp[3]),Number(temp[4])]);
    }
    else if(order_coffeeid[1] == 3){
        var order_coffee = new coffee(order_coffeeid[1],order_coffeename,"Price : 3$",[Number(temp[0]),Number(temp[1]),Number(temp[2]),Number(temp[3]),Number(temp[4])]);
    }
    else if(order_coffeeid[1] == 4){
        var order_coffee = new coffee(order_coffeeid[1],order_coffeename,"Price : 4$",[Number(temp[0]),Number(temp[1]),Number(temp[2]),Number(temp[3]),Number(temp[4])]);
    }
    else{
        var order_coffee = new coffee(order_coffeeid[1],order_coffeename,"Price : 4$",[Number(temp[0]),Number(temp[1]),Number(temp[2]),Number(temp[3]),Number(temp[4])]);
    }

    // var order_coffee = new coffee(order_coffeeid[1],order_coffeename,"Price : 3$",[Number(temp[0]),Number(temp[1]),Number(temp[2]),Number(temp[3]),Number(temp[4])]);
    var cafeMenu = [order_coffee];
