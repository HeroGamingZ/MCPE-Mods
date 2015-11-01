ModPE.setFoodItem (483, "hamburger", 0, 1,"Hamburger", 4); //Burger recipe
Item.addShapedRecipe(462, 4, 0, [
 " x ",
 "azy",
 " x "
 ], ["x", 297, 0, "a", 351, 0, "z", 364, 0, "y", 351, 0])

function newLevel() {
 clientMessage(ChatColor.YELLOW+"Fast Food mod created by " ChatColor.BLUE+"@HeroGamingZ");
}
function procCmd(comand){
 var cmd = command.split("");
 if(cmd[0] == "recipe"){
  clientMessage(ChatColor.BLUE+"Food Recipes:");
  clientMessage(ChatColor.GREEN+"Hamburger:");
 }
}
