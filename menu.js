

  var recommend = [2000, 15, 2000, 50, 400];
  var contentName = ["Calories(Kcal)","Saturated Fat(g)", "Salt(mg)", "Sugar(g)","Caffeine(mg)"];
    function coffee(id, name, desc ,contents, price){
      this.id = id;
      this.name = name;
      this.desc = desc
      this.contents = contents;
      this.price = price;
      this.modifier = 0;
    }


    var espresso = new coffee(1, 'espresso',"Pure Espresso",[5,0,0,0,75],2.80);
    var americano = new coffee(2, 'americano', "Espresso with some hot water", [10,0,5,0,150],3.00);
    var cappuccino = new coffee(3, 'cappuccino', "Espresso with velvet-like milk foams",[110,3,70,8,75],3.50);
    var latte = new coffee(4, 'latte',"Espresso shot with warm milk", [180,5,115,13,75],3.50);
    var macchiato = new coffee(5, 'macchiato', "Espresso shot on vanlia syrup and milk, harmonized with sweet caramel drizzle",[200,5,130,22,75],3.80);

    var cafeMenu = [espresso, americano, cappuccino, latte, macchiato];
    // coffee 객체
    var check_coffee = [];
